function exe_root_1(obj) {
	obj.stop();
	format(obj);
	console.log("exe");
	reflashAd();
	//console.log(obj.hit_mc1.nominalBounds);

	//テスト
	//データクリア
	/*
	localStorage.removeItem( "focus_reimu_sound");
	localStorage.removeItem( "focus_reimu_rrt");
	localStorage.removeItem( "focus_reimu_rdt");
	*/
	
	//ボタン
	obj.btn_display_mc.addEventListener('click', obj, false);
	obj.btn_display_mc.addEventListener('touchstart', obj, false);
	obj.btn_start_mc.addEventListener('click', obj, false);
	obj.btn_start_mc.addEventListener('touchstart', obj, false);
	obj.btn_sound_mc.addEventListener('click', obj, false);
	obj.btn_sound_mc.addEventListener('touchstart', obj, false);
	obj.btn_tweet_mc.addEventListener('click', obj, false);
	obj.btn_tweet_mc.addEventListener('touchstart', obj, false);
	obj.handleEvent = function(event) {
		switch(event.type) {
	      case 'click':
	      case 'touchstart':
	      	if(event.target.parent.name == "btn_display_mc") {
	        	onTouch(obj);
	        } else if(event.target.parent.name == "btn_start_mc") {
	        	onTouch(obj);
	        } else if(event.target.parent.name == "btn_sound_mc") {
	        	onSound(obj);
	        } else if(event.target.parent.name == "btn_tweet_mc" && obj.gameFinishFlg) {
	        	console.log("on tweet ");
	        	onTweet(obj);
	        } 
	        
	        break;
	    }
	};

	//初期MC割り当て
	obj.numberMc = eval("obj.number_mc");


	// 霊夢を非表示
	if(OUT_TEST_FLG) {
		obj.chara_mc.visible = false;
		obj.logo_mc.visible = false;	
	}

	//あたり判定を消す
	for(var i=1; i<=22; i++) {
		var hmc = eval("obj.hit_mc" + i);
		hmc.alpha = 0;
	}

	//hit位置の確認
	/*
	for(var i=1; i<=22; i++) {
		var hmc = eval("obj.hit_mc" + i);
		console.log("**** hit i=" + i);
		console.log("hmc_x=" + hmc.x);
		console.log("hmc_y=" + hmc.y);
		console.log("hmc_w=" + hmc.nominalBounds.width);
		console.log("hmc_h=" + hmc.nominalBounds.height);
	}
	*/

	//sound設定をstorageeから取得
	//localStorage.setItem( "focus_reimu_sound", 1);
	obj.soundFlg = localStorage.getItem("focus_reimu_sound");
	if(obj.soundFlg == undefined || obj.soundFlg == null || obj.soundFlg==0) {
		obj.soundFlg = 1;
		localStorage.setItem( "focus_reimu_sound", 1);
	}

	if(obj.soundFlg == 1) {
		obj.btn_sound_mc.gotoAndStop(0);
	} else {
		obj.btn_sound_mc.gotoAndStop(1);
	}

	obj.audios = loadSound();

	//初期設定

	obj.recordRemindTime = localStorage.getItem("focus_reimu_rrt");
	if(obj.recordRemindTime == undefined || obj.recordRemindTime == null) {
		obj.recordRemindTime = 0;
		localStorage.setItem( "focus_reimu_rrt", 0);
	}
	obj.recordDecimalTime = localStorage.getItem("focus_reimu_rdt");
	if(obj.recordDecimalTime == undefined || obj.recordDecimalTime == null) {
		obj.recordDecimalTime = 0;
		localStorage.setItem( "focus_reimu_rdt", 0);
	}

	//レコード
	displayRecord(obj.record_mc);

	obj.btn_tweet_mc.visible = false;
}

//スタート演出後の処理
function exe_start(obj) {
	clearTimeout(obj.timeoutId);
	obj.status = STATUS_GAME;
	//ゲーム開始
	gameFormat(obj);
	//preGameclear(obj);
}

