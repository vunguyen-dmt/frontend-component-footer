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
import { YoutubeIcon, InstagramIcon } from './icons';
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
        className: "logo",
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
      }, /*#__PURE__*/React.createElement(Icon, {
        src: Facebook
      }), " Facebook "), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(YoutubeIcon, null), "Youtube"), /*#__PURE__*/React.createElement("div", {
        className: "with-icon"
      }, /*#__PURE__*/React.createElement(InstagramIcon, null), "Instagram")), /*#__PURE__*/React.createElement("div", {
        className: "download"
      }, /*#__PURE__*/React.createElement("div", {
        className: "title"
      }, intl.formatMessage(messages['Download App'])), /*#__PURE__*/React.createElement("div", {
        className: "images"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
        alt: "ios-app",
        src: iosImage
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
        alt: "android-app",
        src: androidImage
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
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