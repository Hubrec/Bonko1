import express from 'express';
import user from './routes/user';
import announcement from './routes/announcement';
import comment from './routes/comment';

const router = express.Router();

router.use('/user', user);
router.use('/announcement', announcement);
router.use('/comment', comment);

router.get('/', (req, res) => {
    res.send('Welcome to Bonko1 API! \n' +
    'You can find the documentation on this link:' + 
    'github repo...');
});

export default router;