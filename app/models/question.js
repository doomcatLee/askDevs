import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  answers: DS.hasMany('answer', {
    async: true
  })
});
