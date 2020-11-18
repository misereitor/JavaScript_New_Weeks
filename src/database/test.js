const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async(db)=>{
    // Inserir dados
    proffyValue = {
        name: 'Misael Miranda',
        avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEJKjXh5Y42HQ/profile-displayphoto-shrink_200_200/0?e=1610582400&v=beta&t=MMLYYmg4phjNsHJKkhT8S_rfoEhgugi8s74XURoKxFw',
        whatsapp: '75983094954',
        bio: 'instrutor de JavaScript',
    }

    classValue = {
        subject: 1,
        cost: "20",
        //proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de daos, após cadastro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    // e trazer junto os dados do professor 
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)
    
    // o horário que a pessoa trabalha, por exempor, 8h -18h
    // o horário do time_from (8h) precisa ser menou ou igual ao horário solicitado
    // o time_to(8h) precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedule)

})