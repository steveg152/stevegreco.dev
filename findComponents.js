import fs from 'fs'
import path from 'path'

export const findImportsInDirectory = (directory, component) => {
  const filesWithComponent = []

  // Read all files in the directory
  const files = fs.readdirSync(directory)

  files.forEach((file) => {
    const filePath = path.join(directory, file)
    // console.log(filePath)

    // Check if the file is a directory
    if (fs.statSync(filePath).isDirectory()) {
      filesWithComponent.push(...findImportsInDirectory(filePath, component))
    } else {
      // Read the file content
      const content = fs.readFileSync(filePath, 'utf-8')

      // Check if the file content includes the component
      if (content.includes(`${component}`)) {
        filesWithComponent.push(filePath)
      }
    }
  })
  return filesWithComponent
}

const files = findImportsInDirectory('./src/components/Base', 'Button.astro')

console.log(files)
