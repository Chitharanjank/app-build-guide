from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello from Python!\n"


if __name__ == "__main__":
    # 0.0.0.0 makes the app reachable outside the container/host.
    app.run(host="0.0.0.0", port=5000)
