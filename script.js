document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("downloadButton");
  
    downloadButton.addEventListener("click", function() {
      downloadFile("WindowsBuilds/CookieClimber.zip");
    });
  });
  
  function downloadFile(fileName) {
    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  