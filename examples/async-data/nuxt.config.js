const routes = [
  {
    route: '/posts/1',
    payload: {
      thing1: 'thing1',
      thing2: 'thing2'
    },
    head: {
      title: 'Post 1',
      meta: [
        {
          hid: 'postPageDescription-post1',
          name: 'description',
          content: 'Description of POST 1'
        },
        {
          hid: 'postPageKeywords-post1',
          name: 'keywords',
          content: 'keyword1'
        }
      ]
    }
  },
  {
    route: '/posts/2',
    payload: {
      thing1: 'thing1',
      thing2: 'thing2'
    },
    head: {
      title: 'Post 2',
      meta: [
        {
          hid: `postPageDescription-post2`,
          name: 'description',
          content: 'Post 2 desciption'
        },
        {
          hid: `postPageKeywords-post2`,
          name: 'keywords',
          content: 'keyword2'
        }
      ]
    }
  }
];

export default {
  head: {
    titleTemplate: '%s - ' + 'TestApp',
    title: 'TestApp' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'TestApp Description' || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  },
  generate: {
    routes () {
      return routes
    }
  }
}
