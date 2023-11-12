from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

output = "8"
counter = 0

@app.route('/')
@cross_origin()
def index():
    global counter
    counter += 1
    return str(counter)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)