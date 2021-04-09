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
            "value1": "car expense",
            "value2": "house expense",
            "value3": "invoice",
            "value4": 10,
            "value5": 30,
            "value6": 20
        }
        result_str = json.dumps(result_dic)
        return Response(result_str,headers={"content-type": "application/json"})
    if request.method == "POST":
        request_body = request.get_json(force=True)
        response={

        }
        for key in request_body.keys():
            id=key
            name=request_body[id]['name']
            value=request_body[id]['value']
            value_2=float(value)/100
            response[id]={
                "name": name,
                "value": value_2
            }
        


        response_body = json.dumps(response)
        return Response(request_body, status=200, headers={"content-type": "application/json"})
    return Response("{'mens':'metodo no disponible'}", status=400, headers={"content-type": "application/json"})


if __name__ == '__main__':
    app.run()



{"id1":{"name":"asdsa","value":"4"}}