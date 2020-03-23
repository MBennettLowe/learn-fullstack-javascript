const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developer'
export default {
    port: env.PORT || 8080
};


