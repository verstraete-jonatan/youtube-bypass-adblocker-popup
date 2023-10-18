const forcePlay = () => {
  const video = document.querySelector("video");
  const container = document.getElementsByTagName("ytd-popup-container")[0];

  if (video) {
    // force play if element is paused and a popup element is present
    video.addEventListener("pause", () => {
      if (container.children?.length) {
        container.innerHTML = "";
        video.play();
        console.log("FREEEEEDDOOOOOM..");
      }
    });
    // reset when going to another video
    navigation.addEventListener("navigate", () => {
      removeEventListener("pause", video);
      forcePlay();
    });
  } else {
    // retry until we have a video
    setTimeout(() => {
      forcePlay();
    }, 1000);
  }
};

forcePlay();
