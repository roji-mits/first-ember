import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  price:DS.attr(),
}).reopenClass({
	FIXTURES:[
		{
			id: 213,
			title: "Arnold",
			price:123

		}
	]
});