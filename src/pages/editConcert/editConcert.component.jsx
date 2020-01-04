import React, {useEffect, useReducer} from 'react';
import ConcertForm from '../../components/concertForm/concertForm.component';
import {withRouter} from 'react-router-dom';

const EditConcertPage = ({match}) => {
	return (
        <div>
            <ConcertForm/>
        </div>
    )
}

export default withRouter(EditConcertPage);