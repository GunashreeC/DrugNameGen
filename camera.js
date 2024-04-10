let photoDataURL; 

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const video = document.getElementById('cameraVideo');
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) {
        console.error('Error accessing camera:', err);
    });

function captureAndClose() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    photoDataURL = canvas.toDataURL('image/png');

    showCapturedPhoto();

    document.getElementById('captureButton').disabled = true;
}


function showCapturedPhoto() {
    const photoDisplay = document.getElementById('photoDisplay');
    const img = document.createElement('img');
    img.src = photoDataURL;

    photoDisplay.innerHTML = '';
    photoDisplay.appendChild(img);

    document.getElementById('retakeButton').style.display = 'inline-block';
    document.getElementById('saveButton').style.display = 'inline-block';
}

function retakePhoto() {

    document.getElementById('captureButton').disabled = false;

    document.getElementById('retakeButton').style.display = 'none';
    document.getElementById('saveButton').style.display = 'none';

    document.getElementById('photoDisplay').innerHTML = '';
}

function savePhoto() {
    window.opener.postMessage(photoDataURL, window.location.origin);
    window.close();
}
