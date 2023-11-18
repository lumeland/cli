# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0] - Unreleased
### Added
- New option `--drafts` to set the env variable `LUME_SHOW_DRAFTS=true`.
- New option `--debug` to set the env variable `LUME_LOG_LEVEL=DEBUG`.
- New option `--info` to set the env variable `LUME_LOG_LEVEL=INFO`.
- New option `--warning` to set the env variable `LUME_LOG_LEVEL=WARNING`.
- New option `--error` to set the env variable `LUME_LOG_LEVEL=ERROR`.
- New option `--critical` to set the env variable `LUME_LOG_LEVEL=CRITICAL`.

### Changed
- Use `Deno.execPath()` to run the Deno command.

## [1.0.3] - 2023-05-21
### Changed
- Replace deprecated `Deno.run()` with `Deno.Command()`.

## [1.0.2] - 2023-01-14
### Fixed
- Added the `allow-env` permission (needed for npm packages).

## [1.0.1] - 2023-01-06
### Fixed
- Removed a `console.log`.

## [1.0.0] - 2023-01-06
First version

[2.0.0]: https://github.com/lumeland/cli/compare/v1.0.3...HEAD
[1.0.3]: https://github.com/lumeland/cli/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/lumeland/cli/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/lumeland/cli/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/lumeland/cli/releases/tag/v1.0.0
