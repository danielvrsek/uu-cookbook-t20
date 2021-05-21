import fs from 'fs'
import { Author } from '../entities/author.js';
import { Ingredient } from '../entities/ingredients.js';
import { Recipe } from '../entities/recipe.js';
import { RecipeCategory } from '../entities/recipeCategory.js';
import { RecipeIngredient } from '../entities/recipeIngredient.js';

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

        for (let tableName in dataObj) {
            let table = this.data[tableName];
            if (!table) {
                throw new Error(`Table ${tableName} is not defined`);
            }

            let tableObj = dataObj[tableName];
            table.load(tableObj);
        }
        console.log("Database has been loaded.");
    }

    save() {
        let rootObj = {};

        for (let tableName in this.data) {
            let table = this.data[tableName];
            rootObj[table.name] = table.serialize();
        }

        fs.writeFileSync(this.getFileName(), JSON.stringify(rootObj, null, 2));
        console.log("Database has been saved.");
    }

    getFileName() {
        return `${this.name}.db`;
    }
}

class Table {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.data = [];
    }

    load(data) {
        for (let entity of data) {
            this.data.push(new (this.type)(...Object.values(entity)));
        }
    }

    insert(row) {
        this.data.push(row);
    }

    delete(id) {
        this.data = this.data.filter(x => x.id !== id);
    }

    getAll() {
        return this.data;
    }

    serialize() {
        return this.data.map(x => x.serialize());
    }
}

function createDatabase(name) {
    let database = new Database(name);
    defineTables(database);

    return database;
}

function defineTables(database) {
    database.defineTable(new Table("author", Author));
    database.defineTable(new Table("ingredients", Ingredient));
    database.defineTable(new Table("recipe", Recipe));
    database.defineTable(new Table("recipeCategory", RecipeCategory));
    database.defineTable(new Table("recipeIngredients", RecipeIngredient));
}

export var database = createDatabase("cookbook");

export function createKey() {
    function _p8(s) {  
        var p = (Math.random().toString(16)+"000000000").substr(2,8);  
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
     }  
     return _p8() + _p8(true) + _p8(true) + _p8(); 
}