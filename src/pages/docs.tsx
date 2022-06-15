import React from 'react';
import {Redirect} from '@docusaurus/router';

/**
 * Redirect for the /docs page
 */
const DocsRedirect: React.FC = () => {
    return <Redirect to="/docs/category/referral-farming" />;
}

export default DocsRedirect;