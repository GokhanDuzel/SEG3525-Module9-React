import React from "react";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import { Trans } from "react-i18next";


function handleSubmit(event) {
  event.preventDefault();
  var number =  document.getElementById("number");
  var cvc =  document.getElementById("cvc");
  var date =  document.getElementById("date2");
  console.log(cvc);
  if (number.value === "" || cvc.value === "" || date.value === ""){
    alert("Purchase failed!")
  }
  else {
  var serial = ""
  var n=0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      n = Math.floor(Math.random() * 10);
      console.log(n);
      serial += n.toString();
  }
  serial += "-";
  }
  alert("Successful! Your game key is: " + serial.substring(0,serial.length-1));
  number.value="";
  cvc.value="";
  date.value="";
}
}

const PopupExample = () => (
  <Popup trigger={<Button className="blueBG">Buy</Button>} position="top center">
    <div><div class="card-body blueBG">
    <form onSubmit={handleSubmit}>
              <label for="number">Credit card number:</label>
              <input pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" data-toggle="tooltip" data-placement="top" title="Format: xxxx xxxx xxxx xxxx" class="form-control" type="text" id="number" name="number"/><br/>
              <label for="date">Expiration date:</label>
              <input class="form-control" data-toggle="tooltip" data-placement="top" title="Format: MM/YY" type="text" id="date2"/><br/>
              <label for="cvc">CVC:</label>
              <input pattern="[0-9]{3}" class="form-control" data-toggle="tooltip" data-placement="top" title="Format: xxx" type="text" id="cvc" name="cvc"/>
              <br/><Button block className="blueBG" type="submit">Buy</Button>
              </form>
            </div></div>
  </Popup>
);


function Shop() {
  return (
<div className="container"><br/>
         <div className="d-flex justify-content-center blueText">
           <h1 className="float-none"><strong><Trans>Shop</Trans> <br/><br/></strong></h1>
         </div>
    <div className="container d-flex justify-content-center">

    <div className="container d-flex justify-content-center"><br/>
      <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
        <img className="card-img-top" src={require('./img/wow.jpg')} height="120px" alt="World of Warcraft"/>
      <div className="card-body">
        <h5 className="card-title"><strong>World Of Warcraft</strong></h5>
        <p className="card-text">World of Warcraft (WoW) is a massively multiplayer
         online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.</p>
          60$ <PopupExample/>
      </div>
      </div>
      </div>

      <div className="container d-flex justify-content-center"><br/>
        <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
          <img className="card-img-top" src={require('./img/ffxv.jpg')} height="120px" alt="ffxv"/>
        <div className="card-body">
          <h5 className="card-title"><strong>Final Fantasy XV</strong></h5>
          <p className="card-text">Final Fantasy XV is an action role-playing game developed and published by Square Enix as part of the Final Fantasy series.</p>
          40$ <PopupExample/>
        </div>
        </div><br/>
        </div>


        <div className="container d-flex justify-content-center"><br/>
          <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
            <img className="card-img-top" src={require('./img/witcher3.jpg')} height="120px" alt="witcher"/>
          <div className="card-body">
              <h5 className="card-title"><strong>The Witcher 3</strong></h5>
              <p className="card-text">The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer CD Projekt.</p>
              45$ <PopupExample/>
          </div>
          </div><br/>
          </div>

    </div>

<br/>
        <div className="container d-flex justify-content-center">


          <div className="container d-flex justify-content-center"><br/>
            <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
              <img className="card-img-top" src={require('./img/tboi.png')} height="120px" alt="tboi"/>
            <div className="card-body">
              <h5 className="card-title"><strong>The Binding of Isaac</strong></h5>
              <p className="card-text">The Binding of Isaac is an indie roguelike video game designed by Edmund McMillen and Florian Himsl.</p>
              10$ <PopupExample/>
            </div>
            </div><br/>
            </div>


            <div className="container d-flex justify-content-center"><br/>
              <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
                <img className="card-img-top" src={require('./img/valorant.jpg')} height="120px" alt="Valorant"/>
              <div className="card-body">
                  <h5 className="card-title"><strong>Valorant</strong></h5>
                  <p className="card-text">Valorant is a free-to-play multiplayer first-person shooter developed and published by Riot Games.</p>
                  Free <PopupExample/>
              </div>
              </div><br/>
              </div>

                      <div className="container d-flex justify-content-center"><br/>
                        <div className="card blueBG whiteText" style={{"textAlign":"center","width":"250px"}}>
                          <img className="card-img-top" src={require('./img/styx.jpg')} height="120px" alt="Styx"/>
                        <div className="card-body">
                          <h5 className="card-title"><strong>Styx</strong></h5>
                          <p className="card-text">Styx: Master of Shadows is a stealth video game developed by Cyanide Studios.</p>
                          50$ <PopupExample/>
                        </div>
                        </div><br/>
                        </div>
        </div>
<br/><br/>

  </div>
  );
}

export default Shop;
