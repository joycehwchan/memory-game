import uniqid from "uniqid";

const characters = [
  {
    id: uniqid(),
    name: "江戸川コナン",
    img: require("../images/img_conan.png"),
  },
  {
    id: uniqid(),
    name: "工藤新一",
    img: require("../images/img_shinichi.png"),
  },
  { id: uniqid(), name: "毛利蘭", img: require("../images/img_ran.png") },
  {
    id: uniqid(),
    name: "毛利小五郎",
    img: require("../images/img_kogoro.png"),
  },
  { id: uniqid(), name: "阿笠博士", img: require("../images/img_agasa.png") },
  { id: uniqid(), name: "灰原哀", img: require("../images/img_haibara.png") },
  { id: uniqid(), name: "吉田歩美", img: require("../images/img_ayumi.png") },
  {
    id: uniqid(),
    name: "円谷光彦",
    img: require("../images/img_mitsuhiko.png"),
  },
  { id: uniqid(), name: "小嶋元太", img: require("../images/img_genta.png") },
  { id: uniqid(), name: "鈴木園子", img: require("../images/img_suzuki.png") },
  { id: uniqid(), name: "世良真純", img: require("../images/img_sera.png") },
  { id: uniqid(), name: "羽田秀吉", img: require("../images/img_haneda.png") },
  { id: uniqid(), name: "服部平次", img: require("../images/img_h_heiji.png") },
  {
    id: uniqid(),
    name: "遠山和葉",
    img: require("../images/img_t_kazuha.png"),
  },
  { id: uniqid(), name: "怪盗キッド", img: require("../images/img_kid.png") },
  { id: uniqid(), name: "目暮警部", img: require("../images/img_megure.png") },
  { id: uniqid(), name: "高木刑事", img: require("../images/img_takagi.png") },
  { id: uniqid(), name: "佐藤刑事", img: require("../images/img_sato.png") },
  { id: uniqid(), name: "赤井秀一", img: require("../images/img_akai.png") },
  { id: uniqid(), name: "安室透", img: require("../images/img_amuro.png") },
  { id: uniqid(), name: "沖矢昴", img: require("../images/img_okiya.png") },
  { id: uniqid(), name: "ジン", img: require("../images/img_gin.png") },
  { id: uniqid(), name: "ウォッカ", img: require("../images/img_vodka.png") },
  {
    id: uniqid(),
    name: "ベルモット",
    img: require("../images/img_vermouth.png"),
  },
];

const randomCharacters = () => {
  const shuffledCharacters = characters.sort(() => 0.5 - Math.random());
  return shuffledCharacters.slice(0, 12);
};

export default randomCharacters;
