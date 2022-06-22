import siteConfig from '@generated/docusaurus.config';

/**
 * Generate path of the Attrace app, i.e. app.attrace.com
 * @param path optional deeplink
 * @returns the path
 */
function getAppUrl(path: string = '') {
    const url = siteConfig.customFields.dappUrl || 'https://app.testnet.attrace.com'
    return url + path
}

export default getAppUrl;
