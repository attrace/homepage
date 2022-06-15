module.exports = {
    about: [
      {
        type: 'category',
        label: 'Referral Farming',
        collapsed: false,
        link: {
          type: 'generated-index',
          title: 'Referral Farming Overview',
          description:
            "The concept of farming is that a project dedicates a daily budget to promote its tokenised asset. ",
          keywords: ['referral','farming'],
        },
        items: [
          'referral-farming/concept',
          'referral-farming/guides',
          'referral-farming/reward',
          'referral-farming/faq',
        ]
      },      
      'oracles/oracles',  
      {
        type: 'category',
        label: 'Attrace Token',
        collapsed: false,
        items: [
          'attrace-token/attr',
          'attrace-token/tokenomics',
          'attrace-token/farm-attr',
        ]
      },            
      {
        type: 'category',
        label: 'Reference',
        collapsed: false,
        items: [
          'reference/glossary',
        ]
      },       
      {
        type: 'category',
        label: 'Project',
        collapsed: false,
        items: [
          'project/roadmap',
          {
            type: 'link',
            label: 'Attrace Team', // The link label
            href: 'https://attraceteam.com', // The external URL
          }
        ]
      },         
      {
        type: 'category',
        label: 'Legal',
        collapsed: true,
        link: {
          type: 'generated-index',
          title: 'Attrace Legal',
          description:
            "Legal statements and privacy policies",
          keywords: ['legal'],
        },
        items: [
          'legal/code-of-conduct',
          'legal/privacy-policy',
        ]
      },

    ]
  };
