
import React, { Fragment } from 'react';
import '../App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle'
import CardStyle from './card/index'



const AppContent = ({ card, table, isFetching, fechData }) => (

	< Fragment >

		<Header />
		<Template
			cards={card.map((card, i) => (
				<CardStyle key={i} card={card} />
			))}

			tables={<TableStyle tables={table} />}
		/>
		{isFetching && <div>Atualizando...</div>}



	</Fragment >


)


export default AppContent;