import { ReactNode } from 'react';

import { Container } from './styles';

interface ExperienciaItemProps {
  children: ReactNode;
}

function ExperienciaItem({ children }: ExperienciaItemProps) {
  return (
    <Container>
      <h1>ExperienciaItem</h1>
      {children}
    </Container>
  );
}

export default ExperienciaItem;
