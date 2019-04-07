//the logic below is to send images to google vision

function prepareImg(){

	var filesSelected = document.getElementById("img-file").files;
	if (filesSelected.length > 0){
		var fileToLoad = filesSelected[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      localStorage.setItem("imgData", srcData);
      displayImg();
    }

    fileReader.readAsDataURL(fileToLoad);
  }
}

function displayImg(){
	var dataImage = localStorage.getItem('imgData');
	var showImg = document.getElementById('showImg');
	var missingPic = document.getElementById('missing-picture');
	showImg.src = dataImage;

	if(showImg.style.display == "none"){
		showImg.style.display = "block";
		missingPic.style.display = "none"
	}
	else{
		showImg.style.display = "none"
	}
	// console.log(dataImage.replace(/^data:image\/(png|jpg);base64,/, "").toString());
	sendRequestToVision(dataImage.replace(/^data:image\/(png|jpg);base64,/, "").toString())
}

function sendRequestToVision(img64){
	var inputTextArea = document.getElementById("vision-text")
	var request = {
		"requests": [
		{
			"image":{
				"content": `${img64}`
			},
			"features": [
			{
				"type": "TYPE_UNSPECIFIED",
				"maxResults": 1
			},
			{
				"type": "LABEL_DETECTION",
				"maxResults": 1
			},
			{
				"type": "TEXT_DETECTION",
				"maxResults": 1
			},
			{
				"type": "IMAGE_PROPERTIES",
				"maxResults": 1
			}
			]
		}
		]
	};

	var api_url = 'https://vision.googleapis.com/v1/images:annotate?key='
	var key = 'Ask for key!'
	$.ajax({
		type: "POST",
		url: `${api_url}${key}`,
		contentType: 'text/plain',
		data: JSON.stringify(request),
		success: function (reponse) {
			// console.log(reponse.responses[0].fullTextAnnotation.text);
			textFromVision = reponse.responses[0].fullTextAnnotation.text
			inputTextArea.innerHTML = textFromVision;
		},
		error: function (data, textStatus, errorThrown) {
			console.log('error: ' + errorThrown);
		}
	});  
}

//the logic below is to send text to google translate

function sendRequestToTranslate(){
	var inputText = document.getElementById("vision-text").value;
	var target_language = document.getElementById("language-select").value;
	var showTranslatedText = document.getElementById("translated-text");

	var request = {
		"q": inputText,
		"source": "en",
		"target": target_language,
		"format": "text"
	};

	if(inputText != ""){
		var api_url = 'https://translation.googleapis.com/language/translate/v2?key='
		var key = 'Ask for key!'
		$.ajax({
			type: "POST",
			url: `${api_url}${key}`,
			contentType: 'text/plain',
			data: JSON.stringify(request),
			success: function (response) {
	      // console.log(response.data.translations[0].translatedText);
	      showTranslatedText.innerHTML = response.data.translations[0].translatedText;
	    },
	    error: function (data, textStatus, errorThrown) {
	    	console.log('error: ' + errorThrown);
	    }
	  });  
	}
	else{
		alert("There is nothing to translate")
	}
}

