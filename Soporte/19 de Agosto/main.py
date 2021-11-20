import pandas as pd
import matplotlib.pyplot as plt1
import matplotlib.pyplot as plt2

if __name__ == '__main__':

    df1 = pd.read_csv('data\data.csv')

    def convertir_en_minusculas(valor):
        if type(valor) == str:
            return valor.lower()
        else:
            return valor
    def convertir_en_mayusculas(valor):
        if type(valor) == str:
            return valor.upper()
        else:
            return valor

    def arreglar_LU(valor):
        valor = str(valor)
        for caracter in valor:
            if not caracter.isnumeric() and caracter != "/":
                valor = valor.replace(caracter, '/')
        return valor[1:]

    def arreglar_numericos(valor):
        valor = str(valor)
        numeros = str()
        for caracter in valor:
            numeros = str(numeros)
            if caracter.isnumeric() or caracter == "." or (caracter == "/" and not numeros.__contains__('/')):
                numeros = numeros + caracter

        
        

        return numeros

    def arreglar_Sexo(valor):
        valor = str(valor)
        if "hombre".__contains__(valor) and valor != "m":
            valor = "h"
        elif "mujer".__contains__(valor) and valor != "h":
            valor = "m"
        elif valor.__contains__("nobinar"):
            valor = "nb"
        else:
            valor = ""
        return valor

    def arreglar_Observacion(valor):
        valor = str(valor)

        if valor.__contains__("cabeza"):
            valor = "dolor de cabeza"
        if valor.__contains__("hiper"):
            valor = "hipertension"
        if valor != "ninguna" and valor != "hipertension" and valor != "dolor de cabeza":
            valor = "ninguna"
        return valor

    def arreglarNan(valor):
        valor = str(valor)

        if valor == "" :
            valor = pd.NA
        return valor

    def arreglarEspacios(valor):
        valor = str(valor)
        for caracter in valor:
            if caracter == " ":
                valor = valor.replace(caracter, '')
        return valor

    df1 = df1.applymap(convertir_en_minusculas)

    df1[" LU"] = df1[" LU"].apply(arreglar_LU)
    df1 = df1.applymap(arreglarEspacios)
    df1[" Sexo"] = df1[" Sexo"].apply(arreglar_Sexo)
    df2 = df1[" Sexo"]
    df3 = df1[df1.columns[6]]
    df1 = df1.applymap(arreglar_numericos)
    df1[" Sexo"] = df2
    df1[df1.columns[6]] = df3
    df1[df1.columns[6]] = df1[df1.columns[6]].apply(arreglar_Observacion)
    df1 = df1.applymap(arreglarNan)
    df1 = df1.dropna()
    df1.to_csv("dataPeroBuena.csv")
    print(df1)

