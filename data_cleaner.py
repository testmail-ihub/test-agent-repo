import pandas as pd

def clean_data(df):
    # Remove null values
    df = df.dropna()
    # Remove duplicate rows
    df = df.drop_duplicates()
    return df