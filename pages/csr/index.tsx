// React
import { useEffect, useState } from "react";

// Components
import { GridProduct } from "../../components/GridProduct";

// Lib
import { client, allProducts } from "../../lib/sanity";

// Types
import { NextPage } from "next";

interface Data {
  _id: string;
  title: string;
  imageUrl: string;
}

const CSRIndexPage: NextPage = () => {
  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    client.fetch(allProducts).then(data => {
      setData(data);
    });
  }, []);

  const renderData = () => {
    return data?.map(item => {
      return <GridProduct key={item._id} path="/csr" item={item} />;
    });
  };

  if (!data) {
    return <main className="loading-text">Loading...</main>;
  }

  return <main className="grid">{renderData()}</main>;
};

export default CSRIndexPage;
