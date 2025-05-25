import React from 'react';

const FormInput = ({ id, label, value, onChange, error, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}{required && ' *'}</label>
    <input
      id={id}
      name={id}
      type="text"
      value={value}
      onChange={onChange}
      aria-required={required}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    {error && (
      <span id={`${id}-error`} role="alert" style={{ color: 'red' }}>
        {error}
      </span>
    )}
  </div>
);

export default FormInput;
