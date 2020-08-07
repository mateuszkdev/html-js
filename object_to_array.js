const objectParser = (
	object
) => {
	
	let array = []
		Object.keys(object).forEach(element => {
			
			array.push([element, object[element])
			
		})

	return array
		
}

// usage 

const ob = { 

	jeden: 1,
	dwa: 2,
	trzy: 3

}

const zmienione = objectParser(ob)

zmienione // zwróci [[jeden, 1], [dwa, 2], [trzy, 3]]
