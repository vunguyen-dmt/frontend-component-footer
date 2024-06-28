var _excluded = ["intl", "options", "onSubmit"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getCurrentLanguageCode } from './handleLanguageChange';
import messages from './Footer.messages';
var LanguageSelector = function LanguageSelector(_ref) {
  var intl = _ref.intl,
    options = _ref.options,
    onSubmit = _ref.onSubmit,
    props = _objectWithoutProperties(_ref, _excluded);
  var currentLanguageCode = getCurrentLanguageCode();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var languageCode = e.target.elements['site-footer-language-select'].value;
    onSubmit(languageCode);
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    className: "form-inline",
    onSubmit: handleSubmit
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "site-footer-language-select",
    className: "d-inline-block m-0"
  }, intl.formatMessage(messages.SelectLanguageLabel)), /*#__PURE__*/React.createElement("select", {
    id: "site-footer-language-select",
    className: "form-control-sm mx-2",
    name: "site-footer-language-select",
    defaultValue: currentLanguageCode
  }, options.map(function (_ref2) {
    var value = _ref2.value,
      label = _ref2.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-primary btn-sm change-language-submit-btn",
    type: "submit"
  }, intl.formatMessage(messages.Apply))));
};
LanguageSelector.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })).isRequired
};
export default injectIntl(LanguageSelector);
//# sourceMappingURL=LanguageSelector.js.map