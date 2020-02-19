'use strict';
import React, { PropTypes } from 'react';
import './App.css';
import Header from './Header';
import Template from './Template';
import TableStyle from './Table/TableStyle';
import CardStyle from './card/CardsStyle'


const AppContent = ({ card, tables }) => (

	<Header />
	<Template
		card={<CardStyle card={card} />}
		table={<TableStyle table={tables} />}
	/> 


);


export default AppContent;