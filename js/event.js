$(function(){
    // event area
    $("#load_btn").click(function(){
        $(".event_item").removeClass("hide");
        $("#load_btn").css("display", "none");
    });

    $(".ended > a").click(function(){
        alert("종료된 이벤트입니다.");
    });

    $(".event_item a").click(function(e){
        e.preventDefault();
    });
});