//------------
//フォーマット
//------------

//最初のフォーマット f3フレ目での処理
function format(obj) {
	obj.status = STATUS_TOP;//ステータス
	obj.hp1 = DEFAULT_HP1;//服上
	obj.hp2 = DEFAULT_HP2;//服下
	obj.hp3 = DEFAULT_HP3;//ブラ
	obj.hp4 = DEFAULT_HP4;//パンツ
	obj.hp5 = DEFAULT_HP5;//ハート
	obj.hp = new Array();
	obj.hp[1] = DEFAULT_HP1;
	obj.hp[2] = DEFAULT_HP2;
	obj.hp[3] = DEFAULT_HP3;
	obj.hp[4] = DEFAULT_HP4;
	obj.hp[5] = DEFAULT_HP5;
	obj.hitFlg = new Array();
	obj.remaindTime = REMAIND_TIME;//残り時間
	obj.remaindTimeCounter = 0;//時間カウンター
	obj.focusCount = 0;//フォーカス数
	obj.focuses = new Array();//フォーカス
	obj.sweatFlg = false;//あせかきフラグ
	obj.titsLeftFlg = false;
	obj.titsRightFlg = false;
	//obj.chara_mc.tits_left_mc.visible = false;
	//obj.chara_mc.tits_right_mc.visible = false;
	obj.chara_mc.sweat_mc.visible = false;
	obj.dropPowerFlg = false;
	obj.dropPowerFinishFlg = false;
	obj.dropBomFlg = false;
	obj.dropBomFinishFlg = false;
	obj.warningTimeFlg = false;

	//ダメージ数値の初期化
	for(var i=1; i<=3; i++) {
		for(var j=1; j<=7; j++) {
			//[focus][star]
			eval("obj.damage_number_mc" + i + "" + j).gotoAndStop(10);
		}
	}

	//アイテム
	obj.power_mc.y = -150;
	obj.bom_mc.y = -150;

	obj.damage_number_mcb1.y = -100;
	obj.damage_number_mcb2.y = -100;
	obj.damage_number_mcb3.y = -100;
	obj.damage_number_mcb4.y = -100;
	obj.damage_number_mcb5.y = -100;

	//服を戻す
	obj.chara_mc.cloth_mc1.alpha = 1;
	obj.chara_mc.cloth_mc2.alpha = 1;
	obj.chara_mc.cloth_mc3.alpha = 1;
	obj.chara_mc.cloth_mc4.alpha = 1;

	//表情を戻す
	obj.chara_mc.gotoAndStop(0);
}

function gamePreStart(obj) {
	obj.hp_number_mc1.visible = true;
	obj.hp_number_mc2.visible = true;
	obj.hp_number_mc3.visible = true;
	obj.hp_number_mc4.visible = true;
	obj.hp_number_mc5.visible = true;
	obj.number_mc.visible = true;
	setRemaindTime(obj.number_mc, REMAIND_TIME);
	//HP
	console.log("game pre start");
	displayHp(obj);
}

//ゲーム開始前フォーマット　＆　表示
function gameFormat(obj) {
	
	//あたり判定　存在フラグ
	obj.hitFlg[1] = true;//服上
	obj.hitFlg[2] = true;//服下
	obj.hitFlg[3] = false;//ブラ
	obj.hitFlg[4] = false;//パン
	obj.hitFlg[5] = true;//脇
	obj.hitFlg[6] = false;//胸
	obj.hitFlg[7] = false;//万

	//パワー
	obj.power = 5;

	//体力
	obj.star = 3;
	displayStar(obj);

	obj.eyeFlg = false;
	obj.damageEyeFlg = false;
	obj.takeOffEyeFlg = false;

	//フォーカス出現
	addFocus(obj);
	addFocus(obj);

	//インターバル開始
	obj.starCounter = 0;
	obj.timeCounter = 0;
	obj.intervalId = setInterval(onFrame, INTERVAL, obj);
	obj.startTime = new Date();

	obj.gameFinishFlg = false;
}

