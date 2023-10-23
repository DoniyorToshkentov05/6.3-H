import './App.css';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
// import Content from './components/Content/Content';
import { useEffect, useState } from 'react';
import Products from './components/products/Products';

// Define a function to generate a unique ID
const uid = () => {
  return Math.random().toString(36).substring(2);
};

// Define a default image URL
const defaultImg = 'https://picsum.photos/seed/picsum/200/300';

const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
};

function App() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [list, setList] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault(); // Fix the typo, it should be 'preventDefault', not 'preventDefult'
    
    // Generate a unique ID and use the default image if not provided
    const id = uid();
    const img = defaultImg;
    
    const newItem = { id: id, name: title, narx: price, image: img };
    
    // Update the list with the new item
    setList([...list, newItem]);
    
    // Clear the input fields after submission
    setTitle('');
    setPrice('');
  }

  useEffect(() => {
    // Store the list in local storage whenever it changes
    localStorage.setItem('products', JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Header/>
      <Admin
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        handleSubmit={handleSubmit}
      />
 
      <Products list={list}/>
    </>
  )
}

export default App;