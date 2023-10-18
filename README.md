# Bypass Youtube's new ad blocker popup

![Exmaple img](/example.png)

### With chrome extension (best way tbh):

Install chrome extension ["Enhancer for YouTube"](https://chrome.google.com/webstore/detail/enhancer-for-youtube/ponfpcnoihfmfllpaingbgckeeldkhle) (its awesome).

Open extension **settings** and Paste following. Press save:

- **Theme tab** (hide all popups):

```css
/* hides popovers, to be sure */
ytd-popup-container,
tp-yt-iron-overlay-backdrop {
  display: none !important;
}
```

- Go down to **Custom script**, paste [following](./content.js). Press save:

```js
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
```

### note:

Could be improved on. Please send comment. It's also a v2 manifest. If you have the time, feel free to make a PR.
# youtube-bypass-adblocker-popup
# youtube-bypass-adblocker-popup
