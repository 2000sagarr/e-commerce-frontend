import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer items-center mx-3 pb-1">
      <Card sx={{ height: "28rem", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          alt={product.altText || "Product image"}
          image={product.imageUrl}
          sx={{ height: "20rem", objectFit: "cover", objectPosition: "top" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography  variant="h6" component="div">
            {product.brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeSectionCard;
