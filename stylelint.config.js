/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'property-no-vendor-prefix': null,
    'selector-class-pattern': null, // после переноса от BEM к модулям удалить
    'custom-property-pattern': null,
  },
}
