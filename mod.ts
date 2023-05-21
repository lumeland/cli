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
    "--reload",
    "--force",
    "https://deno.land/x/lume_cli/mod.ts",
  );
} else {
  await run("task", "lume", ...args);
}

async function run(...args: string[]) {
  // TODO: use Deno.execPath() in the future (requires --allow-read)
  const command = new Deno.Command("deno", {
    args: args,
    stdin: "inherit",
    stdout: "inherit",
    stderr: "inherit",
  });

  await command.output();
}
