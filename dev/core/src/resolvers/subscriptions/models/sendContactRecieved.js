const apiKey = process.env.MAILGUN_API_KEY
const domain = 'mg.suneikii.com'

const mailgun = require('mailgun-js')({ apiKey, domain })

const sendContactRecieved = contact => {
  const {
    id,
    name,
    email,
    tel,
    title,
    description,
  } = contact

  const text = [
    'hi,',
    'I\'m an administrator from Book Me Instead',
    '',
    'Thank you for your inquery.',
    'Sincerely, we\'re going to reply you as soon as possible.',
    '',
    'Please be patient.',
    '',
    `[Inquiry ID]: ${id}`,
    `[title]: ${title}`,
    `[description]: ${description}`
  ].join('\n')

  const data = {
    from: 'Book Me Instead <noreply@suneikii.com>',
    to: `${name} <${email}>`,
    subject: '[Book Me Instead] Thank you for your inquiry',
    text
  }

  mailgun.messages().send(data)
    .then(body => console.log(body))
    .catch(err => { throw new Error(err)})
}

module.exports = sendContactRecieved
