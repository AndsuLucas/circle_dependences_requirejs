define('src/update', ['src/form'], function(formModule){
	const $view = document.querySelector('.dataInfo');
	
	return new function updateModule(){
		const _this =  this;

		this.dataModel = {
			zipCode: ko.observable("")
		}

		this.hasCep = ko.computed(function(){
			return _this.dataModel.zipCode().trim().length != 0;
		});

		this.updateDataModel = function(zipCode){
			_this.dataModel.zipCode(zipCode);
		};

		this.refreshData = function() {
			const newZipCode = formModule.zipCode();
			_this.updateDataModel(newZipCode);
		}
		this.initialize = function(){
			console.log('Update module is initialized!');
			ko.applyBindings(_this, $view);
		};
	}

})