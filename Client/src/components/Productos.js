import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ProductCard from './ProductCard'
import Categorias from './Categorias'
import swal from 'sweetalert'

export default function Productos({ resultado, query }) {
	const [listaDeProductos, setlistaDeProductos] = useState([])
	const [ordenarMayorMenor, setOrdenarMayorMenor] = useState([])
	const [swicht, setSwicht] = useState(true)

	function prueba() {
		if (swicht) {
			setSwicht(false)
			setOrdenarMayorMenor(resultado.reverse())
			return swicht
		} else {
			setSwicht(true)
			return swicht
		}
	}

	function nueva() {
		setlistaDeProductos([])
		let arrayNew = []
		for (let index of resultado) {
			if (index.condition === 'new') {
				arrayNew.push(index)
				setlistaDeProductos(arrayNew)
			}
		}
		if (arrayNew.length === 0) {
			swal('No se encontraron resultados')
		}
	}
	function usado() {
		setlistaDeProductos([])
		let arrayUsado = []
		for (let index of resultado) {
			if (index.condition === 'used') {
				arrayUsado.push(index)
				setlistaDeProductos(arrayUsado)
			}
		}
		if (arrayUsado.length === 0) {
			swal('No se encontraron resultados')
		}
	}

	function otros() {
		setlistaDeProductos([])
		let arrayOtros = []
		for (let index of resultado) {
			if (index.condition === 'not_specified') {
				arrayOtros.push(index)
				setlistaDeProductos(arrayOtros)
			}
		}
		if (arrayOtros.length === 0) {
			swal('No se encontraron resultados')
		}
	}

	useEffect(() => {
		setlistaDeProductos(resultado)
	}, [resultado])

	if (resultado) {
		return (
			<div>
				<Categorias resultado={resultado} nueva={nueva} usado={usado} otros={otros} prueba={prueba} />
				<Grid container justify='center'>
					{listaDeProductos && swicht ? (
						listaDeProductos.map((e) => (
							<Grid item md={24} key={e.id}>
								<ProductCard id={e.id} title={e.title} price={e.price} thumbnail={e.thumbnail.replace('I.jpg', 'B.jpg')} sold_quantity={e.sold_quantity} condition={e.condition} available_quantity={e.available_quantity} query={query} currency={e.currency_id} />
							</Grid>
						))
					) : listaDeProductos && swicht === false ? (
						listaDeProductos.map((e) => (
							<Grid item md={24} key={e.id}>
								<ProductCard id={e.id} title={e.title} price={e.price} thumbnail={e.thumbnail.replace('I.jpg', 'B.jpg')} sold_quantity={e.sold_quantity} condition={e.condition} available_quantity={e.available_quantity} query={query} currency={e.currency_id} />
							</Grid>
						))
					) : (
						<div>...</div>
					)}
				</Grid>
			</div>
		)
	} else {
		return (
			<div>
				<h6>...</h6>
			</div>
		)
	}
}
