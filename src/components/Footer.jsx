import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { ensureConfig } from '@edx/frontend-platform/config';
import { AppContext } from '@edx/frontend-platform/react';

import {
  Home, LocationOn, LocalPhone, Email, Facebook, BsInstagram,
} from '@edx/paragon/icons';
import { Icon } from '@edx/paragon';
import messages from './Footer.messages';
import LanguageSelector from './LanguageSelector';
import footerLogo from '../assets/images/footer-logo.png';
import androidImage from '../assets/images/android.png';
import iosImage from '../assets/images/ios.png';
import qrImage from '../assets/images/qr.png';

import { YoutubeIcon, InstagramIcon } from './icons';

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
      supportedLanguages,
      onLanguageSelected,
      logo,
      intl,
    } = this.props;
    const showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
    const { config } = this.context;

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
    return (
      <div className="footer-wrapper">
        <div className="footer container py-3">
          <div>
            <img alt="logo" className="logo" src={footerLogo} />
          </div>
          <div className="info-rows">
            <div className="info">
              <div className="title">{intl.formatMessage(messages.Information)}</div>
              <div className="with-icon"><Icon src={Home} />{intl.formatMessage(messages['DIGITAL LEARNING CENTER - HUTECH'])}</div>
              <div className="with-icon"><Icon src={LocationOn} />{intl.formatMessage(messages['475A Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi Minh City'])}</div>
              <div className="with-icon"><Icon src={LocalPhone} /> (028) 5449 9998</div>
              <div className="with-icon"><Icon src={Email} /> dayhocso@hutech.edu.vn</div>
            </div>
            <div className="connect">
              <div className="title">{intl.formatMessage(messages.Connect)}</div>
              <div className="with-icon"><Icon src={Facebook} /> Facebook </div>
              <div className="with-icon"><YoutubeIcon />Youtube</div>
              <div className="with-icon"><InstagramIcon />Instagram</div>
            </div>
            <div className="download">
              <div className="title">{intl.formatMessage(messages['Download App'])}</div>
              <div className="images">
                <div>
                  <div><img alt="ios-app" src={iosImage} /></div>
                  <div><img alt="android-app" src={androidImage} /></div>
                </div>
                <div><img alt="qr" src={qrImage} /></div>
              </div>
            </div>
          </div>
          <div className="text-right pt-3 pl-3 pr-3">© 2022 HUTECH. All rights reserved.</div>
        </div>
      </div>
    );
  }
}

SiteFooter.contextType = AppContext;

SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: [],
};

export default injectIntl(SiteFooter);
export { EVENT_NAMES };
