import { mongoose } from '@typegoose/typegoose';
import app from './app'

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI || "")
    .then((conn) => console.log(`MongoDB running...`))
    .catch((err) => console.log(`MongoDB error: ${err}`));


app.listen(PORT || "", () => console.log(`app running on: http://localhost:${PORT}`));