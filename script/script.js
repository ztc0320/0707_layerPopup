/* eslint-disable */

$(function(){
    $("button.tabBtn").click(function(){
            /* tab button css */
        $("button.tabBtn").css({
                "border": "1px solid #aaa",
                "background-color": "#eee"
        });
        $(this).css({
                "background-color": "#fff",
                "border-bottom-color" : "#fff"
        });
            /* tab button css */

            /* tab button contents css*/
        $("div.tabContents").css({
           "display": "none"
        });
            /* 탭 버튼을 클릭했을 경우 클릭한 버튼의 data-link속성의 속성 값을
                가져와서 저장함 */
        var dataLink = $(this).attr("data-link");
        $("#" + dataLink).css({"display" : "block"})
            /* tab button contents css*/
    });    /* 멀티탭 구현 끝 */

        /* 모달 레이어 팝업 시작 */
    $(".popPoint").click(function(){
        $("div#layerBG").css({"display": "block"});
    });
    $("div#btnArea>button").click(function(){
        $("div#layerBG").css({"display": "none"});
    })
        /* 모달 레이어 팝업 끝 */

});
