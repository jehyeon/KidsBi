module.exports.function = function selectVideoInfo (videoInfos, filterTerm) {
  const selected = videoInfos.map(videoInfo => {
    if (videoInfo.title.replace(/ /gi, '').indexOf(filterTerm.replace(/ /gi, '')) > -1) {
      return videoInfo;
    }
  }).filter(item => item != null)[0];

  // Partial matching 
  if (selected) {
    return selected;
  }
  
  // No matching - re prompt
  return videoInfos
}
