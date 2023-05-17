document.addEventListener("keydown",function getKeyVal(event){
    let keyCode = decimalToHex(event.keyCode || event.which)
    console.log(`Entered value: ${keyCode}`)
})

function decimalToHex(decimalValue) {
    return decimalValue.toString(16);
  }