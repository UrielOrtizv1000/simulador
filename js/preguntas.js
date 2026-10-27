/*
  preguntas.js
  Current exam: Data Engineering — Distributed Databases.
  The 72 questions are based exclusively on the six supplied slide decks and
  their Markdown transcriptions. The interface and grading engine remain unchanged.
*/

var TOPICS = [
  {
    "id": "diseno",
    "name": "Diseño de bases de datos distribuidas",
    "short": "Diseño distribuido",
    "color": "--t-cia"
  },
  {
    "id": "fragmentacion",
    "name": "Fragmentación de datos",
    "short": "Fragmentación",
    "color": "--t-avr"
  },
  {
    "id": "asignacion",
    "name": "Asignación y distribución de fragmentos",
    "short": "Asignación",
    "color": "--t-ia"
  },
  {
    "id": "replicacion",
    "name": "Replicación de datos",
    "short": "Replicación",
    "color": "--t-hackers"
  },
  {
    "id": "fallos",
    "name": "Fallos y recuperación",
    "short": "Fallos y recuperación",
    "color": "--t-leyes"
  },
  {
    "id": "observabilidad",
    "name": "Operación y observabilidad",
    "short": "Observabilidad",
    "color": "--t-eh"
  }
];

var QUESTION_BANK = [
  {
    "id": "q1",
    "topic": "diseno",
    "type": "mc",
    "prompt": "¿Qué tipo de consulta representa el siguiente ejemplo del material?\n\nSELECT * FROM pedidos WHERE id = 1042;",
    "options": [
      "Point query",
      "Range query",
      "Join",
      "Agregación"
    ],
    "answerIndex": 0,
    "explain": "Es una point query porque accede a un pedido mediante una clave específica. El material indica que este acceso por clave es ideal para particionar por esa clave.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Formas de consulta que cambian el diseño"
    }
  },
  {
    "id": "q2",
    "topic": "diseno",
    "type": "mc",
    "prompt": "¿Qué patrón de consulta muestra este SELECT del material?\n\nSELECT * FROM pedidos WHERE fecha BETWEEN '2026-01-01' AND '2026-01-31';",
    "options": [
      "Agregación",
      "Point query",
      "Range query",
      "Join"
    ],
    "answerIndex": 2,
    "explain": "Es una range query porque filtra por un intervalo de fechas. Este patrón necesita datos ordenados o agrupados por rango.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Formas de consulta que cambian el diseño"
    }
  },
  {
    "id": "q3",
    "topic": "diseno",
    "type": "vf",
    "prompt": "Un requerimiento funcional describe qué debe hacer el sistema y puede verificarse mediante una prueba paso a paso.",
    "answer": true,
    "explain": "Los requerimientos funcionales expresan acciones, funciones o resultados concretos esperados, como registrar un pedido nuevo.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "¿Qué es un requerimiento funcional?"
    }
  },
  {
    "id": "q4",
    "topic": "diseno",
    "type": "match",
    "prompt": "Relaciona cada categoría de requerimiento no funcional con su descripción.",
    "pairs": [
      {
        "l": "Disponibilidad",
        "r": "El sistema sigue respondiendo aunque falle un nodo."
      },
      {
        "l": "Latencia",
        "r": "Es el tiempo de respuesta de una operación."
      },
      {
        "l": "Escalabilidad",
        "r": "Es la capacidad de crecer agregando nodos."
      },
      {
        "l": "Seguridad",
        "r": "Protege los datos y mantiene el acceso controlado."
      }
    ],
    "explain": "Estas cualidades describen cómo debe comportarse un sistema distribuido, no una acción de negocio que deba realizar.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Categorías clave de requerimientos no funcionales en sistemas distribuidos"
    }
  },
  {
    "id": "q5",
    "topic": "diseno",
    "type": "mc",
    "prompt": "En el sistema de banca móvil, ¿cuál de los siguientes es un requerimiento funcional?",
    "options": [
      "Las transferencias deben confirmarse en menos de 3 segundos.",
      "El sistema debe seguir funcionando si un centro de datos se cae.",
      "El sistema debe generar un comprobante en PDF.",
      "El sistema debe soportar 10 millones de usuarios activos."
    ],
    "answerIndex": 2,
    "explain": "Generar un comprobante en PDF indica qué acción debe realizar el sistema. Las otras opciones expresan latencia, tolerancia a fallos o escalabilidad.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Ejercicio: Sistema de banca móvil"
    }
  },
  {
    "id": "q6",
    "topic": "diseno",
    "type": "mc",
    "prompt": "Un sistema de reservas de asientos prefiere rechazar una operación antes que mostrar un dato desactualizado. ¿Qué elección de CAP coincide con el material?",
    "options": [
      "AP, porque prioriza responder siempre aunque el dato esté desactualizado.",
      "CP, porque prioriza la consistencia durante una partición.",
      "CA, porque elimina la posibilidad de una partición de red.",
      "Solo P, porque no necesita consistencia ni disponibilidad."
    ],
    "answerIndex": 1,
    "explain": "Las reservas de asientos aparecen como ejemplo de CP: se conserva la consistencia y se acepta rechazar una operación durante una partición.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "CAP en la práctica: ¿qué eliges?"
    }
  },
  {
    "id": "q7",
    "topic": "diseno",
    "type": "connect",
    "prompt": "Conecta cada patrón de acceso con el ejemplo y la orientación de diseño indicada en el material.",
    "pairs": [
      {
        "l": "Read-heavy",
        "r": "Catálogo de productos o feed de noticias; se optimiza para lecturas rápidas y se puede replicar mucho."
      },
      {
        "l": "Write-heavy",
        "r": "Registros de log o sensores IoT; se optimiza para ingesta rápida y se particiona por volumen de escritura."
      }
    ],
    "explain": "La proporción entre lecturas y escrituras es uno de los primeros datos que deben recolectarse para diseñar el sistema.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Patrones de acceso: lectura vs. escritura"
    }
  },
  {
    "id": "q8",
    "topic": "diseno",
    "type": "match",
    "prompt": "Relaciona cada carga de trabajo con sus características.",
    "pairs": [
      {
        "l": "OLTP",
        "r": "Opera el negocio en tiempo real con consultas frecuentes de pocas filas y un diseño típico normalizado y orientado a filas."
      },
      {
        "l": "OLAP",
        "r": "Analiza el negocio en el tiempo con muchas filas y agregaciones, usando un diseño típico desnormalizado y orientado a columnas."
      }
    ],
    "explain": "Registrar una venta es el ejemplo de OLTP; calcular las ventas totales del trimestre es el ejemplo de OLAP.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Dos cargas de trabajo: OLTP vs. OLAP"
    }
  },
  {
    "id": "q9",
    "topic": "diseno",
    "type": "fill",
    "prompt": "Si el 90% de las consultas filtran por `cliente_id`, la decisión indicada es particionar por ___.",
    "answers": [
      "cliente_id"
    ],
    "explain": "Particionar por cliente_id evita que la mayoría de esas consultas tenga que tocar varios nodos, siguiendo la regla de resolver el patrón más frecuente sin cruzar la red.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "De las consultas a las decisiones de diseño"
    }
  },
  {
    "id": "q10",
    "topic": "diseno",
    "type": "connect",
    "prompt": "Conecta cada propiedad ACID con su significado.",
    "pairs": [
      {
        "l": "Atomicidad",
        "r": "Todo o nada."
      },
      {
        "l": "Consistencia",
        "r": "El dato siempre cumple sus reglas."
      },
      {
        "l": "Aislamiento",
        "r": "Las transacciones concurrentes no se pisan."
      },
      {
        "l": "Durabilidad",
        "r": "Lo confirmado se queda confirmado."
      }
    ],
    "explain": "ACID resume Atomicidad, Consistencia, Aislamiento y Durabilidad.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Recordatorio rápido: propiedades ACID"
    }
  },
  {
    "id": "q11",
    "topic": "diseno",
    "type": "vf",
    "prompt": "Cuando una transacción distribuida involucra más nodos, coordinar que todos confirmen o todos cancelen se vuelve más difícil y lento; además, cada nodo adicional añade latencia y otro punto de falla.",
    "answer": true,
    "explain": "El material describe la coordinación prepare/commit y advierte que cada nodo adicional involucrado suma latencia y un punto de falla.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "El reto de las transacciones distribuidas"
    }
  },
  {
    "id": "q12",
    "topic": "diseno",
    "type": "open",
    "prompt": "En la plataforma de streaming del material, clasifica los requerimientos «reproducir un video», «buscar títulos por nombre o género», «el video debe iniciar en menos de 2 s» y «tolerar la caída de un centro de datos» como funcionales o no funcionales, y justifica la diferencia.",
    "model": "«Reproducir un video» y «buscar títulos por nombre o género» son requerimientos funcionales porque describen qué acciones debe realizar el sistema. «El video debe iniciar en menos de 2 s» y «tolerar la caída de un centro de datos» son no funcionales porque indican cómo debe comportarse: establecen una meta de latencia y una cualidad de tolerancia a fallos. Los funcionales se verifican con casos de prueba; los no funcionales se evalúan mediante métricas o condiciones de calidad.",
    "source": {
      "file": "1. diseno_bases_de_datos_distribuidas.md",
      "section": "Ejercicio / ejemplo: Plataforma de streaming de video"
    }
  },
  {
    "id": "q13",
    "topic": "fragmentacion",
    "type": "connect",
    "prompt": "Conecta cada propiedad de una fragmentación correcta con su descripción.",
    "pairs": [
      {
        "l": "Completitud",
        "r": "Todo dato de la tabla original aparece en algún fragmento; no se pierde nada."
      },
      {
        "l": "Reconstrucción",
        "r": "La tabla original puede volver a formarse a partir de los fragmentos mediante UNIÓN o JOIN."
      },
      {
        "l": "Disjunción",
        "r": "Un dato no se repite en varios fragmentos, excepto la llave primaria en la fragmentación vertical."
      }
    ],
    "explain": "Una fragmentación correcta debe cumplir completitud, reconstrucción y disjunción.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Reglas para una fragmentación correcta"
    }
  },
  {
    "id": "q14",
    "topic": "fragmentacion",
    "type": "mc",
    "prompt": "¿Qué nivel de granularidad recomienda el material como punto de equilibrio?",
    "options": [
      "La relación completa sin fragmentar",
      "Grupos de filas o columnas según su uso",
      "Cada tupla o atributo por separado",
      "Una copia completa en cada sitio"
    ],
    "answerIndex": 1,
    "explain": "La granularidad intermedia evita tanto el poco paralelismo de la relación completa como el alto costo de manejar piezas demasiado pequeñas.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Granularidad de la fragmentación"
    }
  },
  {
    "id": "q15",
    "topic": "fragmentacion",
    "type": "vf",
    "prompt": "En una fragmentación horizontal, cada fragmento conserva todas las columnas y contiene solo algunas filas seleccionadas mediante una condición.",
    "answer": true,
    "explain": "La fragmentación horizontal divide una relación por filas o tuplas.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Fragmentación horizontal"
    }
  },
  {
    "id": "q16",
    "topic": "fragmentacion",
    "type": "mc",
    "prompt": "EMP_AGS contiene a Ana López y María Ruiz porque ambas pertenecen a la sucursal Aguascalientes. ¿Qué tipo de fragmentación representa?",
    "options": [
      "Horizontal primaria",
      "Horizontal derivada",
      "Vertical",
      "Mixta"
    ],
    "answerIndex": 0,
    "explain": "La condición se aplica directamente sobre el atributo sucursal de la propia tabla EMPLEADO.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Fragmentación horizontal"
    }
  },
  {
    "id": "q17",
    "topic": "fragmentacion",
    "type": "fill",
    "prompt": "La fragmentación horizontal basada en la fragmentación de otra tabla relacionada mediante una llave foránea se denomina horizontal ___.",
    "answers": [
      "derivada"
    ],
    "explain": "La fragmentación horizontal derivada depende de otra tabla relacionada; el material usa el ejemplo de VENTAS y EMP_AGS.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Tipos y reconstrucción (horizontal)"
    }
  },
  {
    "id": "q18",
    "topic": "fragmentacion",
    "type": "match",
    "prompt": "Relaciona cada forma de fragmentación con su operación de creación y reconstrucción.",
    "pairs": [
      {
        "l": "Horizontal",
        "r": "Se crea con selección y se reconstruye con UNIÓN."
      },
      {
        "l": "Vertical",
        "r": "Se crea con proyección y se reconstruye con JOIN por la llave primaria."
      }
    ],
    "explain": "La horizontal separa filas; la vertical separa columnas.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Horizontal vs. vertical"
    }
  },
  {
    "id": "q19",
    "topic": "fragmentacion",
    "type": "vf",
    "prompt": "En la fragmentación vertical, la llave primaria debe aparecer en todos los fragmentos para poder reconstruir correctamente las filas.",
    "answer": true,
    "explain": "La llave primaria permite unir otra vez los grupos de columnas mediante JOIN.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "¿Cuándo usarla y cómo se reconstruye? (vertical)"
    }
  },
  {
    "id": "q20",
    "topic": "fragmentacion",
    "type": "mc",
    "prompt": "¿Qué diseño vertical del ejemplo separa el salario para que únicamente Recursos Humanos tenga acceso?",
    "options": [
      "EMP_GRAL(id, nombre, puesto) y EMP_NOMINA(id, salario, sucursal)",
      "EMP_AGS y EMP_ZAC",
      "Un fragmento por empleado",
      "Una copia completa para cada área"
    ],
    "answerIndex": 0,
    "explain": "EMP_GRAL conserva los datos generales y EMP_NOMINA aísla los datos de nómina; ambos incluyen id.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Fragmentación vertical"
    }
  },
  {
    "id": "q21",
    "topic": "fragmentacion",
    "type": "open",
    "prompt": "Para ALUMNO(matrícula, nombre, carrera, campus, promedio, dirección, teléfono), propón la fragmentación horizontal planteada en la actividad e indica cómo se reconstruye la tabla.",
    "model": "Se crea un fragmento por campus mediante una condición sobre el atributo campus. Es horizontal primaria y la tabla se reconstruye mediante la UNIÓN de todos los fragmentos.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Actividad"
    }
  },
  {
    "id": "q22",
    "topic": "fragmentacion",
    "type": "open",
    "prompt": "Para la relación ALUMNO, explica la fragmentación vertical planteada en la actividad y cómo se reconstruye.",
    "model": "Se crea un fragmento académico con matrícula, nombre, carrera, campus y promedio, y otro de contacto con matrícula, dirección y teléfono. La matrícula aparece en ambos y la tabla se reconstruye con un JOIN por matrícula.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Actividad"
    }
  },
  {
    "id": "q23",
    "topic": "fragmentacion",
    "type": "vf",
    "prompt": "La fragmentación mixta combina fragmentación horizontal y vertical, sin importar cuál se aplique primero.",
    "answer": true,
    "explain": "El material define la mixta como una combinación de ambas estrategias.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Actividad"
    }
  },
  {
    "id": "q24",
    "topic": "fragmentacion",
    "type": "mc",
    "prompt": "Si EMP_AGS y EMP_ZAC son fragmentos horizontales de EMPLEADO, ¿qué operación reconstruye la relación original?",
    "options": [
      "EMPLEADO = EMP_AGS ∪ EMP_ZAC",
      "EMPLEADO = EMP_AGS ⋈ EMP_ZAC",
      "EMPLEADO = EMP_AGS − EMP_ZAC",
      "EMPLEADO = π id (EMP_AGS)"
    ],
    "answerIndex": 0,
    "explain": "Los fragmentos horizontales tienen las mismas columnas y diferentes filas, por lo que se reconstruyen mediante UNIÓN.",
    "source": {
      "file": "2. fragmentacion_de_datos.md",
      "section": "Tipos y reconstrucción (horizontal)"
    }
  },
  {
    "id": "q25",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "¿Cuál enunciado distingue correctamente la fragmentación de la asignación?",
    "options": [
      "Fragmentar decide cómo dividir una tabla; asignar decide en qué sitios guardar cada fragmento y cuántas copias hacer.",
      "Fragmentar decide cuántas copias crear; asignar decide qué columnas forman la llave primaria.",
      "Fragmentar y asignar son dos nombres para decidir en qué servidor guardar la base completa.",
      "Fragmentar elige el costo de red; asignar divide exclusivamente por filas."
    ],
    "answerIndex": 0,
    "explain": "La fragmentación define cómo se divide una tabla —por filas, columnas o ambas—; la asignación determina dónde vive cada fragmento y si tendrá copias.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "De fragmentar a asignar"
    }
  },
  {
    "id": "q26",
    "topic": "asignacion",
    "type": "match",
    "prompt": "Relaciona cada forma de asignación con su característica principal.",
    "pairs": [
      {
        "l": "Centralizada",
        "r": "Toda la base de datos vive en un solo sitio y los demás consultan por red."
      },
      {
        "l": "Particionada",
        "r": "Cada fragmento vive en un solo sitio, sin copias."
      },
      {
        "l": "Replicada completa",
        "r": "Todos los fragmentos tienen copia en todos los sitios."
      },
      {
        "l": "Replicada parcial",
        "r": "Solo algunos fragmentos tienen copias en varios sitios."
      }
    ],
    "explain": "Las formas se diferencian por el número de sitios que guardan los datos y por si existen copias de los fragmentos.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Tres formas de asignar fragmentos"
    }
  },
  {
    "id": "q27",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "Si el servidor de Aguascalientes estará apagado durante tres horas y la prioridad es mantener la operación en los otros sitios, ¿qué diseño ofrece mayor disponibilidad?",
    "options": [
      "Toda la base de datos únicamente en Aguascalientes.",
      "Cada sucursal guarda únicamente su propio fragmento, sin copias.",
      "Cada sucursal conserva una copia de todos los fragmentos.",
      "Eliminar temporalmente el directorio de fragmentos."
    ],
    "answerIndex": 2,
    "explain": "La replicación completa permite que Zacatecas y Jalisco sigan accediendo a todos los fragmentos si cae Aguascalientes, aunque aumenta el almacenamiento y el costo de actualizar copias.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Pregunta detonadora"
    }
  },
  {
    "id": "q28",
    "topic": "asignacion",
    "type": "vf",
    "prompt": "La replicación completa obtiene la mejor valoración en lecturas locales y disponibilidad, pero la peor en facilidad para actualizar y ahorro de almacenamiento.",
    "answer": true,
    "explain": "La comparativa le asigna 3/3 en lecturas locales y disponibilidad, y 1/3 en facilidad para actualizar y ahorro de almacenamiento.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Comparativa: ¿cuál conviene?"
    }
  },
  {
    "id": "q29",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "CAT_PUESTOS se consulta 3,000 veces al día y cambia una vez al mes. ¿Qué decisión sigue la regla práctica del material?",
    "options": [
      "Replicarlo, porque predominan ampliamente las lecturas sobre las actualizaciones.",
      "Mantenerlo en una sola copia, porque cualquier lectura hace costosa la replicación.",
      "Dividirlo verticalmente, porque todos los catálogos deben separar sus columnas.",
      "Moverlo cada día al sitio que haya realizado la última actualización."
    ],
    "answerIndex": 0,
    "explain": "Cuando un fragmento se lee muchas veces y se actualiza poco, replicarlo favorece las lecturas locales sin imponer demasiada coordinación de cambios.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Regla práctica: ¿replicar o no?"
    }
  },
  {
    "id": "q30",
    "topic": "asignacion",
    "type": "fill",
    "prompt": "El directorio de fragmentos permite consultar EMPLEADO sin conocer el sitio de cada parte; esta propiedad se llama transparencia de ___.",
    "answers": [
      "ubicacion",
      "ubicación"
    ],
    "explain": "El directorio funciona como catálogo global y oculta al usuario la ubicación física de los fragmentos.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "¿Qué es el directorio de fragmentos?"
    }
  },
  {
    "id": "q31",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "Un usuario ubicado en Zacatecas solicita la lista de empleados de Jalisco. Según el directorio del ejemplo, ¿qué fragmento y tipo de acceso corresponden?",
    "options": [
      "EMP_ZAC en S2 Zacatecas; acceso local.",
      "EMP_JAL en S3 Jalisco; acceso remoto.",
      "EMP_NOMINA en S1 Aguascalientes; acceso remoto.",
      "CAT_PUESTOS en S2 Zacatecas; acceso local."
    ],
    "answerIndex": 1,
    "explain": "La lista de empleados de Jalisco está en EMP_JAL, asignado a S3 Jalisco. Como la solicitud nace en Zacatecas, el acceso es remoto.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Actividad: encuentra el fragmento"
    }
  },
  {
    "id": "q32",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "¿Qué alternativa para guardar el directorio ofrece búsquedas locales y rápidas, pero obliga a copiar cada cambio de diseño a todos los sitios?",
    "options": [
      "Directorio centralizado.",
      "Directorio replicado.",
      "Directorio distribuido con nivel local y global.",
      "Directorio particionado sin nivel global."
    ],
    "answerIndex": 1,
    "explain": "En un directorio replicado, cada sitio conserva una copia completa: las búsquedas son locales, pero cualquier cambio debe propagarse a todas las copias.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "¿Dónde se guarda el directorio?"
    }
  },
  {
    "id": "q33",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "EMP_NOMINA recibe 120 lecturas y 30 actualizaciones desde Aguascalientes, 15 lecturas desde Zacatecas y 20 desde Jalisco. Si existe una sola copia en Aguascalientes y cada acceso remoto cuesta un mensaje, ¿cuántos mensajes de red se generan al día?",
    "options": [
      "30 mensajes.",
      "35 mensajes.",
      "60 mensajes.",
      "170 mensajes."
    ],
    "answerIndex": 1,
    "explain": "Los accesos de Aguascalientes son locales. Solo viajan por red las 15 lecturas de Zacatecas y las 20 de Jalisco: 15 + 20 = 35 mensajes diarios.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Solución: EMP_NOMINA"
    }
  },
  {
    "id": "q34",
    "topic": "asignacion",
    "type": "mc",
    "prompt": "Si EMP_NOMINA tiene una copia en cada uno de los tres sitios y sus 30 actualizaciones diarias se originan en Aguascalientes, ¿cuántos mensajes se requieren para actualizar las otras copias?",
    "options": [
      "30 mensajes.",
      "35 mensajes.",
      "60 mensajes.",
      "90 mensajes."
    ],
    "answerIndex": 2,
    "explain": "Cada una de las 30 actualizaciones se envía a las otras dos réplicas: 30 × 2 = 60 mensajes diarios.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Solución: EMP_NOMINA"
    }
  },
  {
    "id": "q35",
    "topic": "asignacion",
    "type": "open",
    "prompt": "Aguascalientes tiene 110% de carga, Zacatecas 35% y Jalisco 45%. Explica el efecto cuantitativo y el costo de mover EMP_NOMINA, que genera 35% de carga, de Aguascalientes a Zacatecas.",
    "model": "Aguascalientes baja de 110% a 75% y Zacatecas sube de 35% a 70%; Jalisco permanece en 45%. Ningún sitio supera el 100% y la carga máxima baja de 110% a 75%. El costo es perder localidad: Recursos Humanos está en Aguascalientes y ahora debe consultar EMP_NOMINA por la red.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Una solución: mover EMP_NOMINA a Zacatecas"
    }
  },
  {
    "id": "q36",
    "topic": "asignacion",
    "type": "open",
    "prompt": "Un fragmento grande provoca un punto caliente y su patrón de uso cambia con el tiempo. Propón dos estrategias de balanceo del material y explica brevemente cómo ayudaría cada una.",
    "model": "Una respuesta válida puede proponer, por ejemplo: dividir el fragmento grande en partes más pequeñas para repartir su carga entre varios sitios; y monitorear y rebalancear periódicamente para adaptar la asignación cuando cambie el uso. También son válidas, si se justifican, mover el fragmento a un sitio con capacidad libre o replicar un fragmento muy leído para repartir sus lecturas.",
    "source": {
      "file": "3. asignacion_distribucion_fragmentos.md",
      "section": "Estrategias para balancear"
    }
  },
  {
    "id": "q37",
    "topic": "replicacion",
    "type": "mc",
    "prompt": "¿Cuáles son las tres razones principales para replicar datos?",
    "options": [
      "Disponibilidad, menor latencia y escalabilidad de lecturas",
      "Normalización, cifrado y compresión",
      "Respaldo histórico, auditoría y eliminación de conflictos",
      "Menor uso de disco, escrituras sin tráfico y consistencia gratuita"
    ],
    "answerIndex": 0,
    "explain": "La replicación mejora la disponibilidad al conservar copias operativas, reduce la latencia al acercar datos a los usuarios y permite repartir lecturas entre réplicas. Su costo es mantener las copias sincronizadas.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "¿Por qué replicar?"
    }
  },
  {
    "id": "q38",
    "topic": "replicacion",
    "type": "match",
    "prompt": "Relaciona cada estrategia con su propósito.",
    "pairs": [
      {
        "l": "Réplica",
        "r": "Copia viva sincronizada"
      },
      {
        "l": "Respaldo",
        "r": "Fotografía estática histórica"
      },
      {
        "l": "Caché",
        "r": "Almacenamiento temporal rápido"
      }
    ],
    "explain": "Una réplica participa como copia activa y sincronizada; un respaldo conserva un estado histórico; una caché guarda temporalmente datos para acelerar el acceso.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Conceptos fundamentales"
    }
  },
  {
    "id": "q39",
    "topic": "replicacion",
    "type": "mc",
    "prompt": "¿Qué comparación entre replicación completa y parcial coincide con el material?",
    "options": [
      "La completa guarda toda la base en cada nodo; la parcial conserva solo fragmentos estratégicos",
      "La completa usa menos disco que la parcial",
      "La parcial elimina la necesidad de enrutar consultas",
      "La completa evita toda sincronización de escrituras"
    ],
    "answerIndex": 0,
    "explain": "La replicación completa ofrece lecturas locales, pero maximiza el consumo de disco y hace costosa la sincronización. La parcial ahorra disco, aunque exige un enrutamiento de consultas más complejo.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Replicación completa vs. parcial"
    }
  },
  {
    "id": "q40",
    "topic": "replicacion",
    "type": "vf",
    "prompt": "En el modelo primario-secundario, el líder concentra las escrituras y puede convertirse en un cuello de botella, mientras las réplicas también pueden atender lecturas.",
    "answer": true,
    "explain": "El líder recibe las escrituras y las propaga; todos los nodos pueden leer. Concentrar todas las escrituras en el líder crea un posible cuello de botella.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Modelo primario - secundario (líder - seguidores)"
    }
  },
  {
    "id": "q41",
    "topic": "replicacion",
    "type": "connect",
    "prompt": "Conecta cada modalidad de replicación con su comportamiento característico.",
    "pairs": [
      {
        "l": "Síncrona",
        "r": "El líder confirma solo después de que las réplicas aplican la escritura; aumenta la latencia y una réplica lenta puede bloquear"
      },
      {
        "l": "Asíncrona",
        "r": "El líder confirma de inmediato y propaga después; reduce la latencia, pero puede perder escrituras confirmadas y producir lecturas obsoletas"
      }
    ],
    "explain": "La modalidad síncrona prioriza que las escrituras confirmadas estén aplicadas y las réplicas al día; la asíncrona prioriza baja latencia y tolerancia a réplicas lentas o lejanas.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Replicación síncrona vs. asíncrona"
    }
  },
  {
    "id": "q42",
    "topic": "replicacion",
    "type": "mc",
    "prompt": "¿Qué conjunto de características describe la replicación sin líder?",
    "options": [
      "Cualquier nodo acepta escrituras, no hay un punto único de fallo y se necesitan resolución de conflictos y read repair",
      "Solo un nodo acepta escrituras y todas las lecturas deben pasar por él",
      "No existen conflictos porque cada dato se almacena en un único nodo",
      "Las réplicas nunca se sincronizan durante las lecturas"
    ],
    "answerIndex": 0,
    "explain": "En un esquema sin líder cualquier nodo puede aceptar escrituras. Esto evita un punto único de fallo, pero obliga a resolver conflictos y permite reparar divergencias mediante sincronización en lectura.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Replicación sin líder"
    }
  },
  {
    "id": "q43",
    "topic": "replicacion",
    "type": "fill",
    "prompt": "Completa la condición de quórum que garantiza el solapamiento entre lectura y escritura: W + R ___ N.",
    "answers": [
      ">",
      "mayor que"
    ],
    "explain": "La condición central es W + R > N. W es el número de nodos necesarios para confirmar una escritura, R los consultados al leer y N el total de réplicas.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Fórmula central"
    }
  },
  {
    "id": "q44",
    "topic": "replicacion",
    "type": "mc",
    "prompt": "En un clúster con N = 5, W = 3 y R = 3, ¿cuál es el solapamiento mínimo entre los conjuntos de escritura y lectura?",
    "options": [
      "1 nodo",
      "0 nodos",
      "2 nodos",
      "3 nodos"
    ],
    "answerIndex": 0,
    "explain": "El número de nodos en común es W + R − N: 3 + 3 − 5 = 1. Ese solapamiento permite que la lectura encuentre al menos un nodo que recibió la última escritura.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "El principio del solapamiento"
    }
  },
  {
    "id": "q45",
    "topic": "replicacion",
    "type": "match",
    "prompt": "Para un clúster de N = 5, relaciona cada perfil con sus valores de W y R.",
    "pairs": [
      {
        "l": "Lecturas rápidas",
        "r": "W = 5, R = 1"
      },
      {
        "l": "Escrituras rápidas",
        "r": "W = 1, R = 5"
      },
      {
        "l": "Quórum de mayoría",
        "r": "W = 3, R = 3"
      },
      {
        "l": "Consistencia eventual sin garantía de solapamiento",
        "r": "W = 1, R = 1"
      }
    ],
    "explain": "Con N = 5, los tres primeros perfiles satisfacen W + R > N. W = 1 y R = 1 tolera muchos nodos caídos, pero no garantiza que lectura y escritura se crucen.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Ajustando W y R"
    }
  },
  {
    "id": "q46",
    "topic": "replicacion",
    "type": "mc",
    "prompt": "Con N = 9 y quórum de mayoría, ¿qué valores corresponden a W y R y cuántos fallos se toleran?",
    "options": [
      "W = 5, R = 5; se toleran 4 fallos",
      "W = 4, R = 4; se toleran 5 fallos",
      "W = 9, R = 1; se toleran 8 fallos de escritura",
      "W = 1, R = 1; se toleran 8 fallos con lectura estricta garantizada"
    ],
    "answerIndex": 0,
    "explain": "En mayoría, W = R = ⌊N/2⌋ + 1. Para N = 9, ambos valen 5 y se toleran ⌊(N − 1)/2⌋ = 4 fallos.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Ajustando W y R"
    }
  },
  {
    "id": "q47",
    "topic": "replicacion",
    "type": "open",
    "prompt": "Un banco usa N = 7, W = 4 y R = 5. La escritura de $500 quedó en N1, N2, N3 y N4; la lectura consulta N3, N4, N5, N6 y N7. Explica el solapamiento, cuántas respuestas devuelven $500 y $100, y qué saldo debe mostrarse.",
    "model": "El solapamiento es W + R − N = 4 + 5 − 7 = 2 nodos: N3 y N4. Esos dos nodos devuelven $500; N5, N6 y N7 devuelven $100. El sistema debe mostrar $500 porque el quórum garantiza que la lectura encuentre al menos una copia con la versión más reciente y se selecciona la respuesta con mayor versión o marca de tiempo, no la que obtenga más votos.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Ejercicio 1: El principio del solapamiento"
    }
  },
  {
    "id": "q48",
    "topic": "replicacion",
    "type": "open",
    "prompt": "Explica por qué cumplir W + R > N no basta para resolver todos los problemas de una base de datos replicada. Menciona los tres límites descritos en el material.",
    "model": "La desigualdad garantiza solapamiento, pero no resuelve todo. Primero, un quórum laxo puede escribir en nodos no oficiales mediante hinted handoff y perder temporalmente esa garantía. Segundo, el quórum no ordena escrituras concurrentes, por lo que todavía se requieren mecanismos como last write wins, vectores de versión o fusión. Tercero, una escritura que no alcanzó W puede haber quedado en algunas réplicas y aparecer en lecturas posteriores. Además, el quórum no equivale por sí solo a linealizabilidad estricta.",
    "source": {
      "file": "4. replicacion_de_datos.md",
      "section": "Límites del quórum"
    }
  },
  {
    "id": "q49",
    "topic": "fallos",
    "type": "mc",
    "prompt": "Un secundario deja de recibir latidos del primario. Según el ejemplo del material, ¿cada cuánto se envían los latidos y cuánto espera antes de considerar caído al primario?",
    "options": [
      "Cada 2 segundos; espera 10 segundos",
      "Cada 10 segundos; espera 2 segundos",
      "Cada 4 segundos; espera 14 segundos",
      "Cada 1 segundo; espera 5 segundos"
    ],
    "answerIndex": 0,
    "explain": "El ejemplo usa heartbeats cada 2 segundos y un tiempo de espera de 10 segundos.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "Paso 0: detectar que el primario cayó"
    }
  },
  {
    "id": "q50",
    "topic": "fallos",
    "type": "vf",
    "prompt": "Un nodo lento puede responder tan tarde que los demás nodos crean que está caído.",
    "answer": true,
    "explain": "El material distingue una caída real de un nodo que sigue vivo pero responde fuera del tiempo esperado.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "¿Qué puede fallar?"
    }
  },
  {
    "id": "q51",
    "topic": "fallos",
    "type": "connect",
    "prompt": "Conecta cada paso de la elección con su descripción.",
    "pairs": [
      {
        "l": "Detección",
        "r": "Un secundario deja de recibir latidos del primario."
      },
      {
        "l": "Candidatura",
        "r": "El candidato aumenta el término y se postula."
      },
      {
        "l": "Votación",
        "r": "Los nodos emiten sus votos durante la ronda."
      },
      {
        "l": "Nuevo primario",
        "r": "El ganador obtiene la mayoría y avisa a los demás."
      }
    ],
    "explain": "La elección comienza cuando se detecta la pérdida del primario y termina cuando un candidato reúne la mayoría.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "La elección, paso a paso"
    }
  },
  {
    "id": "q52",
    "topic": "fallos",
    "type": "mc",
    "prompt": "El nodo B tiene las operaciones 1 a 8 y el nodo C solo las operaciones 1 a 6. Si B se postula, ¿por quién vota C según el criterio del material?",
    "options": [
      "Por B, porque tiene datos más recientes",
      "Por sí mismo en todos los casos",
      "Por el nodo con menos operaciones",
      "No puede votar durante una elección"
    ],
    "answerIndex": 0,
    "explain": "Para evitar perder operaciones, los nodos favorecen a un candidato suficientemente actualizado.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "¿Qué nodo puede ganar?"
    }
  },
  {
    "id": "q53",
    "topic": "fallos",
    "type": "fill",
    "prompt": "Para convertirse en nuevo primario, un candidato necesita obtener ___ de los votos.",
    "answers": [
      "más de la mitad",
      "mas de la mitad",
      "la mayoría",
      "la mayoria"
    ],
    "explain": "El candidato debe reunir una mayoría del conjunto para asumir el rol de primario.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "La elección, paso a paso"
    }
  },
  {
    "id": "q54",
    "topic": "fallos",
    "type": "open",
    "prompt": "¿Qué es el oplog y cómo lo utilizan los nodos secundarios para mantenerse al día?",
    "model": "Es la bitácora ordenada en la que el primario registra cada cambio. Los secundarios leen sus entradas y aplican los mismos cambios en el mismo orden; si están atrasados, copian las entradas que les faltan.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "El registro de operaciones (oplog)"
    }
  },
  {
    "id": "q55",
    "topic": "fallos",
    "type": "match",
    "prompt": "Relaciona cada situación con la forma de sincronización correspondiente.",
    "pairs": [
      {
        "l": "Nodo nuevo y vacío",
        "r": "Sincronización inicial."
      },
      {
        "l": "El oplog ya eliminó las operaciones que faltan",
        "r": "Sincronización inicial."
      },
      {
        "l": "Secundario casi al día durante la operación normal",
        "r": "Sincronización incremental o continua."
      },
      {
        "l": "Nodo que regresa después de una caída breve",
        "r": "Sincronización incremental o continua."
      }
    ],
    "explain": "La sincronización inicial copia todo el estado; la incremental aplica únicamente operaciones recientes.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "Dos formas de sincronizar"
    }
  },
  {
    "id": "q56",
    "topic": "fallos",
    "type": "mc",
    "prompt": "Una aplicación recibe confirmación con w: 1 y el primario falla antes de que un secundario copie la escritura. ¿Qué puede ocurrir según el material?",
    "options": [
      "La escritura puede perderse",
      "La escritura necesariamente sobrevive",
      "No se necesita una elección",
      "Todos los nodos eliminan su oplog"
    ],
    "answerIndex": 0,
    "explain": "Con w: 1 el primario responde sin esperar una copia; si falla antes de replicar, la escritura confirmada puede desaparecer.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "¿Cuándo es segura una escritura?"
    }
  },
  {
    "id": "q57",
    "topic": "fallos",
    "type": "vf",
    "prompt": "La confirmación por mayoría es más lenta que w: 1, pero busca que el dato sobreviva aunque caiga el primario.",
    "answer": true,
    "explain": "Esperar a la mayoría aumenta la latencia, pero reduce el riesgo de perder una escritura confirmada.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "¿Cuándo es segura una escritura?"
    }
  },
  {
    "id": "q58",
    "topic": "fallos",
    "type": "open",
    "prompt": "El antiguo primario A regresa con una operación 5 que ningún secundario copió, mientras el nuevo primario B ya replicó una operación distinta 5'. ¿Qué hace A al reintegrarse y por qué?",
    "model": "A deshace mediante rollback su operación 5, porque no estaba en la historia confirmada por la mayoría, y copia la operación 5' del nuevo primario B.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "Cuando el primario anterior regresa"
    }
  },
  {
    "id": "q59",
    "topic": "fallos",
    "type": "mc",
    "prompt": "Un clúster de cinco nodos queda dividido en un grupo de tres y otro de dos. ¿Qué comportamiento se espera?",
    "options": [
      "El grupo de tres elige primario y acepta escrituras; el de dos no puede reunir mayoría",
      "Ambos grupos aceptan escrituras con autoridad",
      "El grupo de dos tiene prioridad por conservar al líder anterior",
      "Ningún grupo puede elegir primario"
    ],
    "answerIndex": 0,
    "explain": "Solo el lado con tres de cinco nodos conserva la mayoría necesaria para elegir primario.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "Prueba 2: partición de red"
    }
  },
  {
    "id": "q60",
    "topic": "fallos",
    "type": "match",
    "prompt": "Relaciona cada métrica de una prueba de recuperación con lo que mide.",
    "pairs": [
      {
        "l": "Tiempo de detección",
        "r": "Cuánto tarda el clúster en notar que un nodo falló."
      },
      {
        "l": "Tiempo de elección",
        "r": "Tiempo hasta que existe un nuevo primario."
      },
      {
        "l": "Escrituras perdidas",
        "r": "Datos confirmados antes de la falla que ya no aparecen."
      },
      {
        "l": "Tiempo de recuperación",
        "r": "Cuánto tarda el nodo que regresa en ponerse al día."
      }
    ],
    "explain": "Estas métricas permiten evaluar el comportamiento del sistema ante fallos y reintegraciones.",
    "source": {
      "file": "5. fallos_y_recuperacion.md",
      "section": "¿Qué medir en cada prueba?"
    }
  },
  {
    "id": "q61",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "¿Qué concepto responde principalmente a la pregunta «¿por qué falla?» y permite investigar problemas nuevos mediante métricas, logs y trazas?",
    "options": [
      "Monitoreo",
      "Observabilidad",
      "Auditoría",
      "Disponibilidad"
    ],
    "answerIndex": 1,
    "explain": "La observabilidad ayuda a investigar la causa de fallos nuevos mediante métricas, logs y trazas. El monitoreo responde si el sistema funciona y la auditoría registra quién hizo qué.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Monitoreo, observabilidad y auditoría (tema a)"
    }
  },
  {
    "id": "q62",
    "topic": "observabilidad",
    "type": "match",
    "prompt": "Relaciona cada señal de observabilidad con la información que aporta.",
    "pairs": [
      {
        "l": "Métricas",
        "r": "Números medidos a lo largo del tiempo, como CPU o consultas por segundo."
      },
      {
        "l": "Logs",
        "r": "Mensajes de eventos que indican qué pasó, cuándo y con qué detalle."
      },
      {
        "l": "Trazas",
        "r": "Recorrido paso a paso de una petición por la aplicación, el proxy y la base de datos."
      }
    ],
    "explain": "Las métricas muestran tendencias numéricas, los logs describen eventos concretos y las trazas permiten seguir una petición entre componentes.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Las tres señales de la observabilidad"
    }
  },
  {
    "id": "q63",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "Después de reiniciarse, un servicio responde al chequeo de liveness, pero todavía está recuperando datos y no puede aceptar consultas. ¿Cómo debe interpretarse su estado?",
    "options": [
      "Está vivo y listo",
      "Está vivo, pero no listo",
      "Está caído porque no ha enviado métricas",
      "Está listo, pero no vivo"
    ],
    "answerIndex": 1,
    "explain": "Liveness indica si el proceso está vivo; readiness indica si ya puede recibir consultas. Durante una recuperación, un servicio puede estar vivo pero no listo.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "¿Cómo sabemos que un nodo vive?"
    }
  },
  {
    "id": "q64",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "Una base de datos funciona 718 horas de un mes de 720 horas. ¿Cuál es su disponibilidad aproximada?",
    "options": [
      "97.20 %",
      "99.00 %",
      "99.72 %",
      "99.90 %"
    ],
    "answerIndex": 2,
    "explain": "La disponibilidad se calcula como tiempo funcionando dividido entre tiempo total: 718 ÷ 720 ≈ 0.9972, es decir, 99.72 %.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Disponibilidad y tiempo de actividad (tema c)"
    }
  },
  {
    "id": "q65",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "En un año se registran 3 caídas y 45 minutos de tiempo caído total. ¿Cuál es el MTTR?",
    "options": [
      "3 minutos",
      "15 minutos",
      "45 minutos",
      "135 minutos"
    ],
    "answerIndex": 1,
    "explain": "MTTR = tiempo caído ÷ número de fallas. Por tanto, 45 ÷ 3 = 15 minutos. La meta operativa es que el MTTR sea bajo.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Cada cuánto falla y qué tan rápido se repara (MTBF y MTTR)"
    }
  },
  {
    "id": "q66",
    "topic": "observabilidad",
    "type": "vf",
    "prompt": "Una CPU por encima de 80 % durante cinco minutos es una señal de alerta, mientras que en memoria una señal importante es que el sistema empiece a usar swap.",
    "answer": true,
    "explain": "El material fija como alerta de CPU superar 80 % durante cinco minutos y señala el uso de swap como indicio de presión de memoria.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Uso de CPU, memoria, disco y red (tema d)"
    }
  },
  {
    "id": "q67",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "Un pool admite como máximo 20 conexiones y tiene 17 conexiones activas. ¿Cuál es su saturación y qué indica el umbral del material?",
    "options": [
      "17 %; está muy por debajo de la alerta",
      "80 %; apenas llega al umbral, pero no lo supera",
      "85 %; supera el nivel de alerta",
      "117.6 %; el máximo se calcula dividiendo máximo entre activas"
    ],
    "answerIndex": 2,
    "explain": "Saturación = activas ÷ máximo. Así, 17 ÷ 20 = 0.85 = 85 %, valor superior al umbral de alerta de 80 %.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Conexiones activas y saturación del pool (tema e)"
    }
  },
  {
    "id": "q68",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "En 60 segundos una base de datos procesa 72 000 operaciones. ¿Cuál es su tasa de operaciones?",
    "options": [
      "120 ops/s",
      "1 200 ops/s",
      "4 320 ops/s",
      "72 000 ops/s"
    ],
    "answerIndex": 1,
    "explain": "La tasa se calcula como operaciones ÷ segundos: 72 000 ÷ 60 = 1 200 operaciones por segundo.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Operaciones por segundo, latencia y errores (tema f)"
    }
  },
  {
    "id": "q69",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "¿Por qué un SLA de latencia debe expresarse con P95 o P99 en lugar de depender solo del promedio?",
    "options": [
      "Porque los percentiles eliminan automáticamente todas las consultas lentas",
      "Porque el promedio siempre coincide con la consulta más lenta",
      "Porque los percentiles revelan la cola de consultas lentas que el promedio puede ocultar",
      "Porque P95 y P99 miden únicamente el porcentaje de errores"
    ],
    "answerIndex": 2,
    "explain": "Unas pocas consultas muy lentas pueden quedar ocultas por muchas rápidas y producir un promedio poco representativo. P95 y P99 muestran mejor la experiencia de la cola lenta.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Latencia: por qué usar percentiles"
    }
  },
  {
    "id": "q70",
    "topic": "observabilidad",
    "type": "mc",
    "prompt": "Un almacenamiento de 1 000 GB tiene 640 GB usados y crece 40 GB al mes. ¿En cuántos meses alcanzará el umbral de alerta del 80 %?",
    "options": [
      "4 meses",
      "6 meses",
      "8 meses",
      "9 meses"
    ],
    "answerIndex": 0,
    "explain": "El 80 % de 1 000 GB es 800 GB. Faltan 800 − 640 = 160 GB para la alerta; a 40 GB por mes, 160 ÷ 40 = 4 meses.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Capacidad y crecimiento del almacenamiento"
    }
  },
  {
    "id": "q71",
    "topic": "observabilidad",
    "type": "match",
    "prompt": "Relaciona cada componente del uso de disco con su descripción.",
    "pairs": [
      {
        "l": "Datos",
        "r": "Filas nuevas de ventas, usuarios o eventos que entran cada día."
      },
      {
        "l": "Índices",
        "r": "Estructuras que aceleran búsquedas, pero también consumen espacio."
      },
      {
        "l": "Logs y WAL",
        "r": "Bitácora de cambios que puede crecer cuando una réplica se atrasa."
      },
      {
        "l": "Bloat",
        "r": "Espacio ocupado por filas borradas que todavía no se limpian."
      }
    ],
    "explain": "El disco se reparte entre datos, índices, logs/WAL y bloat. El material propone vigilar réplicas atrasadas, limpiar con VACUUM y archivar datos viejos.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "¿Qué llena el disco de una base de datos?"
    }
  },
  {
    "id": "q72",
    "topic": "observabilidad",
    "type": "open",
    "prompt": "En un viernes de ofertas, la CPU está al 12 % y sobra memoria, pero el carrito tarda 20 segundos y muchos usuarios reciben timeout. El equipo afirma que el promedio de respuesta es 50 ms. Explica qué revisarías primero y por qué el promedio no basta.",
    "model": "Revisaría primero la saturación del pool de conexiones: aunque CPU y memoria estén bajas, un pool por encima de 80 % puede tener peticiones esperando en fila hasta terminar en timeout. También comprobaría disco/iowait y red. El promedio de 50 ms no basta porque puede ocultar unas pocas consultas extremadamente lentas; hay que revisar P95 y P99 para observar la cola de latencia que afecta a los usuarios.",
    "source": {
      "file": "6. operacion_y_observabilidad.md",
      "section": "Actividad: el viernes de ofertas"
    }
  }
];
