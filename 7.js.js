const fs = require('node:fs')

const folder = process.argv[2] ?? '.' // Nullish coalescing operator

fs.readdir(folder, (error, files) => {
  if (error){
    console.error('Hay un error')
    return
  }

  files.forEach((file)=>{
    console.log(file)
  })
})