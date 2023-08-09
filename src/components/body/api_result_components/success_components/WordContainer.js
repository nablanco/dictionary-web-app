import React, { useContext } from "react";
import styled from "styled-components";

import MeaningContainer from "./MeaningContainer";
import { ThemeContext } from "../../../../contexts/theme/themeContext";
import iconPlay from "../../../../assets/images/icon-play.svg";
import iconHoverPlay from "../../../../assets/images/icon-hover-play.svg";
import iconNewWindow from "../../../../assets/images/icon-new-window.svg";

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
const EndOfWordDivider = styled.div`
  margin-top: 40px;
  border: 1px ${(props) => props.theme.divider} solid;
  flex-grow: 1;
`;
const SourceContainer = styled.div`
  margin-top: 19px;
  margin-bottom: 120px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  color: ${(props) => props.theme.color.subheader};
`;
const SourceLink = styled.a`
  margin-left: 20px;
  color: ${(props) => props.theme.color.header};
  cursor: pointer;
`;
const SourceLinkImage = styled.img``;

const WordContainer = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  let word = data[0].word;
  let phonetic = data[0].word;
  let phonetics = data[0].phonetics;
  let shouldShowPlayButton = phonetics && phonetics[0].audio;
  let source = data[0].sourceUrls[0];

  return (
    <StyledWordContainer>
      {console.log(data)}
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
      {data.map(({ meanings }, index) => {
        return <MeaningContainer meanings={meanings} key={index} />;
      })}
      <EndOfWordDivider theme={theme} />
      <SourceContainer theme={theme}>
        Source
        <SourceLink theme={theme} href={source} target="_blank">
          {source}
          <SourceLinkImage src={iconNewWindow} />
        </SourceLink>
      </SourceContainer>
    </StyledWordContainer>
  );
};

export default WordContainer;
