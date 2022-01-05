import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
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
        <button type="button" onClick={handleScrollTop}>
          Back to top
        </button>
      </div>
    </Container>
  );
}

export default Footer;
