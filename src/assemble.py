# -*- encoding: utf-8 -*-

import json
import copy
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')


def main():
  with open('../ignore/before/raw2.json', 'r') as f:
    videoInfos = json.loads(f.read())
  with open('../ignore/before/raw.json', 'r') as f:
    contents = json.loads(f.read())['contents']

  # with open('../ignore/before/raw2.json', 'r', encoding='utf8') as f:
  #   additionalInfos = json.loads(f.read())

  assembleds = {}

  for content in contents:

    # time
    time = 0

    minute = content['fullText'].split(' ')[-4]
    second = content['fullText'].split(' ')[-3]

    if content['fullText'].split(' ')[-4] == '전':
      try:
        time = int(second[:-1]) if second.find('초') > -1 else int(second[:-1]) * 60
      except:
        time = int(second[:-2]) if second.find('초') > -1 else int(second[:-2]) * 60

    else:
      try:
        time += int(minute[:-1]) * 60 
      except:
        time += int(minute[:-2]) * 60 

      try:
        time += int(second[:-1])
      except:
        time += int(second[:-2])

    
    splitedTitle = content['simpleText'].split(' | ')[:-1]
    
    # category
    raw_title, categories = classifyIntoCategories(splitedTitle)

    # name
    title = ''
    # splited title의 길이가 1인 경우 title 바로 저장
    if len(raw_title) == 1:
      title = ''.join(raw_title)

    else:
      # 수작업
      title = '!!!' + str(raw_title)
    
    videoId = content['videoId']
    assembleds[videoId] = {
      'title': title,
      'source': '핑크퐁 유튜브',
      'thumbnail': '',
      'callCount': 0,
      'like': videoInfos[videoId]['like'],
      'dislike': videoInfos[videoId]['dislike'],
      'viewCount': int(videoInfos[videoId]['viewCount']),
      'categories': categories
    }
  
  with open('../ignore/after/result.json', 'w', encoding='utf8') as f:

    f.write(json.dumps(assembleds, indent=2))

    
def classifyIntoCategories(splitedTitle):
  classified = {
    'before': copy.deepcopy(splitedTitle),
    'after': copy.deepcopy(splitedTitle)
  }

  categories = {
    '핑크퐁 공주 동화': ['공주'],
    '+ 모음집': ['모음집'],
    '뮤지컬동화': ['뮤지컬'],
    '크리스마스동화': ['크리스마스'],
    '핑크퐁과 함께 듣는 신비한 별자리 동화': ['별자리'],
    '과학 동화': ['과학'],
    '인기 이솝이야기': ['이솝'],
    '인기 전래동화': ['전래'],
    '우리 옛 이야기': ['한국 전래'],
    '뮤지컬 명작동화 영어학습': ['뮤지컬', '영어'],
    '공룡 동화': ['공룡'],
    '그림자 놀이': ['그림자'],
    '그림자 극장': ['그림자'],
    '잠자리 동화': ['잠자리'],
    '뮤지컬 공룡동화':	['공룡', '뮤지컬'],
    '이솝이야기':	['이솝'],
    '자동차 동화': ['자동차'],
    '전래동화':	['전래'],
    '전래동화, 이솝이야기, 세계명작동화':	['전래', '이솝'],
    '세계명작동화': [],
    '프린세스 월드': []
  }

  for categoryName in categories.keys():
    if categoryName in splitedTitle:
      classified['after'].remove(categoryName)
      try: classified['categories'].extend(categories[categoryName])
      except: classified['categories'] = categories[categoryName]
  
  # 중복 제거
  classified['categories'] = list(set(classified['categories']))

  return classified['after'], classified['categories']

if __name__ == '__main__':
  main()