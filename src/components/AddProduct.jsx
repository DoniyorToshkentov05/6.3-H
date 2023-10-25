/* eslint-disable react/prop-types */
import './addpro.css';

export default function AddProduct({
    title,
    setTitle,
    price,
    setPrice,
    handleSubmit
}) {
    

  return (
      <div>
          <form action="" onSubmit={handleSubmit}>
              <br />
              <input
                  type="text"
                  value={title} placeholder='Name'
                  onChange={(e) => setTitle(e.target.value)}
              />
         
              <input
                  type="text"
                  name=""
                  id=""
                  value={price}
                  placeholder='Price'
                  onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <button>add</button>
          </form>
    </div>
  )
}
