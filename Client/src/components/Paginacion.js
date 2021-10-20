import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			display: 'flex',
			justifyContent: 'center',
			margin: theme.spacing(2),
		},
	},
}))

export default function Paginacion({ contador, page, handleChange }) {
	const classes = useStyles()

	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#FBF159',
			},
		},
	})
	return (
		<div className={classes.root}>
			<ThemeProvider theme={theme}>
				<Pagination size='large' shape='rounded' count={contador} color='primary' page={page} onChange={handleChange} />
			</ThemeProvider>
		</div>
	)
}
