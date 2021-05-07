// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Help19',
  plugins: [
	{
	    use: '@gridsome/source-filesystem',
	    options: {
	      baseDir: './content/cities',
	      path: '**/*.md',
	      typeName: 'City',
	    }
	}
  ],
  templates: {
    City: '/cities/:name',
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank'
    }
  },
}
