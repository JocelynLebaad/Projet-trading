// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  quotation,
  changeAuto,
}) => {
  const handleChange = (evt) => {
    // On récupére la valeur de l'input et son nom
    onChange(parseFloat(evt.target.value ));
    if (name === 'quantity') {
       changeAuto(evt.target.value * quotation);
    }else{
      changeAuto(evt.target.value / quotation);
    }
   
  };

  const inputId = `field-${name}`;

  return (
    <div className="order__field">
      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
      <input
        value={value}
        id={inputId}
        type={type}
        className="field-input-order"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.number,
  quotation: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  changeAuto: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: null,
  type: 'text',
};

// == Export
export default Field;
