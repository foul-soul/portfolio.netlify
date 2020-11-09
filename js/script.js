$(function() {
    "use strict";

    /*=========================================================================
    	Initializing stellar.js Plugin
    =========================================================================*/
    $('.section').stellar({
        horizontalScrolling: false
    });


    $(window).on('load', function() {

        $('body').addClass('loaded');


        /*=========================================================================
        	Portfolio Grid
        =========================================================================*/
        var grid = $('#portfolio-grid');
        grid.shuffle({
            itemSelector: '.item'
        });

        $('#portfolio-filters > ul > li > a').on('mouseenter', function(e) {
            e.preventDefault();
            var groupName = $(this).attr('data-group');
            $('#portfolio-filters > ul > li > a').removeClass('active');
            $(this).addClass('active');
            grid.shuffle('shuffle', groupName);
        });

        $('a.image-link').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });

    });

    $(window).on('load', function() {

        $('body').addClass('loaded');
        /*===============skill grid ==============*/

        var grid = $('#skill-grid');
        grid.shuffle({
            itemSelector: '.items'
        });

        $('#skill-filters > ul > li > a').on('mouseenter', function(e) {
            e.preventDefault();
            var groupName = $(this).attr('data-group');
            $('#skill-filters > ul > li > a').removeClass('active');
            $(this).addClass('active');
            grid.shuffle('shuffle', groupName);
        });

        $('a.image-links').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });

    });
    /*=========================================================================
    	Links Navigation System
    =========================================================================*/
    $('.front-person-links > ul > li > a[data-section]').on('click', function(e) {
        e.preventDefault();
        var section = $('#' + $(this).data('section'));

        if (section.size() != 0) {

            $('body').addClass('section-show');

            section.addClass('active');

        }

    });
    $('.close-btn').on('click', function() {
        $('body').removeClass('section-show');
        $('section.active').removeClass('active');
    });


    //contact button on about me//
    $('.simple-btn').on('click', function(e) {
        e.preventDefault();
        var section = $('#' + $(this).data('section'));

        if (section.size() != 0) {

            $('body').addClass('section-show');

            section.addClass('active');

        }

    });
    $('.close-btn').on('click', function() {
        $('body').removeClass('section-show');
        $('section.active').removeClass('active');
    });

    //manish kumar//
    $('.home-btn').on('click', function() {
        $('body').removeClass('section-show');
        $('section.active').removeClass('active');
    });


    /*=========================================================================
    	Skill Bar's Percent Initialization from attribute data-percent
    =========================================================================*/
    $('.skill-bar').each(function() {
        var $this = $(this),
            percent = parseInt($this.data('percent'), 10);

        $this.find('.bar').css('width', percent + '%');
    });

});