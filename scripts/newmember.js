window.addEventListener("load",function() {
	document.getElementById('new-member-form').addEventListener("submit",
			function(e) {
				e.preventDefault();
				alert('submitted');
			})
});
