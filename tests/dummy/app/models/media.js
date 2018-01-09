import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  title: attr('string'),
  url: attr('string'),
  insertedAt: attr('string'),
  updatedAt: attr('string')
});
