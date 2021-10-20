import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { red } from '@material-ui/core/colors'
import CardActionArea from '@material-ui/core/CardActionArea'

import '../Estilos/ProductoCard.css'

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	media: {
		height: '100%',
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	button: {
		margin: theme.spacing(1),
	},
}))

export default function ProductCard({ title, price, thumbnail, available_quantity, condition, currency }) {
	const classes = useStyles()

	return (
		<div className='container'>
			<CardActionArea>
				<Card className={classes.root}>
					<CardMedia className={classes.media} image={thumbnail} title='Paella dish' />
					<CardContent>
						<Typography variant='body2' color='textSecondary' component='p'>
							{title}
						</Typography>
						<Typography variant='body2' color='textPrimary' component='p'>
							{currency} {price}
						</Typography>
						<Typography variant='body2' color='textPrimary' component='p'>
							Estado: {condition}
						</Typography>
						<Typography variant='body2' color='textPrimary' component='p'>
							Cantidad Disponible: {available_quantity}
						</Typography>
					</CardContent>
				</Card>
			</CardActionArea>
		</div>
	)
}
