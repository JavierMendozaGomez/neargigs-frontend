
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

const Header = ({history}) => (
	<div>
		<AppBar position='relative'>
			<Toolbar>
				<Button onClick={() => { history.push('/'); }}>Home</Button>
				<Button onClick={() => { history.push('/newConcert'); }}>Add concert</Button>
			</Toolbar>
		</AppBar>
	</div>
);

export default withRouter(Header);
