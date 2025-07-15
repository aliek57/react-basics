import './Searchbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if (query.trim()) {
            navigate(`/search?q=${query}`)
        } else {
            navigate('/')
        }
    }
  return (
    <form onSubmit={handleSearch}>
        <input
            type="text"
            placeholder="Buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='searchInput'
        />
        <button type="submit" className='btnSearch'>Buscar</button>
    </form>
  )
}

export default Searchbar