import ProductCard from "./components/ProductCard";
import { productList } from "./data";

const App = () => {
  const renderProductList = productList.map(product => 
    <ProductCard key={product.id} product={product} />
  );

  return (
    <main className="container mx-auto">
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-md p-3">
        {renderProductList}
      </div>
    </main>
  );  
};

export default App;
// ** erjgekjgk;fjgfgj
//klgkl;erkgle;rkgrke
