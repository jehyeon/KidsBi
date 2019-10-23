import json

def main():
  categories = {
    '이솝': 'Aesop',
    '잠자리': 'Bed', 
    '자동차': 'Car', 
    '크리스마스': 'Christmas', 
    '모음집': 'Collection', 
    '별자리': 'Constellation', 
    '공룡': 'Dinosaur', 
    '영어': 'English', 
    '한국 전래': 'Korean tradition', 
    '뮤지컬': 'Musical', 
    '공주': 'Princess', 
    '과학': 'Science', 
    '그림자': 'Shadow', 
    '전래': 'Traditional'
  }

  with open('../ignore/after/result.json', 'r', encoding='utf8') as f:
    datas = json.loads(f.read())

    # print(datas)
    for key in datas.keys():
      print(list(map(lambda category: categories[category], datas[key]['categories'])))
      datas[key]['categories'] = list(map(lambda category: categories[category], datas[key]['categories']))
    
    print(datas)

    with open('../ignore/after/result2.json', 'w', encoding='utf8') as f:
      f.write(json.dumps({
        'contents': datas
      }, indent=2))
if __name__ == '__main__':
  main()