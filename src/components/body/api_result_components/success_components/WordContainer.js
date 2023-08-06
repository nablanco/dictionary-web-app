import React, { useContext } from "react";
import styled from "styled-components";

import MeaningContainer from "./MeaningContainer";
import { ThemeContext } from "../../../../contexts/theme/themeContext";
import iconPlay from "../../../../assets/images/icon-play.svg";
import iconHoverPlay from "../../../../assets/images/icon-hover-play.svg";

const StyledWordContainer = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const TitleContainer = styled.div``;
const WordTitle = styled.div`
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const WordPhoentic = styled.div`
  color: ${(props) => props.theme.color.purple};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const WordPlayButton = styled.div`
  width: 75px;
  height: 75px;
  background-image: url(${(props) => props.iconPlay});

  &:hover {
    background: url(${(props) => props.iconHoverPlay});
    cursor: pointer;
  }
`;

const WordContainer = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {data.map(({ word, phonetic, phonetics, meanings }, index) => {
        const shouldShowPlayButton = phonetics && phonetics[0].audio;
        return (
          <StyledWordContainer key={index}>
            <HeaderContainer>
              <TitleContainer>
                <WordTitle>{word}</WordTitle>
                <WordPhoentic theme={theme}>{phonetic}</WordPhoentic>
              </TitleContainer>
              {shouldShowPlayButton && (
                <WordPlayButton
                  iconPlay={iconPlay}
                  iconHoverPlay={iconHoverPlay}
                  onClick={() => {
                    new Audio(phonetics[0].audio).play();
                  }}
                />
              )}
            </HeaderContainer>
            <MeaningContainer meanings={meanings} />
          </StyledWordContainer>
        );
      })}
    </>
  );
};

export default WordContainer;
