define('src/adapters/updateAdapter', [], function(){
	return new function UpdateAdapter(){
		const _this = this;
		require(['src/update'], function(updateModule){
			_this.module =  updateModule;
		});
	}

})