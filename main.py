from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
@app.route('/index')
@app.route('/dashboard')
def index():
    return render_template('index.html')

@app.route('/dataset')
def dataset():
    return render_template('dataset.html')

@app.route('/model_training')
def model_training():
    return render_template('model_training.html')

@app.route('/results')
def results():
    return render_template('results.html')

if __name__ == "__main__":
    app.run(debug=True)