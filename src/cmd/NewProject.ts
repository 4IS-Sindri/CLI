// import { Command } from 'commander'
import { BaseCommand, Commander, ICommandInput } from '@4lch4/lt-commander'

export class NewProjectCmd extends BaseCommand {
  constructor() {
    super({
      name: 'new-project',
      description: 'Create a new project.',
      alias: ['np', 'prj']
    })
  }

  protected async run(_input: any): Promise<any> {
    this.log('Working?')
    this.log(JSON.stringify(_input, null, 2))
    return 'test'
  }

  protected override getCommandInputFields(): ICommandInput {
    return {
      args: [],
      flags: []
    }
  }

  override async build(): Promise<Commander.Command> {
    const command = this.initCommand()

    command.action(async () => this.run(command.args))

    // command.addArgument(new Commander.Argument(''))
    // command.addOption(new Commander.Option(''))

    return command
  }
}
