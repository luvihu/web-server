import dotenv from 'dotenv';
import envVar from 'env-var';

dotenv.config();

export const envConfig = {
    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString()
}

