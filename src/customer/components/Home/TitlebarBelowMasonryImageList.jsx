import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IconButton, ImageListItemBar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TitlebarBelowMasonryImageList() {
  const navigate = useNavigate();

  return (
    <ImageList
      sx={{ width: "100%", height: "100%" }}
      variant="woven"
      cols={3}
      gap={40}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            onClick={() => {
              navigate(item.link);
            }}
            style={{ cursor: 'pointer' }}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                {/* <InfoIcon /> */}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women Tops",
    link: "/women/clothing/top",
  },
  {
    img: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men Shirts",
    link: "/men/clothing/shirt",
  },
  {
    img: "https://images.unsplash.com/photo-1574120153654-453fb26e6bd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Women Dress",
    link: "/women/clothing/women_dress",
  },
  {
    img: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men Jeans",
    link: "/men/clothing/men_jeans",
  },
  {
    img: "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Women Jeans",
    link: "/women/clothing/women_jeans",
  },
  {
    img: "https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Men T-Shirts",
    link: "/men/clothing/shirt",
  },
];
