from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app=app)

@app.route("/holamundo", methods=["POST", "GET", "PUT"])
def holamundo():
    if request.method == "GET":
        resultado = '{\"valor1\": \"soy get\"}'
        resultado_dic = {
            "valor1": "soy get",
            "valor2": "yo tambien soy get",
            "valor3": "yo aun mas get",
            "valor4": 10,
            "valor5": 30,
            "valor6": 20
        }
        resultado_str = json.dumps(resultado_dic)
        return Response(resultado_str,headers={"content-type": "application/json"})
    if request.method == "POST":
        request_body = request.get_json(force=True)
        valor_1 = request_body[""]
        valor_2 = request_body[""]
        resultado = {
            "resultado" : valor_1 + valor_2
        }

        response_body = json.dumps(resultado)
        return Response(valor_1, status=200, headers={"content-type": "application/json"})
    return Response("{'mensaje':'metodo no disponible'}", status=400, headers={"content-type": "application/json"})


if __name__ == '__main__':
    app.run()
