import { FormContainer, Input, TextArea } from './styles';

// interface FormProps {
//   children: ReactNode;
// }

function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome..." required />
      <Input placeholder="E-mail..." type="email" required />
      <TextArea placeholder="Mensagem..." required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}

export default Form;