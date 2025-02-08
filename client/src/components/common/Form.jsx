import React from 'react';
import './form.css';

const Form = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        {formControls.map((controlItem) => {
          return (
            <div key={controlItem.name} className="form_container">
              <input
                className="form_input"
                type={controlItem.type}
                name={controlItem.name}
                placeholder={controlItem.placeholder}
                id={controlItem.name}
                value={formData[controlItem.name] || ''} 
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [controlItem.name]: e.target.value, 
                  })
                }
              />
            </div>
          );
        })}
      </div>
      <div className="signup_button_container">
        <button type="submit">{buttonText || 'SIGN UP'}</button>
      </div>
    </form>
  );
};

export default Form;
