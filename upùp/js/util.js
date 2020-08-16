//util : 引数objでないもの

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function setFocusXY(focusObj) {
	focusObj.x = getRandomInt(WDX) + WSX;
	focusObj.y = getRandomInt(WDY) + WSY;
	var rx = getRandomInt(2);
	var ry = getRandomInt(2);
	if(rx==0) rx = -1;
	if(ry==0) ry = -1;
	focusObj.dx = FDX * rx;
	focusObj.dy = FDY * ry;
}

//残り時間表示
function setRemaindTime(numberMc, remaindTime) {
	setNumberMc(numberMc, remaindTime);
}

function setNumberMc(numberMc, number) {
	if(number<0) number = 0;
	var d3 = Math.floor(number/100);
	var d2 = Math.floor((number - d3*100) / 10);
	var d1 = number - d3*100 - d2*10;
	if(d3 == 0) {
		numberMc.unit3.gotoAndStop(11);
	} else {
		numberMc.unit3.gotoAndStop(d3+1);
	}
	if(d2 == 0 && d3==0) {
		numberMc.unit2.gotoAndStop(11);
	} else {
		numberMc.unit2.gotoAndStop(d2+1);
	}
	numberMc.unit1.gotoAndStop(d1+1);
}

//decimal
function setNumberMc2(numberMc, number) {
	var d3 = Math.floor(number/100);
	var d2 = Math.floor((number - d3*100) / 10);
	var d1 = number - d3*100 - d2*10;
	numberMc.unit3.gotoAndStop(d3+1);
	numberMc.unit2.gotoAndStop(d2+1);
	numberMc.unit1.gotoAndStop(d1+1);
}

function stopNumber(numberMc) {
	numberMc.visible = false;
	
}

//フォーカスを動作させる
function moveFocusUnit(focusObj) {
	focusObj.x += focusObj.dx;
	focusObj.y += focusObj.dy;
	if(focusObj.x < WSX && focusObj.dx < 0) {
		focusObj.dx *= -1;
	}
	if(focusObj.x > WEX && focusObj.dx > 0) {
		focusObj.dx *= -1;
	}
	if(focusObj.y < WSY && focusObj.dy < 0) {
		focusObj.dy *= -1;
	}
	if(focusObj.y > WEY && focusObj.dy > 0) {
		focusObj.dy *= -1;
	}

}

//ダメージ量を取得します
function getDamage(hitObj, focusObj) {
	if(focusObj.x > hitObj.x) {
		if(focusObj.x < hitObj.x + hitObj.nominalBounds.width) {
			if(focusObj.y > hitObj.y) {
				if(focusObj.y < hitObj.y + hitObj.nominalBounds.height) {
					var centerX = (hitObj.x + hitObj.x + hitObj.nominalBounds.width)/2;
					var centerY = (hitObj.y + hitObj.y + hitObj.nominalBounds.height)/2;
					var distance = Math.pow(focusObj.x - centerX, 2) + Math.pow(focusObj.y - centerY, 2);
					var maxdistance = Math.pow(hitObj.x - centerX, 2) + Math.pow(hitObj.y - centerY, 2);
					var distanceRate = Math.floor(distance / maxdistance * 100);
					var damage = Math.floor( (AP_MAX - AP_MIN) * (100-distanceRate) / 100 ) + AP_MIN;
					//var damage = AP_MAX;
					return damage;
				}
			}
		}
	}
	return 0;
}

//パワーあたり判定
function isHitPower(powerMc, focusObj) {
	if(focusObj.x > powerMc.x) {
		if(focusObj.x < powerMc.x + powerMc.nominalBounds.width) {
			if(focusObj.y > powerMc.y) {
				if(focusObj.y < powerMc.y + powerMc.nominalBounds.height) {
					return true;
				}
			}
		}
	}
	return false;
}

//サウンドを一旦読み込みます
function loadSound() {
	var audioTimes = new Array();
	var audios = new Array();

	for(var i=0; i<SOUND_FILE.length; i++) {
		var soundFileName = SOUND_FILE[i];
		audios[i] = new Audio();
		audios[i].src = "sound/" + soundFileName + ".mp3"; 
		
		audios[i].load();
		audios[i].filename = soundFileName;
		
		/*
		audios[soundFileName].addEventListener("loadedmetadata",function (e){
			audioTimes[e.target.filename] = audios[e.target.filename].duration;
			if(e.target.filename == "99") {
				return audios;
			}

		});
		*/
	}
	return audios;
}

//音を出します
function playsound(obj, soundKey) {
	if(obj.soundFlg == 2) return;
	obj.audios[soundKey].play();
}

function stopsound(obj, soundKey) {
	obj.audios[soundKey].pause() ;
	obj.audios[soundKey].currentTime = 0 ;
}

function getAdText() {
	if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
		//sp
		return AD2;
	} else {
		//pc
		return AD1;
	}
}

function orgRound(value, base) {
    return Math.round(value * base) / base;
}

//データ
function ajaxData(st, op) {
	//console.log(URL_DATA + "?aid=1&st="+st+"&op="+op);
	$.ajax(URL_DATA + "?aid=1&st="+st+"&op="+op, {
        type: 'get',
        //data: { "aid":"1" , "st": st, "op": op },
        dataType: 'json',
        timeout: 1000,
      }
    )
    // 通信成功
    .done(function(res) {
        //console.log('通信成功'+op);
        //console.log(res);
        //console.log("XMLHttpRequest : " + JSON.stringify(res));
    })
    // 通信失敗(タイムアウトまたはサーバエラー)
    .fail(function(XMLHttpRequest, textStatus, errorThrown) {
        //console.log("通信失敗"+op);
        //console.log("XMLHttpRequest : " + JSON.stringify(XMLHttpRequest));
        //console.log("textStatus     : " + textStatus);
        //console.log("errorThrown    : " + errorThrown.message);
    });
}

//記録の表示
function displayRecord(record_mc) {
	var recordRemindTime = localStorage.getItem("focus_reimu_rrt");
	var recordDecimalTime = localStorage.getItem("focus_reimu_rdt");
	console.log("recordRemindTime:" + recordRemindTime + "." + recordDecimalTime);
	if(recordRemindTime == undefined || recordRemindTime == null || recordRemindTime==0) {
		record_mc.visible = false;
	} else {
		record_mc.visible = true;
		record_mc.record_time1.gotoAndStop(0);
		record_mc.record_time2.gotoAndStop(0);
		setNumberMc(record_mc.record_time1.n, REMAIND_TIME - recordRemindTime - 1);
		setNumberMc2(record_mc.record_time2.n, recordDecimalTime);
	}

}