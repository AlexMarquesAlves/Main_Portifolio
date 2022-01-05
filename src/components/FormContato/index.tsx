import SectionTitle from '../SectionTitle';
import { Container } from './styles';

// interface FormContatoProps {
//   children: ReactNode;
// }

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços
          </>
        }
      />
    </Container>
  );
}

export default FormContato;
