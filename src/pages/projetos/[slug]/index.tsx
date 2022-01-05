import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';

export default function ProjetoUnico() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto />
      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
          facere ipsa ut aut maiores dolore quidem veritatis culpa rem fugit?
          Culpa, omnis non. At corporis earum quam, qui excepturi ea?
        </p>
        <button type="button">
          <a href="#">Ver Projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
