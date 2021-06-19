import React from 'react';
import { DiFirebase, DiPython, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    
    <SectionText>I've used an extensive array of web development technologies from react to Gatsby and now NextJs</SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Experienced with Reactjs and Reactjs frameworks like Gatsby and NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Working Knowledge of python and python frameworks like django,
            flask, tkinter and PyQt5
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Have working Knowledge of firebase, MongoDB and SQL databases like PostgressSQL and MySQl
            <br />
            Comfortable with GraphQl
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    
  </Section>
);

export default Technologies;
