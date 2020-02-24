
import React, { Fragment } from 'react';
import '../App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle'
import CardStyle from './card/index'



const AppContent = ({ card, table, isFetching,animationTabela, animationCard, fechData,controlAnimationTable,controlAnimationCard}) => (

	< Fragment >

		<Header controlAnimationTable={controlAnimationTable} controlAnimationCard={controlAnimationCard}/>
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