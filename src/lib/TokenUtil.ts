import { logger } from '@4lch4/logger'
import replacer from '@stdlib/string-replace'
import { ITokenMap, ITokenUtilOptions } from '../interfaces/index.js'
import { IOUtil } from './IOUtil.js'

/**
 * A utility class for replacing tokens in a string. Largely to be used when
 * initializing a project with the name, description, etc.
 */
export class TokenUtil {
  private ioUtil: IOUtil

  /**
   * Creates an instance of the TokenUtil class with the given properties.
   *
   * @param opts The object containing the properties to use for the TokenUtil class.
   */
  constructor(protected opts: ITokenUtilOptions) {
    this.ioUtil = new IOUtil(opts.projectDir)
  }

  public async replaceTokens(filename: string, tokenMap: ITokenMap): Promise<string> {
    const file = await this.ioUtil.readFile(filename)

    const tokenKeys = Object.keys(tokenMap)

    logger.info('Replacing following tokens with their values:')

    for (const key of tokenKeys) {
      logger.info(`  ${key} - ${tokenMap[key]}`)
    }

    const updatedContent = tokenKeys.reduce((acc, key) => {
      return replacer(acc, `${this.opts.tokenPrefix}${key}${this.opts.tokenSuffix}`, tokenMap[key])
    }, file)

    await this.ioUtil.saveFile(filename, updatedContent)

    return updatedContent
  }
}
