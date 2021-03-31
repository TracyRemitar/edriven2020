// Local Storage
let menu = [];
window.localStorage.setItem("inventory", JSON.stringify(menu));

// POPULATING THE SELECT
let i1 = document.getElementById('Item1');
let i2 = document.getElementById('Item2');
let i3 = document.getElementById('Item3');
let i4 = document.getElementById('Item4');
let foods = []
let foodimg = []

const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
const getData = async () => {
  const response = await fetch(request)
  const jsondata = response.json()
  return jsondata
}
getData()
  .then((value) => {
    let arrfoods = value.meals
    for (food of arrfoods){
      foods.push(food.strMeal)
      foodimg.push(food.strMealThumb)
      window.localStorage.setItem("foodimg", JSON.stringify(foodimg))
    }
    populate1()
    populate2()
    populate3()
    populate4()
  })
  .catch((err) => {
    console.log(err)
  })
  function populate1(){
    for (food of foods){
      let option = document.createElement('option')
      option.value = food
      option.innerHTML = food
      i1.appendChild(option)
    }
  }
  function populate2(){
    for (food of foods){
      let option = document.createElement('option')
      option.value = food
      option.innerHTML = food
      i2.appendChild(option)
    }
  }
  function populate3(){
    for (food of foods){
      let option = document.createElement('option')
      option.value = food
      option.innerHTML = food
      i3.appendChild(option)
    }
  }
  function populate4(){
    for (food of foods){
      let option = document.createElement('option')
      option.value = food
      option.innerHTML = food
      i4.appendChild(option)
    }
  }
// Calculating the Subtotal
let p1 = document.getElementById('Price1');
let q1 = document.getElementById('Quantity1');
let s1 = document.getElementById('Subtotal1');

let p2 = document.getElementById('Price2');
let q2 = document.getElementById('Quantity2');
let s2 = document.getElementById('Subtotal2');

let p3 = document.getElementById('Price3');
let q3 = document.getElementById('Quantity3');
let s3 = document.getElementById('Subtotal3');

let p4 = document.getElementById('Price4');
let q4 = document.getElementById('Quantity4');
let s4 = document.getElementById('Subtotal4');


  function calculateTotal1(){
    var subtotal = p1.value * q1.value;
    s1.value = subtotal.toFixed(2);
  }
  function calculateTotal2(){

    var subtotal = p2.value * q2.value;
    s2.value = subtotal.toFixed(2);
  }
  function calculateTotal3(){

    var subtotal = p3.value * q3.value;
    s3.value = subtotal.toFixed(2);
  }
  function calculateTotal4(){

    var subtotal = p4.value * q4.value;
    s4.value = subtotal.toFixed(2);
  }

