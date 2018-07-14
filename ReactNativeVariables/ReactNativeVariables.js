/**
 * var, let, Const
 * 
 * var = mutable - function scoped(Can Change)
 * let = mutable - block scoped (Can change)
 * const = immutable - block scoped  (final but object declered with const variable are mutable)
 *
 * const and let are same except mutability
 */

function testLetVariable() {
  //Scope test 1 : 
  console.log(x); // Uncaught Ref Error
  let x = 10;
  console.log(x); // Will not print
  //Scope test 1 Result: "let is not 'Hoisted' and should be declered before executing"
  //------------------------------------------------------//

  //Scope test 2
  let z;
  console.log(z); //  // Will print  Undefined
  z = 10;
  console.log(z); // Will  print 10
  //Scope test 2 Result: "let must be decelered"
  //------------------------------------------------------//

  //Scope Test 3 (Common let and const)
  if (true) {
    let i = 23 // or const i=23 gives the same result
  }
  console.log(i); // Uncaught Ref Error 
  //Scope test 3 Result: "let is block scoped"
  //------------------------------------------------------//

  //Scope Test 4 //Let follows shadow scoping. Here a is shadowed
  let a = 10
  if (true) {
    let a = 25
    console.log(a)//Will print 25
  }
  console.log(a)//Will print 10
  //Scope test 4 Result: "let & const are shadow scoped"
  //------------------------------------------------------//

}

function testVarVariable() {
  //var is Function Scoped because JS var is "Hoisted" to top by the interpretter
  console.log(a); // Will print  Undefined
  var a = 10;
  console.log(a); // Will print  10l̥
}
