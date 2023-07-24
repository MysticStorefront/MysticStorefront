import React from "react";
import "../App.css";
import ImageCard from "./ImageCard";
import LandingPage from "./LandingPage";
import ReviewBlock from "./ReviewBlock";

export default function Home() {
  return (
    <>
      <LandingPage />
      <div className="section-introduction">
        <span className="header">
          <h1 style={{ fontSize: 50 }}>Norwood Interiors</h1>
        </span>
        <span className="paragraph">
          <p>
            LLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </span>
      </div>
      <div className="portfolio">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <ReviewBlock />
    </>
  );
}
