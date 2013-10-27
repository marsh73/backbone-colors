(function(){

// create NameSpace
// 
	window.App = {
		Models: {},
		Views: {},
		Collections: {}
	};

// Create Template Shortcut Function
// 

	window.template = function(id){
		return _.template( $('#'+id).html());
	};


})();