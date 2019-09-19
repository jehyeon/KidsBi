from bs4 import BeautifulSoup
import json

LOADFILE = '../ignore/before/data.html'
SAVEFILE = '../ignore/before/first.json'

def main():
  with open(LOADFILE, 'r', encoding='utf8') as f:
    datas = f.read()

    soup = BeautifulSoup (datas, 'html.parser')
    
    # ytd-playlist-video-renderer
    # a#thumbnail
    # href	-> split	-> videoId		(link)

    # span#video-title
    # title 				-> simpleText	(category, title, source)
    # aria-label			-> fullText		(reviews)

    contents = []

    for video in soup.select('ytd-playlist-video-renderer'):
      link = video.select('a#thumbnail')[0].get('href')
      start = '/wawtch?v='
      end = '&list='

      videoId = link[link.find(start) + len(start): link.rfind(end)]
      simpleText = video.select('span#video-title')[0].get('title')
      fullText = video.select('span#video-title')[0].get('aria-label')

      contents.append({
        'videoId': videoId,
        'simpleText': simpleText,
        'fullText': fullText
      })
    
    with open(SAVEFILE, 'w', encoding='utf8') as f:
      f.write(json.dumps({
        'contents': contents
      }, indent=2))
      
if __name__ == '__main__':
  main()