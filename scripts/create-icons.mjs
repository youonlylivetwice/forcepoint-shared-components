import { camelCase } from 'camel-case';
import { promises as fs } from 'fs';
import path from 'path';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

async function getSvgFileNames(directory) {
  try {
    const files = await fs.readdir(directory);
    return files.filter((file) => path.extname(file) === '.svg');
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}

function getIndexData(svgFiles) {
  const indexContent = svgFiles
    .map((file) => {
      const componentExportName = capitalizeFirstLetter(
        camelCase(path.basename(file, '.svg')),
      );
      return `export { default as ${componentExportName}Icon } from '../../../assets/img/icons/${file}?react';`;
    })
    .join('\n');

  return indexContent;
}

// Source and target directories
const iconsDirectory = './src/lib/assets/img/icons';
const componentsDirectory = './src/lib/components/00-tokens/icons';

getSvgFileNames(iconsDirectory).then(async (svgFiles) => {
  try {
    await fs.writeFile(
      path.join(componentsDirectory, 'index.ts'),
      getIndexData(svgFiles),
      'utf8',
    );
    console.log('Created icon icons.ts');
  } catch (error) {
    console.error('Error creating Icon index file:', error);
  }
});
