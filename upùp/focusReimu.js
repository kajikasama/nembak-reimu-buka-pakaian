(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.B = function() {
	this.initialize(img.B);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.icon_1 = function() {
	this.initialize(img.icon_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.icon_2 = function() {
	this.initialize(img.icon_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.icon_3 = function() {
	this.initialize(img.icon_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.icon_4 = function() {
	this.initialize(img.icon_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.icon_frame = function() {
	this.initialize(img.icon_frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,480);


(lib.P = function() {
	this.initialize(img.P);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.window1 = function() {
	this.initialize(img.window1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,200);


(lib.パンツ = function() {
	this.initialize(img.パンツ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.ブラ = function() {
	this.initialize(img.ブラ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.右胸 = function() {
	this.initialize(img.右胸);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.左胸 = function() {
	this.initialize(img.左胸);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.服上 = function() {
	this.initialize(img.服上);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.服下 = function() {
	this.initialize(img.服下);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.汗 = function() {
	this.initialize(img.汗);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.点 = function() {
	this.initialize(img.点);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.霊夢0 = function() {
	this.initialize(img.霊夢0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢1 = function() {
	this.initialize(img.霊夢1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢2 = function() {
	this.initialize(img.霊夢2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢3 = function() {
	this.initialize(img.霊夢3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢4 = function() {
	this.initialize(img.霊夢4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢5 = function() {
	this.initialize(img.霊夢5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);


(lib.霊夢アクメ = function() {
	this.initialize(img.霊夢アクメ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("Eggzgp5MBBnAAAMAAABTzMhBnAAAg");
	this.shape.setTransform(210,268.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,423,539.4);


(lib.TitsRightMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.右胸();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TitsRightMc, new cjs.Rectangle(0,0,480,800), null);


(lib.TitsLeftMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.左胸();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TitsLeftMc, new cjs.Rectangle(0,0,480,800), null);


(lib.SweatMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.汗();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SweatMc, new cjs.Rectangle(0,0,480,800), null);


(lib.sound_on = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgWjTIAtAAIAAGnIgtAAg");
	this.shape.setTransform(47.8,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzRBpIhuAAIAAjRIBuAAIBvhwIAAGwgAt4DXIAAmnIAtAAIAAGngAvRCnIAAlIIAsAAIAAFIgANcBjQghgiAAg5QAAg4AhggQAigjA6AAQA5AAAhAjQAiAgAAA3QAAA5giAiQgiAig6ABQg4AAgigigAORgoQgOASAAAeQAAAfAOASQAOASAZAAQAYAAAOgSQANgRAAggQAAgegNgSQgOgSgYAAQgZAAgOASgAl4BjQgigiAAg5QAAg4AiggQAhgjA6AAQA5AAAhAjQAjAgAAA3QAAA5gkAiQghAig5ABQg5AAghgigAlEgoQgOASAAAeQAAAfAOASQAOASAZAAQAYAAANgSQAPgRAAggQAAgegPgSQgNgSgYAAQgZAAgOASgAG6BiQgeggAAg6QAAg7AgggQAdgdAwgBQAqAAAjAdIAAgvQAAgkgDgWIBOAAQgEAVAAAlIAADDQAAAiAEAZIhLAAIAAgTQgTAPgQAFQgRAHgXAAQg1gBgcgggAH0glQgPARAAAcQgBAhATARQAOAOAXAAQAYAAARgSQAQgTAAgcQAAgagQgSQgRgSgZAAQgZAAgOASgAqABdQgKgPgFgXIBKgJQAHAdAkAAQAjAAAAgSQAAgJgIgFQgHgEgXgEQgmgIgUgGQgagKgLgQQgKgQAAgUQABgiAbgTQAbgTAvgBQA2AAAaAZQAQAOAJAdIhIAIQgEgXgdAAQgfAAAAARQAAAHAIAEQAKAFAbAGQAuAJAQAJQAkAQAAApQAAAfgTASQgcAdg9AAQhJAAgbgmgAhqBsQgVgVAAgqIAAhfQgBgegDgaIBPAAQgDAYAAAgIAABNQAAAUAGAIQAIAMAQgBQAgAAAYgnIAAhNQAAgdgDgbIBPAAQgEAYAAAgIAAB0QAAAmAEATIhMAAIABgaQgTASgRAHQgSAHgYgBQgmAAgWgUgATyB7QACgYABghIAAhMQgBgTgFgJQgHgLgTABQgfAAgYAnIAABLQAAAgACAZIhNAAQACgYAAghIAAhyQAAgmgCgUIBLAAIgBAaQAigeAsAAQAoAAAUAUQAXAVAAAqIAABdQgBAhADAYgAExB7QACgYAAghIAAhMQABgTgHgJQgHgLgSABQgfAAgZAnIAABLQAAAgAEAZIhPAAQADgYAAghIAAhyQAAgmgDgUIBLAAIgBAaQAjgeAsAAQAnAAAWAUQAVAVAAAqIAABdQAAAhADAYgAwrB0IAAjjIAtAAIAADjg");
	this.shape_1.setTransform(134.4,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("A0VBpIhuAAIAAjRIBuAAIBwhwIAAGwgAm8BjQghgiAAg5QAAg4AhggQAigjA5AAQA5AAAiAjQAiAgAAA3QAAA5gjAiQgiAig5ABQg4AAgigigAmIgoQgOASAAAeQAAAfAOASQAPASAYAAQAZAAANgSQAOgRAAggQAAgegOgSQgNgSgZAAQgYAAgPASgAF2BiQgeggAAg6QAAg7AgggQAegdAvgBQAqAAAjAdIAAgvQAAgkgDgWIBOAAQgDAVAAAlIAADDQAAAiADAZIhLAAIAAgTQgTAPgQAFQgRAHgXAAQg0gBgdgggAGwglQgPARAAAcQAAAhASARQAOAOAXAAQAYAAARgSQAQgTAAgcQAAgagQgSQgRgSgZAAQgZAAgOASgArEBdQgKgPgFgXIBLgJQAGAdAkAAQAjAAAAgSQAAgJgIgFQgHgEgXgEQgmgIgTgGQgagKgMgQQgJgQAAgUQAAgiAbgTQAbgTAwgBQA1AAAbAZQAQAOAIAdIhIAIQgDgXgdAAQggAAAAARQAAAHAIAEQAKAFAbAGQAuAJAQAJQAkAQAAApQAAAfgTASQgbAdg+AAQhIAAgcgmgAiuBsQgVgVAAgqIAAhfQAAgegDgaIBOAAQgDAYAAAgIAABNQAAAUAGAIQAJAMAQgBQAhAAAXgnIAAhNQAAgdgDgbIBOAAQgDAYAAAgIAAB0QAAAmADATIhLAAIABgaQgTASgSAHQgSAHgYgBQgmAAgWgUgADtB7QADgYAAghIAAhMQAAgTgGgJQgIgLgSABQgfAAgYAnIAABLQAAAgADAZIhPAAQADgYAAghIAAhyQAAgmgDgUIBMAAIgBAaQAigeAsAAQAoAAAVAUQAVAVAAAqIAABdQAAAhADAYgAMXBZQghghAAg4QAAg2AhghQAhghA4AAQA4AAAhAhQAhAgAAA3QAAA2giAjQghAhg4AAQg3AAghghgANKgvQgOASAAAdQAAAfAOARQAOARAYAAQAYABANgSQAOgRAAgfQAAgdgOgSQgNgRgYAAQgYAAgOARgATxByQADgYAAghIAAhvIgKAAQgYAAgSACIAAg+QASADAYAAIAKAAIAAgRQAAgmAVgQQAVgSAuAAQAbAAAdAIIgMA2QgQgJgUAAQgOAAgGAGQgFAGAAAPIAAAJIAKAAQAaAAAYgDIAAA+QgWgCgbAAIgLAAIAABvQAAAhADAYgAQoByQADgYAAghIAAhvIgKAAQgYAAgSACIAAg+QASADAYAAIAKAAIAAgRQAAgmAVgQQAVgSAuAAQAbAAAdAIIgMA2QgQgJgUAAQgOAAgGAGQgFAGAAAPIAAAJIAKAAQAaAAAYgDIAAA+QgWgCgbAAIgLAAIAABvQAAAhADAYg");
	this.shape_2.setTransform(141.2,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	// レイヤー_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AShB7QgDgZAAgfIAAhMQAZgnAeAAQASAAAIAKQAGAJAAATIAABNQAAAhgDAXIBOAAQgCgYAAggIAAheQAAgqgWgVQgVgUgoAAQgsAAgiAfIABgbIhLAAQACAVAAAlIAABzQAAAhgCAXgAO4g6QAYAAANASQAPASAAAeQAAAggPARQgNASgYAAQgZAAgOgSQgOgSAAgfQAAgeAOgSQAOgSAZAAgAO2CFQA6AAAigjQAigiAAg5QAAg2gighQghgig5AAQg6AAgiAiQghAhAAA3QAAA5AhAiQAiAiA4AAgAJWB7IBLAAQgEgYAAgiIAAjEQAAgmAEgUIhOAAQADAWAAAkIAAAvQgjgcgrAAQgvAAgdAcQggAiAAA6QAAA6AeAgQAcAhA1AAQAXAAARgHQAQgFATgPgAIbg3QAZAAARASQAQASAAAaQAAAdgQASQgRASgZAAQgWAAgOgOQgTgRAAghQAAgcAQgRQAOgSAZAAgADfB7QgDgZAAgfIAAhMQAZgnAfAAQASAAAIAKQAGAJAAATIAABNQAAAhgEAXIBPAAQgDgYAAggIAAheQAAgqgWgVQgUgUgoAAQgtAAgiAfIABgbIhLAAQADAVAAAlIAABzQAAAhgDAXgAAchqQADAbAAAeIAABMQgXAoghAAQgQAAgIgMQgGgHAAgVIAAhMQAAggADgZIhPAAQADAaAAAfIAABeQAAAqAWAVQAWAVAlAAQAZAAASgHQARgHATgSIgBAaIBMAAQgEgTAAglIAAh0QAAggAEgZgAkdg6QAYAAANASQAPASAAAeQAAAggPARQgNASgYAAQgZAAgOgSQgOgSAAgfQAAgeAOgSQAOgSAZAAgAkeCFQA4AAAigjQAjgiAAg5QAAg2gighQgigig4AAQg6AAgiAiQghAhAAA3QAAA5AhAiQAiAiA5AAgAqPA3QAFAXAKAPQAbAmBIAAQA+AAAcgcQATgSAAggQAAgogkgRQgQgIgvgKQgbgGgJgEQgJgFAAgHQAAgRAgAAQAdAAADAXIBJgJQgJgcgQgOQgagZg2AAQgwAAgaAUQgcATAAAiQAAAUAKAQQALAQAaAKQATAGAmAIQAYAEAGAEQAJAFAAAJQAAASgjAAQglAAgGgcgAt4jQIAtAAIAAGnIgtAAgAvRihIAsAAIAAFIIgsAAgAwrhvIAtAAIAADjIgtAAgAzRBpIhuAAIAAjRIBuAAIBvhwIAAGxg");
	this.shape_3.setTransform(134.4,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AzRBpIhuAAIAAjRIBuAAIBvhwIAAGwgAt4DXIAAmnIAtAAIAAGngAvRCnIAAlIIAsAAIAAFIgANcBjQghgiAAg5QAAg4AhggQAigjA6AAQA5AAAhAjQAiAgAAA3QAAA5giAiQgiAig6ABQg4AAgigigAORgoQgOASAAAeQAAAfAOASQAOASAZAAQAYAAAOgSQANgRAAggQAAgegNgSQgOgSgYAAQgZAAgOASgAl4BjQgigiAAg5QAAg4AiggQAhgjA6AAQA5AAAhAjQAjAgAAA3QAAA5gkAiQghAig5ABQg5AAghgigAlEgoQgOASAAAeQAAAfAOASQAOASAZAAQAYAAANgSQAPgRAAggQAAgegPgSQgNgSgYAAQgZAAgOASgAG6BiQgeggAAg6QAAg7AgggQAdgdAwgBQAqAAAjAdIAAgvQAAgkgDgWIBOAAQgEAVAAAlIAADDQAAAiAEAZIhLAAIAAgTQgTAPgQAFQgRAHgXAAQg1gBgcgggAH0glQgPARAAAcQgBAhATARQAOAOAXAAQAYAAARgSQAQgTAAgcQAAgagQgSQgRgSgZAAQgZAAgOASgAqABdQgKgPgFgXIBKgJQAHAdAkAAQAjAAAAgSQAAgJgIgFQgHgEgXgEQgmgIgUgGQgagKgLgQQgKgQAAgUQABgiAbgTQAbgTAvgBQA2AAAaAZQAQAOAJAdIhIAIQgEgXgdAAQgfAAAAARQAAAHAIAEQAKAFAbAGQAuAJAQAJQAkAQAAApQAAAfgTASQgcAdg9AAQhJAAgbgmgAhqBsQgVgVAAgqIAAhfQgBgegDgaIBPAAQgDAYAAAgIAABNQAAAUAGAIQAIAMAQgBQAgAAAYgnIAAhNQAAgdgDgbIBPAAQgEAYAAAgIAAB0QAAAmAEATIhMAAIABgaQgTASgRAHQgSAHgYgBQgmAAgWgUgATyB7QACgYABghIAAhMQgBgTgFgJQgHgLgTABQgfAAgYAnIAABLQAAAgACAZIhNAAQACgYAAghIAAhyQAAgmgCgUIBLAAIgBAaQAigeAsAAQAoAAAUAUQAXAVAAAqIAABdQgBAhADAYgAExB7QACgYAAghIAAhMQABgTgHgJQgHgLgSABQgfAAgZAnIAABLQAAAgAEAZIhPAAQADgYAAghIAAhyQAAgmgDgUIBLAAIgBAaQAjgeAsAAQAnAAAWAUQAVAVAAAqIAABdQAAAhADAYgAwrB0IAAjjIAtAAIAADjg");
	this.shape_4.setTransform(134.4,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1).p("AT0g2IAABwQAAAggDAYIBNAAQgDgYAAggIAAhwIALAAQAbAAAWACIAAg+QgYADgaAAIgKAAIAAgJQAAgPAFgGQAGgGAOAAQAUAAAQAJIAMg2QgdgIgbAAQguAAgVASQgVAQAAAlIAAASIgKAAQgYAAgSgDIAAA+QASgCAYAAgAQrg2IAABwQAAAggDAYIBNAAQgDgYAAggIAAhwIALAAQAbAAAWACIAAg+QgYADgaAAIgKAAIAAgJQAAgPAFgGQAGgGAOAAQAUAAAQAJIAMg2QgdgIgbAAQguAAgVASQgVAQAAAlIAAASIgKAAQgYAAgSgDIAAA+QASgCAYAAgANwhAQAYAAANARQAOASAAAeQAAAfgOARQgNARgYAAQgYAAgOgSQgOgRAAgfQAAgdAOgSQAOgRAYAAgANvB6QA4AAAhghQAigiAAg3QAAg2ghghQghghg4AAQg4AAghAhQghAhAAA3QAAA3AhAhQAhAhA3AAgAISB7IBLAAQgDgYAAgiIAAjEQAAgmADgUIhOAAQADAWAAAkIAAAvQgjgcgqAAQgvAAgeAcQggAiAAA6QAAA6AeAgQAdAhA0AAQAXAAARgHQAQgFATgPgAHXg3QAZAAARASQAQASAAAaQAAAdgQASQgRASgYAAQgXAAgOgOQgSgRAAghQAAgcAPgRQAOgSAZAAgACcB7QgDgZAAgfIAAhMQAYgnAfAAQASAAAIAKQAGAJAAATIAABNQAAAhgDAXIBOAAQgDgYAAggIAAheQAAgqgVgVQgVgUgoAAQgsAAgiAfIABgbIhMAAQADAVAAAlIAABzQAAAhgDAXgAgnhqQADAbAAAeIAABMQgXAoghAAQgQAAgJgMQgGgHAAgVIAAhMQAAggADgZIhOAAQADAaAAAfIAABeQAAAqAVAVQAWAVAmAAQAYAAASgHQASgHATgSIgBAaIBLAAQgDgTAAglIAAh0QAAggADgZgAlhg6QAZAAANASQAOASAAAeQAAAggOARQgNASgZAAQgYAAgPgSQgOgSAAgfQAAgeAOgSQAPgSAYAAgAliCFQA5AAAigjQAjgiAAg5QAAg2gighQgigig5AAQg5AAgiAiQghAhAAA3QAAA5AhAiQAiAiA4AAgArTA3QAFAXAKAPQAcAmBIAAQA+AAAbgcQATgSAAggQAAgogkgRQgQgIgugKQgbgGgKgEQgIgFAAgHQAAgRAgAAQAdAAADAXIBIgJQgIgcgQgOQgbgZg1AAQgwAAgbAUQgbATAAAiQAAAUAJAQQAMAQAaAKQATAGAmAIQAXAEAHAEQAIAFAAAJQAAASgjAAQgkAAgGgcgA0VBpIhuAAIAAjRIBuAAIBwhwIAAGxg");
	this.shape_5.setTransform(141.2,21.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("A0VBpIhuAAIAAjRIBuAAIBwhwIAAGwgAm8BjQghgiAAg5QAAg4AhggQAigjA5AAQA5AAAiAjQAiAgAAA3QAAA5gjAiQgiAig5ABQg4AAgigigAmIgoQgOASAAAeQAAAfAOASQAPASAYAAQAZAAANgSQAOgRAAggQAAgegOgSQgNgSgZAAQgYAAgPASgAF2BiQgeggAAg6QAAg7AgggQAegdAvgBQAqAAAjAdIAAgvQAAgkgDgWIBOAAQgDAVAAAlIAADDQAAAiADAZIhLAAIAAgTQgTAPgQAFQgRAHgXAAQg0gBgdgggAGwglQgPARAAAcQAAAhASARQAOAOAXAAQAYAAARgSQAQgTAAgcQAAgagQgSQgRgSgZAAQgZAAgOASgArEBdQgKgPgFgXIBLgJQAGAdAkAAQAjAAAAgSQAAgJgIgFQgHgEgXgEQgmgIgTgGQgagKgMgQQgJgQAAgUQAAgiAbgTQAbgTAwgBQA1AAAbAZQAQAOAIAdIhIAIQgDgXgdAAQggAAAAARQAAAHAIAEQAKAFAbAGQAuAJAQAJQAkAQAAApQAAAfgTASQgbAdg+AAQhIAAgcgmgAiuBsQgVgVAAgqIAAhfQAAgegDgaIBOAAQgDAYAAAgIAABNQAAAUAGAIQAJAMAQgBQAhAAAXgnIAAhNQAAgdgDgbIBOAAQgDAYAAAgIAAB0QAAAmADATIhLAAIABgaQgTASgSAHQgSAHgYgBQgmAAgWgUgADtB7QADgYAAghIAAhMQAAgTgGgJQgIgLgSABQgfAAgYAnIAABLQAAAgADAZIhPAAQADgYAAghIAAhyQAAgmgDgUIBMAAIgBAaQAigeAsAAQAoAAAVAUQAVAVAAAqIAABdQAAAhADAYgAMXBZQghghAAg4QAAg2AhghQAhghA4AAQA4AAAhAhQAhAgAAA3QAAA2giAjQghAhg4AAQg3AAghghgANKgvQgOASAAAdQAAAfAOARQAOARAYAAQAYABANgSQAOgRAAgfQAAgdgOgSQgNgRgYAAQgYAAgOARgATxByQADgYAAghIAAhvIgKAAQgYAAgSACIAAg+QASADAYAAIAKAAIAAgRQAAgmAVgQQAVgSAuAAQAbAAAdAIIgMA2QgQgJgUAAQgOAAgGAGQgFAGAAAPIAAAJIAKAAQAaAAAYgDIAAA+QgWgCgbAAIgLAAIAABvQAAAhADAYgAQoByQADgYAAghIAAhvIgKAAQgYAAgSACIAAg+QASADAYAAIAKAAIAAgRQAAgmAVgQQAVgSAuAAQAbAAAdAIIgMA2QgQgJgUAAQgOAAgGAGQgFAGAAAPIAAAJIAKAAQAaAAAYgDIAAA+QgWgCgbAAIgLAAIAABvQAAAhADAYg");
	this.shape_6.setTransform(141.2,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,271.8,46.3);


(lib.PowerMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.P();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PowerMc, new cjs.Rectangle(0,0,100,100), null);


(lib.PointMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.点();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PointMc, new cjs.Rectangle(0,0,50,50), null);


(lib.moji_remaindtime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmEBGQAYgOAMgZQgGgIgIgIQgFAHgGAFQgGgPgJgMQAVgUAEgmIgEAAIgOABIAAgdIAWABIAkAAIAYgBIAAAYIASgBIgCgcIAfAAIgBARIAAAIIASgCIgQgNIAUgOQAMAIAJAJIgNAJIAHgBIAHgBIACAZIguAEIABAIIAqgFIACAXIgDAAIgQABIgYACIABAIIAxgFIACAZIgSABIgIAAIAUAOQgKAMgQAMQAHAIAEAAQAEAAAAgUQAKAJAMAGQgBAQgEAIQgGANgMAAQgJAAgKgHQgKgHgIgKQgaAOgbAIQgHgPgJgMQAegGAZgNQgEgLgCgOIghAEIgBgZIARgBIANgBIgBgIIgVADIgDgXIAXgCIAAgHIgLABIgPABIgCAbQgFAqgSAcQgMATgVARQgIgPgMgLgAj6ATIACAMQAKgHAFgHgAligGIANAKQACgHABgOIgLAAgAlXgqIAfgBIgBgPIgbAAgADZBeIABgbIgBibIA+ABIAVgBIAABJIg1gBIAABTIABAbgAD3gjIAZAAIAAgHIgZAAgAD3g7IAZAAIAAgHIgZAAgAB/BdQgCgPgEgKIgIAGQgKgTgNgOIAUgLIgXABIAAgeIAYABIAmAAIAAgKIg+ABIAAgdIAYABIAQAAIAAgMIgjABIAAgdIAWABIANAAIAAgEIgBgNIAeAAIAAANIAAAEIAPAAIAWgBIAAAdIgWgBIgPAAIAAAMIATAAIAYgBIAAAdIgVgBIAAAKIAUgBIAAAeIgUgBIAAAnQABAOgIAFQgIAGgVAAgACKA3IgNAKIARABQAIAAgBgFIAAgfIggAAQAMALAJAOgAFUBcIgDgRIgwAAIAAAIIgcAAIAAhaIBFAAIASAAIgBAQIAAA3IAEAAQAIAAACgBQAAAAAAAAQAAAAABgBQAAgBAAAAQAAgBAAgBIAAhLIg1ABIAAhJIATABIAtAAIATgBIgBAXIAACBQAAASgGAFQgHAGgXAAgAEhA0IAfAAIAAgJIgfAAgAEhAXIAfAAIAAgIIgfAAgAFRgjIAZAAIAAgHIgZAAgAFRg7IAZAAIAAgHIgZAAgAiMA7QArgDATgPQASgPABggQAAgngXAAQgKAAgMAMQgSATgDAaIgCARIghAAIAAggQgBgjAFgmIABgLIAAgBIAjABQgEAMgEAfQAUgjAfAAQAVAAAPATQARAUAAAjQgBAwgeAYQgSAPgcAGQgIADgPACQgGgSgKgQgAAQBUIABgbIgBiMIBEAAIAACfIgcAAIAAgKIgLAAIAAASgAAtAnIALAAIAAgjIgLAAgAAtgWIALAAIAAghIgLAAg");
	this.shape.setTransform(39.3,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.5,19.2);


(lib.HpBarRedMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AnzAZIAAgxIPnAAIAAAxg");
	this.shape.setTransform(50,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HpBarRedMc, new cjs.Rectangle(0,0,100,5), null);


(lib.HitMc22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(65,65,65,0.2)").s().p("Ak/FoIAArPIJ/AAIAALPg");
	this.shape.setTransform(32,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc22, new cjs.Rectangle(0,0,64,72), null);


(lib.HitMc21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.2)").s().p("ApwINIAAwZIThAAIAAQZg");
	this.shape.setTransform(62.5,52.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc21, new cjs.Rectangle(0,0,125,105), null);


(lib.HitMc20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0.2)").s().p("ApDJEIAAyHISHAAIAASHg");
	this.shape.setTransform(58,58);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc20, new cjs.Rectangle(0,0,116,116), null);


(lib.HitMc19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.2)").s().p("AlnFoIAArPILPAAIAALPg");
	this.shape.setTransform(36,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc19, new cjs.Rectangle(0,0,72,72), null);


(lib.HitMc18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.2)").s().p("AlEFFIAAqJIKJAAIAAKJg");
	this.shape.setTransform(32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc18, new cjs.Rectangle(0,0,65,65), null);


(lib.HitMc17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("Ai2DpIAAnRIFtAAIAAHRg");
	this.shape.setTransform(18.3,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc17, new cjs.Rectangle(0,0,36.5,46.5), null);


(lib.HitMc16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("AiVEsIAApXIErAAIAAJXg");
	this.shape.setTransform(15,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc16, new cjs.Rectangle(0,0,30,60), null);


(lib.HitMc15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("AiaE7IAAp1IE1AAIAAJ1g");
	this.shape.setTransform(15.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc15, new cjs.Rectangle(0,0,31,63), null);


(lib.HitMc14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("AjMFFIAAqJIGZAAIAAKJg");
	this.shape.setTransform(20.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc14, new cjs.Rectangle(0,0,41,65), null);


(lib.HitMc13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("AjADzIAAnlIGBAAIAAHlg");
	this.shape.setTransform(19.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc13, new cjs.Rectangle(0,0,38.5,48.5), null);


(lib.HitMc12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("AjlDXIAAmtIHLAAIAAGtg");
	this.shape.setTransform(23,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc12, new cjs.Rectangle(0,0,46,43), null);


(lib.HitMc11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.2)").s().p("Am1GdIAAs5INqAAIAAM5g");
	this.shape.setTransform(43.8,41.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc11, new cjs.Rectangle(0,0,87.5,82.5), null);


(lib.HitMc10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.2)").s().p("AmeGfIAAs9IM9AAIAAM9g");
	this.shape.setTransform(41.5,41.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc10, new cjs.Rectangle(0,0,83,83), null);


(lib.HitMc9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.2)").s().p("AnBCWIAAkrIODAAIAAErg");
	this.shape.setTransform(45,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc9, new cjs.Rectangle(0,0,90,30), null);


(lib.HitMc8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,255,0.2)").s().p("Al2GGIAAsLILtAAIAAMLg");
	this.shape.setTransform(37.5,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc8, new cjs.Rectangle(0,0,75,78), null);


(lib.HitMc7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.2)").s().p("AjRKtIAA1ZIGjAAIAAVZg");
	this.shape.setTransform(21,68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc7, new cjs.Rectangle(0,0,42,137), null);


(lib.HitMc6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.2)").s().p("AjRTJMAAAgmRIGjAAMAAAAmRg");
	this.shape.setTransform(21,122.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc6, new cjs.Rectangle(0,0,42,245), null);


(lib.HitMc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,255,0.2)").s().p("Ay5S1MAAAglpMAlzAAAMAAAAlpg");
	this.shape.setTransform(121,120.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242,241);


(lib.HitMc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.2)").s().p("AipFKIAAqTIFTAAIAAKTg");
	this.shape.setTransform(17,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc4, new cjs.Rectangle(0,0,34,66), null);


(lib.HitMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.2)").s().p("AkNJOIAAybIIbAAIAASbg");
	this.shape.setTransform(27,59);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc3, new cjs.Rectangle(0,0,54,118), null);


(lib.HitMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.2)").s().p("AjHPeIAA+7IGPAAIAAe7g");
	this.shape.setTransform(20,99);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc2, new cjs.Rectangle(0,0,40,198), null);


(lib.HitMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.2)").s().p("AqiQ4MAAAghvIVFAAMAAAAhvg");
	this.shape.setTransform(67.5,108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HitMc1, new cjs.Rectangle(0,0,135,216), null);


(lib.gra9d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhjCPQgRgQgOggIBQgSQAEALAGAHQAOAOAXAAQAiAAAQgcQALgRADglQgeAdgwAAQg2AAghgeQgggeAAgyQAAg1AlghQAlghA7AAQBNAAAlA7QAaAoAABEQAABAgXAvQgWAuguAPQgaAIgaAAQg5AAgkgfgAgqhfQgQAPgBAWQAAAXAQAPQAOAOAZAAQAZAAAQgPQAQgOAAgXQAAgXgPgOQgQgOgYAAQgZAAgPAOg");
	this.shape.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiCBfQANAgASAQQAjAfA5AAQAbAAAagIQAugPAWguQAXgvAAhAQAAhEgZgoQglg7hNAAQg8AAglAhQglAhAAA1QAAAyAgAeQAhAeA2AAQAwAAAegdQgDAlgKARQgRAcghAAQgZAAgNgOQgGgHgEgLgAgEgGQgYAAgPgOQgPgPAAgXQAAgWAPgPQAQgOAZAAQAYAAAQAOQAPAOAAAXQAAAXgQAOQgQAPgZAAg");
	this.shape_1.setTransform(13.7,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhjCPQgRgQgOggIBQgSQAEALAGAHQAOAOAXAAQAiAAAQgcQALgRADglQgeAdgwAAQg2AAghgeQgggeAAgyQAAg1AlghQAlghA7AAQBNAAAlA7QAaAoAABEQAABAgXAvQgWAuguAPQgaAIgaAAQg5AAgkgfgAgqhfQgQAPgBAWQAAAXAQAPQAOAOAZAAQAZAAAQgPQAQgOAAgXQAAgXgPgOQgQgOgYAAQgZAAgPAOg");
	this.shape_2.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,30.4,37.9);


(lib.gra9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhjCPQgRgQgOggIBQgSQAEALAGAHQAOAOAXAAQAiAAAQgcQALgRADglQgeAdgwAAQg2AAghgeQgggeAAgyQAAg1AlghQAlghA7AAQBNAAAlA7QAaAoAABEQAABAgXAvQgWAuguAPQgaAIgaAAQg5AAgkgfgAgqhfQgQAPgBAWQAAAXAQAPQAOAOAZAAQAZAAAQgPQAQgOAAgXQAAgXgPgOQgQgOgYAAQgZAAgPAOg");
	this.shape.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,34.9);


(lib.gra8d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah0CKQgYgYAAgmQAAgqAfgYQARgMAZgGQgbgIgMgOQgTgUAAgfQAAggAQgUQAigpBLAAQA6AAAiAZQAjAYAAAqQAAA4g5ATQAkAHASAWQARAVAAAiQAAAngaAYQgmAkhNAAQhOAAgmglgAgqAlQgPAMAAAUQAAATAPALQAQALAaAAQAcAAAPgLQAQgLAAgUQAAgUgQgLQgPgLgbAAQgbAAgQALgAghhlQgNAJAAAQQAAARANAKQANAKAVAAQAVAAANgKQAMgKAAgRQAAgQgNgJQgMgKgWAAQgUAAgNAKg");
	this.shape.setTransform(14.1,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABGgIQA5gTAAg4QAAgqgigYQgjgZg6AAQhMAAghApQgQAUAAAgQAAAfATAUQAMAOAbAIQgZAGgRAMQgfAYAAAqQAAAmAZAYQAlAlBOAAQBOAAAlgkQAagYAAgnQAAgigRgVQgTgWgjgHgAABhvQAVAAANAKQAMAJAAAQQAAARgMAKQgMAKgWAAQgVAAgNgKQgNgKAAgRQAAgQANgJQAMgKAWAAgAABAaQAbAAAPALQAQALAAAUQAAAUgQALQgPALgcAAQgbAAgPgLQgQgLAAgTQAAgUAQgMQAQgLAbAAg");
	this.shape_1.setTransform(14.1,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah0CKQgYgYAAgmQAAgqAfgYQARgMAZgGQgbgIgMgOQgTgUAAgfQAAggAQgUQAigpBLAAQA6AAAiAZQAjAYAAAqQAAA4g5ATQAkAHASAWQARAVAAAiQAAAngaAYQgmAkhNAAQhOAAgmglgAgqAlQgPAMAAAUQAAATAPALQAQALAaAAQAcAAAPgLQAQgLAAgUQAAgUgQgLQgPgLgbAAQgbAAgQALgAghhlQgNAJAAAQQAAARANAKQANAKAVAAQAVAAANgKQAMgKAAgRQAAgQgNgJQgMgKgWAAQgUAAgNAKg");
	this.shape_2.setTransform(14.1,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,31.2,38);


(lib.gra8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah0CKQgYgYAAgmQAAgqAfgYQARgMAZgGQgbgIgMgOQgTgUAAgfQAAggAQgUQAigpBLAAQA6AAAiAZQAjAYAAAqQAAA4g5ATQAkAHASAWQARAVAAAiQAAAngaAYQgmAkhNAAQhOAAgmglgAgqAlQgPAMAAAUQAAATAPALQAQALAaAAQAcAAAPgLQAQgLAAgUQAAgUgQgLQgPgLgbAAQgbAAgQALgAghhlQgNAJAAAQQAAARANAKQANAKAVAAQAVAAANgKQAMgKAAgRQAAgQgNgJQgMgKgWAAQgUAAgNAKg");
	this.shape.setTransform(14.1,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,35);


(lib.gra7d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhHCoQAQhZAhhDQAWgvAqg7IhxAAQgkAAgYADIAAhMQAXADAqAAICGAAQAqAAAWgCIAABDQgfAigXAuQgZAtgMApQgMAqgIA7g");
	this.shape.setTransform(13.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACEimQgWACgqAAIiGAAQgrAAgWgDIAABMQAYgDAkAAIBxAAQgqA7gWAvQggBDgRBZIBcAAQAIg7AMgqQANgpAYgtQAXguAfgig");
	this.shape_1.setTransform(13.2,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhHCoQAQhZAhhDQAWgvAqg7IhxAAQgkAAgYADIAAhMQAXADAqAAICGAAQAqAAAWgCIAABDQgfAigXAuQgZAtgMApQgMAqgIA7g");
	this.shape_2.setTransform(13.2,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,29.4,36.6);


(lib.gra7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHCoQAQhZAhhDQAWgvAqg7IhxAAQgkAAgYADIAAhMQAXADAqAAICGAAQAqAAAWgCIAABDQgfAigXAuQgZAtgMApQgMAqgIA7g");
	this.shape.setTransform(13.2,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.4,33.6);


(lib.gra6d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhfCGQgpgtAAhUQAAhPAhguQAng1BJAAQA9AAAhAjQAPAQALAdIhOARQgKgigjAAQgkAAgRAjQgIASgDAfQAMgMANgGQAWgKAeAAQA2AAAgAeQAgAdAAA0QAAA0glAhQglAgg7AAQhAAAgjgogAgkAWQgPAOAAAXQgBAWARAPQAPAOAXAAQAZAAAQgPQAQgOAAgXQAAgXgOgNQgPgNgbAAQgYAAgQANg");
	this.shape.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACChdQgMgdgPgQQghgjg9AAQhJAAgnA1QghAuAABPQAABUApAtQAkAoA/AAQA7AAAlggQAlghAAg0QAAg0gfgdQgggeg3AAQgeAAgWAKQgNAGgMAMQADgfAIgSQARgjAkAAQAjAAAKAigAAFAJQAaAAAPANQAOANAAAXQAAAXgQAOQgQAPgZAAQgXAAgPgOQgRgPAAgWQAAgXAQgOQAQgNAZAAg");
	this.shape_1.setTransform(13.7,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhfCGQgpgtAAhUQAAhPAhguQAng1BJAAQA9AAAhAjQAPAQALAdIhOARQgKgigjAAQgkAAgRAjQgIASgDAfQAMgMANgGQAWgKAeAAQA2AAAgAeQAgAdAAA0QAAA0glAhQglAgg7AAQhAAAgjgogAgkAWQgPAOAAAXQgBAWARAPQAPAOAXAAQAZAAAQgPQAQgOAAgXQAAgXgOgNQgPgNgbAAQgYAAgQANg");
	this.shape_2.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,30.4,37.9);


(lib.gra6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhfCGQgpgtAAhUQAAhPAhguQAng1BJAAQA9AAAhAjQAPAQALAdIhOARQgKgigjAAQgkAAgRAjQgIASgDAfQAMgMANgGQAWgKAeAAQA2AAAgAeQAgAdAAA0QAAA0glAhQglAgg7AAQhAAAgjgogAgkAWQgPAOAAAXQgBAWARAPQAPAOAXAAQAZAAAQgPQAQgOAAgXQAAgXgOgNQgPgNgbAAQgYAAgQANg");
	this.shape.setTransform(13.7,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,34.9);


(lib.gra5d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhxB7QgLgQgKgdIBRgMQAKAmArAAQAYAAAPgOQAQgPgBgYQAAgYgPgOQgOgNgZAAQglAAgNAcIhLgHIARi+ICfABQArAAAXgDIAABGQgegDgjAAIhdAAIgEA9QAagTAlAAQA2AAAgAhQAeAdABAyQAAA5gkAhQglAgg+AAQhNAAgkgxg");
	this.shape.setTransform(13.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgohoIBcAAQAjAAAeADIAAhGQgXADgrAAIifgBIgQC+IBKAHQANgcAlAAQAZAAAOANQAPAOAAAYQAAAYgPAPQgPAOgYAAQgrAAgKgmIhRAMQAKAdALAQQAjAxBOAAQA/AAAkggQAkghAAg5QAAgygfgdQggghg2AAQglAAgaATg");
	this.shape_1.setTransform(13.5,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxB7QgLgQgKgdIBRgMQAKAmArAAQAYAAAPgOQAQgPgBgYQAAgYgPgOQgOgNgZAAQglAAgNAcIhLgHIARi+ICfABQArAAAXgDIAABGQgegDgjAAIhdAAIgEA9QAagTAlAAQA2AAAgAhQAeAdABAyQAAA5gkAhQglAgg+AAQhNAAgkgxg");
	this.shape_2.setTransform(13.5,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,29.9,37.4);


(lib.gra5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhxB7QgLgQgKgdIBRgMQAKAmArAAQAYAAAPgOQAQgPgBgYQAAgYgPgOQgOgNgZAAQglAAgNAcIhLgHIARi+ICfABQArAAAXgDIAABGQgegDgjAAIhdAAIgEA9QAagTAlAAQA2AAAgAhQAeAdABAyQAAA5gkAhQglAgg+AAQhNAAgkgxg");
	this.shape.setTransform(13.5,17.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,34.4);


(lib.gra4d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAQCmQADgVAAgdIAAgTIhwAAQghAAgTABIAAhHIB9iRQAWgaAOgWIBSAAQgDAgAAAjIAACBIALAAQASAAAWgDIAABJQgSgDgVAAIgMAAIAAAVQAAAcADAUgAg8AfIBPAAIAAgtQAAggADgag");
	this.shape.setTransform(14.6,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiRBjQATgCAhAAIBwAAIAAAUQAAAcgDAWIBSAAQgDgVAAgcIAAgVIAMAAQAVAAASADIAAhJQgWADgSAAIgLAAIAAiBQAAgjADggIhSAAQgOAVgWAbIh9CRgAATAfIhPAAIBShnQgDAaAAAgg");
	this.shape_1.setTransform(14.6,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQCmQADgVAAgdIAAgTIhwAAQghAAgTABIAAhHIB9iRQAWgaAOgWIBSAAQgDAgAAAjIAACBIALAAQASAAAWgDIAABJQgSgDgVAAIgMAAIAAAVQAAAcADAUgAg8AfIBPAAIAAgtQAAggADgag");
	this.shape_2.setTransform(14.6,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,32.3,36.3);


(lib.gra4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAQCmQADgVAAgdIAAgTIhwAAQghAAgTABIAAhHIB9iRQAWgaAOgWIBSAAQgDAgAAAjIAACBIALAAQASAAAWgDIAABJQgSgDgVAAIgMAAIAAAVQAAAcADAUgAg8AfIBPAAIAAgtQAAggADgag");
	this.shape.setTransform(14.6,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,33.3);


(lib.gra3d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhaCYQgcgSgNghIgHgWIBVgOQADARAIAIQARASAcAAQAXAAAOgLQAOgLAAgTQAAgagWgIQgPgFgVAAQgaAAgXACIAAhEQAUADAWAAQA4AAAAgnQAAghgqAAQgnAAgIAkIhXgMQAKggARgTQAlgoBIAAQBDAAAjAiQAXAXAAAiQAAA/hFAQQAgAEAUARQAaAYAAAjQAAAggQAVQgOATgYALQghAQgyAAQg6AAgigXg");
	this.shape.setTransform(13.9,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AiKBPIAHAWQANAhAcASQAiAXA6AAQAyAAAhgQQAYgLAOgTQAQgVAAggQAAgjgagYQgUgRgggEQBFgQAAg/QAAgigXgXQgjgihDAAQhIAAglAoQgRATgKAgIBXAMQAIgkAnAAQAqAAAAAhQAAAng4AAQgWAAgUgDIAABEQAXgCAaAAQAVAAAPAFQAWAIAAAaQAAATgOALQgOALgXAAQgcAAgRgSQgIgIgDgRg");
	this.shape_1.setTransform(13.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhaCYQgcgSgNghIgHgWIBVgOQADARAIAIQARASAcAAQAXAAAOgLQAOgLAAgTQAAgagWgIQgPgFgVAAQgaAAgXACIAAhEQAUADAWAAQA4AAAAgnQAAghgqAAQgnAAgIAkIhXgMQAKggARgTQAlgoBIAAQBDAAAjAiQAXAXAAAiQAAA/hFAQQAgAEAUARQAaAYAAAjQAAAggQAVQgOATgYALQghAQgyAAQg6AAgigXg");
	this.shape_2.setTransform(13.9,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,30.9,38);


(lib.gra3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhaCYQgcgSgNghIgHgWIBVgOQADARAIAIQARASAcAAQAXAAAOgLQAOgLAAgTQAAgagWgIQgPgFgVAAQgaAAgXACIAAhEQAUADAWAAQA4AAAAgnQAAghgqAAQgnAAgIAkIhXgMQAKggARgTQAlgoBIAAQBDAAAjAiQAXAXAAAiQAAA/hFAQQAgAEAUARQAaAYAAAjQAAAggQAVQgOATgYALQghAQgyAAQg6AAgigXg");
	this.shape.setTransform(13.9,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.9,35);


(lib.gra2d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABCCpIiMAAQgoAAgTABQACgbAGgUQAQgzAqgnQAUgTAyghQAZgRAJgKQAJgLAAgOQAAgOgMgJQgMgJgTAAQgcAAgNAUQgHAMgDAWIhUgJQAIguAVgZQAjgpBGAAQBUAAAfAyQAOAVAAAaQAAAsglAdQgNAMgtAfQgtAggNAYIBcAAQArAAAVgDIAABLQgggCgkAAg");
	this.shape.setTransform(13.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABCCpQAkAAAgACIAAhLQgVADgrAAIhcAAQANgYAtggQAtgfANgMQAlgdAAgsQAAgagOgVQgfgyhUAAQhGAAgjApQgVAZgIAuIBUAJQADgWAHgMQANgUAcAAQATAAAMAJQAMAJAAAOQAAAOgJALQgJAKgZARQgyAhgUATQgqAngQAzQgGAUgCAbQATgBAoAAg");
	this.shape_1.setTransform(13.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABCCpIiMAAQgoAAgTABQACgbAGgUQAQgzAqgnQAUgTAyghQAZgRAJgKQAJgLAAgOQAAgOgMgJQgMgJgTAAQgcAAgNAUQgHAMgDAWIhUgJQAIguAVgZQAjgpBGAAQBUAAAfAyQAOAVAAAaQAAAsglAdQgNAMgtAfQgtAggNAYIBcAAQArAAAVgDIAABLQgggCgkAAg");
	this.shape_2.setTransform(13.4,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,29.9,37.3);


(lib.gra2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABCCpIiMAAQgoAAgTABQACgbAGgUQAQgzAqgnQAUgTAyghQAZgRAJgKQAJgLAAgOQAAgOgMgJQgMgJgTAAQgcAAgNAUQgHAMgDAWIhUgJQAIguAVgZQAjgpBGAAQBUAAAfAyQAOAVAAAaQAAAsglAdQgNAMgtAfQgtAggNAYIBcAAQArAAAVgDIAABLQgggCgkAAg");
	this.shape.setTransform(13.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.9,34.3);


(lib.gra1d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgMCoQAEgYAAglIAAjLIgRAAQgYAAgYADIAAhKQAQADAgAAIAxAAQAiAAAQgBQgDAeAAAiIAADQQAAAjADAag");
	this.shape.setTransform(7.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AhJhdQAYgDAYAAIARAAIAADMQAAAjgEAZIBWAAQgDgaAAgiIAAjRQAAgjADgeQgQACgiAAIgxAAQggAAgQgDg");
	this.shape_1.setTransform(7.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMCoQAEgYAAglIAAjLIgRAAQgYAAgYADIAAhKQAQADAgAAIAxAAQAiAAAQgBQgDAeAAAiIAADQQAAAjADAag");
	this.shape_2.setTransform(7.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,17.9,36.6);


(lib.gra1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMCoQAEgYAAglIAAjLIgRAAQgYAAgYADIAAhKQAQADAgAAIAxAAQAiAAAQgBQgDAeAAAiIAADQQAAAjADAag");
	this.shape.setTransform(7.4,16.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.9,33.6);


(lib.gra0d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhgCIQgUgTgJgZQgQgqAAgyQAAhEAZgqQAmg/BOAAQA7AAAmAlQAUAVAJAYQAQAqAAAxQAABGgZApQgmA/hPAAQg7AAglgmgAgrhOQgQAcAAAwQAABrA7AAQA7AAAAhqQAAhog7AAQgbAAgQAbg");
	this.shape.setTransform(14.2,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAACuQBPAAAmg/QAZgpAAhGQAAgxgQgqQgJgZgUgUQgmglg7AAQhOAAgmA/QgZAqAABEQAAAxAQArQAJAYAUAVQAlAlA7AAgAAAhpQA7AAAABoQAABqg7AAQg7AAAAhrQAAgxAQgbQAQgbAbAAg");
	this.shape_1.setTransform(14.2,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhgCIQgUgTgJgZQgQgqAAgyQAAhEAZgqQAmg/BOAAQA7AAAmAlQAUAVAJAYQAQAqAAAxQAABGgZApQgmA/hPAAQg7AAglgmgAgrhOQgQAcAAAwQAABrA7AAQA7AAAAhqQAAhog7AAQgbAAgQAbg");
	this.shape_2.setTransform(14.2,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,31.4,37.7);


(lib.gra0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhgCIQgUgTgJgZQgQgqAAgyQAAhEAZgqQAmg/BOAAQA7AAAmAlQAUAVAJAYQAQAqAAAxQAABGgZApQgmA/hPAAQg7AAglgmgAgrhOQgQAcAAAwQAABrA7AAQA7AAAAhqQAAhog7AAQgbAAgQAbg");
	this.shape.setTransform(14.2,17.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,34.7);


(lib.gra_whiteout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EglfA+gMAAAh8/MBK/AAAMAAAB8/g");
	this.shape.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.gra_start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A80GCQhMgrgghVQgMgdgKg/IDQgUQAFAuAVAcQAmAuBPAAQA6AAAhgYQAggXAAgqQAAgzgqgUQgagMh8gcQhxgZgwgiQhhhDAAh7QAAh0BXhEQBWhECUAAQDEAABSBzQAgAqASBNIjUAYQgJgxgdgWQgdgVg5gBQguAAgdAXQgfAWAAAiQAAArAvAVQAUAKB2AYQBrAWA3AiQBsBDAACJQAABzhGBEQhYBWivAAQiJAAhWgygAXVGhQAIg/AAhYIAAn3Ih2AAQhFgBhSAIIAAjAQA6AIBbgBIG2AAQBbABBBgIIAADAQg/gIhdABIhxAAIAAH3QAABYAIA/gAPCGhQgJgzgohqQgnhpgegaQgegbgwAAIhmAAIAACkQAABZAIA+IjXAAQAIg+AAhZIAAoZQAAhSgIhAIGZACQB6AABCA9QBEA7AABtQAABsg7A4QggAcg/AUQAnANAVAWQAXAWAXA2IB6EYgAKYhEICcAAQAsAAAagZQAZgZAAgsQAAhUheAAIidAAgACaGhQgKg+gOguIgbhWIkcAAIgbBWQgSA3gHA1IjqAAQARgiAfhZIDYpZQAahEAGgoIEEAAQAMAyAWA6IDZJZIAwB7gAA2A4IheksIhdEsIC7AAgAvLGhQAIg/AAhYIAAn3Ih2AAQhEgBhTAIIAAjAQA6AIBbgBIG2AAQBbABBBgIIAADAQg/gIhdABIhxAAIAAH3QAABYAIA/g");
	this.shape.setTransform(197.5,43.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(10,1,1).p("AaqjtIBxAAQBdAAA/AGIAAi/QhAAHhcAAIm2AAQhbAAg6gHIAAC/QBTgGBEAAIB2AAIAAH3QAABYgIA/IDdAAQgIg/AAhYgAKYhEIAAiyICdAAQBeAAAABVQAAArgaAZQgZAZgsAAgASsGhIh6kYQgXg1gWgXQgXgWgmgMQA/gVAggcQA7g4AAhsQAAhthDg8QhDg8h6AAImZgCQAIBAAABSIAAIaQAABYgIA+IDXAAQgIg+AAhZIAAikIBmAAQAwAAAeAbQAeAaAnBqQAoBqAJAygAGEGhIgwh6IjZpZQgWg7gMgyIkEAAQgGAogaBFIjYJZQgfBYgRAiIDqAAQAHg1ASg3IAbhVIEcAAIAbBVQANAvALA9gAA2A4Ii7AAIBdkrgAr2jtIBxAAQBdAAA/AGIAAi/QhAAHhcAAIm2AAQhbAAg6gHIAAC/QBSgGBFAAIB2AAIAAH3QAABYgIA/IDdAAQgIg/AAhYgA+2CmQAKA/AMAeQAfBVBNArQBVAxCKAAQCvAABYhVQBGhFAAhzQAAiJhshDQg3gihrgWQh2gYgUgJQgvgWAAgrQAAgiAegWQAegXAuAAQA5AAAdAWQAdAWAJAxIDUgYQgShNgggrQhShyjEAAQiUAAhXBEQhWBEAAB0QAAB8BhBDQAvAhByAZQB8AcAaANQAqATAAAzQAAAqghAYQggAYg6AAQhQAAglgvQgVgcgFgug");
	this.shape_1.setTransform(197.5,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("A80GCQhMgrgghVQgMgdgKg/IDQgUQAFAuAVAcQAmAuBPAAQA6AAAhgYQAggXAAgqQAAgzgqgUQgagMh8gcQhxgZgwgiQhhhDAAh7QAAh0BXhEQBWhECUAAQDEAABSBzQAgAqASBNIjUAYQgJgxgdgWQgdgVg5gBQguAAgdAXQgfAWAAAiQAAArAvAVQAUAKB2AYQBrAWA3AiQBsBDAACJQAABzhGBEQhYBWivAAQiJAAhWgygAXVGhQAIg/AAhYIAAn3Ih2AAQhFgBhSAIIAAjAQA6AIBbgBIG2AAQBbABBBgIIAADAQg/gIhdABIhxAAIAAH3QAABYAIA/gAPCGhQgJgzgohqQgnhpgegaQgegbgwAAIhmAAIAACkQAABZAIA+IjXAAQAIg+AAhZIAAoZQAAhSgIhAIGZACQB6AABCA9QBEA7AABtQAABsg7A4QggAcg/AUQAnANAVAWQAXAWAXA2IB6EYgAKYhEICcAAQAsAAAagZQAZgZAAgsQAAhUheAAIidAAgACaGhQgKg+gOguIgbhWIkcAAIgbBWQgSA3gHA1IjqAAQARgiAfhZIDYpZQAahEAGgoIEEAAQAMAyAWA6IDZJZIAwB7gAA2A4IheksIhdEsIC7AAgAvLGhQAIg/AAhYIAAn3Ih2AAQhEgBhTAIIAAjAQA6AIBbgBIG2AAQBbABBBgIIAADAQg/gIhdABIhxAAIAAH3QAABYAIA/g");
	this.shape_2.setTransform(197.5,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gra_start, new cjs.Rectangle(-5,-5,405,97.1), null);


(lib.gra_retry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ANdCBIAGgqQALAGAJAAQAPAAAGgMIAFgLIhAiQIA5AAQABANAJAVIAYA7IAXg6QAJgXACgMIA4AAIhLCsQgPAjgsAAQgPAAgUgEgAGuBEQgYgYAAgnQAAgmAXgYQAXgXAlAAQAeAAAVAQQAUAQAHAdQADAKABAXIAAAFIh1AAQAEAgAgAAQAPAAALgJQAFgFADgJIAtANQgIARgJAKQgXAWgnAAQgmAAgWgWgAIKgQQgGgZgbAAQgcAAgGAZIBDAAIAAAAgAg3BDQgXgXAAgoQAAgmAXgXQAXgXAnAAQAnAAAXAXQAXAXAAAmQAAAmgXAYQgYAYgnAAQgmAAgXgXgAgTgdQgKANAAAUQAAAWAKAMQAKAMAQAAQARAAAJgMQAJgMAAgVQAAgVgJgMQgKgNgQAAQgQAAgKAMgAJyBPQgOgKAAgYIAAhOIgKAAQgLAAgLABIAAgrQALABAMAAIAJAAIAAgFQAAgUgCgQIA1AAQgCARAAATIAAAFIAJAAQAQAAAKgBIAAArQgMgBgMAAIgLAAIAABBQAAAKAFADQAEADAIAAQAJAAAJgEIAEAnQgRAFgTAAQgaAAgMgJgAiiBPQgNgKAAgYIAAhOIgKAAQgMAAgLABIAAgrQALABAMAAIAKAAIAAgFQAAgUgDgQIA2AAQgDARAAATIAAAFIAKAAQAPAAAKgBIAAArQgLgBgNAAIgLAAIAABBQAAAKAFADQAFADAHAAQAJAAAJgEIAEAnQgRAFgTAAQgaAAgMgJgAp/A/QgHgKgDgQIA0gGQADATAZAAQAZAAAAgMQAAgGgGgEQgFgCgQgEQgagFgNgEQgSgHgIgKQgGgLAAgOQAAgXASgOQATgNAhAAQAlAAASAQQALAKAGAUIgyAGQgCgQgUAAQgWAAAAALQAAAGAGACQAGADATAFQAgAGALAGQAZALAAAcQAAAWgOANQgTASgqAAQgyAAgTgZgAsxBJQgPgPAAgdIAAhAQAAgVgCgSIA2AAQgCARAAAWIAAA0QAAAOAEAGQAGAHALAAQAXAAAQgbIAAg0QAAgVgCgSIA2AAQgCARAAAWIAABQQAAAZACANIg0AAIABgSQgNANgNAFQgMAFgRAAQgaAAgPgPgALMBUQACgSAAgVIAAhQQAAgYgCgPIA0AAIAAAVQASgYAiAAQALAAAOADIgMAvQgQgFgLAAQgTAAgLAOQgHAIgBAOIAAApQAAAWACARgAFNBUQgCgNgLgcQgKgbgHgHQgIgHgNAAIgaAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBqABQAgAAARAPQASAQAAAcQAAAcgQAOQgIAIgQAFQAKAEAFAFQAGAGAGANIAgBJgAEAgqIAoAAQAMAAAGgGQAHgHAAgLQAAgWgZAAIgoAAgAlrBUQACgRAAgWIAAg1QAAgNgEgGQgGgHgLAAQgXAAgQAbIAAA0QAAAVACASIg2AAQACgRAAgWIAAiJQAAgagCgNIA2AAQgCAPAAAYIAAAkQAWgWAgAAQAaAAAPAPQAPAPAAAdIAABAQAAAVACASgAwFBUQACgPAAgYIAAiLQAAgWgCgQIBfABQAnAAAUARQAVASAAAiQAAAjgVAUQgVASgmAAIgpAAIAAAiQAAAVACASgAvPggIAmAAQAdAAAAgcQAAgbgdAAIgmAAg");
	this.shape.setTransform(103,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AORBGIgFALQgGAMgPAAQgJAAgLgGIgGAqQAUAEAPAAQAsAAAPgjIBLisIg4AAQgCAMgJAXIgXA6IgYg7QgJgVgBgNIg5AAgANNhKQgOgDgLAAQgiAAgSAYIAAgVIg0AAQACAPAAAYIAABQQAAAVgCASIA2AAQgCgRAAgWIAAgpQABgOAHgIQALgOATAAQALAAAQAFgAJkhKIgJAAQgMAAgLgBIAAArQALgBALAAIAKAAIAABOQAAAYAOAKQAMAJAaAAQATAAARgFIgEgnQgJAEgJAAQgIAAgEgDQgFgDAAgKIAAhBIALAAQAMAAAMABIAAgrQgKABgQAAIgJAAIAAgFQAAgTACgRIg1AAQACAQAAAUgAI7ATIAAgFQgBgXgDgKQgHgdgUgQQgVgQgeAAQglAAgXAXQgXAYAAAmQAAAnAYAYQAWAWAmAAQAnAAAXgWQAJgKAIgRIgtgNQgDAJgFAFQgLAJgPAAQggAAgEgggAHHgQQAGgZAcAAQAbAAAGAZgAEAgqIAAguIAoAAQAZAAAAAWQAAALgHAHQgGAGgMAAgAGKBUIgghJQgGgNgGgGQgFgFgKgEQAQgFAIgIQAQgOAAgcQAAgcgSgQQgRgPggAAIhqgBQACAQAAAWIAACLQAAAXgCAQIA4AAQgCgQAAgXIAAgrIAaAAQANAAAIAHQAHAHAKAbQALAcACANgAAHgpQAQAAAKANQAJAMAAAVQAAAVgJAMQgJAMgRAAQgQAAgKgMQgKgMAAgWQAAgUAKgNQAKgMAQAAgAAGBaQAnAAAYgYQAXgYAAgmQAAgmgXgXQgXgXgnAAQgnAAgXAXQgXAXAAAmQAAAoAXAXQAXAXAmAAgAivhKIgKAAQgMAAgLgBIAAArQALgBAMAAIAKAAIAABOQAAAYANAKQAMAJAaAAQATAAARgFIgEgnQgJAEgJAAQgHAAgFgDQgFgDAAgKIAAhBIALAAQANAAALABIAAgrQgKABgPAAIgKAAIAAgFQAAgTADgRIg2AAQADAQAAAUgAmjBUQgCgSAAgVIAAg0QAQgbAXAAQALAAAGAHQAEAGAAANIAAA1QAAAWgCARIA2AAQgCgSAAgVIAAhAQAAgdgPgPQgPgPgaAAQggAAgWAWIAAgkQAAgYACgPIg2AAQACANAAAaIAACJQAAAWgCARgAqJAlQADAQAHAKQATAZAyAAQAqAAATgSQAOgNAAgWQAAgcgZgLQgLgGgggGQgTgFgGgDQgGgCAAgGQAAgLAWAAQAUAAACAQIAygGQgGgUgLgKQgSgQglAAQghAAgTANQgSAOAAAXQAAAOAGALQAIAKASAHQANAEAaAFQAQAEAFACQAGAEAAAGQAAAMgZAAQgZAAgDgTgArUhKQACASAAAVIAAA0QgQAbgXAAQgLAAgGgHQgEgGAAgOIAAg0QAAgWACgRIg2AAQACASAAAVIAABAQAAAdAPAPQAPAPAaAAQARAAAMgFQANgFANgNIgBASIA0AAQgCgNAAgZIAAhQQAAgWACgRgAvNBUQgCgSAAgVIAAgiIApAAQAmAAAVgSQAVgUAAgjQAAgigVgSQgUgRgnAAIhfgBQACAQAAAWIAACLQAAAYgCAPgAvPggIAAg3IAmAAQAdAAAAAbQAAAcgdAAg");
	this.shape_1.setTransform(103,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("ANdCBIAGgqQALAGAJAAQAPAAAGgMIAFgLIhAiQIA5AAQABANAJAVIAYA7IAXg6QAJgXACgMIA4AAIhLCsQgPAjgsAAQgPAAgUgEgAGuBEQgYgYAAgnQAAgmAXgYQAXgXAlAAQAeAAAVAQQAUAQAHAdQADAKABAXIAAAFIh1AAQAEAgAgAAQAPAAALgJQAFgFADgJIAtANQgIARgJAKQgXAWgnAAQgmAAgWgWgAIKgQQgGgZgbAAQgcAAgGAZIBDAAIAAAAgAg3BDQgXgXAAgoQAAgmAXgXQAXgXAnAAQAnAAAXAXQAXAXAAAmQAAAmgXAYQgYAYgnAAQgmAAgXgXgAgTgdQgKANAAAUQAAAWAKAMQAKAMAQAAQARAAAJgMQAJgMAAgVQAAgVgJgMQgKgNgQAAQgQAAgKAMgAJyBPQgOgKAAgYIAAhOIgKAAQgLAAgLABIAAgrQALABAMAAIAJAAIAAgFQAAgUgCgQIA1AAQgCARAAATIAAAFIAJAAQAQAAAKgBIAAArQgMgBgMAAIgLAAIAABBQAAAKAFADQAEADAIAAQAJAAAJgEIAEAnQgRAFgTAAQgaAAgMgJgAiiBPQgNgKAAgYIAAhOIgKAAQgMAAgLABIAAgrQALABAMAAIAKAAIAAgFQAAgUgDgQIA2AAQgDARAAATIAAAFIAKAAQAPAAAKgBIAAArQgLgBgNAAIgLAAIAABBQAAAKAFADQAFADAHAAQAJAAAJgEIAEAnQgRAFgTAAQgaAAgMgJgAp/A/QgHgKgDgQIA0gGQADATAZAAQAZAAAAgMQAAgGgGgEQgFgCgQgEQgagFgNgEQgSgHgIgKQgGgLAAgOQAAgXASgOQATgNAhAAQAlAAASAQQALAKAGAUIgyAGQgCgQgUAAQgWAAAAALQAAAGAGACQAGADATAFQAgAGALAGQAZALAAAcQAAAWgOANQgTASgqAAQgyAAgTgZgAsxBJQgPgPAAgdIAAhAQAAgVgCgSIA2AAQgCARAAAWIAAA0QAAAOAEAGQAGAHALAAQAXAAAQgbIAAg0QAAgVgCgSIA2AAQgCARAAAWIAABQQAAAZACANIg0AAIABgSQgNANgNAFQgMAFgRAAQgaAAgPgPgALMBUQACgSAAgVIAAhQQAAgYgCgPIA0AAIAAAVQASgYAiAAQALAAAOADIgMAvQgQgFgLAAQgTAAgLAOQgHAIgBAOIAAApQAAAWACARgAFNBUQgCgNgLgcQgKgbgHgHQgIgHgNAAIgaAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBqABQAgAAARAPQASAQAAAcQAAAcgQAOQgIAIgQAFQAKAEAFAFQAGAGAGANIAgBJgAEAgqIAoAAQAMAAAGgGQAHgHAAgLQAAgWgZAAIgoAAgAlrBUQACgRAAgWIAAg1QAAgNgEgGQgGgHgLAAQgXAAgQAbIAAA0QAAAVACASIg2AAQACgRAAgWIAAiJQAAgagCgNIA2AAQgCAPAAAYIAAAkQAWgWAgAAQAaAAAPAPQAPAPAAAdIAABAQAAAVACASgAwFBUQACgPAAgYIAAiLQAAgWgCgQIBfABQAnAAAUARQAVASAAAiQAAAjgVAUQgVASgmAAIgpAAIAAAiQAAAVACASgAvPggIAmAAQAdAAAAgcQAAgbgdAAIgmAAg");
	this.shape_2.setTransform(103,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,209.1,29.7);


(lib.gra_pushtostart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhiBbQgXgXAAgoQAAgmAXgXQAYgXAnAAQAmAAAYAXQAXAXgBAmQAAAmgXAYQgXAYgmAAQgoAAgXgXgAg+gFQgKAMABAVQgBAWAKAMQAKAMARAAQARAAAJgMQAJgMAAgVQAAgWgJgLQgJgNgRAAQgRAAgKAMgAC7BkQgVgLgHgWQgEgIgCgRIA2gFQABAMAGAIQAJAMAVAAQAPAAAJgGQAIgHAAgLQAAgNgLgFQgHgDgggHQgegHgMgJQgZgQAAggQAAgeAWgSQAXgSAnAAQAyAAAWAeQAIALAEAUIg3AGQgCgNgIgFQgHgGgPAAQgMAAgIAGQgHAGAAAJQAAALAMAFQAFADAfAGQAbAGAPAJQAcAQAAAkQAAAegSASQgXAWguAAQgkAAgVgNgArRBkQgVgLgHgWQgEgIgCgRIA2gFQABAMAGAIQAJAMAVAAQAPAAAJgGQAIgHAAgLQAAgNgLgFQgHgDgggHQgegHgMgJQgZgQAAggQAAgeAWgSQAXgSAnAAQAyAAAWAeQAIALAEAUIg3AGQgCgNgIgFQgHgGgPAAQgMAAgIAGQgHAGAAAJQAAALAMAFQAFADAfAGQAbAGAPAJQAcAQAAAkQAAAegSASQgXAWguAAQgkAAgVgNgAu7BYQgXgZAAgrIAAhYQAAgagCgNIA4AAQgCAMAAAbIAABYQAAAxAtAAQAuAAAAgxIAAhYQAAgYgBgPIA3AAQgBAOAAAZIAABYQgBAtgZAYQgaAYgvAAQgxAAgZgZgAjNBnQgNgKAAgYIAAhOIgKAAQgLAAgMABIAAgrQAMABAMAAIAJAAIAAgFQAAgUgDgQIA2AAQgCARgBATIAAAFIAKAAQAPAAALgBIAAArQgMgBgNAAIgLAAIAABBQAAAKAGADQAEADAIAAQAJAAAJgEIADAnQgQAFgUAAQgaAAgMgJgAQdBsQADgRgBgWIAAiCIgeAAIgoABIAAgxQAQACAXAAIByAAQAYAAARgCIAAAxQgRgBgYAAIgeAAIAACCQAAAWACARgAOUBsQgDgNgLgcQgKgbgHgHQgIgHgMAAIgbAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBrABQAfAAARAPQASAQAAAcQAAAcgPAOQgIAHgRAFQAKAEAGAFQAFAGAHAOIAfBJgANGgSIApAAQALAAAHgGQAGgHAAgLQAAgWgYAAIgpAAgALBBsQgCgQgDgMIgHgWIhLAAIgHAWQgFAOgCAOIg8AAIANggIA3ibQAHgSACgKIBDAAIAJAcIBFC7gAKnAOIgYhNIgZBNIAxAAgAGdBsQADgRgBgWIAAiCIgeAAIgoABIAAgxQAPACAYAAIByAAQAYAAARgCIAAAxQgRgBgYAAIgeAAIAACCQABAWABARgAmbBsQACgPAAgYIAAgyIhXAAIAAAyQAAAXACAQIg4AAQACgOAAgZIAAiKQAAgYgCgOIA4AAQgCAQAAAWIAAArIBXAAIAAgrQAAgZgCgNIA4AAQgCAOAAAYIAACKQAAAWACARgAyaBsQACgPAAgYIAAiLQAAgWgCgQIBgABQAmAAAVARQAUASAAAiQABAjgWATQgVATglAAIgpAAIAAAiQgBAVACASgAxjgIIAmAAQAdAAAAgcQAAgbgdAAIgmAAg");
	this.shape.setTransform(117.9,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ARVg9IAdAAQAYAAARABIAAgxQgRACgYAAIhyAAQgXAAgPgCIAAAxQAVgBASAAIAfAAIAACCQAAAWgDARIA6AAQgCgRAAgWgAPQBsIgfhJQgGgOgGgGQgGgFgKgEQARgFAIgHQAPgOAAgcQAAgcgRgQQgSgPgfAAIhrgBQACAQAAAWIAACLQAAAXgCAQIA4AAQgCgQAAgXIAAgrIAbAAQAMAAAIAHQAIAHAKAbQAKAcADANgANGgSIAAguIApAAQAYAAAAAWQAAALgGAHQgHAGgLAAgAL/BsIhFi7QgGgQgDgMIhEAAQgCAKgGASIg4CbQgJAXgEAJIA9AAQACgOAEgOIAHgWIBLAAIAHAWQADAMADAQgAKoAOIgxAAIAYhNgAHUg9IAeAAQAYAAARABIAAgxQgRACgYAAIhyAAQgXAAgPgCIAAAxQAVgBASAAIAfAAIAACCQAAAWgDARIA6AAQgDgRAAgWgACZAqQACARADAIQAJAWAUALQAVANAlAAQAtAAAXgWQASgSAAgeQAAgkgcgQQgPgJgbgGQgfgGgFgDQgMgFAAgLQAAgJAIgGQAHgGAMAAQAPAAAIAGQAHAFADANIA3gGQgFgUgIgLQgWgegyAAQgnAAgWASQgXASAAAeQAAAgAZAQQANAJAdAHQAgAHAHADQALAFAAANQAAALgIAHQgJAGgPAAQgVAAgKgMQgFgIgBgMgAgjgRQARAAAJANQAJALAAAWQAAAVgJAMQgJAMgRAAQgRAAgKgMQgKgMAAgWQAAgVAKgMQAKgMARAAgAgjByQAmAAAXgYQAYgYAAgmQAAgmgXgXQgYgXgmAAQgnAAgYAXQgXAXAAAmQAAAoAXAXQAYAXAnAAgAjagyIgJAAQgMAAgLgBIAAArQALgBALAAIAKAAIAABOQAAAYAOAKQAMAJAZAAQAUAAARgFIgEgnQgJAEgJAAQgIAAgEgDQgFgDAAgKIAAhBIALAAQAMAAAMABIAAgrQgKABgQAAIgJAAIAAgFQAAgTACgRIg1AAQACAQAAAUgAmbhrQACANAAAZIAAArIhYAAIAAgrQAAgWACgQIg3AAQABAOAAAYIAACKQAAAZgBAOIA3AAQgCgQAAgXIAAgyIBYAAIAAAyQAAAYgCAPIA4AAQgCgRAAgWIAAiKQAAgYACgOgArzAqQACARADAIQAIAWAUALQAWANAlAAQAtAAAXgWQASgSAAgeQAAgkgcgQQgPgJgbgGQgfgGgFgDQgMgFAAgLQAAgJAHgGQAIgGAMAAQAPAAAIAGQAHAFADANIA3gGQgFgUgJgLQgVgegyAAQgnAAgXASQgWASAAAeQAAAgAZAQQAMAJAeAHQAgAHAHADQALAFAAANQAAALgIAHQgJAGgPAAQgVAAgKgMQgFgIgCgMgAtFhrQACAPAAAYIAABYQAAAxgtAAQguAAAAgxIAAhYQAAgbACgMIg4AAQACANAAAaIAABYQAAArAXAZQAZAZAxAAQAvAAAagYQAZgYAAgtIAAhYQAAgZADgOgAxiBsQgCgSAAgVIAAgiIApAAQAmAAAVgTQAVgTAAgjQAAgigUgSQgVgRgmAAIhggBQACAQAAAWIAACLQAAAYgCAPgAxkgIIAAg3IAnAAQAdAAAAAbQAAAcgdAAg");
	this.shape_1.setTransform(117.9,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhiBbQgXgXAAgoQAAgmAXgXQAYgXAnAAQAmAAAYAXQAXAXgBAmQAAAmgXAYQgXAYgmAAQgoAAgXgXgAg+gFQgKAMABAVQgBAWAKAMQAKAMARAAQARAAAJgMQAJgMAAgVQAAgWgJgLQgJgNgRAAQgRAAgKAMgAC7BkQgVgLgHgWQgEgIgCgRIA2gFQABAMAGAIQAJAMAVAAQAPAAAJgGQAIgHAAgLQAAgNgLgFQgHgDgggHQgegHgMgJQgZgQAAggQAAgeAWgSQAXgSAnAAQAyAAAWAeQAIALAEAUIg3AGQgCgNgIgFQgHgGgPAAQgMAAgIAGQgHAGAAAJQAAALAMAFQAFADAfAGQAbAGAPAJQAcAQAAAkQAAAegSASQgXAWguAAQgkAAgVgNgArRBkQgVgLgHgWQgEgIgCgRIA2gFQABAMAGAIQAJAMAVAAQAPAAAJgGQAIgHAAgLQAAgNgLgFQgHgDgggHQgegHgMgJQgZgQAAggQAAgeAWgSQAXgSAnAAQAyAAAWAeQAIALAEAUIg3AGQgCgNgIgFQgHgGgPAAQgMAAgIAGQgHAGAAAJQAAALAMAFQAFADAfAGQAbAGAPAJQAcAQAAAkQAAAegSASQgXAWguAAQgkAAgVgNgAu7BYQgXgZAAgrIAAhYQAAgagCgNIA4AAQgCAMAAAbIAABYQAAAxAtAAQAuAAAAgxIAAhYQAAgYgBgPIA3AAQgBAOAAAZIAABYQgBAtgZAYQgaAYgvAAQgxAAgZgZgAjNBnQgNgKAAgYIAAhOIgKAAQgLAAgMABIAAgrQAMABAMAAIAJAAIAAgFQAAgUgDgQIA2AAQgCARgBATIAAAFIAKAAQAPAAALgBIAAArQgMgBgNAAIgLAAIAABBQAAAKAGADQAEADAIAAQAJAAAJgEIADAnQgQAFgUAAQgaAAgMgJgAQdBsQADgRgBgWIAAiCIgeAAIgoABIAAgxQAQACAXAAIByAAQAYAAARgCIAAAxQgRgBgYAAIgeAAIAACCQAAAWACARgAOUBsQgDgNgLgcQgKgbgHgHQgIgHgMAAIgbAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBrABQAfAAARAPQASAQAAAcQAAAcgPAOQgIAHgRAFQAKAEAGAFQAFAGAHAOIAfBJgANGgSIApAAQALAAAHgGQAGgHAAgLQAAgWgYAAIgpAAgALBBsQgCgQgDgMIgHgWIhLAAIgHAWQgFAOgCAOIg8AAIANggIA3ibQAHgSACgKIBDAAIAJAcIBFC7gAKnAOIgYhNIgZBNIAxAAgAGdBsQADgRgBgWIAAiCIgeAAIgoABIAAgxQAPACAYAAIByAAQAYAAARgCIAAAxQgRgBgYAAIgeAAIAACCQABAWABARgAmbBsQACgPAAgYIAAgyIhXAAIAAAyQAAAXACAQIg4AAQACgOAAgZIAAiKQAAgYgCgOIA4AAQgCAQAAAWIAAArIBXAAIAAgrQAAgZgCgNIA4AAQgCAOAAAYIAACKQAAAWACARgAyaBsQACgPAAgYIAAiLQAAgWgCgQIBgABQAmAAAVARQAUASAAAiQABAjgWATQgVATglAAIgpAAIAAAiQgBAVACASgAxjgIIAmAAQAdAAAAgcQAAgbgdAAIgmAAg");
	this.shape_2.setTransform(117.9,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gra_pushtostart, new cjs.Rectangle(-1,-1,237.7,24.8), null);


(lib.gra_point = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgTgTIAAAnIAnAAIAAgng");
	this.shape_1.setTransform(2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,6.1,6);


(lib.gra_moji_sec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBDQAYgFARgLQAegRAMgZIAFgKIANAFQgQgagGgnIAXgJQAJAiAPAXQgJAHgLAMIAKAFIgHAMQgQAegcASQgWAQgcAJQgGgRgJgMgAhEBgIABgZIAAglQgHARgLAMQgDgRgIgOQATgUAHgYIgVABIAAgeIANABIALAAIAAgPIgRADQgDgNgHgOQAsgFARgLIASAYQgMAGgLADIAAAWIARgBIAAAcQAIgVAEghIAYAGQgDAngKAbIALABQAEgBABgBQAAAAAAAAQAAgBAAAAQABgBAAgBQAAgBAAAAIAAhJIgBgTIAfAAIgBATIAABTQAAAMgIAFQgIAFgVAAIgGAAQgBgNgDgMIgFALQgJgKgPgJIAGgLIgQAAQAKAQAPANQgHANgFAOQgIgJgGgLIABAvIABAZg");
	this.shape.setTransform(9.7,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAwhJQAAgLABgIIgfAAQABAJAAAKIAABJQAAADgBABQgBACgEAAIgLgBQAKgbADgmIgYgIQgEAigIAVIAAgcIgRABIAAgWQALgDAMgGIgSgYQgRALgsAFQAHAOADANIARgDIAAAPIgLAAQgHAAgGgBIAAAdIAVAAQgHAYgTAUQAIAPADAQQALgMAHgRIAAAmQAAANgBAKIAfAAQgBgHAAgRIgBgvQAGALAIAJQAFgOAHgMQgPgOgKgQIAQAAIgGALQAPAJAJAKIAFgLQADAMABANIAGAAQAVAAAIgFQAIgEAAgNgABNAGQALgMAJgHQgPgWgJgjIgXAJQAGAnAQAZIgNgFQgCAFgDAHQgMAYgeARQgRALgYAFQAJANAGAQQAcgJAWgPQAcgTAQgeIAHgLg");
	this.shape_1.setTransform(9.7,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdBDQAYgFARgLQAegRAMgZIAFgKIANAFQgQgagGgnIAXgJQAJAiAPAXQgJAHgLAMIAKAFIgHAMQgQAegcASQgWAQgcAJQgGgRgJgMgAhEBgIABgZIAAglQgHARgLAMQgDgRgIgOQATgUAHgYIgVABIAAgeIANABIALAAIAAgPIgRADQgDgNgHgOQAsgFARgLIASAYQgMAGgLADIAAAWIARgBIAAAcQAIgVAEghIAYAGQgDAngKAbIALABQAEgBABgBQAAAAAAAAQAAgBAAAAQABgBAAgBQAAgBAAAAIAAhJIgBgTIAfAAIgBATIAABTQAAAMgIAFQgIAFgVAAIgGAAQgBgNgDgMIgFALQgJgKgPgJIAGgLIgQAAQAKAQAPANQgHANgFAOQgIgJgGgLIABAvIABAZg");
	this.shape_2.setTransform(9.7,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,22.4,22.2);


(lib.gra_moji_record = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAkBEQgSgSAAgeQAAgdASgSQASgRAegBQAeABASARQASASAAAcQAAAegSATQgSASgeAAQgeAAgSgSgABAgFQgIAJAAAQQAAAQAIAKQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAKgAhhBFQgSgSAAgfQAAgdARgSQASgSAdAAQAXAAAPALQAPAMAFATIgjAGQgDgGgDgEQgGgHgLAAQgMAAgHAJQgHAIAAAQQAAARAIAJQAHAKAMAAQAMAAAHgJQACgEABgFIAkAGQgDALgFAJQgPAXgkAAQgdAAgRgRgAjrBFQgSgSAAgfQAAgdASgSQARgRAdgBQAXAAAQAMQAPANAGAVQACAIABASIAAAFIhaAAQADAYAYAAQAMAAAIgHQAEgEACgHIAjAKQgGAOgHAHQgRARgeAAQgeAAgRgRgAikAEQgEgTgVAAQgVAAgFATIAzAAIAAAAgAEgBEQgPgSAAgeQAAgfARgRQAPgQAZAAQAXABASAPIAAgZQAAgUgBgLIApAAQgCALAAAUIAABnQAAASACANIgoAAIAAgKQgKAHgIADQgJAEgNAAQgbAAgQgRgAE/gDQgIAHAAAQQAAASAKAIQAHAIAMAAQANAAAJgJQAJgLAAgPQAAgOgJgIQgJgKgNAAQgNAAgIAKgACmBRQACgNAAgRIAAg8QAAgUgCgLIAoAAIAAAQQAOgSAaAAQAJAAALACIgKAkQgMgDgIgBQgPAAgJAKQgFAGgBAMIAAAfQAAASACAMgAk1BRQgCgKgIgVQgHgVgGgFQgGgGgKAAIgUAAIAAAhQAAASABAMIgrAAQACgMAAgSIAAhqQAAgRgCgNIBSABQAYAAAOAMQANAMAAAWQAAAVgMALQgGAGgNADQAIACAEAFQAFAFAFAKIAYA4gAlwgPIAfAAQAJAAAFgFQAFgFAAgJQAAgRgTAAIgfAAg");
	this.shape.setTransform(41.1,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AFzBRIAoAAQgCgNAAgSIAAhnQAAgUACgLIgpAAQABALAAAUIAAAZQgSgPgXAAQgZAAgPAPQgRASAAAeQAAAfAPARQAQARAbAAQANAAAJgDQAIgDAKgIgAFUgNQANAAAJAKQAJAIAAAPQAAAPgJAKQgJAJgNAAQgMAAgHgHQgKgJAAgSQAAgPAIgIQAIgKANAAgAEKgoQgLgCgJAAQgaAAgOASIAAgQIgoAAQACAMAAATIAAA8QAAARgCANIAqAAQgCgMAAgSIAAgfQABgMAFgGQAJgJAPAAQAIAAAMADgABUBWQAeAAASgSQASgSAAgeQAAgdgSgSQgSgSgeAAQgeAAgSASQgSASAAAdQAAAeASASQASASAeAAgABUgOQANAAAHAJQAIAIAAARQAAARgIAJQgHAKgNAAQgNAAgHgKQgIgJAAgRQAAgRAIgIQAHgJANAAgAAHgDQgFgTgPgLQgPgMgXAAQgdAAgSASQgRASAAAdQAAAfASASQARARAdAAQAkAAAPgXQAFgIADgMIgkgGQgBAGgCAEQgHAIgMAAQgMAAgHgJQgIgKAAgQQAAgRAHgIQAHgJAMAAQALAAAGAHQADAEADAGgAjXAEQAFgTAVAAQAVAAAEATgAh+AgIAAgEQgBgSgCgJQgGgVgPgNQgQgMgXAAQgdAAgRASQgSATAAAcQAAAfASASQARARAeAAQAeAAARgRQAHgHAGgNIgjgKQgCAGgEAEQgIAHgMAAQgYAAgDgYgAkGBRIgYg4QgFgKgFgFQgEgEgIgDQANgDAGgGQAMgLAAgVQAAgWgNgMQgOgMgYAAIhSgBQACANAAARIAABqQAAASgCAMIArAAQgBgMAAgSIAAghIAUAAQAKAAAGAFQAGAGAHAVQAIAVACAKgAlwgPIAAgjIAfAAQATAAAAARQAAAIgFAFQgFAFgJAAg");
	this.shape_1.setTransform(41.1,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAkBEQgSgSAAgeQAAgdASgSQASgRAegBQAeABASARQASASAAAcQAAAegSATQgSASgeAAQgeAAgSgSgABAgFQgIAJAAAQQAAAQAIAKQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAKgAhhBFQgSgSAAgfQAAgdARgSQASgSAdAAQAXAAAPALQAPAMAFATIgjAGQgDgGgDgEQgGgHgLAAQgMAAgHAJQgHAIAAAQQAAARAIAJQAHAKAMAAQAMAAAHgJQACgEABgFIAkAGQgDALgFAJQgPAXgkAAQgdAAgRgRgAjrBFQgSgSAAgfQAAgdASgSQARgRAdgBQAXAAAQAMQAPANAGAVQACAIABASIAAAFIhaAAQADAYAYAAQAMAAAIgHQAEgEACgHIAjAKQgGAOgHAHQgRARgeAAQgeAAgRgRgAikAEQgEgTgVAAQgVAAgFATIAzAAIAAAAgAEgBEQgPgSAAgeQAAgfARgRQAPgQAZAAQAXABASAPIAAgZQAAgUgBgLIApAAQgCALAAAUIAABnQAAASACANIgoAAIAAgKQgKAHgIADQgJAEgNAAQgbAAgQgRgAE/gDQgIAHAAAQQAAASAKAIQAHAIAMAAQANAAAJgJQAJgLAAgPQAAgOgJgIQgJgKgNAAQgNAAgIAKgACmBRQACgNAAgRIAAg8QAAgUgCgLIAoAAIAAAQQAOgSAaAAQAJAAALACIgKAkQgMgDgIgBQgPAAgJAKQgFAGgBAMIAAAfQAAASACAMgAk1BRQgCgKgIgVQgHgVgGgFQgGgGgKAAIgUAAIAAAhQAAASABAMIgrAAQACgMAAgSIAAhqQAAgRgCgNIBSABQAYAAAOAMQANAMAAAWQAAAVgMALQgGAGgNADQAIACAEAFQAFAFAFAKIAYA4gAlwgPIAfAAQAJAAAFgFQAFgFAAgJQAAgRgTAAIgfAAg");
	this.shape_2.setTransform(41.1,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,84.2,19.2);


(lib.gra_moji_new_record = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("ADqA4QgOgOAAgaQAAgXAOgOQAPgPAZgBQAYABAPAPQAPAOAAAXQAAAZgPAPQgPAPgZAAQgZAAgOgPgAEBgEQgGAHAAANQAAAOAGAIQAGAIALAAQAKAAAHgIQAFgHABgPQgBgNgFgHQgHgIgKAAQgLAAgGAIgAB7A5QgOgPAAgaQAAgXAOgPQAPgPAYAAQATABAMAIQANAKAEAQIgdAFIgFgIQgGgHgIAAQgKABgGAHQgFAHgBANQAAAOAHAIQAFAHAKAAQAKAAAGgGQACgEABgEIAeAEQgDAKgEAHQgMATgeAAQgZAAgOgOgAAKA5QgOgPAAgaQABgXANgOQAOgPAYgBQATABAMAJQAOALAEARIADAWIAAADIhLAAQADAUAUABQAKgBAHgFQADgEABgFIAeAIQgGALgGAGQgOAOgZAAQgYAAgOgOgABEAEQgDgQgRAAQgRAAgFAQIAqAAIAAAAgAm+A5QgPgPAAgaQAAgXAPgOQAOgPAXgBQAUABANAJQANALAEARIADAWIAAADIhKAAQACAUAUABQAKgBAGgFQAEgEACgFIAdAIQgGALgGAGQgOAOgZAAQgYAAgOgOgAmEAEQgDgQgSAAQgQAAgFAQIAqAAIAAAAgAG6A4QgNgOAAgaQAAgZAOgOQANgNAVAAQASAAAPANIAAgVQAAgPgBgKIAiAAQgCAJABAQIAABWQgBAOACALIghAAIAAgJQgIAHgHADQgIACgJAAQgYAAgMgOgAHUgCQgHAGAAAMQAAAPAIAIQAGAFAKAAQAKABAIgIQAHgJAAgMQAAgMgHgGQgIgJgLAAQgKAAgGAJgAI0BDIAAgfIAhAAIAAAfgAFWBDIABgZIAAgyIgBgZIAgAAIAAANQAMgPAWAAIAQACIgIAeQgLgDgGAAQgNAAgGAIQgFAFgBAJIAAAaIABAZgAgyBDQgCgIgGgRQgHgSgEgEQgFgFgJAAIgQAAIAAAbQAAAPACAKIgkAAIABgZIAAhYIgBgYIBDABQAUAAAMAKQAKAJABATQAAARgKAKQgGAEgKADQAGACAEADQAEAEAEAJIATAugAhjgMIAZAAQAIAAAEgFQAEgDAAgIQABgNgRAAIgZAAgAkCBDIgFgTIgMgoIgMAoIgFATIgcAAIgFgTIgZhRIAiAAQABAIADAMIAJAkIAQg4IAYAAIAFATIALAlIAJgjQADgMAAgJIAkAAIgaBRIgFATgAn/BDIgNgUIgegvIgMgTIABAXIAAAmIABAZIgjAAQACgIgBgRIAAhXQABgOgCgKIAkAAQADAHAIAOIAgAuIAMATQgCgLABgMIAAgnIgBgYIAjAAQgCAKAAAOIAABXQAAAOACALgAI3AZIABgJIgGhVIAmAAIgFBeg");
	this.shape.setTransform(60,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJTAZIAFheIgmAAIAGBVIgBAJgAH/BDIAgAAQgCgLAAgOIAAhVQAAgRACgJIgiAAQACAJAAARIAAAUQgQgMgTAAQgUAAgNAMQgOAPAAAZQAAAZANAOQANAOAXAAQAKAAAHgCQAHgDAJgHgAJWBDIAAgfIghAAIAAAfgAHlgKQALAAAHAIQAHAGAAAMQAAAMgHAJQgHAIgLAAQgKAAgHgGQgHgIAAgOQAAgNAHgGQAFgIAMAAgAGnghQgIgCgHAAQgWAAgLAPIAAgNIgiAAQACAKAAAQIAAAxQAAAOgCALIAjAAQgBgKAAgPIAAgZQAAgKAFgFQAGgIAMAAQAIAAAKADgAERBHQAZAAAPgPQAPgPAAgZQAAgXgPgPQgPgOgYAAQgaAAgOAOQgOAPAAAYQAAAZAOAOQAOAPAZAAgAESgMQALAAAGAIQAFAHAAAOQAAAOgFAHQgGAIgLAAQgLAAgGgIQgGgIAAgNQAAgOAGgHQAGgIALAAgADSgCQgEgQgNgJQgNgJgTAAQgXAAgPAOQgPAPAAAYQAAAZAPAPQAPAOAXAAQAeAAANgTQAEgHADgJIgfgFQAAAEgCAEQgFAHgLAAQgJAAgHgIQgGgIAAgOQAAgNAGgHQAGgIAJAAQAJAAAGAHQACADACAFgABkAaIAAgDQgCgPgBgHQgEgSgNgKQgNgJgTAAQgYAAgPAOQgNAPAAAYQAAAZAOAPQAOAOAYAAQAZAAAOgOQAGgGAFgLIgcgIQgCAFgDAEQgHAGgKAAQgUAAgDgVgAAaAEQAEgQASAAQARAAADAQgAgMBDIgUguQgEgJgDgDQgEgEgGgCQAKgDAFgEQAKgKAAgRQAAgTgLgJQgLgKgUAAIhDgBQABALAAAOIAABXQAAAPgBAKIAjAAQgBgKAAgPIAAgbIAQAAQAJAAAEAFQAFAEAHASQAGARACAIgAhjgMIAAgeIAZAAQAQAAAAAPQAAAHgEADQgEAFgIAAgAjmBDQABgHAEgMIAahRIgkAAQAAAIgDANIgJAjIgLglQgEgMgBgHIgYAAIgRA4IgJgkQgCgMgBgIIgjAAIAaBRQADAMACAHIAcAAQABgGAEgNIAMgnIAMAnQAEANABAGgAllAaIAAgDQgBgPgBgHQgFgSgNgKQgMgJgUAAQgXAAgPAOQgOAPAAAYQAAAZAPAPQAOAOAYAAQAZAAAOgOQAGgGAFgLIgdgIQgBAFgEAEQgGAGgKAAQgUAAgDgVgAmuAEQAEgQARAAQASAAADAQgAoogwQgJgOgCgHIgkAAQABAKAAAOIAABXQAAARgBAIIAjAAQgBgJAAgQIAAgmQAAgNgBgKQAGAMAFAHIAfAvQAJANADAHIAkAAQgBgLAAgNIAAhYQAAgOABgKIgjAAQABAKAAAOIAAAmQAAANACALQgGgLgGgIg");
	this.shape_1.setTransform(60,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("ADqA4QgOgOAAgaQAAgXAOgOQAPgPAZgBQAYABAPAPQAPAOAAAXQAAAZgPAPQgPAPgZAAQgZAAgOgPgAEBgEQgGAHAAANQAAAOAGAIQAGAIALAAQAKAAAHgIQAFgHABgPQgBgNgFgHQgHgIgKAAQgLAAgGAIgAB7A5QgOgPAAgaQAAgXAOgPQAPgPAYAAQATABAMAIQANAKAEAQIgdAFIgFgIQgGgHgIAAQgKABgGAHQgFAHgBANQAAAOAHAIQAFAHAKAAQAKAAAGgGQACgEABgEIAeAEQgDAKgEAHQgMATgeAAQgZAAgOgOgAAKA5QgOgPAAgaQABgXANgOQAOgPAYgBQATABAMAJQAOALAEARIADAWIAAADIhLAAQADAUAUABQAKgBAHgFQADgEABgFIAeAIQgGALgGAGQgOAOgZAAQgYAAgOgOgABEAEQgDgQgRAAQgRAAgFAQIAqAAIAAAAgAm+A5QgPgPAAgaQAAgXAPgOQAOgPAXgBQAUABANAJQANALAEARIADAWIAAADIhKAAQACAUAUABQAKgBAGgFQAEgEACgFIAdAIQgGALgGAGQgOAOgZAAQgYAAgOgOgAmEAEQgDgQgSAAQgQAAgFAQIAqAAIAAAAgAG6A4QgNgOAAgaQAAgZAOgOQANgNAVAAQASAAAPANIAAgVQAAgPgBgKIAiAAQgCAJABAQIAABWQgBAOACALIghAAIAAgJQgIAHgHADQgIACgJAAQgYAAgMgOgAHUgCQgHAGAAAMQAAAPAIAIQAGAFAKAAQAKABAIgIQAHgJAAgMQAAgMgHgGQgIgJgLAAQgKAAgGAJgAI0BDIAAgfIAhAAIAAAfgAFWBDIABgZIAAgyIgBgZIAgAAIAAANQAMgPAWAAIAQACIgIAeQgLgDgGAAQgNAAgGAIQgFAFgBAJIAAAaIABAZgAgyBDQgCgIgGgRQgHgSgEgEQgFgFgJAAIgQAAIAAAbQAAAPACAKIgkAAIABgZIAAhYIgBgYIBDABQAUAAAMAKQAKAJABATQAAARgKAKQgGAEgKADQAGACAEADQAEAEAEAJIATAugAhjgMIAZAAQAIAAAEgFQAEgDAAgIQABgNgRAAIgZAAgAkCBDIgFgTIgMgoIgMAoIgFATIgcAAIgFgTIgZhRIAiAAQABAIADAMIAJAkIAQg4IAYAAIAFATIALAlIAJgjQADgMAAgJIAkAAIgaBRIgFATgAn/BDIgNgUIgegvIgMgTIABAXIAAAmIABAZIgjAAQACgIgBgRIAAhXQABgOgCgKIAkAAQADAHAIAOIAgAuIAMATQgCgLABgMIAAgnIgBgYIAjAAQgCAKAAAOIAABXQAAAOACALgAI3AZIABgJIgGhVIAmAAIgFBeg");
	this.shape_2.setTransform(60,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,123,17.2);


(lib.gra_moji_effect_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AriBDQAZgGASgKQAdgRANgYIAFgMIAMAGQgPgagHgnIAXgIQAJAiAPAWQgIAHgMAMIAKAGIgGALQgRAegbASQgWAQgdAJQgHgRgJgMgAsJBfIABgYIABgmQgHASgLAMQgEgQgHgPQATgVAHgYIgWABIAAgdIAOABIAKAAIAAgPIgQADQgEgNgGgNQAsgHAQgKIATAZIgXAJIAAAVIARgBIAAAcQAIgVADghIAaAHQgDAlgLAbIALABQAEABABgCQAAAAABAAQAAgBAAAAQAAgBAAgBQAAgBAAAAIAAhJIgBgTIAfAAIgBATIAABTQAAANgHAEQgIAEgVAAIgGAAQgBgMgEgMIgFAMQgJgKgPgKIAGgLIgQgBQAJARAPANQgHANgEAOQgJgJgFgLIABAvIABAYgAMbBAQAcgFANgIQAKgGAFgKQgLAJgQAAQgRAAgLgKQgMgKAAgQQAAgQANgLQANgKAVgBQAJABAGACIAAgLQhCACgXADIgBgiIBagBQAAgPgCgHIAkAAIgBAVQAtAAALgBIAAAgIgkgBIgUAAIAAAeQAIAOAAASQAAAjghAUQgOAJgaAIQgIgTgLgMgAM2gBQgEADAAAEQAAAFAEADQAEADAFAAQAHAAAEgDQAEgEAAgFQAAgEgDgCQgEgDgGAAQgGAAgFADgAGPA7QAsgDASgPQATgPAAgfQAAgogWAAQgLAAgLANQgSASgEAbIgBAQIghABIgBghQAAgjAFgmIABgKIAAgCIAjACQgEALgEAgQATgjAfAAQAWAAAPASQAQAUAAAkQAAAwgeAYQgSAOgcAGQgIADgQACQgFgSgLgQgAJGBPQgNgJAAgSQAAgWAZgKQAOgFAWgBIAGAAIgBgLIg/gBIAAgeQAQAEAiAAIANAAIAAgOIgJABIg9gCIABgfQASAEAnAAIALAAIgBgWIAjAAIgBAVQAogDARgEIABAfIgSACQgTACgVAAIAAAOQAggDATgDIABAeIg0ADIABASQAOADANAHIAbARIAIAEIgTAhIgOgNQgPgNgNgFQAAANgFAIQgKAPgiAAQgYAAgOgKgAJcA0QAAAJAQgBQAQABAAgNIAAgEQgGgBgGAAQgUAAAAAJgAC2BPQgNgJAAgSQAAgWAZgKQAOgFAWgBIAGAAIgBgLIg/gBIAAgeQAQAEAiAAIANAAIAAgOIgJABIg9gCIABgfQASAEAnAAIALAAIgBgWIAjAAIgBAVQAogDARgEIABAfIgSACQgTACgVAAIAAAOQAggDATgDIABAeIg0ADIABASQAOADANAHIAbARIAIAEIgTAhIgOgNQgPgNgNgFQAAANgFAIQgKAPgiAAQgYAAgOgKgADMA0QAAAJAQgBQAQABAAgNIAAgEQgGgBgGAAQgUAAAAAJgAgrBLQAVgpAMg9IgYAAIgFAAIABggQANABARAAIAEAAQADgVAAgIIAAgEIAlAEIgDALIgDASQATgCAOgEIABAdQAXgDAeAAIAJAAIABAiQgLgCgPABQgeAAgaAEIgCgcIgTACQgEAXgIAeIgOAwIgFAOgApIBMQgFglAAgaQAAgiAHgqIADgWIAlADQgNAngCA5IAPAGQgHAbAAAdIAAAJIgiACgAAaAxQAAgRAQgWIAdAJQgLANAAAJQAAAOAZAAQAagBAVgHIACAjIgKABQgXADgQAAQg7AAAAglgAldBTQACgMAAgTIAAhlIgIAAIgZACIAAglQAJACAPgBIAaAAIAZgBQgCAPAAASIAABnQAAASACANgAuHBTQABgMAAgTIAAhlIgIAAIgYACIAAglQAIACAQgBIAZAAIAZgBQgBAPAAASIAABnQAAASABANgAjDA+IgIgRQAjAAAWgHQAXgHALgQQAHgIAAgLQAAgMgIgGQgJgLgUABQggAAgtAOIgSAGIgHgnQAKgBAQgEQA0gKAZAAQAfAAASAMQAZASAAAgQAAAVgMASQgNASgWALQgbANgwAFIgGgUgAoDBGQgJgEgFgIQgFgKAAgJQAAgPAKgRIAJgMIAcAKQgNARAAAKQAAAPAaAAQAbAAAXgIIACAjIgRACQgSADgRAAQgaAAgPgJgAoJggIgFAAIAAgiQAOADAWAAQAoAAATgFIACAiIgPACQgWABgUAAQgSAAgRgBg");
	this.shape.setTransform(119.9,77.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AusEQQA8gVAjglQgXgTgdgQIAegjQAdAQAWAQQAPgXAJgcIhOAAQgXApgpAjQgRgTgXgMQAvglAXgsQALgUAFgTIAyAKIgLAYIBLgBQAKAAAHgEIAZAZQgEAEgCAIQgXBFgeAnQgbAlgpAbQgTANgeANQgNgXgTgTgAl0EOQA5gVAlglQAfggAQgwIhLABQgaApgmAeQgSgUgWgOQAxgiAagzQAKgUABgOIA2AKIgNAcIBGAAQANAAAIgDIAXAXQgEAGgEANQgVBGgmAqQgkAqhCAeQgMgYgWgSgAzPEeQgGgJgMgLQAtgOATgZQAKgOAEgQQAFgRAAgcQAAgMgDgIIA1AAIgBAZIAAAKIAGgDQAggRAPggIiGAAQgaAAgSADIAAgyQARADAcAAICUAAQARAAAHgDIAaAcQgFAGgEAJQgaA9g0AgQgOgRgRgNQgEAqgNAaQgPAcgdATQgOAKgZAMQgJgRgFgIgAp2EOQAqgRAZgWQAZgXANgjQAMggAAgbIAuALIgEARQgMA5gXAjQgWAgglAYQgNAIgVALQgMgVgTgSgAC2EZQgLgNAAgSQAAgOAJgMQAKgOAOgGQAZgKAkAAQAVAAARADIgMgUQgjAEg+ACIgZACIgBgqIAcABQAqAAAjgEIgHgPQgdADgrAAIgVABIgDgpQAMABAUAAQAcAAAWgCIgMgcIAygFQABALAHARQAwgGAcgJIAEAoIgVAFQgVAFgYADIAHAPQAxgJAQgGIAFApIgjAGIgQAEQANAZAXAbIgqAVQgXgNgkAAQgwAAgBATQAAAPAtAAQA1AAAkgRIAHAvIgTAEQgoAJgoAAQhAAAgUgbgAPZEkQAGgKAQgyIAehVQAchPACgOIA2ALQgHAOgjBbQASgNAQAAQAOAAALAIQAKAHADANQADAKAAAkQAAAPADAGQAEAFAHAAQARAAAJgXQAKgWABgdQAUAQAZAMQgHApgSAYQgXAdgnAAQgbAAgPgOQgNgOAAgcIAAgZQAAgKgDgEQgCgEgHAAQgUAAgRAlQgPAfgHAhgAHUEkQgTgNAAgYQAAghAjgNQATgIAfAAIAJAAIgBgQIhZgCIABgqQAWAFAuAAIAUAAIgBgTIgMABIhVgDIABgsQAZAGA4AAIAOAAQAAgWgBgJIAyAAQgCAHAAAXQA3gEAYgHIACArIgZADQgcAEgcABIAAARQAsgCAcgGIABArIhJAFIABAZQAUAFASALQARAIAUAOIALAHIgaAtQgJgJgLgJQgUgRgTgHQAAARgIALQgOAWguAAQgjAAgSgOgAHzD/QAAALAWAAQAVAAABgSIAAgFQgIgCgJAAQgbAAAAAOgABBEuQgugEgYgLQgzgYAAg1QAAgkAYgcQAJgLATgNIhSAHQgdADgLADIgDg0IALABIAwgDIB4gGIAogBIAOgBIAGgBIADAzIgJgBQggAAgfAUQgWANgLAQQgLARAAASQAAAXAXALQAHAFAQADQAQACANAAIAJAAIgGA2gAMXEnQgPgGgIgLQgIgKgEgTQgCgRAAg5IAAgRQggACgPACIgDgvIAKABIAogCIAAgIQAAgfgCgOIA0AAQgCAOgBAlIBHgDIAAgDQAAgdgCgTIAwAAQgBAKAAAQIAAAXQApgBAKgCIAAAwIgYgBIgbABQAAAfgDAPQgCAPgJAIQgKAMgYAAQgSAAgZgJIAAgHQAAgTgCgUQAWALAPAAQAHAAACgGQACgHAAgXIhHADQAABJACAJQACALALADQAKAEAbAAQA4AAAggMIADAzIgcADQglAEgcAAQgoAAgUgHgAqgCEIAqgMQAPAeAMApIgsANQgKgogPgggAArCfIAagMQARAUAKAVIgaAMQgLgXgQgSgAphB3IApgLQARAkAKAhIgrANQgIghgRgmgABSCOIAZgLQAPARANAXIgbAMQgOgagMgPgADdgQQgVgOABgXQAAgTAPgOQAPgMAaAAQAeAAATAWQAHAHAHAOQAWgJgBgVQAAgPgMgIQgPgJgWAAQgwAAgnAaQgNAIgOAOIgagrQATgKAlgcQAmgdAagaIhCAEIgTACIgBguQAQACAYAAQAqAAArgEQAOgBAGgDIAYAiQgIAEglAhQgUAQgUAOQAVgEATAAQAlAAAWASQAVATAAAfQAAAqgnAXQgeASgsAAQgkAAgUgNgAD0g1QAAANAYAAIAJgBQgFgVgRAAQgLAAAAAJgAq8gcQANgRAQglQAPgkAJgiQghAFgKADIgGguIADAAQAUAAAigFQAHgqAAgNIAAgFIAzAFIgKA0IAMgBQAZAAAOAMQAVAQAAAsQAABFgSAfQgGAKgMAGQgJAEgNAAQgTAAgagHIABgQQABgPgFgTQAaAKANAAQAHAAAGgNQAHgWAAgoQAAgRgFgFQgFgFgMAAIgLAAQgQBGgjBJIgEAKgAHUgTQgTgNAAgYQAAghAjgNQATgIAfAAIAJAAIgBgQIhZgCIABgqQAWAFAuAAIAUAAIgBgTIgMABIhVgDIABgsQAZAGA4AAIAOAAQAAgWgBgJIAyAAQgCAHAAAXQA3gEAYgGIACArIgZACQgcAEgcABIAAARQAsgCAcgGIABArIhJAFIABAZQAUAGASAKQARAIAUAOIALAHIgaAuQgJgKgLgIQgUgRgTgIQAAASgIAKQgOAWguAAQgjAAgSgOgAHzg4QAAALAWAAQAVAAABgSIAAgFQgIgBgJAAQgbAAAAANgAhcgTQgTgNAAgYQAAghAjgNQAUgIAdAAIAJAAIgBgQIhZgCIABgqQAWAFAvAAIATAAIgBgTIgLABIhWgDIABgsQAZAGA4AAIAPAAQAAgWgBgJIAwAAQgBAHgBAXQA4gEAXgGIACArIgZACQgbAEgdABIAAARQAsgCAcgGIABArIhJAFIABAZQAUAGATAKQAQAIAVAOIALAHIgbAuQgIgKgLgIQgUgRgUgIQAAASgGAKQgPAWgtAAQgjAAgSgOgAg+g4QAAALAXAAQAWAAgBgSIAAgFQgHgBgKAAQgbAAAAANgAmagYQAdg7ARhVIgpgBIABgtQATACAYAAIAGAAQAEgdAAgNIAAgEIA0AEIgDAQIgEAYQAagDAUgEIAAApQAigFApAAIANABIABAvQgPgCgVAAQgqAAglAHIgDgnIgZACQgHAggLAsIgVBDIgHAVgAOLgJQgugDgZgMQgzgYAAg1QAAgjAYgcQAJgMASgNIhRAHIgoAGIgCg0IALABIAvgDQA4gDBBgCIApgCIANgBIAGgBIACAzIgHgBQghAAggAUQgUANgMARQgNARAAARQAAAXAYALQAJAFAQADQAPACANAAIAJAAIgGA2gAk4g+QgBgXAWggIAqAOQgQASAAANQAAASAjAAQAmAAAcgLIADAxIgNADQghAEgXAAQhSAAAAg1gAtBgPQABgNAAgWIAAgKIgeAAQgWAAgRACIAAgtIAnABIAeAAIAAgNIg+ABQACgJgBgRIAAhQQABgSgCgJIAMABQgGgXgNgYIAqgPQANAbAIAYIglAMIBWAAIAJgQIgqALQgJgegKgVIAqgMQALAaAIAZQAKgWAIgbIAuAPQgNAdgMAWIATgCQgCAMABARIAABMQgBARACALIgcgBIgkAAIAAANIAlAAQAbAAAMgCIAAAuQgTgCgUAAIglAAIAAAKQgBAXACAMgAsSiWIATAAIAAgOIgTAAgAtTiWIATAAIAAgOIgTAAgAsSjFIATAAIAAgNIgTAAgAtTjFIATAAIAAgNIgTAAgAvhgTQgCgYgHgYQAQACANAAQAJAAAFgDQADgCACgJQADgMACgfIg1AAQAHgwABg9IAVAAIAZAAIAAgZIgzABIAAguQALACAUAAIAnAAIAcgBIAAAHIAABoIgvAAIgCAZIAwAAIgBAfQgDBKgNATQgHAMgMAFQgNAFgVAAgAxoh3IhjBjIgIgKIBihjIhihkIAIgJIBjBjIBkhjIAJAJIhjBkIBjBjIgJAKgAx2ghQgHgGAAgIQAAgIAGgHQAHgHAHAAIABAAIAAAAQAJAAAHAGQAFAGAAAKQAAAIgFAHQgHAGgJAAQgIAAgGgHgAnriHQgLgdgMgRIAqgTQAbAnAQA9IgvAVQgEgbgLgdgAwmhyQgGgHAAgIQAAgJAGgGQAGgGAJAAQAJAAAGAGQAGAGAAAJQAAAIgGAHQgGAGgJAAQgJAAgGgGgAzIhzQgFgGAAgIQAAgKAFgFQAHgHAJAAQAJAAAGAHQAHAFgBAKQABAIgHAHQgGAGgJAAQgIAAgIgHgAN1iYIAbgMQAQAUALAWIgaALQgNgXgPgSgAOcioIAZgMQAPARANAXIgaAMQgPgagMgOgAx2jEQgHgGABgIQgBgJAHgHQAGgGAIAAQAKAAAGAGQAHAGgBAKQABAIgHAHQgGAGgKAAQgIAAgGgHgAoZjtIAbgMQAQASAMAWIgbANQgNgYgPgRgAnyj+IAagMQAPARANAWIgbANQgMgYgPgQgAuFklg");
	this.shape_1.setTransform(125,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,250,90);


(lib.gra_moji_critical = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAeA6QgVgVAAglQAAglAWgVQATgTAhAAQAjAAARAXQAJALADAOIglAHQgFgYgYAAQgQAAgJAMQgKAMABAWQgBAWAKAMQAKANAQAAQAPAAAJgLQAEgGABgKIAmAGQgFAVgLAMQgRATggAAQgiAAgUgUgAoTA6QgUgVgBglQABglAVgVQATgTAhAAQAjAAASAXQAIALADAOIglAHQgFgYgXAAQgRAAgJAMQgJAMAAAWQAAAWAJAMQAKANAQAAQAQAAAJgLQADgGABgKIAmAGQgEAVgLAMQgRATghAAQgiAAgUgUgAGTBLIhRAAQABgIAAgSIAAheQAAgRgBgMIAoAAQgCALAAARIAABZIArAAIAfgBIAAAiQgKgBgVAAgAIBBLIAAgiIAlAAIAAAigAHABLIAAgiIAlAAIAAAigAELBLIgDgUIgGgPIgzAAIgEAPQgEAKgBAKIgqAAQADgGAGgQIAmhrQAFgNABgHIAvAAIAGAUIAwCBgAD5AKIgRg1IgQA1IAhAAgAgvBLQACgKgBgRIAAhfQABgQgCgLIAoAAQgCAKAAARIAABfQAAARACAKgAiTBLQABgLAAgQIAAhaIgVAAIgbABIAAgiQAKABARAAIBOAAQARAAAMgBIAAAiQgMgBgRAAIgUAAIAABaQAAAQABALgAj3BLQABgKAAgRIAAhfQAAgQgBgLIAnAAQgBAKAAARIAABfQAAARABAKgAkwBLQgCgJgGgTQgIgTgFgFQgGgFgIAAIgSAAIAAAeQAAAQABALIgnAAQACgLAAgQIAAhgQAAgPgCgMIBKABQAVAAAMALQANALAAATQAAAUgLAKQgFAEgMAEQAHACAEAEQAEAEAFAJIAVAzgAllgMIAcAAQAHAAAFgEQAFgFAAgHQAAgQgRAAIgcAAgAIFAdIgHhnIArAAIgHBfIAAAIgAHEAdIgGhnIAqAAIgHBfIABAIg");
	this.shape.setTransform(55.3,7.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXBBIAAAAQgSgRgFgdIAAAdQABAQABAJQAAADgBADQgBADgCABQgCACgDAAIgoAAQgDAAgDgCQgCgBgBgDQgBgDAAgDQABgJAAgQIAAhQIAAAAQgDACgDgBQgLgBgQAAIgKAAIAABQQAAAPABAKQABADgCADQgBADgCABQgDACgDAAIgoAAQgCAAgDgCQgCgBgCgDQgBgDAAgDQACgKAAgPIAAhQIgLAAIgbABQgCABgDgCIAABQQAAAQABAJQABADgCADQgBADgCABQgDACgDAAIgoAAQgCAAgDgCIgCgBIgBABQgDACgDAAIgqAAQgEAAgDgDQgCgCgBgEQgBgIgHgSIAAABQgGgQgEgEQgDgDgEAAIgJAAIAAAUQABAPABAKQAAADgBADQgBADgDABQgCACgDAAIgnAAQgDAAgDgCQgCgBgBgDQgBgDAAgDQABgKAAgPIAAgPQgFAUgLAMQgTAXgmAAQgnAAgWgXIABAAQgYgXgBgqQAAgpAZgYIAAAAQAWgWAlAAQApAAAUAbQAJAMAEARIAAACIAAgTQAAgOgBgLQAAgDABgDQABgDADgBQACgCADAAIBKABQAaAAAOANQAQAOAAAYQAAAZgOALIgEADQAEAFAEAJIABAAIARAqIABgOIAAhfQAAgPgCgKQAAgDABgDQACgDACgBQADgCACAAIAoAAQADAAADACIAAAAIADgCQADgCADABQAKABAPAAIBPAAQAQAAALgBQADgBADACIADACIAAAAQADgCADAAIAoAAQADAAACACQACABABADQABADAAADQgBAJgBAQIAAAcQAFgcATgSIAAAAQAWgWAlAAQAoAAAUAbQAKAMAEARIgBAFIgCAFIgFACIglAHQgEABgEgDQgDgCgBgDQgDgRgQAAQgLAAgGAIIAAABQgIAJAAASQABASAHAKQAHAJALAAQAKAAAGgHQACgEABgHIACgFIAEgDIAFgBIAmAGIAFACIADAEQABADgBADQgFAYgMANQgTAXgnAAQgmAAgWgXgAAmgzIAAAAQgTATAAAgQAAAhASASIAAAAQARARAdAAQAcAAAPgQQAGgHAEgLIgRgCQgCAFgDAEIAAABQgLAPgVAAQgWAAgMgRQgMgOAAgaQABgaALgOIAAAAQAMgQAVAAQAbgBAJAYIARgDQgDgHgDgFQgPgTgeAAIgBAAQgcAAgQAQgAoLgzIAAAAQgTATAAAgQAAAhASASIABAAQARARAdAAQAcAAAOgQQAHgHADgLIgRgCQgBAFgDAEIgBABQgLAPgVAAQgVAAgNgRQgLgOAAgaQAAgaAMgOIgBAAQAMgQAWAAQAagBAJAYIARgDQgCgHgEgFQgPgTgeAAIAAAAQgcAAgRAQgAgkgvIAABfIAAARIASAAIgBgRIAAhfIABgRIgSAAIAAARgAh3BBIAAgRIAAhaQAAgEADgDQADgDAEAAIAUAAIASAAIAAgMIgSAAIhPAAIgRAAIAAAMIASAAIAVAAQAEAAADADQADADAAAEIAABaIgBARIASAAIAAAAgAjsgvIAABfIAAARIARAAIAAgRIAAhfIAAgRIgSAAIABARgAk+AQQAGAFAJAWIAAAAIAHAWIATAAIgQglIAAAAQgDgHgDgDQgDgDgEgBQgDgBgCgCQgCgDAAgDQAAgDACgCQACgDADgBQAJgDAEgEQAIgHAAgPQAAgOgJgJQgKgIgRAAIg/AAIAAAQIAABgIAAARIARAAIgBgRIAAgeQABgEACgDQADgDAFAAIASAAIAAAAQANAAAIAIgAnxgcIAAABQgHAJAAASQAAASAHAKQAHAJALAAQALAAAFgHQADgEAAgHIACgFIAFgDIAFgBIAlAGIAFACIACACIAAgwIAAACIgDAFIgFACIglAHQgEABgDgDQgDgCgBgDQgEgRgPAAIgBAAQgKAAgHAIgAGwBWQgJgBgUAAIhRAAQgDAAgCgBIgCgBQgCACgDAAIgrAAQgDAAgDgDQgDgCgBgEIgDgSIAAAAIgDgIIglAAIgCAIIAAAAQgDAJgBAJQAAAEgDACQgDADgEAAIgrAAQgDAAgDgDQgDgCAAgEQgBgDACgDQADgGAFgPIAAAAIAnhrQAEgLABgGQABgEACgCQADgDAEAAIAvAAQADAAADADQADACABADIAGASIApBxIAAgGIAAheQAAgQgBgLQAAgDABgDQABgDADgBQACgCADAAIAoAAQACAAADACQACABACADQABADgBADQgBAKAAAQIAABPIAhAAIAdgBQADgBADACIADACIAAgBIACgBIgCgEIgGhmQAAgDACgDIADgDIAFgCIArAAIAFACIADADQACADgBADIgGBdIAAAHIAAAGIABABQADADAAAEIAAAiQAAAEgDADQgDADgEAAIglAAQgDAAgDgDQgCACgDABIgEABIgBAAgAGnBBIAAgMIgUAAIgrAAQgEAAgDgDQgDgDAAgEIAAhZIAAgSIgRAAIAAATIAABeIAAAQIBGAAIACAAIASAAgAHKBBIARAAIAAgOIgRAAgADPAeIAzAAQAEAAACACQADACABADIAFAPIAAABIADAMIATAAIgrh0IgEgNIgfAAIgEANIgnBrIAAAAIgDAJIASAAIAEgMIAAgBIAEgOQABgEADgCQADgCADAAIAAAAgAHNATIAKAAIAGhTIgVAAgAIBBVQgEAAgDgDQgCgDgBgEIAAgiQABgEACgDIABgBIgBgEIgGhmQAAgDACgDIADgDIAFgCIAqAAIAGACIADADQACADgBADIgGBdIAAAHIAAAGIABABQADADAAAEIAAAiQAAAEgDADQgDADgEAAgAIMBBIAQAAIAAgOIgQAAgAIOATIAKAAIAGhTIgVAAgADSASQgCgCgCgDQAAgDAAgDIARg1QABgDADgCQACgCADAAQAEAAACACQADACABADIARA1QABADgBADQgBADgDACQgCACgEAAIghAAIAAAAQgDAAgDgCgAllgMIAAggIAbAAQARAAABAQQgBAHgEAFQgFAEgIAAg");
	this.shape_1.setTransform(55.3,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABUBEQgdAAgRgRIgBAAQgSgSAAghQAAggATgTIAAAAQARgQAcAAQAeAAAPATQAEAFACAHIgRADQgJgYgaABQgWAAgMAQIABAAQgMAOAAAaQAAAaALAOQANARAVAAQAVAAALgPIABgBQADgEABgFIARACQgDALgHAHQgOAQgcAAIAAAAgAndBEQgdAAgRgRIAAAAQgSgSAAghQAAggATgTIAAAAQAQgQAcAAQAeAAAPATQAEAFADAHIgRADQgJgYgbABQgVAAgMAQIAAAAQgMAOAAAaQAAAaAMAOQAMARAWAAQAVAAALgPIAAgBQADgEACgFIARACQgEALgGAHQgPAQgcAAIAAAAgAGUBBIhHAAIABgQIAAheIgBgTIASAAIgBASIAABZQAAAEADADQADADAEAAIAsAAIAUAAIAAAMIgUAAgAIMBBIAAgOIAQAAIAAAOgAHLBBIAAgOIAQAAIAAAOgAEUBBIgDgMIAAgBIgFgPQgBgDgCgCQgDgCgDAAIg0AAQgDAAgDACQgCACgBAEIgFAOIAAABIgDAMIgTAAIADgJIAAAAIAnhrIAFgNIAfAAIAEANIArB0gADjgzQgDACgBADIgQA1QgBADABADQABADADACQACACADAAIAiAAQADAAADgCQACgCABgDQABgDgBgDIgRg1QgBgDgCgCQgDgCgDAAQgDAAgDACgAgjBBIAAgRIAAhfIgBgRIASAAIAAARIAABfIAAARgAiIBBIAAgRIAAhaQAAgEgDgDQgDgDgEAAIgVAAIgRAAIAAgMIARAAIBPAAIASAAIAAAMIgSAAIgVAAQgEAAgDADQgDADAAAEIAABaIABARgAjsBBIAAgRIAAhfIAAgRIASAAIgBARIAABfIABARgAkoBBIgHgWIAAAAQgJgWgGgFQgIgIgNAAIgSAAQgEAAgDADQgDADAAAEIAAAeIAAARIgRAAIABgRIAAhgIgBgQIA/AAQASAAAJAIQAJAJAAAOQAAAPgHAHQgFAEgJADQgDABgCADQgCACAAADQAAADACADQACACAEABQAEABACADQADADAEAHIAAAAIAPAlgAllgMIAcAAQAIAAAEgEQAFgFAAgHQAAgQgRAAIgcAAgAIOATIgFhTIAVAAIgGBTgAHNATIgFhTIAVAAIgGBTg");
	this.shape_2.setTransform(55.2,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,112.5,17.7);


(lib.gra_moji_cleartime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AHmBHQgSgTAAgfQAAgcASgSQARgSAcAAQAYAAAPAMQAQAMAGAWQABAIABASIAAAEIhaAAQADAZAZgBQAMABAIgIQAEgEACgGIAjAKQgGANgIAIQgRAQgeAAQgdAAgRgQgAItAFQgEgSgWgBQgUABgGASIA0AAIAAAAgAlaBHQgSgTAAgfQAAgcARgSQASgSAdAAQAXAAAQAMQAPAMAFAWQACAIACASIAAAEIhaAAQACAZAZgBQAMABAIgIQAEgEACgGIAjAKQgGANgHAIQgRAQgeAAQgeAAgRgQgAkUAFQgEgSgUgBQgWABgEASIAyAAIAAAAgAo6BBQgYgYAAgpQAAgpAZgZQAVgUAkgBQAnAAAUAbQAJALAEARIgqAIQgGgcgZAAQgSAAgLAOQgKAOAAAYQAAAYALAOQAKANASAAQASAAAJgMQAEgGACgLIApAGQgFAYgLANQgTAWglgBQgmABgVgWgAB6BPQgLgIAAgSIAAg8IgHAAQgJgBgIACIAAgiIARABIAHAAIAAgDQAAgPgBgNIApAAQgCANAAAPIAAADIAHAAIAUgBIAAAiQgJgCgJABIgJAAIAAAyQAAAIADACQAEACAGABQAHAAAHgFIADAfQgNAEgPAAQgUAAgJgHgAjXBKQgLgKABgQQAAgUAOgKQAPgLAagCIAdgCIAAgDQAAgOgTAAQgTAAgEAOIgmgGQAFgQAMgJQAQgLAdAAQAYAAANAIQASAKAAAZIAAA2QAAAPACANIgnAAIAAgJQgQAMgXgBQgWABgNgMgAiwAhQgMAEAAAKQAAALARAAQAOAAAIgIQAIgGAAgJIAAgGQgYABgLADgAGbBTQACgNAAgRIAAgqQAAgLgFgEQgDgEgJAAQgQAAgIAUIAAApQAAARACANIgqAAQACgNgBgRIAAgqQAAgLgCgEQgEgEgHAAQgSAAgIAUIAAApQAAARACANIgqAAQABgNAAgRIAAg9QAAgUgBgLIAoAAIAAAOQAOgQAYgBQAPAAALAIQAEADAEAHQARgRAYgBQAsAAgBAtIAAAyQAAARACANgAC/BTQABgNAAgRIAAg9QAAgSgBgNIAqAAQgCAMABATIAAA9QgBAQACAOgAhRBTQABgNAAgRIAAg9QAAgTgBgMIAnAAIAAAQQAOgRAbgBQAHAAALACIgJAkQgMgDgIAAQgPAAgJAJQgEAHgCALIAAAgQAAARACANgAmmBTQACgNAAgRIAAhpQAAgVgCgKIArAAQgCALAAAUIAABpQAAAQACAOgAC/g0IAAgfIAqAAIAAAfg");
	this.shape.setTransform(59.5,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AH6AGQAFgUAUAAQAWAAADAUgAJTAhIAAgEQgBgSgDgIQgFgWgPgMQgQgMgYAAQgcAAgRASQgSASAAAdQAAAeASATQARARAeAAQAeAAARgRQAHgIAGgNIgjgKQgCAHgEAEQgIAHgMAAQgYAAgDgZgAEoBTQgDgNAAgRIAAgpQAKgVARAAQAHAAAEAGQACADAAAMIAAApQAAASgBAMIApAAQgBgNAAgRIAAgpQAIgVAQAAQAJAAADAGQAFADAAAMIAAApQAAARgCANIAqAAQgCgNAAgRIAAgyQAAgtgrAAQgZAAgRARQgEgGgEgEQgKgHgRAAQgXAAgPARIAAgOIgnAAQABALAAAUIAAA9QAAASgBAMgAC/hTIAAAeIAqAAIAAgegAC/gnQACAMAAATIAAA9QAAARgCANIAqAAQgCgOAAgQIAAg9QAAgTACgMgABvgnIgHAAQgJAAgJgBIAAAiQAJgBAJAAIAHAAIAAA8QAAASALAIQAJAHAUAAQAPAAANgEIgDgeQgHAEgHAAQgGAAgDgDQgEgCAAgIIAAgyIAJAAQAJAAAJABIAAgiQgIABgMAAIgHAAIAAgEQAAgOABgNIgoAAQABAMAAAPgAARgnQgLgCgIAAQgaAAgOATIAAgRIgoAAQACAMAAATIAAA9QAAARgCANIAqAAQgCgNAAgRIAAgfQABgMAFgHQAJgJAPAAQAIAAAMAEgAiNADQgUABgJABQgaADgPAKQgPAKAAAUQAAARALAKQAMALAXAAQAXAAAQgMIAAAJIAmAAQgBgNAAgQIAAg1QAAgagSgKQgNgHgYAAQgdAAgQALQgMAJgFAQIAmAGQAEgOATAAQATAAAAAOgAiNAjQAAAJgIAHQgJAHgNAAQgRAAAAgLQAAgKAMgDQALgEAYgBgAjuAhIAAgEQgBgSgCgIQgFgWgQgMQgPgMgYAAQgcAAgSASQgRASAAAdQAAAeASATQARARAdAAQAeAAARgRQAIgIAGgNIgjgKQgCAHgEAEQgIAHgMAAQgZAAgDgZgAlHAGQAFgUAVAAQAVAAAEAUgAmmhTQACAKAAAUIAABqQAAASgCAMIAqAAQgBgOAAgQIAAhqQAAgTABgLgAm5ghQgDgQgJgLQgUgbgnAAQgkAAgWAVQgYAYAAAqQAAApAXAYQAWAVAmAAQAlAAATgVQALgNAFgYIgpgGQgCALgEAGQgKANgRAAQgSAAgLgOQgKgOAAgYQAAgZAKgNQAKgOASAAQAaAAAGAbg");
	this.shape_1.setTransform(59.5,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AHmBHQgSgTAAgfQAAgcASgSQARgSAcAAQAYAAAPAMQAQAMAGAWQABAIABASIAAAEIhaAAQADAZAZgBQAMABAIgIQAEgEACgGIAjAKQgGANgIAIQgRAQgeAAQgdAAgRgQgAItAFQgEgSgWgBQgUABgGASIA0AAIAAAAgAlaBHQgSgTAAgfQAAgcARgSQASgSAdAAQAXAAAQAMQAPAMAFAWQACAIACASIAAAEIhaAAQACAZAZgBQAMABAIgIQAEgEACgGIAjAKQgGANgHAIQgRAQgeAAQgeAAgRgQgAkUAFQgEgSgUgBQgWABgEASIAyAAIAAAAgAo6BBQgYgYAAgpQAAgpAZgZQAVgUAkgBQAnAAAUAbQAJALAEARIgqAIQgGgcgZAAQgSAAgLAOQgKAOAAAYQAAAYALAOQAKANASAAQASAAAJgMQAEgGACgLIApAGQgFAYgLANQgTAWglgBQgmABgVgWgAB6BPQgLgIAAgSIAAg8IgHAAQgJgBgIACIAAgiIARABIAHAAIAAgDQAAgPgBgNIApAAQgCANAAAPIAAADIAHAAIAUgBIAAAiQgJgCgJABIgJAAIAAAyQAAAIADACQAEACAGABQAHAAAHgFIADAfQgNAEgPAAQgUAAgJgHgAjXBKQgLgKABgQQAAgUAOgKQAPgLAagCIAdgCIAAgDQAAgOgTAAQgTAAgEAOIgmgGQAFgQAMgJQAQgLAdAAQAYAAANAIQASAKAAAZIAAA2QAAAPACANIgnAAIAAgJQgQAMgXgBQgWABgNgMgAiwAhQgMAEAAAKQAAALARAAQAOAAAIgIQAIgGAAgJIAAgGQgYABgLADgAGbBTQACgNAAgRIAAgqQAAgLgFgEQgDgEgJAAQgQAAgIAUIAAApQAAARACANIgqAAQACgNgBgRIAAgqQAAgLgCgEQgEgEgHAAQgSAAgIAUIAAApQAAARACANIgqAAQABgNAAgRIAAg9QAAgUgBgLIAoAAIAAAOQAOgQAYgBQAPAAALAIQAEADAEAHQARgRAYgBQAsAAgBAtIAAAyQAAARACANgAC/BTQABgNAAgRIAAg9QAAgSgBgNIAqAAQgCAMABATIAAA9QgBAQACAOgAhRBTQABgNAAgRIAAg9QAAgTgBgMIAnAAIAAAQQAOgRAbgBQAHAAALACIgJAkQgMgDgIAAQgPAAgJAJQgEAHgCALIAAAgQAAARACANgAmmBTQACgNAAgRIAAhpQAAgVgCgKIArAAQgCALAAAUIAABpQAAAQACAOgAC/g0IAAgfIAqAAIAAAfg");
	this.shape_2.setTransform(59.5,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,120.9,19.5);


(lib.gra_moji_clear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AozBVQgegfAAg2QAAg2AfgfQAcgbAvAAQAzAAAaAiQAMAPAEAVIg1AKQgIgjgiAAQgYAAgNASQgNARAAAgQAAAgAOASQANASAYAAQAXAAAMgRQAGgHACgPIA2AIQgHAfgPARQgZAcgwAAQgxAAgcgcgAhFBsIh4ABQACgOAAgYIAAiNQAAgVgCgRIB5ABQAWAAARgCIAAAxQgRgDgWAAIhEAAIAAAnIA5AAQAVAAASgCIAAAvQgRgBgWAAIg5AAIAAArIBEAAQAbAAAPgCIAAAxQgQgCgbAAgAj5BsIh2ABQACgMAAgaIAAiIQAAgagCgQIA5AAQgCAPAAAaIAACAIA/AAQAdAAAOgCIAAAyQgNgCgeAAgAIaBsIAAgxIA0AAIAAAxgAG8BsIAAgxIA1AAIAAAxgAFlBsQgDgNgKgbQgKgcgHgHQgJgHgMAAIgaAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBqABQAfAAASAPQASAQAAAcQAAAcgQAPQgIAGgRAFQAKAEAGAFQAGAHAGANIAgBJgAEYgSIAoAAQALABAHgHQAGgHABgKQgBgXgYAAIgoAAgACTBsQgDgPgDgNIgHgWIhLAAIgHAWQgEAPgCANIg7AAIAMgfIA3icQAGgSACgKIBEAAIAJAcIBFC7gAB5AOIgZhNIgYBNIAxAAgAIfApIAAgNIgJiHIA8AAIgJCJIABALgAHAApIABgNIgKiHIA9AAIgJCJIAAALg");
	this.shape.setTransform(97.8,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AHxBsIAAgxIg1AAIAAAxgAHsApIgBgLIAJiJIg9AAIAKCHIgBANgAJPBsIAAgxIg1AAIAAAxgAJKApIgBgLIAJiJIg8AAIAJCHIAAANgAGiBsIgghJQgGgOgGgGQgGgFgKgEQARgFAIgHQAPgOAAgcQAAgcgRgQQgSgPgfAAIhrgBQADAQAAAWIAACLQAAAXgDAQIA5AAQgCgQAAgXIAAgrIAaAAQAMAAAJAHQAHAHAKAcQAKAbADANgAEYgSIAAguIAoAAQAYAAAAAWQAAALgGAHQgGAGgMAAgADQBsIhFi7QgGgQgDgMIhDAAQgDAKgGASIg3CbQgIAYgFAIIA8AAQACgNAFgPIAHgWIBKAAIAHAWQAEANACAPgAB5AOIgxAAIAZhNgAgaA9QgQACgbAAIhDAAIAAgsIA5AAQAWAAARACIAAgvQgTACgUAAIg5AAIAAgnIBEAAQAWAAARACIAAgwQgRACgWAAIh5gBQACARAAAVIAACNQAAAYgCAOIB4gBQAbAAAQACgAj5BsQAeAAANACIAAgyQgPACgcAAIg/AAIAAiAQAAgaABgPIg4AAQACAQAAAZIAACJQAAAZgCANgAmKgqQgFgVgLgPQgagigzAAQgvAAgcAbQgfAfAAA2QAAA2AeAfQAcAcAxAAQAwAAAZgcQAPgRAGgfIg2gIQgCAOgFAIQgMARgXAAQgYAAgNgTQgOgSAAgfQAAggANgSQANgRAYAAQAiAAAHAjg");
	this.shape_1.setTransform(97.8,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AozBVQgegfAAg2QAAg2AfgfQAcgbAvAAQA0AAAZAiQAMAPAEAVIg1AKQgIgjgiAAQgYAAgNASQgNARAAAgQAAAgAOASQAOASAXAAQAXAAAMgRQAFgHACgPIA2AIQgGAfgPARQgZAcgvAAQgxAAgdgcgAhFBsIh4ABQACgOAAgYIAAiNQAAgVgCgRIB5ABQAWAAARgCIAAAxQgQgDgXAAIhEAAIAAAnIA5AAQAUAAATgCIAAAvQgRgBgWAAIg5AAIAAArIBEAAQAbAAAPgCIAAAxQgQgCgbAAgAj5BsIh2ABQACgMAAgaIAAiIQAAgagCgQIA4AAQgBAPAAAaIAACAIA/AAQAdAAAOgCIAAAyQgOgCgdAAgAIaBsIAAgxIA0AAIAAAxgAG8BsIAAgxIA1AAIAAAxgAFlBsQgCgNgLgbQgKgcgHgHQgJgHgMAAIgaAAIAAArQAAAXACAQIg4AAQACgQAAgXIAAiLQAAgWgCgQIBqABQAfAAASAPQASAQAAAcQAAAcgQAPQgIAGgRAFQAKAEAGAFQAGAHAGANIAgBJgAEYgSIAoAAQAMABAGgHQAGgHABgKQgBgXgYAAIgoAAgACTBsQgDgPgDgNIgHgWIhLAAIgHAWQgEAPgCANIg8AAIANgfIA3icQAGgSADgKIBDAAIAJAcIBFC7gAB5AOIgZhNIgYBNIAxAAgAIfApIAAgNIgJiHIA8AAIgJCJIABALgAHAApIABgNIgKiHIA9AAIgJCJIAAALg");
	this.shape_2.setTransform(97.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.9,-0.7,121.8,25.6);


(lib.gra_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gra_logo, new cjs.Rectangle(0,0,400,200), null);


(lib.gra_icon_upper_cloth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_1();
	this.instance.parent = this;
	this.instance.setTransform(-1,-4,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4,25,25);


(lib.gra_icon_under_cloth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_2();
	this.instance.parent = this;
	this.instance.setTransform(-1,-3,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3,25,25);


(lib.gra_icon_pants = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_4();
	this.instance.parent = this;
	this.instance.setTransform(2,-9,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-9,25,25);


(lib.gra_icon_heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag/AXQgaghAAgbQAAgOAGgMQAHgMALgHQAMgHAPAAQATAAAKAHQAHAGACAIQAKgVAdAAQAWAAAPAOQAOAQAAAWQAAAfgcAiQgOAQgbAaIgVAUQgsgqgTgZg");
	this.shape.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(3,1,1).p("AAABaIAVgUQAbgaAOgQQAcgiAAgfQAAgWgOgQQgPgOgWAAQgdAAgKAUQgCgHgHgGQgLgHgSAAQgPAAgMAHQgLAHgHAMQgGAMAAAOQAAAbAaAhQASAZAtAqg");
	this.shape_1.setTransform(9,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag/AXQgaghAAgbQAAgOAGgMQAHgMALgHQAMgHAPAAQATAAAKAHQAHAGACAIQAKgVAdAAQAWAAAPAOQAOAQAAAWQAAAfgcAiQgOAQgbAaIgVAUQgsgqgTgZg");
	this.shape_2.setTransform(9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,21,21);


(lib.gra_icon_bura = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.icon_3();
	this.instance.parent = this;
	this.instance.setTransform(2,-8,0.125,0.125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,-8,25,25);


(lib.gra_gameover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACKBvQgngqAAhFQAAhFAngpQAmgpBBAAQBAAAAmAoQAnApAABFQAABEgnArQgnAqhAAAQhAAAgmgpgAC+hCQgSAYAAAqQAAAqASAZQATAZAgAAQAfAAATgZQASgZAAgqQAAgqgSgYQgTgZgfAAQggAAgTAZgAykByQgpgoAAhLQAAhFAngpQAmgoBCAAQBCAAAjApQAMAQAIAWIhHARQgFgRgLgIQgNgLgWAAQgiAAgSAYQgRAXAAAsQAAAxAVAXQARAUAhAAQAaAAAZgNIAAgoIgRAAQgVAAgOACIAAg9QAQACAeAAIAcAAQAbAAAUgCQgDATAAAbIAAAoQAAAiADASQgYAQgVAGQgjAMgnAAQhDAAglgmgANuCSIiiABQADgUAAgfIAAi/QAAgcgDgXICjABQAeAAAXgCIAABBQgXgDgeABIhaAAIAAAzIBLAAQAcAAAZgCIAABAQgXgDgeAAIhLAAIAAA7IBaAAQAkAAAVgCIAABBQgVgCglAAgAhlCSIiiABQADgUAAgfIAAi/QAAgcgDgXICjABQAeAAAXgCIAABBQgXgDgeABIhaAAIAAAzIBLAAQAcAAAZgCIAABAQgXgDgeAAIhLAAIAAA7IBaAAQAkAAAVgCIAABBQgVgCglAAgAR8CSQgDgSgOglQgOglgKgKQgLgJgQAAIgkAAIAAA6QAAAfADAWIhMAAQADgWAAgfIAAi7QAAgegDgWICQABQAqAAAYAVQAXAVAAAmQAAAmgUATQgMAJgWAIQAOAEAHAIQAIAIAIATIArBigAQUgYIA2AAQAQAAAJgIQAJgJAAgPQAAgeghAAIg3AAgAHzCSQgCgOgJgZIhKjRQgIgYgJgTIBSAAQACAQAHAWIA5DAIA5jAQAHgYABgOIBTAAQgGANgLAeIhKDRQgJAagDANgAl3CSQADgWAAghIAAhMQAAgSACgbIABgYQgLApgFAMIgiBfQgMAjgDARIg9AAQgCgRgNgjIgxiTQADAlAAAfIAABMQAAAjADAUIhFAAQADgWAAghIAAi2QAAgegDgYIBcAAQAEAVAKAdIA0CVIA0iVQAKgeADgUIBdAAQgDAWAAAgIAAC2QAAAkADATgArYCSQgEgWgFgRIgJgdIhkAAIgJAdQgGAUgDATIhSAAQAGgMALgfIBMjSQAIgYADgOIBbAAQAEARAIAVIBdD9gAr7ATIghhoIghBoIBCAAg");
	this.shape.setTransform(181,15.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ATOCSIgrhiQgIgTgIgIQgHgIgOgEQAWgHAMgJQAUgUAAgmQAAgmgXgVQgYgVgqAAIiQgBQADAWAAAeIAAC7QAAAfgDAWIBMAAQgDgWAAgfIAAg6IAkAAQAQAAALAJQAKAKAOAlQAOAlADASgAQUgYIAAg+IA3AAQAhAAAAAeQAAAPgJAIQgJAJgQAAgAOoBTQgVACgkAAIhaAAIAAg7IBLAAQAeAAAXADIAAhAQgZACgcAAIhLAAIAAgzIBaAAQAeAAAXACIAAhCQgXADgeAAIijgBQADAXAAAcIAAC/QAAAggDATICigBQAlAAAVACgAHohrQgHgWgCgQIhSAAQAJATAIAYIBKDSQAJAYACAOIBbAAQADgNAJgZIBKjSQALgeAGgNIhTAAQgBANgHAZIg5DAgADxBcQggAAgTgZQgSgZAAgqQAAgqASgZQATgYAgAAQAfAAATAYQASAYAAArQAAAqgSAZQgTAZgfAAgADxiXQhBAAgmApQgnApAABFQAABFAnAqQAmApBAAAQBAAAAngqQAngqAAhEQAAhFgngpQgmgphAAAgAgrBTQgVACgkAAIhaAAIAAg7IBLAAQAeAAAXADIAAhAQgZACgcAAIhLAAIAAgzIBaAAQAeAAAXACIAAhCQgXADgeAAIijgBQADAXAAAcIAAC/QAAAggDATICigBQAlAAAVACgAmyCSQADgQAMgkIAihfQAFgMALgoIgBAXQgCAcAAARIAABMQAAAhgDAWIBFAAQgDgTAAgkIAAi1QAAghADgWIhdAAQgDAUgKAeIg0CVIg0iVQgKgdgEgVIhcAAQADAYAAAfIAAC1QAAAigDAVIBFAAQgDgUAAgjIAAhMQAAgggDgkIAxCTQANAkACAQgAqGCSIhdj9QgIgVgEgRIhbAAQgDAOgIAYIhMDSQgLAfgGAMIBSAAQADgTAGgTIAJgeIBkAAIAJAeQAFAQAEAWgAr7ATIhCAAIAhhogAwKAnIAAAoQgZANgaAAQghAAgRgTQgVgYAAgxQAAgsARgYQASgXAiAAQAWAAANALQALAIAFARIBHgQQgIgXgMgPQgjgqhCAAQhCAAgmApQgnApAABFQAABKApApQAlAlBDAAQAnAAAjgMQAVgGAYgQQgDgSAAgiIAAgnQAAgcADgTQgUACgbAAIgcAAQgeAAgQgCIAAA9QAOgCAVAAg");
	this.shape_1.setTransform(181,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACKBvQgngqAAhFQAAhFAngpQAmgpBBAAQBAAAAmAoQAnApAABFQAABEgnArQgnAqhAAAQhAAAgmgpgAC+hCQgSAYAAAqQAAAqASAZQATAZAgAAQAfAAATgZQASgZAAgqQAAgqgSgYQgTgZgfAAQggAAgTAZgAykByQgpgoAAhLQAAhFAngpQAmgoBCAAQBCAAAjApQAMAQAIAWIhHARQgFgRgLgIQgNgLgWAAQgiAAgSAYQgRAXAAAsQAAAxAVAXQARAUAhAAQAaAAAZgNIAAgoIgRAAQgVAAgOACIAAg9QAQACAeAAIAcAAQAbAAAUgCQgDATAAAbIAAAoQAAAiADASQgYAQgVAGQgjAMgnAAQhDAAglgmgANuCSIiiABQADgUAAgfIAAi/QAAgcgDgXICjABQAeAAAXgCIAABBQgXgDgeABIhaAAIAAAzIBLAAQAcAAAZgCIAABAQgXgDgeAAIhLAAIAAA7IBaAAQAkAAAVgCIAABBQgVgCglAAgAhlCSIiiABQADgUAAgfIAAi/QAAgcgDgXICjABQAeAAAXgCIAABBQgXgDgeABIhaAAIAAAzIBLAAQAcAAAZgCIAABAQgXgDgeAAIhLAAIAAA7IBaAAQAkAAAVgCIAABBQgVgCglAAgAR8CSQgDgSgOglQgOglgKgKQgLgJgQAAIgkAAIAAA6QAAAfADAWIhMAAQADgWAAgfIAAi7QAAgegDgWICQABQAqAAAYAVQAXAVAAAmQAAAmgUATQgMAJgWAIQAOAEAHAIQAIAIAIATIArBigAQUgYIA2AAQAQAAAJgIQAJgJAAgPQAAgeghAAIg3AAgAHzCSQgCgOgJgZIhKjRQgIgYgJgTIBSAAQACAQAHAWIA5DAIA5jAQAHgYABgOIBTAAQgGANgLAeIhKDRQgJAagDANgAl3CSQADgWAAghIAAhMQAAgSACgbIABgYQgLApgFAMIgiBfQgMAjgDARIg9AAQgCgRgNgjIgxiTQADAlAAAfIAABMQAAAjADAUIhFAAQADgWAAghIAAi2QAAgegDgYIBcAAQAEAVAKAdIA0CVIA0iVQAKgeADgUIBdAAQgDAWAAAgIAAC2QAAAkADATgArYCSQgEgWgFgRIgJgdIhkAAIgJAdQgGAUgDATIhSAAQAGgMALgfIBMjSQAIgYADgOIBbAAQAEARAIAVIBdD9gAr7ATIghhoIghBoIBCAAg");
	this.shape_2.setTransform(181,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.5,-1.5,249.1,33.4);


(lib.gra_effect_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AShE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQpE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAOxE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAM5E2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgALBE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAJJE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAHRE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAFZE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgADhE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgABpE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAgOE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiGE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAj+E2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAl2E2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAnuE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgApmE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAreE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAtWE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAvOE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAxGE2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAy+E2QgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAztEfQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgATgEBQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAztCnQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgATgCJQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAztAvQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgATgARQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAzthIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgATghmQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAztjAQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgATgjeQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAR5khQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAQBkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAOJkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAMRkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAKZkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAIhkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAGpkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAExkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAC5khQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgABBkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAg2khQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA7AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAiukhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAkmkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAmekhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAoWkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAqOkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAsGkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAt+khQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAv2khQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAxukhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAgAzmkhQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIA8AAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAg");
	this.shape.setTransform(125.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,253,62);


(lib.gra_bullet_empty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgxjQIAABpIgGAkIAAE7IAAAGIA4AAIAjAAIAUAAIAAgGIAAk7IgGgkIAAhpQgGgMgHgJQgSgXgSgBQgYgBgaAug");
	this.shape.setTransform(5.6,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,14.3,53.8);


(lib.gra_bullet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#624E2B").s().p("AAkD+IAAlBIAUAAIAAE7IAAAGgAg3D+IAAgGIAAk7IA4AAIAAFBgAAkhnIABh+QAHAJAGAMIAABpgAgxhnIAAhpQAaguAYABIAACWg");
	this.shape.setTransform(5.6,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#553923").s().p("AAkASIgjAAIg4AAIAGgjIAyAAIAjAAIAOAAIAGAjg");
	this.shape_1.setTransform(5.6,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9BB65").s().p("AgRD+IAAlBIAiAAIAAFBgAgRhoIAAiVQARAAASAYIgBB9g");
	this.shape_2.setTransform(7.5,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// レイヤー_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("AgxjQIAABpIgGAkIAAE7IAAAGIA4AAIAjAAIAUAAIAAgGIAAk7IgGgkIAAhpQgGgMgHgJQgSgXgSgBQgYgBgaAug");
	this.shape_3.setTransform(5.6,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#624E2B").s().p("AAkD+IAAlBIAUAAIAAE7IAAAGgAg3D+IAAgGIAAk7IA4AAIAAFBgAAkhnIABh+QAHAJAGAMIAABpgAgxhnIAAhpQAaguAYABIAACWg");
	this.shape_4.setTransform(5.6,25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#553923").s().p("AAkASIgjAAIg4AAIAGgjIAyAAIAjAAIAOAAIAGAjg");
	this.shape_5.setTransform(5.6,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9BB65").s().p("AgRD+IAAlBIAiAAIAAFBgAgRhoIAAiVQARAAASAYIgBB9g");
	this.shape_6.setTransform(7.5,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,14.3,53.8);


(lib.gra_bokan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-5.7,18.1,0,-5.7,18.1,422).s().p("EglfAyyMAAAhljMBK/AAAMAAABljg");
	this.shape.setTransform(240,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,650);


(lib.FocusMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AgCnzQABAAABAAQDPAACSCSQCTCTAADOQAAACAAACQgCDMiRCRQiSCTjPAAQgBAAgBAAQjNgBiSiSQiRiRgBjMQAAgCAAgCQAAjOCSiTQCSiRDNgBg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.2)").s().p("AgCH0QjNgBiSiSQiQiQgCjMIAAgFQAAjOCSiSQCSiSDNgBIACAAQDPAACSCTQCTCSAADOIAAAFQgBDMiSCQQiSCTjPAAIgCAAg");
	this.shape_1.setTransform(0.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("AhCnvQAfgEAhAAQABAAABAAQDPAACSCTQCTCSAADOQAAADAAACQgCDMiRCRQgPAPgQAOAgSH0QjDgGiMiMQiRiRgBjMQAAgCAAgDQAAghAEgh");
	this.shape_2.setTransform(0.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.2)").s().p("AgBF3QiagBhthtQhZhZgRh2QgEgbAAgcIAAgDQAAiSBjhqIALgNQBthtCaAAIABAAQAeAAAcAEIAGABQBzASBWBWQBuBuAACbIAAADQgBCZhtBtQhtBuicAAIgBAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.2)").s().p("AgiAjQgPgOAAgUIAAgBQAAgUAPgOQAOgPAUAAQAVAAAOAPQAPAOAAAUIAAABQAAAUgPAOQgOAPgVAAQgUAAgOgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// レイヤー_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNJ8QgEgFAAgGIAAhuQjJgGiRiRQiQiQgHjJIigAAQgGAAgEgEQgFgEAAgGQAAgGAFgEQAEgEAGgBICgAAQAEjOCTiTQCRiRDJgGIAAhuQAAgGAEgEQAFgFAGAAQAFAAAFAFQAEAEAAAGIAABuQDNAECTCTQCTCTAEDOICgAAQAGABAFAEQAEAEAAAGQAAAGgEAEQgFAEgGAAIigAAQgHDJiQCQQiTCTjNAEIAABuQAAAGgEAFQgFAEgFAAQgGAAgFgEgAD0DzQhhBiiHAEIAACMQDBgECKiKQCHiHAHi9IiNAAQgGCCheBegAlWFXQCICIC9AGIAAiNQiDgGhehfQhfhegGiCIiNAAQAHC9CHCHgAAEEfQADADAAAFIAAAiIABABIADAFQCEgEBehfQBchbAGh/IgGgDIAAAAIgxAAQgEgBgDgDQgDgCAAgEQAAgFADgBQADgDAEAAIAxAAIAAgBQADgCADgCQgDiEhfhfQheheiEgEIgDAGIgBAAIAAAxQAAAEgDADQgDADgDAAQgEAAgDgDQgDgDAAgEIAAgxIgBAAIgDgGQh/AGhdBcQheBfgDCEQADACACACIAAABIAkAAQAEAAADADQADABAAAFQAAAEgDACQgDADgEABIgkAAIAAAAIgFADQAGB/BbBbQBdBdB/AFIADgEIABgBIAAgiQAAgFADgDQADgCAEAAQADAAADACgAHlgKQgEjCiKiKQiKiKjBgEIAACMQCHAEBhBhQBhBiAECHICMAAIAAAAgAlWlWQiKCKgEDCICNAAQADiHBihiQBeheCDgGIAAiNQi9AGiICIgAgJDyQgDgDAAgFIAAg7QAAgFADgCQADgDAEgBQADABADADQADACAAAFIAAA7QAAAFgDADQgDACgDAAQgEAAgDgCgAgJB6QgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQADABADACQADADAAAEIAAA9QAAAEgDADQgDACgDAAQgEAAgDgCgACgAPQgEgBgDgDQgDgCAAgEQAAgFADgBQADgDAEAAIA8AAQAEAAADADQADABAAAFQAAAEgDACQgDADgEABgAAoAPQgEgBgDgDQgDgCAAgEQAAgFADgBQADgDAEAAIA8AAQAEAAADADQADABAAAFQAAAEgDACQgDADgEABgAhwAPQgEgBgDgDQgDgCAAgEQAAgFADgBQADgDAEAAIA8AAQAEAAADADQADABAAAFQAAAEgDACQgDADgEABgAjoAPQgEgBgDgDQgDgCAAgEQAAgFADgBQADgDAEAAIA8AAQAEAAADADQADABAAAFQAAAEgDACQgDADgEABgAgJggQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJiYQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_5.setTransform(0.2,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.8,-64.3,138,128);


(lib.ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.霊夢アクメ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.ClothMc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.パンツ();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClothMc4, new cjs.Rectangle(0,0,480,800), null);


(lib.ClothMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.ブラ();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClothMc3, new cjs.Rectangle(0,0,480,800), null);


(lib.ClothMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.服下();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClothMc2, new cjs.Rectangle(0,0,480,800), null);


(lib.ClothMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.服上();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClothMc1, new cjs.Rectangle(0,0,480,800), null);


(lib.BtnTweetMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38AFE2").s().p("AB1A+QgSgSAAgfQAAgcARgSQASgSAcAAQAYAAAPAMQAQAMAFAWQACAIABASIAAAEIhaAAQADAYAZAAQAMAAAIgHQAEgEACgGIAjAKQgGANgIAHQgRARgeAAQgdAAgRgRgAC7gCQgEgUgVAAQgVAAgFAUIAzAAIAAAAgAgUA+QgSgSAAgfQAAgcASgSQARgSAcAAQAXAAAQAMQAPAMAGAWQACAIABASIAAAEIhZAAQACAYAYAAQAMAAAIgHQAEgEACgGIAjAKQgGANgHAHQgRARgeAAQgdAAgRgRgAAygCQgEgUgVAAQgVAAgEAUIAyAAIAAAAgAEMBHQgLgIAAgSIAAg9IgHAAQgJAAgJACIAAgiIASABIAHAAIAAgEQAAgPgBgMIAoAAQgBANAAAOIAAAEIAHAAIAUgBIAAAiQgJgCgKAAIgIAAIAAAzQAAAHADADQAEACAGAAQAHAAAHgEIADAfQgNAEgPAAQgUAAgJgHgAkgBHQgLgIAAgSIAAg9IgHAAQgJAAgJACIAAgiIASABIAHAAIAAgEQAAgPgBgMIAoAAQgBANAAAOIAAAEIAHAAIAUgBIAAAiQgJgCgKAAIgIAAIAAAzQAAAHADADQAEACAGAAQAHAAAHgEIADAfQgNAEgPAAQgUAAgJgHgAh0BKQgBgHgFgQIgOgwIgPAwQgFAPgBAIIgiAAIgGgXIgfhiIArAAQAAAKADAOIALAsIAUhEIAdAAIAGAXIAOAtIALgqQADgQABgKIArAAIggBiIgGAXg");
	this.shape.setTransform(36.8,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEFEFE").s().p("Al2B9IAAj5ILtAAIAAD5g");
	this.shape_1.setTransform(37.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnTweetMc, new cjs.Rectangle(0,0,75,25), null);


(lib.BtnDisplayMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EglfAyyMAAAhljMBK/AAAMAAABljg");
	this.shape.setTransform(240,325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnDisplayMc, new cjs.Rectangle(0,0,480,650), null);


(lib.BomMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.B();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BomMc, new cjs.Rectangle(0,0,100,100), null);


(lib.WhiteOutMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra_whiteout("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteOutMc, new cjs.Rectangle(0,0,480,800), null);


(lib.StartMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_80 = function() {
		exe_start(this.parent);
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(1));

	// レイヤー_6
	this.instance = new lib.gra_start();
	this.instance.parent = this;
	this.instance.setTransform(238.6,361.9,1,1,0,0,0,197.5,43.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(8).to({_off:true},1).wait(1));

	// レイヤー_4
	this.instance_1 = new lib.gra1d("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.1,365.1,4.662,4.662,0,0,0,14,17.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).to({_off:true},24).wait(10));

	// レイヤー_3
	this.instance_2 = new lib.gra2d("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(237.1,365.1,4.662,4.662,0,0,0,14,17.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true},23).wait(34));

	// レイヤー_1
	this.instance_3 = new lib.gra3d("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(237.1,365.1,4.662,4.662,0,0,0,14,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},24).wait(57));

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EglfA+gMAAAh8/MBK/AAAMAAAB8/g");
	this.shape.setTransform(240,400);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.StarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.gra_bullet_empty("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.7,21.5,1,1,-21.9,0,0,5.6,25.4);

	this.instance_1 = new lib.gra_bullet("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,21.5,1,1,-21.9,0,0,5.6,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,-3.8,30.2,52.4);


(lib.PushStartMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra_pushtostart();
	this.instance.parent = this;
	this.instance.setTransform(117.9,11.3,1,1,0,0,0,117.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},23).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,237.7,24.8);


(lib.PushRetryMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra_retry("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(122.8,14,1,1,0,0,0,122.8,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},13).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,209.1,29.7);


(lib.NumberUnitMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// レイヤー_1
	this.instance = new lib.gra0d("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,16.9,1,1,0,0,0,14.2,17.4);

	this.instance_1 = new lib.gra1d("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.4,16.8,1,1,0,0,0,7.4,16.8);

	this.instance_2 = new lib.gra2d("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.3,16.9,1,1,0,0,0,13.4,17.1);

	this.instance_3 = new lib.gra3d("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.4,17.2,1,1,0,0,0,13.9,17.4);

	this.instance_4 = new lib.gra4d("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.5,16.9,1,1,0,0,0,14.6,16.6);

	this.instance_5 = new lib.gra5d("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.8,17.2,1,1,0,0,0,13.5,17.2);

	this.instance_6 = new lib.gra6d("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.6,17.4,1,1,0,0,0,13.7,17.4);

	this.instance_7 = new lib.gra7d("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.1,16.8,1,1,0,0,0,13.2,16.8);

	this.instance_8 = new lib.gra8d("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.5,17.4,1,1,0,0,0,14.1,17.4);

	this.instance_9 = new lib.gra9d("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.7,16.9,1,1,0,0,0,13.7,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-2,31.4,37.7);


(lib.NumberUnitMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// レイヤー_1
	this.instance = new lib.gra0("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10,16.9,1,1,0,0,0,14.2,17.4);

	this.instance_1 = new lib.gra1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.4,16.8,1,1,0,0,0,7.4,16.8);

	this.instance_2 = new lib.gra2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(9.3,16.9,1,1,0,0,0,13.4,17.1);

	this.instance_3 = new lib.gra3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(9.4,17.2,1,1,0,0,0,13.9,17.4);

	this.instance_4 = new lib.gra4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.5,16.9,1,1,0,0,0,14.6,16.6);

	this.instance_5 = new lib.gra5("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.8,17.2,1,1,0,0,0,13.5,17.2);

	this.instance_6 = new lib.gra6("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.6,17.4,1,1,0,0,0,13.7,17.4);

	this.instance_7 = new lib.gra7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(10.1,16.8,1,1,0,0,0,13.2,16.8);

	this.instance_8 = new lib.gra8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.5,17.4,1,1,0,0,0,14.1,17.4);

	this.instance_9 = new lib.gra9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(9.7,16.9,1,1,0,0,0,13.7,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-0.5,28.4,34.7);


(lib.NumberMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.unit3 = new lib.NumberUnitMc2();
	this.unit3.name = "unit3";
	this.unit3.parent = this;
	this.unit3.setTransform(-52.6,16.8,1,1,0,0,0,7.4,16.8);

	this.unit2 = new lib.NumberUnitMc2();
	this.unit2.name = "unit2";
	this.unit2.parent = this;
	this.unit2.setTransform(-22.6,16.8,1,1,0,0,0,7.4,16.8);

	this.unit1 = new lib.NumberUnitMc2();
	this.unit1.name = "unit1";
	this.unit1.parent = this;
	this.unit1.setTransform(7.4,16.8,1,1,0,0,0,7.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unit1},{t:this.unit2},{t:this.unit3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberMc2, new cjs.Rectangle(-65.7,-2,91.4,37.7), null);


(lib.NumberMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_1
	this.unit3 = new lib.NumberUnitMc();
	this.unit3.name = "unit3";
	this.unit3.parent = this;
	this.unit3.setTransform(-52.6,16.8,1,1,0,0,0,7.4,16.8);

	this.unit2 = new lib.NumberUnitMc();
	this.unit2.name = "unit2";
	this.unit2.parent = this;
	this.unit2.setTransform(-22.6,16.8,1,1,0,0,0,7.4,16.8);

	this.unit1 = new lib.NumberUnitMc();
	this.unit1.name = "unit1";
	this.unit1.parent = this;
	this.unit1.setTransform(7.4,16.8,1,1,0,0,0,7.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.unit1},{t:this.unit2},{t:this.unit3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NumberMc, new cjs.Rectangle(-64.2,-0.5,88.4,34.7), null);


(lib.NewRecordMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra_moji_new_record("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.1,7.1,1,1,0,0,0,60,7.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},23).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,123,17.2);


(lib.HpBarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.b = new lib.HpBarRedMc();
	this.b.name = "b";
	this.b.parent = this;
	this.b.setTransform(0,2.5,1,1,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get(this.b).wait(1));

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnzAZIAAgxIPnAAIAAAxg");
	this.shape.setTransform(50,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.HpBarMc, new cjs.Rectangle(0,0,100,5), null);


(lib.GameoverMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
		exeGameover(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// レイヤー_4
	this.instance = new lib.PushRetryMc();
	this.instance.parent = this;
	this.instance.setTransform(237.1,444.1,1,1,0,0,0,103,13.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1));

	// str
	this.instance_1 = new lib.gra_gameover("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.4,-66,1,1,0,0,0,178.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:370.9},9,cjs.Ease.get(-1)).to({y:330.9},2).to({y:351.9},2).wait(4));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EglfA+gMAAAh8/MBK/AAAMAAAB8/g");
	this.shape.setTransform(240,400);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.5,-89.4,249.1,33.4);


(lib.EffectStarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// レイヤー_4
	this.instance = new lib.gra_moji_effect_star("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(170.4,90.7,1,1,0,0,0,80.2,18.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(28));

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah0FuIAAmpIi3AAIErkyIEsEyIi4AAIAAGpg");
	this.shape.setTransform(32.8,91.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(28));

	// レイヤー_3
	this.instance_1 = new lib.gra_effect_star("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(109,26.9,0.876,0.73,0,0,0,125.5,30.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},8).wait(2).to({_off:false},0).to({_off:true},8).wait(2).to({_off:false},0).wait(8));

	// レイヤー_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.6)").s().p("EggnAJJIAAyRMBBPAAAIAASRg");
	this.shape_1.setTransform(210.8,113.3);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(28));

	// レイヤー_1
	this.instance_2 = new lib.gra_effect_star("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-214.5,30,1,1,0,0,0,125.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341,-1,253,62);


(lib.DamageNumberMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(1));

	// レイヤー_3
	this.n = new lib.NumberMc2();
	this.n.name = "n";
	this.n.parent = this;
	this.n.setTransform(36.3,8.7,0.5,0.5,0,0,0,8.4,16.9);

	this.timeline.addTween(cjs.Tween.get(this.n).to({regX:8.5,y:-1},5,cjs.Ease.get(1)).to({regX:8.4,y:8.7},5,cjs.Ease.get(-1)).to({_off:true},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.7,45.7,18.9);


(lib.CharaMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(7));

	// 服上
	this.cloth_mc1 = new lib.ClothMc1();
	this.cloth_mc1.name = "cloth_mc1";
	this.cloth_mc1.parent = this;
	this.cloth_mc1.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.cloth_mc1).to({_off:true},7).wait(1));

	// 服下
	this.cloth_mc2 = new lib.ClothMc2();
	this.cloth_mc2.name = "cloth_mc2";
	this.cloth_mc2.parent = this;
	this.cloth_mc2.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.cloth_mc2).to({_off:true},7).wait(1));

	// ブラ
	this.cloth_mc3 = new lib.ClothMc3();
	this.cloth_mc3.name = "cloth_mc3";
	this.cloth_mc3.parent = this;
	this.cloth_mc3.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.cloth_mc3).to({_off:true},7).wait(1));

	// パンツ
	this.cloth_mc4 = new lib.ClothMc4();
	this.cloth_mc4.name = "cloth_mc4";
	this.cloth_mc4.parent = this;
	this.cloth_mc4.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.cloth_mc4).to({_off:true},7).wait(1));

	// 胸左
	this.tits_left_mc = new lib.TitsLeftMc();
	this.tits_left_mc.name = "tits_left_mc";
	this.tits_left_mc.parent = this;
	this.tits_left_mc.setTransform(240,400,1,1,0,0,0,240,400);
	this.tits_left_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tits_left_mc).wait(1).to({_off:false},0).to({_off:true},6).wait(1));

	// 胸右
	this.tits_right_mc = new lib.TitsRightMc();
	this.tits_right_mc.name = "tits_right_mc";
	this.tits_right_mc.parent = this;
	this.tits_right_mc.setTransform(240,400,1,1,0,0,0,240,400);
	this.tits_right_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tits_right_mc).wait(1).to({_off:false},0).to({_off:true},6).wait(1));

	// 汗
	this.sweat_mc = new lib.SweatMc();
	this.sweat_mc.name = "sweat_mc";
	this.sweat_mc.parent = this;
	this.sweat_mc.setTransform(240,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.sweat_mc).to({_off:true},7).wait(1));

	// レイヤー_1
	this.instance = new lib.霊夢0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.霊夢1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.霊夢2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.霊夢3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.霊夢4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.霊夢5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,480,800);


(lib.BtnStartMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgpFAuQMAAAhcfMBSLAAAMAAABcfg");
	this.shape.setTransform(237,568);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// レイヤー_4
	this.instance = new lib.PushStartMc();
	this.instance.parent = this;
	this.instance.setTransform(241.2,579.2,1,1,0,0,0,117.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BtnStartMc, new cjs.Rectangle(-25.9,272,526,592), null);


(lib.BomEffectMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// レイヤー_1
	this.instance = new lib.gra_bokan("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(240,325,1,1,0,0,0,240,325);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regX:240.1,regY:324.9,scaleX:2.83,scaleY:2.83,x:240.3,y:324.8},4).wait(1));

	// sign
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AmtGuIAAtbINbAAIAANbg");
	this.shape.setTransform(651.2,515.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(608.2,472.2,86,86);


(lib.RecordMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.gra_moji_sec("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(238,14.7,1,1,0,0,0,9.7,9.6);

	this.instance_1 = new lib.gra_moji_record("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.1,14,1,1,0,0,0,41.1,8.6);

	this.instance_2 = new lib.gra_point("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(152.2,21.2,1,1,0,0,0,2,2);

	this.record_time2 = new lib.DamageNumberMc();
	this.record_time2.name = "record_time2";
	this.record_time2.parent = this;
	this.record_time2.setTransform(190.3,11.8,1.359,1.354,0,0,0,22.1,8.7);

	this.record_time1 = new lib.DamageNumberMc();
	this.record_time1.name = "record_time1";
	this.record_time1.parent = this;
	this.record_time1.setTransform(116.3,11.8,1.359,1.354,0,0,0,22.1,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.record_time1},{t:this.record_time2},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RecordMc, new cjs.Rectangle(-1,-1,250.2,26.8), null);


(lib.EndingMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		if(!this.parent.OUT_TEST_FLG) this.whiteout_mc.visible = false;
	}
	this.frame_49 = function() {
		this.stop();
		exeGameclear(this.parent);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1));

	// レイヤー_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGdCBQgTgNgBgOQAAgKAJgGQAJgFAKAAQAHAAAPAGQATAIAMABQATAAAPgJQAKgFgBgDIAAgFIgBAAQgDAFgOAEQgNADgQAAQgoAAgXgYQgVgVABgeQAAgiAbgYQAXgUAgAAQAdAAASARIABAAIAAgBQAAgIAIgEQAHgFALAAQANAAAKAKQAIAIAAAKIAABhQAAArgfAXQgbAVgsAAQgjAAgYgPgAHHgCQgIAGAAALQAAANALAIQAKAHAOAAQAhAAAAgZIAAgFQAAgLgKgHQgKgHgNAAQgRAAgKAKgABaB3QgIgHAAgIIAAiVQAAgKAKgHQAIgGALAAQANAAAJAIQAHAHAAAIIAACVQAAAKgJAHQgJAGgLAAQgNAAgIgIgAgCB5QgHgFAAgHIAAgDIgCAAQgSAVghAAQgogBgXghQgVgaAAgjQAAgwAcgcQAYgYAkAAQAbAAASAPIACAAIAAg6QAAgKAJgHQAIgHAMAAQAMAAAJAIQAIAHAAAJIAADcQAAAIgJAFQgIAFgLAAQgOAAgHgGgAhNgBQgKAMAAASQAAATAMAMQALAKAPAAQARAAAKgLQAKgKABgPIAAgHQABgVgNgLQgKgKgPAAQgSAAgLAOgAomBiQgXgYAAgnQAAgxAfgdQAbgZAoAAQAoAAAaAbQAXAXAAAdQAAAmgmAAIhaAAQAIAbAgAAQASAAARgOQAJgHAGAAQAMAAALAKQAJAJAAAJQAAATgZANQgWAMgiAAQgxAAgcgdgAn+ACIBAAAIABgCQAAgGgJgHQgJgHgLAAQgbAAgJAWgAE7B3QgHgHAAgJIAAhWQgBgfgcAAQgTAAgNALQgKAIgBAPIAABTQAAAKgJAHQgJAHgLAAQgNAAgJgJQgIgHAAgIIAAiNQAAgNALgIQAJgHANAAQAKAAAIAHQAGAGACAJQAagXAlAAQAfAAATAYQARATAAAbIAABkQAAAKgKAHQgIAHgMAAQgMAAgJgIgAjcB3QgIgHAAgJIAAhWQABgfgdAAQgTAAgMALQgLAIgBAPIAABTQAAAKgKAHQgIAHgLAAQgNAAgJgJQgHgHAAgIIAAiNQAAgNAKgIQAJgHAMAAQALAAAHAHQAHAGABAJQAbgXAkAAQAgAAAUAYQAQATAAAbIAABkQAAAKgKAHQgJAHgLAAQgNAAgIgIgABWhWQgJgKAAgNQABgPAKgKQAKgJANAAQAQAAAKALQAIAKAAANQAAAPgLAKQgKAJgNAAQgPAAgKgLg");
	this.shape.setTransform(853.8,455);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(49));

	// str
	this.instance = new lib.gra_moji_sec("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(323.2,295.5,1,1,0,0,0,9.7,9.6);

	this.instance_1 = new lib.gra_moji_sec("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(323.2,255.5,1,1,0,0,0,9.7,9.6);

	this.instance_2 = new lib.gra_moji_cleartime("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(70.3,254.4,1,1,0,0,0,59.5,8.8);

	this.instance_3 = new lib.gra_moji_record("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.3,294.8,1,1,0,0,0,41.1,8.6);

	this.instance_4 = new lib.gra_point("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(567.4,302,1,1,0,0,0,2,2);

	this.record_time2 = new lib.DamageNumberMc();
	this.record_time2.name = "record_time2";
	this.record_time2.parent = this;
	this.record_time2.setTransform(605.5,292.6,1.359,1.354,0,0,0,22.1,8.7);

	this.record_time1 = new lib.DamageNumberMc();
	this.record_time1.name = "record_time1";
	this.record_time1.parent = this;
	this.record_time1.setTransform(531.5,292.6,1.359,1.354,0,0,0,22.1,8.7);

	this.instance_5 = new lib.gra_point("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(567.4,262,1,1,0,0,0,2,2);

	this.time2 = new lib.DamageNumberMc();
	this.time2.name = "time2";
	this.time2.parent = this;
	this.time2.setTransform(605.5,252.6,1.359,1.354,0,0,0,22.1,8.7);

	this.time1 = new lib.DamageNumberMc();
	this.time1.name = "time1";
	this.time1.parent = this;
	this.time1.setTransform(531.5,252.6,1.359,1.354,0,0,0,22.1,8.7);

	this.instance_6 = new lib.PushRetryMc();
	this.instance_6.parent = this;
	this.instance_6.setTransform(237.1,444.1,1,1,0,0,0,103,13.3);

	this.instance_7 = new lib.gra_moji_clear("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(238,48.1,1,1,0,0,0,101,21.9);

	this.newrecord_mc = new lib.NewRecordMc();
	this.newrecord_mc.name = "newrecord_mc";
	this.newrecord_mc.parent = this;
	this.newrecord_mc.setTransform(410.2,296,1,1,0,0,0,60,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.time1,p:{x:531.5}},{t:this.time2,p:{x:605.5}},{t:this.instance_5,p:{x:567.4}},{t:this.record_time1,p:{x:531.5}},{t:this.record_time2,p:{x:605.5}},{t:this.instance_4,p:{x:567.4}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},48).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.time1,p:{x:201.5}},{t:this.time2,p:{x:275.5}},{t:this.instance_5,p:{x:237.4}},{t:this.record_time1,p:{x:201.5}},{t:this.record_time2,p:{x:275.5}},{t:this.instance_4,p:{x:237.4}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.newrecord_mc}]},1).wait(1));

	// debug
	this.whiteout_mc = new lib.WhiteOutMc();
	this.whiteout_mc.name = "whiteout_mc";
	this.whiteout_mc.parent = this;
	this.whiteout_mc.setTransform(240,400,1,1,0,0,0,240,400);
	this.whiteout_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.whiteout_mc).wait(1).to({_off:false},0).wait(49));

	// レイヤー_3
	this.instance_8 = new lib.gra_whiteout("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(240,400,1,1,0,0,0,240,400);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},7).to({_off:true},1).wait(42));

	// レイヤー_1
	this.instance_9 = new lib.ending("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(238,242.5,1.495,1.495,0,0,0,239.9,399.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({regX:240,regY:399.8,scaleX:0.87,scaleY:0.87,x:238.1},10,cjs.Ease.quintIn).to({regX:239.9,regY:399.9,scaleX:1.02,scaleY:1.02,x:238},2).to({startPosition:0},2).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,911.2,800);


// stage content:
(lib.focusReimu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		exe_root_1(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// record
	this.record_mc = new lib.RecordMc();
	this.record_mc.name = "record_mc";
	this.record_mc.parent = this;
	this.record_mc.setTransform(353.2,-34.8,1,1,0,0,0,124,12.4);

	this.timeline.addTween(cjs.Tween.get(this.record_mc).wait(1).to({y:15.2},0).to({_off:true},1).wait(1));

	// button
	this.btn_sound_mc = new lib.sound_on();
	this.btn_sound_mc.name = "btn_sound_mc";
	this.btn_sound_mc.parent = this;
	this.btn_sound_mc.setTransform(14.5,13.1,0.595,0.594,0,0,0,15.1,13.2);

	this.timeline.addTween(cjs.Tween.get(this.btn_sound_mc).to({_off:true},2).wait(1));

	// twitterbutton
	this.btn_tweet_mc = new lib.BtnTweetMc();
	this.btn_tweet_mc.name = "btn_tweet_mc";
	this.btn_tweet_mc.parent = this;
	this.btn_tweet_mc.setTransform(540,266.1,1.111,1.111,0,0,0,22.5,22.6);

	this.timeline.addTween(cjs.Tween.get(this.btn_tweet_mc).wait(1).to({regX:22.6,scaleX:1.01,scaleY:1.01,x:397.8,y:258.8},0).wait(2));

	// touch
	this.btn_display_mc = new lib.BtnDisplayMc();
	this.btn_display_mc.name = "btn_display_mc";
	this.btn_display_mc.parent = this;
	this.btn_display_mc.setTransform(750,400,1,1,0,0,0,240,400);

	this.timeline.addTween(cjs.Tween.get(this.btn_display_mc).wait(2).to({x:240},0).wait(1));

	// ending
	this.ending_mc = new lib.EndingMc();
	this.ending_mc.name = "ending_mc";
	this.ending_mc.parent = this;
	this.ending_mc.setTransform(240,400,1,1,0,0,0,240,400);
	this.ending_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ending_mc).wait(2).to({_off:false},0).wait(1));

	// gameover
	this.gameover_mc = new lib.GameoverMc();
	this.gameover_mc.name = "gameover_mc";
	this.gameover_mc.parent = this;
	this.gameover_mc.setTransform(178.4,21.9,1,1,0,0,0,178.4,21.9);
	this.gameover_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gameover_mc).wait(2).to({_off:false},0).wait(1));

	// alert
	this.start_mc = new lib.StartMc();
	this.start_mc.name = "start_mc";
	this.start_mc.parent = this;
	this.start_mc.setTransform(64.9,81.5,1,1,0,0,0,64.9,81.5);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(2).to({_off:false},0).wait(1));

	// button
	this.btn_start_mc = new lib.BtnStartMc();
	this.btn_start_mc.name = "btn_start_mc";
	this.btn_start_mc.parent = this;
	this.btn_start_mc.setTransform(139.6,-201.8,1,1,0,0,0,139.6,13.2);

	this.timeline.addTween(cjs.Tween.get(this.btn_start_mc).to({_off:true},2).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTBTIAAgmIAnAAIAAAmgAgPAgIAAgJIgBgQIgEg+IgCgbIAtAAIgCAbIgEA+IgBAQIABAJg");
	this.shape.setTransform(394.9,598.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguA6QAigCAVgIQATgHAIgOQADgGAAgHQAAgRgZAAQgQAAgZADQgaAEgPAGIgIgkIAagDQAngGAcgBQAnAAANAXQAIAMAAAOQAAASgMARQgLAQgTAKQgYANgrAFQgFgSgJgQgAg1g6IAKghQAjALAuAAIAPgBIgFAiQg4gBgtgKg");
	this.shape_1.setTransform(374.8,598.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5BDQgLgJAAgPQAAgQAMgJQANgKAVABIAKAAIgChEIgBgQIAfABQgCAKAAAXQAdAAATgFIACAcIgOACQgQABgTAAIACAdQAYAIAXAQIAFAEIgTAcQgOgPgTgLQAAAJgCAFQgIASgfAAQgVAAgMgJgAglArQAAAGANABQANAAAAgLIgBgEIgJgBQgQAAAAAJg");
	this.shape_2.setTransform(354.7,600.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7BIQgIgIgEgMQgDgLAAgVIABgsIABgvIgBgPIAnAAQgCAKgBAgIgCA5QAAAYAFAHQAGAKARAAQAPAAALgJQAMgJAFgQQAGgPACgUQATAOAQAGQgLAogPAQQgXAagmAAQgfAAgQgPg");
	this.shape_3.setTransform(335.9,598.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhABQQgOgKAAgRQAAgXAagKQAOgGAVAAIAGAAIAAgLIgPAAIghgBIgPAAIAAgdQAQADAhAAIAOAAIAAgDIgBgGIAAgFIgIABIglgCIgPAAIgGAAIgDAAIAAgfQASAEAoAAIALAAIgBgWIAiAAIgCAVQApgDAQgEIABAfIgRACQgUACgVAAIAAAOQAggDAUgEIABAfIgNABIgnACIAAASQAPADANAHIAbARIAHAEIgTAgIgNgMQgPgNgOgFQAAANgFAIQgKAPggAAQgZAAgNgJgAgqA1QAAAHAQAAQAQAAAAgMIgBgDQgFgCgHAAQgTAAAAAKg");
	this.shape_4.setTransform(315.1,598.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhCA9QgPgVgDgtQgCgXgBgjIAAgOIAmAAQgCAOAAAWQAAAhAEAWQAEAWAHAAQADAAADgHQAHgSADgQQALAMAQAMQgGAWgIARQgLAUgTAAQgRAAgMgRgAAMg4IAegOQAmAuAIBFIgjANQgEhDglgvg");
	this.shape_5.setTransform(295.3,599);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbAwQgGgagIgdQgTAGgIADIgIgcIAcgIQgGgUgFgKIAfgIIADAOIADAJIACAHIAWgFQAAgVgCgHIAfAAIgBAYIAGAAQATAAALALQALAKAAASQAAAUgQALQgOAKgTAAQgKAAgNgDQgBgQgEgOQAPAFAKAAQAVAAAAgNQAAgMgQAAQgMAAgQAEIgOAEIAEARIAMAyIAFASIgfAHIgFgcg");
	this.shape_6.setTransform(274.6,600.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgwBTQAAgRgEgRQAeAJAXAAQAUAAAMgGQAMgFAAgKQAAgPgcAAQgWAAgSAJQgJAFgEAGIgigLQAGgIAIgTQAIgTAEgNIgIAAIgTgBIgHAAIgCAAIAAghQANADAeABQAFgVAAgKIAkADIgGAbQA4gCASgGIABAiIgOABQgmAEgfABQgFAQgGANQATgIAXAAQAcAAAQAJQAQAMAAAWQAAAYgVAPQgWAOgkAAQgZAAgZgHg");
	this.shape_7.setTransform(254.7,598.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7BIQgIgIgEgMQgDgLAAgVIABgsIABgvIgBgPIAnAAQgCAKgBAgIgCA5QAAAYAFAHQAGAKARAAQAPAAALgJQAMgJAFgQQAGgPACgUQATAOAQAGQgLAogPAQQgXAagmAAQgfAAgQgPg");
	this.shape_8.setTransform(235.9,598.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhfBMQAJgMALgaQALgaAGgXQgXADgIACIgDghIACAAQANAAAZgDQAFgeAAgJIAAgEIAkAEIgBAEIgBAEIgBAHIgEAWIAJgBQARAAAKAIQAOAMAAAeQAAAxgMAWQgEAIgJAEQgGADgJAAQgNAAgSgFIAAgMQAAgKgDgOQASAHAKAAQAGAAADgJQAFgQAAgcQAAgLgEgEQgDgDgJAAIgIAAQgLAxgYAzIgDAIgAA0AAQgHgVgJgLIAegOQAUAcAKAqIghAQQgDgUgIgUgAAUhIIATgJQAMANAIAQIgTAJQgJgRgLgMgAAwhUIASgJQAKAMAKAQIgTAJQgJgRgKgLg");
	this.shape_9.setTransform(215,598.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhfBGQAHgPADgTQAEgaAAhEIgBggIAXABIAaAAIASAAIgBAQIAACMQALgKAFgLQADgMAAgSIAAgBIgNABIAAgQIAAgnIAAgPIAPAAIACAAQgGgOgIgQIAbgLQAKARAGARIgSAHIAWAAQAJgVAEgUIAfAJIgEAJIgKAXIABAAIAQAAIAAAPIAAAnIAAAQIgRgBIgDAAIAAAuQAAABAAAAQAAABABAAQAAABABAAQABAAABAAQAAAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIABgVQALAHAKADQgBASgBAIQgCAHgDAEQgGAGgUAAQgOAAgFgFQgGgEAAgLIAAg6IgGAAQgBARgBAJQgDATgIAMQgIANgNAKQgGgKgJgJQgBAHgFAEQgFAFgRAAIgJAAQgBgQgFgMQgEARgHAPQgLgPgNgLgAg8A+IAMABQAGAAAAgEIAAgdIgOAAQgBATgDANgAg3AEIANAAIAAgTIgMAAgAARgMIAoAAIAAgOIgoAAgAg2gqIAMAAIAAgTIgMAAg");
	this.shape_10.setTransform(194.8,598.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA0BRQghgCgRgJQgjgQAAgnQAAgYARgUQAGgIAMgJIhEAHIgRACIgCgkIAIAAIAigBQApgEBBgCIAWgCIABAlIgFgBQgYABgWAOQgPAIgIAMQgJAMAAAMQAAAQARAIQAPAIAXAAIAGgBIgEAmg");
	this.shape_11.setTransform(174.7,599.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7BIQgIgIgEgMQgDgLAAgVIABgsIABgvIgBgPIAnAAQgCAKgBAgIgCA5QAAAYAFAHQAGAKARAAQAPAAALgJQAMgJAFgQQAGgPACgUQATAOAQAGQgLAogPAQQgXAagmAAQgfAAgQgPg");
	this.shape_12.setTransform(155.9,598.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgkBeQgBgLgFgKQALACANAAQAGAAAAgEIAAgDIg2AAIgaABIAAgVIAaABIA2AAIAAgEIgsAAIgXAAIAAgSIAXABIAsAAIAAgFIg6AAQgCgIgEgHIAUAAIAAgFIgQAAIgUABIAAgRIAUAAIAQAAIAAgEIgRAAIgOAAIABgNIAAgVIgBgNIAOABIARAAIAAgFIgRAAIgSABIAAgSIASABIAQAAIAAgJIAcAAIgBAJIAQAAIAPgBIAAASIgRgBIgOAAIAAAFIAQAAIANgBIAAABQANgFAAgSIAAgFIAOABIAaAAIANgBIAAAMIAAAJQAAAAAAABQAAABABAAQAAAAAAABQABAAABAAIADgBIABgCIAAgLQALAFAKACIgBAPQgBAFgDACQgGAEgRAAQgOAAgFgDQgEgCAAgIIAAgJIgIAAQgBAQgQAJIAtAAIANAAIAMANQgNAMgMAIQAPADAQAAQgGAMgCALQgRgDgLgEIANANQgRACglABIAAAFIAnAAIAXgBIAAASIgXAAIgnAAIAAAEIAxAAIAagBIAAAVIgagBIgxAAIAAAFQAAAMgEAEQgFAFgOAAgAgeAJIADAAIAEAAQA5AAARgEIgPgFQgMAEgRADIgGgMIAAAIIgRAAIgOAAgAABgKIAPgCIgLgKIAUgGIgHAAIgRABIAAgSIAHAAQgEgJgFgGIAAALIAAAQIAAAQIgNAAIgQAAIAAAEIAOAAIARAAgAAogUQAHgDAGgFIgaAAIANAIgAgggeIAIAAIAAgFIgIAAgAg/geIAIAAIAAgFIgIAAgAgggtIAIAAIAAgGIgIAAgAg/gtIAIAAIAAgGIgIAAg");
	this.shape_13.setTransform(135.1,598.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoBEQAfgJAVgUQgMgTgHgUIgKAMQgJgNgLgKQAVgWALgfQAGgTAAgMIAhAFIgDAHIgEASIArAAIAWgBIAAAfIgQgBQgEAngUAiQASAPAZALQgJAOgGASQgagMgXgWQgXAYghALQgGgQgJgMgAAMgfQAGAYANAVQAMgWADgcIggAAgAhfAkQAKAAAOgEIAAhQIgHAAIgNABIAAgeIATABIAiAAIATgBIAAAeIgNgBIgJAAIAABIIAYgIIABAcIg/AUIgJAEg");
	this.shape_14.setTransform(115.1,598.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiBSQgQgJAAgTQAAgOAKgLQALgNARgJIAPgHQgDgEgEAAQgRAAgVASQgMALgIAJIgZgYQALgJAKgMIAQgVIADgHIgGAAIgSAAIgGAAIgEAAIABgfQAMACAeAAIAFAAQAFgMABgKIAkADIgEAJIgFAKIANgBQAhgCARgFIACAgIgSACIg7ADIgJAPQAMgGAMAAQAZAAAFATIAPgEIAMgFQANgDADgCIAMAeQgTADggALIABAOIAAARIggABIAAgVIgBABIgOAIQgEAFAAAFQAAAGAFADQAHACAOAAQAlAAAbgKIABAkIgSACQgXADgYAAQggAAgPgJg");
	this.shape_15.setTransform(94.9,598.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhfBDQAGgMADgRQAFgZAAhIQAAgUgCgNIAWABIAdAAIARgBIgBARIAACKQAAAPgGAFQgGAGgRAAIgJAAQgBgPgGgNQgDASgIAOQgKgPgNgLgAg8A8IAMABQAGgBAAgEIAAgdIgOAAQgCATgCAOgAg3AAIANAAIAAgSIgNAAgAg2gtIAMAAIAAgSIgMAAgAgKBaQACgKAAgOIAAiOIgBgPIASABIA7AAIAUgBIgBATQAAAPgBAIQgCAHgEAEQgHAHgTgBIgRAAQgBgMgEgKIARABQAFAAACgBQABgCAAgHIglAAIAAAlIAtAAIAOgBIAMAQIgDALQgGAWgKAWQAIAHAQAIQgJAOgHARQgPgKgLgLQgHAJgOAMQgGgMgHgJIABAVgAAUA+QAKgIAHgHQgLgRgGgSgAA0AXQAFgJADgOIgTAAQAFALAGAMg");
	this.shape_16.setTransform(74.9,599);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgyA9QAdgEANgIQAJgGAEgKQgKAJgPAAQgSAAgLgKQgLgKAAgQQAAgQANgLQANgLAUAAQAKAAAFADIAAgHIAAgEQhCACgXADIgBgiIANAAIBMgCQAAgOAAgHIAiAAIgBAUQAtAAALgBIABAhIgkgBIgUAAIAAAZIAAAFQAIANAAATQAAAjghAUQgNAJgbAIQgHgTgMgNgAgWgDQgEADAAAEQAAAFADADQAEADAGAAQAGAAAFgDQADgEAAgFQAAgEgDgCQgDgDgGAAQgHAAgEADg");
	this.shape_17.setTransform(354.9,538.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhABQQgOgKAAgRQAAgYAagJQAOgGAVABIAGAAIAAgNIgPABIghgBIgPgBIAAgcQAQADAhAAIAOgBIAAgCIgBgGIAAgEIgIAAIglgBIgPgBIgGAAIgDAAIAAgfQASAEAoAAIALAAIgBgWIAiAAIgCAVQApgCAQgFIABAeIgRACQgUADgVABIAAAMQAggBAUgFIABAfIgNABIgnABIAAASQAPAEANAHIAbAQIAHAGIgTAfIgNgMQgPgMgOgGQAAANgFAHQgKAQggAAQgZAAgNgJgAgqA1QAAAHAQABQAQgBAAgNIgBgDQgFgBgHAAQgTAAAAAKg");
	this.shape_18.setTransform(335.1,538.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag7BIQgIgIgEgMQgDgLAAgVIABgsIABgvIgBgPIAnAAQgCAKgBAgIgCA5QAAAYAFAHQAGAKARAAQAPAAALgJQAMgJAFgQQAGgPACgUQATAOAQAGQgLAogPAQQgXAagmAAQgfAAgQgPg");
	this.shape_19.setTransform(315.9,538.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjBeQgCgLgFgKQAMACAMAAQAGAAAAgEIAAgDIg3AAIgaABIAAgVIAaABIA3AAIAAgEIgtAAIgWAAIAAgSIAWABIAtAAIAAgFIg5AAQgDgIgEgHIATAAIAAgFIgPAAIgVABIAAgRIAVAAIAPAAIAAgEIgQAAIgOAAIABgNIAAgVIgBgNIAOABIAQAAIAAgFIgQAAIgSABIAAgSIASABIAQAAIgBgJIAcAAIAAAJIAQAAIAPgBIAAASIgRgBIgOAAIAAAFIAQAAIANgBIAAABQANgFAAgSIAAgFIAPABIAZAAIANgBIAAAMIAAAJQAAAAAAABQAAABABAAQAAAAAAABQABAAAAAAIAEgBIABgCIABgLQAJAFALACIgBAPQgCAFgCACQgGAEgRAAQgPAAgEgDQgEgCAAgIIAAgJIgIAAQgCAQgPAJIAtAAIANAAIAMANQgNAMgMAIQAPADAQAAQgGAMgCALQgSgDgKgEIANANQgRACglABIAAAFIAnAAIAWgBIAAASIgWAAIgnAAIAAAEIAxAAIAagBIAAAVIgagBIgxAAIAAAFQAAAMgEAEQgFAFgOAAgAgeAJIADAAIAEAAQA5AAAQgEIgNgFQgNAEgRADIgGgMIAAAIIgRAAIgOAAgAABgKIAPgCIgLgKIAUgGIgHAAIgRABIAAgSIAIAAQgFgJgFgGIAAALIAAAQIAAAQIgNAAIgQAAIAAAEIAOAAIARAAgAAogUQAHgDAGgFIgZAAIAMAIgAgggeIAIAAIAAgFIgIAAgAg/geIAIAAIAAgFIgIAAgAgggtIAIAAIAAgGIgIAAgAg/gtIAIAAIAAgGIgIAAg");
	this.shape_20.setTransform(295.1,538.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoBEQAggJAUgUQgMgTgGgUIgLAMQgJgOgLgKQAVgVALgfQAGgTAAgMIAgAFIgCAHIgEASIAqAAIAYgBIAAAfIgRAAQgDAmgWAiQATAPAZALQgKAOgGASQgZgMgXgWQgXAXghAMQgGgQgJgMgAAMgfQAFAYAOAUQAMgVADgbIggAAgAhfAkQAKgBAOgEIAAhPIgHAAIgOABIAAgeIATAAIAjAAIATAAIAAAeIgNgBIgJAAIAABIIAYgIIABAdIg+ATIgKAEg");
	this.shape_21.setTransform(275.1,538.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgiBSQgQgKAAgSQAAgOAKgMQAKgMATgJIANgHQgCgEgEAAQgRAAgWATQgMAKgHAKIgZgaQAKgIALgLIAPgXIAFgFIgHAAIgSgBIgHAAIgDAAIABgfQAMACAeAAIAFAAQAFgMABgKIAkACIgEAKIgFAJIANgBQAhgBARgFIABAgIgSACIg6AEIgJAOQANgGALAAQAYAAAHAUIANgFIANgEQANgFADgBIAMAfQgTACggALIAAAPIABARIggABIABgWIgCABIgOAIQgEAFAAAFQAAAHAFACQAHADAOAAQAkgBAcgJIACAkIgSABQgZADgXAAQggAAgPgJg");
	this.shape_22.setTransform(254.9,538.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhYBCQAigNAMgYQAIgNABgRIgFAAIgOABIAAgLQgLALgNAKQgKgPgLgMQAigXARgiQAFgLACgIIAgAMIgEALQgKAUgQAVIBKAAQgPgTgLgYIgDgJIAdgMQACAIAGALQATAgAiAVQgMAOgJAQIgRgNQAAA8gIARQgEAJgIADQgJADgSABIgOAAQgBgQgIgRIAUACQAIAAAEgCQACgBABgHQAEgNAAgkIgeAAQgCAcgOAWQgLATgUAPIgUAKQgJgOgLgNg");
	this.shape_23.setTransform(235.1,538.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALBeIABgXIAAiQIgBgPIARABIAlAAIARgBIANATIgHARIgPAmQALAOAFANQAEAMAAANQAAAVgPAHQgIADgOAAIgHgBQgBgSgGgLIAJAAQALAAAAgIQAAgKgFgLQgEgKgKgMQALgXAFgYIgRAAIAACBIABAYgAhUBeIABgUIAAgxIgBgPIAQAAIA4AAIANAAIAAAMIAAA5IABAOIgeAAIAAgKIgaAAIAAALgAg2A4IAaAAIAAgSIgaAAgAgGABIhDAAIgVABIAAgeIAUABQgDgNgDgJIgLABIAAgdIAUAAIAQAAIAAgDIgBgNIAhAAIgBANIAAADIAOAAIAQAAIAAAdIgIgBIgGAWIAPgBIAAAegAgtgbIAJAAIAFgWIgTAAIAFAWg");
	this.shape_24.setTransform(215,538.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFAbQgbAhguAWQgIgSgNgOQAlgOAbgaQAagZANghIgzABQgVAAgKACIgBgkIAUACIALgBIBEgBQALAAAFgCIASASQgEAEgDAIQgPAigPATQASANALAKQALAJAYAWIgcAeQgZggghgZg");
	this.shape_25.setTransform(195,539.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhVA8QAmgUAOgcQAGgNAEgVIgZAAQgQAAgLABIAAgiQALACAQAAIAcAAIABgaIgBgKIAlABIgDAYIAAALIAsAAQAHgBAGgCIAPAOQgCAFAAAKQgDBEgFAUQgFAOgIAGQgJAFgQAAIgagBQgBgTgGgRQAPAEALABQAHgBADgEQACgDACgNQAEgZAAgeIgmAAIgDAUQgHAdgOAVQgQAWgeAUQgLgRgPgNg");
	this.shape_26.setTransform(174.5,538.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAwASIhfAAIgpABIAAglQAMACAdAAIBfAAQAYAAARgCIAAAlIgpgBg");
	this.shape_27.setTransform(154.9,538.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALBKIABgWIAAgEIAAgtQgEAHgLANQgUAVggARQgIgPgMgLQAZgLAQgOQARgNAJgPIgeAAIgaABIAAgdIAaABIAyAAIAAgKIgCgSIAhAAIgBARIAAABIAAAKIAMAAIAWgBIAAAdIgWgBIgMAAIABBBIABAbg");
	this.shape_28.setTransform(134.5,540.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgxBCQgFgGgKgKQAqgOAYgZQAYgXAKgjIhSAAIgiABIAAgkQAKABAZABIBdAAQAJgBAGgCIASARQgDAEgCAIQgMAzgbAgQgbAggxAXQgGgLgEgHg");
	this.shape_29.setTransform(115.1,539.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAsBRQgggDgSgIQgjgRAAgmQAAgXARgVQAGgIANgJIgJABIgxAEIgcAEIgCglIAHAAIAjgBIBVgFIAUAAIAJgBIAJAAIAEgBIACAkIgFAAQgYAAgWAOQgPAKgJALQgHALAAANQAAARAQAHQAGAEALACQALABAKAAIAGAAIgFAmgAAcgUIAUgIQALAOAIAOIgTAJQgIgQgMgNgAA4gfIASgIQALAMAJAQIgTAJQgJgTgKgKg");
	this.shape_30.setTransform(348.2,509.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhGA+QAhgMAMgRQAIgKACgQIgnAAIggABIAAggQAKACAWAAIArAAIAAgRIAAgGQgSACgjACQgCgPgIgQIANABQAUAAAZgDQAYgDASgFQANgDAMgGIAWAdIgLADQgRAGgWAEIgBAbIAhAAQATAAANgCIAAAgIgggBIgjAAQgEAagJARQgLASgWAOQgHAFgMAFQgKgSgPgMg");
	this.shape_31.setTransform(327.7,508.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgqArQAegLARgQQARgQAKgYQAIgXAAgUIAhAIIgDAMQgIApgRAYQgQAXgaARIgXAOQgIgPgOgOgAhIg2IAdgIQAMAVAIAdIgfAKQgHgcgLgYgAgbg/IAbgIQANAaAHAXIgdAKQgGgYgMgbg");
	this.shape_32.setTransform(307.4,510.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag9BAQArgPAYgaQgPgNgVgLIAVgZQAUALAQAMQAKgRAHgTIg3AAQgQAcgdAZQgNgOgQgIQAhgZARggQAHgOAEgOIAjAHIgIASIA1gBQAIAAAFgDIARASQgCADgCAFQgQAwgVAdQgUAagcATQgOAJgUAJQgKgQgOgOg");
	this.shape_33.setTransform(287.2,508.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgxA+QACgNAAgRIAAg9QAAgSgCgMIAoAAIAAAQQANgSAaAAQAJAAALACIgKAkQgMgEgIAAQgPAAgIALQgFAHgBAKIAAAfQAAARACANg");
	this.shape_34.setTransform(272.5,510.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvAwQgSgSAAgeQAAgdASgSQARgSAeAAQAeAAASASQASASAAAdQAAAdgTASQgSATgdAAQgeAAgRgSgAgTgZQgIAJAAAQQAAAQAIAKQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgKgNAAQgMAAgHAKg");
	this.shape_35.setTransform(259.4,510.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag6A+QApgPAZgZQAWgWALgiIg0AAQgSAegbAUQgNgPgQgIQAjgYATglQAGgOACgKIAlAHIgCAEIgCAEIgCAEIgEAJIAygBQAKAAAFgCIARAQQgDAFgDAJQgPAwgaAfQgbAdguAWQgJgRgPgOg");
	this.shape_36.setTransform(241.9,508.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgqArQAegLAQgQQASgQAJgYQAJgXAAgUIAhAIIgDAMQgJApgQAYQgQAXgaARIgXAOQgIgPgOgOgAhIg2IAegIQALAVAIAdIgfAKQgHgcgLgYgAgcg/IAdgIQANAaAGAXIgeAKQgFgYgNgbg");
	this.shape_37.setTransform(222,510.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgqA2QAZgFAOgIQAYgNAFgaQACgMAAgdIAAgUIgBgcIAnAAIgBAbIAAAYQAAAngFASQgJAfggAUQgQAIgZAIQgGgSgOgQgAhBAHIABgcIAAgnIgBgbIAnAAIgBAbIAAAnIABAcg");
	this.shape_38.setTransform(202.2,509.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag6A+QApgPAZgZQAWgWALgiIg0AAQgSAegcAUQgMgPgQgIQAjgYASglQAIgOABgKIAlAHIgCAEIgCAEIgCAEIgEAJIAzgBQAIAAAGgCIARAQQgDAFgDAJQgPAwgaAfQgaAdgvAWQgJgRgPgOg");
	this.shape_39.setTransform(181.9,508.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiBSQgQgJAAgTQAAgOAKgLQAKgNATgJIANgHQgCgEgEAAQgRAAgWASQgLALgIAJIgZgYQAKgJALgMIAPgVIAFgHIgHAAIgSAAIgHAAIgDAAIABgfQAMACAeAAIAFAAQAFgMABgKIAkADIgEAJIgFAKIANgBQAhgCARgFIABAgIgSACIg6ADIgJAPQANgGALAAQAYAAAHATIANgEIANgFQANgDADgCIAMAeQgTADggALIAAAOIABARIggABIABgVIgCABIgOAIQgEAFAAAFQAAAGAFADQAHACAOAAQAkAAAcgKIACAkIgSACQgZADgXAAQggAAgPgJg");
	this.shape_40.setTransform(162.2,508.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA4BcIAAgHIhvAAIAAAHIgeAAQABgNAAgRIAAhWIgBgbIAXABIAmAAIAFgMIgtAAIgcABIAAgeIAcABICBAAQAOAAAOgBIAAAeIgcgBIgyAAIgGAMIA3AAIAXgBIgBAbIAABXIABAdgAAqA5IAOAAIAAhRIgOAAgAgNA5IAbAAIAAgMIgbAAgAg3A5IAOAAIAAhRIgOAAgAgNAVIAbAAIAAgKIgbAAgAgNgNIAbAAIAAgLIgbAAg");
	this.shape_41.setTransform(142.2,509);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA4BcIAAgHIhwAAIAAAHIgfAAQACgNAAgQIAAhZIgBgYIAeAAIAAARIAABaIBxAAIAAhbIAAgQIAeAAQgBAMAAANIAABYIABAdgAApAyIhQAAIgKABIABgQIAAhHIgBgQIAQABIATAAIAAgLIgyAAIgcABIAAgeQAOABAOAAICAAAQAOAAAPgBIAAAeIgdgBIgxAAIAAALIATAAIAQgBIgBAQIAABHIABAQgAANAZIAMAAIAAgOIgMAAgAgXAZIALAAIAAgOIgLAAgAANgNIAMAAIAAgMIgMAAgAgXgNIALAAIAAgMIgLAAg");
	this.shape_42.setTransform(122.2,509);

	this.damage_number_mc37 = new lib.DamageNumberMc();
	this.damage_number_mc37.name = "damage_number_mc37";
	this.damage_number_mc37.parent = this;
	this.damage_number_mc37.setTransform(687.1,249.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc36 = new lib.DamageNumberMc();
	this.damage_number_mc36.name = "damage_number_mc36";
	this.damage_number_mc36.parent = this;
	this.damage_number_mc36.setTransform(687.1,229.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc27 = new lib.DamageNumberMc();
	this.damage_number_mc27.name = "damage_number_mc27";
	this.damage_number_mc27.parent = this;
	this.damage_number_mc27.setTransform(627.1,249.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc26 = new lib.DamageNumberMc();
	this.damage_number_mc26.name = "damage_number_mc26";
	this.damage_number_mc26.parent = this;
	this.damage_number_mc26.setTransform(627.1,229.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc17 = new lib.DamageNumberMc();
	this.damage_number_mc17.name = "damage_number_mc17";
	this.damage_number_mc17.parent = this;
	this.damage_number_mc17.setTransform(567.1,249.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc16 = new lib.DamageNumberMc();
	this.damage_number_mc16.name = "damage_number_mc16";
	this.damage_number_mc16.parent = this;
	this.damage_number_mc16.setTransform(567.1,229.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mcb5 = new lib.DamageNumberMc();
	this.damage_number_mcb5.name = "damage_number_mcb5";
	this.damage_number_mcb5.parent = this;
	this.damage_number_mcb5.setTransform(388.1,-19.3,1,1,0,0,0,22.1,8.7);

	this.damage_number_mcb4 = new lib.DamageNumberMc();
	this.damage_number_mcb4.name = "damage_number_mcb4";
	this.damage_number_mcb4.parent = this;
	this.damage_number_mcb4.setTransform(304.1,-19.7,1,1,0,0,0,22.1,8.7);

	this.damage_number_mcb3 = new lib.DamageNumberMc();
	this.damage_number_mcb3.name = "damage_number_mcb3";
	this.damage_number_mcb3.parent = this;
	this.damage_number_mcb3.setTransform(219.9,-19.6,1,1,0,0,0,22.1,8.7);

	this.damage_number_mcb2 = new lib.DamageNumberMc();
	this.damage_number_mcb2.name = "damage_number_mcb2";
	this.damage_number_mcb2.parent = this;
	this.damage_number_mcb2.setTransform(132.8,-19.5,1,1,0,0,0,22.1,8.7);

	this.damage_number_mcb1 = new lib.DamageNumberMc();
	this.damage_number_mcb1.name = "damage_number_mcb1";
	this.damage_number_mcb1.parent = this;
	this.damage_number_mcb1.setTransform(54.9,-19.4,1,1,0,0,0,22.1,8.7);

	this.number_mc2 = new lib.NumberMc2();
	this.number_mc2.name = "number_mc2";
	this.number_mc2.parent = this;
	this.number_mc2.setTransform(434.8,63.8,1,1,0,0,0,7.4,16.8);

	this.damage_number_mc35 = new lib.DamageNumberMc();
	this.damage_number_mc35.name = "damage_number_mc35";
	this.damage_number_mc35.parent = this;
	this.damage_number_mc35.setTransform(687.1,209.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc34 = new lib.DamageNumberMc();
	this.damage_number_mc34.name = "damage_number_mc34";
	this.damage_number_mc34.parent = this;
	this.damage_number_mc34.setTransform(687.1,189.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc33 = new lib.DamageNumberMc();
	this.damage_number_mc33.name = "damage_number_mc33";
	this.damage_number_mc33.parent = this;
	this.damage_number_mc33.setTransform(687.1,169.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc32 = new lib.DamageNumberMc();
	this.damage_number_mc32.name = "damage_number_mc32";
	this.damage_number_mc32.parent = this;
	this.damage_number_mc32.setTransform(687.1,149.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc31 = new lib.DamageNumberMc();
	this.damage_number_mc31.name = "damage_number_mc31";
	this.damage_number_mc31.parent = this;
	this.damage_number_mc31.setTransform(687.1,129.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc25 = new lib.DamageNumberMc();
	this.damage_number_mc25.name = "damage_number_mc25";
	this.damage_number_mc25.parent = this;
	this.damage_number_mc25.setTransform(627.1,209.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc24 = new lib.DamageNumberMc();
	this.damage_number_mc24.name = "damage_number_mc24";
	this.damage_number_mc24.parent = this;
	this.damage_number_mc24.setTransform(627.1,189.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc23 = new lib.DamageNumberMc();
	this.damage_number_mc23.name = "damage_number_mc23";
	this.damage_number_mc23.parent = this;
	this.damage_number_mc23.setTransform(627.1,169.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc22 = new lib.DamageNumberMc();
	this.damage_number_mc22.name = "damage_number_mc22";
	this.damage_number_mc22.parent = this;
	this.damage_number_mc22.setTransform(627.1,149.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc21 = new lib.DamageNumberMc();
	this.damage_number_mc21.name = "damage_number_mc21";
	this.damage_number_mc21.parent = this;
	this.damage_number_mc21.setTransform(627.1,129.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc15 = new lib.DamageNumberMc();
	this.damage_number_mc15.name = "damage_number_mc15";
	this.damage_number_mc15.parent = this;
	this.damage_number_mc15.setTransform(567.1,209.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc14 = new lib.DamageNumberMc();
	this.damage_number_mc14.name = "damage_number_mc14";
	this.damage_number_mc14.parent = this;
	this.damage_number_mc14.setTransform(567.1,189.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc13 = new lib.DamageNumberMc();
	this.damage_number_mc13.name = "damage_number_mc13";
	this.damage_number_mc13.parent = this;
	this.damage_number_mc13.setTransform(567.1,169.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc12 = new lib.DamageNumberMc();
	this.damage_number_mc12.name = "damage_number_mc12";
	this.damage_number_mc12.parent = this;
	this.damage_number_mc12.setTransform(567.1,149.1,1,1,0,0,0,22.1,8.7);

	this.damage_number_mc11 = new lib.DamageNumberMc();
	this.damage_number_mc11.name = "damage_number_mc11";
	this.damage_number_mc11.parent = this;
	this.damage_number_mc11.setTransform(567.1,129.1,1,1,0,0,0,22.1,8.7);

	this.hp_bar_mc5 = new lib.HpBarMc();
	this.hp_bar_mc5.name = "hp_bar_mc5";
	this.hp_bar_mc5.parent = this;
	this.hp_bar_mc5.setTransform(407.2,34.1,0.8,0.8,0,0,0,50.1,2.6);

	this.hp_bar_mc4 = new lib.HpBarMc();
	this.hp_bar_mc4.name = "hp_bar_mc4";
	this.hp_bar_mc4.parent = this;
	this.hp_bar_mc4.setTransform(322.7,34.1,0.8,0.8,0,0,0,50.1,2.6);

	this.hp_bar_mc3 = new lib.HpBarMc();
	this.hp_bar_mc3.name = "hp_bar_mc3";
	this.hp_bar_mc3.parent = this;
	this.hp_bar_mc3.setTransform(237.9,34.1,0.8,0.8,0,0,0,50.1,2.6);

	this.hp_bar_mc2 = new lib.HpBarMc();
	this.hp_bar_mc2.name = "hp_bar_mc2";
	this.hp_bar_mc2.parent = this;
	this.hp_bar_mc2.setTransform(153.4,34.1,0.8,0.8,0,0,0,50.1,2.6);

	this.hp_bar_mc1 = new lib.HpBarMc();
	this.hp_bar_mc1.name = "hp_bar_mc1";
	this.hp_bar_mc1.parent = this;
	this.hp_bar_mc1.setTransform(69.7,34.1,0.8,0.8,0,0,0,50.1,2.6);

	this.hp_number_mc5 = new lib.NumberMc();
	this.hp_number_mc5.name = "hp_number_mc5";
	this.hp_number_mc5.parent = this;
	this.hp_number_mc5.setTransform(438.5,22.6,0.51,0.51,0,0,0,7.5,16.9);

	this.hp_number_mc4 = new lib.NumberMc();
	this.hp_number_mc4.name = "hp_number_mc4";
	this.hp_number_mc4.parent = this;
	this.hp_number_mc4.setTransform(352.8,22.7,0.51,0.51,0,0,0,7.5,17.1);

	this.hp_number_mc3 = new lib.NumberMc();
	this.hp_number_mc3.name = "hp_number_mc3";
	this.hp_number_mc3.parent = this;
	this.hp_number_mc3.setTransform(269.1,22.6,0.51,0.51,0,0,0,7.5,16.9);

	this.hp_number_mc2 = new lib.NumberMc();
	this.hp_number_mc2.name = "hp_number_mc2";
	this.hp_number_mc2.parent = this;
	this.hp_number_mc2.setTransform(184.3,22.6,0.51,0.51,0,0,0,7.5,16.9);

	this.hp_number_mc1 = new lib.NumberMc();
	this.hp_number_mc1.name = "hp_number_mc1";
	this.hp_number_mc1.parent = this;
	this.hp_number_mc1.setTransform(100.3,22.7,0.51,0.51,0,0,0,7.5,17.1);

	this.instance = new lib.gra_icon_heart("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(382.3,21.4,1,1,0,0,0,10,11);

	this.instance_1 = new lib.gra_icon_upper_cloth("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.5,20.3,1,1,0,0,0,15.7,11.2);

	this.instance_2 = new lib.gra_icon_under_cloth("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(129.2,17.3,1,1,0,0,0,13.1,8.8);

	this.instance_3 = new lib.gra_icon_pants("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(297.5,20.6,1,1,0,0,0,15.1,6);

	this.instance_4 = new lib.gra_icon_bura("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(211.3,17.7,1,1,0,0,0,13.7,5.8);

	this.number_mc = new lib.NumberMc();
	this.number_mc.name = "number_mc";
	this.number_mc.parent = this;
	this.number_mc.setTransform(434.8,64.8,1,1,0,0,0,7.4,16.8);

	this.instance_5 = new lib.moji_remaindtime("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(327.1,73.7,0.764,0.76,0,0,0,39.4,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_5},{t:this.number_mc},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.hp_number_mc1},{t:this.hp_number_mc2},{t:this.hp_number_mc3},{t:this.hp_number_mc4},{t:this.hp_number_mc5},{t:this.hp_bar_mc1},{t:this.hp_bar_mc2},{t:this.hp_bar_mc3},{t:this.hp_bar_mc4},{t:this.hp_bar_mc5},{t:this.damage_number_mc11},{t:this.damage_number_mc12},{t:this.damage_number_mc13},{t:this.damage_number_mc14},{t:this.damage_number_mc15},{t:this.damage_number_mc21},{t:this.damage_number_mc22},{t:this.damage_number_mc23},{t:this.damage_number_mc24},{t:this.damage_number_mc25},{t:this.damage_number_mc31},{t:this.damage_number_mc32},{t:this.damage_number_mc33},{t:this.damage_number_mc34},{t:this.damage_number_mc35},{t:this.number_mc2},{t:this.damage_number_mcb1},{t:this.damage_number_mcb2},{t:this.damage_number_mcb3},{t:this.damage_number_mcb4},{t:this.damage_number_mcb5},{t:this.damage_number_mc16},{t:this.damage_number_mc17},{t:this.damage_number_mc26},{t:this.damage_number_mc27},{t:this.damage_number_mc36},{t:this.damage_number_mc37}]},2).wait(1));

	// logo
	this.logo_mc = new lib.gra_logo();
	this.logo_mc.name = "logo_mc";
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(200,124.1,1,1,0,0,0,150,49.1);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).to({_off:true},2).wait(1));

	// bom_effect
	this.bom_effect_mc = new lib.BomEffectMc();
	this.bom_effect_mc.name = "bom_effect_mc";
	this.bom_effect_mc.parent = this;
	this.bom_effect_mc.setTransform(240,325,1,1,0,0,0,240,325);
	this.bom_effect_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bom_effect_mc).wait(2).to({_off:false},0).wait(1));

	// logoback
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.498)").s().p("EglfAyxMAAAhlhMBK/AAAMAAABlhg");
	this.shape_43.setTransform(240,324.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).to({_off:true},2).wait(1));

	// effect
	this.instance_6 = new lib.gra_moji_critical("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(601.9,68.1,1,1,0,0,0,55.2,7.8);

	this.effect_star_mc = new lib.EffectStarMc();
	this.effect_star_mc.name = "effect_star_mc";
	this.effect_star_mc.parent = this;
	this.effect_star_mc.setTransform(153.9,67.3,1,1,0,0,0,125.5,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.effect_star_mc},{t:this.instance_6}]},2).wait(1));

	// hit3
	this.hit_mc22 = new lib.HitMc22();
	this.hit_mc22.name = "hit_mc22";
	this.hit_mc22.parent = this;
	this.hit_mc22.setTransform(238.8,569);

	this.hit_mc21 = new lib.HitMc21();
	this.hit_mc21.name = "hit_mc21";
	this.hit_mc21.parent = this;
	this.hit_mc21.setTransform(275.8,269.2);

	this.hit_mc20 = new lib.HitMc20();
	this.hit_mc20.name = "hit_mc20";
	this.hit_mc20.parent = this;
	this.hit_mc20.setTransform(123.9,280);

	this.hit_mc19 = new lib.HitMc19();
	this.hit_mc19.name = "hit_mc19";
	this.hit_mc19.parent = this;
	this.hit_mc19.setTransform(309.8,192);

	this.hit_mc18 = new lib.HitMc18();
	this.hit_mc18.name = "hit_mc18";
	this.hit_mc18.parent = this;
	this.hit_mc18.setTransform(145.8,211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hit_mc18},{t:this.hit_mc19},{t:this.hit_mc20},{t:this.hit_mc21},{t:this.hit_mc22}]},2).wait(1));

	// hit2
	this.hit_mc17 = new lib.HitMc17();
	this.hit_mc17.name = "hit_mc17";
	this.hit_mc17.parent = this;
	this.hit_mc17.setTransform(368.8,503);

	this.hit_mc16 = new lib.HitMc16();
	this.hit_mc16.name = "hit_mc16";
	this.hit_mc16.parent = this;
	this.hit_mc16.setTransform(338.8,523);

	this.hit_mc15 = new lib.HitMc15();
	this.hit_mc15.name = "hit_mc15";
	this.hit_mc15.parent = this;
	this.hit_mc15.setTransform(307.8,546);

	this.hit_mc14 = new lib.HitMc14();
	this.hit_mc14.name = "hit_mc14";
	this.hit_mc14.parent = this;
	this.hit_mc14.setTransform(199.8,541);

	this.hit_mc13 = new lib.HitMc13();
	this.hit_mc13.name = "hit_mc13";
	this.hit_mc13.parent = this;
	this.hit_mc13.setTransform(175.8,525);

	this.hit_mc12 = new lib.HitMc12();
	this.hit_mc12.name = "hit_mc12";
	this.hit_mc12.parent = this;
	this.hit_mc12.setTransform(146.8,504);

	this.hit_mc11 = new lib.HitMc11();
	this.hit_mc11.name = "hit_mc11";
	this.hit_mc11.parent = this;
	this.hit_mc11.setTransform(230.8,556);

	this.hit_mc10 = new lib.HitMc10();
	this.hit_mc10.name = "hit_mc10";
	this.hit_mc10.parent = this;
	this.hit_mc10.setTransform(307.8,276);

	this.hit_mc9 = new lib.HitMc9();
	this.hit_mc9.name = "hit_mc9";
	this.hit_mc9.parent = this;
	this.hit_mc9.setTransform(217.8,333);

	this.hit_mc8 = new lib.HitMc8();
	this.hit_mc8.name = "hit_mc8";
	this.hit_mc8.parent = this;
	this.hit_mc8.setTransform(143.8,292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hit_mc8},{t:this.hit_mc9},{t:this.hit_mc10},{t:this.hit_mc11},{t:this.hit_mc12},{t:this.hit_mc13},{t:this.hit_mc14},{t:this.hit_mc15},{t:this.hit_mc16},{t:this.hit_mc17}]},2).wait(1));

	// hit
	this.hit_mc7 = new lib.HitMc7();
	this.hit_mc7.name = "hit_mc7";
	this.hit_mc7.parent = this;
	this.hit_mc7.setTransform(86.8,575.9);

	this.hit_mc6 = new lib.HitMc6();
	this.hit_mc6.name = "hit_mc6";
	this.hit_mc6.parent = this;
	this.hit_mc6.setTransform(128.8,486);

	this.hit_mc5 = new lib.HitMc5();
	this.hit_mc5.name = "hit_mc5";
	this.hit_mc5.parent = this;
	this.hit_mc5.setTransform(169.5,494.2);

	this.hit_mc4 = new lib.HitMc4();
	this.hit_mc4.name = "hit_mc4";
	this.hit_mc4.parent = this;
	this.hit_mc4.setTransform(192.8,416,1,1,0,0,0,17,33);

	this.hit_mc3 = new lib.HitMc3();
	this.hit_mc3.name = "hit_mc3";
	this.hit_mc3.parent = this;
	this.hit_mc3.setTransform(182.8,324,1,1,0,0,0,27,59);

	this.hit_mc2 = new lib.HitMc2();
	this.hit_mc2.name = "hit_mc2";
	this.hit_mc2.parent = this;
	this.hit_mc2.setTransform(375.8,372,1,1,0,0,0,36,114);

	this.hit_mc1 = new lib.HitMc1();
	this.hit_mc1.name = "hit_mc1";
	this.hit_mc1.parent = this;
	this.hit_mc1.setTransform(208.4,221.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.hit_mc1},{t:this.hit_mc2},{t:this.hit_mc3},{t:this.hit_mc4},{t:this.hit_mc5},{t:this.hit_mc6},{t:this.hit_mc7}]},2).wait(1));

	// obj
	this.s7 = new lib.StarMc();
	this.s7.name = "s7";
	this.s7.parent = this;
	this.s7.setTransform(233.9,62.7,0.821,0.821,0,0,0,21.9,21.2);

	this.s6 = new lib.StarMc();
	this.s6.name = "s6";
	this.s6.parent = this;
	this.s6.setTransform(202.8,62.7,0.821,0.821,0,0,0,21.8,21.2);

	this.bom_mc = new lib.BomMc();
	this.bom_mc.name = "bom_mc";
	this.bom_mc.parent = this;
	this.bom_mc.setTransform(546,-157);

	this.power_mc = new lib.PowerMc();
	this.power_mc.name = "power_mc";
	this.power_mc.parent = this;
	this.power_mc.setTransform(350,-156.6);

	this.instance_7 = new lib.PointMc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(641,382,1,1,0,0,0,25,25);

	this.s5 = new lib.StarMc();
	this.s5.name = "s5";
	this.s5.parent = this;
	this.s5.setTransform(173.9,62.7,0.821,0.821,0,0,0,21.9,21.2);

	this.s4 = new lib.StarMc();
	this.s4.name = "s4";
	this.s4.parent = this;
	this.s4.setTransform(142.8,62.7,0.821,0.821,0,0,0,21.8,21.2);

	this.s3 = new lib.StarMc();
	this.s3.name = "s3";
	this.s3.parent = this;
	this.s3.setTransform(111.8,62.7,0.821,0.821,0,0,0,21.9,21.2);

	this.s2 = new lib.StarMc();
	this.s2.name = "s2";
	this.s2.parent = this;
	this.s2.setTransform(80.8,62.7,0.821,0.821,0,0,0,21.9,21.2);

	this.s1 = new lib.StarMc();
	this.s1.name = "s1";
	this.s1.parent = this;
	this.s1.setTransform(49.7,62.7,0.821,0.821,0,0,0,21.9,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.s1},{t:this.s2},{t:this.s3},{t:this.s4},{t:this.s5},{t:this.instance_7},{t:this.power_mc},{t:this.bom_mc},{t:this.s6},{t:this.s7}]},2).wait(1));

	// textback
	this.instance_8 = new lib.window1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(38,473,0.833,0.833);

	this.instance_9 = new lib.icon_frame();
	this.instance_9.parent = this;
	this.instance_9.setTransform(366,2);

	this.instance_10 = new lib.icon_frame();
	this.instance_10.parent = this;
	this.instance_10.setTransform(282,2);

	this.instance_11 = new lib.icon_frame();
	this.instance_11.parent = this;
	this.instance_11.setTransform(197,2);

	this.instance_12 = new lib.icon_frame();
	this.instance_12.parent = this;
	this.instance_12.setTransform(113,2);

	this.instance_13 = new lib.icon_frame();
	this.instance_13.parent = this;
	this.instance_13.setTransform(30,2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.498)").s().p("EglfAHCIAAuDMBK/AAAIAAODg");
	this.shape_44.setTransform(240,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.shape_44},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},2).wait(1));

	// focus
	this.focus_mc5 = new lib.FocusMc();
	this.focus_mc5.name = "focus_mc5";
	this.focus_mc5.parent = this;
	this.focus_mc5.setTransform(-153.8,607);

	this.focus_mc4 = new lib.FocusMc();
	this.focus_mc4.name = "focus_mc4";
	this.focus_mc4.parent = this;
	this.focus_mc4.setTransform(-153.8,457);

	this.focus_mc3 = new lib.FocusMc();
	this.focus_mc3.name = "focus_mc3";
	this.focus_mc3.parent = this;
	this.focus_mc3.setTransform(-153.8,307);

	this.focus_mc2 = new lib.FocusMc();
	this.focus_mc2.name = "focus_mc2";
	this.focus_mc2.parent = this;
	this.focus_mc2.setTransform(-153.8,127);

	this.focus_mc1 = new lib.FocusMc();
	this.focus_mc1.name = "focus_mc1";
	this.focus_mc1.parent = this;
	this.focus_mc1.setTransform(-153.8,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.focus_mc1},{t:this.focus_mc2},{t:this.focus_mc3},{t:this.focus_mc4},{t:this.focus_mc5}]},2).wait(1));

	// window
	this.instance_14 = new lib.window("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(241.9,398.9,1,1,0,0,0,211.9,308.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).wait(1));

	// chara
	this.chara_mc = new lib.CharaMc();
	this.chara_mc.name = "chara_mc";
	this.chara_mc.parent = this;
	this.chara_mc.setTransform(240,346.9,0.938,0.938,0,0,0,240,399.9);

	this.timeline.addTween(cjs.Tween.get(this.chara_mc).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214.1,276.9,1016,770.2);
// library properties:
lib.properties = {
	id: '999C2A6DB7E7473BA2C5CBCEE9908A9A',
	width: 480,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/B.png", id:"B"},
		{src:"images/icon_1.png", id:"icon_1"},
		{src:"images/icon_2.png", id:"icon_2"},
		{src:"images/icon_3.png", id:"icon_3"},
		{src:"images/icon_4.png", id:"icon_4"},
		{src:"images/icon_frame.png", id:"icon_frame"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/P.png", id:"P"},
		{src:"images/window1.png", id:"window1"},
		{src:"images/パンツ_.png", id:"パンツ"},
		{src:"images/ブラ_.png", id:"ブラ"},
		{src:"images/右胸_.png", id:"右胸"},
		{src:"images/左胸_.png", id:"左胸"},
		{src:"images/服上_.png", id:"服上"},
		{src:"images/服下_.png", id:"服下"},
		{src:"images/汗_.png", id:"汗"},
		{src:"images/点_.png", id:"点"},
		{src:"images/霊夢0.png", id:"霊夢0"},
		{src:"images/霊夢1.png", id:"霊夢1"},
		{src:"images/霊夢2.png", id:"霊夢2"},
		{src:"images/霊夢3.png", id:"霊夢3"},
		{src:"images/霊夢4.png", id:"霊夢4"},
		{src:"images/霊夢5.png", id:"霊夢5"},
		{src:"images/霊夢アクメ_.png", id:"霊夢アクメ"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['999C2A6DB7E7473BA2C5CBCEE9908A9A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;