import SEO from "@/components/SEO";
import { Title } from "@/styles/pages/Home";
import React from "react";

export default function Home() {
  return (
    <main>
      <SEO
        title="DevCommerce, your best e-commerce!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />
      <Title>Hello Next.js! ~yay</Title>
      <section>
        <h2>Intro</h2>
        <p>
          É um framework pra react pra desenvolvimento frontend web, usado na
          camada do cliente. focado em: performance e indexação pelos crawlers,
          possuindo um servidor node.
        </p>
        <p>
          Substitui o <code>create-react-app</code>, pois faz a mesma coisa e +
          além. - boilerplate: traz toda a configuração pronta.
        </p>
      </section>
      <section>
        <h2>Typescript</h2>
        <p>
          <code>yarn add typescript @types/react @types/node -D</code>
        </p>
        <p>
          Ao iniciar a aplicação é gerado o tsconfig automático e não é
          necessário nenhuma alteração
        </p>
      </section>
      <section>
        <h2>Páginas e rotas</h2>
        <p>
          Não precisa utilizar nenhuma biblioteca para lidar com rotas, o nome
          do file já seria a rota a ser utilizada. Qualquer arquivo criado com
          underline no inicio, não é considerado uma rota. File{" "}
          <code>index.tsx</code> sempre deve existir, pois é a rota principal.
        </p>
        <h2>Rotas dinâmicas</h2>
        <p>
          Files nomeados com [ ] que mostram que vão receber algum parâmetro da
          url. Ex.: [slug].tsx
        </p>
      </section>
      <section>
        <h2>Styled-components</h2>
        <p>
          <code>yarn add styled-components</code>
        </p>
        <p>
          <code>yarn add @types/styled-components -D</code>
        </p>
        <p>
          não funciona com <code>server-side rendering</code>, então precisa
          fazer algumas modificações conforme a doc. Criar um file{" "}
          <code>.babelrc</code> ou <code>babel.config.js</code> (fazem a mesma
          coisa, a diferença é a forma de escrever no arquivo) e cola as infos
          conforme o exemplo.
        </p>
        <p>
          Necessário instalar outros plugins:
          <code> yarn add babel-plugin-styled-components -D</code>
        </p>
      </section>
    </main>
  );
}
