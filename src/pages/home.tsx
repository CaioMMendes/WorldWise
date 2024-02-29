import { Link } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import AppNav from "../components/app-nav/app-nav";
import styled from "styled-components";
import Button from "../components/button";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <Navbar />
        <HomeContentContainer>
          <AppNav />
          <h1>
            You travel the world. <br /> WorldWise keeps track of your
            adventures.
          </h1>
          <p>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>

          <Link to={"/app"}>
            <Button variant="primary">START TRACKING NOW</Button>
          </Link>
        </HomeContentContainer>
      </HomePageContainer>
    </>
  );
};

export default HomePage;

const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url("/bg.jpg");
  background-size: cover;
  background-position: center;

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
    text-align: center;
  }
  p {
    opacity: 0.8;
    font-size: 1.25rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1.5rem 3rem;
  gap: 2rem;

  button {
    font-size: 1.15rem;
  }
`;
