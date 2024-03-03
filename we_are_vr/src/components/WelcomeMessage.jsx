import PropTypes from 'prop-types';

const WelcomeMessage = ({ name, isLoggedIn }) => {
    const message = "Welcome ";
    
    if (isLoggedIn) {
        return <h1>{message} back, {name}!</h1>;
    } else {
        return <h1>{message} to WeAreVR!</h1>;
    }
};

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};

export default WelcomeMessage;