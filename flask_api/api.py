#-*- coding: utf-8 -*-

from flask import Flask
from flask_restful import Resource, Api, reqparse
from flaskext.mysql import MySQL

app = Flask(__name__)
api = Api(app)

# MySQL 연결
mysql = MySQL ()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'KidsBi'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)

class CreateVideoInfo (Resource):
  def get (self):
    conn = mysql.connect()
    cursor = conn.cursor()

    sql = 'select * from video'
    cursor.execute(sql)
    datas = [x for x in cursor.fetchall()]

    result = ''
    for data in datas:
      result = result + ' / '.join(map(str, data)) + '\n'

    return result

  def post (self):
    try: 
      parser = reqparse.RequestParser()
      parser.add_argument('subject', type=str)
      parser.add_argument('description', type=str)
      parser.add_argument('source', type=str)
      parser.add_argument('image', type=str)
      parser.add_argument('link', type=str)
      args = parser.parse_args()

      _subject = args['subject']
      _description = args['description']
      _source = args['source']
      _image = args['image']
      _link = args['link']

      conn = mysql.connect()
      cursor = conn.cursor()

      # 프로시저로 수정 예정      
      sql = '''insert into video (subject, description, source, image, link) values ('{0}', '{1}', '{2}', '{3}', '{4}');'''.format(
          _subject, 
          _description, 
          _source, 
          _image, 
          _link)

      # cursor.callproc('sp_create_video', (
      #   _subject, 
      #   _description, 
      #   _source,
      #   _image,
      #   _link
      # ))
      cursor.execute(sql)
      data = cursor.fetchall()

      # for test
      # return {
      #   'Subject': _subject, 
      #   'Description': _description,
      #   'Source': _source,
      #   'Image': _image,
      #   'Link': _link
      # }

      if len(data) is 0:
        conn.commit()
        return {
          'StatusCode': '200',
          'Message': 'Video creation success'
        }
      else:
        return {
          'StatusCode': '1000',
          'Meesage': str(data[0])
        }
    except Exception as e:
      return {
        'error': str(e)
      }

api.add_resource(CreateVideoInfo, '/video')

if __name__ == '__main__':
  app.run (debug=True)