const axios = require("axios");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    auth: {
        user: 'no-reply@pango-gy.com',
        pass: 'pango!0303'
    }
});

const getHtml = async () => {
    try {
        return await axios.get("https://ad.search.naver.com/search.naver?where=ad&query=%EC%82%AC%EB%AC%B4%EC%9A%A9%ED%92%88");
    } catch (error) {
        console.error(error);
    }
};

getHtml()
    .then(html => {
        if(html.data.includes('officenex')){
            console.log('오피스넥스 있음');
        } else {
            var mailOptions = {
                from: 'no-reply@pango-gy.com',
                to: 'pinkyooysj@pango-gy.com,hdk3383@pango-gy.com,sonh1230@pango-gy.com,jeongsook.lee@officenex.co.kr,jiseon.yun@officenex.co.kr',
                subject: "네이버에서 오피스넥스 광고가 노출이 안되는것으로 확인됩니다.",
                html: "네이버에서 오피스넥스 광고가 노출이 안되는것으로 확인됩니다."
            }
            transporter.sendMail(mailOptions);
        }
    })