//ゲーム終了時フォーマット
function finishFormat(obj) {
	clearInterval(obj.intervalId);
	obj.status = STATUS_FINISH;
	console.log("finishFormat " + STATUS_FINISH);
}

//ゲームオーバー時処理
function gameover(obj) {
	finishFormat(obj);
	//ゲームオーバー演出
	obj.gameover_mc.gotoAndPlay(1);
	
	stopsound(obj, 0);
	playsound(obj, 1);
}

function exeGameover(obj) {
	//console.log("exeGameover " + STATUS_GAMEOVER);
	obj.status = STATUS_GAMEOVER;
	//console.log("exeGameover " + obj.status);
	obj.gameFinishFlg = true;

	ajaxData(2, "gameover");
	reflashAd();
}

//クリア前処理
function preGameclear(obj) {
	console.log("preGameclear");
	finishFormat(obj);

	stopsound(obj, 0);
	playsound(obj, 9);
	obj.clearId = setTimeout(kickPlaySoundForClear, 1000, obj);	


	//クリア演出
	obj.ending_mc.gotoAndPlay(1);
	obj.status = STATUS_GAMEOVER;

	//console.log("remaindTimeCounter = " + obj.remaindTimeCounter);// x20ms
	//console.log("remaindTime = " + obj.remaindTime);// 60-

	//経過時間
	//console.log("time = " + (60-obj.remaindTime) + "." + 34 * obj.remaindTimeCounter  );// 0-29

}

function kickPlaySoundForClear(obj) {
	console.log("kickPlaySoundForClear");
	clearTimeout(obj.clearId);
	playsound(obj, 5);
}

function exeGameclear(obj) {
	console.log("exeGameclear");
	obj.gameFinishFlg = true;
	obj.btn_tweet_mc.visible = true;

	//クリア時間
	obj.ending_mc.time1.stop();
	obj.ending_mc.time2.stop();
	setNumberMc(obj.ending_mc.time1.n, REMAIND_TIME - obj.remaindTime - 1);
	var decimalTime = Math.floor(obj.remaindTimeCounter / 30 * 1000);
	setNumberMc2(obj.ending_mc.time2.n, decimalTime);

	console.log("remaindTime=" + obj.remaindTime);
	console.log("decimalTime=" + decimalTime);

	console.log("recordRemindTime=" + obj.recordRemindTime);
	console.log("recordDecimalTime=" + obj.recordDecimalTime);
	obj.ending_mc.newrecord_mc.visible = false;

	if( obj.recordRemindTime == 0 || ((REMAIND_TIME - obj.remaindTime - 1) + decimalTime / 1000 < (REMAIND_TIME - obj.recordRemindTime - 1) + obj.recordDecimalTime / 1000) ) {
		obj.ending_mc.newrecord_mc.visible = true;
		console.log("recordRemindTime=" + obj.recordRemindTime);
		console.log("recordDecimalTime=" + obj.recordDecimalTime);
		obj.recordRemindTime = obj.remaindTime;
		obj.recordDecimalTime = decimalTime;
		localStorage.setItem( "focus_reimu_rrt", obj.remaindTime);
		localStorage.setItem( "focus_reimu_rdt", decimalTime);
	}

	//レコードクリア時間
	obj.ending_mc.record_time1.stop();
	obj.ending_mc.record_time2.stop();
	setNumberMc(obj.ending_mc.record_time1.n, REMAIND_TIME - obj.recordRemindTime - 1);
	setNumberMc2(obj.ending_mc.record_time2.n, obj.recordDecimalTime);	
	
	ajaxData(3, "score_" + (REMAIND_TIME - obj.remaindTime - 1) + "." + decimalTime);
	reflashAd();
}

