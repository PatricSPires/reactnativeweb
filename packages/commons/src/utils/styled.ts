import styleSheetSerializer from 'jest-styled-components/src/styleSheetSerializer'

export function enableStyledComponentsSerializer() {
  expect.addSnapshotSerializer(styleSheetSerializer)
}
