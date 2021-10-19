import requests

if __name__ == '__main__':

    archivo = open("navesDeStarWars.csv", "w")
    nombres_columnas = "name , length, manufacturer, passengers\n"
    archivo.write(nombres_columnas)
    archivo.close()
    
    for i in range(200):
        text = "https://swapi.dev/api/vehicles/" + str(i) + "/"
        a = requests.get(text)
        try:
            informacion = a.json()
            name = informacion["name"]
            length = informacion["length"]
            manufacturer = informacion["manufacturer"]
            passengers = informacion["passengers"]
            linea = name + "," + length + manufacturer + "," + passengers + "\n"

            archivo = open("navesDeStarWars.csv", "a")
            archivo.write(linea)
            archivo.close()
        except KeyError:
            print(str(i) + " Ups parece que elegiste una api de mala calidad que tiene ids vacios y ahora tenes que hacer malabares para que funcione")
