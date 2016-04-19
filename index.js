var fs = require('fs')
module.exports = function(path, out_file) {
  var files = require('fs').readdirSync(path)
  // console.log(files)
  var result = {}
  
  files.forEach(function(file){
    if (/\.log$/.test(file)) {
      console.log(file)
      result[file.replace('.log', '')] = require('wrkparser')(file)
    }
  })
  
  console.log(result)
  
  if (!out_file){
    out_file = _get_out_file_name();
  }
  _write(out_file, result)
}

function _write(out_file, obj) {
  var jsonString = JSON.stringify(obj, null, 4);
  // console.log(jsonString)
  fs.writeFileSync(out_file, jsonString)
}


function _get_date_string () {
  var date = require('moment')().format('YYYY MM DD HH mm ss');

  return date.split(' ').join('_');
}

function _get_out_file_name() {
  return 'wrk_result_'+_get_date_string ()  + "" + ".json";
}