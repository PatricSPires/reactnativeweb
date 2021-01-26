import { styleSheetSerializer } from 'jest-styled-components/serializer'
import { addSerializer } from 'jest-specific-snapshot'

export function enableStyledComponentsSerializer() {
  addSerializer(styleSheetSerializer)
}
