import {
  CardBody,
  CardHeader,
  CardHeading,
  CardWrapper,
} from "@/styles/pages/Home";
import { Container } from "@/styles/GlobalStyle";

export default function Cards() {
  return (
    <Container>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Intro</CardHeading>
        </CardHeader>
        <CardBody>
          <p>
            É um framework pra react pra desenvolvimento frontend web, usado na
            camada do cliente. focado em: performance e indexação pelos
            crawlers, possuindo um servidor node.
          </p>
          <p>
            Substitui o <code>create-react-app</code> (boilerplate), pois faz a
            mesma coisa e + além.
          </p>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Using typescript</CardHeading>
        </CardHeader>
        <CardBody>
          <p>
            <code>yarn add typescript @types/react @types/node -D</code>
          </p>
          <p>
            Ao iniciar a aplicação é gerado o tsconfig automático e não é
            necessário nenhuma alteração
          </p>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Páginas e rotas</CardHeading>
        </CardHeader>
        <CardBody>
          <p>
            Não precisa utilizar nenhuma biblioteca para lidar com rotas, o nome
            do file já seria a rota a ser utilizada. Qualquer arquivo criado com
            underline no inicio, não é considerado uma rota. File{" "}
            <code>index.tsx</code> sempre deve existir, pois é a rota principal.
          </p>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Rotas dinâmicas</CardHeading>
        </CardHeader>
        <CardBody>
          <p>
            Files nomeados com [ ] que mostram que vão receber algum parâmetro
            da url. Ex.: [slug].tsx
          </p>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Styled-components</CardHeading>
        </CardHeader>
        <CardBody>
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
        </CardBody>
      </CardWrapper>
    </Container>
  );
}
