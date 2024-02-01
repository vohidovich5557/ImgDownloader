const fileInput = document.querySelector(".input");
const downloader = document.querySelector(".btn");

downloader.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(fileInput.value);
    fetchFile(fileInput.value);
    downloader.innerText = "Downloading File....";
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        setTimeout(() => {
            let tempUrl = URL.createObjectURL(file);
            let aTag = document.createElement("a");
            aTag.href = tempUrl;
            aTag.download = url.replace(/^.*[\\\/]/, " ");
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            URL.revokeObjectURL(tempUrl);
        }, 1000);
        downloader.innerText = "Download File";
    });
};

InputDeviceInfo.value = " ";