//時間を進める
function progressRemaindTime(obj) {
	obj.remaindTimeCounter ++;
	if(obj.remaindTimeCounter >= MAX_TIME_COUNTER) {
		obj.remaindTimeCounter = 0;
		obj.remaindTime --;
		
		if(obj.remaindTime <= 0) {
			//finishFormat(obj);
			gameover(obj);
		}
		if(obj.remaindTime <= 10 && !obj.warningTimeFlg) {
			obj.number_mc2.visible = true;
			obj.number_mc.visible = false;
			obj.warningTimeFlg = true;
		}
		if(obj.warningTimeFlg) {
			setRemaindTime(obj.number_mc2, obj.remaindTime);
		} else {
			setRemaindTime(obj.number_mc, obj.remaindTime);
		}
	}
}

//まばたき
//ダメージの顔のときはまばたきさせない
function exeEyes(obj) {
	//まばたき中はまばたきしない
	if(obj.eyeFlg) return;

	//ダメージ中はまばたきしない
	if(obj.damageEyeFlg) return;

	//脱ぎ表情の時はまばたきしない
	if(obj.takeOffEyeFlg) return;

	var r = getRandomInt(100);
	if(r < 98) return;

	obj.eyeFlg = true;

	if(obj.hitFlg[7]) {
		//下脱ぎ
		obj.chara_mc.gotoAndStop(5);
	} else {
		//通常
		obj.chara_mc.gotoAndStop(3);
	}

	obj.backEyeId = setTimeout(backEyes, 100, obj);	

}

//目を戻す
function backEyes(obj) {
	clearTimeout(obj.backEyeId);
	obj.eyeFlg = false;
	obj.damageEyeFlg = false;
	obj.takeOffEyeFlg = false;
	if(obj.hitFlg[7]) {
		//下脱ぎ
		obj.chara_mc.gotoAndStop(4);
	} else {
		//通常
		obj.chara_mc.gotoAndStop(0);
	}
}

//Pを落とす
function dropPower(obj) {
	if(obj.dropPowerFlg) {
		obj.power_mc.y += DROP_POWER_DY;
		if(obj.power_mc.y > 850) {
			//obj.dropPowerFinishFlg = true;
			obj.dropPowerFlg = false;
			obj.power_mc.y = -150;
		}
		return;
	} else {
		//落とし始め判定
		if(obj.focusCount >= MAX_FOCUS_COUNT) return;
		if(obj.remaindTime == DROP_POWER_TIME || obj.remaindTime == DROP_POWER_TIME2) {
			obj.dropPowerFlg = true;
			obj.power_mc.x = getRandomInt(320) + 30;
		}
		
	}
}

//Bを落とす
function dropBom(obj) {
	if(obj.dropBomFinishFlg) return;
	if(obj.dropBomFlg) {
		obj.bom_mc.y += DROP_POWER_DY;
		if(obj.bom_mc.y > 850) {
			obj.dropBomFinishFlg = true;
		}
		return;
	} else {
		//落とし始め判定
		if(obj.remaindTime != DROP_BOM_TIME) return;
		obj.dropBomFlg = true;
		obj.bom_mc.x = getRandomInt(320) + 30;
	}
}

//フォーカスを追加する
function addFocus(obj) {
	if(obj.focusCount >= MAX_FOCUS_COUNT) return;
	obj.focusCount ++;
	var focusObj = eval("obj.focus_mc" + obj.focusCount);
	setFocusXY(focusObj);
	obj.focuses.push(focusObj);
}

//フォーカスを動作させる
function moveFocus(obj) {
	for(var i=1; i<=obj.focusCount; i++) {
		var focusObj = eval("obj.focus_mc" + i);
		moveFocusUnit(focusObj);
	}
}

