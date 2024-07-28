const axios = require('axios');


async function test() {
    const str = await axios.get("https://www.google.com");
    console.log(str);
}
test()