import React from 'react';
import './concertForm.styles.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {createConcert} from '../../redux/concertsOverview/concertsOverview.actions';
import {connect} from 'react-redux';

const ConcertForm = ({createConcert}) => {
    return (
        <form className='container' onSubmit={()=>{createConcert()}}>
            <TextField label='Title'/>
            <TextField label='Description' />
            <TextField label='ImageURL' />
            <Button variant="contained" color="primary">
                Create Concert
            </Button>
        </form>
    );
};


export default connect(null, {createConcert})(ConcertForm);
