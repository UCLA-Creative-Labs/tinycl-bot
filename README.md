# Discord Bot Template
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Mergify Status][mergify-status]][mergify]

[mergify]: https://mergify.io
[mergify-status]: https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/UCLA-Creative-Labs/project&style=flat

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md). By participating, you are 
expected to uphold this code. Please report unacceptable behavior to uclacreatives@gmail.com.

## Getting Started

We use [`yarn`](https://classic.yarnpkg.com/en/docs/install#mac-stable) as our package manager.

### Creating a new Discord Bot

1. Clone the repository template

    ```
    $ git clone https://github.com/UCLA-Creative-Labs/discord-bot-template.git
    $ cd discord-bot-template
    $ yarn install
    ```

2. Register a new Discord Bot through [Discord's Developer Portal](https://discord.com/developers/):

    [Discord.js Tutorial](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

3. Set your environmental variables:
    - For development, create a file `.env` in the project's root directory and set the variables below
        - `dotenv` is used to handle environmental variables
    ```
    DISCORD_CLIENT_ID=YOUR_BOT_APPLICATION_ID_HERE
    DISCORD_TOKEN=YOUR_BOT_TOKEN_HERE
    ```

    *(Optional)*
    - Set an environmental variable for our Creative Labs Discord to deploy new commands without re-inviting the bot
    - Right click on our server name and click `Copy Server ID` to get the guild ID
    ```
    TEST_GUILD_ID=OUR_SERVER_ID
    ```

4. For development, you can watch files with:
    ```
    $ yarn dev
    ```

5. To deploy commands for the `TEST_GUILD_ID` server:
    ```
    $ yarn deploy
    ```

6. To build the TypeScript app into a JS distribution:
    ```
    $ yarn build
    ```

7. Finally, to run the production app:
    ```
    $ yarn start
    ```

## Creating new Slash commands

We recommend checking out [this tutorial](https://discordjs.guide/slash-commands/response-methods.html).

Some sample commands are set up in `./src/commands/`, including a simple reply and a modal popup.

New command `.ts` files should be imported in `./src/commands/index.ts`.

Feel free to contribute more samples of different types of commands and UI.

## Contributing

Thanks for your interest in contributing to `Project`! ❤️

Here's a quick guide on how to get started.

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the repository or checkout a branch; `master` is protected and is managed through our pipeline.
2. Create an issue and/or mark an existing one to let everyone know that you are working your magic ⚡️
3. Beep boop away!
4. **Before you push**, it's always a good idea to check that your changes follow our linter rules! Run `yarn lint` at the root directory and watch it judge your code. 
5. Stage, commit, and push your changes to make a [pull request](https://github.com/UCLA-Creative-Labs/project/pulls)!
6. A maintainer will review your code and if it passes all the checks, your contribution will be merged on to `master` 🥳

See [CONTRIBUTING.md](CONTRIBUTING.md) and [DESIGN_GUIDELINES.md](DESIGN_GUIDELINES.md) for more info.

## Getting Help

If you ever need help with a feature or bug fix, no worries! Feel free to mark the issue as `guidance` so that our maintainers can start thinking about a solution. If you are comfortable making a [draft pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request), you can also tag the Creative Labs team in a comment: `@UCLA-Creative-Labs/team`!

## License

[MIT](LICENSE.md)
