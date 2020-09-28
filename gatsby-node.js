const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query ReposQuery {
      github {
        user(login: "lu4ezar") {
          pinnedItems(first: 4) {
            nodes {
              ... on GitHub_Repository {
                name
              }
            }
          }
        }
      }
    }
  `)
  result.data.github.user.pinnedItems.nodes.forEach(({ id, name }) => {
    createPage({
      path: `/projects/${name}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        projectName: name,
      },
    })
  })
}
