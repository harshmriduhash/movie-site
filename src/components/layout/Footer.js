import React from 'react';

const Footer = () => {
    return (  
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Made By:
                        <span className="text-warning font-weight-normal">
                            Mihir Kumar Singh
                        </span>
                        , using <a className="text-success" target="blank" rel="noopener noreferrer" href="http://www.omdbapi.com/">OMDb API</a> for movies' data, extracted from IMDB. <i className="fab fa-imdb"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;