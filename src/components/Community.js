import React from "react";
import Card from "./Card";
import waves from "../assets/Waves.mp4";
import "./Community.css";
import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <div className="com-container">
      <div>
        <h1
          style={{
            padding: "2rem",
            marginBottom: "3rem",
            fontSize: "2.4rem",
            letterSpacing: "5px",
          }}
        >
          COMMUNITY
        </h1>
      </div>
      <div className="com-cards-container">
        <CommunityCard title={"We work with OTTs"} desc={'Our tech is seemless. working with the biggest providers to automate the advertising process for you.'} imgs={["https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940", "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940","https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"]}/>
        <CommunityCard title={'Working with Broadcasters'} desc={'We work with paid TV and free to air. Our tools get implemented seemlessly in the backend. That way, channels make more money and less intervention.'}imgs={['https://logos-world.net/wp-content/uploads/2023/04/Zee-TV-Logo-500x281.png', 'https://logos-world.net/wp-content/uploads/2023/04/Zee-TV-Logo-500x281.png', 'https://logos-world.net/wp-content/uploads/2023/04/Zee-TV-Logo-500x281.png']}/>
        <CommunityCard title={'Working with Producers'} desc={"We work with film producers and production companies to increase their revenue streams before the film is released, or before it hits the OTT platform"} imgs={['https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Warner_Bros_Logo_Design_History_Evolution_13_1024x1024.jpg?v=1694135966', 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Warner_Bros_Logo_Design_History_Evolution_13_1024x1024.jpg?v=1694135966', 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Warner_Bros_Logo_Design_History_Evolution_13_1024x1024.jpg?v=1694135966']}/>
        <CommunityCard title={'Working with brands'} desc={'We work with top brands to get them maximum exposure in any form of media on Film, TV, OTT or any video medium'} imgs={['https://1000logos.net/wp-content/uploads/2021/05/Haldiram-logo.png', 'https://1000logos.net/wp-content/uploads/2021/05/Haldiram-logo.png', 'https://1000logos.net/wp-content/uploads/2021/05/Haldiram-logo.png']}/>
        <CommunityCard title={'Working with top agencies'} desc={'We work with top agencies to help plan, manage and execute a campaign according to a set budget but also a measured exposure'} imgs={['https://assets.bizclikmedia.net/900/826085baabcd987a3ffbd1f83e2412dc:27f603094f6d9e060ccb862e5514771e/normal-5d2f3dd37fff11-44897564.webp', 'https://assets.bizclikmedia.net/900/826085baabcd987a3ffbd1f83e2412dc:27f603094f6d9e060ccb862e5514771e/normal-5d2f3dd37fff11-44897564.webp', 'https://assets.bizclikmedia.net/900/826085baabcd987a3ffbd1f83e2412dc:27f603094f6d9e060ccb862e5514771e/normal-5d2f3dd37fff11-44897564.webp']}/>
        <CommunityCard title={'Small and midsize agencies'} desc={'We work with small and mid-size agencies who want to penetrate though though the video medium and get their brands the exposure it needs'} imgs={['https://www.truad.co/wp-content/uploads/2023/11/en-mian-color-image.c19665d0.png', 'https://www.truad.co/wp-content/uploads/2023/11/en-mian-color-image.c19665d0.png', 'https://www.truad.co/wp-content/uploads/2023/11/en-mian-color-image.c19665d0.png']}/>
      </div>
    </div>
  );
};

export default Community;
