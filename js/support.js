$(function(){

    var url = location.href;
    var idx = url.indexOf("param=");
    idx  = url.substr(idx+6, url.length-1);
        $(".tabbtn_area a").removeClass("active");
        $(".tabbtn_area a").eq(idx).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(idx).addClass("active");

    $(".tabbtn_area a").click(function(e){
        e.preventDefault();
        var i = $(this).index();
        $(".tabbtn_area a").removeClass("active");
        $(this).addClass("active");
        $(".tab").removeClass("active");
        $(".tab").eq(i).addClass("active");
    })

    var contentHeight = new Array();
    var len = $(".board_content").length;
    for(var i=0; i<len; i++){
        contentHeight.push($(".board_content").eq(i).height());
    }
    console.log(contentHeight)
    $(".tab").css("display", "none");

    $(".board_content").height(0).css("transition", "height 0.5s");

    $(".board_title").click(function(){
        $("#ryan").removeClass("show");
        $(".board_title").find("h2, p").css("font-weight", "");
        $(".board_title").find("img").css("transform", "");
        $(".board_content").height(0);
        var tabIndex = $(this).parent().parent().index();
        var i = $(this).parent().index()+(tabIndex*5);
        // alert(i);
        var content = $(this).parent().find(".board_content");
        if(content.height() == 0){
            content.height(contentHeight[i]);
            $(this).find("h2, p").css("font-weight", "bold");
            $(this).find("img").css("transform", "rotate(180deg)");
            $(this).parent().find("#ryan").addClass("show");
        } else{
            content.height(0);
            $(this).find("h2, p").css("font-weight", "");
            $(this).find("img").css("transform", "");
            $("#ryan").removeClass("show");
        }
    })

})