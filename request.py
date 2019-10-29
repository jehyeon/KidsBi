import requests
import json

def main():
  url = 'http://127.0.0.1:5000/api/videos/'
  headers = {
    'Content-Type': 'application/json'
  }
  # reset
  # cnt = 0
  # while (True):
  #   requests.delete(url + str(cnt))
  #   cnt += 1
  
  with open('data.json', 'r', encoding='utf8') as f:
    datas = json.load(f)

    for videoId in datas.keys():
      
      data = {
        'title': datas[videoId]['title'],
        'videoId': videoId,
        'source': 'pinkpong',
        'videoThumbnail': datas[videoId]['thumbnail'],
        'callCount': 0,
        'likeRatio': int(datas[videoId]['like']),
        'viewCount': datas[videoId]['viewCount'],
        'categories': ','.join(datas[videoId]['categories']),
        'videoFile': datas[videoId]['url'],
        'funSticker': 0,
        'notFunSticker': 0,
        'updateDate': '2019-10-30T00:59'
      }

      # print()
      # print(json.dumps(data))
      res = requests.post(url=url, headers=headers, data=json.dumps(data))
      print(videoId, end=': ')
      print(res)
      # requests.post(url=url, headers=headers, data=data)
    
if __name__ == '__main__':
  main()

