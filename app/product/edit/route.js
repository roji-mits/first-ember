import Ember from 'ember';

export default Ember.Route.extend({
	model:function () {
		return this.store.find("product", 213);
	}, 
	actions:{
		updateProduct: function(model) {
			
			model.save();
		}
	}
});
