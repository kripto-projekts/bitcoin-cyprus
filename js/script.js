jQuery(function ($) {

    'use strict';

    // -------------------------------------------------------------
    //
    // -------------------------------------------------------------

    (function () {

    }());


    // -------------------------------------------------------------
    //  Sticky Menu
    // -------------------------------------------------------------

    (function () {

        $('#menu-wrapper').removeClass('sticky-menu');
        $(window).on('scroll', function () {
            if ($(document).scrollTop() > 150) {
                $('#menu-wrapper').addClass('sticky-menu');
            } else {
                $('#menu-wrapper').removeClass('sticky-menu');
            }
        });

    }());


    // -------------------------------------------------------------
    //  Sticky Menu Action
    // -------------------------------------------------------------

    (function () {


        $('#body-wrapper > div').waypoint(function (direction) {

            var $active = $(this);

            if (direction === "up") {
                $active = $active.prev();
            }

            var id = $active.attr('id');

            if (typeof(id) !== 'undefined') {
                $('#menu > ul > li').removeClass('active');
                $('#menu > ul > li').find('a[href="#' + id + '"]').parent().addClass('active');

            }

        }, {
            offset: 100 // Apply "stuck" when element 30px from top
        });


        $('#menu > .nav > li > a, .content-nav > a').on('click', function (e) {


            e.preventDefault();
            e.stopImmediatePropagation();

            var href = $(this).attr('href');

            if (href) {

                $(this).closest('.nav').find('>li').removeClass('active');
                $(this).parent().addClass('active');

                $('html, body').animate({
                    scrollTop: $(href).offset().top - ($('#menu-wrapper').outerHeight() + 5)
                }, 800);
            }

        });

        $('#menu-wrapper').removeClass('sticky-menu');
        $(window).on('scroll', function () {
            if ($(document).scrollTop() > 150) {
                $('#menu-wrapper').addClass('sticky-menu');
            } else {
                $('#menu-wrapper').removeClass('sticky-menu');
            }
        });

    }());




    // -------------------------------------------------------------
    //   Folding Setup
    // -------------------------------------------------------------
    (function () {

        var $bodyWrapper = '#body-wrapper';

        $($bodyWrapper).find('>div').addClass('top-indent').each(function (index) {
            $(this).css('z-index', index);
        });

        // because loop start with zero index :)
        $($bodyWrapper).find('>div:odd').addClass('left-top-fold even').find('>div').addClass('wraper-shadow-right');
        $($bodyWrapper).find('>div:even').addClass('right-top-fold odd').find('>div').addClass('wraper-shadow-left');

        // remove wrapper shadow from first item
        $($bodyWrapper).find('>div:first>div').removeClass('wraper-shadow-left');


    }());

    // -------------------------------------------------------------
    //   Menu Setup for 3D
    // -------------------------------------------------------------

    (function () {
        var $menuWrapper = '#menu';
        $($menuWrapper).find('>ul>li').each(function () {
            var $text = $.trim($(this).find('a').text());
            $(this).find('a').attr('data-title', $text);
        });
    }());

    // -------------------------------------------------------------
    // Map
    // -------------------------------------------------------------

    (function () {


        $(document).ready(function () {

            var pin = 'images/map_pin.png';
            var latlng = new google.maps.LatLng(59.327383, 18.06747);
            var mapOptions = {
                zoom       : 13,
                center     : latlng,
                scrollwheel: false
            };

            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            var marker = new google.maps.Marker({
                position: latlng,
                map     : map,
                icon    : pin
            });


            var contentString = '<div class="map-popover-content">Sweep</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });


        });
    }());


});