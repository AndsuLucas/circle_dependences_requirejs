//easy.define
require(['src/update', 'src/form', 'src/adapters/updateAdapter'], function(updateModule, formModule, update){
	updateModule.initialize();
	formModule.initialize();
	console.log(update);

});