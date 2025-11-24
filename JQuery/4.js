
        $(document).ready(function() {
            // 1. Hide button
            $('#hideBanner').click(function() {
                $('.banner').hide();
            });
            
            // 2. Show button
            $('#showBanner').click(function() {
                $('.banner').show();
            });
            
            // 3. Slide up/down toggle
            $('#slideToggle').click(function() {
                $('.banner').slideToggle();
            });
            
            // 4. Fade in/out toggle
            $('#fadeToggle').click(function() {
                $('.banner').fadeToggle();
            });
            
            // 5. Auto-rotate banners every 5 seconds
            var banners = $('.banner');
            var currentIndex = 0;
            
            banners.hide();
            $(banners[0]).fadeIn();
            
            setInterval(function() {
                $(banners[currentIndex]).fadeOut(function() {
                    currentIndex = (currentIndex + 1) % banners.length;
                    $(banners[currentIndex]).fadeIn();
                });
            }, 5000);
        });
