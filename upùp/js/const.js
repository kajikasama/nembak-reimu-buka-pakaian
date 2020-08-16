//テストフラグ
const OUT_TEST_FLG = false;//true;

//windowの位置
const WSX = 30;
const WSY = 90;
const WEX = 450;
const WEY = 625;
const WDX = WEX - WSX;
const WDY = WEY - WSY;
const FDX = 10;
const FDY = 11;

const STATUS_TOP       = 1;
const STATUS_PREGAME   = 2;
const STATUS_GAME      = 3;
const STATUS_FINISH    = 4;
const STATUS_GAMEOVER  = 5;
const STATUS_GAMECLEAR = 6;

const DEFAULT_HP1 = 100;
const DEFAULT_HP2 = 100;
const DEFAULT_HP3 = 100;
const DEFAULT_HP4 = 100;
const DEFAULT_HP5 = 100;

const REMAIND_TIME = 60;//60;

const INTERVAL = 40;//firefoxで40しかでない 20->40
const MAX_TIME_COUNTER = 30;//1000/INTERVAL => 50
const STAR_ADD_COUNT = 30;

const MAX_FOCUS_COUNT = 3;//最大フォーカス数
const MAX_STAR_COUNT = 7;//最大スター数

const HIT_COUNT = 7;//あたり判定箇所
const CRITICAL_HIT = 7;
const CRITICAL_BONUS = 5;

const AP_MAX = 15;
const AP_MIN = 3;

//当たり判定mcの番号min-max
const HITMIN1 = 1;//服上
const HITMAX1 = 4;

const HITMIN2 = 5;//服下
const HITMAX2 = 7;

const HITMIN3 = 8;//ブラ
const HITMAX3 = 10;

const HITMIN4 = 11;//パン
const HITMAX4 = 17;

const HITMIN5 = 18;//脇
const HITMAX5 = 19;

const HITMIN6 = 20;//胸
const HITMAX6 = 21;

const HITMIN7 = 22;//マン
const HITMAX7 = 22;

const DROP_POWER_TIME  = 40;
const DROP_POWER_TIME2 = 20;
const DROP_POWER_DY = 9;

const DROP_BOM_TIME = 30;

var SOUND_FILE = ["01_bgm", "02_gameover", "03_pan", "04_bubu", "05_voice1", "06_voice2", "07_get", "08_bisi", "09_dokan", "10_win"];

//pc
var AD1 = "";
AD1 += "<!-- admax -->";
AD1 += "<script src=\"https://adm.shinobi.jp/s/747d269ab1efb4a8f8542d93ed3b9167\"></script>";
AD1 += "<!-- admax -->";

//sp
var AD2 = "";
AD2 += "<!-- admax -->";
AD2 += "<script src=\"https://adm.shinobi.jp/s/747d269ab1efb4a8f8542d93ed3b9167\"></script>";
AD2 += "<!-- admax -->";

const URL_DATA = "https://www.printdora.net/home/data.php";