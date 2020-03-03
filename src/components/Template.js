import style from 'styled-components';
import React from 'react';

const SectionGeralStyled = style.div`
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;

`;

export default ({ cards, tables }) => (
  <SectionGeralStyled>
    <section
      style={{
        marginLeft: '10px'
      }}
      key={10}
    >
      {cards}
    </section>
    <section
      key={140}
      style={{
        width: '810px',
        height: '400px',
        margin: '20px',
        marginLeft: '100px'
      }}
    >
      {tables}
    </section>
  </SectionGeralStyled>
);
