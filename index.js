module.exports = function(path ){
  var files = require('fs').readdirSync(path)
  // console.log(files)
  var result = {}
  
  files.forEach(function(file){
    if (/\.log$/.test(file)) {
      console.log(file)
      result[file.replace('.log', '')] = require('wrkparser')(file)
    }
  })
}