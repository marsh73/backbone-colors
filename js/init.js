	swatches = new App.Collections.Swatches([
{
	hex: '#83A2C2',
	id: '83A2C2',
	name: 'Paper Water'
},
{
	hex: '#B02800',
	id: 'B02800',
	name: 'Warm Flame'
}
		]);
	var addSwatchView = new App.Views.AddSwatch({ collection: swatches});
	var clearswatches = new App.Views.ClearSwatches({collection: swatches});

	swatchesView = new App.Views.SwatchesView({collection: swatches});
	$('#palette').append(swatchesView.render().el);