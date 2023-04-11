import React from 'react';
import Head from 'next/head';
import { t } from '@lingui/macro';
import Main from '../layouts/Main';
import useProgress, { ProgressContext } from '../hooks/useProgress';
import useWallet, { WalletContext } from '../hooks/useWallet';
import useMintData, { MintDataContext } from '../hooks/useMintData';
import FixedTools from '../components/FixedTools';

import SectionTitle from '../sections/Title';
import TopSection from '../sections/Top';
import SectionCatalog from '../sections/Catalog';
import SectionBlockchain from '../sections/Blockchain';
import SectionComponents from '../sections/Components';
import SectionETH from '../sections/ETH';
import SectionBTC from '../sections/BTC';
import SectionWallet from '../sections/Wallet';
import SectionSecurity from '../sections/Security';
import SectionGetETH from '../sections/GetETH';
import SectionConnectWallet from '../sections/ConnectWallet';
import SectionMint from '../sections/Mint';
import SectionNFT from '../sections/NFT';
import SectionNFTValue from '../sections/NFTValue';
import SectionNext from '../sections/Next';
import SectionPartners from '../sections/Partners';
import SectionTeam from '../sections/Team';
import SectionDiscord from '../sections/Discord';
import SectionDYOR from '../sections/DYOR';
import SectionFooter from '../sections/Footer';
import { LXDAOIntroduction } from 'lxdao-ui';
import { Box } from '@mui/system';

export default function Home() {
  const progress = useProgress();
  const wallet = useWallet();
  const mintData = useMintData();

  return (
    <MintDataContext.Provider value={mintData}>
      <WalletContext.Provider value={wallet}>
        <ProgressContext.Provider value={progress}>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.png" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>
              My First NFT | A non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying values of NFT, and security principles.
            </title>
            <meta
              name="description"
              content="My First NFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying
              values of NFT, and security principles."
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/banner.png" />
            <meta
              property="og:title"
              content="My First NFT | A non-profit instructional project for Web3
              newbies."
            />
            <meta
              property="og:description"
              content="My First NFT is a non-profit instructional project for Web3 newbies. Get a FREE NFT while learning about Web3, underlying
              values of NFT, and security principles."
            />
            <meta property="og:url" content="https://myfirstnft.info/" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
      `,
              }}
            />
          </Head>
          <Main>
            <TopSection />
            <SectionCatalog />
            <SectionTitle bgcolor="#FFFEA6" title={t`sectiontitle-10`} id="catalog1">
              <SectionBlockchain />
              <SectionBTC />
              <SectionComponents />
              <SectionETH />
            </SectionTitle>
            <SectionTitle bgcolor="#CBCDFB" title={t`sectiontitle-11`} id="catalog2">
              <SectionNFT />
              <SectionNFTValue />
              <SectionDYOR />
            </SectionTitle>
            <SectionTitle bgcolor="#FBBD78" title={t`sectiontitle-12`} id="catalog3">
              <SectionWallet />
              <SectionSecurity />
              <SectionGetETH />
              <SectionConnectWallet />
              <SectionMint />
              <SectionDiscord />
            </SectionTitle>
            {/* <SectionNext /> */}
            <SectionPartners />
            <SectionTeam />
            <Box marginBottom={4} paddingX={5}>
              <LXDAOIntroduction maxWidth="1240px" xsWidth="326px" />
            </Box>

            <SectionFooter />
            <FixedTools />
          </Main>
        </ProgressContext.Provider>
      </WalletContext.Provider>
    </MintDataContext.Provider>
  );
}
