import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <div>
      <h3>{text}</h3>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
