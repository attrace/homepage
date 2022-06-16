import React from 'react';
import {Redirect} from '@docusaurus/router';

/**
 * Redirect for the /docs page
 */
const DocsRedirect: React.FC = () => {
    return <Redirect to="/guides/category/referral-farming" />;
}

export default DocsRedirect;