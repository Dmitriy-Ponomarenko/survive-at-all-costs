// src/api/ApiClient.js

import { t } from 'i18next';
import i18n from '@/i18n/i18n';
import { RequestMethod } from '@/shared/enums';
import { isLiteralObject } from '@/utils/isLiteralObject';
import { isTokenExpired } from '@/utils/isTokenExpired';

export const buildAuthorizationHeader = accessToken => {
  return `JWT ${accessToken}`;
};

export class ErrorStatusCode extends Error {
  constructor(message, name, statusCode) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export class ApiClient {
  static isRefreshing = false;
  static onLogout = null;
  static onRefreshToken = null;
  static getAccessToken = null;
  static getRefreshToken = null;

  static setTokenHandlers(handlers) {
    this.onLogout = handlers.onLogout;
    this.onRefreshToken = handlers.onRefreshToken;
    this.getAccessToken = handlers.getAccessToken;
    this.getRefreshToken = handlers.getRefreshToken;
  }

  // Added optional apiPrefixOverride to allow fully custom base path if needed
  static async fetch(
    url,
    options = {},
    requestType = RequestMethod.GET,
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    let headers = options.headers || {};
    if (useAccessToken) {
      const accessToken = this.getAccessToken ? this.getAccessToken() : null;
      if (!accessToken) {
        throw new Error(t('apiClient.accessTokenNotFound'));
      }
      headers = {
        ...headers,
        Authorization: buildAuthorizationHeader(accessToken),
      };
    }
    if (useApplicationLanguage) {
      headers = { ...headers, 'Accept-Language': i18n.language };
    }
    if (!(options.body instanceof FormData)) {
      if (!headers['Content-Type']) {
        headers = { ...headers, 'Content-Type': 'application/json' };
      }
      if (!headers['Accept']) {
        headers = { ...headers, Accept: 'application/json, text/plain, */*' };
      }
    }
    let body = options.body;

    if (
      !(body instanceof FormData) &&
      (isLiteralObject(body) || Array.isArray(body))
    ) {
      body = JSON.stringify(body);
    }
    if (isLiteralObject(body) || Array.isArray(body)) {
      body = JSON.stringify(body);
      if (!headers['Content-Type']) {
        headers = { ...headers, 'Content-Type': 'application/json' };
      }
    }

    const fetchOptions = {
      ...options,
      headers,
      method: requestType,
      body: body,
    };

    let apiPrefix = apiPrefixOverride ?? import.meta.env.VITE_API_URL;
    if (apiPrefix && !apiPrefix.endsWith('/')) {
      apiPrefix = `${apiPrefix}/`;
    }

    // Fix: Ensure absolute URL paths when no prefix is set
    let finalUrl;
    if (apiPrefix) {
      finalUrl = `${apiPrefix}${url}`;
    } else {
      finalUrl = url.startsWith('/') ? url : `/${url}`;
    }

    try {
      const response = await fetch(finalUrl, fetchOptions);

      if (!response.ok) {
        const responseText = await response.text();
        let error;
        try {
          error = JSON.parse(responseText);
        } catch {
          error = { message: responseText };
        }
        if (response.status === 401) {
          const refreshToken = this.getRefreshToken
            ? this.getRefreshToken()
            : null;

          if (
            refreshToken &&
            !this.isRefreshing &&
            this.onRefreshToken &&
            this.onLogout
          ) {
            this.isRefreshing = true;
            if (isTokenExpired(refreshToken)) {
              this.isRefreshing = false;
              this.onLogout();
            } else {
              try {
                await this.onRefreshToken(refreshToken);
                this.isRefreshing = false;
              } catch {
                this.isRefreshing = false;
                this.onLogout();
              }
            }
          }
        }

        console.log('ERROR', error);

        throw new ErrorStatusCode(
          error.detail || error.message || error.error || response.statusText,
          error.error || response.statusText,
          response.status
        );
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return {};
      }

      const responseData = await response.json();
      if (options.withStatus) {
        return {
          status: response.status,
          data: responseData,
        };
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Load failed') {
        console.error('Network error details:', {
          url: finalUrl,
          method: requestType,
          error: error.message,
          stack: error.stack,
        });
      }
      throw error;
    }
  }

  static async get(
    url,
    options = {},
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    return await this.fetch(
      url,
      options,
      RequestMethod.GET,
      useAccessToken,
      useApplicationLanguage,
      apiPrefixOverride
    );
  }

  static async post(
    url,
    options = {},
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    return await this.fetch(
      url,
      options,
      RequestMethod.POST,
      useAccessToken,
      useApplicationLanguage,
      apiPrefixOverride
    );
  }

  static async put(
    url,
    options = {},
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    return await this.fetch(
      url,
      options,
      RequestMethod.PUT,
      useAccessToken,
      useApplicationLanguage,
      apiPrefixOverride
    );
  }

  static async delete(
    url,
    options = {},
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    return await this.fetch(
      url,
      options,
      RequestMethod.DELETE,
      useAccessToken,
      useApplicationLanguage,
      apiPrefixOverride
    );
  }

  static async patch(
    url,
    options = {},
    useAccessToken = true,
    useApplicationLanguage = true,
    apiPrefixOverride
  ) {
    return await this.fetch(
      url,
      options,
      RequestMethod.PATCH,
      useAccessToken,
      useApplicationLanguage,
      apiPrefixOverride
    );
  }

  // Specific method for getting user by ID (public endpoint)
  static async getUserById(userId) {
    return this.get(
      `api/public/users/${userId}`,
      {},
      false, // No auth token needed for public endpoint
      false // No application language needed
    );
  }
}

export default ApiClient;
