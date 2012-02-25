	$(function() {
	
		function filterPath(string) {
			return string
			.replace(/^\//,'')
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
			.replace(/\/$/,'');
		}
	
		var locationPath = filterPath(location.pathname);
		var scrollElem = scrollableElement('html', 'body');
	
		// Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
		$('a[href*=#]').each(function() {
	
			// Ensure it's a same-page link
			var thisPath = filterPath(this.pathname) || locationPath;
			if (  locationPath == thisPath
				&& (location.hostname == this.hostname || !this.hostname)
				&& this.hash.replace(/#/,'') ) {
	
					// Ensure target exists
					var $target = $(this.hash), target = this.hash;
					if (target) {
	
						// Find location of target
						var targetOffset = $target.offset().top;
						$(this).click(function(event) {
	
							// Prevent jump-down
							event.preventDefault();
	
							// Animate to target
							$(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
	
								// Set hash in URL after animation successful
								location.hash = target;
	
							});
						});
					}
			}
	
		});
	
		// Use the first element that is "scrollable"  (cross-browser fix?)
		function scrollableElement(els) {
			for (var i = 0, argLength = arguments.length; i <argLength; i++) {
				var el = arguments[i],
				$scrollElement = $(el);
				if ($scrollElement.scrollTop()> 0) {
					return el;
				} else {
					$scrollElement.scrollTop(1);
					var isScrollable = $scrollElement.scrollTop()> 0;
					$scrollElement.scrollTop(0);
					if (isScrollable) {
						return el;
					}
				}
			}
			return [];
		}
	
	});
		
	// Cufon text replacememnt, add more elements to replace text with cufon generated text.
    // Cufon.replace('h1');
    // 
    //      Cufon.replace('h2', {
    //          textShadow: '#333 1px 1px 0px'
    //      });
    // 
    //      Cufon.replace('h3');
    // 
    //      Cufon.replace('h4');        
    //      
    //      Cufon.replace('.call');
    //      
    //      Cufon.replace('.calltoaction', {
    //          textShadow: '#333 1px 1px 0px'
    //      });
			
		
		//Nivo slider customization
        $(window).load(function() {
    	    $('#slider').nivoSlider({
                    effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
                    slices: 15, // For slice animations
                    boxCols: 8, // For box animations
                    boxRows: 4, // For box animations
                    animSpeed: 1000, // Slide transition speed
                    pauseTime: 3000, // How long each slide will show
                    startSlide: 0, // Set starting Slide (0 index)
                    directionNav: true, // Next & Prev navigation
                    directionNavHide: true, // Only show on hover
                    controlNav: false, // 1,2,3... navigation
                    controlNavThumbs: false, // Use thumbnails for Control Nav
                    controlNavThumbsFromRel: false, // Use image rel for thumbs
                    controlNavThumbsSearch: '.jpg', // Replace this with...
                    controlNavThumbsReplace: '_thumb.jpg', // ...this in thumb Image src
                    keyboardNav: true, // Use left & right arrows
                    pauseOnHover: true, // Stop animation while hovering
                    manualAdvance: false, // Force manual transitions
                    captionOpacity: 0.8, // Universal caption opacity
                    prevText: 'Anterior', // Prev directionNav text
                    nextText: 'Siguiente', // Next directionNav text
                    randomStart: false, // Start on a random slide
                    beforeChange: function(){}, // Triggers before a slide transition
                    afterChange: function(){}, // Triggers after a slide transition
                    slideshowEnd: function(){}, // Triggers after all slides have been shown
                    lastSlide: function(){}, // Triggers when last slide is shown
                    afterLoad: function(){} // Triggers when slider has loaded
                });
		});

			
$(document).ready(function() { 
				
}); 		
		


