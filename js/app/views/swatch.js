//Color View Model View
//

App.Views.SwatchView = Backbone.View.extend({
	tagName: 'div',
	className: 'swatch',

	template: template('colorTemplate'),

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	events: {
		'click .delete': 'destroy'
	},

	destroy: function(){
		this.model.destroy();
	},

	remove: function() {
		this.$el.remove();
	},


	render: function() {

		this.$el.html( this.template(this.model.toJSON()) );
		this.$el.css({background: this.model.get('hex')}).fadeIn().animate({top: 0}, 100);
		return this;
	}
});