import React from 'react';
import './concertForm.styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import {connect} from 'react-redux';
import uuidv4 from 'uuid/v4';

const ConcertForm = ({createConcert}) => (
	<form
		className='container'
		onSubmit={(e) => {
			e.preventDefault();
			createConcert({
				id: uuidv4(),
				title: uuidv4(),
				description: uuidv4(),
			});
		}}
	>
		<TextField label='Title' />
		<TextField label='Description' />
		<TextField label='ImageURL' />
		<Button type='submit' variant="contained" color="primary">
                Create Concert
		</Button>
	</form>
);


export default connect(null, {createConcert})(ConcertForm);
