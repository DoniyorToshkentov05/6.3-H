/* eslint-disable react/prop-types */
import './products/Products'

export default function Products({list, removeItem}) {
  return (
      <div className="cards">
          {list.map((item) => {
              return (
                  <div className="card" key={item.id}>
                      <img src={ item.image} alt="" />
                      <h2 className='n1'>{ item.name}</h2>
                      <h2 className='n2'>{item.narx}$</h2>
                      <button onClick={() => removeItem(item.id)}>delete</button>
                  </div>
              )
          })}
    </div>
  )
}
