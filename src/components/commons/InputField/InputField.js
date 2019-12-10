import React from 'react';
import { handleChange } from '../../../utilities/fieldUtils';
import './InputField.css';

function InputField(props) {

  const { label, placeholderText, id } = props;

  return (
    <div className="input-field-wrapper">
      <label className="input-field-label" htmlFor={ id }>{ label }</label>
      <input type="text"
        id={ id }
        placeholder={ placeholderText }
        onChange={(e) => { handleChange(e, props.changeCallback) }}/>
    </div>
  );
}

export default InputField;
