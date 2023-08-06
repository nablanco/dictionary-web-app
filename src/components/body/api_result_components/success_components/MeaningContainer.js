import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../../contexts/theme/themeContext";

const StyledMeaningContainer = styled.div``;
const PartOfSpeechContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
const PartOfSpeech = styled.div`
  margin-right: 20px;
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
`;
const PartOfSpeechDivider = styled.div`
  border: 1px ${(props) => props.theme.divider} solid;
  flex-grow: 1;
`;

const MeaningContainer = ({ meanings }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {meanings.map(({ partOfSpeech }, index) => {
        return (
          <StyledMeaningContainer key={index}>
            <PartOfSpeechContainer>
              <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
              <PartOfSpeechDivider theme={theme} />
            </PartOfSpeechContainer>
          </StyledMeaningContainer>
        );
      })}
    </>
  );
};

export default MeaningContainer;
