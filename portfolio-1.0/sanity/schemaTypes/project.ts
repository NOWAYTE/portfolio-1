import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'summary',
        title: 'Summary',
        type: 'text',
    }),
    defineField({
        name: 'technologies',
        title: 'Techonologies',
        type: 'array',
        of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
        name: 'linkToBuild',
        title: 'LinkToBuild',
        type: 'url',
    }),
]})