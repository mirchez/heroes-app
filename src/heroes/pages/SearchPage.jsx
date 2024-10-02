import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {HeroCard} from '../components'
import queryString from 'query-string'
import { getHeroByName } from '../helpers'

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)

    const heroes = getHeroByName(q)

    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && heroes.length === 0;
    
    const {searchText, onInputChange} = useForm({
      searchText: q
    })

    const onSearchSubmit = (e) => {
      e.preventDefault()
      if ( searchText.trim().length <= 1) return
      const query = searchText.trim().toLowerCase()
      navigate(`?q=${query}`)
    }

  return (
    <>
        <h1>Find Your Hero</h1>

        <div className="row">

          <div className="col-5">
            <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Spider-Man"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}/>

                <button className="btn btn-outline-primary mt-2 fa fa-search">
                    
                </button>

                

            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />

            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Start Searching
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
                <b>{ q }</b> was not found
            </div>
              {
                heroes.map( hero => (
                  <HeroCard key={hero.id} {...hero}/>
                ) )
              }
            {/*  */}

          </div>

        </div>
        

    </>
  )
}

 