// array methods
let a=[10,20,30,40];



a.push('shubham');   //insert element at last
console.log(a);
a.pop();        //delete element from last
console.log(a.length);   //length of array
console.log(a.indexOf(30));   //index of particular element

a.unshift(50);  // insert at start
console.log(a)
a.shift();     //delete from start 
console.log(a)

//task1

let arr=[10,20,30,40,50,60,70,80];
let temp=arr[0];
arr[0]=arr[arr.length-1];
arr[arr.length-1]=temp;
console.log(arr)


// function button1(){


// let n=document.getElementById('inp').value; 

// let arr=[];

// for(let i=1; i<=n; i++){
//     let count=0;
//     for(let j=1; j*j<=i; j++){
//         if(i%j==0){
//             count++;

//             if(i/j != j){
//                count++;
//             }

//         }
//     }
//     if(count==2){
//         arr.push(i);
//     }
    
// }
// console.log(arr)
// }

// 
// let arr1=[10,20,30,50];

// console.log(arr1.slice(0,1))
// console.log(arr1.splice(0,3)); 
// console.log(arr1)

// const val=arr1.map(function(item){
//         return item*2;
// })

// console.log(val)

  // arr1=arr1.map(function(item){
            
  //   if(item<50){
  //       return 'fail';
  //   }
  //   else{
  //       return "pass"
  //   }
  //   })

  //   console.log(arr1);


    function filtervalues(){
      return arr.filter(item=>item>50)
    }
    console.log(filtervalues(arr))

    // 
    let b= arr.filter(function(item){
       return item>50;
    })

    console.log(b)

    //reduce method

    let c=arr.reduce(function(a,b){
      return a+b;

    })
    console.log(c);


    // flat method

    let arr3=[[10,20],[30,40]];

    console.log(arr3.flat())

    console.log(arr3[1][1])


  //  split 

  let str="shubham, yogender, rajesh";
  console.log(str.split(","))

  console.log(arr.join(','))









