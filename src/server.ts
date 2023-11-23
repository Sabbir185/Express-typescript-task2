import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
    try {
        await mongoose.connect(config.db_string as string);
        app.listen(config.port, () => {
            console.log(`app is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
