import { GetServerSideProps } from "next";
import { Title } from "@/styles/pages/Home";

interface IProduct {
  id: string;
  title: string;
}

interface ServerSideRenderingProps {
  recommendedProducts: IProduct[];
}

export default function ServerSideRendering({
  recommendedProducts,
}: ServerSideRenderingProps) {
  return (
    <div>
      <section>
        <Title>SSR</Title>

        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

/**
 * usa-se apenas quando é uma informação dinâmica que precisa estar disponível para os motores de busca
 * ou seja, precisa ser indexada pelos crawlers
 * TTFB - time to first byte : tempo que leva pro primeiro byte estar visivel pro usuário
 */
export const getServerSideProps: GetServerSideProps<ServerSideRenderingProps> = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recommended`
  );
  const recommendedProducts = await response.json();
  return {
    props: {
      recommendedProducts,
    },
  };
};
