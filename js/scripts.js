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
function Order(name,pieces,price,size,crust,topping){
    this.name = name;
    this.pieces = pieces;
    this.price = price;
    this.size = size;
    this.crust= crust;
    this.topping= topping;
}

Order.prototype.pizzaprice = function(){
    if (this.size==="large") {
       return this.price; 
    } 
    else if(this.size === "medium"){
        return this.price/2;
    }
    else{
        //return this.price/4;
        console.log("error")
    }
}

Order.prototype.totalcost = function(){
    var sumtotal = this.pizzaprice();
    for (let i = 0; i < this.topping.length; i++) {
        if (this.topping[i]==="meatTop") {
            sumtotal += 300;
        }
        else if(this.topping[i]==="onions"){
            sumtotal += 100;
        }
        else if(this.topping[i]==="bacons"){
            sumtotal += 200;
        }
        else if(this.topping[i]==="greenpeppers"){
            sumtotal += 100;
        }
        else if(this.topping[i]==="pepperoni"){
            sumtotal += 200;
        }
        else if(this.topping[i]==="extracheese"){
            sumtotal += 200;
        }

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


//console.log(chicken.price)




$(document).ready(function(){
     
    $(".submitbtn").click(function(){
        $(".content1").slideToggle();
    })
      //  event.preventDefault();


    $(".chicken").submit(function(){
        var name = chicken.name
        var price = chicken.price
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = [];
        $('input[name="topping"]:checked').each(function() {
        topping.push($(this).val());
        });
        //toppings = topping.join()
        //topping = toppings[0].price;
        var order1 = new Order(name,pieces,price,size,crust,topping)
        $(".empty").append("<p>Chicken hawaiian + " +topping+"</p>")
        $("#total").html(order1.totalcost());
        //console.log(name,pieces,price,size,crust,topping)
        //console.log(order1.totalcost())
        event.preventDefault();
    })

})