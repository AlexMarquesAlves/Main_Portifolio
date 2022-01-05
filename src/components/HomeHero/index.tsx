/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../../public/assets/images/me.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá!</h1>
          <h2>Me chamo Duque</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Atanael Leonardo,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Xavier Marques Alves</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem data-aos="zoom-in">
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">...</span>
            </div>
            <div>
              Empresa: <span className="blue">...</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
