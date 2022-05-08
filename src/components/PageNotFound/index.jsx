import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
function PageNotFound() {
    const navigate = useNavigate();
    return (
        <div className="pageNotFound">
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <div className="my-10 flex justify-center">
                <a className="button" onClick={() => navigate(-1)}>
                    <i className="icon-home"></i> Go back to previous page, is
                    better.
                </a>
            </div>
        </div>
    );
}

export default PageNotFound;
