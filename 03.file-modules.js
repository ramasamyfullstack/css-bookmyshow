const fs = require('fs');

////////////////////////////////////////////////////////////////////////////////////////////////

function creatAFileSync() {
    fs.writeFileSync("sample1.txt", "New CODE...");
    console.log("File has been created!!!");
}

////////////////////////////////////////////////////////////////////////////////////////////////

function createAFile() {
    fs.writeFile("sample2.txt", "Sample 2 Content", (err) => {
        if(err) console.log(err);
        console.log("File has been created!!!");
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////

function readAFileSync() {
    let data = fs.readFileSync("sample1.txt", "utf8");
    console.log(data);
}

// ////////////////////////////////////////////////////////////////////////////////////////////////

function readAFile() {
    fs.readFile("sample2.txt", "utf8", (err, result) => {
        if(err) console.log(err);
        console.log(result);
    });
}

// ////////////////////////////////////////////////////////////////////////////////////////////////

function updateAFileSync() {
    fs.appendFileSync("sample3.txt", "New Data Added...");
    console.log("File has been updated!!!");
}

// ////////////////////////////////////////////////////////////////////////////////////////////////

function updateAFile() {
    fs.appendFile("sample2.txt", "New Data Added...", (err) => {
        if(err) console.log(err);
        console.log("File has been updated!!!");
    });
}

////////////////////////////////////////////////////////////////////////////////////////////////

function deleteAFileSync() {
    try {
        fs.unlinkSync("sample1.txt");
        console.log("File has been deleted!!!");
    } catch(err) {
        console.log(err.message);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////

function deleteAFile() {
    fs.unlink("sample2.txt", (err) => {
        if(err) console.log(err);
        console.log("File has been deleted!!!");
    });
}


module.exports = {
    creatAFileSync,
    createAFile,
    readAFileSync,
    readAFile,
    updateAFileSync,
    updateAFile,
    deleteAFileSync,
    deleteAFile
};