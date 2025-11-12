from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/herramienta', methods=['GET', 'POST'])
def herramienta():
    if request.method == 'POST':
        id_number = request.form.get('id_number', '').strip()
        return render_template('herramienta.html', id_number=id_number)
    return render_template('herramienta.html', id_number=None)

if __name__ == '__main__':
    app.run(debug=True)