import { ConnectWallet } from '@thirdweb-dev/react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
const Header: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div>
        <Link
          href={'/'}
          className={router.pathname == '/' ? styles.active : styles.link}
        >
          Claim
        </Link>
        <Link
          href={'/nfts'}
          className={router.pathname == '/nfts' ? styles.active : styles.link}
        >
          NFTs
        </Link>
        <Link
          href={'/my-nfts'}
          className={
            router.pathname == '/my-nfts' ? styles.active : styles.link
          }
        >
          My NFTs
        </Link>
        <Link
          href={'/write-note'}
          className={
            router.pathname == '/write-note' ? styles.active : styles.link
          }
        >
          Write Note
        </Link>
        <Link
          href={'/test'}
          className={router.pathname == '/test' ? styles.active : styles.link}
        >
          test
        </Link>
      </div>
      <ConnectWallet theme="light" btnTitle="Connect Wallet" />
    </div>
  );
};
export default Header;
