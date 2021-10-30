import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';

// component
import LoadingImage from './LoadingImage';
// styles
import { Image } from './Thumb.styles'
function Thumb({ image, movieId, clickable }) {
    const refImage = React.useRef();

    const removeImage = () => {
        refImage.current.remove();
    }
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <LoadingImage refImage={refImage}/>
                    <LazyLoad >
                         <Image onLoad={removeImage} src={image} alt='movie-thumb' />
                    </LazyLoad>
                </Link>
            )   :   (
                <>
                <LazyLoad >
                    <Image src={image} alt='movie-thumb'/>
                </LazyLoad>
                </>
            )
            }
        </div>
    )
}
Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}
export default Thumb
