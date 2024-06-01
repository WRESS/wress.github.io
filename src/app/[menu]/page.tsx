import { client } from "@/libs/microcms/client";
import { Article } from "@/libs/microcms/types/article";
import { Menu } from "@/libs/microcms/types/menu";

const getMenu = async () => {
  return client.getList<Menu>({
    endpoint: "menu",
  });
};

const getContents = async () => {
  return await client.getList<Article>({
    endpoint: "articles",
  });
};

export async function generateStaticParams() {
  const { contents } = await getMenu();
  const list = contents.map((menuItem) => {
    return { menu: menuItem.tier };
  });
  return list;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: { params: { menu: string } }) {
  return <p>{params.menu}</p>;
}
