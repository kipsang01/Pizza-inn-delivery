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
function Order(name,size,crust,topping){
    this.name = name;
    this.size = size;
    this.crust= crust;
    this.topping= topping;
}
Order.prototype.price = function(){
    if (this.size==large) {
       return this.Pizza.price; 
    } 
    else if(this.size == medium){
        return this.Pizza.price/2;
    }
    else{
        return this.Pizza.price/4
    }
}
function Pizza(name,price){
    this.name = name;
    this.price= price;
}
function Topping(name,price){
    this.name = name;
    this.price = price;
}

var chicken = new Pizza("Chicken hawaiian",1000);
var meat = new Pizza("Meat Deluxe",800);
var cheese = new Pizza("Cheese Burger",600);
var italian = new Pizza("Italian Pizza",1200);

var meatTop = new Topping("Meattop",300);
var onions = new Topping("Onion",100);
var bacon = new Topping("Bacon",200);
var greenpeppers = new Topping("Green Peppers",100);
var pepperoni = new Topping("Pepperoni",200);
var extracheese = new Topping("Extra Cheese",200);







$(document).ready(function(){
     
    $(".submitbtn").click(function(){
        $(".content1").slideToggle();
    })
        event.preventDefault();


    $("#form.chicken").submit(function(){
        event.preventDefault();
        var name = "Chicken hawaiian"
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var toppings = new Array();
        $('input[name="topping"]:checked').each(function() {
        toppings.push(this.value);
        });
    })

})