function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';
import { Home, LocationOn, LocalPhone, Email, Facebook, BsInstagram } from '@edx/paragon/icons';
import { Icon } from '@edx/paragon';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import footerLogo from '../assets/images/footer-logo.png';
import androidImage from '../assets/images/android.png';
import iosImage from '../assets/images/ios.png';
import qrImage from '../assets/images/qr.png';
ensureConfig(['LMS_BASE_URL', 'LOGO_TRADEMARK_URL'], 'Footer component');
var EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link'
};
var SiteFooter = /*#__PURE__*/function (_React$Component) {
  _inherits(SiteFooter, _React$Component);
  var _super = _createSuper(SiteFooter);
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _super.call(this, props);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SiteFooter, [{
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute('href');
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: 'outbound_link',
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        logo = _this$props.logo,
        intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;

      // return (
      //   <footer
      //     role="contentinfo"
      //     className="footer d-flex border-top py-3 px-4"
      //   >
      //     <div className="container-fluid d-flex">
      //       <a
      //         className="d-block"
      //         href={config.LMS_BASE_URL}
      //         aria-label={intl.formatMessage(messages['footer.logo.ariaLabel'])}
      //       >
      //         <img
      //           style={{ maxHeight: 45 }}
      //           src={logo || config.LOGO_TRADEMARK_URL}
      //           alt={intl.formatMessage(messages['footer.logo.altText'])}
      //         />
      //       </a>
      //       <div className="flex-grow-1" />
      //       {showLanguageSelector && (
      //         <LanguageSelector
      //           options={supportedLanguages}
      //           onSubmit={onLanguageSelected}
      //         />
      //       )}
      //     </div>
      //   </footer>
      // );
      return /*#__PURE__*/React.createElement("div", {
        className: "footer-wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        className: "footer container py-3"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
        alt: "logo",
        className: "footer-logo",
        src: footerLogo
      })), /*#__PURE__*/React.createElement("div", {
        className: "info-rows"
      }, /*#__PURE__*/React.createElement("div", {
        className: "info"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, intl.formatMessage(messages.Information)), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Home
      }), intl.formatMessage(messages['DIGITAL LEARNING CENTER - HUTECH'])), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        src: LocationOn
      }), intl.formatMessage(messages['475A Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City'])), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        src: LocalPhone
      }), " (028) 5449 9998"), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Email
      }), " dayhocso@hutech.edu.vn")), /*#__PURE__*/React.createElement("div", {
        className: "connect"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, intl.formatMessage(messages.Connect)), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://www.facebook.com/profile.php?id=100092564956873"
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Facebook
      }), " Facebook ")), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://www.youtube.com/c/HUTECHChannel"
      }, /*#__PURE__*/React.createElement("span", {
        className: "pgn__icon"
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        className: "bi bi-youtube",
        viewBox: "0 0 16 16",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z",
        fill: "currentColor"
      }))), "Youtube")), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://www.instagram.com/hutechuniversity"
      }, /*#__PURE__*/React.createElement("span", {
        className: "pgn__icon"
      }, /*#__PURE__*/React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        className: "bi bi-instagram",
        viewBox: "0 0 16 16",
        role: "img",
        focusable: "false",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z",
        fill: "currentColor"
      }))), "Instagram"))), /*#__PURE__*/React.createElement("div", {
        className: "download"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, intl.formatMessage(messages['Download App'])), /*#__PURE__*/React.createElement("div", {
        className: "images"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://apps.apple.com/us/app/hutech-x/id1632853626"
      }, /*#__PURE__*/React.createElement("img", {
        alt: "ios-app",
        src: iosImage
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=vn.edu.hutech.lms"
      }, /*#__PURE__*/React.createElement("img", {
        alt: "android-app",
        src: androidImage
      })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
        alt: "qr",
        src: qrImage
      }))))), /*#__PURE__*/React.createElement("div", {
        className: "text-right pt-3 pl-3 pr-3"
      }, "\xA9 2022 HUTECH. All rights reserved.")));
    }
  }]);
  return SiteFooter;
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map