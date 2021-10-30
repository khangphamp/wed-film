import React from 'react'
import Loading from '../../images/loading-image.png'
function LoadingImage({refImage}) {
    return (
        <div>
            <img ref={refImage} src={Loading} alt="Loadingimage" />
        </div>
    )
}

export default LoadingImage
