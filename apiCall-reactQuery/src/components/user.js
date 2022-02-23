import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./../config/userSlice";
import { addProducts } from "./../config/productSlice";

function UserComp() {
  const userState = useSelector((state) => state.user.value);
  const productState = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const update = () => {
    dispatch(getUser("Murad khan"));
  };
  const addproduct = () => {
    dispatch(addProducts({ name: "new product", id: 11 }));
  };
  return (
    <div className="UserComp">
      <h1>Get User state from redux</h1>
      <div> {userState}</div>
      <button onClick={update}>update state</button>
      <h3>products list</h3>
      {productState.map((product, ind) => {
        return <div key={ind}>{product.name}</div>;
      })}
      <button onClick={addproduct}>add new product</button>
    </div>
  );
}

export default UserComp;
