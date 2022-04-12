// Packages
import Link from "next/link";

// Components
import { Product } from "../../components/Product";

// Lib
import { client, product } from "../../lib/sanity";

// Types
import { GetServerSideProps } from "next";

interface Data {
  _id: string;
  title: string;
  text: string[];
  imageUrls: string[];
}

const SSRDetailPage = ({ data }: { data: Data }) => (
  <main>
    <Link href="/ssr">
      <a>Return to Products</a>
    </Link>
    <Product item={data} />
  </main>
);

export default SSRDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const dataArr = await client.fetch(product, { id });
  const data = dataArr[0];

  return {
    props: { data },
  };
};
