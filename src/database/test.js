const database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

database.then(async (db) => {
  await saveOrphanage(db, {
    name: "Casa da Alegria",
    lat: "-34.031966",
    lng: "-55.207669",
    about:
      "O Lar Esperança é uma casa de assistência social dedicada a crianças carentes, oferecendo um ambiente acolhedor e seguro para o desenvolvimento integral.",
    images: [
      "https://images.unsplash.com/photo-1626453284424-7d3e34ec1e16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzAwMjUxMzg5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1615942587157-591803fcf41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzAwMjUxNDIx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    ].toString(),
    whatsapp: "5551544467",
    instructions:
      "Ao chegar ao Lar Renascer, procure a área de boas-vindas para registro e informações iniciais. Um local reservado para avaliações iniciais e conversas confidenciais. Agende um horário de consulta para garantir a atenção adequada.Destinada a sessões terapêuticas individuais e em grupo. Terapeutas estão disponíveis para oferecer suporte emocional e aconselhamento. Um espaço para atividades educacionais e tutoriais. Professores e voluntários auxiliam no progresso acadêmico das crianças. Uma área segura para atividades físicas e recreação ao ar livre. Monitoramento constante para garantir a segurança das crianças. Um ambiente acolhedor para interações sociais e atividades em grupo. Projetada para promover o espírito de comunidade entre as crianças.",
    opening_hours: "Segunda a sábado: 9h00 - 20h00",
    open_on_weekends: "1",
  }); 

  // select data from table
  const selectedOrphanages = await db.all(`SELECT * FROM orphanages`);
  console.log(selectedOrphanages);

//  select one data
  const orphanage = await db.all(`SELECT * FROM orphanages WHERE id="3"`);
  console.log(orphanage);

// delete data from table
// console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"));

});
