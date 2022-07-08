export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug'
    },
    {
      type: 'tags',
      name: 'tags',
      title: 'Tags'
    },
    {
      type: 'richText',
      name: 'body',
      title: 'Body content'
    }
  ]
}
