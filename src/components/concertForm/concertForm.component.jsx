import React, {useEffect, useState, useReducer} from 'react';
import './concertForm.styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DateTimePicker} from '@material-ui/pickers/';
import {createConcert, getConcert, updateFieldsForm} from '../../redux/concertsOverview/concertsOverview.actions';
import ConcertsOverviewReducer, {INITIAL_STATE} from '../../redux/concertsOverview/concertsOveview.reducer';
import {withRouter} from 'react-router-dom';

const ConcertForm = ({match}) =>  {
	let [{concert}, dispatch] = useReducer(ConcertsOverviewReducer, INITIAL_STATE);

	useEffect(() => {
		if(match.params.id) {
        	getConcert(match.params.id)(dispatch);
		}
	}, []);

	const handleChange = (evt) => {
		concert[evt.target.name] = evt.target.value;
		updateFieldsForm(concert)(dispatch);
	};
	
	const handleDateChange = (date) => {
		updateFieldsForm({
			...concert,
			dateOfEvent: date
		})(dispatch)
	}

	return (
	<form
		className='container'
		onSubmit={(e) => {
			e.preventDefault();
			createConcert({...concert})(dispatch);
		}}
	>
		<TextField label='Title' value={concert.title} name='title' onChange={handleChange}/>
		<TextField label='Description' value={concert.description} name='description' onChange={handleChange}/>
		<TextField label='ImageURL' value={concert.imageURL} name='imageURL' onChange={handleChange}/>

		<DateTimePicker
			label="When it's going to happen?"
			inputVariant="outlined"
			autoOk
			value={concert.dateOfEvent}
			ampm={false}
			onChange={handleDateChange}
			disablePast
      	/>

	  <Button type='submit' variant="contained" color="primary">
                Create Concert
		</Button>
	</form>
	)
};

export default withRouter(ConcertForm);