import React from 'react';
import Switch from './switch';
import styled from 'styled-components';
import Selects from './selector';

const CardConfigStyle = styled.div`
  box-shadow: 1px 1px 5px rgba(184, 177, 184, 1);
  border-radius: 4px;
  width: 130px;
  height: 180px;
  margin: 20px;
  margin-bottom: 0px;
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  z-index: -1;
`;

const LabelTitleContainer = styled.label`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  padding: 8px;
  padding-left: 13px;
  z-index: 0;
`;

const SwitchContainerTabela = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 5px;
  margin-top: 33px;
  margin-left: 10px;
`;

const SwitchContainerCard = styled.div`
  position: relative;
  bottom: -15px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: 2px;
  padding: 7px;
  width: 100px;
`;

const SelectorContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 4;
  margin: 2px;
  margin-left: 10px;
`;

const LabelTitleSelectoContainer = styled.div`
  position: relative;
  height: 23px;
  width: 30px;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  left: 37px;
  top: 38px;
  padding-left: 7px;
  padding-top: 15px;
  background-color: #f4f4f4;
`;

const LabelTitleSelectoContainerTempoAtualizacao = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 3;
  margin: 2px;
  margin-top: 15px;
  margin-left: 11px;
`;

const CardConfig = ({
  controlAnimationTable,
  controlAnimationCard,
  controlRefreshTime,
  stateSelector,
  stateSwitchTable,
  stateSwitchCard,
  refreshValue
}) => {
  return (
    <CardConfigStyle>
      <LabelTitleContainer>
        <b> Animações</b>
      </LabelTitleContainer>
      <SwitchContainerTabela id="ContainerSwitch">
        <Switch
          controlAnimation={controlAnimationTable}
          stateSwitch={stateSwitchTable}
          name={'Tabela'}
        />
      </SwitchContainerTabela>

      <SwitchContainerCard>
        <Switch
          controlAnimation={controlAnimationCard}
          stateSwitch={stateSwitchCard}
          name={'Card'}
        />
      </SwitchContainerCard>
      <LabelTitleSelectoContainerTempoAtualizacao>
        <b>Atualização</b>
      </LabelTitleSelectoContainerTempoAtualizacao>

      <SelectorContainer>
        <Selects
          controlRefreshTime={controlRefreshTime}
          stateSelector={stateSelector}
          refreshValue={refreshValue}
        />
      </SelectorContainer>
      <LabelTitleSelectoContainer id="ContainerH1">
        <label style={{ fontSize: '15px', fontFamily: 'Arial' }}>Min(s)</label>
      </LabelTitleSelectoContainer>
    </CardConfigStyle>
  );
};
export default CardConfig;
