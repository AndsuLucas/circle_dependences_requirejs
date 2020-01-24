define('src/form', ['src/adapters/updateAdapter'], function(updateAdapter){
	const $view = document.querySelector('.userInputSection');

	return {		
		zipCode: ko.observable(''),
		initialize: function(){
			console.log("The Form Module is initialized!");
			ko.applyBindings(this, $view);
		},

		sendZipCode: function(data) {
			updateAdapter.module.updateDataModel(data.zipCode());
		}
	}
})