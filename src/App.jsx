import Section from "./components/ui/Section";
import ProductGrid from "./components/shop/ProductGrid"

export default function App({ productList }) {
  function handlebuy(product) {
    alert(`(Etapa 1:) Comprar: ${product.name}`);
  }
  return(
    <div className="page">
      <header className="top">E-commerce React
      <p className="muted">
        Etapa 1: Props + Children + MockAPI (sem Hooks)
      </p>
      </header>

      <Section title="Produtos" subtitle="Cards gerados via map()">
        <ProductGrid products={productList} onBuy={handlebuy}/>
      </Section>
      <Section title={"Carrinho"} subtitle="Somente UI/Placeholder">
        <p className="muted">Carrinho vazio</p>

      </Section>
      
    </div>
  )

}