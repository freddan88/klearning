import React from "react";
import styled from "styled-components";
import HandInIntroCard from "../HandInIntroCard";
import HandInChoice from "../HandInChoice";

const StyledHandIn = styled.div``;

const HandIn = () => {
  return (
    <StyledHandIn>
      <HandInIntroCard
        introImage="images/selfTape.png"
        introHeaderParagraph="Skapa ett self-tape"
        introParagraph1="Nu är det dags att spela in ditt eget self-tape!"
        introParagraph2="Du laddar sedan upp din inspelning och får personlig feedback från din lärare."
        introParagraph3="Du måste själv boka tid för feedback, instruktioner för detta följer."
      />
      <HandInChoice
        header="Skapa ett self-tape"
        paragraph="Välj en utav de tre scenerna från vårt arkiv här nedan. Öva in den så att du sedan kan spela in dig själv med hjälp av de tips du lärt dig. 
      Normalt sätt får du fyra dagar på dig att öva in en scen."
        choiceHeader="Välj scen:"
      />
      <h1>NÄSTA KORT ÄR NÄSTA SIDA</h1>
    </StyledHandIn>
  );
};

export default HandIn;
