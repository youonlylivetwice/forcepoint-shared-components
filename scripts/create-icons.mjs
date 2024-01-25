import { camelCase } from 'camel-case';
import { promises as fs } from 'fs';
import path from 'path';

function toKebabCase(str) {
  return (
    str
      .replace(/\.svg$/, '')
      .split(/[-_ ]|(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join('-')
  );
}

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

async function createTsxFiles(svgFiles, targetDir) {
  try {
    for (const file of svgFiles) {
      const componentExportName = capitalizeFirstLetter(camelCase(path.basename(file, '.svg')));
      // const componentExportName =  ;
      const componentName = toKebabCase(path.basename(file, '.svg'));
      const componentContent = `import ${componentExportName}Icon from '../../../assets/img/icons/${file}?react';\n\nexport default ${componentExportName}Icon;\n`;
      const tsxFileName = path.join(targetDir, `${componentName}-icon.tsx`);
      await fs.writeFile(tsxFileName, componentContent, 'utf8');
      console.log(`Created ${tsxFileName}`);
    }
  } catch (error) {
    console.error('Error creating Icon files:', error);
  }
}

// Source and target directories
const iconsDirectory = './src/lib/assets/img/icons';
const componentsDirectory = './src/lib/components/00-tokens/icons';

getSvgFileNames(iconsDirectory).then((svgFiles) => {
  createTsxFiles(svgFiles, componentsDirectory);
});
