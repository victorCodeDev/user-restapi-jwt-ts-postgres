export default {

    jwtSecret:process.env.JWT_SECRET || 'secrettoken', 
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/userjwt',
        user: process.env.MONGODB_USER || '',
        password: process.env.MONGODB_PASSWORD || ''
    }
}