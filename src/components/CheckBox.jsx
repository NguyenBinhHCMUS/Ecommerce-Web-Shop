import React, { useRef } from 'react';
import PropTypes from 'prop-types';

CheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

function CheckBox(props) {

  const inputRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  }
  return (
    <label className="custom-checkbox" l>
      <input type='checkbox' onChange={onChange} checked={props.checked} ref={inputRef}></input>
      <span className='custom-checkbox__checkmark'>
        <i className="bx bx-check"></i>
      </span>
      {props.label}
    </label>
  );
}

export default CheckBox;