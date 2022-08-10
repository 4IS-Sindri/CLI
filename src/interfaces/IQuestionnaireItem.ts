import { AnswerType, IChoiceItem } from './index.js'

/**
 * This interface defines the structure of a question/item in a questionnaire
 * for the user to answer when initializing a new project.
 */
export interface IQuestionnaireEntry {
  /**
   * The name of the property the question is for.
   *
   * For example, if the question is for "What is the current version of the API
   * in SemVer format?", the property name would be `version`:
   *
   * @example
   * name: version
   */
  name: string

  /** An optional description of what the property is for. */
  description?: string

  /** What type of object is the resulting answer? */
  type?: AnswerType

  /** The actual question to ask the user (via a prompt). */
  message: string

  /** An array of choices that are available to the user. */
  choices?: IChoiceItem[]

  /** The default value (if any) to use when asking the question. */
  default?: string | number | boolean
}
