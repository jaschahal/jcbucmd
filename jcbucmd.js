jQuery.fn.jcbucmd = function(settings) {
	  		settings = jQuery.extend({
	            cmd:'blur',
	            blurColor:'#666',
	            unblurColor:'#333',
	            blurHardness:'high' // low | high | medium
	        },settings);
	        var blurHardness = '4px';
	        if(settings.blurHardness == 'medium') {
	        	blurHardness = '7px';
	        }
	        if(settings.blurHardness == 'high') {
	        	blurHardness = '12px';
	        }
	  		var textSh = '0 0 '+blurHardness+' '+settings.blurColor;
  			return this.each(function(){
  				if(settings.cmd == 'blur') {
  					jQuery(this).css({color:'transparent',textShadow:textSh});
  				}

  				if(settings.cmd == 'unblur') {
  					jQuery(this).css({color:settings.unblurColor,textShadow:'none'});
  				}
  			});	
  		};