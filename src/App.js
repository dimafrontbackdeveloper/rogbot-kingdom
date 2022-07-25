import './App.css';

import logo from './assets/images/logo.svg';
import robot2 from './assets/images/robot2.jpg';
import robotZoom1 from './assets/images/robot-zoom1.png';
import box from './assets/images/box.png';
import robotMini1 from './assets/images/robot-mini1.png';
import robotLine from './assets/images/robot-line.jpg';
import pionersBG from './assets/images/pioners-bg.jpg';

import { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import './assets/scss/style.scss';
import { ConnectAndMintAndDisconect } from './components/ConnectAndMintAndDisconect';
import { useDispatch, useSelector } from 'react-redux';

function FaqRow({ id, textTop, textBottom, openFaq, activeFaq }) {
  return (
    <div className="faq__row">
      <div className="faq__row-top d-f jc-sb ai-c">
        <div className="left">{textTop}</div>
        <div className="right" onClick={() => openFaq(id)}>
          <div className="line line1"></div>
          <div className={`line line2 ${activeFaq === id && 'line2--hiden'}`}></div>
        </div>
      </div>
      <div className={`faq__row-bottom ${activeFaq === id && 'faq__row-bottom--opened'}`}>
        <p>{textBottom}</p>
      </div>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  const [activeFaq, setActiveFaq] = useState(null);
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const [isMouseMove, setIsMouseMove] = useState(false);

  const wallet = useSelector((state) => state.wallet);

  const faqRows = [
    {
      id: 0,
      textTop: 'Who Are The Rogbot?',
      textBottom: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam voluptatibus ut ea?
    Doloremque accusamus voluptate repellendus reiciendis est, eligendi sequi a numquam
    incidunt pariatur non esse blanditiis fugit ab.`,
    },
    {
      id: 1,
      textTop: 'Who Are The Rogbot?',
      textBottom: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam voluptatibus ut ea?
    Doloremque accusamus voluptate repellendus reiciendis est, eligendi sequi a numquam
    incidunt pariatur non esse blanditiis fugit ab.`,
    },
    {
      id: 2,
      textTop: 'Who Are The Rogbot?',
      textBottom: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam voluptatibus ut ea?
    Doloremque accusamus voluptate repellendus reiciendis est, eligendi sequi a numquam
    incidunt pariatur non esse blanditiis fugit ab.`,
    },
    {
      id: 3,
      textTop: 'Who Are The Rogbot?',
      textBottom: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veniam voluptatibus ut ea?
    Doloremque accusamus voluptate repellendus reiciendis est, eligendi sequi a numquam
    incidunt pariatur non esse blanditiis fugit ab.`,
    },
  ];

  const openFaq = (id) => {
    setActiveFaq((prev) => {
      if (prev === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '<' : '>';
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`leaf ${pointer === '<' ? 'left' : 'right'}`}>
        {pointer}
      </button>
    );
  };

  return (
    <div className="wrapper">
      <ConnectAndMintAndDisconect />

      <div className={`burger-menu ${isActiveBurger && 'burger-menu--active'}`}>
        <div className="close" onClick={() => setIsActiveBurger(false)}>
          <div></div>
          <div></div>
        </div>
        <button
          className={`button`}
          onMouseOver={() => {
            setIsMouseMove(true);
          }}
          onMouseOut={() => {
            setIsMouseMove(false);
          }}
          onClick={() => {
            if (!wallet) {
              const selectWalletFunctional = document.querySelector('.button-select-wallet');
              dispatch({
                type: 'SET_WALLET',
                payload: null,
              });
              localStorage.setItem('isNeedMint', false);
              selectWalletFunctional.click();
            } else {
              const disconnectFunctional = document.querySelector('.wallet-adapter-button-trigger');
              localStorage.setItem('isNeedMint', false);
              disconnectFunctional.click();

              dispatch({
                type: 'SET_WALLET',
                payload: '',
              });
            }
          }}>
          {wallet ? (isMouseMove ? 'Disconnect' : wallet) : 'Connect Wallet'}
        </button>
        <hr />
        <div className="social">
          <div>Twitter</div>
          <div>Instagran</div>
          <div>Medium</div>
          <div>Discord</div>
        </div>
        <div className="burger-menu__bottom">2022 by Rogbot Kingdom. All Right Reserved </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="header__row d-f jc-sb ai-c">
            <h1 className="header__logo">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>
            </h1>
            <div className="connect-wallet d-f ai-c">
              <svg className="soc" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2.41887C17.3306 2.7125 16.6174 2.90712 15.8737 3.00162C16.6388 2.54487 17.2226 1.82712 17.4971 0.962C16.7839 1.38725 15.9964 1.68763 15.1571 1.85525C14.4799 1.13413 13.5146 0.6875 12.4616 0.6875C10.4186 0.6875 8.77387 2.34575 8.77387 4.37863C8.77387 4.67113 8.79862 4.95237 8.85938 5.22012C5.7915 5.0705 3.07687 3.60013 1.25325 1.36025C0.934875 1.91263 0.748125 2.54488 0.748125 3.2255C0.748125 4.5035 1.40625 5.63637 2.38725 6.29225C1.79437 6.281 1.21275 6.10888 0.72 5.83775C0.72 5.849 0.72 5.86363 0.72 5.87825C0.72 7.6715 1.99912 9.161 3.6765 9.50412C3.37612 9.58625 3.04875 9.62562 2.709 9.62562C2.47275 9.62562 2.23425 9.61213 2.01038 9.56262C2.4885 11.024 3.84525 12.0984 5.4585 12.1332C4.203 13.1154 2.60888 13.7071 0.883125 13.7071C0.5805 13.7071 0.29025 13.6936 0 13.6565C1.63462 14.7106 3.57188 15.3125 5.661 15.3125C12.4515 15.3125 16.164 9.6875 16.164 4.81175C16.164 4.64862 16.1584 4.49113 16.1505 4.33475C16.8829 3.815 17.4982 3.16587 18 2.41887Z" />
              </svg>
              <svg className="soc" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H0V18H18V0Z" />
                <path
                  d="M4.29549 6.0199C4.31051 5.87146 4.2539 5.72474 4.14306 5.62484L3.014 4.2647V4.06152H6.51975L9.22951 10.0044L11.6118 4.06152H14.9539V4.2647L13.9885 5.19027C13.9053 5.25371 13.864 5.35797 13.8813 5.46117V12.2619C13.864 12.3651 13.9053 12.4693 13.9885 12.5328L14.9313 13.4583V13.6615H10.1892V13.4583L11.1659 12.5102C11.2618 12.4143 11.2618 12.386 11.2618 12.2393V6.7423L8.54642 13.6389H8.17948L5.01809 6.7423V11.3645C4.99173 11.5589 5.05627 11.7545 5.1931 11.895L6.4633 13.4358V13.6389H2.86157V13.4358L4.13177 11.895C4.2676 11.7543 4.32838 11.5573 4.29549 11.3645V6.0199Z"
                  fill="white"
                />
              </svg>
              {/* connect and disconnect button */}
              <button
                className={`button`}
                onMouseOver={() => {
                  setIsMouseMove(true);
                }}
                onMouseOut={() => {
                  setIsMouseMove(false);
                }}
                onClick={() => {
                  if (!wallet) {
                    const selectWalletFunctional = document.querySelector('.button-select-wallet');
                    dispatch({
                      type: 'SET_WALLET',
                      payload: null,
                    });
                    localStorage.setItem('isNeedMint', false);
                    selectWalletFunctional.click();
                  } else {
                    const disconnectFunctional = document.querySelector(
                      '.wallet-adapter-button-trigger',
                    );
                    localStorage.setItem('isNeedMint', false);
                    disconnectFunctional.click();

                    dispatch({
                      type: 'SET_WALLET',
                      payload: '',
                    });
                  }
                }}>
                {wallet ? (isMouseMove ? 'Disconnect' : wallet) : 'Connect Wallet'}
              </button>
            </div>
            <div className="burger" onClick={() => setIsActiveBurger(true)}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main className="content">
        <section className="intro"></section>
        <section className="exploring-metaverse">
          <div className="container">
            <h2 className="title">Never Stop Exploring In Metaverse</h2>
            <p>
              The Rogbot Kingdom is an ethnic living in Rogue Planet, and has been travelling in
              space. The nation has evolved from a group of talents and scientists and transformed
              to half robot half humanity. They keep learning about diverse cultures and technology
              during the endless journey.
            </p>
            <p>
              {' '}
              The Rogbots are a Kingdom of 10000 citizens in NFTs strolling through the Ethereum
              blockchain. Rogbots are unique in feature and characters and fall into 5 kinds of
              species with multitude of different traits ranging in both rarity and looks. Some
              appear cool looking. Some look weird. Some are too adorable! The Rogbot project is an
              elaborate and experimental project for Sci-Fi lovers for the long going Metaverse
              project.
            </p>

            <div className="exploring-metaverse__buttons d-f ai-c jc-c">
              {/* connect and mint button */}
              <button
                className="button"
                onClick={() => {
                  if (!wallet) {
                    const selectWalletFunctional = document.querySelector('.button-select-wallet');
                    dispatch({
                      type: 'SET_WALLET',
                      payload: null,
                    });
                    localStorage.setItem('isNeedMint', false);
                    selectWalletFunctional.click();
                    localStorage.setItem('isNeedMint', true);
                  } else {
                    const mintFunctional = document.querySelector('.mint');
                    localStorage.setItem('isNeedMint', false);
                    mintFunctional.click();
                  }
                }}>
                Mint
              </button>
              <button className="button">Opensea</button>
            </div>
          </div>

          <div className="slider ">
            <div className="slider__wrapper ">
              <Carousel
                itemsToShow={window.innerWidth > 768 ? 4 : window.innerWidth > 425 ? 3 : 1}
                pagination={false}
                renderArrow={myArrow}>
                <div className="slider__item">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item ">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item ">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item ">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item  ">
                  <img src={robot2} alt="nft" />
                </div>
                <div className="slider__item ">
                  <img src={robot2} alt="nft" />
                </div>
              </Carousel>
            </div>
            {/* <button className="leaf left"></button>
            <button className="leaf right"></button> */}
          </div>
        </section>

        <section className="pioners">
          <div className="pioners__row d-g">
            <div className="pioners__block">
              <h2 className="title">Pioneers</h2>
              <p>
                An adventure spaceship was sent to space and the first 555 Pioneers Rogbots are
                discovered during the journey. We will reserve our “firstly discovered” for our
                early supporters and available in the OpenSea. Profits made will help fund the
                project, initial overheads and enhance a stronger NFT community.
              </p>
              <p>
                Minting price: 0.06 ETH <br />
                Date: 30th April 2022
              </p>
              <a href="#">DETAILS TO BE ANNOUNCED IN DISCORD</a>
            </div>
            <div className="pioners__img">
              <img src={pionersBG} alt="city" />
            </div>
          </div>
        </section>

        <section className="project section">
          <div className="container">
            <h2 className="title">Project Information</h2>
            <div className="project__row d-g gtc-2">
              <div className="project__column">
                <div className="project__column-left">
                  <span>1</span>
                </div>
                <div className="project__column-right">
                  <p>
                    The Rogbot Kingdom will include 2 majors parts, the Pioneer Drop and the
                    Generative Drop.
                  </p>
                </div>
              </div>
              <div className="project__column">
                <div className="project__column-left">
                  <span>4</span>
                </div>
                <div className="project__column-right">
                  <p>
                    RBKD is generated from 500+ traits in 11 categories, such as: head, body, leg,
                    hand, face, ears, body deco etc to enhance a wide range of over millions of
                    different unique combinations.
                  </p>
                </div>
              </div>
              <div className="project__column">
                <div className="project__column-left">
                  <span>2</span>
                </div>
                <div className="project__column-right">
                  <p>
                    All RBKD are one of a kind. Whilst all Bots are unique, some Rogbots will be
                    rarer than others.
                  </p>
                </div>
              </div>
              <div className="project__column">
                <div className="project__column-left">
                  <span>5</span>
                </div>
                <div className="project__column-right">
                  <p>Holders of each RBKD possess commercial usage rights to their NFT.</p>
                </div>
              </div>
              <div className="project__column">
                <div className="project__column-left">
                  <span>3</span>
                </div>
                <div className="project__column-right">
                  <p>
                    We are determined to develop a sustainable community and expand our kingdom.
                  </p>
                </div>
              </div>
              <div className="project__column">
                <div className="project__column-left">
                  <span>6</span>
                </div>
                <div className="project__column-right">
                  <p>Non-fungible token is secured by the Ethereum blockchain.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="parity">
          <div className="container">
            <h2 className="title">Rarity</h2>
            <div className="parity__row d-g gtc-2">
              <div className="parity__column">
                <div className="parity__column-img">
                  <img src={robotZoom1} alt="robot" />
                </div>
                <h3>LEGEND</h3>
                <p>
                  The Legend are the ancient robots in the kingdom. Making up for just 0.3% of the
                  citizen population, the Legend are the most rare spiritual rogbots we ever had
                  with glowing designs. They are mysterious and rarely seen so far that people
                  thought it was a myth on the planet.
                </p>
              </div>
              <div className="parity__column">
                <div className="parity__column-img">
                  <img src={robotZoom1} alt="robot" />
                </div>
                <h3>LEGEND</h3>
                <p>
                  The Legend are the ancient robots in the kingdom. Making up for just 0.3% of the
                  citizen population, the Legend are the most rare spiritual rogbots we ever had
                  with glowing designs. They are mysterious and rarely seen so far that people
                  thought it was a myth on the planet.
                </p>
              </div>
              <div className="parity__column">
                <div className="parity__column-img">
                  <img src={robotZoom1} alt="robot" />
                </div>
                <h3>LEGEND</h3>
                <p>
                  The Legend are the ancient robots in the kingdom. Making up for just 0.3% of the
                  citizen population, the Legend are the most rare spiritual rogbots we ever had
                  with glowing designs. They are mysterious and rarely seen so far that people
                  thought it was a myth on the planet.
                </p>
              </div>
              <div className="parity__column">
                <div className="parity__column-img">
                  <img src={robotZoom1} alt="robot" />
                </div>
                <h3>LEGEND</h3>
                <p>
                  The Legend are the ancient robots in the kingdom. Making up for just 0.3% of the
                  citizen population, the Legend are the most rare spiritual rogbots we ever had
                  with glowing designs. They are mysterious and rarely seen so far that people
                  thought it was a myth on the planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap section">
          <div className="container">
            <h2 className="title">Roadmap</h2>
            <div className="roadmap__row">
              <div className="roadmap__column roadmap__column--text-to-right">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left"></div>
              <div className="roadmap__column roadmap__column--text-to-right"></div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left">
                <h3>Community Engagement</h3>
                <p>
                  We all stand for Ukraine and hope that we're able to help. We will create 10
                  special editions of Ukraine Warrior NFT and list them in OpenSea directly. The
                  income of these special editions will be fully donated to Ukraine to support the
                  fight for freedom. For more information, please visit our Opensea collection.
                </p>

                <p>
                  <a href="#">View on Opensea</a>
                </p>
              </div>
              <div className="roadmap__column roadmap__column--text-to-right">
                <h3>Discover Pioneers In Space</h3>
                <p>
                  An adventure spaceship was sent to space and the first 555 Pioneers Rogbots are
                  discovered during the journey. We will reserve our “firstly discovered” for our
                  early supporters and available in the OpenSea. Profits made will help fund the
                  project, initial overheads and enhance a stronger NFT community.
                </p>
                <p>
                  Phrase 1 - Pioneer Rogbot <br />
                  Pioneer QTD: 555 <br />
                  Minting price: 0.06 ETH <br />
                  Date: 30th April 2022
                </p>
              </div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left"></div>
              <div className="roadmap__column roadmap__column--text-to-right"></div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--text-to-right">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left"></div>
              <div className="roadmap__column roadmap__column--text-to-right"></div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--text-to-right">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left"></div>
              <div className="roadmap__column roadmap__column--text-to-right"></div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--text-to-right">
                <h3>Community Engagement</h3>
                <p>
                  Create a verified The Rogbot Kingdom channel. A discord and twitter channel
                  dedicated to floor discussion, networking, education, meet-ups, exclusive holder
                  events etc.
                </p>
              </div>
              <div className="roadmap__column roadmap__column--line d-f jc-c ai-c fd-c">
                <div className="circle"></div>
                {/* <!-- <img src="./../assets/images/line.png" alt="line"> --> */}
              </div>
              <div className="roadmap__column roadmap__column--text-to-left"></div>
            </div>
            <div className="box">
              <img src={box} alt="box" />
            </div>
          </div>
        </section>

        <section className="team section">
          <div className="container">
            <h2 className="title">Meet The Team</h2>
            <h3>
              Our team strongly believes in transparency and honesty, as well as giving back to the
              community that has supported the project along the way. We welcome all ideas and
              suggestions for the project and are always looking to add talented people to the team.
              Join our discord for more info.
            </h3>
            <div className="team__row d-g gtc-4">
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_280)">
                      <path d="M12 2.27925C11.5538 2.475 11.0782 2.60475 10.5825 2.66775C11.0925 2.36325 11.4818 1.88475 11.6648 1.308C11.1892 1.5915 10.6642 1.79175 10.1047 1.9035C9.65325 1.42275 9.00975 1.125 8.30775 1.125C6.94575 1.125 5.84925 2.2305 5.84925 3.58575C5.84925 3.78075 5.86575 3.96825 5.90625 4.14675C3.861 4.047 2.05125 3.06675 0.8355 1.5735C0.62325 1.94175 0.49875 2.36325 0.49875 2.817C0.49875 3.669 0.9375 4.42425 1.5915 4.8615C1.19625 4.854 0.8085 4.73925 0.48 4.5585C0.48 4.566 0.48 4.57575 0.48 4.5855C0.48 5.781 1.33275 6.774 2.451 7.00275C2.25075 7.0575 2.0325 7.08375 1.806 7.08375C1.6485 7.08375 1.4895 7.07475 1.34025 7.04175C1.659 8.016 2.5635 8.73225 3.639 8.7555C2.802 9.41025 1.73925 9.80475 0.58875 9.80475C0.387 9.80475 0.1935 9.79575 0 9.771C1.08975 10.4738 2.38125 10.875 3.774 10.875C8.301 10.875 10.776 7.125 10.776 3.8745C10.776 3.76575 10.7723 3.66075 10.767 3.5565C11.2552 3.21 11.6655 2.77725 12 2.27925Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_280">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 0H3.00017C1.35036 0 0.000244141 1.35011 0.000244141 2.99993V9.00007C0.000244141 10.6494 1.35036 12 3.00017 12H9.00002C10.6498 12 12 10.6494 12 9.00007V2.99993C12 1.35011 10.6498 0 9.00002 0ZM10.9999 9.00007C10.9999 10.1025 10.1031 11 9.00002 11H3.00017C1.89755 11 1.00027 10.1025 1.00027 9.00007V2.99993C1.00027 1.89716 1.89755 1.00002 3.00017 1.00002H9.00002C10.1031 1.00002 10.9999 1.89716 10.9999 2.99993V9.00007Z" />
                    <path d="M9.25047 3.49996C9.66467 3.49996 10.0005 3.16419 10.0005 2.74998C10.0005 2.33578 9.66467 2 9.25047 2C8.83627 2 8.50049 2.33578 8.50049 2.74998C8.50049 3.16419 8.83627 3.49996 9.25047 3.49996Z" />
                    <path d="M5.99993 3C4.34276 3 3 4.34291 3 5.99993C3 7.65633 4.34276 9.00015 5.99993 9.00015C7.65662 9.00015 8.99985 7.65633 8.99985 5.99993C8.99985 4.34291 7.65662 3 5.99993 3ZM5.99993 8.00012C4.89549 8.00012 4.00002 7.10466 4.00002 5.99993C4.00002 4.8952 4.89549 4.00002 5.99993 4.00002C7.10436 4.00002 7.99983 4.8952 7.99983 5.99993C7.99983 7.10466 7.10436 8.00012 5.99993 8.00012Z" />
                  </svg>
                </div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials"></div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_280)">
                      <path d="M12 2.27925C11.5538 2.475 11.0782 2.60475 10.5825 2.66775C11.0925 2.36325 11.4818 1.88475 11.6648 1.308C11.1892 1.5915 10.6642 1.79175 10.1047 1.9035C9.65325 1.42275 9.00975 1.125 8.30775 1.125C6.94575 1.125 5.84925 2.2305 5.84925 3.58575C5.84925 3.78075 5.86575 3.96825 5.90625 4.14675C3.861 4.047 2.05125 3.06675 0.8355 1.5735C0.62325 1.94175 0.49875 2.36325 0.49875 2.817C0.49875 3.669 0.9375 4.42425 1.5915 4.8615C1.19625 4.854 0.8085 4.73925 0.48 4.5585C0.48 4.566 0.48 4.57575 0.48 4.5855C0.48 5.781 1.33275 6.774 2.451 7.00275C2.25075 7.0575 2.0325 7.08375 1.806 7.08375C1.6485 7.08375 1.4895 7.07475 1.34025 7.04175C1.659 8.016 2.5635 8.73225 3.639 8.7555C2.802 9.41025 1.73925 9.80475 0.58875 9.80475C0.387 9.80475 0.1935 9.79575 0 9.771C1.08975 10.4738 2.38125 10.875 3.774 10.875C8.301 10.875 10.776 7.125 10.776 3.8745C10.776 3.76575 10.7723 3.66075 10.767 3.5565C11.2552 3.21 11.6655 2.77725 12 2.27925Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_280">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 0H3.00017C1.35036 0 0.000244141 1.35011 0.000244141 2.99993V9.00007C0.000244141 10.6494 1.35036 12 3.00017 12H9.00002C10.6498 12 12 10.6494 12 9.00007V2.99993C12 1.35011 10.6498 0 9.00002 0ZM10.9999 9.00007C10.9999 10.1025 10.1031 11 9.00002 11H3.00017C1.89755 11 1.00027 10.1025 1.00027 9.00007V2.99993C1.00027 1.89716 1.89755 1.00002 3.00017 1.00002H9.00002C10.1031 1.00002 10.9999 1.89716 10.9999 2.99993V9.00007Z" />
                    <path d="M9.25047 3.49996C9.66467 3.49996 10.0005 3.16419 10.0005 2.74998C10.0005 2.33578 9.66467 2 9.25047 2C8.83627 2 8.50049 2.33578 8.50049 2.74998C8.50049 3.16419 8.83627 3.49996 9.25047 3.49996Z" />
                    <path d="M5.99993 3C4.34276 3 3 4.34291 3 5.99993C3 7.65633 4.34276 9.00015 5.99993 9.00015C7.65662 9.00015 8.99985 7.65633 8.99985 5.99993C8.99985 4.34291 7.65662 3 5.99993 3ZM5.99993 8.00012C4.89549 8.00012 4.00002 7.10466 4.00002 5.99993C4.00002 4.8952 4.89549 4.00002 5.99993 4.00002C7.10436 4.00002 7.99983 4.8952 7.99983 5.99993C7.99983 7.10466 7.10436 8.00012 5.99993 8.00012Z" />
                  </svg>
                </div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials"></div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_12_280)">
                      <path d="M12 2.27925C11.5538 2.475 11.0782 2.60475 10.5825 2.66775C11.0925 2.36325 11.4818 1.88475 11.6648 1.308C11.1892 1.5915 10.6642 1.79175 10.1047 1.9035C9.65325 1.42275 9.00975 1.125 8.30775 1.125C6.94575 1.125 5.84925 2.2305 5.84925 3.58575C5.84925 3.78075 5.86575 3.96825 5.90625 4.14675C3.861 4.047 2.05125 3.06675 0.8355 1.5735C0.62325 1.94175 0.49875 2.36325 0.49875 2.817C0.49875 3.669 0.9375 4.42425 1.5915 4.8615C1.19625 4.854 0.8085 4.73925 0.48 4.5585C0.48 4.566 0.48 4.57575 0.48 4.5855C0.48 5.781 1.33275 6.774 2.451 7.00275C2.25075 7.0575 2.0325 7.08375 1.806 7.08375C1.6485 7.08375 1.4895 7.07475 1.34025 7.04175C1.659 8.016 2.5635 8.73225 3.639 8.7555C2.802 9.41025 1.73925 9.80475 0.58875 9.80475C0.387 9.80475 0.1935 9.79575 0 9.771C1.08975 10.4738 2.38125 10.875 3.774 10.875C8.301 10.875 10.776 7.125 10.776 3.8745C10.776 3.76575 10.7723 3.66075 10.767 3.5565C11.2552 3.21 11.6655 2.77725 12 2.27925Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_12_280">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="team__column">
                <div className="team__column-img">
                  <img src={robotMini1} alt="team" />
                </div>
                <h4>YAT MING</h4>
                <h5>Founder & Artist, Father of Rogbots</h5>
                <div className="socials">
                  <svg className="soc" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00002 0H3.00017C1.35036 0 0.000244141 1.35011 0.000244141 2.99993V9.00007C0.000244141 10.6494 1.35036 12 3.00017 12H9.00002C10.6498 12 12 10.6494 12 9.00007V2.99993C12 1.35011 10.6498 0 9.00002 0ZM10.9999 9.00007C10.9999 10.1025 10.1031 11 9.00002 11H3.00017C1.89755 11 1.00027 10.1025 1.00027 9.00007V2.99993C1.00027 1.89716 1.89755 1.00002 3.00017 1.00002H9.00002C10.1031 1.00002 10.9999 1.89716 10.9999 2.99993V9.00007Z" />
                    <path d="M9.25047 3.49996C9.66467 3.49996 10.0005 3.16419 10.0005 2.74998C10.0005 2.33578 9.66467 2 9.25047 2C8.83627 2 8.50049 2.33578 8.50049 2.74998C8.50049 3.16419 8.83627 3.49996 9.25047 3.49996Z" />
                    <path d="M5.99993 3C4.34276 3 3 4.34291 3 5.99993C3 7.65633 4.34276 9.00015 5.99993 9.00015C7.65662 9.00015 8.99985 7.65633 8.99985 5.99993C8.99985 4.34291 7.65662 3 5.99993 3ZM5.99993 8.00012C4.89549 8.00012 4.00002 7.10466 4.00002 5.99993C4.00002 4.8952 4.89549 4.00002 5.99993 4.00002C7.10436 4.00002 7.99983 4.8952 7.99983 5.99993C7.99983 7.10466 7.10436 8.00012 5.99993 8.00012Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="robotLine">
          <img src={robotLine} alt="robot line" />
        </section>

        <section className="faq section">
          <div className="container">
            <h2 className="title">FAQ</h2>
            {faqRows.map((row) => {
              return (
                <FaqRow
                  key={row.id}
                  id={row.id}
                  textTop={row.textTop}
                  textBottom={row.textBottom}
                  openFaq={openFaq}
                  activeFaq={activeFaq}
                />
              );
            })}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">2022 by Rogbot Kingdom. All Right Reserved</div>
      </footer>
    </div>
  );
}

export default App;