// Counter (for the Number)
let counter = 0;
// Save Function
  function Save(){
    counter++;
    let ORnum = document.getElementById('ORnumber').value;
    let cusName = document.getElementById('CustomerName').value;
    var table = document.getElementById('tblcontent');
    var row = table.insertRow(table.rows.length);
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    var col3 = row.insertCell(2);
    var col4 = row.insertCell(3);
    var col5 = row.insertCell(4);
    let total = [s1.value , s2.value , s3.value , s4.value];
    // Number
    col1.innerHTML = counter;
    // OR Number
    col2.innerHTML = ORnum;
    // Customer Name
    if (cusName == "" || cusName == null){
      cusName = "Not Specified"
      col3.style.color = "red";
      col3.style.fontStyle = "italic";
      col3.innerHTML = cusName;
    }
    else{
      col3.innerHTML = cusName;
    }
    // Total
    let sum = 0;
    for (let x = 0; x <= total.length; x++){
      if (total[x] == null || total [x] == ""){
        continue;
      }
      else{
        sum = sum + parseFloat(total[x]);
      }
    }
    col4.innerHTML = "₱" + sum.toFixed(2);
    // View Button
    var btn = document.createElement("button")
    btn.innerHTML = "View";
    btn.style.backgroundColor = "orange";
    btn.style.color = "white";
    btn.style.borderRadius = "5px";
    var clickEvent = document.createAttribute("onclick") // **
    clickEvent.value = "getId(this)";
    btn.setAttributeNode(clickEvent);
    col5.appendChild(btn);
    // View Modal onclick Function;
    $(document).ready(function(){
      $(btn).click(function(){
        $("#view").modal();
        getId(this);
      });
    });

    // Save on Local Storage
    let newMenu = JSON.parse(localStorage.getItem("inventory")) || [];

    const list = {
      orderNumber : ORnum,
      customerName : cusName,
      content : {
        price1 : p1.value,
        price2 : p2.value,
        price3 : p3.value,
        price4 : p4.value,
        quantity1 : q1.value,
        quantity2 : q2.value,
        quantity3 : q3.value,
        quantity4 : q4.value,
        item1 : i1.value,
        item2 : i2.value,
        item3 : i3.value,
        item4 : i4.value,
        index1 : i1.selectedIndex,
        index2 : i2.selectedIndex,
        index3 : i3.selectedIndex,
        index4 : i4.selectedIndex,
      },
    };
    newMenu.push(list);
    window.localStorage.setItem("inventory" , JSON.stringify(newMenu));

    // Reset
    var res1 = document.getElementsByName("new0")[0];
    res1.reset();
    var res2 = document.getElementsByName("new1")[0];
    res2.reset();
    var res3 = document.getElementsByName("new2")[0];
    res3.reset();
    var res4 = document.getElementsByName("new3")[0];
    res4.reset();
    var res5 = document.getElementsByName("new4")[0];
    res5.reset();
  
  }
  function getId(element){
    let clickedRow = element.parentNode.parentNode.rowIndex;
    let vORnum = document.getElementById("viewORnumber");
    let vcusName = document.getElementById("viewCustomerName");
    let vitem1  = document.getElementById("vitem1");
    let vitem2 = document.getElementById("vitem2");
    let vitem3 = document.getElementById("vitem3");
    let vitem4 = document.getElementById("vitem4");
    let vprice1 = document.getElementById("vPrice1");
    let vprice2 = document.getElementById("vPrice2");
    let vprice3 = document.getElementById("vPrice3");
    let vprice4 = document.getElementById("vPrice4");
    let vquan1 = document.getElementById("vQuantity1");
    let vquan2 = document.getElementById("vQuantity2");
    let vquan3 = document.getElementById("vQuantity3");
    let vquan4 = document.getElementById("vQuantity4");
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");

    let viewMenu = JSON.parse(localStorage.getItem("inventory")) || [];
    vORnum.value = viewMenu[clickedRow - 1].orderNumber;
    vcusName.value = viewMenu[clickedRow - 1].customerName;

    DImg = JSON.parse(localStorage.getItem("foodimg")) || [];
    console.log(viewMenu[clickedRow - 1].content.index1 - 1);
    // Displaying Image

    // Display #1
    if (viewMenu[clickedRow - 1].content.item1 == 0){
      img1.src = "";
      vprice1.innerHTML = "";
      vquan1.innerHTML = "";
      vitem1.innerHTML = "";
    }
    else{
      img1.src = DImg[viewMenu[clickedRow - 1].content.index1 - 1];
      vprice1.innerHTML = "Price: $ " + viewMenu[clickedRow - 1].content.price1;
      vquan1.innerHTML = "Quantity: " + viewMenu[clickedRow - 1].content.quantity1;
      vitem1.innerHTML = viewMenu[clickedRow - 1].content.item1;
    }
    // Display #2
    if (viewMenu[clickedRow - 1].content.item2 == 0){
      img2.src = "";
      vprice2.innerHTML = "";
      vquan2.innerHTML = "";
      vitem2.innerHTML = "";
    }
    else{
      img2.src = DImg[viewMenu[clickedRow - 1].content.index2 - 1];
      vprice2.innerHTML = "Price: $ " + viewMenu[clickedRow - 1].content.price2;
      vquan2.innerHTML = "Quantity: " + viewMenu[clickedRow - 1].content.quantity2;
      vitem2.innerHTML = viewMenu[clickedRow - 1].content.item2;
    }
    // Display #3
    if (viewMenu[clickedRow - 1].content.item3 == 0){
      img3.src = "";
      vprice3.innerHTML = "";
      vquan3.innerHTML = "";
      vitem3.innerHTML = "";
    }
    else{
      img3.src = DImg[viewMenu[clickedRow - 1].content.index3 - 1];
      vprice3.innerHTML = "Price: $ " + viewMenu[clickedRow - 1].content.price3;
      vquan3.innerHTML = "Quantity: " + viewMenu[clickedRow - 1].content.quantity3;
      vitem3.innerHTML = viewMenu[clickedRow - 1].content.item3;
    }
    // Display #4
    if (viewMenu[clickedRow - 1].content.item4 == 0){
      img4.src = "";
      vprice4.innerHTML = "";
      vquan4.innerHTML = "";
      vitem4.innerHTML = "";
    }
    else{
      img4.src = DImg[viewMenu[clickedRow - 1].content.index4 - 1];
      vprice4.innerHTML = "Price: $ " + viewMenu[clickedRow - 1].content.price4;
      vquan4.innerHTML = "Quantity: " + viewMenu[clickedRow - 1].content.quantity4;
      vitem4.innerHTML = viewMenu[clickedRow - 1].content.item4;
    }
  }