import React, {useState} from 'react';
import './concertForm.styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import {connect} from 'react-redux';
import {DateTimePicker} from '@material-ui/pickers/';
import uuidv4 from 'uuid/v4';

const ConcertForm = ({createConcert}) =>  {
	const [dateOfEvent, handleDateChange] = useState(new Date());
	return (
	<form
		className='container'
		onSubmit={(e) => {
			e.preventDefault();
			createConcert({
				title: uuidv4(),
				description: uuidv4(),
				imageURL: 'www.google.es',
				dateOfEvent
			});
		}}
	>
		<TextField label='Title' />
		<TextField label='Description' />
		<TextField label='ImageURL' />

		<DateTimePicker
			label="When it's going to happen?"
			inputVariant="outlined"
			autoOk
			value={dateOfEvent}
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


export default connect(null, {createConcert})(ConcertForm);
