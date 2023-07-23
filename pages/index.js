import Head from 'next/head';
import Hero from '../components/Hero';
import Instagram from '../components/Instagram';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Impressum from '../components/Impressum';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bearson Tattoo</title>
        <meta name='bearson' content='bearsonwebpage' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Hero heading='Du willst ein Tattoo?' message='Schreibe mir einfach für einen Termin!'/>
      <Slider slides={SliderData} />
      <Instagram />
      <Impressum />
      
      
    </div>
  );
}
