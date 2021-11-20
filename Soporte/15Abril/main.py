import pandas as pd
import glob

if __name__ == '__main__':
    df = pd.read_csv("/home/gaudio/PycharmProjects/pythonProject/california_housing_train.csv")
    print(df)
    dfSinFilasConNaN = df.dropna()
    df['population'].value_counts()
    df = df.drop_duplicates()
    df.dropna(inplace=True)
    df.to_csv("nuevo.csv")
    print(df.loc[0:3000])
    print(df.loc[(len(df) - 3000+1) : len(df)+1])
    dfs = [df.loc[0:3000], df.loc[(len(df) - 3000 + 1): len(df) + 1]]
    big_frame = pd.concat(dfs, ignore_index=True)
    table = pd.pivot_table(data=big_frame, index=['population'])
    print(table)









    dfs2 = [df.loc[1], df.loc[5], df.loc[12], df.loc[36]]
    big_frame2 = pd.concat(dfs2, ignore_index=True)
    table2 = pd.pivot_table(data=big_frame2, index=['population'])
    print(table2)