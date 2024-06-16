import { Button, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  const handleRemoveItemFromCart = () => {
    // const data = { cartItemId: item?.id, jwt };
    // dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem = (num) => {
    // const data={data:{quantity:item.quantity+num}, cartItemId:item?.id, jwt}
    // dispatch(updateCartItem(data))
  };
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src={
              "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            }
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Title</p>
          <p className="opacity-70">Size: L,White</p>
          <p className="opacity-70 mt-2">Seller: brand</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹100</p>
            <p className="font-semibold text-lg">₹50</p>
            <p className="text-green-600 font-semibold">10% off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            color="primary"
            aria-label="add an alarm"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">4</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            color="primary"
            aria-label="add an alarm"
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button onClick={handleRemoveItemFromCart} variant="text">
            Remove{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
