export default {
name: 'post',
title: 'Post',
type: 'document',
fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
name: 'tag',
title: 'Tag',
type: 'string'
    },
    {
        
            title: 'Release date',
            name: 'releaseDate',
            type: 'date',
            options: {
              dateFormat: 'YYYY-MM-DD',
              calendarTodayLabel: 'Today'
            }
          
    },
    {
      name:'imgUrl',
      title:'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
    },
    {
        name: 'details',
        title: 'Details',
        type: 'string'
    },

]

}