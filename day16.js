const foodBtns = document.querySelectorAll('.food-menu p')
const foodList = document.querySelectorAll('.food-item')


foodBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const type = e.target.getAttribute('type-food')
		const type1 = e.target.getAttribute('type-main')

		// remove and set active fpr button
		// document
		// 	.querySelector('.active')
		// 	.classList.remove('active')
		// e.target.classList.add('active')

		foodList.forEach((item) => {
			if (item.getAttribute('type-food') == type)
				item.classList.remove('hide')
			else item.classList.add('hide')
		})
		// foodList.forEach((item) => {
		// 	if (item.getAttribute('type-main') == type1)
		// 		item.classList.remove('hide')
		// 	// else item.classList.add('hide')
		// })
	})
}) 

