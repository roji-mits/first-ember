import DS from 'ember-data';

export default DS.Model.extend({
	title:DS.attr("string"),
	price:DS.attr("number")
  
}).reopenClass({
	FIXTURES:[
		{id:1, title:'Dell', price:23440},
		{id:2, title:'Acer', price:45000},
		{id:3, title:'HP', price:50000}

		]
	});
 