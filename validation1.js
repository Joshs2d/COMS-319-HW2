function validate1() {
	valCheck = true;
	var resultFirstNameCheck = FirstNameCheck(document.forms["contact information"]["firstName"].value);
	var image1 = getImage(Boolean(resultFirstNameCheck), "firstName");
	var labelFirstName=getNotification(Boolean(resultFirstNameCheck), "firstName") ;
	document.getElementById("FirstName").appendChild(image1);
	document.getElementById("FirstName").appendChild(labelFirstName);
	
	valCheck2 = true;
	var resultLastNameCheck = LastNameCheck(document.forms["contact information"]["lastName"].value);
	var image2 = getImage(Boolean(resultLastNameCheck), "lastName");
	var labelLastName=getNotification2(Boolean(resultLastNameCheck), "lastName") ;
	document.getElementById("LastName").appendChild(image2);
	document.getElementById("LastName").appendChild(labelLastName);
	
	valCheck3 = true;
	var dropD1 = document.getElementById("selectGender");
	var resultSelect = dropDown1(dropD1);
	var image3 = getImage(Boolean(resultSelect), "gender");
	var labelGender = getNotification3(Boolean(resultSelect), "gender");
	document.getElementById("Gender").appendChild(image3);
	document.getElementById("Gender").appendChild(labelGender);
	
	valCheck4 = true;
	var dropD2 = document.getElementById("selectState");
	var resultSelect2 = dropDown2(dropD2);
	var image4 = getImage(Boolean(resultSelect2), "state");
	var labelState = getNotification4(Boolean(resultSelect2), "state") ;
	document.getElementById("State").appendChild(image4);
	document.getElementById("State").appendChild(labelState);

	if(FirstNameCheck(document.forms["contact information"]["firstName"].value) && LastNameCheck(document.forms["contact information"]["lastName"].value) && dropDown1(dropD1) && dropDown2(dropD2)){
		nextPage();
	}
}

function getNotification(bool, ID) {
	var label = document.getElementById("labelNotify" + ID);
	if (label == null) {
		label = document.createElement("LABEL");
		label.id = "labelNotify" + ID;
		// label.className = "errorMessage";
		label.setAttribute( 'class', 'errorMessage' );
	  }
	
	label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters.";
	return label;
}

function getNotification2(bool, ID) {
	var label2 = document.getElementById("labelNotify" + ID);
	if (label2 == null) {
		label2 = document.createElement("LABEL");
		label2.id = "labelNotify" + ID;
		// label2.className = "errorMessage";
		label2.setAttribute( 'class', 'errorMessage' );
	  }
	
	label2.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters. ";
	return label2;
}

function getNotification3(bool, ID) {
	var label3 = document.getElementById("labelNotify" + ID);
	if (label3 == null) {
		label3 = document.createElement("LABEL");
		label3.id = "labelNotify" + ID;
		// label3.className = "errorMessage";
		label3.setAttribute( 'class', 'errorMessage' );
	  }
	
	label3.innerHTML = bool ? "" : "Required";
	return label3;
}

function getNotification4(bool, ID) {
	var label4 = document.getElementById("labelNotify" + ID);
	if (label4 == null) {
		label4 = document.createElement("LABEL");
		label4.id = "labelNotify" + ID;
		// label4.className = "errorMessage";
		label4.setAttribute( 'class', 'errorMessage' );
	  }
	
	label4.innerHTML = bool ? "" : "Select from given list.";
	return label4;
}

function getImage(bool, ID) {
	var image = document.getElementById("image" + ID);
	if (image == null) {
		image = new Image(15, 15);
		image.id = "image" + ID;
	}
	image.src = bool ? './correct.png' : './wrong.png';
	return image;
}

function FirstNameCheck(FirstName) {
	if(alphaNumCheck(FirstName)){
	return true;
	}
	valCheck = false;
	return false;
}

function LastNameCheck(LastName) {
	if(alphaNumCheck(LastName)){
	return true;
	}
	valCheck2 = false;
	return false;
}

function dropDown1(select){
	if(select.value != "Select"){
		return true;
	}
	valCheck3 = false;
	return false;
}

function dropDown2(select){
	if(select.value != "Select"){
		return true;
	}
	valCheck4 = false;
	return false;
}

function alphaNumCheck(entry) {
	let regex = /^[a-zA-Z0-9]+$/i;
	if (entry != null && entry.match(regex)) {
		return true;
	} else {
		return false;
	}
}

function nextPage(){
	window.location.assign("validation2.html")
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
