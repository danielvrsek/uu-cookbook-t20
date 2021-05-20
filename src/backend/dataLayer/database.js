import fs from 'fs'

class Database {
    constructor(name) {
        this.name = name;
        this.data = {};
    }
    
    getTable(name) {
        return this.data[name];
    }

    defineTable(table) {
        this.data[table.name] = table;
    }

    load() {
        let rawData = fs.readFileSync(this.getFileName());
        let dataObj = JSON.parse(rawData);

        console.log(dataObj);

        for (let tableName in dataObj) {
            let tableObj = dataObj[tableName];
            let table = new Table(tableName);
            table.load(tableObj);

            this.data[tableName] = table;
        }
    }

    save() {
        let rootObj = {};

        for (let tableName in this.data) {
            let table = this.data[tableName];
            rootObj[table.name] = table.data;
        }

        fs.writeFileSync(this.getFileName(), JSON.stringify(rootObj, null, 2));
        console.log("JSON data is saved.");
    }

    getFileName() {
        return `${this.name}.db`;
    }
}

class Table {
    constructor(name) {
        this.name = name;
        this.data = [];
    }

    load(data) {
        this.data = data;
    }

    insert(row) {
        this.data.push(row);
    }

    getAll() {
        return this.data;
    }
}

function createDatabase(name) {
    let database = new Database(name);
    defineTables(database);

    return database;
}

function defineTables(database) {
    database.defineTable(new Table("author"));
    database.defineTable(new Table("ingredients"));
    database.defineTable(new Table("recipe"));
    database.defineTable(new Table("recipeCategory"));
    database.defineTable(new Table("recipeIngredients"));
}

export var database = createDatabase("cookbook");

export function createKey() {
    function _p8(s) {  
        var p = (Math.random().toString(16)+"000000000").substr(2,8);  
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
     }  
     return _p8() + _p8(true) + _p8(true) + _p8(); 
}