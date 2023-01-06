#!/usr/bin/env deno

const args = Array.from(Deno.args);

if (args[0] === "init") {
  args.shift();
  await run("deno", "run", "-Ar", "https://deno.land/x/lume/init.ts", ...args);
} else if (args[0] === "upgrade-cli") {
  await run(
    "deno",
    "install",
    "--allow-run",
    "--name",
    "lume",
    "--reload",
    "--force",
    "https://deno.land/x/lume_cli/mod.ts",
  );
} else {
  await run("deno", "task", "lume", ...args);
}

async function run(...cmd: string[]) {
  const process = Deno.run({ cmd });
  return await process.status();
}
