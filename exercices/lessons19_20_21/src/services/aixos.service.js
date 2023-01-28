import aixosConfig from "../utils/config/aixos.config";


export default function getRandomJoke(){
    return aixosConfig.get('/random', {
        validateStatus: function (status) {
            return status < 500;
        }
    })
}