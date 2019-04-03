//the logic below is to send images to google vision

function prepareImg(){

	var filesSelected = document.getElementById("img-file").files;
	if (filesSelected.length > 0){
		var fileToLoad = filesSelected[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      var divTest = document.getElementById("showImg");
      localStorage.setItem("imgData", srcData);
      // divTest.innerHTML = newImage.outerHTML;

      displayImg();
    }

    fileReader.readAsDataURL(fileToLoad);
  }
}

function displayImg(){
	var dataImage = localStorage.getItem('imgData');
	var display = document.getElementById('showImg');
	display.src = dataImage;
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

//the logic below is to send images to google translate

function sendRequestToTranslate(){
		var inputText = document.getElementById("vision-text").value;
		var showTranslatedText = document.getElementById("translated-text");

		var request = {
			"q": inputText,
		  "source": "en",
		  "target": "es",
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
