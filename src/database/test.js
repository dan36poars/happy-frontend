const database = require("./db.js");

database.then(async db => {
    // insert data on table
    // await db.run(`INSERT INTO orphanages (
    //     lat,
    //     lng,
    //     name,
    //     about,
    //     whatsapp,
    //     images,
    //     instructions,
    //     opening_hours,
    //     open_on_weekends
    // ) VALUES (
    //     "-30.031966",
    //     "-51.197669",
    //     "Lar das meninas",
    //     "Bem-vindo ao Lar Renascer, uma casa de assistência social comprometida em proporcionar um lar amoroso e solidário para crianças em situação de carência.",
    //     "55519894325",
    //     "https://images.unsplash.com/photo-1599663253423-7cad6e5fae1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNzAwMjUxMTUy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    //     "Recepção: Ao entrar no Lar Esperança, você será recebido por nossa equipe calorosa na recepção. Por favor, forneça seu nome e o propósito da visita para ser devidamente orientado. Salas de Atendimento Individual: Para discussões mais privadas ou assuntos pessoais, nossas salas de atendimento individual oferecem um ambiente discreto e confidencial. Agende uma reunião com antecedência, se possível, para garantir a disponibilidade de um orientador. Sala de Estudos: A sala de estudos é projetada para auxiliar as crianças nas atividades escolares. Professores e tutores estão disponíveis para fornecer apoio educacional adicional. Sala de Recreação: Um espaço dedicado ao lazer e interação social. Atividades recreativas e brincadeiras são organizadas regularmente para promover o desenvolvimento social das crianças. Refeitório: O refeitório é onde as refeições balanceadas são servidas. Por favor, siga as instruções da equipe para garantir uma experiência agradável durante as refeições. Sala de Reuniões (Equipe): Este espaço é utilizado para reuniões da equipe, discussões e planejamento. Acesso restrito à equipe e convidados autorizados",
    //     "Segunda a sexta-feira: 8h00 - 18h00",
    //     "0"
    // )`);

    // select data from table
    const selectedOrphanages = await db.all(`SELECT * FROM orphanages`);
    
    // console.log(selectedOrphanages);

    // select one data
    const orphanage = await db.all(`SELECT * FROM orphanages WHERE id="2"`);
    console.log(orphanage);
});