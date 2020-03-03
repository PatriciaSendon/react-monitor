
import React, { Fragment } from 'react';
import '../App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle'
import CardStyle from './card/index'



const AppContent = ({
	card,
	table,
	stopFetch,
	isFetching,
	startFetch,
	refreshValue,
	stateSelector,
	animationCard,
	stopButtonState,
	stateSwitchCard,
	animationTabela,
	stateSwitchTable,
	startButtonState,
	controlRefreshTime,
	controlAnimationCard,
	controlAnimationTable,
}) => (



		< Fragment >


			<Header
				startFetch={startFetch}
				controlAnimationTable={controlAnimationTable}
				controlAnimationCard={controlAnimationCard}
				controlRefreshTime={controlRefreshTime}
				startButtonState={startButtonState}
				stopButtonState={stopButtonState}
				stopFetch={stopFetch}
				stateSelector={stateSelector}
				stateSwitchTable={stateSwitchTable}
				stateSwitchCard={stateSwitchCard}
				refreshValue={refreshValue}

			/>
			<Template
				cards={card.map((card, i) => (
					<CardStyle key={i} card={card} animation={animationCard} />
				))}

				tables={<TableStyle total={card[0] ? card[0].value : null} tables={table} animation={animationTabela} />}
			/>
			{isFetching && <div>Atualizando...</div>}



		</Fragment >


	)


export default AppContent;