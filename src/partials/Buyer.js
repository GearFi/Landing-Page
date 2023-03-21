import React from "react";
import "./styles/Responsive.scss";

export default function VersatileToken() {
  return (
    <>
      <div className="s6" style={{backgroundColor: "white", color: "#07071C"}}>
        <div className="s6-container">
          <div className="s6-image-wrapper">
          <img
                src="assets/img/NFTs2.png"
                className="s3-box-image"
              />
          </div>
          <div
            data-w-id="649dbab4-e00a-e03a-732f-5ed95dca54ab"
            className="s6-info-container"
          >
            <h2 className="h2 is-small-h2" style={{color: "#07071C"}}> Buy Now Pay Later</h2>
            <p className="p is-s6-p">
              
              
              <ul>
              <li>Buyers who lack upfront liquidity can buy the NFT.</li><br/>
              <li>Sellers selling their Bluechip NFTs for a lower price can earn more through interest.</li> <br/>
              <li>Artists have a better chance of selling their NFTs by giving BNPL options to their collectors.</li>{/*Blockchain */}
            </ul>
            </p>

            {/* <a href="#" className="filled-button w-button">
              Buy Now
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
