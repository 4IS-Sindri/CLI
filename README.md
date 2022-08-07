[![Drone][Drone-Badge]][Drone-Project] [![Snyk][Snyk-Badge]][Snyk-Project] [![Prettier][Prettier-Badge]][Prettier-Project] [![NPM License][NPM-License-Badge]][NPM-Package-Page] [![NPM Version][NPM-Version-Badge]][NPM-Package-Page]

[![Discord][Discord-Badge]][Discord-Invite] [![Twitter-Profile][Twitter-Badge]][Twitter-Profile]

# Sindri/CLI

While working on Project Sindri I've come to a point where I'm doubting an API is the best solution. I'm going to try building it out as a CLI application first instead, and see where that gets me.

This CLI application will make starting a new project much easier by providing simple mechanics for creating templates that can then be turned into a full-fledged project.

## Dependencies

- `@4lch4/logger`
  - My personal logger library.
  - [NPM Page][0]
- `ansi-colors`
  - Used by `chalk` and `@4lch4/logger`.
  - [NPM Page][1]
- `chalk`
  - Useful for coloring output text.
  - [NPM Page][2]
- `dayjs`
  - An extremely lightweight date formatting library.
  - [NPM Page][3]
- `inquirer`
  - > "A collection of common interactive command line user interfaces."
  - In other words, it's what is responsible for prompting the user for input.
  - [NPM Page][4]
- `ora`
  - > "An elegant terminal spinner."
  - [NPM Page][5]

## Dev Dependencies

- `@types/inquirer`
  - Provides type data for the `inquirer` package.
  - [NPM Page][6]
- `@types/node`
  - Provides type data for the NodeJS runtime.
  - [NPM Page][7]
- `@types/ora`
  - Provides type data for the `ora` package.
  - [NPM Page][8]
- `prettier`
  - An opinionated code formatter.
  - [NPM Page][9]
- `typescript`
  - Ensures the same version of Typescript is used each time we transpile our code.
  - [NPM Page][10]

[0]: https://www.npmjs.com/package/@4lch4/logger
[1]: https://www.npmjs.com/package/ansi-colors
[2]: https://www.npmjs.com/package/chalk
[3]: https://www.npmjs.com/package/dayjs
[4]: https://www.npmjs.com/package/inquirer
[5]: https://www.npmjs.com/package/ora
[6]: https://www.npmjs.com/package/@types/inquirer
[7]: https://www.npmjs.com/package/@types/node
[8]: https://www.npmjs.com/package/@types/ora
[9]: https://www.npmjs.com/package/prettier
[10]: https://www.npmjs.com/package/typescript
[Drone-Badge]: https://img.shields.io/drone/build/Sindri/CLI?server=https%3A%2F%2Fdrone.4lch4.io&style=flat-square
[Drone-Project]: https://drone.4lch4.io/api/badges/Sindri/CLI/status.svg
[NPM-License-Badge]: https://flat.badgen.net/npm/license/@4lch4/sindri-cli
[NPM-Version-Badge]: https://flat.badgen.net/npm/v/@4lch4/sindri-cli
[NPM-Package-Page]: https://npmjs.com/package/@4lch4/sindri-cli
[Snyk-Badge]: https://img.shields.io/snyk/vulnerabilities/npm/@4lch4/sindri-cli?style=flat-square
[Snyk-Project]: https://app.snyk.io/org/alcha/project/d133e387-eb24-4d1a-b3a3-4e822197bff1
[Prettier-Badge]: https://flat.badgen.net/badge/code%20style/prettier/ff69b4
[Prettier-Project]: https://github.com/prettier/prettier
[Discord-Badge]: https://img.shields.io/discord/325504841541746688?color=7289DA&style=flat-square
[Discord-Invite]: https://discord.gg/W72x4Ks
[Twitter-Badge]: https://flat.badgen.net/twitter/follow/4lch4
[Twitter-Profile]: https://twitter.com/4lch4
