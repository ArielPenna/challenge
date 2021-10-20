import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Productos from './components/Productos'
import Paginacion from './components/Paginacion'

export default function App() {
	const [productos, setProductos] = useState([])
	const [inicio, setInicio] = useState(0)
	const [page, setPage] = useState(1)
	const limite = 6
	const [contador, setContador] = useState(0)
	const [query, setQuery] = useState('')
	const [reverse, setReverse] = useState(false)

	const onSearch = (busqueda) => {
		setQuery(busqueda)
		fetch(`http://localhost:4000/api/search?q=${busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				setContador(Math.ceil(data.results.length / limite))
				setProductos(data.results.slice(inicio, inicio + limite))
			})
			.catch((error) => {
				console.error(error)
			})
	}

	const MenorMayor = productos.sort((a, b) => {
		if (!reverse) {
			return a.price - b.price
		} else {
			return b.price - a.price
		}
	})

	const handleChange = (e, value) => {
		setPage(value)
		let select = value * limite
		if (select >= 30) {
			select = 0
		}
		setInicio(select)
		onSearch(query)
	}

	useEffect(() => {
		onSearch('zapatillas')
	}, [])

	return (
		<div position='static'>
			<Router>
				<Route path='/' render={() => <SearchBar onSearch={onSearch} />} />
				<Route path='/' render={() => <Productos resultado={MenorMayor} reverse={reverse} setReverse={setReverse} />} />
				<Paginacion contador={contador} page={page} handleChange={handleChange} />
			</Router>
		</div>
	)
}
