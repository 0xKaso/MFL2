import React from 'react';
import { Link, Card, Box, Typography, Grid, CardContent, CardActions } from '@mui/material';
import _ from 'lodash';
import { useTheme } from '@mui/material/styles';
import { t } from '@lingui/macro';
import StyledToolTip from '../components/StyledToolTip';
import SectionSimpleWrapper from './SectionSimpleWrapper';

const coreContributors = [
  {
    image: '/teams/kasoqian.jpg',
    description: 'Web3 BUIDLER and BELIEVER! Creator of GuoChanLiangXin and MyFirstNFT. Member @theNextDAO. Core contributor @GCLX community.',
    name: 'kasoqian',
    twitter: 'https://twitter.com/kasoqian_eth',
  },
  {
    image: '/teams/LouisWang.jpg',
    description: 'Web3 BUIDLER. Artist of GuoChanLiangXin. Member @theNextDAO. 💎  hand.  Core contributor @GCLX community.',
    name: 'LouisWang',
    twitter: 'https://twitter.com/lviswang',
  },
  {
    image: '/teams/0xCryptolee.jpg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3.0. Call me John 或者老高. Member @GCLX community.',
    name: '0xCryptolee',
    twitter: 'https://twitter.com/IpfSxian',
  },
  {
    image: '/teams/AnImpro.jpg',
    description: 'Core Contributor @theNextDAO.',
    name: 'AnImpro',
    twitter: 'https://twitter.com/0xAnImpro',
  },
  {
    image: '/teams/kahn.jpeg',
    description: 'BUIDLER, Surfer, Burner and Dreamer. Mod @theNextDAO. Lost somewhere in Web3.',
    name: 'kahn',
  },
  {
    image: '/teams/Jacky.png',
    description: "A newcomer to Web3. Let's connect and do something fun together! 3n4.pps.eth coming soon☝🏻",
    name: 'Jacky',
    twitter: 'https://twitter.com/jacky_luxue',
  },
  {
    image: '/teams/Samo.png',
    description: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    name: 'Samo',
    twitter: 'https://twitter.com/BirkSamo',
  },
  {
    image: '/teams/zircon.png',
    description: 'Designer, Crypto & NFT fans',
    name: 'zircon',
    twitter: 'https://twitter.com/the_crypto101',
  },
  {
    image: '/teams/huahua.jpg',
    description: 'Web3 designer and fanart artist.',
    name: 'huahua',
  },
  {
    image: '/teams/cherryyang.jpg',
    description: 'She/Her. Web3 BUIDLER. Rug-pull Addict.',
    name: 'cherryyang',
    twitter: 'https://twitter.com/cherry_yang_cn',
  },
  {
    image: '/teams/zpan.png',
    description: 'She/Her. Web3 BUIDLER. Rug-pull Addict.',
    name: 'zpan',
    twitter: 'https://twitter.com/0zpan',
  },
  {
    image: '/teams/Dyson.png',
    description: 'Moonwalker @theNextDAO.',
    name: 'Dyson',
    twitter: 'https://twitter.com/Dysonisme',
  },
  {
    image: '/teams/brucexu.eth.png',
    description: 'I wish to be an interesting piece of code in your metaverse.',
    name: 'brucexu.eth',
    twitter: 'https://twitter.com/brucexu_eth',
  },
  {
    image: '/teams/JayK.jpg',
    description: 'Front-end developer/solidity, beginner/Web3 rover.',
    name: 'JayK',
  },
];

