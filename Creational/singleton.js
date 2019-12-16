class DB {
    constructor(data) {
        if (DB.exists) {
            return DB.instance;
        }

        DB.instance = this;
        DB.exists = true;
        this.data = data;
    
    }

    getData() {
        return this.data;
    }
};

const mongo = new DB('MongoDB');
console.log('====================================');
console.log(mongo.getData());
console.log('====================================');

const mysql = new DB('MySQL');
console.log('====================================');
console.log(mysql.getData());
console.log('====================================');