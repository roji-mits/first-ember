import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		createProduct: function() {
			/*
			define empty product first


			var product = this.get('product') // as data submit...

			*/

			// this.store.createRecord();

			var data = {};
			data.title = this.get('title');
			data.price = this.get('price');



			this.store.createRecord('products',data).save().then(function() {
				alert("product added");
			}, function() {
				alert("error occured..");
			});


		}
	}
});
