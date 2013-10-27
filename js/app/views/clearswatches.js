App.Views.ClearSwatches = Backbone.View.extend({
	el: '.clear',

	events: {
		'click': 'clearAll'
	},

	clearAll: function(e) {
		e.preventDefault();
		this.collection.reset();
		$('#palette').html(swatchesView.render().el);




	}
});