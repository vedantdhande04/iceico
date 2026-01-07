function Button(){

    const HandleClick = (e)=>{
        e.target.style.display = "none"
    }
    const image = "./src/assets/teacher.png"
    return(<img onClick={(e)=>HandleClick(e)} src={image}></img>)
}
export default Button