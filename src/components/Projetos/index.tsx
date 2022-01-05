import ProjetoItem from '../ProjetoItem';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <ProjetoItem />
      </section>
    </Container>
  );
}

export default Projetos;
