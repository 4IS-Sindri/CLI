export interface IAppConfig {
  /**
   * The optional path to the directory where the app config file is located. If
   * none is provided then the default of $HOME/.config/sindri-cli.json will be
   * used.
   * 
   * @example
   * /home/user/.config/sindri
   */
  cfgDir?: string

  tokenPrefix: string
  tokenSuffix: string
}