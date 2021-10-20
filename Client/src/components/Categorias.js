import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			padding: theme.spacing(3),
			color: '#06e3d4',
		},
		margin: theme.spacing(1),
		display: 'flex',
		justifyContent: 'center',
	},
}))

export default function Categorias({ resultado, nueva, usado, otros, ordenar }) {
	const classes = useStyles()

	if (resultado) {
		return (
			<div className={classes.root} position='static'>
				<a onClick={() => nueva('new')}>Nuevo</a>
				<a onClick={() => usado('used')}>Usado</a>
				<a onClick={() => otros('not_specified')}>Otros</a>
				<a onClick={ordenar}>Ordenar por Precio</a>
			</div>
		)
	} else {
		return (
			<div>
				<h6>Sin resultados.</h6>
			</div>
		)
	}
}
