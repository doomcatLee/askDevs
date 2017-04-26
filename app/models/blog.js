import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  name: DS.attr(),
  location: DS.attr(),
  content: DS.attr()
});
