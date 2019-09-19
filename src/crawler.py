from bs4 import BeautifulSoup
import json
import urllib.request

def main():
  with open('../ignore/before/raw.json', 'r', encoding='utf8') as f:
    contents = json.loads(f.read())['contents']

    for content in contents:
      videoId = content['videoId']
      with urllib.request.urlopen('https://www.youtube.com/watch?v={}'.format(videoId)) as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')

if __name__ == '__main__':
  main()