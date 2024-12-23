from flask import Flask, render_template
import requests # type: ignore

app = Flask(__name__)

# News API Key
NEWS_API_KEY = '5e13cd4b9bb442d087ea793917808a98'

# Function to get the latest science news
def get_science_news():
    url = f'https://newsapi.org/v2/top-headlines?category=science&apiKey={NEWS_API_KEY}'
    response = requests.get(url)
    data = response.json()

    # If the response contains articles, return them
    if data['status'] == 'ok' and 'articles' in data:
        return data['articles']
    else:
        return []


# Open the home webpage when he aplication starts
@app.route('/')
def index():
    return render_template('home.html', current_page='home')

# Allows user to return to the homepage once they click the home button
@app.route('/home')
def home():
    return render_template('home.html', current_page='home')

# User is redirected to the news.html file when the news button is clicked
@app.route('/news')
def news():
    # Fetch the latest science news
    articles = get_science_news()
    return render_template('news.html', articles=articles, current_page='news')

# User is redirected to the contact.html file when the contact button is clicked
@app.route('/contact')
def contact():
    return render_template('contact.html', current_page='contact')

@app.route('/cern')
def cern():
    return render_template('cern.html', current_page='cern')

if __name__ == '__main__':
    app.run(debug=True)

    
