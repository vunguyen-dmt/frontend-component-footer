import React from 'react';
import Cookies from 'universal-cookie';
import { getConfig } from '@edx/frontend-platform';
export var setCookie = function setCookie(name, value, days, domain) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }
  document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/;domain=").concat(domain);
};
export function getCookie(cookieName) {
  var cookies = new Cookies();
  return cookies.get(cookieName);
}
export var getCurrentLanguageCode = function getCurrentLanguageCode() {
  return getCookie(getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME) || 'en';
};
var getLMSDomain = function getLMSDomain() {
  return ".".concat(getConfig().LMS_BASE_URL.replace('https://', ''));
};
var getStudioDomain = function getStudioDomain() {
  return ".".concat(getConfig().STUDIO_BASE_URL.replace('https://', ''));
};
export var handleLanguageChange = function handleLanguageChange(value) {
  setCookie(getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME, value, 30, getLMSDomain());
  setCookie(getConfig().LANGUAGE_PREFERENCE_COOKIE_NAME, value, 30, getStudioDomain());
  setTimeout(function () {
    window.location.reload();
  }, 50);
};
//# sourceMappingURL=handleLanguageChange.js.map