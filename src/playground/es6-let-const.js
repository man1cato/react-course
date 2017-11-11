var nameVar = 'Andres';
var nameVar = 'Mike';                   //REASSIGNING OR RECREATING THE SAME VARIABLE  WILL WORK
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';                      //RECREATING THE SAME VARIABLE  WILL NOT WORK, BUT REASSIGNING DOES
console.log('nameLet', nameLet);

const nameConst = 'Frank';              //REASSIGNING THE VARIABLE DOES NOT WORK
console.log('nameConst', nameConst);    


//ALL OF THE ABOVE ARE FUNCTION-SCOPED


//LET AND CONST ARE BLOCK-SCOPED AS WELL, VAR IS NOT

var fullname = 'Andres Rodriguez';
if(fullname) {
    let firstname = fullname.split(' ')[0];
    console.log(firstname);
}
//console.log(firstname);               //THIS WOULD FAIL