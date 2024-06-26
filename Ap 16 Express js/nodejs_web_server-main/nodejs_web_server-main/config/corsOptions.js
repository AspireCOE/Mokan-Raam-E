// Cross Origin Resource Sharing
const whiteList = ['https://www.origin.com', 'http://127.0.0.1:5500' ,'http://localhost:3600'];
const corsOptions = {
    origin: (origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        }
        else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions