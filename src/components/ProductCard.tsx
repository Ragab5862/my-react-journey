import Imeg from "./Imeg";
import Button from "./Ui/Button";
interface IProps {}

const ProductCard = ({}: IProps) => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Imeg
        imegURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.38"
        alt="Product name"
        ClassName="rounded-md mb-4"
      />

      <h3>2026 Omnis :676</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis delectus
        Aut.
      </p>
      <div className="flex items-center gap-1 my-2">
        <span className="w-5 h-5 rounded-full bg-gray-950 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-orange-500 cursor-pointer" />
        <span className="w-5 h-5 rounded-full bg-blue-900 cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>$500,000</span>
        <Imeg
          imegURL="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.38"
          alt="Product name"
          ClassName="w-10 h-10 rounded-full object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button ClassName=" bg-indigo-700">Edit</Button>
        <Button ClassName=" bg-red-700">Delete</Button>
        <Button ClassName=" bg-slate-700">Loading</Button>
        <Button ClassName=" bg-green-700">Success</Button>
        <Button ClassName=" bg-gray-700">Cancel</Button>

      </div>
    </div>
  );
};

export default ProductCard;
