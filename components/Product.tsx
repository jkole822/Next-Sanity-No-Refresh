import { FC } from "react";

import Slider from "react-slick";

import { settings } from "../lib/slick";

interface Item {
  title: string;
  imageUrls: string[];
  text: string[];
}

interface ProductProps {
  item: Item;
}

export const Product: FC<ProductProps> = ({ item }) => (
  <div className="product">
    <h1 className="item-header">{item?.title}</h1>
    <div className="slider-container">
      <Slider {...settings}>
        {item?.imageUrls?.map(image => (
          <img key={image} src={image} />
        ))}
      </Slider>
    </div>
    <div className="item-description">
      {item?.text?.map(text => (
        <p key={text} className="item-text">
          {text}
        </p>
      ))}
    </div>
  </div>
);
