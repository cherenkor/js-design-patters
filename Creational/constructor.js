// ES5
function Server (name, ip) {
    this.name = name;
    this.ip = ip;
}

Server.prototype.getUrl = function() {
    return `https://${this.ip}:80`;
};


// ES6
class _Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:8080`;
    }
}

const aws = new Server('AWS German', '127.0.0.0');

console.log(aws.getUrl());