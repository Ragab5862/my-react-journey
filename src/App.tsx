import ProductCard from "./components/ProductCard";
import Button from "./components/Ui/Button";
import Model from "./components/Ui/Model";
import { productList } from "./data";
import { formInputsList } from "./data";
import { useState } from "react";
import Input from "./components/Ui/input";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderformInputsList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id}>{input.label}</label>
      <Input type="text" id={input.id} name={input.name} />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button
        className=" bg-indigo-700 hover:bg-indigo-800"
        width="w-full"
        onClick={openModal}
      >
        ADD
      </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-md p-3">
        {renderProductList}
      </div>
      <Model isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        {renderformInputsList}
        <div className="flex items-center space-x-3">
          <Button className=" bg-indigo-700 hover:bg-indigo-800" width="w-full">
            Submit
          </Button>

          <Button
            className=" bg-gray-500 hover:bg-gray-400"
            width="w-full"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </Model>
    </main>
  );
};

export default App;

