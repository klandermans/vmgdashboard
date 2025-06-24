const assert = require('assert');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(__dirname + '/../data.json', 'utf8'));
assert(Array.isArray(data), 'data should be an array');
assert(data.length >= 2, 'expected at least two campaigns');
console.log('test_data passed');
