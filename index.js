// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p2 called");
//     },1000);
// })
// let p1=new  Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("P1 called");
//     },1000);
// });


//  let p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(3000)
//     }, 1000);
//  })

//  Promise.race([p2,p1,p3]).then((res)=>{
//     console.log(res);
//  });

// var obj={
//     a:this,
//     func:function(){
//         console.log(this)
//     },
//     func2:()=>{
//         console.log(this);
//     }
// }
// console.log(obj.a)
// console.log(obj.func());
// console.log(obj.func2());


// const fullName={
//     firstname:"vikram",
//     lastname:"mood",
    
// }
// fullName.print("Hyderabad",23);
// //output: vikram mood from Hyderabad age:undefined
// const fullName1={
//     firstname:"RAJA",
//     lastname:"RAM",
   
// }
// let fun=fullName.print.bind(fullName1,"Delhi",26); //function borrow
// // output: RAJA RAM from Delhi age:26
// // fun();
// console.log(fun());

 ///  ////// BIND PROFILL
// const name={
//     firstname:"vikram",
//     lastname:"mood",
// }

// let printName=function(hometown,state){
//     // console.log(this);
//     console.log(this.firstname+" "+ this.lastname+" "+ hometown+" "+state);
// }
// let printMyName=printName.bind(name,"haryana");
// printMyName("Delhi");
 ///////////   Method 1:
// Function.prototype.MyBind=function(scope,...args){ // args are arguments of bind function. And '...' represents any number of arguments
//      let obj=this; /// here 'this' refer's to 'printName' in printName.MyBind(name)
//         //  scope._this=this;           //scope is an object we sent. We are adding a new method with key=_this and value=printName function // remember method defination
//     // console.log(obj);
//      console.log(scope);
//      console.log(args);
//     // let params=args.slice(1);
//     // console.log(params);
//     return function(...args2){

         
//         obj.apply(scope,[...args,...args2]) 
        
//     }
// }
// ////// Method 2;
// Function.prototype.MyBind2=function(...args){
//     let obj=this;
//     let params=args.slice(1);
//     return function(args2){
//         obj.apply(args[0],[...params,...args2]);//args[0] is used since in MyBind(name) name is object reference is passed. we need to call that object,And that object is always first argument.
//     }

// }

// let printMyName2=printName.MyBind(name,"haryana");
// printMyName2("Delhi");



// ///// APPLY PROTOFILL

// const name={
//     firstName:"vikram",
//     lastName:"mood",
// }
// function printMyName(hometown,state){
//     console.log(this.firstName+" "+this.lastName+ " "+hometown+" "+state);
// }

// let app=printMyName.apply(name,["delhi","Telangana"]);


// // //////// Method 1

// Function.prototype.myApply=function(...args){

//     let obj=this;
//     console.log(obj);
//     console.log(args);

//      let params=args.slice(1)[0]; // here it is becoming nested arrary.
//      console.log(params)
//      return obj.call(args[0],...params);     

// }
// /////Method 2
// Function.prototype.myApply2=function(scope,args){
//     console.log(scope);
//     console.log(args);
//     scope._this=this;
//     console.log(scope);

//     scope._this(...args)

// }

// printMyName.myApply(name,["delhi","Telangana"]);

//  printMyName.myApply2(name,["delhi","Telangana"]);



// ///// CALL BIND

// const name={
//     firstName:"Vikram",
//     lastName:"mood",
// }

// let  printName=function(hometown,state){
//     console.log(this.firstName+" "+this.lastName+" "+hometown+" "+state);

// }

// printName.call(name,"delhi","haryana");




// Function.prototype.MyCall2=function(scope,...args){


//     scope._this=this;
    
//     scope._this(...args);
    
    
// }

// printName.MyCall2(name,"delhi","haryana");


// let sum= a ? => return  b=> b ?  sum(a+b):a :0;
//     // if (a){
//     //     return function(b){
//     //         if(b){
//     //             return sum(a+b);
//     //         }else return a;
//     //     }
//     // }
//     // else return 0;


// x=sum(1)(2)();
// console.log(x);

// "use strict"
// var counter=0;
// let c=10;
// function ram(){
//     console.log("ram:");
// }
// function getData(){
//     var abc=10;
//     console.log("FEtching data: ",++counter);
//     function abc1(){
//         console.log("abc1");
//         console.log(this);
//         return ()=>{
//             console.log("abc2");
//              console.log(this);
//             let x=this;
//             return ()=>{
//                 console.log("abc3");
//                 console.log(this);
//                 console.log(x===this);
//             }
//         }
        
//         // abc2();
//         // console.log(this);
//     }
//     abc1()()();
// }
// getData();

// const deBouncing=function abcd(fn,delay){
//     let timer,a=10;
//     function abc(){
//         console.log("abc");
//         console.log(this);
//         function abc1(){
//             console.log("abc1");
//             console.log(this);
//         }
//         abc1();

//     }
//     abc();
//     return function(){
//         let b=20;
//         let context=this,args=arguments;
//         console.log(this);
//         console.log(args);
        
//         clearTimeout(timer);
        
//         timer=setTimeout(()=>{
//           fn.apply(context,arguments);   
//         },delay)

//     }
// }
// let deBounce=deBouncing(getData,300);

/// polyfill of reduce method

let arr=[1,2,3,4];
let x=arr.reduce((acc,curr)=>{
    // console.log(acc);
    return acc=acc+curr;
},0);
console.log(x);
Array.prototype.myReduce=function(callbackfn,initValue){
    let prev= initValue!==undefined ?initValue:this[0];
    for(let i= initValue !==undefined ? 0:1;i<this.length;i++){
        prev=callbackfn(prev,arr[i],i,this);
    }
    return prev;

}
let fn= function(a,b,c,d){
    console.log("c:  "+c +" d: "+d);
    return a+b;
}


console.log(arr.myReduce(fn,0));


let y=obj.myReduce((acc,curr)=>{
    
    let category=curr.category;
    if(!acc[category]){
        acc[category]=[];
    }
    acc[category].push(curr.name);
    return acc;

},{});
console.log(y);



