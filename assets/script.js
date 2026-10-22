const btn = document.getElementById("switch-btn");
const line = document.getElementById("switch-line");

btn.addEventListener("click", function () {
  line.textContent = "被你点到了。";
});

const input = document.getElementById("ask-input");
const askBtn = document.getElementById("ask-btn");
const answer = document.getElementById("answer-line");

askBtn.addEventListener("click", function () {
  const said = input.value;
  console.log("用户说：" + said);
  if (said === "") {
    answer.textContent = "你什么都没说。";
  } else if (said.includes("你是谁") || said.includes("介绍")) {
    answer.textContent = "我是nico，一个在医院做数据分析的人，正在学写网页。";
  } else if (said.includes("会什么") || said.includes("技能")) {
    answer.textContent = "nico会做报表，会看数据，正在学着会写网页。";
  } else if (said.includes("在学什么") || said.includes("学习")) {
    answer.textContent = "HTML、CSS、JavaScript，一条龙，刚学会让页面回话。";
  } else if (said.includes("厉害") || said.includes("棒")) {
    answer.textContent = "谢谢，nico听到了，尾巴翘起来了。";
  } else if (said.includes("笨") || said.includes("傻")) {
    answer.textContent = "你才笨，我只是缓存还没刷新。";
  } else if (said.includes("再见") || said.includes("拜拜")) {
    answer.textContent = "慢走，F5 之前我都在。";
  } else if (said.includes("天气") || said.includes("温度")) {
    answer.textContent = "nico不太会看天气，建议你去查查。";
  } else if (said.includes("你好")) {
    answer.textContent = "你好呀，欢迎来玩。";
  } else {
    answer.textContent = "nico收到你的话了：" + said;
  }
});
