import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation, Trans } from "react-i18next";


function handleSubmit(event) {
  event.preventDefault();
}

function Navigation() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {i18n.changeLanguage(lng)};
  return (
    <div className="navigation">
    <div className="container">
      
      <Navbar className="blueBG">
      <Navbar.Brand className="text-white" href="/">Gblizz</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link className="text-white" href="/"><i className="fas fa-home"></i><span> <Trans>Home</Trans></span></Nav.Link>
      <Nav.Link className="text-white" href="/shop"><i className="fas fa-shopping-cart"></i> <span> <Trans>Shop</Trans></span></Nav.Link>
      <Nav.Link className="text-white" href="/reviews"><i className="fas fa-gamepad"></i> <span> <Trans>Professional Reviews</Trans> </span></Nav.Link>
      </Nav>
      <Button className="blueBG" onClick={() => {changeLanguage("fr");window.location.reload(false)}}>fr</Button>
      <Button className="blueBG" onClick={() => {changeLanguage("en");window.location.reload(false)}}>en</Button>
      <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" className="mr-sm-2" />
      <Button className="blueBG"> <i className="fas fa-search"></i></Button>
      </Form>
      </Navbar>
      
    </div>
    </div>
  );
}

export default Navigation;
