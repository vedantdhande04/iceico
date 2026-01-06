function List(props){

    const itemList = props.item
    const listItems = itemList.map((item,index)=><li key={index}>{item}</li> )

    return(<ol>
        {listItems}
        </ol>
    )
}
export default List