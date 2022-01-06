import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="01 Ano" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2021"
          title="HTML 5"
          description="Sólidos conhecimentos de estruturação, conhecimento de todas as tags"
        />
        <ExperienciaItem
          year="2021"
          title="CSS 3"
          description="Sólidos conhecimentos e estilização, experiencia com pre-processadores
          (Sass, Scss)"
        />
        <ExperienciaItem
          year="2021"
          title="Bootstrap"
          description="Sólidos conhecimentos e familiaridade com o framework"
        />
        <ExperienciaItem
          year="2021"
          title="JavaScript"
          description="Conhecimento intermediário da linguagem, entretanto estudado cada vez mais"
        />
        <ExperienciaItem
          year="2021"
          title="React.js"
          description="Conhecimento intermediário do framework, e aprendendo a cada dia"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
