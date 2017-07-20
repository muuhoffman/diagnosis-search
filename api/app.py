#!venv/bin/python
from flask import Flask, request, make_response, jsonify
import util.file_util as file_util
import services.search_service as search_service

app = Flask(__name__)

diagnoses = search_service.Diagnoses()

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api/v1/diagnosis', methods=['GET'])
def diagnosis_search():
    query = request.args.get('q')
    if query == None:
        return make_response(jsonify({'error': 'Bad Request: no query string provided'}), 400)
    query = query.lower()
    return jsonify({
        'results': [{'name': x[1], 'rank': x[0]} for x in diagnoses.searchDiagnoses(query)]
    })

if __name__ == '__main__':
    diagnoses_list = file_util.read_diagnoses("diagnosis.txt")
    # put diagnosis into data structure 
    diagnoses.addDiagnoses(diagnoses_list)
    # query data structure for results
    app.run(debug=True)