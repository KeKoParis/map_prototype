from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)


@app.route('/')
def run_index():
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def get_coordinates():
    if request.method == 'POST':
        try:
            data = request.get_data()

            print("This is your location:")
            print(data.decode())

            file = open("data.txt", "w")
            file.write(data.decode())
            file.close()

            return ""
        except Exception:
            return ""


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5500, debug=True)
