export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string', validation: (R: any) => R.required() },
    {
      name: 'category', title: 'Category', type: 'string',
      options: { list: [
        { title: 'Reagents & Kits', value: 'reagents' },
        { title: 'Rapid Test Kits', value: 'rapid' },
        { title: 'Molecular Diagnostics', value: 'molecular' },
        { title: 'Hematology', value: 'hematology' },
        { title: 'Lab Instruments', value: 'instruments' },
        { title: 'Consumables', value: 'consumables' },
      ]},
      validation: (R: any) => R.required(),
    },
    { name: 'description', title: 'Short Description', type: 'text', rows: 3 },
    { name: 'image', title: 'Product Image', type: 'image', options: { hotspot: true } },
    {
      name: 'certifications', title: 'Certifications / Tags', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    { name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'image' } },
};
