	swatches = new App.Collections.Swatches([
{
	hex: '#6931891',
	id: '6931891',
	name: 'Too good to be true'
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