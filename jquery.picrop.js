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
			$.error( 'Method ' +  method + ' does not exist on jQuery.picrop' );
		}

	};

	//Variables list
	var settings,
		els,
		cptcrop;

	var methods = {
		init : function( options ){
			settings = $.extend( {
				'fx'		: false,
				'duration'	: 400,
				'loader'	: 'loading',
				'dirx'		: 'center',
				'diry'		: 'center',
				'onCrop'	: function(){},
				'allCrop'	: function(){},
			}, options);

			els = $(this),
			pics = els.find("img");
			cptcrop = 0;

			methods.startHandle();
		},

		startHandle : function(){
			if(pics.length > 0){
				pics.not(".crop").hide();
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
						methods.crop($(this), settings.fx);
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
				wpic  = pic.width(),
				hpic  = pic.height(),
				wwpic = wrappic.width(),
				hhpic = wrappic.height(),
				hwpic = ((hpic * wwpic) / wpic),
				whpic = ((wpic * hhpic) / hpic),
				top   = 0,
				left  = 0;
			var duration = parseInt(pic.data('duration'));

			if(hwpic >= hhpic){
				var top = ((hwpic - hhpic) / 2);
				pic.width(wwpic)
				   .height(hwpic);
			}else if(whpic >= wwpic){
				var left = ((whpic - wwpic) / 2);
				pic.height(hhpic)
				   .width(whpic);
			}

			methods.cropDirection(pic, wrappic, top, left);

			if(duration === undefined || isNaN(duration)){
				duration = parseInt(settings.duration);
			}

			wrappic.removeClass(settings.loader);
			if(fx !== false){
				pic.addClass("crop").fadeIn(duration);
			}else{
				pic.addClass("crop").show();
			}

			settings.onCrop(pic, wrappic);
			methods.cropHandler();
		},

		cropHandler: function(){
			cptcrop++;
			if(cptcrop >= pics.length)
				settings.allCrop(pics, els);
		},

		cropDirection: function(pic, wrappic, top, left){
			var cdirx = (pic.data('dirx')!=undefined?pic.data('dirx'):settings.dirx),
				cdiry = (pic.data('diry')!=undefined?pic.data('diry'):settings.diry);

			switch (cdirx) {
				case 'center':
					left = left;
					break;
				case 'left':
					left = 0;
					break;
				case 'right':
					left = (pic.width()-wrappic.width());
					break;
				default:
					left = cdirx;
					break;
			}
			switch (cdiry) {
				case 'center':
					top = top;
					break;
				case 'top':
					top = 0;
					break;
				case 'bottom':
					top = (pic.height()-wrappic.height());
					break;
				default:
					top = cdiry;
					break;
			}
			pic.css("margin-top", "-" + top + "px").css("margin-left", "-" + left + "px");
		}
	};

})(jQuery);
