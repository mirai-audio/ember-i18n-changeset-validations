# ember-i18n-changeset-validations

_Adds support for ember-i18n to ember-changeset-validations_

`ember-i18n-changeset-validations` is a companion validation library to
`ember-changeset-validations`. 

This addon adds the ability to translate `ember-changeset-validation` messages
using the `ember-i18n` addon.

Since ember-changeset is required to use this addon, please see documentation there on how to use changeset

To install:

`ember install ember-i18n-changeset-validations`

This addon also provides `ember-changeset-validations` (and `ember-changeset`)
as dependencies.


## Translating Error Messages

In order to use internationalized error messages:

**note** make sure you replace `appName` with your apps name.

1. This module will replace the default messages defined in 
`ember-changeset-validations/utils/messages` with local translations from your
app, if they exist.
```javascript
// app/validations/messages
import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from 'appName/utils/application'; // replace appName

const { keys } = Object;
const i18n = application.instance.lookup('service:i18n');

let messages = {};
keys(defaultMessages).forEach(key => {
  let lookupKey = `errors.validations.${key}`; // customized i18n prefix key
  if (i18n.exists(lookupKey)) {
    messages[key] = i18n.t(lookupKey).toString(); // use the translation
  } else {
    messages[key] = defaultMessages[key];
  }
});

export default messages;
```

2. This instance initializer will set the `instance` on a utility module that
is used by the file above.
```javascript
// app/instance-initializers/application.js
import application from 'appName/utils/application'; // replace appName

/**
 * initialize runs upon app instance initialization. It simply set the instance.
 * `application.instance` is used by `app/validations/messages` to lookup the
 * i18n service so it can translate error messages.
 */
export function initialize(appInstance) {
  application.instance = appInstance;
}

export default {
  name: 'application',
  initialize
};
```

3. A utility module to keep track of the app instance.
```javascript
// app/utils/application.js
/**
 * Export an Object with the app instance set to null. Later initilized by
 * `app/instance-initializers/application` during application boot.
 *
 * Exports {Object} containing an `instance` member (null by default).
 */
export default {
  instance: null
};
```

4. An example of an `ember-i18n` translation file, showing a translation key 
that will replace the default "between" message from
`ember-changeset-validations`.

**Note** the typical double-brace `{{tokens}}` found in `ember-cp-validations` 
must be single-brace tokens in the translations in order to work.

```javascript
// app/locales/en/errors.js
export default {
  // ... other messages

  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  validations: {
    // ... other error key/values
    between: "{description} must be between{min} and {max} characters",
   // ... other error key/values
  }
};
```

An example Japanese validation message.
```javascript
// app/locales/ja/errors.js
export default {
  // ... other messages

  /* overrides for ember-changeset-validation messages
   * see: ember-changeset-validations/utils/messages
   */
  validations: {
    // ... other error key/values
    between: "{description}は{min}〜{max}文字の間でなければなりません",
   // ... other error key/values
  }
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

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`


## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
