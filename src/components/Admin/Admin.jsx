/* eslint-disable react/prop-types */

import './Admin.css';
export default function Admin({title, setTitle, price, setPrice, handleSubmit}) {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
      
      <label htmlFor="">Add product</label>
        <input type="text"value={title} onChange={(e) => setTitle(e.target.value)} placeholder='name' />
        <input type="number"value={price}onChange={(e) => setPrice(e.target.value)}placeholder='price' />
        <button>Add</button>
      </form>
    </div>
  )
}
