const db = require('./handler.js')

// pobieranie: 

const array = db.read

// aktualizacja: 
// stary array z db : [cos, xd]
const array = [cos, cos, cos]

db.update(array)

// czytanie po aktualizacji

const array = db.read
// zwroci: [cos, xd, cos, cos, cos]
