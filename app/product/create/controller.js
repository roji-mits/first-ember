import Ember from 'ember';

export default Ember.Controller.extend({
	product: {},
	actions:{
		createProduct: function () {
			var product= this.get('product');
			// body...
			this.store.createRecord('product', product).save().then(function(){
				swal("yep!", "its done", "success");
				
			}, function(){
				alert("error occored...");

				
			});
			
		}
	}
});
