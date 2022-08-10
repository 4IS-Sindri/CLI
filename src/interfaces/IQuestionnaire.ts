import { IInteraction } from './index.js'

/**
 * This interface defines the structure of a manifest file that determines what
 * questions to ask when initializing a new project. For example, if you want to
 * create a new API project, you'll need to ask for _at least_ the following
 * information (if not more):
 *
 * - Name of the API/project.
 * - Domain Name/URL of the API.
 * - API Prefix, such as `/api/v1`.
 * - Port to use for the API.
 * - Database connection information, if any.
 */
export interface IQuestionnaire {
  /**
   * The "safe" version of the application name. Safe meaning it could be
   * published to npm without issue.
   */
  name: string

  /**
   * A description of what the questionnaire is for, such as the project type.
   */
  description: string

  /** An array of interactions to prompt the user with. */
  interactions: IInteraction[]
}
