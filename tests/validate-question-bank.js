const fs=require('fs'),path=require('path'),vm=require('vm');
const bankPath=path.join(__dirname,'..','js','preguntas.js'),source=fs.readFileSync(bankPath,'utf8'),context={};
vm.createContext(context);vm.runInContext(source,context,{filename:bankPath});
const {TOPICS,QUESTION_BANK}=context;function assert(ok,msg){if(!ok)throw new Error(msg);}
assert(Array.isArray(TOPICS)&&TOPICS.length===4,'Se esperaban 4 temas');
assert(Array.isArray(QUESTION_BANK)&&QUESTION_BANK.length===16,'Se esperaban 16 preguntas');
const expectedTopics=['conceptos','modelos','soluciones','modi'];
assert(TOPICS.every((t,i)=>t.id===expectedTopics[i]),'Temas inesperados en el repaso de transporte');
const topicIds=new Set(TOPICS.map(t=>t.id)),ids=new Set(),counts=new Map(TOPICS.map(t=>[t.id,0])),types={};
const supported=new Set(['mc','vf','fill','match','connect','diagram','open','vf_group','fill_group']);
assert(topicIds.size===4,'IDs de tema duplicados');
for(const q of QUESTION_BANK){
 assert(!ids.has(q.id),`ID duplicado: ${q.id}`);ids.add(q.id);assert(topicIds.has(q.topic),`Tema inválido: ${q.id}`);assert(supported.has(q.type),`Tipo inválido: ${q.id}`);
 assert(q.prompt&&q.explain,`Falta texto o explicación: ${q.id}`);assert(q.source&&q.source.file==='Material proporcionado en imágenes'&&q.source.section,`Fuente inválida: ${q.id}`);
 counts.set(q.topic,counts.get(q.topic)+1);types[q.type]=(types[q.type]||0)+1;
 if(q.type==='mc'){assert(q.options.length===4,`${q.id}: 4 opciones`);assert(Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4,`${q.id}: answerIndex`);}
 else if(q.type==='vf')assert(typeof q.answer==='boolean',`${q.id}: V/F`);
 else if(q.type==='fill')assert(q.answers&&q.answers.length,`${q.id}: respuestas`);
 else if(q.type==='match'||q.type==='connect')assert(q.pairs&&q.pairs.length>=2,`${q.id}: pares`);
 else if(q.type==='diagram')assert(q.pool&&q.pool.length&&q.slots&&q.slots.length>=3,`${q.id}: diagrama`);
 else if(q.type==='open')assert(q.model&&q.model.trim(),`${q.id}: modelo`);
 else if(q.type==='vf_group'){assert(q.statements&&q.statements.length===5,`${q.id}: 5 afirmaciones`);q.statements.forEach(s=>assert(s.text&&typeof s.answer==='boolean'&&s.explain,`${q.id}: afirmación`));}
 else if(q.type==='fill_group'){
  assert(q.wordBank&&q.wordBank.length===8&&q.items&&q.items.length===8,`${q.id}: bloque de 8`);
  const bank=new Set(q.wordBank);assert(bank.size===8,`${q.id}: banco sin duplicados`);
  q.items.forEach(i=>{assert(i.text&&i.answer&&i.explain,`${q.id}: frase`);assert((i.text.match(/___/g)||[]).length===1,`${q.id}: un espacio por frase`);assert(bank.has(i.answer),`${q.id}: respuesta fuera del banco`);});
  assert(new Set(q.items.map(i=>i.answer)).size===8,`${q.id}: cada término debe usarse una vez`);
 }
}
assert(counts.get('conceptos')===2,'conceptos: se esperaban 2 preguntas');
assert(counts.get('modelos')===4,'modelos: se esperaban 4 preguntas');
assert(counts.get('soluciones')===6,'soluciones: se esperaban 6 preguntas');
assert(counts.get('modi')===4,'modi: se esperaban 4 preguntas');
assert(types.open===13&&types.mc===2&&types.vf_group===1,'Distribución inesperada de tipos');
assert(!/Cámara|FreeRTOS|Bluetooth|OV7670|Programación Python|IPsec|Kerberos/i.test(source),'Todavía existe contenido de una edición anterior');
for(const q of QUESTION_BANK){
 if(q.type==='mc')assert(new Set(q.options).size===4,`${q.id}: duplicate options`);
 if(q.type==='match'||q.type==='connect'){
  assert(q.pairs.every(p=>p.l&&p.r),`${q.id}: incomplete pair`);
  assert(new Set(q.pairs.map(p=>p.l)).size===q.pairs.length,`${q.id}: duplicate left labels`);
 }
 if(q.type==='diagram'){
  assert(new Set(q.slots.map(s=>s.key)).size===q.slots.length,`${q.id}: duplicate slot keys`);
  assert(q.slots.every(s=>s.label&&q.pool.includes(s.correct)),`${q.id}: invalid diagram answer`);
 }
}
for(const type of ['mc','vf_group','open'])assert(types[type]>0,`Missing question type: ${type}`);
const index=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
assert(index.includes('Transporte, transbordo y método MODI'),'Outdated landing title');
assert(index.includes('transporte-modi-1'),'Outdated bank cache key');
assert(index.includes('>16</div>')&&index.includes('>4</div>'),'Outdated displayed totals');
console.log(`Validated ${QUESTION_BANK.length} questions across ${TOPICS.length} topics.`,types);
