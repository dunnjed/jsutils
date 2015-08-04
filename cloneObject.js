Object.prototype.clone = function (childObject) {
	var clonedObject = {},
		originalObject = childObject || this;
		
		for (var key in originalObject) {
			if (originalObject.hasOwnProperty(key)) {
				if (typeof originalObject[key] === "object") {
					clonedObject[key] = Object.prototype.clone(originalObject[key]);
				} else {
					clonedObject[key] = originalObject[key];
				}
			}
		}	
	return clonedObject;
};
