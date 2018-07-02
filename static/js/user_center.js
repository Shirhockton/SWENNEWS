$(document).ready(function(){
    var slide_flag=false;
    var load_flag=false;
    $("body").niceScroll({cursorborder:"",cursorcolor:"#9D9D9D",boxzoom:true});
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



