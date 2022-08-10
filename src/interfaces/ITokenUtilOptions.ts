export interface ITokenUtilOptions {
  /** The directory containing the project config file. */
  projectDir: string

  /** The prefix before the name of a variable to replace. */
  tokenPrefix?: string

  /** The suffix after the name of a variable to replace. */
  tokenSuffix?: string
}
