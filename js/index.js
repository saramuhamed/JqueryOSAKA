


let aboutTop = $("#about").offset().top; 

$(window).scroll(function(){

    let wScroll  = $(window).scrollTop(); 


    if(wScroll > aboutTop )
    {
        $("nav").addClass("bg-black");
        $("#btnUp").fadeIn(700)
    }
    else
    {
        $("nav").removeClass("bg-black");
        $("#btnUp").fadeOut(700)

    }



})


$("#btnUp").click(function(){


    $("body,html").animate({scrollTop:'0'} , 2000)
})


$("a[href^='#']").click(function(){

    let aHref = $(this).attr("href"); 

    let tp = $(aHref).offset().top;
    $("body,html").animate({scrollTop:tp} , 1000)

})



$(document).ready(function(){ //loading screen 


    $("#loading").fadeOut(5000 , function(){

        $("body").css("overflow" , "auto")
    })
})


let listItems  = $("#options-box li");
listItems.eq(0).css("backgroundColor" , "black")
listItems.eq(1).css("backgroundColor" , "#09c")
listItems.eq(2).css("backgroundColor" , "#ff206e")
listItems.eq(3).css("backgroundColor" , "yellow")
listItems.eq(4).css("backgroundColor" , "rgba(255 , 0 , 0 ,0.99)")


listItems.click(function(){


    let col  =$(this).css("backgroundColor").replace('0.99' ,'0.7');

    $(".color").css("color" , col) 
})

$("#options-box i").click(function(){
    $(".colors-box").toggle(500);
})