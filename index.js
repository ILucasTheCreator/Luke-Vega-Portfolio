const {mit , harvard , stanford } = require('./app.js');

function whatItDo (college) {
    console.log(`${college.name} is valid? ${college.ball} .... the ratio is ${college.ratio}`);
    college.pukeNRally();
}
whatItDo(mit);
whatItDo(harvard);
whatItDo(stanford);