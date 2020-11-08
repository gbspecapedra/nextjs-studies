import { useState } from "react";
import dynamic from "next/dynamic";

const AddToCartModal = dynamic(() => import("@/components/AddToCartModal"), {
  loading: () => <p>Loading...</p>,
  //quando precisar utilizar alguma variável do browser que não está disponível no node,
  //faz que nunca seja renderizado pelo lado do servidor:
  ssr: false,
});

export default function Page() {
  /**
   * Dynamic Imports
   * Importar uma funcionalidade apenas quando o usuário precisar dela.
   * Muitas vezes as libs são muito pesadas e é pouco utilizada pelo usuário.
   */
  async function handleSum() {
    const { sum } = (await import("@/lib/math")).default;
    alert(sum(3, 5));
  }

  /**
   * Lazy load de componentes
   * Se um componente não for utilizado pelo usuário,
   * não faz sentido o componente já ter sido carregado.
   */
  const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);
  function handleAddToCart() {
    setIsAddToCartModalVisible(true);
  }

  return (
    <div>
      <button onClick={handleSum}>Click to sum</button>
      <button onClick={handleAddToCart}>Click to lazy load</button>
      {isAddToCartModalVisible && <AddToCartModal />}
    </div>
  );
}
