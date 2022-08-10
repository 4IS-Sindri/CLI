import fs from 'fs-extra'
import { join } from 'path'
import { IQuestionnaire } from '../interfaces/index.js'
import { QUESTIONNAIRE_FILE_NAME } from './constants/index.js'

/**
 * A utility class for interacting with the file system. Largely used when
 * initializing a project and needing to interact with the questions file.
 */
export class IOUtil {
  /**
   * Instantiates a new IOUtil object, which is used to interact with the file
   * system.
   *
   * @param projectDir The directory that the project is being initialized in.
   */
  constructor(private projectDir: string) {}

  private getFilePath(filename: string): string {
    return join(this.projectDir, filename)
  }

  async readFile(filename: string): Promise<string> {
    return fs.readFile(this.getFilePath(filename), 'utf8')
  }

  async saveFile(filename: string, content: string): Promise<void> {
    return fs.writeFile(this.getFilePath(filename), content)
  }

  async loadQuestionnaire(filename: string = QUESTIONNAIRE_FILE_NAME): Promise<IQuestionnaire> {
    return fs.readJSON(this.getFilePath(filename))
  }
}
