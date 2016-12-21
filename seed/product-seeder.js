var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping')

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://www.petsitter.university/wp-content/uploads/2015/09/t-shirtd.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://blackforestbd.com/wp-content/uploads/2015/12/t473gold.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://images.sportsdirect.com/images/products/59200421_4pl.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    }),
    new Product({
        imagePath: 'http://bhuiyaninternational.biz/wp-content/flagallery/tshirt/t473kellygreen.jpg',
        title: 'T-Shirt',
        description: 'Awesome Branded T-Shirt for Sale!!!',
        price: 10
    })
];

var done = 0;
for(i = 0; i < products.length; i++) {
    products[i].save((err, result) => {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}