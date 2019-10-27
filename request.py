import requests
import json

def main():
  url = 'http://127.0.0.1:5000/api/videos/'
  headers = {
    'Content-Type': 'application/json'
  }

  with open('data.json', 'r', encoding='utf8') as f:
    datas = json.load(f)

    for videoId in datas.keys():
      
      data = {
        'title': datas[videoId]['title'],
        'videoId': videoId,
        'source': datas[videoId]['source'],
        'videoThumbnail': datas[videoId]['thumbnail'],
        'callCount': 0,
        'likeRatio': int(datas[videoId]['like']),
        'viewCount': datas[videoId]['viewCount'],
        'categories': ','.join(datas[videoId]['categories']), # temp
        'videoFile': datas[videoId]['url'],
        'funSticker': 0,
        'notFunSticker': 0,
        'updateDate': '2019-10-28T00:50'
      }

      # print()
      # print(json.dumps(data))
      res = requests.post(url=url, headers=headers, data=json.dumps(data))
      print(videoId, end=': ')
      print(res)
      # requests.post(url=url, headers=headers, data=data)

if __name__ == '__main__':
  main()

