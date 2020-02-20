
import React, {  Fragment } from 'react';
import '../App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle'
import CardStyle from './card/index'



const AppContent = ({ card, tables, fechData ,  isFetching }) => (
	<Fragment>
		<Header />
		<Template
			card={<CardStyle card={card} />}
			table={<TableStyle table={tables} />}
		/>
		<button onClick={()=>{fechData()}}>atualizar</button>
	</Fragment>


)


export default AppContent;