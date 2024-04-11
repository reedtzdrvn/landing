from flask import Flask, request, jsonify
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from scipy import stats
from flask_cors import CORS
import requests
import time

app = Flask(__name__)
CORS(app) 
random_forest_model = None
feature_names = None

def send_request_to_server():
    url = 'https://tg-wtf.onrender.com'
    try:
        response = requests.get(url)
        print(f"Status code: {response.status_code}")
    except Exception as e:
        print(f"Error sending request: {e}")

def wake_server():
    interval_seconds = 300
    while True:
        send_request_to_server()
        time.sleep(interval_seconds)

def train_model():
    global random_forest_model, feature_names
    housing_df = pd.read_csv("data2.csv", sep=';')
    for col in housing_df.columns:
        if housing_df[col].dtype == 'object':
            housing_df[col] = housing_df[col].str.replace(',', '.').astype(float)
    housing_df.dropna(inplace=True)
    housing_df = housing_df.sample(frac=1).reset_index(drop=True)
    columns = housing_df.select_dtypes(include=['float64', 'int64']).columns
    housing_df[columns] = housing_df[columns].astype('int32')
    z_threshold = 5
    z_scores = stats.zscore(housing_df)
    outlier_rows = (z_scores > z_threshold).any(axis=1)
    cleaned_df = housing_df[~outlier_rows]
    cleaned_df = cleaned_df[cleaned_df["Цена"] > 0]
    X = cleaned_df.iloc[:, 1:]
    y = cleaned_df['Цена']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    random_forest_model = RandomForestRegressor(n_estimators=150, random_state=42)
    random_forest_model.fit(X_train, y_train)
    feature_names = X_train.columns.tolist()
    print('Модель обучена!')
    
@app.route('/predict', methods=['POST'])
def get_price():
    global random_forest_model, feature_names
    data = request.json
    params = data["params"]
    input_data = pd.DataFrame([params], columns=feature_names)
    kv_pred = random_forest_model.predict(input_data)
    return jsonify({'price': int(kv_pred[0])})

if __name__ == '__main__':
    train_model()
    wake_server()
    app.run(debug=True)
