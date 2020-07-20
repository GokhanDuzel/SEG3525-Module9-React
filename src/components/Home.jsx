import React from "react";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import { useTranslation, Trans } from "react-i18next";

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


const Gallery1 = () => {

  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled>
      <img src={require('./img/wow.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      <img src={require('./img/wow5.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
    </AliceCarousel>
  )
}

const Gallery2 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/ffxv2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/ffxv3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/ffxv4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/ffxv.png')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/ffxv.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      </AliceCarousel>
    )
  }

const Gallery3 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/styx2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/styx.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/styx3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/styx4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/styx5.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
       </AliceCarousel>
    )
  }

const Gallery4 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/witcher3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/witcher32.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/witcher33.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/witcher34.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/witcher35.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      </AliceCarousel>
    )
  }

const Gallery5 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/tboi.jpeg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/tboi2.png')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/tboi.png')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        </AliceCarousel>
    )
  }

const Gallery6 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/valorant.png')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/valorant2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/valorant.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/valorant3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/valorant.jpeg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      </AliceCarousel>
    )
  }
  const Gallery7 = () => {

    const handleOnDragStart = (e) => e.preventDefault()
    return (
      <AliceCarousel mouseTrackingEnabled>
        <img src={require('./img/undertale4.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/undertale2.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/undertale3.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/undertale.jpg')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
        <img src={require('./img/undertale.png')} onDragStart={handleOnDragStart} className="card-img-top" height="360px" alt="a"/>
      </AliceCarousel>
    )
  }


const PopupExample = () => (
  <Popup
     trigger={<Button className="float-right button blueBG whiteText"><Trans>Explore it!</Trans></Button>}
     modal
     closeOnDocumentClick
   >
     <span> Modal content </span>
   </Popup>
);

class Home extends React.Component {

render = () => {
   return (
     <div className="container blueText">
     <br/>
      <PopupExample/>
      <br/><br/>
        <div className="d-flex justify-content-center">
          <h1 className="float-none"><strong>Gblizz</strong></h1>
        </div>
        <h4 className="" style={{"textAlign":"center"}}>"<Trans>Your friendly game reviewer</Trans>"</h4><br/>

      <div className="container">
        <div className="card" style={{"textAlign":"center"}}>
            <div className="card-body blueBG whiteText">
            <Gallery1/>

            <h4 className="card-title"><strong>World Of Warcraft</strong></h4>
            <p className="card-text"><Trans i18nKey="wow_home">World of Warcraft (WoW) is a massively multiplayer
            online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.
            It is the fourth released game set in the Warcraft fantasy universe.
            World of Warcraft takes place within the Warcraft world of Azeroth,
            approximately four years after the events at the conclusion of Blizzard's
            previous Warcraft release, Warcraft III: The Frozen Throne. The game
            was announced in 2001, and was released for the 10th anniversary of the
            Warcraft franchise on November 23, 2004. Since launch, World of Warcraft
            has had eight major expansion packs produced for it: The Burning Crusade,
            Wrath of the Lich King, Cataclysm, Mists of Pandaria, Warlords of Draenor,
            Legion, Battle for Azeroth, and Shadowlands.</Trans></p>
        </div>
        </div><br/>
        </div>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                        <br/><Gallery2/>
                              <h4 className="card-title"><strong>Final Fantasy XV</strong></h4>
                              <p className="card-text"><Trans i18nKey="f">Final Fantasy XV is an action role-playing game developed and published by Square Enix as part of the <br/>Final Fantasy series. It was released for the PlayStation 4 and Xbox One in 2016, Microsoft Windows in 2018, <br/> and Stadia as a launch title in 2019. The game features an open world environment and action-based battle <br/> system, incorporating quick-switching weapons, elemental magic, and other features such as vehicle travel and <br/> camping. The base campaign was later expanded with downloadable content (DLC), adding further gameplay <br/> options such as additional playable characters and multiplayer. </Trans></p>
                         
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                          
                           <br/><Gallery3/>
                              <h4 className="card-title"><strong>Styx</strong></h4>
                              <p className="card-text"><Trans i18nKey="s">Styx: Master of Shadows is a stealth video game developed by Cyanide Studios for Microsoft Windows, <br/>PlayStation 4 and Xbox One. The game is a prequel, and the second video game to take place in the world<br/> established by 2012's Of Orcs and Men.</Trans></p>
                          
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                        
                    <br/><Gallery4/>
                              <h4 className="card-title"><strong>The Witcher 3</strong></h4>
                              <p className="card-text"><Trans i18nKey="w">The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer<br/> CD Projekt and is based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the<br/> 2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher's video game series,<br/> played in an open world with a third-person perspective.</Trans></p>
                    
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                                  <br/><Gallery5/>
                              <h4 className="card-title"><strong>The Binding of Isaac</strong></h4>
                              <p className="card-text"><Trans i18nKey="i">The Binding of Isaac is an indie roguelike video game designed by Edmund McMillen and Florian Himsl,<br/> initially released in 2011 for Microsoft Windows; the game was later ported for OS X, and Linux.<br/>The game's title and plot are inspired by the Biblical story of the Binding of Isaac. In the game, Isaac's mother<br/> receives a message from God demanding the life of her son as proof of her faith, and Isaac, fearing for his life,<br/> flees into the monster-filled basement of their home where he must fight to survive.</Trans></p>
                          
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                               <br/><Gallery6/>
                              <h4 className="card-title"><strong>Valorant</strong></h4>
                              <p className="card-text"><Trans i18nKey="v">Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games, <br/>for Microsoft Windows. Announced under the codename Project A in October 2019, the game began a closed <br/>beta with limited access on April 7, 2020, and was fully released on June 2, 2020.</Trans></p>
                          
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card blueBG whiteText" style={{"textAlign":"center"}}>
                            <br/><Gallery7/>
                            <h4 className="card-title"><strong>Undertale</strong></h4>
                            <p className="card-text"><Trans i18nKey="u">Undertale is a role-playing video game created by indie developer Toby Fox. The player controls a child who <br/>has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by <br/>a magic barrier. The player meets various monsters during the journey back to the surface. Some monsters <br/>might engage the player in a fight.</Trans></p>
                          
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/><br/>


      </div>
   )
 }
}

export default Home;
