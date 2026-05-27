import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'medilyon',
  title: 'Medilyon Healthcare CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title('Content').items([
          S.listItem().title('Products').schemaType('product').child(S.documentTypeList('product')),
          S.listItem().title('Partners').schemaType('partner').child(S.documentTypeList('partner')),
          S.listItem().title('Homepage').schemaType('homepage').child(
            S.document().schemaType('homepage').documentId('homepage')
          ),
        ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
