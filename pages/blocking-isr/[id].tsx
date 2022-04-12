// Packages
import Link from "next/link";

// Components
import { Product } from "../../components/Product";

// Lib
import { client, firstTenProducts, product } from "../../lib/sanity";

// Types
import { GetStaticProps, GetStaticPaths } from "next";

interface Data {
  _id: string;
  title: string;
  text: string[];
  imageUrls: string[];
}

interface Path {
  params: {
    id: string;
  };
}

const ISRDetailPage = ({ data }: { data: Data }) => (
  <main>
    <Link href="/blocking-isr">
      <a>Return to Products</a>
    </Link>
    <Product item={data} />
  </main>
);

export default ISRDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dataArr = await client.fetch(product, { id: params?.id });
  const data = dataArr[0];

  return {
    props: { data },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.fetch(firstTenProducts);

  const paths: Path[] = data.map((item: Data) => ({
    params: { id: item._id },
  }));

  return { paths, fallback: "blocking" };
};
