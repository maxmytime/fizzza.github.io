$(function() {

    $('.top-line').after('<div class="mobile-menu d-lg-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu').stop().slideToggle();
    });

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items:1,
            loop:true,
            margin:0,
            autoplay:true,
            autoplayTimeout:10000,
            autoplayHoverPause:true
        });

      });

      $(window).on("load",function(){

        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:"#navigation-menu a"
        });

    });
});
