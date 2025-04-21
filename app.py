from flask import Flask, render_template, request

# Flask alkalmazás létrehozása
app = Flask(__name__)

# Route a főoldalhoz
@app.route("/")
def index():
    return render_template("index.html")

# Route a regisztrációs oldalhoz
@app.route("/regisztracio", methods=["POST"])
# Route a sikeres regisztrációs oldalhoz
def regisztracio():
    # Regisztrációs űrlap feldolgozása
    nev = request.form.get("nev")
    email = request.form.get("email")
    szak = request.form.get("szak")

    # Ellenőrizzük, hogy a mezők ki vannak-e töltve
    return render_template("siker.html", nev=nev, email=email, szak=szak)

# Flask alkalmazás indítása
if __name__ == "__main__":
    app.run(debug=True)
