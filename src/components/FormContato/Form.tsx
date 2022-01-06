/* eslint-disable no-console */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(nome, email, mensagem);

    if (!nome || !email || !mensagem) {
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });
      return;
    }
    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');
      toast('E-mail enviado com Sucesso!', {
        style: {
          background: theme.secondary,
          color: theme.white
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem', {
        style: {
          background: theme.error,
          color: theme.white
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <form>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={({ target }) => setMensagem(target.value)}
        />
      </form>
      <button type="button" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
