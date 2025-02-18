import './App.css'
import SpeciesFilter from './components/filters/SpeciesFilter'
import GenderFilter from './components/filters/GenderFilter'
import OriginFilter from './components/filters/OriginFilter'
import SelectedFilters from './components/SelectedFilters'
import SearchByName from './components/SearchByName'
import Sorting from './components/Sorting'
import Content from './hooks/Content'
import { SpeciesProvider } from './contexts/SpeciesContext'
import { GenderProvider } from './contexts/GenderContext'
import { OrginProvider } from './contexts/OriginContext'
import { SortingProvider } from './contexts/SortingContext'
import { SearchByNameProvider } from './contexts/SearchByNameContext'
import { ContentProvider } from './contexts/ContentContext'

const App = () => {
  return (

      <SearchByNameProvider>
        <SortingProvider>
          <OrginProvider>
            <SpeciesProvider>
            <GenderProvider >  
            <ContentProvider>

                <div className="row">
                  <div className="App column side">
                    <SpeciesFilter />
                    <GenderFilter />
                    <OriginFilter />
                  </div>
                  <div className="column right">
                    <SelectedFilters />
                    <div id="dv-search-by-name">
                      <SearchByName />
                      <Sorting />
                    </div>
                    
                    <Content />
                    
                  </div>
                </div>
              
              </ContentProvider> 
              </GenderProvider>  
            </SpeciesProvider> 
          </OrginProvider>
        </SortingProvider>
      </SearchByNameProvider> 
     
  )
}

export default App