import { IQuestionnaireEntry } from './index.js'

export interface IInteraction {
  filename: string
  questions: IQuestionnaireEntry[]
}