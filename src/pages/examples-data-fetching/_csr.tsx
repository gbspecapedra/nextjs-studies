import { useEffect, useState } from "react";
import { Title } from "@/styles/pages/Home";

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
      <section>
        <Title>CSR</Title>

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
