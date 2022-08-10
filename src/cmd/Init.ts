// import { Command } from 'commander'
import { logger } from '@4lch4/logger'
import { BaseCommand, Commander } from '@4lch4/lt-commander'
import inquirer from 'inquirer'
import { IOUtil, QUESTIONNAIRE_FILE_NAME, TokenUtil } from '../lib/index.js'

export class InitCmd extends BaseCommand {
  constructor() {
    super({
      name: 'init',
      description: 'Initialize a new project.',
      alias: ['i']
    })
  }

  protected async run(args: any): Promise<any> {
    // const { args, flags } = await this.parse(Init)
    logger.info('args...')
    logger.info(JSON.stringify(args, null, 2))

    const tokenMap: { [key: string]: string } = {
      APP_NAME: 'hello-world',
      APP_DESCRIPTION: 'A simple hello world application.',
      APP_DISPLAY_NAME: 'Hello World',
      APP_VERSION: '0.0.1',
      REPO_OWNER: '4lch4',
      REPO_NAME: 'hello-world'
    }

    logger.info('tokenMap before...')
    logger.info(JSON.stringify(tokenMap, null, 2))

    const tokenUtil = new TokenUtil(args[0])
    const ioUtil = new IOUtil(args[0])

    const { questions } = await ioUtil.loadQuestionnaire()

    for (const question of questions) {
      const answer = await inquirer.prompt<{ [key: string]: string }>({
        name: question.name,
        message: question.message,
        default: question.default,
        type: 'input'
      })

      const answerValue = answer[question.name]
      if (answerValue && answerValue.length > 0) tokenMap[question.name] = answerValue

      // const answerValue = answer[iQuestion.name]
      // if (answerValue && answerValue.length > 0) tokenMap[iQuestion.name] = answerValue

      // for (const iQUestion of question) {
      //   const answer = await inquirer.prompt<{ [key: string]: string }>({
      //     name: name,
      //     message: question,
      //     type: 'input',
      //     default: defaultValue
      //   })

      //   const answerValue = answer[iQuestion.name]
      //   if (answerValue && answerValue.length > 0) tokenMap[iQuestion.name] = answerValue
      // }
    }

    logger.info('tokenMap after...')
    logger.info(JSON.stringify(tokenMap, null, 2))

    await tokenUtil.replaceTokens('package.json', tokenMap)
    // logger.info(`Found ${questionnaire.length} questions file...`)
    // logger.info(JSON.stringify(questions[0], null, 2))
  }

  // protected override getCommandInputFields(): ICommandInput {
  //   return {
  //     args: [],
  //     flags: []
  //   }
  // }

  override async build(): Promise<Commander.Command> {
    const command = this.initCommand()

    // command.addArgument()

    command.argument('[projectDir]', 'The directory containing the project to initialize.', '.')
    command.argument(
      '[questionnaireFile]',
      'The questionnaire file to use.',
      QUESTIONNAIRE_FILE_NAME
    )
    command.action(async () => this.run(command.args))

    // command.addArgument(new Commander.Argument(''))
    // command.addOption(new Commander.Option(''))

    return command
  }
}
