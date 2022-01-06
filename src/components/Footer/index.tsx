import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
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
        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com')}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect('https://linkedin.com')}
          />
        </section>
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
      </div>
    </Container>
  );
}

export default Footer;
