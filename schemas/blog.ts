export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'blogTitle',
      type: 'string',
      title: 'Blog Title',
    },
    {
      name: 'blogdescription',
      type: 'array',
      title: 'Blog Description',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
        {
          type: 'code',
        },
      ],
    },
    {
      name: 'blogImage',
      type: 'image',
      title: 'Blog Image',
    },
  ],
}
