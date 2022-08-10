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
    logger.info('InitCmd#run... args...')
    logger.info(JSON.stringify(args, null, 2))

    const tokenMap: { [key: string]: string } = {
      APP_NAME: 'APP_NAME-Placeholder',
      APP_DESCRIPTION: 'APP_DESCRIPTION-PlaceHolder',
      APP_DISPLAY_NAME: 'APP_DISPLAY_NAME-PlaceHolder',
      APP_VERSION: 'APP_VERSION-PlaceHolder',
      REPO_OWNER: 'REPO_OWNER-PlaceHolder',
      REPO_NAME: 'REPO_NAME-PlaceHolder'
    }

    logger.info('tokenMap before...')
    logger.info(JSON.stringify(tokenMap, null, 2))

    const tokenUtil = new TokenUtil(args[0])
    const ioUtil = new IOUtil(args[0])

    const { name, description, interactions } = await ioUtil.loadQuestionnaire()

    logger.info(`Beginning questionnaire for ${name}...`)
    logger.info(`Description: ${description}`)

    for (const interaction of interactions) {
      logger.info(
        `Processing ${interaction.questions.length} questions for ${interaction.filename}...`
      )

      for (const question of interaction.questions) {
        const answer = await inquirer.prompt<{ [key: string]: string }>({
          name: question.name,
          message: question.message,
          default: question.default,
          type: 'input'
        })

        const answerValue = answer[question.name]
        if (answerValue && answerValue.length > 0) {
          logger.success('answerValue && answerValue.length > 0')
          logger.success(`answerValue...`)
          logger.success(JSON.stringify(answerValue, null, 2))
          logger.success('question...')
          logger.success(JSON.stringify(question, null, 2))
        }
      }

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
    command.action(async () =>
      this.run(command.args).then(() => {
        logger.success('This is after the command has finished...')
      })
    )

    // command.addArgument(new Commander.Argument(''))
    // command.addOption(new Commander.Option(''))

    return command
  }
}
