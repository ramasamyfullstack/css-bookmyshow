const fs = require('fs');
const traineeFile = "./trainees.json";

// Read all Trainees
function readAllTrainees() {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        console.log(data);
    });
}
readAllTrainees();

// Read specific Trainee by Name/Email
function readTrainee(name, email) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        // console.log(typeof data);
        let result = JSON.parse(data);
        // console.log(typeof result);
        // let output = [];
        // result.forEach(v => {
        //     if(v.name === name) output.push(v);
        // });
        let output = result.filter(v => v.name === name && v.email === email);
        (output.length > 0) ? console.log(output) : console.log("No Trainees Found!");
    });
}
// readTrainee("Tony", "tony@gmail.com");

// Add a new Trainee
function addTrainee(...trainee) {
    const traineeObj = {
        "name": trainee[0],
        "email": trainee[1],
        "batch": trainee[2],
        "year": trainee[3],
        "timings": trainee[4]
    };
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let result = JSON.parse(data);
        let output = result.filter(v => v.email === traineeObj.email);
        if(output.length > 0) {
            console.log("Trainee already exists!");
        } else {
            result.push(traineeObj);
            fs.writeFile(traineeFile, JSON.stringify(result), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been created!");
            });
        }
    });
}
// addTrainee("Raju", "raju@gmail.com", "January", "2023", "7-9pm");

// Update a specific Trainee
function updateTrainee(...trainee) {
    const traineeObj = {
        "name": trainee[0],
        "email": trainee[1],
        "batch": trainee[2],
        "year": trainee[3],
        "timings": trainee[4]
    };
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let flag = false;

        let result = JSON.parse(data);
        let traineeData = result.map(v => {
            if(v.email === traineeObj.email) {
                let temp = {...v};
                for(let temp1 in traineeObj) {
                    temp[temp1] = traineeObj[temp1];
                }
                flag = true;
                return temp;
            }
            return v;
        });
        if(flag) {
            fs.writeFile(traineeFile, JSON.stringify(traineeData), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been updated!");
            });
        } else {
            console.log("Trainee not found!");
        }
    });
}
// updateTrainee("Dinesh", "srinanoo@gmail.com", "January", 2023, "7-9pm");

// Delete a specific Trainee
function deleleteTrainee(email) {
    fs.readFile(traineeFile, 'utf8', (err, data) => {
        if(err) console.log(err);

        let result = JSON.parse(data);
        let output = result.filter(v => v.email !== email);
        if(output.length < result.length) {
            fs.writeFile(traineeFile, JSON.stringify(output), (err) => {
                if(err) console.log(err);
                console.log("Trainee has been deleted!");
            });
        } else {
            console.log("Trainee not found!");
        }
    });
}
// deleleteTrainee("raju@gmail.com");