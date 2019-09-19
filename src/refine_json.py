import json

LOADFILD = '../ignore/before/data.json'
SAVEFILE = '../ignore/before/second.json'

def main():

  contents = []
  with open(LOADFILD, 'r', encoding='utf8') as f:
    datas = json.loads(f.read())['datas']

    for data in datas:
      tab = data['contents']['twoColumnBrowseResultsRenderer']['tabs'][0]
      sectionListRenderer = tab['tabRenderer']['content']['sectionListRenderer']['contents'][0]
      renderers = sectionListRenderer['itemSectionRenderer']['contents'][0]['playlistVideoListRenderer']['contents']
      
      for renderer in renderers:
        video = renderer['playlistVideoRenderer']
        videoId = video['videoId']
        fullText = video['title']['accessibility']['accessibilityData']['label']
        simpleText = video['title']['simpleText']

        contents.append({
          'videoId': videoId,
          'fullText': fullText,
          'simpleText': simpleText
        })
    
    with open(SAVEFILE, 'w', encoding='utf8') as f:
      f.write(json.dumps({
        'contents': contents
      }, indent=2))

if __name__ == '__main__':
  main()