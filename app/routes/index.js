import Ember from 'ember';

var blogs = [{
  id: 1,
  name: "Alex",
  location: "San Francisco",
  content: "Estate"

}, {
  id: 2,
  name: "Taylor",
  location: "Seattle",
  content: "Condo"
}];

export default Ember.Route.extend({
  model() {
    return blogs;
  },
});