//the logic below is to send pill numbers to the API and receibe the info
function sendRequestToRxInfo(){
	var pillNumber = document.getElementById("pill-num").value;
	var drugName = document.getElementById("drug-name").value;

	$('#info-result').empty();
	
	if(!(pillNumber == "") && !(drugName == "")){
		var api_url = `https://rximage.nlm.nih.gov/api/rximage/1/rxnav?imprint=${pillNumber}&name=${drugName}`
		$.ajax({
			type: "GET",
			url: api_url,
			contentType: 'text/plain',
			// data: JSON.stringify(request),
			success: function (response) {
	      const arr_length = response.nlmRxImages.length

	      if(arr_length == 0){
	      	alert("No results found, please enter a new pill number OR name.")
	      }

	      for(let i = 0; i < arr_length; i++){
	      	$('#info-result').append(
			      		`<div class="row info-box">
			      		<div class="col-md" style="flex-grow: 0;">
			      		<a href="${response.nlmRxImages[i].imageUrl}" target="_blank"><img id="pill-img" src="${response.nlmRxImages[i].imageUrl}"></a>
			      		</div>
			      		<div class="col">
			      		<h3 style="padding-top: 25px;"><b>Name:</b> <span id="tc_name">${response.nlmRxImages[i].name}</span></h3>
			      		<h3><b>Manufacture:</b> <span id="tc_email">${response.nlmRxImages[i].labeler}</span></h3>
			      		
			      		<h3><b>Rxcui #:</b> <span id="tc_phone">${response.nlmRxImages[i].rxcui}</span></h3>
			      		</div>
			      		</div>`)
	      }
	    },
	    error: function (data, textStatus, errorThrown) {
	    	console.log('error: ' + errorThrown);
	    }
	  }); 
	}
	else if(drugName == ""){
		var api_url = 'https://rximage.nlm.nih.gov/api/rximage/1/rxnav?imprint='
		$.ajax({
			type: "GET",
			url: `${api_url}${pillNumber}`,
			contentType: 'text/plain',
			// data: JSON.stringify(request),
			success: function (response) {
	      const arr_length = response.nlmRxImages.length

	      if(arr_length == 0){
	      	alert("No results found, please enter a new pill number OR name.")
	      }

	      for(let i = 0; i < arr_length; i++){
	      	$('#info-result').append(
			      		`<div class="row info-box">
			      		<div class="col-md" style="flex-grow: 0;">
			      		<a href="${response.nlmRxImages[i].imageUrl}" target="_blank"><img id="pill-img" src="${response.nlmRxImages[i].imageUrl}"></a>
			      		</div>
			      		<div class="col">
			      		<h3 style="padding-top: 25px;"><b>Name:</b> <span id="tc_name">${response.nlmRxImages[i].name}</span></h3>
			      		<h3><b>Manufacture:</b> <span id="tc_email">${response.nlmRxImages[i].labeler}</span></h3>
			      		<h3><b>Rxcui #:</b> <span id="tc_phone">${response.nlmRxImages[i].rxcui}</span></h3>
			      		</div>
			      		</div>`)
	      }
	    },
	    error: function (data, textStatus, errorThrown) {
	    	console.log('error: ' + errorThrown);
	    }
	  }); 
	}else{
		var api_url = 'https://rximage.nlm.nih.gov/api/rximage/1/rxnav?name='
		$.ajax({
			type: "GET",
			url: `${api_url}${drugName}`,
			contentType: 'text/plain',
			// data: JSON.stringify(request),
			success: function (response) {
	      // console.log(response.nlmRxImages.length);
	      const arr_length = response.nlmRxImages.length

	      if(arr_length == 0){
	      	alert("No results found, please enter a new pill number OR name.")
	      }

	      for(let i = 0; i < arr_length; i++){
	      	$('#info-result').append(
			      		`<div class="row info-box">
			      		<div class="col-md" style="flex-grow: 0;">
			      		<a href="${response.nlmRxImages[i].imageUrl}" target="_blank"><img id="pill-img" src="${response.nlmRxImages[i].imageUrl}"></a>
			      		</div>
			      		<div class="col">
			      		<h3><b>Name:</b> <span id="tc_name">${response.nlmRxImages[i].name}</span></h3>
			      		<h3><b>Manufacture:</b> <span id="tc_email">${response.nlmRxImages[i].labeler}</span></h3>
			      		<h3><b>Rxcui #:</b> <span id="tc_phone">${response.nlmRxImages[i].rxcui}</span></h3>
			      		</div>
			      		</div>`)
	      }
	    },
	    error: function (data, textStatus, errorThrown) {
	    	console.log('error: ' + errorThrown);
	    }
	  }); 
	}
}
