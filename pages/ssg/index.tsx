// Packages
import Link from "next/link";

// Components
import { GridProduct } from "../../components/GridProduct";

// Lib
import { client, allProducts } from "../../lib/sanity";

// Types
import { GetStaticProps } from "next";

interface Data {
  _id: string;
  title: string;
  imageUrl: string;
}

const SSGIndexPage = ({ data }: { data: Data[] }) => {
  const renderData = () => {
    return data?.map(item => {
      return <GridProduct key={item._id} path="/ssg" item={item} />;
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
};

export default SSGIndexPage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.fetch(allProducts);

  return {
    props: { data },
  };
};
