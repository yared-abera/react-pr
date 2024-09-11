import FuncComp from "./components/funcComp";
import ProductList from "./components/products";
import ClassBasedComponent from "./components/classBasedComponent";
const dummyProductData = 
[ 'product 1', 
  'product 2', 
  'product 3' ];

function App() {

  return (
    <>
      {/* <h1>Hello</h1> 
      <ProductList name="John" city="London" listofProducts={dummyProductData} /> */}
      <ClassBasedComponent/> 
    </>   
  ); 
};

export default App
