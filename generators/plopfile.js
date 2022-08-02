/* eslint-disable no-undef */
module.exports = plop => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/stories.tsx',
                templateFile: 'templates/stories.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/test.test.tsx',
                templateFile: 'templates/test.tsx.hbs',
            },
            {
                path: '../src/components/index.ts',
                pattern: /(\/\/ new components by plop -> don't edit this)/g,
                template: "export * from './{{pascalCase name}}'\n$1",
                type: 'modify',
            },
        ],
    })
}
