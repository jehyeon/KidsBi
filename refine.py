import youtube_dl
import json
from subprocess import call, check_output

def main():
  # print('start')
  modified = {}
  with open('data.json', 'r', encoding='utf8') as datas:
    jsonDatas = json.load(datas)
    modified = jsonDatas
    for videoId in jsonDatas:
      # get url using youtube-dl
      command = 'sudo youtube-dl -f best -g --no-check-certificate http://www.youtube.com/watch?v={0}'.format(videoId)
      url = check_output(command.split()).decode('utf-8').replace('\n', '')
      modified[videoId]['url'] = url
      if (len(url) > 254):
        print('url: ' + str(len(url)))

      # get thumbnail image using youtube-dl
      command = 'sudo youtube-dl --write-thumbnail --no-check-certificate --verbose http://www.youtube.com/watch?v={0} --skip-download --get-thumbnail'.format(videoId)
      # call(command.split(), shell=False)
      thumbnail = check_output(command.split()).decode('utf-8').split('\n')[1].replace('\n', '')
      modified[videoId]['thumbnail'] = thumbnail
      if (len(thumbnail) > 254):
        print('url: ' + str(len(thumbnail)))

      modified[videoId]['like'] = float(modified[videoId]['like'].split('%')[0])
      if modified[videoId]['like'] > 80:
        modified[videoId]['categories'].append('Popular')
      del modified[videoId]['dislike']

  # save
  with open('datas.json', 'w', encoding='utf8') as datas:
    json.dump(modified, datas, ensure_ascii=False, indent=2)

if __name__ == '__main__':
  main()