import dotenv from 'dotenv/config';
const environmentVar={
    APP_PORT: process.env.PORT,
    DB_URL:process.env.DB_URL,
    DB_NAME:process.env.DB_NAME
}
export default environmentVar;

