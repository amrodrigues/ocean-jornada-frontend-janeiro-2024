import Tag from "../Tag/Tag"

function Card(props)
{
  
  //console.log(props)
  const item = props.item
  //console.log(item)
    return (
        <>
          <div className="card">
            <h2> {item.name} </h2>
            
            <Tag text={item.texto} />
           
            <img src={item.image}/>
          </div>
        </>
      )
}

export default Card