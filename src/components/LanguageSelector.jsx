import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getCurrentLanguageCode } from './handleLanguageChange';
import messages from './Footer.messages';

const LanguageSelector = ({
  intl, options, onSubmit, ...props
}) => {

  const currentLanguageCode = getCurrentLanguageCode();

  const handleSubmit = (e) => {
    e.preventDefault();
    const languageCode = e.target.elements['site-footer-language-select'].value;
    onSubmit(languageCode);
  };

  return (
    <form
      className="form-inline"
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="form-group">
        <label htmlFor="site-footer-language-select" className="d-inline-block m-0">
          {intl.formatMessage(messages.SelectLanguageLabel)}
        </label>
        <select
          id="site-footer-language-select"
          className="form-control-sm mx-2"
          name="site-footer-language-select"
          defaultValue={currentLanguageCode}
        >
          {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
        </select>
        <button className="btn btn-outline-primary btn-sm change-language-submit-btn" type="submit">
          {intl.formatMessage(messages.Apply)}
        </button>
      </div>
    </form>
  );
};

LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
};

export default injectIntl(LanguageSelector);