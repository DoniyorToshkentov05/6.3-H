/* eslint-disable react/prop-types */
import './style.css';
export default function Products({ list }) {
  return (
    <div className='cards'>
        {list.map((item) => {
            return (
                <div className='card'  key={item.id}>
                <img src={item.image} alt={item.name} />
                    <h2 className='n1'>{item.name}</h2>
                    <h2 className='n2'>{item.narx}$</h2>
                </div>
            )
        })}
    </div>
  )
}