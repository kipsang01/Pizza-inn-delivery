$(document).ready(function(){
     
    $(".submitbtn").click(function(){
        $(".content").toggle("slow",function(){$(".submitbtn").toggle()})
        event.preventDefault();
    })



})