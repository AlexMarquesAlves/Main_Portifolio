import Header from '../../components/Header';
import { ProjetoContainer } from '../../styles/ProjetosStyles';

export type ProjetosProps = {
  title?: string;
};

export const Projetos = () => (
  <ProjetoContainer>
    <Header />
    <main className="container">
      <p>oi</p>
    </main>
  </ProjetoContainer>
);
