import React from "react";
import "./ProductCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   const {
  //     title,
  //     brand,
  //     imageUrl,
  //     price,
  //     discountedPrice,
  //     color,
  //     discountPersent,
  //   } = product;
  //   const navigate= useNavigate();

  // console.log("product",product)

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/product/${product?.id || product?._id || 2}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer "
    >
      <Card sx={{ height: "30rem", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          alt={"Product image"}
          image={product.imageUrl}
          sx={{ height: "20rem", objectFit: "cover", objectPosition: "top" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <div className="textPart">
            <Typography variant="h6" component="div">
              {product.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.color}
            </Typography>
            <div className="flex space-x-3 items-center">
              <Typography className="font-semibold">
                ₹{product.price}
              </Typography>
              <Typography className="opacity-50 line-through">
                ₹{product.discountedPrice}
              </Typography>
              <Typography className="text-green-600 font-semibold">
                {product.discountPersent}% off
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
