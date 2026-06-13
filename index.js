/* numbers n1 and n2  */
let divideFun=(n1,n2)=>{
  
  return new Promise((resolve,reject)=>{
           if(n2!=0){
          let result=n1/n2;
         
            console.log(`Dividing ${n1} by ${n2}...`)
            resolve(`result:${result}`)
            
           }
           else{
            console.log(`Dividing ${n1} by ${n2}...`)
           reject("Error: division by 0 is not allowed")
           }
  })

  

}

divideFun(10,12).then((res)=>console.log(res)).catch((err)=>console.log(err))

