import ExperienciaItem from '../ExperienciaItem';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />
      <section>
        <ExperienciaItem
          title="Dev Front-end"
          year="2018"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,"
        />
        <ExperienciaItem
          title="Dev Front-end"
          year="2019"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,"
        />
        <ExperienciaItem
          title="Dev Front-end"
          year="2020"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,"
        />
        <ExperienciaItem
          title="Dev Front-end"
          year="2021"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
