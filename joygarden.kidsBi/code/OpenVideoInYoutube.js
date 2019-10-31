var fail = require('fail');

module.exports.function = function openVideoInYoutube (videoInfo) {
  if (!videoInfo) {
    throw fail.checkedError('No video info', 'NoVideoInfo');
  }
  return "https://www.youtube.com/watch?v=" + videoInfo.videoId;
}
