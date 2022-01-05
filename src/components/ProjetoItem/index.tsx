import Link from 'next/link';
import { ProjetoContainer } from './styles';

function ProjetoItem() {
  return (
    <ProjetoContainer>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>Projeto 01</h1>
          <h2>- Website</h2>
        </div>
      </section>

      <button type="button">
        <Link href="/projeto">
          <a>Ver mais</a>
        </Link>
      </button>
    </ProjetoContainer>
  );
}

export default ProjetoItem;
