const hb = require('handlebars')
const pfs = require('promise-fs')

const createTemplate = (template, data) => template(data)

const main = async () => {
  const templateFile = await pfs.readFile('./src/templates/example.hbs')
  const templateString = await templateFile.toString()
  const template = await hb.compile(templateString)

  const data = {
    name: 'chrstnfrrs'
  }

  const filledTemplate = createTemplate(template, data)
  
  await pfs.writeFile('./src/generated/example.html', filledTemplate)
}

main()
