import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'How many products can I use Churn Shield for?',
      a: (
        <>
          The single license can be used for one commercial application or SaaS
          product and unlimited internal tools. You can buy as many licenses as
          you need. <br /> The unlimited license does not have any restrictions.
        </>
      ),
    },
    {
      q: 'Can I use Churn Shield for client work?',
      a: "Yes, that's totally up to you, as long as it fits the license you purchase.",
    },
    {
      q: 'Can I use Churn Shield Pro for Open Source projects?',
      a: 'No currently not. A large part of Saas UI is already released under MIT license. We try to give back to the community as much as possible.',
    },
    {
      q: 'Can I track user questions asked to Chrun Shield',
      a: 'Yes, Churn Shield provides reports on aspects of your page that are frequently confusing to users',
    },
  ],
}

export default faq
