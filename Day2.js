/* function*/
function add(a,b){
   return a+b;

}

m = add(4,5);
console.log(m)

// Arrow function 

let product = (a,b) => a*b; // Es6 feature
console.log(product(4,5));

let mod = function div(a,b){ return a/b;}//assinging a function to a variable
console.log(mod(4,2));

/*Loops*/

//While Loop
let i = 5;
while(i != 0){
    console.log(i+'while Loop');
    i = i-1;
}

//For loop

for(let j =0 ; j<=5;j++){
    console.log(j+'For loop');

}

// Do-While Loop
k = 5
 do{
    console.log(k +'DO while');
    k =k-1;
 }
 while(k!=0);

 /* Arrays*/

 let arr = [1,2,3,4,5,6];
 arr.push(7);// Removing last element 
 console.log('push:'+arr);
 arr.pop();
 console.log('pop:'+arr);
 let sub_ele = arr.shift(1,3);//Removing first element
 console.log(sub_ele);
 let sub_arr = arr.splice(1,4);//Remove
 console.log(sub_arr);
sub_arr.splice(0,4,10,45);//Replace
console.log(sub_arr);
let arr1= ['a','b','c','d'];
for(let i of arr1){
    console.log(i); //Looping on the array without using index
}

let num = [5,4,3,2];
let[a,b,c,d] = num; // Array destructuring
console.log(a,b,c,d);


/*Objects*/

let details = {'pername':'Jhon','age':24,'gender':'M','phno':898898987};
console.log(details['pername']);

for( let m in details){
    console.log(details[m]);
}

let {pername , age , gender,phno} = details; //Object Destructuring
console.log(pername); 
console.log(age);     
console.log(gender);  
console.log(phno);   

console.log(Object.keys(details));// array values of the keys of object
console.log(Object.values(details));// array values of the object
