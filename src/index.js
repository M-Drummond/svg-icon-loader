import * as fs from 'fs';
import * as path from 'path';

const iconNames = []
const Icons = {}

fs.readdirSync('icons').forEach(file => { 
    // Getting the name of the icon
    const fileName = path.parse(`icons/${file}`).name ;    
    
    // Adding the icon name to the iconNames array
    iconNames.push(fileName);

    // Adding the icon content to the Icons object
    fs.readFileSync(`icons/${file}` , 'utf8')  ;
    Icons[fileName] = getIcon(file);
});

// Function to get SVG content
function getIcon(name) {
    const filePath = path.join(`icons/${name}`);
    return fs.readFileSync(filePath, 'utf8');
}
 
export default Icons;   // Exporting the Icons object
