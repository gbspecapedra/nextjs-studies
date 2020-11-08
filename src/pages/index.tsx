import SEO from "@/components/SEO";
import { Container, Title } from "@/styles/GlobalStyle";
import { Button } from "@/styles/pages/Home";
import React from "react";
import Cards from "./_cards";

export default function Home() {
  return (
    <main>
      <SEO
        title="DevaCommerce, your best first e-commerce!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />
      <Title>Hello Next.js! ~yay</Title>
      <Container>
        <Button href="/data-fetching/csr">CSR</Button>
        <Button href="/data-fetching/ssr">SSR</Button>
        <Button href="/data-fetching/ssg">SSG</Button>
      </Container>
      <Cards />
    </main>
  );
}
