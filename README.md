# Lume CLI

A simple script to run Lume easily, without the need to type
`deno task lume [whatever]`.

## Install

```sh
deno install --allow-run --allow-env --allow-read --name lume --force --reload https://deno.land/x/lume_cli/mod.ts
```

## Usage

- `lume init` will run the command
  `deno run -Ar https://deno.land/x/lume/init.ts` to initialize Lume in the
  current directory.
- `lume upgrade-cli` will upgrade this script to the latest version.
- Any other command is delegated to `deno task lume [...args]`. For example,
  `lume -s` will run `deno task lume -s`.
