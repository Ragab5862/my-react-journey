import Imeg from "./Imeg";
import type { IProduct } from "../interfaces";
import Button from "./Ui/Button";
import { txtslicer } from "../utils/functions";
interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, price, imageURL, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg max-auto md:max-0 border rounded-md p-2 flex flex-col">
      <Imeg
        imegURL={imageURL}
        alt="Product name"
        ClassName="rounded-md mb-4 h-52 w-full lg:object-cover"
      />

      <h3 className="text-lg font-semibold">{txtslicer(title, 25)}</h3>
      <p className="text-sm text-gray-500 break-words">
        {txtslicer(description)}
      </p>
      <div className="flex items-center gap-1 my-2">
        <span className="w-5 h-5 rounded-full bg-gray-950 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-orange-500 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-blue-900 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <span>{price}</span>
        <Imeg
          imegURL={category.imageURL}
          alt={category.name}
          ClassName="w-10 h-10 rounded-full object-center "
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button ClassName=" bg-indigo-700 hover:bg-indigo-800" width="w-full">
          EDIT
        </Button>
        <Button ClassName=" bg-red-700 hover:bg-red-800 w-full">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;

// *onClick={() => {
// *  console.log("Edit clicked");
// }}
