
import React, { Fragment } from 'react';
import '../App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle'
import CardStyle from './card/index'



const AppContent = ({
	 card,
	 table,
	 startFetch,
	 stopFetch,
	 isFetching,
	 stateSelector,
	 animationCard,
	 stopButtonState,
	 animationTabela,
	 startButtonState,
	 controlRefreshTime,
	 controlAnimationCard,
	 controlAnimationTable,
	}) => (

		

	< Fragment >


		<Header
			startFetch={startFetch}
		    controlAnimationTable = {controlAnimationTable}
	    	controlAnimationCard = {controlAnimationCard}
			controlRefreshTime = {controlRefreshTime}
			startButtonState = {startButtonState}
			stopButtonState={stopButtonState}
			stopFetch={stopFetch}
			stateSelector={stateSelector}

			 />
		<Template
			cards={card.map((card, i) => (
				<CardStyle key={i} card={card} animation={animationCard} />
			))}

			tables={<TableStyle tables={table} animation={animationTabela} />}
		/>
		{isFetching && <div>Atualizando...</div>}



	</Fragment >


)


export default AppContent;