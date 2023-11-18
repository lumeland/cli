#!/usr/bin/env deno

const args = Array.from(Deno.args);

if (args[0] === "init") {
  args.shift();
  await run("run", "-Ar", "https://deno.land/x/lume/init.ts", ...args);
} else if (args[0] === "upgrade-cli") {
  await run(
    "install",
    "--allow-run",
    "--allow-env",
    "--allow-read",
    "--name",
    "lume",
    "--force",
    "--reload",
    "https://deno.land/x/lume_cli/mod.ts",
  );
} else if (args[0] === "serve" || args[0] === "build") {
  await run("task", ...args);
} else {
  await run("task", "lume", ...args);
}

async function run(...args: string[]) {
  if (hasFlag("--drafts", args)) {
    Deno.env.set("LUME_SHOW_DRAFTS", "true");
  }
  if (hasFlag("--debug", args)) {
    Deno.env.set("LUME_LOG_LEVEL", "DEBUG");
  }
  if (hasFlag("--info", args)) {
    Deno.env.set("LUME_LOG_LEVEL", "INFO");
  }
  if (hasFlag("--warning", args)) {
    Deno.env.set("LUME_LOG_LEVEL", "WARNING");
  }
  if (hasFlag("--error", args)) {
    Deno.env.set("LUME_LOG_LEVEL", "ERROR");
  }
  if (hasFlag("--critical", args)) {
    Deno.env.set("LUME_LOG_LEVEL", "CRITICAL");
  }

  const command = new Deno.Command(Deno.execPath(), {
    args: args,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });

  await command.output();
}

function hasFlag(flag: string, args: string[]): boolean {
  if (args.includes(flag)) {
    args.splice(args.indexOf(flag), 1);
    return true;
  }
  return false;
}
