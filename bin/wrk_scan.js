#!/usr/bin/env node

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

require('..')(current_path, 'wrk_result.json')