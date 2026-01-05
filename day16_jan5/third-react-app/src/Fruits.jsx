function Fruits(props){



        //fruits.sort((a,b)=>a.tasty - b.tasty)
        const itemList = props.items;
        const listItems = itemList.map(item=><li key={item.id}>{item.name} : <b> {item.tasty}</b></li>);
        
    return(<ol>
        {listItems}
    </ol>)}
export default Fruits