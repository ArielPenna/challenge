import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import '../Estilos/ProductoCard.css'

const useStyles = makeStyles((theme) => ({
	root: {
		width: 345,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	media: {
		height: 250,
		width: 345,
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
}))

export default function ProductCard({ title, price, thumbnail, available_quantity, condition, currency }) {
	const classes = useStyles()

	return (
		<div className='container'>
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
		</div>
	)
}
