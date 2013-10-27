App.Views.AddSwatch = Backbone.View.extend({
	el: '.add',

	events: {
		'click': 'addSwatch'
	},

	randomSwatch: function(){


		$.ajax({
			type: 'GET',
			url: 'http://www.colourlovers.com/api/colors/random',
			data: {'format':'json'},
			jsonp: 'jsonCallback',
			dataType: 'jsonp',
			success: function(data){
				$('#toolbar input').val('#'+data[0].hex);

			}
		});
	},
	addSwatch: function(e) {
		e.preventDefault();
		$('.error').hide();
		var newSwatchHex = $('#toolbar input').val();
		var newSwatchID = newSwatchHex.replace('#','');
		$.ajax({
			type: 'GET',
			url: 'http://www.colourlovers.com/api/color/'+newSwatchID,
			data: {'format':'json'},
			jsonp: 'jsonCallback',
			dataType: 'jsonp',
			context: this,
			success: function(data){
				if(data[0]){
					var newSwatchName = data[0].title;
					var swatch = new App.Models.Swatch({ hex: newSwatchHex, id: newSwatchID, name: newSwatchName});
					swatches.add(swatch);
					addSwatchView.randomSwatch();
				} else {
					$('.error').fadeIn();
				};
			},


		});

	}
});