const activeContributors = [
  {
    image: '/team/smrtfish.jpeg',
    description: 'Felt emo might brew coffee.',
    name: 'smrtfish',
    twitter: 'https://twitter.com/smrtfish',
  },
  {
    image: '/team/jojo.jpeg',
    description: 'Web3 believer Mod @My First NFT and @X Rabbits Club.',
    name: 'jojo',
    twitter: 'https://twitter.com/xuanma2022',
  },
  {
    image: '/team/dt.jpg',
    description:
      'GCLX #711 | Muri #4774 | Fireworks Igniter Di (地) Tui (推) means selling things one by one face to face. This is my way to promote Web3 and my job to earn a living.',
    name: 'DT.acheng',
    twitter: 'https://twitter.com/cryptoacheng',
  },
  {
    image: '/team/liuche.jpeg',
    description: 'The man is lazy and nothing is left.',
    name: 'liuche.eth',
    mirror: 'https://mirror.xyz/liuche.eth',
  },
  {
    image: '/team/daniaoren.jpeg',
    description: 'Web3 resident. Builder, trader and gamer.',
    name: 'daniaoren',
    twitter: 'https://twitter.com/daniaoren',
  },
  {
    image: '/team/Marvin.jpeg',
    description: 'Web2 Coder, Web3 Player. Crypto Mindset & Education.CFD trader.',
    name: 'Marvin',
    twitter: 'https://twitter.com/FlyFlyyeah',
  },
  {
    image: '/team/fencun.jpg',
    description: 'Half a year A7-A4 web3 Connecting plate expert. Proficient in loss investment logic. If you have too much money, please contact me to help you lose it',
    name: 'Fencun',
    twitter: 'https://twitter.com/Fencun_nft',
  },
  {
    image: '/team/mz.jpg',
    description: 'A Web2 game developer and engineer trainer with more than 10 years of experience. Now, looking for some fun such as Generative Art in Web3. Call me Michael.',
    name: 'Michael Zhu',
    twitter: 'https://twitter.com/artgeek_eth',
  },
  {
    image: '/team/chris.jpg',
    description: 'Five-year-old leek, a fan of NFTs and games, now working as a farmer in Thailand.0dao.',
    name: '0-dao.eth',
    twitter: 'https://www.twitter.com/0d_chao',
  },
  {
    image: '/team/nakke.png',
    description: 'GCLX community contributor | exploring Web3 by night | ultra-marathon runner | 7 continents | Carnegie Mellon | father & husband | mfer | 🇨🇳 🇺🇸 🇭🇰.',
    name: 'nakke',
    twitter: 'https://twitter.com/Nakostoyevsky',
  },
  {
    image: '/team/nathalia.jpeg',
    description: 'A Web2 Operation & MKT with more than 4 years of experiences. Sometime @NexDAO mod. Call me Nathalia~',
    name: 'Nathalia',
    twitter: 'https://twitter.com/ayanyu09',
  },
  {
    image: '/team/kuncle.png',
    description: '#Web3 Builder | Data Expert at #Crypto #Exchanges | Early Member @theNextDAO | Work in #Singapore',
    name: 'Kuncle',
    twitter: 'https://twitter.com/KingsUncle1',
  },
  {
    image: '/team/yanyan.jpg',
    description: 'A Web2 legal counsel, maybe also a Web3 KOL for nothing and a real believer in CC0.',
    name: 'Yanyan',
    twitter: 'https://twitter.com/seki_maruko',
  },
  {
    image: '/team/skyler.jpeg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Skyler.',
    name: 'skyler',
    twitter: 'https://twitter.com/VerySkyler',
  },
  {
    image: '/team/justVic.jpeg',
    description: 'Contributor @theNextDAO, Web3 student',
    name: 'justVic',
    twitter: 'https://twitter.com/virackt',
  },
  {
    image: '/team/lidonghao.png',
    description: '#Web3 Studen | Member @theNextDAO',
    name: 'lidonghao.eth',
    twitter: 'https://twitter.com/lidonghao1116',
  },
  {
    image: '/team/wesh.jpg',
    description: 'NFT trader & collector. Web3 apprentice.',
    name: 'wesh.eth',
    twitter: 'https://twitter.com/mekawesh',
  },
  {
    image: '/team/highfar.png',
    description: 'Member @theNextDAO',
    name: 'Highfar',
    twitter: 'https://twitter.com/highfar1988',
  },
  {
    image: '/team/yixinrock.jpg',
    description: 'NFT Arbitrager, Web3 Developer.',
    name: 'yixinrock',
    twitter: 'https://twitter.com/yixinrock_',
  },
  {
    image: '/team/zeddy.png',
    description: 'Dreamer. Enjoy myself in Web3',
    name: 'Zeddy',
    twitter: 'https://twitter.com/Zeddy11Zeddy11',
  },
  {
    image: '/team/shenyu.jpeg',
    description: "Cofounder of F2Pool & Cobo. I'm ready to travel, the Bitcoin is my ticket",
    name: 'DiscusFish',
    twitter: 'https://twitter.com/bitfish1',
  },
  {
    image: '/team/sea.png',
    description: 'Core Contributor @theNextDAO // Web3 entrepreneur // NFT Advisor',
    name: '0xSea.eth',
    twitter: 'https://twitter.com/_0xSea',
  },
  {
    image: '/team/xing.jpeg',
    description: 'A Web2 developer with more than 10 years of experience. Now, looking for some fun in Web3. Call me Xing.',
    name: 'Xing',
    twitter: 'https://twitter.com/nelsonie',
  },
  {
    image: '/team/lili.jpeg',
    description: 'A newcomer to Web3. Life-long learner and full-time Mum.',
    name: 'Lili',
    twitter: '',
  },
  {
    image: '/team/yofine.jpeg',
    description: 'Web developer',
    name: 'yofine.eth',
    twitter: 'https://twitter.com/yofine2js',
  },
  {
    image: '/team/shanchao.jpeg',
    description: 'NFT man, Web3 worker',
    name: 'shanchao.wsc',
    twitter: 'https://twitter.com/sam48522931',
  },
  {
    image: '/team/kitty.jpg',
    description: "Don't Panic, Lead mod of @theNextDAO",
    name: 'Kitty',
    twitter: 'https://twitter.com/0xKitty_eth',
  },
  {
    image: '/team/spider.png',
    description: "A spider wandering Web2 and Web3, you can't see me, but I've been weaving.",
    name: 'Spider',
  },
  {
    image: '/team/ooze.jpg',
    description: 'This person is lazy@Left nothing',
    name: 'Ooze',
    twitter: 'https://twitter.com/0x0oze',
  },
  {
    image: '/team/yanelis.jpeg',
    description: 'Director of investment CoinMix Global. YanelisDAO Sponsor.',
    name: 'Yanelis',
    twitter: 'https://twitter.com/Yanelis_yang',
  },
  {
    image: '/team/bjhh.jpeg',
    description: 'A Web3 builder, a Move contract developer, actively trying fun things.',
    name: '不霁何虹',
    twitter: 'https://twitter.com/WGB5445',
  },
  {
    image: '/team/popil.jpeg',
    description: 'Artist',
    name: 'popil',
    twitter: 'https://twitter.com/popilart',
  },
  {
    image: '/team/wangxiaohai.jpg',
    description: 'A Marxist inside.',
    name: '王小嗨',
    twitter: 'https://twitter.com/yeahwong',
  },
  {
    image: '/team/sean.jpeg',
    description: 'Web3 新人，Web2 游戏产品设计师，JPG 爱好者，币圈韭菜。',
    name: 'SΞAN',
    twitter: 'https://twitter.com/shintemy',
  },
  {
    image: '/team/lidamao.jpeg',
    description: 'Web3 卖萌工程师',
    name: 'lidamao.eth',
    twitter: 'https://twitter.com/LeePerfect233',
  },
  {
    image: '/team/clu.jpg',
    description: 'Builder and Dreamer. | @theNextDAO. | Build worlds around dreams, Not dreams around worlds.',
    name: 'Clu',
    twitter: 'https://twitter.com/thexclu',
  },
  {
    image: '/team/amadeus.png',
    description: 'Amadeus by Civil Labs, no-code tool for NFT creator, make NFT easier! ',
    name: 'Amadeus',
    twitter: 'https://twitter.com/amadeus_nft_io',
  },
  {
    image: '/team/wuya.jpg',
    description: 'free animtor',
    name: 'wuya',
    twitter: 'https://twitter.com/wuyaanimation',
  },
  {
    image: '/team/0xvision.png',
    description: 'Web2 educator jogging into Web3.',
    name: '0xVision.eth',
    twitter: 'https://twitter.com/VisionLG0825',
  },
];

