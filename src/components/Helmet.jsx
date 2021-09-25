import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

function Helmet(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  document.title = 'Yolo - ' + props.title;
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Helmet;