export default {
  name: 'homepage',
  title: 'Homepage Content',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string' },
    { name: 'heroSubtext', title: 'Hero Sub-text', type: 'text', rows: 3 },
    { name: 'statSkus', title: 'Stat: Product SKUs', type: 'string', initialValue: '100+' },
    { name: 'statLabs', title: 'Stat: Partner Labs', type: 'string', initialValue: '50+' },
    { name: 'statStates', title: 'Stat: States Served', type: 'string', initialValue: '10+' },
    { name: 'statAccuracy', title: 'Stat: Order Accuracy', type: 'string', initialValue: '99%' },
    { name: 'ctaHeadline', title: 'CTA Section Headline', type: 'string' },
  ],
};
