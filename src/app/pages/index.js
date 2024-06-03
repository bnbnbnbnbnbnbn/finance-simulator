
import Head from 'next/head';
import LoanSimulator from '../components/LoanSimulator';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finance Simulator</title>
        <meta name="description" content="Simulateur de finance pour prêts et SCPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LoanSimulator />
      </main>
    </div>
  );
}
