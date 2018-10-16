
let target = null;
browser.runtime.onMessage.addListener(request => {
  console.log("Message from the background script:");
  console.log(request);
  console.log(target);
});

document.addEventListener("mousedown", function(event){
  if(event.button == 2) {
    target = event.target;
  }
});
