import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../../../contexts/theme/themeContext";
import iconCircle from "../../../../assets/images/icon-circle.svg";

const StyledMeaningContainer = styled.div`
  margin-top: 40px;
`;
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
const DefinitionsContainer = styled.div`
  margin-top: 40px;
`;
const DefinitionHeader = styled.div`
  color: ${(props) => props.theme.color.subheader};
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DefinitionsList = styled.ul`
  margin-top: 12px;
  margin-bottom: 0px;
  padding-left: 40px;
`;
const Definition = styled.li`
  margin-top: 13px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  ::marker {
    content: ${(props) => props.iconCircle};
    color: ${(props) => props.theme.bgcolor.purple};
  }
`;
const SynonymContainer = styled.div`
  margin-top: 64px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.theme.color.subheader};
  display: flex;
  flex-flow: row nowrap;
`;
const Synonym = styled.div`
  margin-left: 22px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${(props) => props.theme.color.purple};
`;

const MeaningContainer = ({ meanings }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {meanings.map(({ partOfSpeech, definitions, synonyms }, index) => {
        let shouldShowSynonyms = synonyms[0] && synonyms.length > 0;
        return (
          <StyledMeaningContainer key={index}>
            <PartOfSpeechContainer>
              <PartOfSpeech>{partOfSpeech}</PartOfSpeech>
              <PartOfSpeechDivider theme={theme} />
            </PartOfSpeechContainer>
            <DefinitionsContainer>
              <DefinitionHeader theme={theme}>Meaning</DefinitionHeader>
              <DefinitionsList>
                {definitions.map(({ definition }, index) => {
                  return (
                    <Definition
                      theme={theme}
                      iconCircle={iconCircle}
                      key={index}
                    >
                      {definition}
                    </Definition>
                  );
                })}
              </DefinitionsList>
              {shouldShowSynonyms && (
                <SynonymContainer theme={theme}>
                  Synonyms
                  <Synonym theme={theme}>{synonyms}</Synonym>
                </SynonymContainer>
              )}
            </DefinitionsContainer>
          </StyledMeaningContainer>
        );
      })}
    </>
  );
};

export default MeaningContainer;
