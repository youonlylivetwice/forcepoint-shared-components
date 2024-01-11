import { camelCase } from 'camel-case';
import { promises as fs } from 'fs';
import path from 'path';

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
      const componentName = camelCase(path.basename(file, '.svg'));
      const componentContent = `import ${componentName} from '../../../assets/img/icons/${file}?react';\n\nexport default ${componentName};\n`;
      const tsxFileName = path.join(targetDir, `${componentName}.ts`);
      await fs.writeFile(tsxFileName, componentContent, 'utf8');
      console.log(`Created ${tsxFileName}`);
    }
  } catch (error) {
    console.error('Error creating Icon files:', error);
  }
}

// Source and target directories
const iconsDirectory = './src/lib/assets/img/icons';
const componentsDirectory = './src/lib/components/02-components/icons';

getSvgFileNames(iconsDirectory).then((svgFiles) => {
  createTsxFiles(svgFiles, componentsDirectory);
});
