export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
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
