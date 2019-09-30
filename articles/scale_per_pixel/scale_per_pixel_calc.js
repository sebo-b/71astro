
	function calculate() {
		var f = document.getElementById("focal").value;
		var px = document.getElementById("pixsize").value;

		var scale = Math.atan2(px,f*500)*180*3600/(2*Math.PI)
		scale = Math.round(scale*100)/100;
		if (scale == 0 || isNaN(scale))
			scale = "";
		document.getElementById("scale").value = scale;
	}
	document.getElementById("focal").addEventListener('input',calculate);
	document.getElementById("pixsize").addEventListener('input',calculate);
