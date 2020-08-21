import React from 'react';
import { Container } from "reactstrap";
import Footer from "./Footer";
import AboutHeader from "./AboutHeader";

export default function About() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <AboutHeader />
        <div className="section">
          <Container>
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                Not all those who wander are lost.
              </p>
              <footer className="blockquote-footer">
                J. R. R. Tolkien
              </footer>
            </blockquote>
            <h3 className="title">About me</h3>
            <h5 className="description">
            <p>I'm a Software Engineer/Developer based in Boston.
            In 2017, I acquired my BS in Business Administration from Northeastern University.
            Feeling stuck and not belong in the financial industry, 
            I decided to switch to Computer Science and found my true calling as a Software Engineer/Developer. 
            I'm currently enrolled in the MS in CS program at my alma mater, being set to graduate in May 2021. </p>
            </h5>
            <h3 className="title">Fun facts</h3>
            <h5 className="description">
              <h6>Dog or cat?</h6>
              <p>Dog</p>
              <h6>Favorite season(s)?</h6>
              <p>Summer and Winter</p>
              <h6>Favorite food</h6>
              <p>I'm a foodie and not picky at all. My favorite cuisines: Vietnamese, Chinese, Japanese, Thai, Korean, Mexican, Italian</p>
              <h6>Favorite show(s)</h6>
              <p>Lucifer, Sens8, Umbrella Academy, Brooklyn 99, Parks and Rec, Dark, The Office, How I Met Your Mother, The Haunting of Hill House, and a bunch of anime</p>
              <h6>Favorite movie genre(s)?</h6>
              <p>Horror, thriller, action, sci-fi, fantasy, adventure</p>
              <h6>Ice-cream flavor(s)?</h6>
              <p>Matcha, Rum raisin, Strawberry cheesecake, Pandan, Blueberry</p>
              <h6>Hobbies?</h6>
              <p>I enjoy photography, listening to music, trying new cuisines, reading, watching movies, playing games, boardgames, and backpacking</p>
              <h6>Countries I've been to?</h6>
              <p>Viet Nam, U.S., Canada, Thailand, Burma, Cambodia, Malaysia, Indonesia, China, Japan</p>
            </h5>
          </Container>
        </div>
        <Footer/>
      </div>
    </>
  )
}