$(function(){

    var url = location.href;
    var idx = url.indexOf("param=");
    idx  = url.substr(idx+6, url.length-1);
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(idx).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(idx).addClass("active");

    //  reservation nav
    $("#reservation_nav").draggable();
    $("#reservation_nav p").eq(0).click(function(){
        var i = $(this).index()-1;
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(i).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    });
    $("#reservation_nav p").eq(1).click(function(){
        var i = $(this).index()-1;
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(i).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    });
    $("#reservation_nav p").eq(2).click(function(){
        var i = $(this).index()-1;
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(i).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    });
    $("#reservation_nav p").eq(3).click(function(){
        var i = $(this).index()-1;
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(i).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    });

    // no-drag
    $("#reservation_nav").addClass("no-drag");

    // reservation area
    $(".tabbtn_area a").click(function(e){
        e.preventDefault();
        var i = $(this).index();
        $(".tabbtn_area a").removeClass("active");
        $(this).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    })
    $("#date1, #date2, #date3").datepicker(
        {
            numberOfMonths:2,
            showOtherMonths:true,
            selectOtherMonths:true
        }
    );
    $("#date_w").datepicker(
        {
            numberOfMonths:1,
            showOtherMonths:true,
            selectOtherMonths:true
        }
    );
    $("#date_b").datepicker(
        {
            numberOfMonths:1,
            showOtherMonths:true,
            selectOtherMonths:true
        }
    );
})