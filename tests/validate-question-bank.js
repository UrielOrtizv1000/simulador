const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const bankPath = path.join(root, 'js', 'preguntas.js');
const source = fs.readFileSync(bankPath, 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(source, context, { filename: bankPath });

const { TOPICS, QUESTION_BANK } = context;
const expectedSources = [
  '1_1_Operaciones_Avanzadas_con_Listas.ipynb',
  '1_2_List_Comprehensions.ipynb',
  '1_3_Tuplas_Registros_y_Desempaquetado.ipynb',
  '2_1_Diccionarios_Manipulacion_Segura.ipynb',
  '2_2_Sets_Operaciones_de_Conjuntos.ipynb',
  '3_1_Archivos_Planos.ipynb',
  '3_2_Administradores_de_Contexto_with.ipynb',
  '4_1_JSON_y_CSV.ipynb',
  '4_2_map_filter_en_Datos.ipynb',
  'U4_1_Clases_self_init.ipynb',
  'U4_2_Atributos_Instancia_vs_Clase.ipynb',
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(Array.isArray(TOPICS), 'TOPICS must be an array');
assert(Array.isArray(QUESTION_BANK), 'QUESTION_BANK must be an array');
assert(TOPICS.length === 11, `Expected 11 topics, found ${TOPICS.length}`);
assert(QUESTION_BANK.length === 66, `Expected 66 questions, found ${QUESTION_BANK.length}`);

const topicIds = new Set(TOPICS.map((topic) => topic.id));
assert(topicIds.size === TOPICS.length, 'Topic IDs must be unique');

const ids = new Set();
const counts = new Map(TOPICS.map((topic) => [topic.id, 0]));
const seenSources = new Set();
const supportedTypes = new Set(['mc', 'vf', 'fill', 'match', 'connect', 'diagram', 'open']);

for (const question of QUESTION_BANK) {
  assert(!ids.has(question.id), `Duplicate question ID: ${question.id}`);
  ids.add(question.id);
  assert(topicIds.has(question.topic), `Unknown topic in ${question.id}: ${question.topic}`);
  counts.set(question.topic, counts.get(question.topic) + 1);
  assert(supportedTypes.has(question.type), `Unsupported type in ${question.id}: ${question.type}`);
  assert(typeof question.prompt === 'string' && question.prompt.trim(), `Missing prompt in ${question.id}`);
  assert(question.source && expectedSources.includes(question.source.file), `Invalid source in ${question.id}`);
  assert(typeof question.source.section === 'string' && question.source.section.trim(), `Missing source section in ${question.id}`);
  seenSources.add(question.source.file);

  if (question.type === 'mc') {
    assert(Array.isArray(question.options) && question.options.length === 4, `${question.id} must have four options`);
    assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id} has invalid answerIndex`);
    assert(typeof question.explain === 'string' && question.explain.trim(), `${question.id} needs an explanation`);
  } else if (question.type === 'vf') {
    assert(typeof question.answer === 'boolean', `${question.id} needs a boolean answer`);
    assert(typeof question.explain === 'string' && question.explain.trim(), `${question.id} needs an explanation`);
  } else if (question.type === 'fill') {
    assert(Array.isArray(question.answers) && question.answers.length > 0, `${question.id} needs accepted answers`);
    assert(typeof question.explain === 'string' && question.explain.trim(), `${question.id} needs an explanation`);
  } else if (question.type === 'match' || question.type === 'connect') {
    assert(Array.isArray(question.pairs) && question.pairs.length >= 2, `${question.id} needs at least two pairs`);
    assert(typeof question.explain === 'string' && question.explain.trim(), `${question.id} needs an explanation`);
  } else if (question.type === 'open') {
    assert(typeof question.model === 'string' && question.model.trim(), `${question.id} needs a model answer`);
  }
}

for (const [topic, count] of counts) {
  assert(count === 6, `Topic ${topic} must contain 6 questions; found ${count}`);
}

for (const file of expectedSources) {
  assert(seenSources.has(file), `Notebook not represented in bank: ${file}`);
}

assert(!/Distributed Databases|Bases de Datos Distribuidas|fragmentaci[oó]n de datos|replicaci[oó]n de datos/i.test(source), 'Old distributed-databases content is still present');

console.log(`Validated ${QUESTION_BANK.length} questions across ${TOPICS.length} topics and ${seenSources.size} notebooks.`);
