$(function () {
    var url = location.href;
    var idx = url.indexOf("param=");
    idx = url.substr(idx + 6, url.length - 1);
    if (idx == 0) {
        var st = $(".region_area").offset().top;
        $("html,body").stop().animate({
            scrollTop: st
        }, 500);
    }
    if (idx == 1) {
        var st = $(".nearby_area").offset().top;
        $("html,body").stop().animate({
            scrollTop: st
        }, 500);
    }

    // no-drag
    $("#findahotel_nav").addClass("no-drag");
    $(".map_img").addClass("no-drag");

    // findahotel nav
    $("#findahotel_nav").draggable();
    $("#findahotel_nav p").eq(0).click(function () {
        var st = $(".region_area").offset().top;
        $("html,body").stop().animate({
            scrollTop: st
        }, 500);
    });
    $("#findahotel_nav p").eq(1).click(function () {
        var st = $(".nearby_area").offset().top;
        $("html,body").stop().animate({
            scrollTop: st
        }, 500);
    });

    // nearby area
    $(".map_img").draggable(
        {
            revert:function(event,ui){
                if(event==false){
                    isRevert=false;
                    return true;
                }else{
                    isRevert=true;
                }
            }
        }
    );
});