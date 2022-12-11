import uniqid from "uniqid";

const characters = [
  { id: uniqid(), name: "江戸川コナン", img: require("../images/img_conan") },
  { id: uniqid(), name: "工藤新一", img: require("../images/img_shinichi") },
  { id: uniqid(), name: "毛利蘭", img: require("../images/img_ran") },
  { id: uniqid(), name: "毛利小五郎", img: require("../images/img_kogoro") },
  { id: uniqid(), name: "阿笠博士", img: require("../images/img_agasa") },
  { id: uniqid(), name: "灰原哀", img: require("../images/img_haibara") },
  { id: uniqid(), name: "吉田歩美", img: require("../images/img_ayumi") },
  { id: uniqid(), name: "円谷光彦", img: require("../images/img_mitsuhiko") },
  { id: uniqid(), name: "小嶋元太", img: require("../images/img_genta") },
  { id: uniqid(), name: "鈴木園子", img: require("../images/img_suzuki") },
  { id: uniqid(), name: "世良真純", img: require("../images/img_sera") },
  { id: uniqid(), name: "羽田秀吉", img: require("../images/img_haneda") },
  { id: uniqid(), name: "服部平次", img: require("../images/img_h_heiji") },
  { id: uniqid(), name: "遠山和葉", img: require("../images/img_t_kazuha") },
  { id: uniqid(), name: "怪盗キッド", img: require("../images/img_kid") },
  { id: uniqid(), name: "目暮警部", img: require("../images/img_megure") },
  { id: uniqid(), name: "高木刑事", img: require("../images/img_takagi") },
  { id: uniqid(), name: "佐藤刑事", img: require("../images/img_sato") },
  { id: uniqid(), name: "赤井秀一", img: require("../images/img_akai") },
  { id: uniqid(), name: "安室透", img: require("../images/img_amuro") },
  { id: uniqid(), name: "沖矢昴", img: require("../images/img_okiya") },
  { id: uniqid(), name: "ジン", img: require("../images/img_gin") },
  { id: uniqid(), name: "ウォッカ", img: require("../images/img_vodka") },
  { id: uniqid(), name: "ベルモット", img: require("../images/img_vermouth") },
];

const randomCharacters = () => {
  const shuffledCharacters = characters.sort(() => 0.5 - Math.random());
  return shuffledCharacters.slice(0, 8);
};

export default randomCharacters;
