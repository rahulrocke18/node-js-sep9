 const fs = require('fs');
 const gators = [{
  type: 'cayman'
}];

fs.writeFileSync('./swamp/cayman.json', JSON.stringify(gators));