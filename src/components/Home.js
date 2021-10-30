import React, { } from 'react'

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
// Components 
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../hook/useHomeFetch';
// Image
import NoImage from '../images/no_image.jpg';
function Home() {
    const {state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
 

    if(error) return <div>Something went wrong ...</div>
    return (
        <>
            {!searchTerm && state.results[2] &&
            <HeroImage 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
                title ={state.results[2].original_title}
                text = {state.results[2].overview}
            /> 
            }
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm?'Search Results':'Popular Movies'}>
                {state.results.map(movie => (
                   <Thumb
                    key={movie.id}
                    clickable
                    image=
                    {movie.poster_path 
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                        : NoImage

                    }
                    movieId={movie.id}
                   >

                   </Thumb>
                ))}
            </Grid>
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text="Load More" callBack={() => setIsLoadingMore(true)} />
            )}
        </>
    )
}

export default Home