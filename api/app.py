#!venv/bin/python
from flask import Flask, request, make_response, jsonify

app = Flask(__name__)

diagnoses = [
    "influenza",
    "spanish flu",
    "headache",
    "cluster headache",
    "migraine"
]

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/api/v1/diagnosis', methods=['GET'])
def diagnosis_search():
    query = request.args.get('q')
    if query == None:
        return make_response(jsonify({'error': 'Bad Request: no query string provided'}), 400)
    return jsonify({
        'results': [x for x in diagnoses if query in x]
    })

if __name__ == '__main__':
    app.run(debug=True)