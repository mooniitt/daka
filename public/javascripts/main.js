var time = document.querySelector(".time p")
time.innerHTML = new Date().toLocaleString()
setInterval(() => {
	time.innerHTML = new Date().toLocaleString()
}, 1000)