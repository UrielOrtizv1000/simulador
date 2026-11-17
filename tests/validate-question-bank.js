const fs=require('fs'),path=require('path'),vm=require('vm');
const bankPath=path.join(__dirname,'..','js','preguntas.js'),source=fs.readFileSync(bankPath,'utf8'),context={};
vm.createContext(context);vm.runInContext(source,context,{filename:bankPath});
const {TOPICS,QUESTION_BANK}=context;function assert(ok,msg){if(!ok)throw new Error(msg);}
assert(Array.isArray(TOPICS)&&TOPICS.length===12,'Se esperaban 12 temas');
assert(Array.isArray(QUESTION_BANK)&&QUESTION_BANK.length===60,'Se esperaban 60 preguntas');
const expectedTopics=['sistema','inicio','tareas','bluetooth','comandos','colas','captura','interrupciones','semaforos','buffers','pantalla','exposicion'];
assert(TOPICS.every((t,i)=>t.id===expectedTopics[i]),'Unexpected camera practice topics');
const topicIds=new Set(TOPICS.map(t=>t.id)),ids=new Set(),counts=new Map(TOPICS.map(t=>[t.id,0])),types={};
const supported=new Set(['mc','vf','fill','match','connect','diagram','open','vf_group','fill_group']);
assert(topicIds.size===12,'IDs de tema duplicados');
for(const q of QUESTION_BANK){
 assert(!ids.has(q.id),`ID duplicado: ${q.id}`);ids.add(q.id);assert(topicIds.has(q.topic),`Tema inválido: ${q.id}`);assert(supported.has(q.type),`Tipo inválido: ${q.id}`);
 assert(q.prompt&&q.explain,`Falta texto o explicación: ${q.id}`);assert(q.source&&['main (2).c','OV7670_LIB (1).c'].includes(q.source.file)&&q.source.section,`Fuente inválida: ${q.id}`);
 counts.set(q.topic,counts.get(q.topic)+1);types[q.type]=(types[q.type]||0)+1;
 if(q.type==='mc'){assert(q.options.length===4,`${q.id}: 4 opciones`);assert(Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4,`${q.id}: answerIndex`);}
 else if(q.type==='vf')assert(typeof q.answer==='boolean',`${q.id}: V/F`);
 else if(q.type==='fill')assert(q.answers&&q.answers.length,`${q.id}: respuestas`);
 else if(q.type==='match'||q.type==='connect')assert(q.pairs&&q.pairs.length>=2,`${q.id}: pares`);
 else if(q.type==='diagram')assert(q.pool&&q.pool.length&&q.slots&&q.slots.length>=3,`${q.id}: diagrama`);
 else if(q.type==='open')assert(q.model&&q.model.trim(),`${q.id}: modelo`);
 else if(q.type==='vf_group'){assert(q.statements&&q.statements.length===8,`${q.id}: 8 afirmaciones`);q.statements.forEach(s=>assert(s.text&&typeof s.answer==='boolean'&&s.explain,`${q.id}: afirmación`));}
 else if(q.type==='fill_group'){
  assert(q.wordBank&&q.wordBank.length===8&&q.items&&q.items.length===8,`${q.id}: bloque de 8`);
  const bank=new Set(q.wordBank);assert(bank.size===8,`${q.id}: banco sin duplicados`);
  q.items.forEach(i=>{assert(i.text&&i.answer&&i.explain,`${q.id}: frase`);assert((i.text.match(/___/g)||[]).length===1,`${q.id}: un espacio por frase`);assert(bank.has(i.answer),`${q.id}: respuesta fuera del banco`);});
  assert(new Set(q.items.map(i=>i.answer)).size===8,`${q.id}: cada término debe usarse una vez`);
 }
}
for(const [topic,count] of counts)assert(count===5,`${topic}: se esperaban 5 preguntas y hay ${count}`);
assert(types.vf_group>=2&&types.fill_group>=2,'Faltan dos bloques agrupados de cada tipo');
assert(types.open>=2&&types.diagram>=2&&types.match>=2,'Faltan formatos solicitados');
assert(!/seguridadredes\.md|IPsec|Kerberos|Criptografía|Programación Python/i.test(source),'Todavía existe contenido del banco anterior de Python');
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
for(const type of supported)assert(types[type]>0,`Missing question type: ${type}`);
const index=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
assert(index.includes('Cámara y FreeRTOS desde cero'),'Outdated landing title');
assert(index.includes('camara-freertos-1'),'Outdated bank cache key');
assert(index.includes('>60</div>')&&index.includes('>12</div>'),'Outdated displayed totals');
console.log(`Validated ${QUESTION_BANK.length} questions across ${TOPICS.length} topics.`,types);
