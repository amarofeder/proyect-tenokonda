from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app=app)

@app.route("/holamundo", methods=["POST", "GET", "PUT"])
def holamundo():
    if request.method == "GET":
        return "soy get"
    if request.method == "POST":
        request_body = request.get_json(force=True)
        valor_1 = request_body["valor1"]
        valor_2 = request_body["valor2"]
        resultado = {
            "resultado" : valor_1 + valor_2
        }
        response_body = json.dumps(resultado)
        return Response(response_body, status=200, headers={"content-type": "application/json"})
    return Response("{'mensaje':'metodo no disponible'}", status=400, headers={"content-type": "application/json"})


if __name__ == '__main__':
    app.run()
