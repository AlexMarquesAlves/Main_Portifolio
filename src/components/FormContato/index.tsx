import Form from '../Form';
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
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}

export default FormContato;
