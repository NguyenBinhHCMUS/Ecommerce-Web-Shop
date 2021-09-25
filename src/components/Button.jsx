import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  onclick: PropTypes.func,
  animate: PropTypes.bool,
  icon: PropTypes.string,
};

function Button(props) {

  const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';

  const size = props.size ? 'btn-' + props.size : '';

  const animate = props.animate ? 'btn-animate' : '';

  return (
    <button
      className={`btn ${bg} ${size} ${animate}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn__txt">{props.children}</span>
      {
        props.icon ? (
          <span className="btn__icon">
            <i className={`${props.icon} bx-tada`}></i>
          </span>
        ) : null
      }
    </button>
  );
}

export default Button;