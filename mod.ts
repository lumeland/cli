#!/usr/bin/env deno

const args = Array.from(Deno.args);

if (args[0] === "init") {
  args.shift();
  await run("run", "-A", "https://lume.land/init.ts", ...args);
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
    "--global",
    "https://deno.land/x/lume_cli/mod.ts",
  );
} else if (args[0] === "serve" || args[0] === "build") {
  await run("task", ...args);
} else {
  await run("task", "lume", ...args);
}

async function run(...args: string[]) {
  if (hasFlag("--drafts", args)) {
    Deno.env.set("LUME_DRAFTS", "true");
  }
  if (hasFlag("--debug", args)) {
    Deno.env.set("LUME_LOGS", "DEBUG");
  }
  if (hasFlag("--info", args)) {
    Deno.env.set("LUME_LOGS", "INFO");
  }
  if (hasFlag("--warning", args)) {
    Deno.env.set("LUME_LOGS", "WARNING");
  }
  if (hasFlag("--error", args)) {
    Deno.env.set("LUME_LOGS", "ERROR");
  }
  if (hasFlag("--critical", args)) {
    Deno.env.set("LUME_LOGS", "CRITICAL");
  }
  if (hasFlag("--no-cache", args)) {
    Deno.env.set("LUME_NOCACHE", "true");
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
