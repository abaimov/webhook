import Koa from "koa";
import TelegramBot from "node-telegram-bot-api";
import Router from "koa-router";
import bodyParser from 'koa-bodyparser';

const app = new Koa()
const bot = new TelegramBot("7302018267:AAHMGwEykO6dcfhvoo63namXkuCZ0_o9_no")
bot.setWebHook("https://77.244.221.226/bot")

const router = new Router();
router.post("/bot", async (ctx) => {
    const {body} = ctx.request
    console.log(body);
    await bot.processUpdate(body)
    ctx.status = 200
})

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


bot.on("/start", async (msg) => {
    await bot.sendMessage(msg.chat.id, "Hello, I am a bot. I can send you a message when you send me a message.")
})
