//let arr = []
//arr[5]=10
//console.log(arr.length)
////console.log(arr)
////
////for(let i =0;i<arr.length;i++){
////    console.log(arr[i])
////}
//
//let user = {
//    name:"Vedant",
//    age:21,
//    loggedIn:true,
//    key:true
//}
//console.log(user["name"]);
//console.log(user)
//delete user.loggedIn;
//console.log(user)
//
//console.log("age" in user)
//console.log(user.hasOwnProperty("age"))
//
//for (let key in user) {
//  if (user.hasOwnProperty(key)) {
//    console.log(key, user[key]);
//  }
//}
//
//
//let user ={
//    Name : "ved",
//    status:
//    {
//        yesterday:"present",
//        today:"present",
//        stats:{
//            followers : 29999,
//            likes : function(){
//                return Number(user.status.stats.followers)*1000
//            }
//        }
//    }
//}
//
//console.log(user["status"]["yesterday"])
//console.log(user.status.stats.likes())


//let b = name.toUpperCase();
//console.log(b)
//let names ="hey Vedant";
//let b = names.replace("Vedant","ved")
//console.log(b)

//let sentence = "hey I am learning js"
////let CharCount=0;
//let WordCount=1;
////console.log(sentence.length)
////for(i=0;i<sentence.length;i++){
////    if(sentence[i]==" "){continue};
////    CharCount++
////}
////
//for(i=0;i<sentence.length;i++){
//    if(sentence[i]==" "){
//        
//        WordCount++
//    }
//}
//console.log(sentence[0].toUpperCase()+sentence.slice(1))
//console.log(CharCount)
//console.log(WordCount)

//let a = "hey i am learning js"
//let b = a.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ");
//
//console.log(b)
//

//let num = [1,2,3,4,5]
//let newNum = num.map(n=>n*2)
//console.log(newNum)
//
//let newN = num.filter(n=>n>3);
//console.log(newN)
//
//let newR = num.reduce((acc,curr)=>acc+curr)
//console.log(newR)


//let newMap = num.map(n=>n*3).filter(n=>n<10).reduce((x,y)=>x+y)
//console.log(newMap)
//console.log(num)

