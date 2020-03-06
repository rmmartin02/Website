from flask import Flask, jsonify, request
import pymongo
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["mydatabase"]
imagesCol = mydb["images"]
ibtracsCol = mydb["ibtracs"]

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/images/imageCount', methods=['POST'])
def imageCount():
    query = request.get_json()
    print(query)
    return jsonify({'count': imagesCol.find(query).count()})

@app.route('/images/allOptions', methods=['GET'])
def imageAllOptions():
    keys = ['season', 'basin', 'storm_number', 'storm_agency', 'storm_name', 'type', 'sensor', 'resolution', 'satellite', 'satellite']
    options = {}
    for key in keys:
        options[key] = imagesCol.distinct(key)
    return jsonify({'options': options})

@app.route('/images/options', methods=['POST'])
def imageOptions():
    keys = ['season', 'basin', 'storm_number', 'storm_agency', 'storm_name', 'type', 'sensor', 'resolution', 'satellite', 'extension']
    requestJson = request.get_json()
    print(requestJson)
    queryResult = imagesCol.find(requestJson["query"])
    options = {}
    for key in keys:
        if key not in requestJson["keys"]:
            options[key] = queryResult.distinct(key)
    return jsonify({'options': options})

@app.route('/images/query', methods=['POST'])
def imageQuery():
    requestJson = request.get_json()
    print(requestJson)
    query = requestJson["query"]
    output = []
    count = 0
    for s in imagesCol.find(query):
        del s['_id']
        del s['date']
        output.append(s)
        count += 1
        if count > requestJson["limit"]:
             break
    print(output)
    return jsonify({'imageItems': output})


if __name__ == '__main__':
    app.run()
