module.exports = {
    about: [
      'about',
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
        ]
      },      
      {
        type: 'category',
        label: 'Oracles',
        collapsed: false,
        link: {
          type: 'generated-index',
          title: 'Oracles Overview',
          description:
            "Attrace Oracles. ",
          keywords: ['referral','farming'],
        },
        items: [
          'oracles/concept',
          'oracles/guides',
          'oracles/reward',
        ]
      },     
      {
        type: 'category',
        label: 'Commmunity',
        collapsed: false,
        items: [
          'community/attr-token',
          'community/tokenomics',
        ]
      },            
      {
        type: 'category',
        label: 'Reference',
        collapsed: false,
        items: [
          'reference/glossary',
          'reference/faq',
        ]
      },       
      {
        type: 'category',
        label: 'Project',
        collapsed: false,
        items: [
          'reference/glossary',
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
          keywords: ['guides'],
        },
        items: [
          'legal/code-of-conduct',
          'legal/privacy-policy',
        ]
      },

    ]
  };

//http://localhost:3000/about/#vision
// About
//   Vision
// Referral Farming
//   Concept
//   Guides
//   Reward
// Referral Oracles
//   Concept
//   Guides
//   Reward
// Attrace Token
//   Tokenomics
// Reference
//   FAQ
//   Glossary
// Project
//   Roadmap
//   Attrace Team
// Legal