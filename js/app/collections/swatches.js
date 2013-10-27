//List of Colors Collection
//

App.Collections.Swatches = Backbone.Collection.extend({
	model: App.Models.Swatch,
	url: 'http://www.colourlovers.com/api/color'

});