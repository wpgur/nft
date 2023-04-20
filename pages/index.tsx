import { Web3Button } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        <img src="./logo.png" alt="logo" className={styles.eyeLogo} />
        <h1>The EYE BALLS Project </h1>
        <p>NFT Project using thirdweb.com</p>
        <br />
        <Web3Button
          contractAddress="0x48dcD4c2C35A0248b9bEB6D7390c64BC12A4C9f9"
          theme="dark"
          action={(contract) => {
            contract.erc721.claim(1);
          }} // Logic to execute when clicked
        >
          Claim Eye
        </Web3Button>
      </section>
    </div>
  );
};
export default Home;
