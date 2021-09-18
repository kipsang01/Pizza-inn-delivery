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
    this.topping= [];
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

Order.prototype.total = function(){
    var sumtotal = this.name.price
    for (let i = 0; i < this.topping.length; i++) {
        sumtotal += this.topping[i];
    }
    return sumtotal;
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
      //  event.preventDefault();


    $(".chicken").submit(function(){
        var name = "Chicken hawaiian"
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = new Array();
        $('input[name="topping"]:checked').each(function() {
        topping.push(this.value);
        });
        //toppings = topping.join()
        var order1 = new Order(name,size,crust,topping)
        //console.log(name,pieces,size,crust,topping)
        console.log(order1)
        event.preventDefault();
    })

})