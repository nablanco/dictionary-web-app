import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../contexts/theme/themeContext";
import { FontContext } from "../../../contexts/font/fontContext";
import iconPlay from "../../../assets/images/icon-play.svg";
import iconHoverPlay from "../../../assets/images/icon-hover-play.svg";
import testData from "./testData";

const StyledGoodResult = styled.div`
  width: 100%;
  margin-top: 45px;
`;
const WordContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
const TitleContainer = styled.div``;
const WordTitle = styled.div``;
const WordPhoentic = styled.div``;
const WordPlayButton = styled.div`
  width: 75px;
  height: 75px;
  background-image: url(${(props) => props.iconPlay});

  &:hover {
    background: url(${(props) => props.iconHoverPlay});
    cursor: pointer;
  }
`;

const GoodResult = () => {
  const { theme } = useContext(ThemeContext);
  const { font } = useContext(FontContext);
  return (
    <StyledGoodResult theme={theme} font={font}>
      {testData.map((word, index) => {
        return (
          <WordContainer key={index}>
            <HeaderContainer>
              <TitleContainer>
                <WordTitle>{word.word}</WordTitle>
                <WordPhoentic>{word.phonetic}</WordPhoentic>
              </TitleContainer>
              <WordPlayButton
                iconPlay={iconPlay}
                iconHoverPlay={iconHoverPlay}
                onClick={() => {
                  new Audio(word.phonetics.audio).play();
                }}
              />
            </HeaderContainer>
          </WordContainer>
        );
      })}
    </StyledGoodResult>
  );
};

export default GoodResult;
