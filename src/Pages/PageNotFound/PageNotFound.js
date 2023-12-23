import React, { useEffect } from 'react';
import errorPage from '../../images/page-not-found/404.jpg'

const PageNotFound = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className="text-center">
            <img className="img-fluid" src={ errorPage } alt="errorPageImage" />
        </div>
    );
};

export default PageNotFound;