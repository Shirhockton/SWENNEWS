var selected=1;
var create_flag=false;
$(document).ready(function(){
    var num=0;
    var angle=0;
    var slide_flag=false;
    $("body").niceScroll({cursorborder:"",cursorcolor:"#9D9D9D",boxzoom:true});

    createNews();
    $(".user").click(function(){
        if(!slide_flag)
        {
            $(".panel").slideDown("fast");
            slide_flag=true;
        }
        else{
            $(".panel").slideUp("fast");
            slide_flag=false;
        }
    });

});
function main_block_click(){
    $(".main_block").animate({
        top:'+=2000px',
    });
    var t=setTimeout("window.location.href=\"detail.html\"",500);
}
function newest_moouse_over() {
    if(1!=selected)
    {
        $(".newest").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function newest_moouse_out() {
    if(1==selected)
    {
        $(".newest").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".newest").css('background-image','url(../static/images/blank.png)')
    }
}
function newest_click() {
    selected=1;

    $(".hot").css('background-image','url(../static/images/blank.png)')
    $(".tagged").css('background-image','url(../static/images/blank.png)')
}
function hot_moouse_over() {
    if(2!=selected)
    {
        $(".hot").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function hot_moouse_out() {
    if(2==selected)
    {
        $(".hot").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".hot").css('background-image','url(../static/images/blank.png)')
    }
}
function hot_click() {
    selected=2;
    $(".newest").css('background-image','url(../static/images/blank.png)')
    $(".tagged").css('background-image','url(../static/images/blank.png)')
}
function tagged_moouse_over() {
    if(3!=selected)
    {
        $(".tagged").css('background-image','url(../static/images/buttonDown.png)')
    }
}
function tagged_moouse_out() {
    if(3==selected)
    {
        $(".tagged").css('background-image','url(../static/images/selectedBg.png)')
    }
    else
    {
        $(".tagged").css('background-image','url(../static/images/blank.png)')
    }
}
function tagged_click() {
    selected=3
    $(".newest").css('background-image','url(../static/images/blank.png)')
    $(".hot").css('background-image','url(../static/images/blank.png)')
}
function create_news() {
    if(!create_flag)
    {
        $(".shelter").css('display','block');
        $(".create_news").animate({
            top:'+=1013px'
        });
        $(".news_content").niceScroll({cursorborder:"",cursorcolor:"#cfcfcf",boxzoom:true});
        create_flag=true;
    }
    else
    {
        $(".shelter").css('display','none');
        $(".create_news").animate({
            top:'-=1013px'
        });
        create_flag=false;
    }

}
function user_center_click() {
    window.location.href="user_center.html"
}

function createNews() {
  $.getJSON("demo.json",function (data) {
      // alert("yeah")
      $.each(data,function (index,item) {
          // alert(index+item.title);
          $(".news_block_ul").append(
              "<li><div class='main_block' id='main_block_"+index+"'onmousedown='main_block_click()'>" +"<ul><li>"+
              "<span class='news_block_tag'>来自话题："+item.news_type+"</span></li>" +
              "<li><span class='news_block_title'>"+item.title+"</span></li>" +
              "<li><span class='news_block_content'>"+item.content+"</span></li>"+
              "<li><span class='news_block_author'>"+item.username+"</span></li>"+
              "<li><span class='news_block_date'>"+item.datetime+"</li>"+
              "</ul></div></li>"
          );
      })
  })
}
