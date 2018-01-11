# ember-i18n-changeset-validations

[![CircleCI](https://img.shields.io/circleci/project/github/mirai-audio/ember-i18n-changeset-validations/master.svg?style=flat-square)](https://circleci.com/gh/mirai-audio/ember-i18n-changeset-validations)
[![Coveralls branch](https://img.shields.io/coveralls/mirai-audio/ember-i18n-changeset-validations/master.svg?style=flat-square)](https://coveralls.io/github/mirai-audio/ember-i18n-changeset-validations?branch=master)
[![npm](https://img.shields.io/npm/v/ember-i18n-changeset-validations.svg)](https://www.npmjs.com/package/ember-i18n-changeset-validations)
[![Ember](https://img.shields.io/badge/Ember->=2.12-blue.svg?style=flat-square)](https://emberjs.com/)
[![Ember Observer Score](https://emberobserver.com/badges/ember-i18n-changeset-validations.svg)](https://emberobserver.com/addons/ember-i18n-changeset-validations)
[![David](https://img.shields.io/david/mirai-audio/ember-i18n-changeset-validations.svg?style=flat-square)](https://david-dm.org/mirai-audio/ember-i18n-changeset-validations)
[![David](https://img.shields.io/david/dev/mirai-audio/ember-i18n-changeset-validations.svg?style=flat-square)](https://david-dm.org/mirai-audio/ember-i18n-changeset-validations?type=dev)

_Adds support for ember-i18n to ember-changeset-validations_

`ember-i18n-changeset-validations` is a companion validation library to
`ember-changeset-validations`.  This addon adds the ability to translate
`ember-changeset-validation` messages using the `ember-i18n` addon.  Since 
`ember-changeset` is required to use this addon, please see [documentation 
there](https://github.com/poteto/ember-changeset) on how to use changeset.


## Usage

To install: `ember install ember-i18n-changeset-validations`.

This addon also provides `ember-changeset-validations` (and `ember-changeset`)
as dependencies.

Define `ember-i18n` translation files for the validation messages files in
`app/locales/<LANG_CODE>/validations.js` (where `LANG_CODE` is an ISO language
code).

An example of an `ember-i18n` translation file, showing a translation key 
that will replace the default "between" message from
`ember-changeset-validations`.

```javascript
// app/locales/en/validations.js
export default {
  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  between: "{description} must be between{min} and {max} characters",
};
```

An example of a Japanese validation message.

```javascript
// app/locales/ja/validations.js
export default {
  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  between: "{description}は{min}〜{max}文字の間でなければなりません",
};
```

For each locale (en & ja in this example), import the validations translation
module into the main `ember-i18n` manifest, located in 
`app/locales/<LANG_CODE>/translations.js`.

e.g English translations manifest file.

```javascript
// app/locales/en/validations.js
import validations from "./validations";
// other imports

export default {
  // other translation objects
  validations
};
```

e.g. Japanese translations manifest file.
```javascript
// app/locales/ja/validations.js
import validations from "./validations";
// other imports

export default {
  // other translation objects
  validations
};
```


## Installation

* `git clone <repository-url>` this repository
* `cd ember-i18n-changeset-validations`
* `yarn`


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember
  versions)
* `ember test`
* `ember test --server`


## Building

* `ember build`

For more information on using ember-cli, visit 
[https://ember-cli.com/](https://ember-cli.com/).
