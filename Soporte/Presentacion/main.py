import pandas as pd
import matplotlib.pyplot as plt1
import matplotlib.pyplot as plt2
import matplotlib.pyplot as plt3
import matplotlib.pyplot as plt4
import numpy as np
import matplotlib.pyplot as plt
import random

def buscar_n_elemento(lista, e):
   contador=0
   lista.to_list()
   for element in lista:
      if element == e:
         contador+=1
   return contador
def def2(a):
  spanish3 = []
  numero = 0
  for i in range(10):
    for j in a:
      if i + 1 == j[0]:
        numero = numero + 1 
    spanish3.append(numero)
    numero = 0
  return spanish3
def a(df):
  native = np.asarray(df[['WhatIsYourNativeLanguage']])
  spanishArray = np.asarray(df[['from1To10HowMuchDoYouLikeSpanish']])
  englishArray = np.asarray(df[['from1To10HowMuchDoYouLikeEnglish']])
  germanArray = np.asarray(df[['from1To10HowMuchDoYouLikeGerman']])

  ySpanish = def2(spanishArray)
  yEnglish = def2(englishArray)
  yGerman = def2(germanArray)

  x = [1,2,3,4,5,6,7,8,9,10]
  print("spanish")
  plt.bar(x,ySpanish)
  plt.show()
  print("English")
  plt1.bar(x,yEnglish)
  plt1.show()
  print("German")
  plt2.bar(x,yGerman)
  plt2.show()

df = pd.read_csv('ColegioNadia - ColegioNadia(2).csv')
df1 = df.query('WhatIsYourNativeLanguage == "Spanish"')
df2 = df.query('WhatIsYourNativeLanguage == "English"')
df3 = df.query('WhatIsYourNativeLanguage == "German"')
df4 = df.query('WhatIsYourNativeLanguage == "other"')
print("Opiniones generales")
a(df)
print("Esto es lo que piensan los nativos del espa;ol(los pibes)")
a(df1)
print("Esto es lo que piensan en yankilandia")
a(df2)
print("DAS DENKEN DIE DEUTSCHEN")
a(df3)
print("other")
a(df4)
