export default class Config {
    static IS_PROD = process.env.REACT_APP_MY_ENV === 'prod';
}