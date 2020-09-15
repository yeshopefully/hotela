$(function(){

    new WOW().init();

    // no-drag
    $(".main_menu").addClass("no-drag");
    $(".user_menu").addClass("no-drag");
    $(".sub_menu").addClass("no-drag");
    $("#top_btn").addClass("no-drag");

    // gnb
    $("#logo").click(function(){
        window.location.replace("index.html");
    });
    $(".main_menu a").mouseover(function () {
        $(".sub_menu").css("display", "block").stop().delay(1).animate({opacity:1}, 300);
    });
    $(".sub_menu").mouseover(function () {
        $(".sub_menu").css("display", "block").stop().delay(1).animate({opacity:1}, 300);
    });
    $(".main_menu a").mouseout(function () {
        $(".sub_menu").stop().animate({opacity:0}, 300, function(){
            $(this).css("display", "");
        });
    });
    $(".sub_menu").mouseout(function () {
        $(".sub_menu").stop().animate({opacity:0}, 300, function(){
            $(this).css("display", "");
        });
    });
    
    // top btn
    $("#top_btn").click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
        return false;
    });
    $(window).scroll(function(){
        var t = $(window).scrollTop();
        if (t > 200) {
            $("#top_btn").fadeIn();
        } else {
            $("#top_btn").fadeOut();
        }
    })

    // main_area
    $('.main_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // branch_area
    var textAnim = false;
    $(window).scroll(function(){
        var t = $(window).scrollTop();
        if( t > 969 && !textAnim){
            textAnim = true;
            $(".text h2").textillate("in");
            $(".text h5").textillate("in");
            $(".text p").textillate("in");
        }
    })
    $(".text h2").textillate({
        in: {
            effect: "fadeIn"
        },
        type: "char",
        autoStart: false
    });
    $(".text h5").textillate({
        in: {
            effect: "fadeIn"
        },
        type: "char",
        autoStart: false
    });
    $(".text p").textillate({
        in: {
            effect: "fadeIn"
        },
        type: "word",
        autoStart: false
    });
    $(".content_item > div").click(function(){
        var thumb = $(this).find("img").attr("src");
        var origin = $(".item1 > img").attr("src");
        $(".item1 > img").attr("src", thumb);
        $(this).find("img").attr("src", origin);
    })

    // room_area
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // direct_area
    $("#check-in").datepicker(
        {
            numberOfMonths:1,
            showOtherMonths:true,
            selectOtherMonths:true
        }
    );
    $("#check-out").datepicker(
        {
            numberOfMonths:1,
            showOtherMonths:true,
            selectOtherMonths:true
        }
    );

})