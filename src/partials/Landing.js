import React from "react";
import "./styles/Landing.scss";


export default function Landing() {
  return (
    <>
      <div className="hero-wrapper landing">
        <div className="hero-info-container">
          <div className="hero-info">
            <h1 className="h1">
              <span className="gtext">Gear Up</span>
              <br />
              <span className="gtext"> Your NFT</span>
              <br />
              <span className="gtext"> Purchase</span>
            </h1>

            <h2>
              Open Source protocols for NFT Financing
            </h2>

            <div className="hero-buttons-container">
              <a
                href="https://discord.com/invite/PJp2DbX64U"
                className="filled-button is-filled-hero-button w-button"
                style={{
                  position: "relative",
                }}
              >
                Join Discord
              </a>
              <a
                href="https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract"
                className="filled-button is-filled-hero-button w-button-1"
                style={{
                  position: "relative",
                }}
              >
                Go to Docs
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src="/assets/img/logo.png"/>
          
            <div className="gear-text" >
              
                GEAR
              
            </div>
          
        </div>
      </div>
    </>
  );
}
