import { PlopTypes } from '@turbo/gen';

// More about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('chakra-component', {
        description: 'Adds a new Chakra component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
            },
            {
                type: 'input',
                name: 'category',
                message: 'What is the category of the component?',
            },
        ],
        actions: [
            {
                type: 'modify',
                path: 'src/components/{{lowerCase category}}.tsx',
                transform: (fileContents, answers) => modifyImport(fileContents, answers.name),
            },
            {
                type: 'append',
                path: 'src/components/{{lowerCase category}}.tsx',
                templateFile: 'templates/chakra-component.hbs',
            },
        ],
    });
}

function modifyImport(fileContents: string, componentName: string) {
    const importLineRegex = /^import\s+{\s*([^}]+)\s*}\s*from\s+['"]@chakra-ui\/react['"];/;
    const aliasComponentName = `Chakra${componentName}`;

    const lines = fileContents.split('\n');
    let foundImportLine = false;

    for (let i = 0; i < lines.length; i++) {
        const match = lines[i].match(importLineRegex);
        if (match) {
            foundImportLine = true;
            if (!match[1].includes(aliasComponentName)) {
                lines[i] = lines[i].replace(match[1], `${match[1]}, ${componentName} as ${aliasComponentName}, ${componentName}Props`);
            }
            break;
        }
    }

    if (!foundImportLine) {
        lines.unshift(`import { ${componentName} as ${aliasComponentName}, ${componentName}Props } from '@chakra-ui/react';`);
    }

    return lines.join('\n');
}
