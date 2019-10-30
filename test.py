import json
# import youtube_dl

# ydl_opts = {}
# with youtube_dl.YoutubeDL(ydl_opts) as ydl:
#     ydl.download(['https://www.youtube.com/watch?v=BaW_jenozKc'])

from pytube import YouTube
yt = YouTube('http://youtube.com/watch?v=9bZkp7q19f0')
print(json.load(yt.streams))  # list of all available streams
# yt.streams[0].url  # gives the direct url link of first stream