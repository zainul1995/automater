// const axios = require('axios');
const controller = 5;

const interval = 10000;
for (let i = 0; i<controller; i++){
    const mainHandler = async()=> {
        // const response = await axios({url:'https://www.google.com'});
        console.log('hi this is za');
        // console.log(response);
        // i++;
        // if(i>= 5){
        //     clearInterval(mainHandler);
        // }
        
    };
    setTimeout(mainHandler,interval* i);
   

}

 