$(document).ready(function(){

    console.log("ready");

    $(".menu-ham").click(function(){
        $(".nav-mobile-toggle").slideToggle("slow")
    });

    $(".fas").click(function(){

        $(".fas").toggleClass("fa-times");
    });
});