const qrText = document.getElementById('qrText');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qrBody');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('click', (e) => {
    // size = e.target.value;
    if(qrText.value.length > 0) {
        size = e.target.value;
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
});

sizes.addEventListener('change', (e) => {
     size = e.target.value;
     isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qrBody img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        alert("Enter the text or URL to avoid default download");
        //  downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput() {
    if(qrText.value.length > 0) {
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
}
function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    });
}