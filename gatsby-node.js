const fs = require('fs');

exports.createPages = async ({ actions: { createPage } }) => {
    const projects = JSON.parse(fs.readFileSync('./src/data/projects.json', { encoding: 'utf-8' }));

    projects.forEach((project) => {
        createPage({
            path: `/project/${project.name}/`,
            component: require.resolve("./src/pages/project.js"),
            context: { project },
        })
    })
}

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /bad-module/,
//                         use: loaders.null(),
//                     },
//                 ],
//             },
//         })
//     }
// }
