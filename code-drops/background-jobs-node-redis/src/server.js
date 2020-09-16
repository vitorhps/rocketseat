import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import routes from './app/routes';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(routes);
app.use('/admin/queues', BullBoard.UI);

const port = 3333;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));