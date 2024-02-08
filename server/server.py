from flask import Flask
from flask_cors import CORS
import requests
import json
import sqlite3
import logging

url = "https://api.themoviedb.org/3/authentication"
init_url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&sort_by=popularity.desc"
top_rated_url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
most_popular_url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
upcoming_url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmNlODljMTA0ZmJlMTRiZDhhMWNmMzE0NTg1OTYyMCIsInN1YiI6IjY0YWI0MDEyYjY4NmI5MDBhZjllNjYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kstPddMiLGrddAe2rjYpgnQSmNGiLEIIz4mMBfPKJLg"
}


app = Flask(__name__)
CORS(app)
conn = sqlite3.connect('database.db', check_same_thread=False)
cursor = conn.cursor()

def create_table():
    try:
        conn.execute("CREATE TABLE user_movie_lists (id TEXT, movie_list TEXT, PRIMARY KEY (id))")
    except sqlite3.Error as e:
        logging.warning(e)
        pass

@app.route("/api/search/movie/<title>/genre/<genre>/page/<page_num>")
def search(title: str, genre: str, page_num: str):
    return_data = {}
    movie_search_url = f"https://api.themoviedb.org/3/search/movie?query={title}&page={page_num}"
    response = requests.get(movie_search_url, headers=headers).json()
    json_data = response['results']
    if genre == '0' or genre == 'Genre':
        return_data['movie_data'] = json_data
    else:
        data_list = []
        for movie in json_data:
            if int(genre) in movie["genre_ids"]:
                data_list.append(movie)
        return_data['movie_data'] = data_list
                
    return_data['total_pages'] = response["total_pages"]
    return_data['current_page'] = response["page"]
    
    return json.dumps(return_data)


@app.route("/api/load", defaults={'limit': 20})
@app.route("/api/limit/<limit>")
def generic_load(limit:str):
    lim = int(limit)
    response = requests.get(init_url, headers=headers).json()
    json_data = response['results']
    return json_data[:lim]


@app.route("/api/top-rated", defaults={'limit': 20})
@app.route("/api/top-rated/limit/<limit>")
def get_top_rated(limit: str):
    lim = int(limit)
    response = requests.get(top_rated_url, headers=headers).json()
    json_data = response['results']
    return json_data[:lim]


@app.route("/api/most-popular", defaults={'limit': 20})
@app.route("/api/most-popular/limit/<limit>")
def get_most_popular(limit: str):
    lim = int(limit)
    response = requests.get(most_popular_url, headers=headers).json()
    json_data = response['results']
    return json_data[:lim]


@app.route("/api/upcoming", defaults={'limit': 20})
@app.route("/api/upcoming-popular/limit/<limit>")
def get_upcoming(limit: str):
    lim = int(limit)
    response = requests.get(upcoming_url, headers=headers).json()
    json_data = response['results']
    return json_data[:lim]


@app.route("/db/user-exists/<user_id>")
def check_user_table_exists(user_id: str):
    try:
        cursor.execute(f"SELECT id FROM user_movie_lists WHERE id = '{user_id}'")
    except sqlite3.Error as e:
        if "no such column" in str(e):
            return json.dumps("false")
    return json.dumps("True")

@app.route("/db/create/<user_id>")
def create_user(user_id: str):
    try:
        cursor.execute(f"INSERT INTO user_movie_lists (id, movie_list) VALUES ('{user_id}', '')")
        conn.commit()
    except sqlite3.Error as e:
        logging.warning("user already exists: " + str(e))
        return json.dumps("False")
    return json.dumps("True")


if __name__ == "__main__":
    try:
        create_table()
        app.run()
    finally:
        conn.close()