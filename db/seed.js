const db = require('./');
const Student = require('./models/student');
const Campus = require('./models/campus');

const campuses = [
    { name: 'Luna' },
    { name: 'Terra' },
    { name: 'Mars' },
    { name: 'Titan' }
];

const students = [
    { name: 'Cody', email: 'cody@interplanetary.com', campusId: 1 },
    { name: 'Ben', email: 'ben@interplanetary.com', campusId: 1 },
    { name: 'Star', email: 'star@interplanetary.com', campusId: 1 },
    { name: 'Batman', email: 'batman@interplanetary.com', campusId: 1 },
    { name: 'Elliott', email: 'elliott@interplanetary.com', campusId: 2 },
    { name: 'Fira', email: 'fira@interplanetary.com', campusId: 2 },
    { name: 'Henry', email: 'henry@interplanetary.com', campusId: 2 },
    { name: 'Marcy', email: 'marcy@interplanetary.com', campusId: 2 },
    { name: 'Raffi', email: 'raffi@interplanetary.com', campusId: 3 },
    { name: 'Tulsi', email: 'tulsi@interplanetary.com', campusId: 3 },
    { name: 'Pork Chop', email: 'pork_chop@interplanetary.com', campusId: 3 },
    { name: 'Ribs', email: 'ribs@interplanetary.com', campusId: 3 },
    { name: 'Stacey', email: 'stacey@interplanetary.com', campusId: 4 },
    { name: 'JD', email: 'jd@interplanetary.com', campusId: 4 },
    { name: 'BenBen', email: 'benben@interplanetary.com', campusId: 4 },
    { name: 'Odie', email: 'odie@interplanetary.com', campusId: 4 }
];

const seed = () => {
    Promise.all(campuses.map((campus) => {
        Campus.create(campus);
    }))
    .then(() => {
        Promise.all(students.map((student) => {
            Student.create(student);
        }))
    })
};

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
    .then(() => {
        console.log('Seeding db...');
        return seed();
    })
    .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
    })
    // seeding works but throws an error when trying to close out
    // .then(() => {
    //     // db.close();
    //     // return null;
    // });
};

main();