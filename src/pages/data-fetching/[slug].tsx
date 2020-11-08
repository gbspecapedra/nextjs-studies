import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

interface IProduct {
  id: string;
  title: string;
}

interface DynamicStaticSiteGenerationProps {
  products: IProduct[];
}

export default function DynamicStaticSiteGeneration({
  products,
}: DynamicStaticSiteGenerationProps) {
  const router = useRouter();

  // sempre que o uso do fallback isTrue
  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

/**
 * quando a página é dinâmica e de forma estática precisa deste método para informar
 * todos os parametros necessários que serão usados para acessar a página
 */
export const getStaticPaths: GetStaticPaths = async () => {
  /**
   * não faz sentido gerar muitas páginas estáticas no momento da build
   * dependendo do contexto da aplicação, é mais interessante usar fallback
   * pra ir gerando as páginas quando necessário
   */
  const response = await fetch("http://localhost:3333/categories");
  const categories = await response.json();

  const paths = categories.map((category) => {
    return {
      params: { slug: category.id },
    };
  });

  return {
    paths, // paths pode ser vazio []
    fallback: false, //se true: sempre que tentar acessar uma rota que não foi gerada ainda, essa prop faz gerar a página
  };
};

export const getStaticProps: GetStaticProps<DynamicStaticSiteGenerationProps> = async (
  context
) => {
  const { slug } = context.params;
  const response = await fetch(
    `http://localhost:3333/products?category_id=${slug}`
  );
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 60, // tempo em segundos que a página será recarregada
  };
};
