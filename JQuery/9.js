   // Using jQuery version 1.x
        jq1(document).ready(function($) {
            // 1. Version 1 - Carousel rotation
            var slides = ['.carousel'];
            var currentSlide = 0;
            
            $('#startCarousel').click(function() {
                setInterval(function() {
                    currentSlide = (currentSlide + 1) % 3;
                    $('.carousel').text('Carousel Slide ' + (currentSlide + 1));
                }, 2000);
            });
            
            // 3. Version 1 - Highlight active widget
            $('.widget').click(function() {
                $('.widget').removeClass('active');
                $(this).addClass('active');
            });
        });
        
        // Using jQuery version 3.x
        jQuery(document).ready(function($) {
            // 2. Version 2 - Modal popups
            $('#showModal').click(function() {
                $('.modal').fadeIn();
                $('.overlay').fadeIn();
            });
            
            $('#closeModal, .overlay').click(function() {
                $('.modal').fadeOut();
                $('.overlay').fadeOut();
            });
            
            // 4. Version 2 - Tooltips on hover
            $('.widget').hover(
                function(e) {
                    var tooltipText = $(this).attr('data-tooltip');
                    if (tooltipText) {
                        $('.tooltip').text(tooltipText).css({
                            top: e.pageY + 10,
                            left: e.pageX + 10
                        }).fadeIn();
                    }
                },
                function() {
                    $('.tooltip').fadeOut();
                }
            );
        });