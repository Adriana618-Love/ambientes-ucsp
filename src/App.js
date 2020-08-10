import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'

import { findAllRoomsAvailable } from './api'


function App() {
	const [availableRooms, setAvailableRooms] = useState([]);

	const handleClick = () => {
		setAvailableRooms(findAllRoomsAvailable())
	}

	return (
		<Container maxWidth='xs' style={{ paddingTop: '8em' }}>
			<Paper>
				<Grid container alignContent='center' direction='column' spacing={2}>
					<Grid item>
						<Grid container justify='center'>
							<Grid item>
								<Button color='primary' variant='contained' onClick={handleClick}>
									Buscar salas disponibles
								</Button>
							</Grid>
						</Grid>
					</Grid>

					<Grid item>
						<Typography variant='h6'>
							Estan disponibles:
						</Typography>
					</Grid>

					<Grid item>
						<Grid container direction='column' spacing={1}>
							{
								availableRooms.map(room => (
									<Grid item key={room.id}>
										{room.nombre}
									</Grid>
								))
							}
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	)
}

export default App
