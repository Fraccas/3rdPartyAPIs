import * as express from 'express';
import * as stripeLoader from 'stripe';

const router = express.Router();

const stripe = new stripeLoader('sk_test_265xK1Ze74Uus7jeziATJZHZ004q6feEsG');

const charge = (token: string, amt: number) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Statement from stripe...'
    });
}

router.post('/', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.send("Charged!");
    } catch (e) {
        console.log(e);
        res.status(500);
    }
})

export default router;