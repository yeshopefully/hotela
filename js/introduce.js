$(function(){

    var url = location.href;
    var idx = url.indexOf("param=");
    idx  = url.substr(idx+6, url.length-1);
    if(idx == 0){
        var st = $(".history_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    }
    if(idx == 1){
        var st = $(".room_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    }
    if(idx == 2){
        var st = $(".facilities_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    }
    if(idx == 3){
        var st = $(".management_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    }

    // no-drag
    $("#introduce_nav").addClass("no-drag");

    // introduce nav
    $("#introduce_nav").draggable();
    $("#introduce_nav p").eq(0).click(function(){
        var st = $(".history_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    });
    $("#introduce_nav p").eq(1).click(function(){
        var st = $(".room_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    });
    $("#introduce_nav p").eq(2).click(function(){
        var st = $(".facilities_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    });
    $("#introduce_nav p").eq(3).click(function(){
        var st = $(".management_area").offset().top;
        $("html,body").stop().animate({scrollTop: st}, 500);
    });

    // facilities area
    $(".facil1").mouseenter(function(){
        $(".facil1 img").stop().animate({"left":"-400px"}, 2000);
        $(".facil1 .desc").stop().animate({"height":"300px", "margin-top":"90px"}, 1000);
        $(".facil1 .desc p").stop().animate({"opacity":1}, 1000);
    });
    $(".facil1").mouseleave(function(){
        $(".facil1 img").stop().animate({"left":""}, 2000);
        $(".facil1 .desc").stop().animate({"height":"100px", "margin-top":"190px"}, 1000);
        $(".facil1 .desc p").stop().animate({"opacity":""}, 1000);
    });
    $(".facil2").mouseenter(function(){
        $(".facil2 img").stop().animate({"left":"-400px"}, 2000);
        $(".facil2 .desc").stop().animate({"height":"300px", "margin-top":"90px"}, 1000);
        $(".facil2 .desc p").stop().animate({"opacity":1}, 1000);
    });
    $(".facil2").mouseleave(function(){
        $(".facil2 img").stop().animate({"left":""}, 2000);
        $(".facil2 .desc").stop().animate({"height":"100px", "margin-top":"190px"}, 1000);
        $(".facil2 .desc p").stop().animate({"opacity":""}, 1000);
    });
    $(".facil3").mouseenter(function(){
        $(".facil3 img").stop().animate({"left":"-400px"}, 2000);
        $(".facil3 .desc").stop().animate({"height":"300px", "margin-top":"90px"}, 1000);
        $(".facil3 .desc p").stop().animate({"opacity":1}, 1000);
    });
    $(".facil3").mouseleave(function(){
        $(".facil3 img").stop().animate({"left":""}, 2000);
        $(".facil3 .desc").stop().animate({"height":"100px", "margin-top":"190px"}, 1000);
        $(".facil3 .desc p").stop().animate({"opacity":""}, 1000);
    });

})