const cookie = {
    name: 'login_email',
    value: 'set_by_cookie@domain.com',
    domain: '.paypal.com',
    url: 'https://www.paypal.com/',
    path: '/',
    httpOnly: true,
    secure: true
}

const puppeteer = require('puppeteer');


const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.setCookie(cookie)
await page.goto('https://www.paypal.com/signin')
await page.screenshot({
    path: 'paypal_login.png'
})
await browser.close()
