function Student(props){
    return (
        <div className="Student">
        <h1>Name : {props.name}</h1>
        <h1>Age : {props.age}</h1>
        </div>

    )
}

export default Student