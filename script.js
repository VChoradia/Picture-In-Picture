const videoElement  = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt User to select a media stream , pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream  = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(err) {
        //Cacth Errors Here
    }
}

buttonElement.addEventListener('click', async () => {
    //Disable Button
    buttonElement.disable = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    buttonElement.disable = false;
});

selectMediaStream();