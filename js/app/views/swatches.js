//CollectionView View
//

App.Views.SwatchesView = Backbone.View.extend({
	el: '#palette',


// Listen for events in the collection
	initialize: function() {
		this.collection.on('add', this.addOne, this);

	},
// Loop through collection and call addOne render function
	render: function(){
		this.collection.each(this.addOne, this);
		return this;
	},
// Create new Model View
	addOne: function(color){
		var clrV = new App.Views.SwatchView({model: color});
		this.$el.append(clrV.render().el);
	}

});