//攻撃
function attack(obj) {
	if(obj.star <= 0) {
		//スターを赤く光らせる
		obj.effect_star_mc.gotoAndPlay(1);
		return;
	}

	//スターを減らす
	var nowStarNumber = obj.star;
	obj.star --;
	displayStar(obj);

	var isHitFlg = false;

	//P判定
	//フォーカス数
	for(var k=1; k<=obj.focusCount; k++) {
		var focusObj = eval("obj.focus_mc" + k);
		if(isHitPower(obj.power_mc, focusObj)) {
			obj.dropPowerFlg       = false;
			obj.dropPowerFinishFlg = true;
			obj.power_mc.y = -100;
			addFocus(obj);
			//音を出す
			playsound(obj, 6);//ゲット
		}

		if(isHitPower(obj.bom_mc, focusObj)) {
			console.log("hit bom!!");
			obj.dropBomFlg       = true;
			obj.dropBomFinishFlg = true;
			obj.bom_mc.y = -100;
			obj.bom_effect_mc.gotoAndPlay(1);
			//音を出す
			playsound(obj, 8);//ドカン
			//ダメージ
			for(var i=1; i<=5; i++) {
				if(obj.hp[i] > 0) {
					obj.hp[i] -= 10;
					exeHp(obj, i);
					var dnb = eval("obj.damage_number_mcb" + i);
					dnb.y = 10;
					setNumberMc(dnb.n, 10);
					dnb.gotoAndPlay(1);
				}
			}
			displayHp(obj);
		}
	}	

	//あたり判定箇所ごとにループ
	for(var i=1; i<=HIT_COUNT; i++) {
		if(!obj.hitFlg[i]) continue;

		//ダメージ
		var damage = 0;

		//判定
		var hitmin = eval("HITMIN" + i);
		var hitmax = eval("HITMAX" + i);
		for(var j=hitmin; j<=hitmax; j++) {
			var hitObj = eval("obj.hit_mc" + j);
			//フォーカス数
			for(var k=1; k<=obj.focusCount; k++) {
				var focusObj = eval("obj.focus_mc" + k);
				//console.log("focus:" + k + " / hit_mc:" + j + " / i=" + i);
				var unitDamage = getDamage(hitObj, focusObj);
				//脇なら半分にする
				if(i==5 && unitDamage>0) {
					unitDamage = Math.floor(unitDamage / 3);
					if(unitDamage==0) unitDamage=1;
				}
				damage += unitDamage;

				if(unitDamage > 0) {
					//if(i==7) console.log("hitNumber:" + i + " / hit_mc:" + j + " / damage=" + damage);

					//ダメージポップ
					//[focus][star]
					var damageNumberMc = eval("obj.damage_number_mc" + k + "" + nowStarNumber);
					//if(i==7) console.log("damage_number_mc" + k + "" + nowStarNumber);
					damageNumberMc.x = focusObj.x;
					damageNumberMc.y = focusObj.y;
					damageNumberMc.gotoAndPlay(0);
					setNumberMc(damageNumberMc.n, unitDamage);

				} else {
					//console.log("***  miss");
				}
				
				//フォーカスごとに演出
				//クリティカル
				if(i==CRITICAL_HIT) {
					damage += CRITICAL_BONUS;
				}
			}
		}

		if(damage == 0) continue;
		isHitFlg = true;
		
		//あたり箇所ごとに計算
		if(i==5 || i==6 || i==7) {
			obj.hp[5] -= damage;
		} else {
			obj.hp[i] -= damage;
		}
		
		exeHp(obj, i);
		
		displayHp(obj);

		obj.backEyeId = setTimeout(backEyes, 500, obj);

		if(obj.sweatFlg) continue;
		if(obj.hp[5] < 50) {
			obj.sweatFlg = true;
			obj.chara_mc.sweat_mc.visible = true;
		}
		
	}

	//フォーカス数
	for(var k=1; k<=obj.focusCount; k++) {
		var focusObj = eval("obj.focus_mc" + k);
		focusObj.gotoAndPlay(1);
	}

	//if(isHitFlg) playsound(obj, 2);//パン
	if(isHitFlg) playsound(obj, 7);//ビシ

	//クリア
	if(obj.hp[5]<=0) {
		preGameclear(obj);
	}


}

