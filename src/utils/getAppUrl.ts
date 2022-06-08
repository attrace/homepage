/**
 * Generate path of the Attrace app, i.e. app.attrace.com
 * @param path optional deeplink
 * @returns the path
 */
function getAppUrl(path:string = '') {
    const currentURL = window.location.origin;
    return currentURL.replace('://','://app.')+path;
}

export default getAppUrl;
