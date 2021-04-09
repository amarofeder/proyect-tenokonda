from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app=app)

@app.route("/myflask", methods=["POST", "GET", "PUT"])
def myFlask():
    if request.method == "GET":
        result = '{\"value1\": \"soy get\"}'
        result_dic = {
            "value1": "soy get",
            "value2": "yo tambien soy get",
            "value3": "yo aun mas get",
            "value4": 10,
            "value5": 30,
            "value6": 20
        }
        result_str = json.dumps(result_dic)
        return Response(result_str,headers={"content-type": "application/json"})
    if request.method == "POST":
        request_body = request.get_json(force=True)
        value_1 = request_body[""]
        value_2 = request_body[""]
        result = {
            "result" : value_1 + value_2
        }

        response_body = json.dumps(result)
        return Response(value_1, status=200, headers={"content-type": "application/json"})
    return Response("{'mens':'metodo no disponible'}", status=400, headers={"content-type": "application/json"})


if __name__ == '__main__':
    app.run()
