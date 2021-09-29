const uuid = require('uuid');
let data={
    'tour1':{
        'id': uuid,
        'name': 'Istanbul',
        'image':'/assets/image/istanbul.jpg',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : Math.floor(Math.random() * 2000),
        'rate': Math.random * 10
    },
    'tour2':{
        'id': uuid,
        'name': 'Mumbai',
        'image':'/assets/image/mumbai.webp',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : Math.floor(Math.random() * 2000),
        'rate': Math.random * 10
    },
    'tour3':{
        'id': uuid,
        'name': 'Berlin',
        'image':'/assets/image/berlin.jpg',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : Math.floor(Math.random() * 2000),
        'rate': Math.random * 10
    },
    'tour4':{
        'id': uuid,
        'name': 'Rome',
        'image':'/assets/image/rome.jpg',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : Math.floor(Math.random() * 2000),
        'rate': Math.random * 10
    },
    'tour5':{
        'id': uuid,
        'name': 'Amsterdam',
        'image':'/assets/image/amsterdam.jpg',
        'description': `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Explicabo, nihil labore sunt quaerat tempora fugit delectus facilis 
                        tempore provident sit quia veniam, nulla repellat amet molestiae fuga ab ipsam dolores.`,
        'price' : Math.floor(Math.random() * 2000),
        'rate': Math.random * 10
    }
}

exports.data=data;