import app from './app';
import cors from 'cors';




app.listen(process.env.PORT);
app.use(cors());


