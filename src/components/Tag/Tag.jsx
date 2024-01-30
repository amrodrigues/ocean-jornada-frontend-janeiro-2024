function Tag(text)
{
 // console.log(text)
  const items = text.text
//  console.log(items.especie)
    return (
        <>
            <div className="tags">
              <div className="tag">Status: {items.estatus}</div>
              <div className="tag">Espécie: {items.especie}</div>
              <div  className="tag">Origem: {items.origem}</div>
            </div>
         </>
      )
}

export default Tag