function createImg(url) {
  return new Promise((resolve, reject) => {
    if (!url) reject("url is empty");
    const img = new Image();
    img.src = url;
    img.onload = function () {
      resolve(img);
    };
  });
}

const request = (url) => url + ":" + Math.random();
const cacheRequestFn = () => {
  const urls = {};
  return (url, cb) => {
    cb(urls[url] ? urls[url] : (urls[url] = request(url)));
  };
};
