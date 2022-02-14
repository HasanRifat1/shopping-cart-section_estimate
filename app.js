
//?...Phone Quantity Add,Minus........
let phone_decrease_btn = document.querySelector('#phone-decrease-btn');
let phone_increase_btn = document.querySelector('#phone-increase-btn');

//!...case Quantity Add,Minus........
let case_decrease_btn = document.querySelector('#case-decrease-btn');
let case_increase_btn = document.querySelector('#case-increase-btn');

//!....According to quantity total estimate.....
function btn_quantity(product,type,price){
    let quantity_field = document.querySelector('#'+product + '-quantity');
    let quantity_field_value=quantity_field.value;
    // console.log(quantity_field_value);
    if(type=='add'){
        quantity_field.value=parseInt(quantity_field_value)+1;
        quantity_field_value=quantity_field.value;

    }else if(type=='minus'){
        if(quantity_field_value>0){
            quantity_field.value=parseInt(quantity_field_value)-1;
            quantity_field_value=quantity_field.value;
        }
    }
    document.getElementById(product+'-price').innerText=quantity_field_value*price;

    // calculate total
    totalAmount();
}

//!....phone quantity.....
phone_increase_btn.addEventListener('click',function(){
    btn_quantity('phone','add',1219);
})
phone_decrease_btn.addEventListener('click',function(){
    btn_quantity('phone','minus',1219);
})
//!..case quantity...
case_increase_btn.addEventListener('click',function(){
    btn_quantity('case','add',59);
})
case_decrease_btn.addEventListener('click',function(){
    btn_quantity('case','minus',59);
})

function totalAmount(){
    let phone_totalAmount=document.querySelector('#phone-price').innerText;
    let case_totalAmount=document.querySelector('#case-price').innerText;
    let phone_case_totalAmount=parseInt(phone_totalAmount) + parseInt(case_totalAmount);
    let tax = phone_case_totalAmount/10;
    let totalAmount= phone_case_totalAmount+tax;

    //?...value pass to html
    document.querySelector('#sub-total').innerText = phone_case_totalAmount;
    document.querySelector('#tax').innerText = tax;
    document.querySelector('#total').innerText = totalAmount;
}


