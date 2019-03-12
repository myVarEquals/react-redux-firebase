import React from 'react';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to={'/'} className='brand-logo' >The Poster</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(navbar);