//HPを減らした時の処理
function exeHp(obj, hpNumber) {
	
	obj.damageEyeFlg = true;

	if(obj.hp[hpNumber] <= 0) {
		obj.hp[hpNumber] = 0;
		if(hpNumber <= 4) {
			var clothMc = eval("obj.chara_mc.cloth_mc" + hpNumber);
			clothMc.alpha = 0;
		}
		
		playsound(obj, 4);//ひっ
		obj.chara_mc.gotoAndStop(4);
		obj.takeOffEyeFlg = true;
		
		//新たなあたり判定の開放
		obj.hitFlg[hpNumber] = false;
		//服上の場合 -> ブラ
		if(hpNumber==1) obj.hitFlg[3] = true;
		//服下の場合 -> パン
		if(hpNumber==2) obj.hitFlg[4] = true;
		//ブラ -> 胸
		if(hpNumber==3) obj.hitFlg[6] = true;
		//パン -> マン
		if(hpNumber==4) obj.hitFlg[7] = true;

	} else {
		if(!obj.takeOffEyeFlg) {
			if(obj.hitFlg[7]) {
				//下脱ぎ
				obj.chara_mc.gotoAndStop(6);
			} else {
				//通常
				obj.chara_mc.gotoAndStop(2);
			}
		}
	}

	
}

//残りHP表示
function displayHp(obj) {
	/*
	obj.hp_txt1.text = obj.hp1;
	obj.hp_txt2.text = obj.hp2;
	obj.hp_txt3.text = obj.hp3;
	obj.hp_txt4.text = obj.hp4;
	obj.hp_txt5.text = obj.hp5;
	*/
	setNumberMc(obj.hp_number_mc1, obj.hp[1]);
	setNumberMc(obj.hp_number_mc2, obj.hp[2]);
	setNumberMc(obj.hp_number_mc3, obj.hp[3]);
	setNumberMc(obj.hp_number_mc4, obj.hp[4]);
	setNumberMc(obj.hp_number_mc5, obj.hp[5]);
	
	//透過処理
	if(obj.hp[1] > 0) obj.chara_mc.cloth_mc1.alpha = obj.hp[1] / DEFAULT_HP1 + 0.20;
	if(obj.hp[2] > 0) obj.chara_mc.cloth_mc2.alpha = obj.hp[2] / DEFAULT_HP2 + 0.20;
	if(obj.hp[3] > 0) obj.chara_mc.cloth_mc3.alpha = obj.hp[3] / DEFAULT_HP3 + 0.20;
	if(obj.hp[4] > 0) obj.chara_mc.cloth_mc4.alpha = obj.hp[4] / DEFAULT_HP4 + 0.20;

	//メータ処理
	obj.hp_bar_mc1.b.scaleX = obj.hp[1] / DEFAULT_HP1;
	obj.hp_bar_mc2.b.scaleX = obj.hp[2] / DEFAULT_HP2;
	obj.hp_bar_mc3.b.scaleX = obj.hp[3] / DEFAULT_HP3;
	obj.hp_bar_mc4.b.scaleX = obj.hp[4] / DEFAULT_HP4;
	obj.hp_bar_mc5.b.scaleX = obj.hp[5] / DEFAULT_HP5;
}

//スターの表示
function displayStar(obj) {
	obj.s1.gotoAndStop(0);
	obj.s2.gotoAndStop(0);
	obj.s3.gotoAndStop(0);
	obj.s4.gotoAndStop(0);
	obj.s5.gotoAndStop(0);
	obj.s6.gotoAndStop(0);
	obj.s7.gotoAndStop(0);
	for(var i=1; i<=obj.star; i++) {
		var s = eval("obj.s" + i);
		s.gotoAndStop(1);
	}
	
}

//スターの回復
function exeStarProgress(obj) {
	obj.starCounter += 1;
	if(obj.starCounter > STAR_ADD_COUNT && obj.star < MAX_STAR_COUNT) {
		obj.starCounter = 0;
		obj.star ++;
		displayStar(obj);
	}
}


