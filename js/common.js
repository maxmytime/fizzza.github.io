$(function() {

    $('.top-line').after('<div class="mobile-menu d-lg-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-button').click(function() {
        $('.mobile-menu').stop().slideToggle();
    });

    $(document).ready(function(){

        $('.slide-one').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText : ["",""],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

      });

      $('.slide-two').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navigation: true,
        navText : ["",""],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

      $(window).on("load",function(){

        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:"#navigation-menu a"
        });

    });

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 500000,
        max: 30000000,
        from: 200,
        postfix: " &#8381",
        step: 500000
    });

    $(".js-range-slider1").ionRangeSlider({
        skin: "round",
        min: 1,
        max: 6,
        from: 200,
        postfix: " мес."
    });

    $("#form-request-btn-1").click(function(e) {
        e.preventDefault();
        $("#company-info").removeClass('d-none');
        $("#company-select").addClass('d-none');

    })

    $("#company-reset").click(function(e) {
        e.preventDefault();
        $("#company-info").addClass('d-none');
        $("#company-select").removeClass('d-none');

    })

    if (window.location.search.length > 26) {

        $("#company-info").removeClass('d-none');
        $("#company-select").addClass('d-none');

        var companyName = decodeURI(window.location.search);
        companyName = companyName.match(/([^\?party=])+(?=&addres)/ig);
        companyName = companyName[0].replace(/\+/g," ");
        companyName = companyName.replace(/\%2F/g,"/");
        $('#party').val(companyName);
        $('.company-name').val(companyName);

        var addres = decodeURI(window.location.search);
        addres = addres.match(/([^\?=&addres])+(?=&inn)/ig);
        addres = addres[0].replace(/\+/g," ");
        addres = addres.replace(/2C/g,"");
        addres = addres.replace(/%/g,"");
        addres = addres.replace(/2F/g,"/");
        $('.addres').val(addres);

        var inn = decodeURI(window.location.search);
        inn = inn.match(/([^\?=&inn])+(?=&ogrn)/ig);
        inn = inn[0].replace(/\+/g," ");
        $('.inn').val(inn);

        var ogrn = decodeURI(window.location.search);
        ogrn = ogrn.match(/([^\?=&ogrn])+$/ig);
        ogrn = ogrn[0].replace(/\+/g," ");
        $('.ogrn').val(ogrn);
    }

    $(document).ready(function() {
        $('select').niceSelect();
      });

});



// console.log(decodeURI(window.location.search.length));

// var str1 = decodeURI(window.location.search);
// console.log(window.location.search.length));