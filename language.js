const translations = {
    /*Index*/
    en:{
        line1:"Home",
        line2:"Rules(Official Launched)",
        line3:"Who is Terengineer?",
        line4:"Terengineer's Equipment(Set up)",
        line5:"Selete a language:",
        welcome:"Welcome to ",
        shoutout:"Subscribe, Like👍, Follow, and Shout-out📢 Terengineer!",
        link1:"Donate!~",
        link2:"Merch!~",
        link3:"Join Terengineer Member Fan!~",
        link4:"Subscribe!~",
        link5:"Follow my X(Twitter)!~",
        link6:"Follow my Tumblr!~",
        link7:"Follow my Facebook!~",
        link8:"Follow my Instagram!~",
        link9:"Join my Discord(THIS IS 100% REAL, NOT FAKE, AND JOKE)!~",
        link10:"Follow my Twitch!~",
        link11:"Follow my Tiktok!~",
        link12:"Look at my wiki!~",
        link13:"Listen my Soundcloud!~",
        link14:"Follow My Newgrounds!~",
    },
    zhcn:{
        line1:"主選單",
        line2:"規則(正式啟動)",
        line3:"誰是阿祐先生?",
        line4:"阿祐先生的設備",
        line5:"語言設定:",
        welcome:"歡迎來到",
        shoutout:"訂閱，按讚👍跟隨，和喊出📢阿祐先生!",
        link1:"斗內!~",
        link2:"商品!~",
        link3:"加入阿祐先生的會員!~",
        link4:"訂閱!~",
        link5:"跟隨我的X(Twitter)!~",
        link6:"跟隨我的Tumblr!~",
        link7:"跟隨我的FB!~",
        link8:"跟隨我的IG!~",
        link9:"加入我的DC(這是真實的100%，不是假的和開玩笑)!~",
        link10:"跟隨我的Twitch!~",
        link11:"跟隨我的Tiktok!~",
        link12:"查看我的wiki!~",
        link13:"聆聽我的Soundcloud!~",
        link14:"跟隨我的Newgrounds!~",

    }
}
const languageSelectop = document.querySelector("select");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let line5 = document.getElementById("line5");
let welcome = document.getElementById("welcome");
let shoutout = document.getElementById("shoutout");
let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let link5 = document.getElementById("link5");
let link6 = document.getElementById("link6");
let link7 = document.getElementById("link7");
let link8 = document.getElementById("link8");
let link9 = document.getElementById("link9");
let link10 = document.getElementById("link10");
let link11 = document.getElementById("link11");
let link12 = document.getElementById("link12");
let link13 = document.getElementById("link13");
let link14 = document.getElementById("link14");

languageSelectop.addEventListener("change", (event) => {
    setLanugage(event.target.value)
})

const setLanugage = (language) => {
    if (language == "zhcn"){
        line1.innerText = translations.zhcn.line1;
        line2.innerText = translations.zhcn.line2;
        line3.innerText = translations.zhcn.line3;
        line4.innerText = translations.zhcn.line4;
        line5.innerText = translations.zhcn.line5;
        welcome.innerText = translations.zhcn.welcome;
        shoutout.innerText = translations.zhcn.shoutout;
        link1.innerText = translations.zhcn.link1;
        link2.innerText = translations.zhcn.link2;
        link3.innerText = translations.zhcn.link3;
        link4.innerText = translations.zhcn.link4;
        link5.innerText = translations.zhcn.link5;
        link6.innerText = translations.zhcn.link6;
        link7.innerText = translations.zhcn.link7;
        link8.innerText = translations.zhcn.link8;
        link9.innerText = translations.zhcn.link9;
        link10.innerText = translations.zhcn.link10;
        link11.innerText = translations.zhcn.link11;
        link12.innerText = translations.zhcn.link12;
        link13.innerText = translations.zhcn.link13;
        link14.innerText = translations.zhcn.link14;
    }
    else if (language == "en"){
        line1.innerText = translations.en.line1;
        line2.innerText = translations.en.line2;
        line3.innerText = translations.en.line3;
        line4.innerText = translations.en.line4;
        line5.innerText = translations.en.line5;
        welcome.innerText = translations.en.welcome;
        shoutout.innerText = translations.en.shoutout;
        link1.innerText = translations.en.link1;
        link2.innerText = translations.en.link2;
        link3.innerText = translations.en.link3;
        link4.innerText = translations.en.link4;
        link5.innerText = translations.en.link5;
        link6.innerText = translations.en.link6;
        link7.innerText = translations.en.link7;
        link8.innerText = translations.en.link8;
        link9.innerText = translations.en.link9;
        link10.innerText = translations.en.link10;
        link11.innerText = translations.en.link11;
        link12.innerText = translations.en.link12;
        link13.innerText = translations.en.link13;
        link14.innerText = translations.en.link14;
    }
}