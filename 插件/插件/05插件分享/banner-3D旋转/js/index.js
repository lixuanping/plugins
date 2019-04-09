function start(bigID,smallID){
	
	
	//DOM load event
window.addEventListener("DOMContentLoaded", function() {

	var cube = document.querySelector("."+bigID+""),
		imageButtons = document.querySelector("."+smallID+"");
	var cubeImageClass = cube.classList[1];
	
	
	//Add click event listener to image buttons container
	imageButtons.addEventListener("click", function(e) {

		//Get node type and class value of clicked element
		var targetNode = e.target.nodeName,
			targetClass = e.target.className;
		
		
		//Check if image input has been clicked and isn't the currently shown image
		if(targetNode === "INPUT" && targetClass !== cubeImageClass) {

			//Replace previous cube image class with new class
			//cube.classList.replace(cubeImageClass, targetClass);
			cube.classList.remove(cubeImageClass);
			cube.classList.add(targetClass);

			//Update cube image class variable with new class
			cubeImageClass = targetClass;
		}
	});
});

}
