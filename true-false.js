//Falsy
// 0
// ""
//undefine
//null
//NaN
//false
//Truthy
// '0',' ',[] 
let name = 0;

if(name || name == 0){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}