import path from 'path'
import fs from 'fs-extra'
import { QUESTIONNAIRE_FILE_NAME } from './constants/index.js'
import { IQuestionnaire } from '../interfaces/index.js'

/**
 * This is a utility class that provides methods for working with questions.
 * More specifically, it'll be used when initializing a new project and asking
 * the user questions about the project.
 */
export class QuestionsUtil {
  /**
   * Get the application/question manifest from the given directory, parse it,
   * and return the resulting object. The resulting object can be used to ask
   * the user the specified questions.
   */
  async getQuestionnaire(projectDir: string): Promise<IQuestionnaire> {
    try {
      const questionnairePath = path.join(projectDir, QUESTIONNAIRE_FILE_NAME)
      const questionnaireContent = await fs.readJSON(questionnairePath)

      return questionnaireContent
    } catch (error) {
      throw error
    }
  }
}
