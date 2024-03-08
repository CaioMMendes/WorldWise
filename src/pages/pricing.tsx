import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import image from "/img-2.jpg";

const PricingPage = () => {
  return (
    <PricePageContainer>
      <Navbar />
      <MainContent>
        <div>
          <h1>
            Simple pricing.
            <br />
            Just $9/month
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            aspernatur libero sed doloremque exercitationem dolores.
          </p>
        </div>
        <img src={image} alt="Imagem de predios" />
      </MainContent>
    </PricePageContainer>
  );
};

export default PricingPage;

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  gap: 70px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 415px;
    flex-wrap: wrap;
    align-items: start;
    text-align: start;
    gap: 30px;

    p {
      text-align: justify;
      text-justify: inter-word;
      font-size: 1rem;
    }
    h1 {
      font-size: 2.3rem;
    }
  }
  > img {
    max-width: 415px;
    max-height: 415px;
  }
`;

const PricePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
