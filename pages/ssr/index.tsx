// Packages
import Link from "next/link";

// Components
import { GridProduct } from "../../components/GridProduct";

// Lib
import { client, allProducts } from "../../lib/sanity";

// Types
import { GetServerSideProps } from "next";

interface Data {
  _id: string;
  title: string;
  imageUrl: string;
}

export default function SSRIndexPage({ data }: { data: Data[] }) {
  const renderData = () => {
    return data?.map(item => {
      return <GridProduct key={item._id} path="/ssr" item={item} />;
    });
  };

  return (
    <main className="grid">
      <Link href="/">
        <a>Return to Home</a>
      </Link>
      {renderData()}
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.fetch(allProducts);

  return {
    props: { data },
  };
};
