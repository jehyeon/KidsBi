from bs4 import BeautifulSoup
import json
import urllib.request

LOADFILE = '../ignore/before/raw.json'
SAVEFILE = '../ignore/before/raw2.json'

def main():
  
  datas = {}
  with open(LOADFILE, 'r', encoding='utf8') as f:
    contents = json.loads(f.read())['contents']

    for content in contents:
      videoId = content['videoId']
    
      with urllib.request.urlopen('https://www.youtube.com/watch?v={}'.format(videoId)) as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')

        try:
          viewCount = ''.join(soup.select('.watch-view-count')[0].text.split('조회수 ')[1][:-1].split(','))
          sparkBar = soup.select('.video-extras-sparkbars div')
          like = sparkBar[0]['style'].split('width: ')[1]
          dislike = sparkBar[1]['style'].split('width: ')[1]

          datas[videoId] = {
            'like': like,
            'dislike': dislike
          }

        except:
          print(videoId)
          print(soup.select('.watch-view-count'))

    with open(SAVEFILE, 'w', encoding='utf8') as f:
      f.write(json.dumps(datas, indent=2))

if __name__ == '__main__':
  main()