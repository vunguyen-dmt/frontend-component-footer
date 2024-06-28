import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';

import {
  Home, LocationOn, LocalPhone, Email, Facebook, BsInstagram,
} from '@openedx/paragon/icons';
import { Icon } from '@openedx/paragon';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import { handleLanguageChange } from './handleLanguageChange';
import '../_footer.scss';

ensureConfig([
  'LMS_BASE_URL',
  'LOGO_TRADEMARK_URL',
], 'Footer component');

const EVENT_NAMES = {
  FOOTER_LINK: 'edx.bi.footer.link',
};

class SiteFooter extends React.Component {
  constructor(props) {
    super(props);
    this.externalLinkClickHandler = this.externalLinkClickHandler.bind(this);
  }

  externalLinkClickHandler(event) {
    const label = event.currentTarget.getAttribute('href');
    const eventName = EVENT_NAMES.FOOTER_LINK;
    const properties = {
      category: 'outbound_link',
      label,
    };
    sendTrackEvent(eventName, properties);
  }

  render() {
    const {
      showLanguageSelector,
      logo,
      intl
    } = this.props;
    const { config } = this.context;

    return (
      <div className="footer-wrapper">
        <div className="footer container py-3">
          <div className="footer-logo-wrapper">
            <div>
              <img alt="logo" className="footer-logo" src="https://d10g66pf9vjy7h.cloudfront.net/media/home-page-resources/footer-logo.png" />
            </div>
            <div className="footer-language-selector-wrapper">
              {showLanguageSelector && (
              <LanguageSelector
                options={[
                  { label: 'English', value: 'en' },
                  { label: 'Tiếng Việt', value: 'vi' },
                ]}
                onSubmit={handleLanguageChange}
              />
              )}
            </div>
          </div>
          <div className="info-rows">
            <div className="info">
            <div className="title">{intl.formatMessage(messages.Information)}</div>
            <div className="with-icon"><Icon src={Home} />{intl.formatMessage(messages.DLC)}</div>
              <div className="with-icon"><Icon src={LocationOn} /><a href="https://maps.app.goo.gl/Z2LgC4AzB9E84wL78">{intl.formatMessage(messages.Address)}</a></div>
            <div className="with-icon"><Icon src={LocalPhone} /><a href="tel:+8402854499998">(028) 5449 9998</a></div>
            <div className="with-icon"><Icon src={Email} /> <a href="mailto: dayhocso@hutech.edu.vn">dayhocso@hutech.edu.vn</a></div>
            </div>
            <div className="connect">
              <div className="title">{intl.formatMessage(messages.Connect)}</div>
              <div className="with-icon"><a href="https://www.facebook.com/profile.php?id=100092564956873"><Icon src={Facebook} /> Facebook </a></div>
              <div className="with-icon"><a href="https://www.youtube.com/c/HUTECHChannel"><span className="pgn__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="bi bi-youtube" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="currentColor" /></svg></span>Youtube</a></div>
              <div className="with-icon"><a href="https://www.instagram.com/hutechuniversity"><span className="pgn__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="bi bi-instagram" viewBox="0 0 16 16" role="img" focusable="false" aria-hidden="true"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="currentColor" /></svg></span>Instagram</a></div>
            </div>
            <div className="download">
              <div className="title">{intl.formatMessage(messages.DownloadApp)}</div>
              <div className="images">
                <div>
                  <div><a href="https://apps.apple.com/us/app/hutech-x/id1632853626"><img alt="ios-app" src="https://d24mgaater58cv.cloudfront.net/images/App-Store.png" /></a></div>
                  <div><a href="https://play.google.com/store/apps/details?id=vn.edu.hutech.lms"><img alt="android-app" src="https://d24mgaater58cv.cloudfront.net/images/Google-Play.png" /></a></div>
                </div>
                <div><img alt="qr" src="https://d24mgaater58cv.cloudfront.net/images/hutech-elearning-app-download-qr.png" /></div>
              </div>
            </div>
          </div>
          <div className="text-right pt-3 pl-3 pr-3">© 2024 HUTECH eLearning. {intl.formatMessage(messages.AllRightsReserved)}.</div>
          </div>
      </div>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  showLanguageSelector: PropTypes.bool,
};

SiteFooter.defaultProps = {
  logo: undefined,
  showLanguageSelector: false,
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
