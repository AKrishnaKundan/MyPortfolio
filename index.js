$(document).ready(function(){

    $("#close").click(function(){
        $("#menu").show();
        $("#close").hide();
        $(".menu-list").slideUp();
    });

    $("#menu").click(function(){
        $("#close").show();
        $("#menu").hide();
        $(".menu-list").slideDown();        
    });
})