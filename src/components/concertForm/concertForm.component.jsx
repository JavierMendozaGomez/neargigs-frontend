import React from 'react';
import './concertForm.styles.css'
import TextField from '@material-ui/core/TextField';

const ConcertForm = () => {
    return (
        <form className='container'>
            <TextField label='Title'/>
            <TextField label='Description' />
            <TextField label='ImageURL' />
        </form>
    );
};

export default ConcertForm;
