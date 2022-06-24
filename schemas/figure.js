export default {
  name: 'figure',
  type: 'object',
  title: 'Figure',
  fields: [
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text'
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption'
    }
  ]
}
