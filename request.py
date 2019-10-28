import requests, json

url = 'http://127.0.0.1:5000/api/quizzes/'
# url = 'https://kidsbii.herokuapp.com/api/quizzes/'
headers = {'content-type': 'application/json'}

with open('quizzes.json', 'r', encoding='utf8') as datas:
  datas = json.load(datas)
  for data in datas:
    param = {
      'question': data['question'],
      'url': data['image']['url'],
      'options': data['options'],
      'answer': 0,
      'category': data['category']
    }
    res = requests.post(url=url, data=json.dumps(param), headers=headers)
    print(res)

