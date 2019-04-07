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
	var key = 'AIzaSyCQ83WyhlzEf0O1bziqzRV61fn2DKozbVY'
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

	var api_url = 'https://translation.googleapis.com/language/translate/v2?key='
	var key = 'AIzaSyB7kj2whOaO6ykBKEZBLV_IlHOGOsEsbns'
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

//the logic below is to send pill numbers to the API and receibe the info
function sendRequestToRxInfo(){
	var pillNumber = document.getElementById("pill-num").value;
	// var showTranslatedText = document.getElementById("translated-text");

	var api_url = 'https://rximage.nlm.nih.gov/api/rximage/1/rxnav?imprint='
	$.ajax({
		type: "GET",
		url: `${api_url}${pillNumber}`,
		contentType: 'text/plain',
		// data: JSON.stringify(request),
		success: function (response) {
      console.log(response);
    },
    error: function (data, textStatus, errorThrown) {
    	console.log('error: ' + errorThrown);
    }
  });  
}
