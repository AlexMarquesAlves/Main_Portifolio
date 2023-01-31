import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
} from 'react-icons/ai';
import * as Scroll from 'react-scroll';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url) {
    window.open(url);
  }

  const scroll = Scroll.animateScroll;
  function handleScrollTop() {
    scroll.scrollToTop();
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/meArchi_Duque')}
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/AlexMarquesAlves')
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/alexmalves/')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
