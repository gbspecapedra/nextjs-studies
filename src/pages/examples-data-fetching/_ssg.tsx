import { GetStaticProps } from "next";

interface IProduct {
  id: string;
  title: string;
}

interface StaticSideGenerationProps {
  products: IProduct[];
}

/**
 * Páginas estáticas são geradas no momento da build
 */
export default function StaticSiteGeneration({
  products,
}: StaticSideGenerationProps) {
  return (
    <div>
      <h1>SSG</h1>

      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

/**
 * usa-se quando uma página utiliza informações dinâmicas porém é muito dificil essa página ser diferente.
 * a partir do momento que é estático todos os acessos não precisaram mais fazer chamadas à api.
 * somente em páginas que não possuem muitas atualizações, pois é a maneira mais performática.
 */
export const getStaticProps: GetStaticProps<StaticSideGenerationProps> = async (
  context
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 5, // tempo em segundos que a página será recarregada
  };
};
