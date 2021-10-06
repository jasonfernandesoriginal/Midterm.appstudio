
numberArray = [34,115,347,872,580,164,339,204,396,279,550,782,947,109,323,418,593,376,711, 984,1052]

let choice = ""
doneMathList = false

total = 0

function addNumbers(num){
  let total = 0
  for(var i in num) { 
        total += num[i];
    }
    return total;
  }
 
function multiplyArray(i, num2){
  let product = 0
  for(var i in num) { 
        product += num[i]*multiple;
    }
    return product;
  }
  
  while (doneMathList == false) {
  choice = prompt("Do you want to Add or Multiply? Add or Multiply?")
    if (choice == "Multiply"){
      let multiple = prompt("What woudl you like to multiply by?")
      doneMathList = false
      //let newProduct = prompt("What woudl you like to add to your product list?")
     // storeProducts.push(userProduct.toLowerCase())
      multiplyArray(number1,multiple)
     
    } else
      addNumbers(numberArray)
      doneMathList = true
}
