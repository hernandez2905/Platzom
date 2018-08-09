/* str significa string
 export default significa que esa función se va
a exportar por default */
export default function platzom(str)
{
	let translation = str

	/* Si la palabra termina en "ar", se le quitan esos dos caracteres
	   if(str.endWith(`ar`))
	   if(str.endWith("ar"))
	   convertimos a minúscula y luego preguntamos si termina con "ar"
	   if(str.toUpperCase().endsWith('AR')) de manera viceversa */
	   	
	if (str.toLowerCase().endsWith('ar'))
	{
		//slice permite cortar caracteres desde el inicio hasta -2 caracter
		translation = str.slice(0, -2) 
	}

	// Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z'))
	{
		translation += 'pe'
	}

	/* Si la palabra traducida tiene 10 o más letras, se debe partir
	a la mitad y unir con un guión del medio */
	const length = translation.length
	if (length >= 10)
	{
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))

		translation = `${firstHalf}-${secondHalf}`
	}

	/* Si la palabra original es un palíndromo (que se lee igual de adelante
	que para atrás), ninguna regla anterior cuenta y se devuelve la misma
	palabra intercalando mayúsculas y minúsculas*/
	// ejemplo en el navegador
	// "sacha".split('').reverse().join('')
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str)
	{
		const length = str.length
		let translation = ''
		let capitalize = true

		for (let i = 0; i < length; i++) 
		{
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if (str == reverse(str))
	{
		return minMay(str)
	}

	return translation
}