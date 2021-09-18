/*function displayMore(){
    var content = document.getElementsByClassName("content");
    var button = document.getElementsByClassName("submitbtn");
    if (content.style.display === "none") {
        button.innerHTML = "order"
        
    } else {
        button.innerHTML = "Add to order"
    }
    event.preventDefault();
}*/



$(document).ready(function(){
     
    $(".submitbtn").click(function(){
        $(".content1").slideToggle()
        $(".content2").slideToggle()
        $(".content3").slideToggle()
    })
        event.preventDefault();



})