function Contributor(props) {
  const theme = useTheme();

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: `translateY(-${theme.spacing(1 / 2)})`,
        },
      }}
    >
      <Box component={Card} width={1} height={1} boxShadow={1} display={'flex'} flexDirection={'column'} sx={{ backgroundImage: 'none' }}>
        <Box
          component="img"
          src={props.image}
          title={props.name}
          sx={{
            width: '100%',
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
        <Box component={CardContent} position={'relative'}>
          <Box display="flex" justifyContent="space-between">
            <Typography textAlign="center" fontWeight={700}>
              {props.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function SimpleContributor(props) {
  const theme = useTheme();

  return (
    <Box
      width={1}
      height={1}
      sx={{
        textDecoration: 'none',
      }}
    >
      <StyledToolTip enterTouchDelay={0}>
        <Box component={Card} width={1} height={1} boxShadow={1} display={'flex'} flexDirection={'column'} sx={{ backgroundImage: 'none' }}>
          <Box
            component="img"
            src={props.image}
            title={props.name}
            sx={{
              width: '100%',
              filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
          <Box padding="16px !important" component={CardContent} position={'relative'} display="flex" alignItems="center" justifyContent="space-between">
            <Typography
              variant={'body2'}
              sx={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
              fontWeight={700}
            >
              {props.name}
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </StyledToolTip>
    </Box>
  );
}

export default function SectionTeam() {
  const theme = useTheme();

  return (
    <SectionSimpleWrapper title={t`sectionTeam-title-10`} description={+t`sectionTeam-title-11`} id="team">
      <Box>
        <Typography textAlign="center" marginBottom={{ xs: 6, sm: 8 }} variant="h6" color="text.secondary">
          {t`sectionTeam-content-10`}
        </Typography>
        <Typography textAlign="center" marginBottom={4} variant="h6" sx={{ fontWeight: 900 }}>
          {t`sectionTeam-content-11`}
        </Typography>
        <Box padding={2} marginBottom={8}>
          <Grid container spacing={2}>
            {coreContributors.map((item, i) => (
              <Grid item xs={12} sm={6} md={3} lg={2} key={i}>
                <Contributor {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Typography textAlign="center" marginBottom={4} variant="h6" sx={{ fontWeight: 900 }}>
          {t`sectionTeam-content-12`}
        </Typography>
        <Box padding={2} marginBottom={8}>
          <Grid container spacing={2}>
            {_.shuffle(activeContributors).map((item, i) => (
              <Grid item xs={6} sm={4} md={2} lg={1.5} key={i}>
                <SimpleContributor {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </SectionSimpleWrapper>
  );
}
