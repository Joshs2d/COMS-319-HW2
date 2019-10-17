// JavaScript source code
function validate2() {
	valCheck = true;
	var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
	var image1 = getImage(Boolean(resultEmailCheck), "email");
	var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "email") ;
	document.getElementById("Email").appendChild(image1);
	document.getElementById("Email").appendChild(labelNotifyEmail1);
	
	valCheck2 = true;
	var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
	var image1 = getImage(Boolean(resultPhoneCheck), "phone");
	var labelNotifyPhone1=getNotification2(Boolean(resultPhoneCheck), "phone") ;
	document.getElementById("Phone").appendChild(image1);
	document.getElementById("Phone").appendChild(labelNotifyPhone1);
	
	valCheck3 = true;
	var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
	var image1 = getImage(Boolean(resultAddressCheck), "address");
	var labelNotifyAddress1=getNotification3(Boolean(resultAddressCheck), "address");
	document.getElementById("Address").appendChild(image1);
	document.getElementById("Address").appendChild(labelNotifyAddress1);
}

function getNotification(bool, ID) {
	var label = document.getElementById("labelNotify" + ID);
	if (label == null) {
		label = document.createElement("LABEL");
		label.id = "labelNotify" + ID;
		// label.className = "errorMessage";
		label.setAttribute( 'class', 'errorMessage' );
	  }

	label.innerHTML = bool ? "" : "Email: should be in form xxx@xxx.xxx, which x should be alphanumeric!";
	
	return label;
}

function getNotification2(bool, ID) {
	var label = document.getElementById("labelNotify" + ID);
	if (label == null) {
		label = document.createElement("LABEL");
		label.id = "labelNotify" + ID;
		// label.className = "errorMessage";
		label.setAttribute( 'class', 'errorMessage' );
	  }

	label.innerHTML = bool ? "" : "Phone: Must be in the form xxx-xxx-xxxx or xxxxxxxxxx.  x should be numeric.";
	
	return label;
}

function getNotification3(bool, ID) {
	var label = document.getElementById("labelNotify" + ID);
	if (label == null) {
		label = document.createElement("LABEL");
		label.id = "labelNotify" + ID;
		// label.className = "errorMessage";
		label.setAttribute( 'class', 'errorMessage' );
	  }

	label.innerHTML = bool ? "" : "Address: Must be in the form of city & state. example: Ames,IA ";
	
	return label;
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

function emailCheck(email) {
	atSplit = email.split('@');
	if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
		periodSplit = atSplit[1].split('.')
		if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
			return true;
		}
	}
	valCheck = false;
	return false;
}

function phoneCheck(phone) {
	atSplit1 = phone.split('-');
	if(atSplit1.length == 2 && numCheck(atSplit1[0])){
		atSplit2 = atSplit1[1].split('-');
		if(atSplit2.length == 2 && numCheck(atSplit2[0])){
			if(numCheck(atSplit2[1])){
				return true;
			}
		}
	}else if (phone.length ==  10 && numCheck(phone)){
		return true;
	}
	valCheck2 = false;
	return false;
}

function addressCheck(address) {
	atSplit5 = address.split(',');
	if(atSplit5.length == 2 && alphaCheck(atSplit5[0])){
		if(alphaCheck(atSplit5[1]) && atSplit5[1].length === 2){
			return true;
		}
	} 
	valCheck3 = false;
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

function numCheck(entry) {
	let regex = /^[0-9]+$/i;
	if (entry != null && entry.match(regex)) {
		return true;
	} else {
		return false;
	}
}

function alphaCheck(entry) {
	let regex = /^[a-zA-z]+$/i;
	if (entry != null && entry.match(regex)) {
		return true;
	} else {
		return false;
	}
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
