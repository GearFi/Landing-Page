import React from "react";
import "./styles/Responsive.scss";
import "./styles/Blogs.css"


export default function Blogss() {
  return (
    <>
      <div className="s6" style={{ backgroundColor: "white" }}>
      <h2>Blogs</h2>
        <div className="s6-container">
        
          <div className="Blog-container">

          <div className="blog_post">
              <h3 className="blog_h3">2 Feb 2023</h3>
              <h1 className="blog_h1">Welcome to GearFi (A Buy Now Pay Later NFT marketplace)</h1>
              <p className="blog_p">
                The position property specifies the type of positioning method used for an
                element (static, relative, absolute, fixed, or sticky).
              </p>
              <a className="blog_btn_primary" href="#" target="_blank">
                Read More
              </a>
          </div>

          <div className="blog_post">
              <h3 className="blog_h3">12 January 2019</h3>
              <h1 className="blog_h1">CSS Positioning</h1>
              <p className="blog_p">
                The position property specifies the type of positioning method used for an
                element (static, relative, absolute, fixed, or sticky).
              </p>
              <a className="blog_btn_primary" href="#" target="_blank">
                Read More
              </a>
          </div>

          <div className="blog_post">
              <h3 className="blog_h3">12 January 2019</h3>
              <h1 className="blog_h1">CSS Positioning</h1>
              <p className="blog_p">
                The position property specifies the type of positioning method used for an
                element (static, relative, absolute, fixed, or sticky).
              </p>
              <a className="blog_btn_primary" href="#" target="_blank">
                Read More
              </a>
          </div>
          
          </div>

        </div>
      </div>
    </>
  );
}
