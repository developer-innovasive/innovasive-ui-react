import { filter } from 'lodash'

export function joinClassNames(classes: (string | undefined)[]): string {
  return filter(classes).join(' ')
}
