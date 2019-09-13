from flask import Flask
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
api = Api(app)

class CreateVideoInfo (Resource):
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

      return {
        'Subject': _subject, 
        'Description': _description,
        'Source': _source,
        'Image': _image,
        'Link': _link
      }
    except Exception as e:
      return {
        'error': str(e)
      }

api.add_resource(CreateVideoInfo, '/video')

if __name__ == '__main__':
  app.run (debug=True)