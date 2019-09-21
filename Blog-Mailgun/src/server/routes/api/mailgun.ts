import * as express from 'express';
import { sendEmail } from '../../utils/mailgun/mailgun';

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        let sent = await sendEmail('daltonward1@yahoo.com', req.body.email, req.body.subject, req.body.message);
        console.log(sent);
        res.send('Email sent!');
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});

export default router;