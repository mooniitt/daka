var time = document.querySelector(".time p")
time.innerHTML = new Date().toLocaleString().replace(/\//g, '-')
setInterval(() => {
	time.innerHTML = new Date().toLocaleString().replace(/\//g, '-')
}, 1000)