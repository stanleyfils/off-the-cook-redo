import React, { Component } from "react";
import BannerImage from "./header.nosync.jpg";
import "./LandingPage.css";
import styled from "styled-components";

const Container = styled.section`
  text-align: center;
  margin-top: 40px;
`;

const HeaderImage = styled.img`
  width: 60%;
  margin-bottom: 100px;
`;

const LandingPage = () => {
  return (
    <Container>
      <h1>Off The Cook Recipe Manager</h1>
      <h4>
        Search over 360,000 recipes to create your own recipe books, menus, and
        meal plans!
      </h4>
      <HeaderImage src={BannerImage} alt="animated chefs cooking" />
    </Container>
    // <section>
    //     <SearchBar />git rem
    // </section>
  );
};

export default LandingPage;
