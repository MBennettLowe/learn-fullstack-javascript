import React from 'react';

const Header = ({message}) => {
    return (
        <h2> className="text-center">
            {message}
        </h2>
    );
};

Header.propTypes = (
    message: React.propTypes.string.isRequired // now requires a string
);

export default Header;