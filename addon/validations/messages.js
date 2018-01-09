import defaultMessages from 'ember-changeset-validations/utils/messages';
import application from '../utils/application';

const { keys } = Object;
const i18n = application.instance.lookup('service:i18n');

let messages = {};
keys(defaultMessages).forEach(key => {
  let lookupKey = `validations.${key}`;
  if (i18n.exists(lookupKey)) {
    messages[key] = i18n.t(lookupKey).toString(); // use the translation
  } else {
    messages[key] = defaultMessages[key];
  }
});

export default messages;
