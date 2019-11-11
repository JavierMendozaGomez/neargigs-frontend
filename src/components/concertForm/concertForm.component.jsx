import React, {useState} from 'react';
import './concertForm.styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DateTimePicker} from '@material-ui/pickers/';
import {createConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import {connect} from 'react-redux';

const ConcertForm = ({createConcert}) =>  {
	const [dateOfEvent, handleDateChange] = useState(null);

	const [concert, setConcert] = useState({
		title: '',
		description: '',
		imageURL: '',
	});

	const handleChange = (evt) => {
		const value = evt.target.value;
		setConcert({
			...concert,
			[evt.target.name]: value
		})
	};

	return (
	<form
		className='container'
		onSubmit={(e) => {
			e.preventDefault();
			createConcert({...concert, dateOfEvent});
		}}
	>
		<TextField label='Title' value={concert.title} name='title' onChange={handleChange}/>
		<TextField label='Description' value={concert.description} name='description' onChange={handleChange}/>
		<TextField label='ImageURL' value={concert.imageURL} name='imageURL' onChange={handleChange}/>

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
