function Button(){
    let count = 0;
    const HandleClick=(name)=>{
        if(count<3){
            console.log(`you have clicked me ${count} times`)
            count++
        }
        else{
            console.log(`stop clicking me you have alrdy clicked me ${count} times`)
            count++
        }
    }
    
return(
    <button onClick={()=>HandleClick("Vedant")}>Click me</button>
)
}
export default Button