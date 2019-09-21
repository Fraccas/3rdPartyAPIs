import * as mailgunLoader from 'mailgun-js';

let mailgun = mailgunLoader({
    apiKey: '030182fda4baf13efb684a5dbe46957c-bbbc8336-ef35fa0c',
    domain: 'https://api.mailgun.net/v3/sandboxb329cd5ccc6a44caae7ad10fc887c453.mailgun.org'
});

const sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to, 
        from, 
        subject, 
        text: content
    }
    return mailgun.messages().send(data);
}

export { sendEmail };