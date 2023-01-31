import Prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Conhecimentos from '../components/Conhecimentos';
import Experiencias from '../components/Experiencias';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Projetos from '../components/Projetos';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
      </Head>

      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        {/* <FormContato /> */}
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.uid,
    title: projeto.data.title,
    type: projeto.data.type,
    description: projeto.data.description,
    link: projeto.data.link.url,
    thumbnail: projeto.data.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
