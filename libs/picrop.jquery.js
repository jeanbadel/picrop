/*!
* jQuery Picrop - Version: 20121227
* https://github.com/jeanbadel/picrop
* Copyright (c) 2012 JB. Delhommeau; Dual licensed: MIT/GPL
* Requires: jQuery v1.7 or later
*/

(function($){
	
	$.fn.Picrop = function(method){

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}

	};

	//Variables list
	var settings,
		els;

	var methods = {
		init : function( options ){
			settings = $.extend( {
				'fx'		: false,
				'duration'	: 200,
				'loader'	: 'loading'
			}, options);

			els = $(this),
			pics = els.find("img");

			methods.startHandle();

		},

		startHandle : function(){
			if(pics.length > 0){
				pics.not(".croped").hide();
				els.addClass(settings.loader);

				$(pics).each(function(){
					if(this.naturalWidth === 0){
						var src = $(this).data('src'),
							fx = $(this).data('fx');
						if(fx === undefined){
							fx = settings.fx;
						}
						if(!src){
							src = $(this).attr('src');
						}
						methods.loadPictures(src, fx, this);
					}else{
						methods.crop(this, settings.fx);
					}
				});
			}
		},

		loadPictures: function(src, fx, original){
			original.onload = function(){
				methods.crop($(this), fx);
			};
			original.src = src;
		},

		crop: function(pic, fx){

			var wrappic = pic.parent(), 
				wpic = pic.width(),
				hpic = pic.height(),
				wwpic = wrappic.width(),
				hhpic = wrappic.height(),
				hwpic = ((hpic * wwpic) / wpic),
				whpic = ((wpic * hhpic) / hpic);
			var duration = pic.data('duration');

			if(hwpic >= hhpic){
				var rectify = ((hwpic - hhpic) / 2);
				pic.width(wwpic)
				   .height(hwpic)
				   .css("margin-top", "-" + rectify + "px");
			}else if(whpic >= wwpic){
				var rectify = ((whpic - wwpic) / 2);
				pic.height(hhpic)
				   .width(whpic)
				   .css("margin-left", "-" + rectify + "px");
			}

			if(duration === undefined || isNaN(parseInt(duration))){
				duration = settings.duration;
			}

			wrappic.removeClass(settings.loader);
			if(fx !== false){
				pic.addClass("croped").fadeIn(duration);
			}else{
				pic.addClass("croped").show();
			}
		}
	};

})(jQuery);