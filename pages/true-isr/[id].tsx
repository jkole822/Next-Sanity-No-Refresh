// React
import { useEffect, useState } from "react";

// Packages
import Link from "next/link";
import { useRouter } from "next/router";

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

const MISRDetailPage = ({ data }: { data: Data }) => {
  if (!data) {
    return <main className="loading-text">Loading...</main>;
  }

  return (
    <main>
      <Link href="/true-isr">
        <a>Return to Products</a>
      </Link>
      <Product item={data} />
    </main>
  );
};

export default MISRDetailPage;

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

  return { paths, fallback: true };
};
