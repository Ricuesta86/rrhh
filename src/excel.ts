// const XLSX = require('xlsx')
import * as XLSX from 'xlsx'
import * as fs from 'fs'

const ExcelAJSON = (): any => {
  const excel = XLSX.readFile('./src/datos.xlsx')
  //   console.log(excel)
  const nombreHoja = excel.SheetNames // regresa un array
  const datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])

  const jDatos = []
  for (let i = 0; i < datos.length; i++) {
    const dato: any = datos[i]
    jDatos.push({
      ...dato
    })
  }
  const jsonDataString = JSON.stringify(jDatos)
  fs.writeFileSync('./src/datos.json', jsonDataString)
}
ExcelAJSON()
