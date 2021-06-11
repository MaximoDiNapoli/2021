import pandas as pd
import matplotlib.pyplot as plt1
import matplotlib.pyplot as plt2
import matplotlib.pyplot as plt3
import matplotlib.pyplot as plt4
import numpy as np
df = pd.read_csv('F - funcionarios(1).csv')
df["TOTAL_SALARIO_BRUTO"] = pd.to_numeric(df["TOTAL_SALARIO_BRUTO"], downcast="float")
df["AGUINALDO"] = pd.to_numeric(df["AGUINALDO"], downcast="float")
meses = [1,2,3,4,5,6,7,8]
aguinaldoPorMes = []
gastosPorMes = []

for i in range(len(df.groupby('MES')['TOTAL_SALARIO_BRUTO'].mean())):
  gastosPorMes.append(df.groupby('MES')['TOTAL_SALARIO_BRUTO'].mean()[i + 1])
for i in range(len(df.groupby('MES')['TOTAL_SALARIO_BRUTO'].mean())):
  aguinaldoPorMes.append(df.groupby('MES')['AGUINALDO'].mean()[i + 1])



print('Grafico 1: ')
plt1.barh(meses, gastosPorMes)
plt1.xticks(rotation=90,fontsize=10)
plt1.show()

plt3.plot(x, gastosPorMes)
plt3.show()

#En este grafico (plt1) podemos observar como los primeros 8 meses del 2020 los sueldos
#se congelaron por la pandemia 

#considero que el csv deberia tener un volumen de datos mayor ya que este cuenta
#solo con 60 empleados publicos

#si podria, especulo que los salarios van a estancarse durante futuras pandemias

print('Grafico 2: ')
plt2.barh(meses, aguinaldoPorMes)
plt2.xticks(rotation=90,fontsize=10)
plt2.show()

plt4.plot(x, aguinaldoPorMes)
plt4.show()

#En este grafico (plt2) podemos observar como los primeros 8 meses del 2020 casi
#ni hubo aginaldos por culpa de la pandemia y observamos como el ultimo mes analizado
#se disparo.

#considero que el csv deberia tener un volumen de datos mayor ya que este cuenta
#solo con 60 empleados publicos (again xd)

#si podria, especulo que los aginaldos van a estancarse durante futuras pandemias
 

