import { useEffect, useState } from "react";
import { Container, Title } from "@/styles/GlobalStyle";

interface IProduct {
  id: string;
  title: string;
}

export default function ClientSideRendering() {
  const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>(
    []
  );

  useEffect(() => {
    // client-side fetching: usa-se quando as informaçõe scarregadas não precisam ser indexadas
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`).then((response) => {
      response.json().then((data) => {
        setRecommendedProducts(data);
      });
    });
  }, []);

  return (
    <div>
      <Title>CSR</Title>
      <Container>
        <ul>
          {recommendedProducts.map((recommendedProduct) => {
            return (
              <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
