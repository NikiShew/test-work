// let sidebarBtn = (document.querySelector('.sidebar-btn').onclick = () => {
// 	document.querySelector('.sidebar').classList.toggle('active')
// })

let sidebarBtn = document.querySelector('.sidebar-btn')
sidebarBtn.addEventListener('click', () => {
	document.querySelector('.sidebar').classList.toggle('active')
	sidebarBtn.classList.toggle('btn-active')
})
