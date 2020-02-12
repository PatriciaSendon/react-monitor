import style from 'styled-components';
import React from 'react';

//Aqui devemos passar o objeto por props, achei trabalhoso
// const SectionGeral = props => {
//   return (
//     <section
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'flex-start'
//       }}
//     >
//       <Tabela dadosvalor={datatable} />
//     </section>
//   );
// };

const SectionGeralStyled = style.div`
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;

`;

export default ({ cards, tabela }) => (
  <SectionGeralStyled>
    <section>{cards}</section>
    <section
      style={{
        width: '810px',
        height: '400px',
        margin: '20px',
        marginLeft: '100px'
      }}
    >
      {tabela}
    </section>
  </SectionGeralStyled>
);
