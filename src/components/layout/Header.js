import React from 'react'
import PropTypes from 'prop-types'


const Header = props => {

    const {branding}=props; //This is how we pass property
    return (
        <nav className='nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
            <div className="container">
                <a href="/" className="navbar-brand">
                    {branding}
                </a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
//This will set it to default 
Header.defaultProps= { 
    branding:'My app'
}
//This is for validaton
Header.propTypes={
    branding:PropTypes.string.isRequired
};
export default Header;