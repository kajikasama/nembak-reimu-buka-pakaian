function onSound(obj) {
	if(obj.soundFlg == 1) {
		localStorage.setItem( "focus_reimu_sound", 2);
		obj.soundFlg = 2;
		obj.btn_sound_mc.gotoAndStop(1);
	} else {
		localStorage.setItem( "focus_reimu_sound", 1);
		obj.soundFlg = 1;
		obj.btn_sound_mc.gotoAndStop(0);
	}
}

function onTouch(obj) {
	//console.log("onTouch  status = " + obj.status);
	if(obj.status == STATUS_TOP) {
		onTop(obj);
	} else if(obj.status == STATUS_PREGAME) {
		onPregame(obj);
	} else if(obj.status == STATUS_GAME) {
		onGame(obj);
	} else if(obj.status == STATUS_FINISH) {
		onFinish(obj);
	} else if(obj.status == STATUS_GAMEOVER && obj.gameFinishFlg) {
		onGameover(obj);
	} else if(obj.status == STATUS_GAMECLEAR && obj.gameFinishFlg) {
		onGameclear(obj);
	}
}

//トップページでのタッチ
function onTop(obj) {
	//ゲーム開始
	obj.status = STATUS_PREGAME;
	obj.gotoAndStop(2);

	obj.ending_mc.stop();
	obj.effect_star_mc.stop();
	obj.bom_effect_mc.stop();
	obj.gameover_mc.stop();
	obj.btn_tweet_mc.visible = false;

	//ダメージ数値の初期化
	for(var i=1; i<=3; i++) {
		for(var j=1; j<=7; j++) {
			//[focus][star]
			eval("obj.damage_number_mc" + i + "" + j).x = 545;
			eval("obj.damage_number_mc" + i + "" + j).gotoAndStop(10);
		}
	}

	obj.number_mc.visible = false;
	obj.number_mc2.visible = false;
	obj.hp_number_mc1.visible = false;
	obj.hp_number_mc2.visible = false;
	obj.hp_number_mc3.visible = false;
	obj.hp_number_mc4.visible = false;
	obj.hp_number_mc5.visible = false;

	obj.audios[0].volume = 0.15;
	obj.audios[9].volume = 0.15;
	playsound(obj, 0);//bgm

	//あたり判定　非表示
	if(!OUT_TEST_FLG) {
		for(var j=1; j<=HITMAX7; j++) {
			var hitObj = eval("obj.hit_mc" + j);
			hitObj.visible = false;
		}
	}
	
	for(var i=1; i<=3; i++) {
		var focusObj = eval("obj.focus_mc" + i);
		focusObj.x = -200;
	}

	//スタート！
	//start_mcが勝手に動作する
	obj.timeoutId = setTimeout(gamePreStart, 20, obj);

	ajaxData(1, "start");
}

function onPregame(obj) {

}

//ゲーム中のタッチ
function onGame(obj) {
	//攻撃
	attack(obj);

}

function onFinish(obj) {

}

function onGameclear(obj) {
	//location.reload();
	console.log("onGameclear");

	obj.ending_mc.gotoAndPlay(1);

	//初期化
	//ダメージ数値の初期化
	for(var i=1; i<=3; i++) {
		for(var j=1; j<=7; j++) {
			//[focus][star]
			eval("obj.damage_number_mc" + i + "" + j).gotoAndStop(10);
		}
	}

	obj.gotoAndStop(1);
	if(obj.soundFlg == 1) {
		obj.btn_sound_mc.gotoAndStop(0);
	} else {
		obj.btn_sound_mc.gotoAndStop(1);
	}

	displayRecord(obj.record_mc);

	format(obj);
	

}

function onGameover(obj) {
	//location.reload();
	console.log("onGameover");

	//初期化
	//ダメージ数値の初期化
	for(var i=1; i<=3; i++) {
		for(var j=1; j<=7; j++) {
			//[focus][star]
			eval("obj.damage_number_mc" + i + "" + j).gotoAndStop(10);
		}
	}

	obj.gotoAndStop(1);
	if(obj.soundFlg == 1) {
		obj.btn_sound_mc.gotoAndStop(0);
	} else {
		obj.btn_sound_mc.gotoAndStop(1);
	}

	displayRecord(obj.record_mc);

	format(obj);
	
}

//ゲーム中のframe
function onFrame(obj) {
	if(obj.status >= STATUS_FINISH) return;
	//obj.endTime = new Date();

	//console.log('経過時間：' + (obj.endTime.getTime() - obj.startTime.getTime()) + 'ミリ秒');

	//全時間
	//obj.timeCounter += INTERVAL;

	//スター時間
	exeStarProgress(obj);

	//フォーカスを動かす
	moveFocus(obj);

	//時間を進める
	progressRemaindTime(obj);

	//まばたき
	exeEyes(obj);

	//P落とす
	dropPower(obj);

	//B落とす
	dropBom(obj);

	//obj.startTime = new Date();
}

//ツイートボタン
function onTweet(obj) {
	setNumberMc(obj.ending_mc.time1.n, REMAIND_TIME - obj.remaindTime - 1);
	var decimalTime = Math.floor(obj.remaindTimeCounter / 30 * 1000);
	var resultTime = (REMAIND_TIME - obj.remaindTime - 1) + "." + decimalTime;

	var tweetStr = "";
	tweetStr += "https://twitter.com/intent/tweet?related=odm&source=tweetbutton&text=";
	//tweetStr += encodeURI(" #霊夢ちゃんお脱がしタイム ");
	//tweetStr += encodeURI(" 記録　" + resultTime + "秒");
	//tweetStr += encodeURI(" http://printdora-s3-files.s3-website-ap-northeast-1.amazonaws.com/1/focusReimu.html ");
	tweetStr += "%23霊夢ちゃんお脱がしタイム";
	tweetStr += "%20記録+" + resultTime + "秒";
	tweetStr += "%20http://printdora-s3-files.s3-website-ap-northeast-1.amazonaws.com/1/focusReimu.html";
	console.log(tweetStr);
	open( tweetStr, "_blank" ) ;
	//window.location = tweetStr;
}
