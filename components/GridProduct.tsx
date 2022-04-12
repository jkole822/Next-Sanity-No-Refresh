import { FC } from "react";

import Link from "next/link";

interface Item {
  _id: string;
  title: string;
  imageUrl: string;
}

interface ProductProps {
  item: Item;
  path: string;
}

export const GridProduct: FC<ProductProps> = ({ item, path }) => (
  <div className="grid-item">
    <Link href={`${path}/${item._id}`}>
      <a className="item-header">{item?.title}</a>
    </Link>

    <img src={item.imageUrl} />
  </div>
);
