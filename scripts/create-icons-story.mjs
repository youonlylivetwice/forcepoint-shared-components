// create-icons-story.mjs

import { camelCase } from 'camel-case';
import { promises as fs } from 'fs';
import path from 'path';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function createIconsStoryFile(directory) {
  try {
    const files = await fs.readdir(directory);
    const tsFiles = files.filter(
      (file) => file.endsWith('.tsx') && !file.endsWith('.stories.tsx'),
    );

    let storyImports = '';
    let iconComponents = '';

    for (let i = 0; i < tsFiles.length; i++) {
      const file = tsFiles[i];
      const componentImportName = camelCase(path.basename(file, '.tsx'), {
        pascalCase: true,
      });
      const componentName = capitalizeFirstLetter(componentImportName);
      storyImports += `import ${componentName} from './${path.basename(
        file,
        '.ts',
      )}';\n`;

      iconComponents += `        <div className="flex flex-col items-center justify-center break-all rounded-s px-md py-md shadow-md hover:shadow-lg">\n          <${componentName} className="h-auto mb-sm aspect-[1/1] w-xl" />\n          ${componentName}\n        </div>`;

      if (i < tsFiles.length - 1) {
        iconComponents += '\n';
      }
    }

    const storyFileContent = `${storyImports}
const meta = {
  title: 'Tokens/Icons',
};

export default meta;

export const Default = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-md md:grid-cols-3 lg:grid-cols-6">
${iconComponents}
      </div>
    </>
  );
};
`;

    await fs.writeFile(
      path.join(directory, 'icons.stories.tsx'),
      storyFileContent,
      'utf8',
    );
    console.log('icons.stories.tsx has been created successfully.');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const iconsComponentsDirectory = './src/lib/components/00-tokens/icons';

createIconsStoryFile(iconsComponentsDirectory);
