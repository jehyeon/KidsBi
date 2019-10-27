import requests, json

url = 'https://kidsbii.herokuapp.com/api/v1/videos/'
headers = {'content-type': 'application/json'}
param = {
  "title": "hello",
  "source": "for test",
  "categories": "Car, Princess",
  "videoId": "313DASD",
  "videoThumbnail": "Testurl",
  "videoFile": "Testurl",
  "likeRatio": 80,
  "viewCount": 15125,
  "callCount": 0,
  "funSticker": 0,
  "notFunSticker": 0,
  "updateDate": "2019-10-29T09:43:00Z"
}

res = requests.post(url=url, data=json.dumps(param), headers=headers)
print(res)
print(res.json())

