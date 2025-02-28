const fs = require('fs');
const path = require('path');
const {v4} = require('uuid');

const rootPath = process.cwd();
const jsonPath = path.join(rootPath, '.well-known', 'appspecific', 'com.chrome.devtools.json');
if (!fs.existsSync(jsonPath)) {
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify({
    "workspace": {
      "root": rootPath,
      "uuid": v4()
    }
  }, null, 2));
}
