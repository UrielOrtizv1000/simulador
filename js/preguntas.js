/*
  preguntas.js
  Current exam: Python — Units III and IV.
  Exactly 66 questions, grounded only in the 11 supplied notebooks.
*/

var TOPICS = [
  {
    "id": "listas",
    "name": "Operaciones avanzadas con listas",
    "short": "Listas",
    "color": "--t-cia"
  },
  {
    "id": "comprensiones",
    "name": "List comprehensions",
    "short": "Comprensiones",
    "color": "--t-avr"
  },
  {
    "id": "tuplas",
    "name": "Tuplas, registros y desempaquetado",
    "short": "Tuplas",
    "color": "--t-ia"
  },
  {
    "id": "diccionarios",
    "name": "Diccionarios y manipulación segura",
    "short": "Diccionarios",
    "color": "--t-hackers"
  },
  {
    "id": "sets",
    "name": "Sets y operaciones de conjuntos",
    "short": "Sets",
    "color": "--t-leyes"
  },
  {
    "id": "archivos",
    "name": "Lectura y escritura de archivos planos",
    "short": "Archivos",
    "color": "--t-eh"
  },
  {
    "id": "contextos",
    "name": "Administradores de contexto con with",
    "short": "Contextos",
    "color": "--t-cia"
  },
  {
    "id": "json_csv",
    "name": "JSON y CSV",
    "short": "JSON y CSV",
    "color": "--t-avr"
  },
  {
    "id": "map_filter",
    "name": "map() y filter() sobre datos",
    "short": "map / filter",
    "color": "--t-ia"
  },
  {
    "id": "clases",
    "name": "Clases, self e __init__",
    "short": "Clases",
    "color": "--t-hackers"
  },
  {
    "id": "atributos",
    "name": "Atributos de instancia y de clase",
    "short": "Instancia / clase",
    "color": "--t-leyes"
  }
];

