export default {
  name: 'partner',
  title: 'Partner / Manufacturer',
  type: 'document',
  fields: [
    { name: 'name', title: 'Company Name', type: 'string', validation: (R: any) => R.required() },
    { name: 'logo', title: 'Logo', type: 'image' },
    {
      name: 'tier', title: 'Partnership Tier', type: 'string',
      options: { list: ['Platinum', 'Gold', 'Silver', 'Authorized'] },
    },
    { name: 'website', title: 'Website URL', type: 'url' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
};
