// React
import { useEffect, useState } from "react";

// Packages
import Link from "next/link";
import { useRouter } from "next/router";

// Components
import { Product } from "../../components/Product";

// Lib
import { client, product } from "../../lib/sanity";

// Types
import { NextPage } from "next";

interface Data {
  _id: string;
  title: string;
  text: string[];
  imageUrls: string[];
}

const CSRDetailPage: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const [data, setData] = useState<Data[]>();

  useEffect(() => {
    if (id) {
      client.fetch(product, { id: id }).then(data => {
        setData(data);
      });
    }
  }, [id]);

  if (!data) {
    return <main className="loading-text">Loading...</main>;
  }

  return (
    <main>
      <Link href="/csr">
        <a>Return to Products</a>
      </Link>
      <Product item={data[0]} />
    </main>
  );
};

export default CSRDetailPage;
