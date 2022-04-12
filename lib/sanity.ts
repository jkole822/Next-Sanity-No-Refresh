import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "7m80uj25",
  dataset: "production",
  apiVersion: "2022-04-03", // use current UTC date - see "specifying API version"!
  token: "", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

export const allProducts =
  '*[_type == "product"] {_id, title, "imageUrl": defaultProductVariant.images[0].asset->url }';

  export const firstTenProducts =
  '*[_type == "product"][0...10] {_id, title, "imageUrl": defaultProductVariant.images[0].asset->url }';

export const product =
  '*[_type == "product" && _id == $id] {title, "text": body.en[].children[].text, "imageUrls": defaultProductVariant.images[].asset->url }';
