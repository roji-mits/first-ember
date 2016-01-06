import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteProduct: function(product) {
			product.deleteRecord();
		}
	}
});
