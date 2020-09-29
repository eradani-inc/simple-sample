const axios = require('axios');

axios.get('http://localhost:3030/').then(response => console.log(response)).catch(err => console.error(err));