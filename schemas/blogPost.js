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
      type: 'string',
      title: 'Slug'
    },
    {
      type: 'richText',
      name: 'body',
      title: 'Body content'
    }
  ]
}
