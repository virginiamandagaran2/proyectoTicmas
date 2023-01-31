


const navli = document.querySelectorAll ('.navli')
const bloque = document.querySelectorAll ('.bloque')


navli.forEach( ( cadaNavli , i) =>{

	navli[i].addEventListener('click' , () =>{
		
		 navli.forEach( ( cadaNavli , i )=>{
		 	navli[i].classList.remove('activo')
		 	bloque[i].classList.remove('activo')

		 })

		 navli[i].classList.add('activo')
		 bloque[i].classList.add('activo')
	})
})	





 