var QUESTION_BANK = [
  {
    "id": "py01",
    "topic": "listas",
    "type": "mc",
    "prompt": "Dada la lista:\n\nnumeros = [3, 8, 15, 4, 42, 16, 23, 7, 11]\n\n¿Qué produce numeros[-3:]?",
    "options": [
      "[23, 7, 11]",
      "[42, 16, 23]",
      "[11, 7, 23]",
      "[3, 8, 15]"
    ],
    "answerIndex": 0,
    "explain": "La rebanada -3: toma los tres últimos elementos.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Ejercicio 1 — Rebanadas"
    }
  },
  {
    "id": "py02",
    "topic": "listas",
    "type": "mc",
    "prompt": "¿Qué imprime este código al final?\n\ntareas = ['programar', 'comer']\ntareas.append('revisar correo')\ntareas.insert(0, 'junta 9am')\ntareas.extend(['llamar', 'comprar'])\ntareas.remove('comprar')\nultima = tareas.pop()\nprint(ultima)\nprint(tareas)",
    "options": [
      "llamar y ['junta 9am', 'programar', 'comer', 'revisar correo']",
      "comprar y ['junta 9am', 'programar', 'comer', 'revisar correo', 'llamar']",
      "llamar y ['programar', 'comer', 'revisar correo', 'junta 9am']",
      "revisar correo y ['junta 9am', 'programar', 'comer']"
    ],
    "answerIndex": 0,
    "explain": "extend agrega elementos separados; remove quita 'comprar' y pop() extrae el último: 'llamar'.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Ejercicio 2 — Métodos que modifican"
    }
  },
  {
    "id": "py03",
    "topic": "listas",
    "type": "mc",
    "prompt": "Cada producto tiene la forma (nombre, categoría, precio, existencia). ¿Qué expresión crea una lista nueva ordenada por existencia de mayor a menor sin modificar productos?",
    "options": [
      "sorted(productos, key=lambda p: p[3], reverse=True)",
      "productos.sort(key=lambda p: p[3], reverse=True)",
      "sorted(productos, key=lambda p: p[2])",
      "productos.reverse()"
    ],
    "answerIndex": 0,
    "explain": "sorted devuelve una lista nueva; el índice 3 es existencia y reverse=True invierte el orden.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Ejercicio 3 — Ordenamiento personalizado"
    }
  },
  {
    "id": "py04",
    "topic": "listas",
    "type": "mc",
    "prompt": "¿Qué imprime este código?\n\ntabla = [[0] * 3] * 3\ntabla[0][1] = 1\nfor fila in tabla:\n    print(fila)",
    "options": [
      "[0, 1, 0] tres veces",
      "[0, 1, 0], luego dos filas [0, 0, 0]",
      "[1, 0, 0] tres veces",
      "Lanza IndexError"
    ],
    "answerIndex": 0,
    "explain": "La multiplicación repite referencias a la misma lista interna; cambiar una fila cambia las tres.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Ejercicio 4 — Encuentra el error"
    }
  },
  {
    "id": "py05",
    "topic": "listas",
    "type": "mc",
    "prompt": "¿Cuál opción une los vectores a y b en una lista nueva [1, 2, 3, 4] sin modificar los originales?\n\na = [1, 2]\nb = [3, 4]",
    "options": [
      "a + b",
      "a.append(b)",
      "a.extend(b)",
      "[a, b]"
    ],
    "answerIndex": 0,
    "explain": "El operador + concatena ambas listas y devuelve una nueva; append anida y extend modifica a.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Combinar listas con + y *"
    }
  },
  {
    "id": "py06",
    "topic": "listas",
    "type": "vf",
    "prompt": "Después de ejecutar resultado = lista.sort(), resultado contiene la lista ordenada.",
    "answer": false,
    "explain": "list.sort() modifica la lista y devuelve None; sorted(lista) sí devuelve una lista nueva.",
    "source": {
      "file": "1_1_Operaciones_Avanzadas_con_Listas.ipynb",
      "section": "Preguntas de reflexión"
    }
  },
  {
    "id": "py07",
    "topic": "comprensiones",
    "type": "mc",
    "prompt": "¿Qué comprensión reemplaza correctamente este bucle?\n\ncuadrados = []\nfor n in range(1, 11):\n    cuadrados.append(n ** 2)",
    "options": [
      "[n ** 2 for n in range(1, 11)]",
      "[n for n ** 2 in range(1, 11)]",
      "[n ** 2 if n in range(1, 11)]",
      "(n ** 2 for n in range(1, 11))"
    ],
    "answerIndex": 0,
    "explain": "La expresión va antes del for; los límites de range producen 1 a 10.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 1 — Del bucle a la comprensión"
    }
  },
  {
    "id": "py08",
    "topic": "comprensiones",
    "type": "mc",
    "prompt": "Con temperaturas = [18, 27, 22, 31, 25, 29], ¿qué imprime?\n\nprint([t for t in temperaturas if t > 25])",
    "options": [
      "[27, 31, 29]",
      "[18, 22, 25]",
      "['calor', 'calor', 'calor']",
      "[27, 22, 31, 25, 29]"
    ],
    "answerIndex": 0,
    "explain": "El if final filtra: solo permanecen los valores mayores que 25.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 2 — Filtrar vs. transformar"
    }
  },
  {
    "id": "py09",
    "topic": "comprensiones",
    "type": "mc",
    "prompt": "¿Qué comprensión conserva todas las temperaturas y las transforma en 'calor' si son mayores a 25 o 'templado' en otro caso?",
    "options": [
      "['calor' if t > 25 else 'templado' for t in temperaturas]",
      "[t for t in temperaturas if 'calor' else 'templado']",
      "['calor' for t in temperaturas if t > 25]",
      "[if t > 25 'calor' else 'templado' for t in temperaturas]"
    ],
    "answerIndex": 0,
    "explain": "Cuando se elige entre dos valores, el if-else forma parte de la expresión inicial.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 2 — Filtrar vs. transformar"
    }
  },
  {
    "id": "py10",
    "topic": "comprensiones",
    "type": "mc",
    "prompt": "¿Cuál comprensión construye {producto: precio_con_iva} solo cuando el precio original es mayor a 500?",
    "options": [
      "{p: round(precio * 1.16, 2) for p, precio in zip(productos, precios) if precio > 500}",
      "{p: precio for p in productos for precio in precios if precio > 500}",
      "[p: precio * 1.16 for p, precio in zip(productos, precios)]",
      "{precio: p for p, precio in zip(productos, precios) if p > 500}"
    ],
    "answerIndex": 0,
    "explain": "zip alinea ambas listas; la condición usa el precio sin IVA y la expresión calcula el nuevo valor.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 3 — Comprensión de diccionario"
    }
  },
  {
    "id": "py11",
    "topic": "comprensiones",
    "type": "mc",
    "prompt": "¿Qué produce esta comprensión?\n\nventas = [[850, 1200, 430], [2100, 90, 1500], [300, 1100]]\nresultado = [v for sucursal in ventas for v in sucursal if v > 1000]",
    "options": [
      "[1200, 2100, 1500, 1100]",
      "[[1200], [2100, 1500], [1100]]",
      "[850, 1200, 2100, 1500, 1100]",
      "[1100, 1500, 2100, 1200]"
    ],
    "answerIndex": 0,
    "explain": "Los dos for recorren primero cada sublista y luego cada venta; el filtro conserva las mayores a 1000.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 4 — Aplanar y filtrar"
    }
  },
  {
    "id": "py12",
    "topic": "comprensiones",
    "type": "fill",
    "prompt": "Para sumar los cuadrados del 1 al 10 000 000 usando menos memoria, completa: sum(n ** 2 ___ n in range(1, 10_000_001))",
    "answers": [
      "for",
      "FOR"
    ],
    "explain": "Los paréntesis de sum alojan una expresión generadora, que produce un valor a la vez.",
    "source": {
      "file": "1_2_List_Comprehensions.ipynb",
      "section": "Ejercicio 5 — ¿Lista o generador?"
    }
  },
  {
    "id": "py13",
    "topic": "tuplas",
    "type": "mc",
    "prompt": "¿Cuál expresión crea una tupla de un solo elemento con el valor 'ISC'?",
    "options": [
      "('ISC',)",
      "('ISC')",
      "tuple('ISC')",
      "['ISC']"
    ],
    "answerIndex": 0,
    "explain": "La coma, no los paréntesis, es lo que forma la tupla de un elemento.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Ejercicio 1 — Crear tuplas"
    }
  },
  {
    "id": "py14",
    "topic": "tuplas",
    "type": "mc",
    "prompt": "¿Qué imprime este código?\n\nlecturas = (18.2, 19.5, 22.1, 25.8, 27.3, 24.0, 20.6)\nprimera, *intermedias, ultima = lecturas\nprint(primera, intermedias, ultima)",
    "options": [
      "18.2 [19.5, 22.1, 25.8, 27.3, 24.0] 20.6",
      "18.2 (19.5, 22.1, 25.8, 27.3, 24.0) 20.6",
      "18.2 [19.5] [22.1, 25.8, 27.3, 24.0, 20.6]",
      "Lanza ValueError"
    ],
    "answerIndex": 0,
    "explain": "El destino con * recibe todos los elementos intermedios y siempre es una lista.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Ejercicio 2 — Desempaquetado extendido"
    }
  },
  {
    "id": "py15",
    "topic": "tuplas",
    "type": "mc",
    "prompt": "Para cada vuelo con forma (clave, (origen, destino), (salida, llegada)), ¿qué encabezado desempaqueta todo e ignora llegada?",
    "options": [
      "for clave, (origen, destino), (salida, _) in vuelos:",
      "for (clave, origen, destino, salida, _) in vuelos:",
      "for clave, origen, destino, salida in vuelos:",
      "for clave, [origen, destino], salida, _ in vuelos:"
    ],
    "answerIndex": 0,
    "explain": "El patrón debe conservar la misma estructura anidada que cada registro.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Ejercicio 3 — Desempaquetado anidado"
    }
  },
  {
    "id": "py16",
    "topic": "tuplas",
    "type": "fill",
    "prompt": "En las inscripciones del ejercicio hay tres registros con la clave ('Python', '7C'). ¿Qué valor debe devolver el diccionario para esa clave?",
    "answers": [
      "3",
      "tres"
    ],
    "explain": "Las tuplas son hashables y pueden identificar la combinación materia-grupo.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Ejercicio 4 — Tuplas como claves"
    }
  },
  {
    "id": "py17",
    "topic": "tuplas",
    "type": "mc",
    "prompt": "Si Producto es un NamedTuple con campos nombre, precio y existencia, ¿qué expresión obtiene el producto más caro de productos usando nombres de campo?",
    "options": [
      "max(productos, key=lambda p: p.precio)",
      "max(productos, key=lambda p: p[0])",
      "productos.max(precio)",
      "sorted(productos.nombre)[-1]"
    ],
    "answerIndex": 0,
    "explain": "NamedTuple permite acceso legible por atributo; max usa precio como clave.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Ejercicio 5 — NamedTuple"
    }
  },
  {
    "id": "py18",
    "topic": "tuplas",
    "type": "vf",
    "prompt": "En la tupla ('Ana', [90, 85]) es válido hacer registro[1].append(100), aunque no es válido reasignar registro[1].",
    "answer": true,
    "explain": "La tupla impide cambiar sus referencias, pero la lista contenida sigue siendo mutable.",
    "source": {
      "file": "1_3_Tuplas_Registros_y_Desempaquetado.ipynb",
      "section": "Preguntas de reflexión"
    }
  },
  {
    "id": "py19",
    "topic": "diccionarios",
    "type": "mc",
    "prompt": "Para contacto = {'nombre': 'Beto'}, ¿qué expresión obtiene 'no registrado' sin lanzar KeyError ni usar if?",
    "options": [
      "contacto.get('tel', 'no registrado')",
      "contacto['tel'] or 'no registrado'",
      "contacto.setdefault('tel')",
      "contacto.pop('tel')"
    ],
    "answerIndex": 0,
    "explain": "get devuelve el valor por defecto cuando la clave no existe y no modifica el diccionario.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 1 — get() con valores por defecto"
    }
  },
  {
    "id": "py20",
    "topic": "diccionarios",
    "type": "mc",
    "prompt": "¿Qué patrón cuenta correctamente cuántos libros hay de cada género?",
    "options": [
      "conteo[genero] = conteo.get(genero, 0) + 1",
      "conteo.get(genero, 0) + 1",
      "conteo.setdefault(genero, []).append(1)",
      "conteo[genero] = conteo.get(genero)"
    ],
    "answerIndex": 0,
    "explain": "get aporta cero para la primera aparición y el resultado se guarda de nuevo.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 2 — Contar y agrupar"
    }
  },
  {
    "id": "py21",
    "topic": "diccionarios",
    "type": "mc",
    "prompt": "¿Qué línea agrupa títulos por autor en listas dentro de por_autor?",
    "options": [
      "por_autor.setdefault(autor, []).append(titulo)",
      "por_autor.get(autor, []).append(titulo)",
      "por_autor[autor].get(titulo)",
      "por_autor.setdefault(titulo, autor)"
    ],
    "answerIndex": 0,
    "explain": "setdefault inserta y devuelve la lista asociada; append modifica esa lista guardada.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 2 — Contar y agrupar"
    }
  },
  {
    "id": "py22",
    "topic": "diccionarios",
    "type": "mc",
    "prompt": "Con temperaturas_c = {'Mexicali': 41, 'Ags': 26, 'Toluca': 14}, ¿qué comprensión conserva solo ciudades con 25 °C o más?",
    "options": [
      "{c: t for c, t in temperaturas_c.items() if t >= 25}",
      "{c: t if t >= 25 for c, t in temperaturas_c.items()}",
      "[c: t for c, t in temperaturas_c if t >= 25]",
      "{t: c for c, t in temperaturas_c.items() if c >= 25}"
    ],
    "answerIndex": 0,
    "explain": "items aporta pares clave-valor y el if final filtra por temperatura.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 3 — Comprensiones de diccionarios"
    }
  },
  {
    "id": "py23",
    "topic": "diccionarios",
    "type": "vf",
    "prompt": "La línea por_materia.get(materia, []).append(alumno) agrega una clave nueva a por_materia cuando materia no existe.",
    "answer": false,
    "explain": "get crea una lista temporal como valor por defecto, pero no la inserta; setdefault sí la guarda.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 4 — Encuentra el error"
    }
  },
  {
    "id": "py24",
    "topic": "diccionarios",
    "type": "mc",
    "prompt": "Dadas clave y respuestas del reto, ¿cuántos aciertos tiene Beto?\n\nclave = {'p1':'a','p2':'c','p3':'b','p4':'d'}\nBeto = {'p1':'b','p2':'c','p4':'d'}",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explain": "Beto acierta p2 y p4; p1 es incorrecta y p3 no fue contestada.",
    "source": {
      "file": "2_1_Diccionarios_Manipulacion_Segura.ipynb",
      "section": "Ejercicio 5 — Integrador"
    }
  },
  {
    "id": "py25",
    "topic": "sets",
    "type": "connect",
    "prompt": "Relaciona cada necesidad de las playlists con su operación.",
    "pairs": [
      {
        "l": "Todas las canciones distintas",
        "r": "ana | beto"
      },
      {
        "l": "Canciones en ambas",
        "r": "ana & beto"
      },
      {
        "l": "Solo las de Ana",
        "r": "ana - beto"
      },
      {
        "l": "En una sola playlist",
        "r": "ana ^ beto"
      }
    ],
    "explain": "Unión reúne, intersección cruza, diferencia conserva solo el primero y diferencia simétrica excluye lo común.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Ejercicio 1 — Operaciones básicas"
    }
  },
  {
    "id": "py26",
    "topic": "sets",
    "type": "mc",
    "prompt": "¿Qué imprime este código?\n\na = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a - b)\nprint(b - a)",
    "options": [
      "{1, 2} y luego {5}",
      "{5} y luego {1, 2}",
      "{1, 2, 5} dos veces",
      "{3, 4} dos veces"
    ],
    "answerIndex": 0,
    "explain": "La diferencia no es conmutativa: conserva elementos del conjunto izquierdo que no están en el derecho.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Ejercicio 2 — Predice y explica"
    }
  },
  {
    "id": "py27",
    "topic": "sets",
    "type": "mc",
    "prompt": "Con centro = {'café','té','pan','jugo','galletas','chocolate'} y norte = {'café','pan','galletas','refresco'}, ¿qué expresión obtiene lo que Norte debe pedir para tener todo lo de Centro?",
    "options": [
      "centro - norte",
      "norte - centro",
      "centro & norte",
      "centro ^ norte"
    ],
    "answerIndex": 0,
    "explain": "Se necesitan los productos de Centro que todavía no están en Norte.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Ejercicio 3 — Inventario de dos sucursales"
    }
  },
  {
    "id": "py28",
    "topic": "sets",
    "type": "mc",
    "prompt": "Este código falla porque etiquetas_b es lista:\n\ncomunes = etiquetas_a & etiquetas_b\n\n¿Qué corrección conserva etiquetas_b como lista?",
    "options": [
      "comunes = etiquetas_a & set(etiquetas_b)",
      "comunes = list(etiquetas_a) & etiquetas_b",
      "comunes = etiquetas_a + etiquetas_b",
      "comunes = etiquetas_a.intersection & etiquetas_b"
    ],
    "answerIndex": 0,
    "explain": "El operador & requiere conjuntos; convertir temporalmente la lista permite la intersección sin cambiar su variable original.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Ejercicio 4 — Encuentra el error"
    }
  },
  {
    "id": "py29",
    "topic": "sets",
    "type": "mc",
    "prompt": "¿Qué expresión obtiene los alumnos inscritos en TODAS las materias de inscripciones?",
    "options": [
      "set.intersection(*inscripciones.values())",
      "set.union(*inscripciones.values())",
      "set.difference(*inscripciones.values())",
      "set.symmetric_difference(*inscripciones.values())"
    ],
    "answerIndex": 0,
    "explain": "La intersección de todos los sets conserva únicamente alumnos presentes en cada materia.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Ejercicio 5 — Integrador"
    }
  },
  {
    "id": "py30",
    "topic": "sets",
    "type": "fill",
    "prompt": "Completa: para crear un conjunto vacío se usa ___; {} crea un diccionario vacío.",
    "answers": [
      "set()",
      "set ()"
    ],
    "explain": "Las llaves vacías están reservadas para dict; set() crea el conjunto vacío.",
    "source": {
      "file": "2_2_Sets_Operaciones_de_Conjuntos.ipynb",
      "section": "Trampa: {} no es un set vacío"
    }
  },
  {
    "id": "py31",
    "topic": "archivos",
    "type": "mc",
    "prompt": "Para crear compras.txt con texto UTF-8, reemplazando su contenido, ¿qué apertura cumple el ejercicio?",
    "options": [
      "open('archivos_clase/compras.txt', 'w', encoding='utf-8')",
      "open('archivos_clase/compras.txt', 'a', encoding='ascii')",
      "open('archivos_clase/compras.txt', 'r', encoding='utf-8')",
      "open('archivos_clase/compras.txt', 'x', newline='utf-16')"
    ],
    "answerIndex": 0,
    "explain": "El modo w escribe desde cero y encoding='utf-8' conserva los acentos.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "Ejercicio 1 — Escribir y leer"
    }
  },
  {
    "id": "py32",
    "topic": "archivos",
    "type": "mc",
    "prompt": "¿Qué apertura permite agregar 'azúcar' y 'sal' al final sin borrar las compras existentes?",
    "options": [
      "open(ruta, 'a', encoding='utf-8')",
      "open(ruta, 'w', encoding='utf-8')",
      "open(ruta, 'x', encoding='utf-8')",
      "open(ruta, 'r', encoding='utf-8')"
    ],
    "answerIndex": 0,
    "explain": "El modo a añade al final; w truncaría el archivo.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "Ejercicio 1 — Escribir y leer"
    }
  },
  {
    "id": "py33",
    "topic": "archivos",
    "type": "mc",
    "prompt": "Al leer alumnos.txt línea por línea, ¿qué conversión permite sumar el promedio del texto 'Ana,ISC,8.7'?",
    "options": [
      "float(linea.strip().split(',')[2])",
      "int(linea[2])",
      "sum(linea.split(','))",
      "linea.get('promedio')"
    ],
    "answerIndex": 0,
    "explain": "split separa campos y float convierte el tercer campo de texto a número.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "Ejercicio 2 — Procesar datos numéricos"
    }
  },
  {
    "id": "py34",
    "topic": "archivos",
    "type": "mc",
    "prompt": "¿Qué combinación implementa guardar_respaldo sin sobrescribir un archivo existente?",
    "options": [
      "Modo 'x' y capturar FileExistsError",
      "Modo 'w' y capturar FileNotFoundError",
      "Modo 'a' y capturar UnicodeError",
      "Modo 'r' y capturar IndexError"
    ],
    "answerIndex": 0,
    "explain": "x crea exclusivamente: si la ruta existe, no la modifica y lanza FileExistsError.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "Ejercicio 3 — Modos de apertura"
    }
  },
  {
    "id": "py35",
    "topic": "archivos",
    "type": "mc",
    "prompt": "Para escribir un CSV de forma portable con csv.writer, ¿qué apertura evita líneas en blanco adicionales y conserva acentos?",
    "options": [
      "open(ruta, 'w', encoding='utf-8', newline='')",
      "open(ruta, 'w', encoding='ascii', newline='\\n')",
      "open(ruta, 'a', newline=None)",
      "open(ruta, 'rb', encoding='utf-8')"
    ],
    "answerIndex": 0,
    "explain": "El módulo csv recomienda newline='' y el material usa UTF-8 para texto con acentos.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "Archivos delimitados: el módulo csv"
    }
  },
  {
    "id": "py36",
    "topic": "archivos",
    "type": "mc",
    "prompt": "¿Cuál secuencia abre, lee y cierra claramente un archivo sin usar with?",
    "options": [
      "f = open(ruta, 'r', encoding='utf-8')\ndatos = f.read()\nf.close()",
      "datos = open(ruta).close().read()",
      "f = open(ruta, 'w')\ndatos = f.write()\nf.read()",
      "f.close()\nf = open(ruta)\ndatos = f.read()"
    ],
    "answerIndex": 0,
    "explain": "La forma básica conserva la referencia, lee mientras está abierto y llama close al final.",
    "source": {
      "file": "3_1_Archivos_Planos.ipynb",
      "section": "La forma básica: open() y close()"
    }
  },
  {
    "id": "py37",
    "topic": "contextos",
    "type": "mc",
    "prompt": "¿Cuál es la salida exacta?\n\nclass Caja:\n    def __enter__(self):\n        print('abrir')\n        return self\n    def __exit__(self, tipo, valor, traza):\n        print('cerrar', tipo.__name__ if tipo else 'sin error')\n        return tipo is KeyError\n\nwith Caja():\n    print('uno')\n    {}['x']\n    print('dos')\nprint('tres')",
    "options": [
      "abrir / uno / cerrar KeyError / tres",
      "abrir / uno / dos / cerrar sin error / tres",
      "abrir / cerrar KeyError y el programa termina",
      "uno / cerrar KeyError / tres"
    ],
    "answerIndex": 0,
    "explain": "KeyError interrumpe el bloque antes de 'dos'; __exit__ lo suprime al devolver True y continúa con 'tres'.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Ejercicio 1 — Predice el orden"
    }
  },
  {
    "id": "py38",
    "topic": "contextos",
    "type": "mc",
    "prompt": "En Bitacora.__enter__, ¿qué debe devolverse para que `with Bitacora(ruta) as f:` entregue el archivo abierto en f?",
    "options": [
      "self.archivo",
      "self.ruta",
      "True",
      "Nada; as siempre recibe self"
    ],
    "answerIndex": 0,
    "explain": "El valor retornado por __enter__ es exactamente el valor asignado después de as.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Ejercicio 2 — Clase administradora de contexto"
    }
  },
  {
    "id": "py39",
    "topic": "contextos",
    "type": "vf",
    "prompt": "Un administrador creado con @contextmanager debe colocar la limpieza en finally alrededor de yield para que se ejecute incluso si el bloque falla.",
    "answer": true,
    "explain": "Sin try/finally, una excepción lanzada al reanudar el generador puede saltarse la limpieza.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Ejercicio 3 — Con @contextmanager"
    }
  },
  {
    "id": "py40",
    "topic": "contextos",
    "type": "mc",
    "prompt": "¿Cuáles son los dos errores centrales de ConexionFalsa?",
    "options": [
      "__enter__ no retorna self y __exit__ devuelve True, ocultando la excepción resultante",
      "consultar debería ser @staticmethod y __exit__ debe retornar self",
      "abierta debe ser atributo de clase y falta close() en consultar",
      "with no acepta objetos definidos por el usuario"
    ],
    "answerIndex": 0,
    "explain": "Sin return self, c es None; luego el AttributeError queda oculto porque __exit__ retorna True.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Ejercicio 4 — Encuentra los errores"
    }
  },
  {
    "id": "py41",
    "topic": "contextos",
    "type": "mc",
    "prompt": "En respaldo_archivo(ruta), ¿qué debe ocurrir si el bloque lanza una excepción?",
    "options": [
      "Restaurar desde .bak, borrar .bak y devolver False para dejar pasar la excepción",
      "Borrar .bak y devolver True sin restaurar",
      "Conservar el archivo modificado y devolver True",
      "Crear otro .bak y repetir el bloque"
    ],
    "answerIndex": 0,
    "explain": "El respaldo permite rollback; no suprimir la excepción mantiene visible el fallo original.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Ejercicio 5 — Integrador"
    }
  },
  {
    "id": "py42",
    "topic": "contextos",
    "type": "open",
    "prompt": "Escribe el esquema try/finally equivalente a abrir un recurso con with cuando la liberación debe ocurrir siempre.",
    "model": "recurso = adquirir()\ntry:\n    usar(recurso)\nfinally:\n    liberar(recurso)",
    "explain": "with formaliza la adquisición y garantiza la liberación mediante __enter__ y __exit__, incluso si el bloque falla.",
    "source": {
      "file": "3_2_Administradores_de_Contexto_with.ipynb",
      "section": "Preguntas de reflexión"
    }
  },
  {
    "id": "py43",
    "topic": "json_csv",
    "type": "mc",
    "prompt": "¿Qué imprime este código?\n\nimport json\nd = {'id': 7, 2026: 'año', 'tags': ('a', 'b')}\nr = json.loads(json.dumps(d))\nprint(type(r['tags']).__name__)\nprint('2026' in r, 2026 in r)",
    "options": [
      "list y luego True False",
      "tuple y luego False True",
      "list y luego False True",
      "tuple y luego True False"
    ],
    "answerIndex": 0,
    "explain": "JSON convierte tuplas en arreglos/listas y obliga a que las claves de objeto sean cadenas.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Ejercicio 1 — Ida y vuelta"
    }
  },
  {
    "id": "py44",
    "topic": "json_csv",
    "type": "mc",
    "prompt": "¿Qué excepciones debe manejar cargar_config para devolver valores por defecto cuando falta el archivo o el JSON está dañado?",
    "options": [
      "FileNotFoundError y json.JSONDecodeError",
      "KeyError y TypeError",
      "UnicodeError y StopIteration",
      "ValueError y IndexError únicamente"
    ],
    "answerIndex": 0,
    "explain": "La ausencia de archivo y una sintaxis JSON inválida son casos distintos y explícitos del ejercicio.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Ejercicio 2 — Guardar y cargar configuración"
    }
  },
  {
    "id": "py45",
    "topic": "json_csv",
    "type": "mc",
    "prompt": "Para serializar tarea, ¿qué debe hacer la función pasada como default?",
    "options": [
      "datetime -> isoformat(); set -> lista ordenada",
      "datetime -> timestamp obligatorio; set -> diccionario",
      "datetime -> strftime sin retorno; set -> tuple",
      "Convertir todo el diccionario con repr"
    ],
    "answerIndex": 0,
    "explain": "json no conoce datetime ni set; default debe devolver representaciones serializables.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Ejercicio 3 — Serializar tipos especiales"
    }
  },
  {
    "id": "py46",
    "topic": "json_csv",
    "type": "match",
    "prompt": "Relaciona cada problema del CSV exportado desde Excel con su corrección.",
    "pairs": [
      {
        "l": "Acentos/BOM de Excel",
        "r": "Abrir con encoding='utf-8-sig'"
      },
      {
        "l": "Columnas separadas por punto y coma",
        "r": "Usar delimiter=';' en DictReader"
      },
      {
        "l": "existencia llega como texto",
        "r": "Convertir con int() antes de sumar"
      }
    ],
    "explain": "El formato, el delimitador y los tipos deben tratarse por separado.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Ejercicio 4 — Encuentra los errores"
    }
  },
  {
    "id": "py47",
    "topic": "json_csv",
    "type": "mc",
    "prompt": "Al exportar peliculas.csv para Excel en Windows, ¿qué apertura coincide con el material?",
    "options": [
      "open(ruta, 'w', encoding='utf-8-sig', newline='')",
      "open(ruta, 'w', encoding='ascii')",
      "open(ruta, 'wb', newline='\\n')",
      "open(ruta, 'a', encoding='utf-16')"
    ],
    "answerIndex": 0,
    "explain": "utf-8-sig facilita que Excel reconozca UTF-8 y newline='' evita filas extra con csv.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Ejercicio 5 — Integrador"
    }
  },
  {
    "id": "py48",
    "topic": "json_csv",
    "type": "mc",
    "prompt": "Si los pedidos contienen una lista anidada de artículos, ¿qué formato conserva naturalmente esa estructura?",
    "options": [
      "JSON",
      "CSV sin transformación",
      "Texto separado por espacios",
      "CSV siempre conserva listas automáticamente"
    ],
    "answerIndex": 0,
    "explain": "JSON representa listas y objetos anidados; para CSV habría que aplanar o crear filas relacionadas.",
    "source": {
      "file": "4_1_JSON_y_CSV.ipynb",
      "section": "Preguntas de reflexión"
    }
  },
  {
    "id": "py49",
    "topic": "map_filter",
    "type": "mc",
    "prompt": "¿Qué pipeline obtiene una lista con los folios de las ventas de la sucursal Norte?",
    "options": [
      "list(map(lambda v: v['folio'], filter(lambda v: v['sucursal'] == 'Norte', ventas)))",
      "list(filter(lambda v: v['folio'], map(lambda v: v['sucursal'] == 'Norte', ventas)))",
      "map(ventas, filter('Norte'))",
      "[filter('folio', ventas), map('Norte', ventas)]"
    ],
    "answerIndex": 0,
    "explain": "Primero filter selecciona registros Norte y luego map extrae el folio.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 1 — map y filter básicos"
    }
  },
  {
    "id": "py50",
    "topic": "map_filter",
    "type": "mc",
    "prompt": "¿Qué resultado produce el pipeline solicitado?\n\ncrudo = ['  Ana@UAA.mx\\n', '\\n', 'beto@gmail.com\\n', 'CARLA@uaa.mx  \\n', '   \\n', 'diego@uaa.mx\\n', 'eva@uaa.com\\n']",
    "options": [
      "['ana@uaa.mx', 'carla@uaa.mx', 'diego@uaa.mx']",
      "['Ana@UAA.mx', 'CARLA@uaa.mx', 'diego@uaa.mx']",
      "['beto@gmail.com', 'eva@uaa.com']",
      "['ana@uaa.mx', '', 'carla@uaa.mx', '', 'diego@uaa.mx']"
    ],
    "answerIndex": 0,
    "explain": "strip limpia, filter descarta vacíos, lower normaliza y el filtro final conserva @uaa.mx.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 2 — Limpiar un archivo de texto con un pipeline"
    }
  },
  {
    "id": "py51",
    "topic": "map_filter",
    "type": "mc",
    "prompt": "¿Qué imprime este código?\n\nnumeros = map(int, ['4','8','15','16','23','42'])\npares = filter(lambda n: n % 2 == 0, numeros)\nprint(next(pares))\nprint(list(pares))\nprint(list(pares))\nprint(sum(numeros))",
    "options": [
      "4 / [8, 16, 42] / [] / 0",
      "4 / [8, 16, 42] / [8, 16, 42] / 88",
      "8 / [16, 42] / [] / 38",
      "4 / [8, 16, 42] / [] / 38"
    ],
    "answerIndex": 0,
    "explain": "filter consume también los impares del map; tras convertir pares a lista ambos iteradores quedan agotados.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 3 — Predice"
    }
  },
  {
    "id": "py52",
    "topic": "map_filter",
    "type": "mc",
    "prompt": "¿Por qué falla al recorrer el resultado de ventas_de_cafe si devuelve un filter construido sobre csv.DictReader dentro de with?",
    "options": [
      "El iterador es perezoso e intenta leer cuando el archivo ya está cerrado",
      "filter no acepta diccionarios",
      "csv.DictReader solo funciona con list comprehensions",
      "return cierra el intérprete de Python"
    ],
    "answerIndex": 0,
    "explain": "La lectura real ocurre al iterar, pero el with ya cerró el archivo al retornar.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 4 — Encuentra los errores"
    }
  },
  {
    "id": "py53",
    "topic": "map_filter",
    "type": "vf",
    "prompt": "Después de usar `[v['folio'] for v in cafe]`, `len(list(cafe))` puede dar 0 porque el iterador filter ya se agotó.",
    "answer": true,
    "explain": "map y filter son iteradores de un solo recorrido; consumirlos no los reinicia.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 4 — Encuentra los errores"
    }
  },
  {
    "id": "py54",
    "topic": "map_filter",
    "type": "mc",
    "prompt": "Para procesar ventas_grande.csv sin cargarlo completo, ¿dónde debe consumirse el pipeline basado en DictReader?",
    "options": [
      "Dentro del bloque with que mantiene abierto el archivo",
      "Después de salir del with",
      "Antes de abrir el archivo",
      "Dentro de una lista global creada al importar"
    ],
    "answerIndex": 0,
    "explain": "El pipeline perezoso necesita que su fuente siga abierta; consumirlo dentro del with limita además la memoria.",
    "source": {
      "file": "4_2_map_filter_en_Datos.ipynb",
      "section": "Ejercicio 5 — Integrador"
    }
  },
  {
    "id": "py55",
    "topic": "clases",
    "type": "mc",
    "prompt": "Una cuenta inicia con 1000, deposita 800 y retira 300. ¿Con qué saldo debe mostrarse?",
    "options": [
      "1500.00",
      "1200.00",
      "1800.00",
      "500.00"
    ],
    "answerIndex": 0,
    "explain": "El estado cambia en orden: 1000 + 800 - 300 = 1500.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Tarea 1 — Cuenta bancaria"
    }
  },
  {
    "id": "py56",
    "topic": "clases",
    "type": "mc",
    "prompt": "¿Qué imprime la última línea?\n\nclass Contador:\n    def __init__(self, inicio=0): self.valor = inicio\n    def incrementar(self, paso=1):\n        self.valor += paso\n        return self.valor\nc1 = Contador()\nc2 = Contador(10)\nc3 = c1\nc1.incrementar()\nc2.incrementar(5)\nc3.incrementar()\nprint(c1.valor, c2.valor, c3.valor)",
    "options": [
      "2 15 2",
      "1 15 1",
      "2 15 1",
      "1 16 1"
    ],
    "answerIndex": 0,
    "explain": "c3 y c1 apuntan al mismo objeto, por lo que ambos incrementos llevan su valor a 2.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Tarea 2 — Predice y explica"
    }
  },
  {
    "id": "py57",
    "topic": "clases",
    "type": "mc",
    "prompt": "En Rectangulo.escalar(factor), ¿qué implementación modifica correctamente el objeto?",
    "options": [
      "self.base *= factor\nself.altura *= factor",
      "base *= factor\naltura *= factor",
      "return Rectangulo(base, altura)",
      "Rectangulo.base *= factor"
    ],
    "answerIndex": 0,
    "explain": "Los atributos de cada instancia se modifican mediante self.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Tarea 3 — Rectángulo"
    }
  },
  {
    "id": "py58",
    "topic": "clases",
    "type": "match",
    "prompt": "Relaciona cada error de la clase Alumno con su corrección.",
    "pairs": [
      {
        "l": "calificaciones = calificaciones",
        "r": "self.calificaciones = calificaciones"
      },
      {
        "l": "def promedio():",
        "r": "def promedio(self):"
      },
      {
        "l": "calificaciones.append(calificacion)",
        "r": "self.calificaciones.append(calificacion)"
      },
      {
        "l": "__repr__ usa print",
        "r": "__repr__ debe retornar una cadena"
      }
    ],
    "explain": "Los atributos y métodos de instancia requieren self, y __repr__ retorna texto.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Tarea 4 — Encuentra los errores"
    }
  },
  {
    "id": "py59",
    "topic": "clases",
    "type": "mc",
    "prompt": "En Inventario.buscar(codigo), ¿qué expresión devuelve el producto o None si no existe?",
    "options": [
      "self.productos.get(codigo)",
      "self.productos[codigo]",
      "self.productos.setdefault(codigo)",
      "self.productos.pop(codigo)"
    ],
    "answerIndex": 0,
    "explain": "dict.get devuelve None por defecto y no modifica el inventario.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Tarea 5 — Inventario"
    }
  },
  {
    "id": "py60",
    "topic": "clases",
    "type": "fill",
    "prompt": "Completa la llamada equivalente a teclado.vender(2): Producto.vender(___, 2)",
    "answers": [
      "teclado"
    ],
    "explain": "Al llamar mediante la clase, el objeto debe pasarse explícitamente como self.",
    "source": {
      "file": "U4_1_Clases_self_init.ipynb",
      "section": "Preguntas de reflexión"
    }
  },
  {
    "id": "py61",
    "topic": "atributos",
    "type": "mc",
    "prompt": "Si el contador empieza en 0 y se crean cuatro alumnos, ¿qué debe devolver Alumno.total()?",
    "options": [
      "4",
      "3",
      "0",
      "La matrícula del último alumno"
    ],
    "answerIndex": 0,
    "explain": "El contador de clase se incrementa una vez por cada instancia creada.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Tarea 1 — Contador de instancias"
    }
  },
  {
    "id": "py62",
    "topic": "atributos",
    "type": "mc",
    "prompt": "¿Qué imprime?\n\nclass Config:\n    tema = 'claro'\n    plugins = []\n    def __init__(self, usuario): self.usuario = usuario\na = Config('ana'); b = Config('beto')\na.tema = 'oscuro'\na.plugins.append('git')\nConfig.tema = 'azul'\nprint(a.tema, b.tema, Config.tema)\nprint(b.plugins)",
    "options": [
      "oscuro azul azul / ['git']",
      "azul azul azul / []",
      "oscuro claro azul / []",
      "oscuro azul azul / []"
    ],
    "answerIndex": 0,
    "explain": "a.tema oculta el atributo de clase solo en a; plugins sigue siendo la misma lista compartida.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Tarea 2 — Predice y explica"
    }
  },
  {
    "id": "py63",
    "topic": "atributos",
    "type": "mc",
    "prompt": "¿Qué valor Celsius crea Temperatura.desde_fahrenheit(68)?",
    "options": [
      "20.0",
      "36.0",
      "154.4",
      "-205.15"
    ],
    "answerIndex": 0,
    "explain": "La fórmula del ejercicio es (68 - 32) * 5/9 = 20 °C.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Tarea 3 — Constructores alternativos"
    }
  },
  {
    "id": "py64",
    "topic": "atributos",
    "type": "mc",
    "prompt": "¿Qué tres correcciones necesita la clase Sesion del ejercicio?",
    "options": [
      "Incrementar Sesion.abiertas; crear self.eventos = []; decorar desde_texto con @classmethod",
      "Usar self.abiertas; conservar eventos de clase; decorar desde_texto con @staticmethod",
      "Eliminar abiertas; usar una tupla compartida; agregar @property",
      "Convertir registrar en classmethod; usar cls.eventos; eliminar __init__"
    ],
    "answerIndex": 0,
    "explain": "El contador pertenece a la clase, cada sesión necesita su propia lista y desde_texto debe recibir cls.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Tarea 4 — Encuentra los errores"
    }
  },
  {
    "id": "py65",
    "topic": "atributos",
    "type": "vf",
    "prompt": "Si precio_para consulta Producto.DESCUENTO_MAYOREO, cambiarlo de 0.10 a 0.15 afecta también a los productos creados antes del cambio, salvo que una instancia lo haya ocultado.",
    "answer": true,
    "explain": "La lectura cae al atributo de clase compartido cuando no existe uno del mismo nombre en la instancia.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Tarea 5 — Catálogo desde archivo"
    }
  },
  {
    "id": "py66",
    "topic": "atributos",
    "type": "mc",
    "prompt": "Al evaluar obj.x, ¿en qué orden busca Python el atributo según el notebook?",
    "options": [
      "Primero en la instancia y después en la clase",
      "Primero en la clase y después en la instancia",
      "Solo en __init__",
      "Solo en el cuerpo de la clase"
    ],
    "answerIndex": 0,
    "explain": "La instancia tiene prioridad; si no define x, Python consulta la clase.",
    "source": {
      "file": "U4_2_Atributos_Instancia_vs_Clase.ipynb",
      "section": "Preguntas de reflexión"
    }
  }
];
