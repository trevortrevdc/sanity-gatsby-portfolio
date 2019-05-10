export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd5dad307ee457def569bac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ivi6a1f9',
                  apiId: '9ac87635-91e3-4374-90a3-99963113c084'
                },
                {
                  buildHookId: '5cd5dad3769bff6a374af738',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-q468kpyp',
                  apiId: 'a178b5fd-9e50-4785-9971-0a9588ed813d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/trevortrevdc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-q468kpyp.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
