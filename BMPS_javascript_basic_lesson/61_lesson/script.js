const measureKelvin = function() {
	const measrement = {
		type: "temp",
		unit: "celsius",
		value: prompt(),
	};
	const Kelvin = measurement.value + 273;
	return Kelvin;
};
console.log(measureKelvin());