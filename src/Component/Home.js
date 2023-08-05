
import Deals from './Deals';
import Free from './Free'
import Myoption from "./Option";
import { useState ,useEffect} from 'react';

const Home = () => {
const [cartItem, setCartitem] = useState([]);

const handleAddtoCart = (data) => {
  setCartitem((prevCartItems) => [...prevCartItems, data]);
    console.log("Adding to cart:", data);
};

 useEffect(() => {
   console.log("Updated cart items:", cartItem);
 }, [cartItem]);
  return (
    <>
      <Free />
      <Myoption />
      <Deals AddtoCart={handleAddtoCart} />
    </>
  );
}

export default Home
