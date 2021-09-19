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
        return this.price/4;
    }
}

Order.prototype.totalcost = function(){
    //var summ = parseInt(this.pieces);
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



$(document).ready(function(){
     
    $(".submitbtn").click(function(){
        $(".content1").slideToggle();
    })
   
    var totalBudget = 0;
    $("#delivery").click(function(){
        if ($(this).is(":checked")) {
            $(".delivery_details").show();
            totalBudget += 100;
        } else {
            $(".delivery_details").hide();
            totalBudget -= 100;
        }
    })
        

    $(".chicken").submit(function(){
        event.preventDefault();
        var name = chicken.name
        var price = chicken.price
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = [];

        $('input[name="topping"]:checked').each(function() {
        topping.push($(this).val());
        });

        var order1 = new Order(name,pieces,price,size,crust,topping)
        $(".empty").append("<li>Chicken hawaiian + " +topping+" @ "+order1.totalcost()+"<span id ='rm'><i class='fa fa-times' aria-hidden='true'></i></span></li>");
       
         totalBudget += order1.totalcost();
         $("#total").text(totalBudget);

        $("#rm").click(function(){
            $(this).closest('li').remove();
            totalBudget -= order1.totalcost();
            $("#total").text(totalBudget);
        })
        $(this).each(function(){
            this.reset();
        });
    })
    $(".italian").submit(function(){
        event.preventDefault();
        var name = italian.name
        var price = italian.price
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = [];
        $('input[name="topping"]:checked').each(function() {
        topping.push($(this).val());
        });
      
        var order2 = new Order(name,pieces,price,size,crust,topping)
        $(".empty").append("<li>Italian pizza + " +topping+" @ "+order2.totalcost()+"<span id ='rm2'><i class='fa fa-times' aria-hidden='true'></i></span></li>")
        
        totalBudget += order2.totalcost();
        $("#total").text(totalBudget)

        $("#rm2").click(function(){
            $(this).closest('li').remove();
            totalBudget -= order2.totalcost();
            $("#total").text(totalBudget)
        })
        $(this).each(function(){
            this.reset();
        });
        
    })

    $(".cheese").submit(function(){
        event.preventDefault();
        var name = cheese.name
        var price = cheese.price
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = [];
        $('input[name="topping"]:checked').each(function() {
        topping.push($(this).val());
        });
      
        var order3 = new Order(name,pieces,price,size,crust,topping)
        $(".empty").append("<li>Cheese pizza + " +topping+" @ "+order3.totalcost()+"<span id ='rm3'><i class='fa fa-times' aria-hidden='true'></i></span></li>")
        
        totalBudget += order3.totalcost();
        $("#total").text(totalBudget)

        $("#rm3").click(function(){
            $(this).closest('li').remove();
            totalBudget -= order3.totalcost();
            $("#total").text(totalBudget)
        })
        $(this).each(function(){
            this.reset();
        });

        
    })

    $(".meaty").submit(function(){
        event.preventDefault();
        var name = meat.name
        var price = meat.price
        var pieces = $("#pieces").val();
        var size = $("input[name='size']:checked").val();
        var crust = $("input[name='crust']:checked").val();
        var topping = [];
        $('input[name="topping"]:checked').each(function() {
        topping.push($(this).val());
        });
      
        var order4 = new Order(name,pieces,price,size,crust,topping)
        $(".empty").append("<li>Meat pizza + " +topping+" @ "+order4.totalcost()+"<span id ='rm4'><i class='fa fa-times' aria-hidden='true'></i></span></li>")
        
        totalBudget += order4.totalcost();
        $("#total").text(totalBudget)
        $("#rm4").click(function(){
            $(this).closest('li').remove();
            totalBudget -= order4.totalcost();
            $("#total").text(totalBudget);
        })
        $(this).each(function(){
            this.reset();
        });

        
    })

})