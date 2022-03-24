"use strict";
import express from 'express';
import fetch from 'node-fetch';
const countries = express.Router();

const API = 'https://api.sampleapis.com/countries/countries';

countries.get('/', (req, res) => {
	fetch(API)
		.then(res => res.json())
		.then(data => {
			res.render('pages/countries', {
				title: 'Countries List',
				name: 'Countries',
				data
			});
		});
});

export default countries;
