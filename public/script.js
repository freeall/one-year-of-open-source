var data = [0,0,1,1,1,1,1,1,2,1,2,1,3,1,2,1,1,1,3,2,2,1,1,1,1,1,3,3,2,1,1,1,1,1,1,1,2,3,1,2,2,4,1,4,2,1,1,2,2,1,1,1,1,4,2,2,2,2,2,2,1,1,1,1,1,1,2,2,1,2,1,1,2,1,1,1,2,2,1,2,2,2,1,1,1,1,1,1,2,2,2,2,1,2,2,1,1,1,1,1,2,2,2,1,2,2,2,2,1,1,1,2,1,2,1,1,1,2,1,2,2,1,2,3,2,1,2,2,2,2,1,3,3,1,1,1,1,1,1,1,1,3,3,3,3,1,2,4,4,2,4,3,2,2,3,1,2,1,3,2,2,1,1,1,1,2,2,4,3,2,4,3,4,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,2,1,2,2,1,1,1,3,1,1,1,1,3,1,1,1,1,1,2,2,2,2,1,1,1,2,2,4,2,1,1,3,1,1,2,3,2,1,2,4,2,3,2,3,2,1,2,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,2,2,2,1,1,1,1,1,2,1,1,1,1,1,2,2,2,1,1,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2];
var img1 = [ , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1, , , , , ,1, ,1, , , ,1, , , ,1,1,1, , , , , , , , , ,1,1,1,1,1, , , , , , , ,1,1, , , , , , ,1, , , , , ,1,1,1,1,1,1,1, , , , , , , , , ,1,1,1,1,1,1,1,1, , , , , ,1, ,1, , , ,1, , , ,1,1,1, , , , , , , , , ,1,1,1,1,1,1,1,1, , ,1, , ,1,1, , ,1, , ,1,1, , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
var imgDude = [ , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , ,1,1, ,1,1, ,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , ,1,1,1,1,1, , ,1,1,1,1,1,1, , , , , ,1,1,1, , , , , ,1,1, , , , ,1,1, ,1,1,1,1,1, , ,1,1,1,1,1, , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , ,1,1, ,1,1, ,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, ,1, ,1,1,1,1, ,1, ,1,1,1,1, , , ,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
var img356 = [ , , , , , , ,1,1, , , ,1,1,1,1, ,1, ,1,1,1,1, ,1, ,1,1, ,1,1,1,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , , ,1,1,1,1,1, ,1,1, ,1, ,1,1,1,1, ,1, , ,1,1, , , ,1,1, , , , , , , , , , , , , , , ,1,1,1,1, , ,1,1,1, ,1, , ,1,1,1, ,1, ,1,1,1,1, , ,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
var imgDays = [ , , , , , , , , , , , , , ,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1, , , ,1,1, ,1,1, ,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , , , , ,1,1,1,1, , ,1,1,1,1,1, ,1,1, ,1, , ,1, , , ,1, , , ,1,1, ,1, , , , ,1,1,1,1,1, , , ,1,1,1,1, , , , , , , ,1, , , , , , ,1,1,1, , , , , ,1,1,1, , , , , , ,1,1,1,1, ,1,1,1,1,1,1,1,1,1, , , , ,1, , , , , , , , , , , , , , ,1,1,1, , ,1,1,1, ,1, , ,1,1,1, ,1,1, ,1,1,1, ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
var boxes = document.getElementById('boxes');

var randomBox = function(levels) {
	var list = document.querySelectorAll(levels.map(function(level){
		return '[level="' + level + '"]:not([correct="true"])';
	}).join(','));
	return list[Math.floor(Math.random()*list.length)];
};
var swap = function(b1, b2) {
	var b1x = b1.getAttribute('x');
	var b1y = b1.getAttribute('y');
	var b2x = b2.getAttribute('x');
	var b2y = b2.getAttribute('y');

	b1.setAttribute('x', b2x);
	b1.setAttribute('y', b2y);
	b2.setAttribute('x', b1x);
	b2.setAttribute('y', b1y);
};

var drawImage = function(img, time, onend) {
	var i = -1;
	(function next() {
		i++;

		if (i > img.length) return onend();
		var pixel = img[i];

		if (!pixel) return setTimeout(next, 1);

		var x = Math.floor(i / 7);
		var y = i % 7;

		var box = document.querySelector('[x="' + x + '"][y="' + y + '"]');

		if (box.getAttribute('level') >= 2 || box.getAttribute('correct')) {
			box.setAttribute('correct', true);
			return setTimeout(next, time);
		}

		var correctBox = randomBox([2,3,4]);

		correctBox.setAttribute('correct', true);
		swap(box, correctBox);

		setTimeout(next, time);
	})();
};

data.forEach(function(level, i) {
	var x = Math.floor(i / 7);
	var y = i % 7;

	var box = document.createElement('div');
	box.className = 'box';
	box.setAttribute('level', level);
	box.setAttribute('x', x);
	box.setAttribute('y', y);
	boxes.appendChild(box);
});

var cleanup = function() {
	var sort = function(a,b) {
		if (parseInt(a.getAttribute('x')) > parseInt(b.getAttribute('x'))) return 1;
		if (parseInt(a.getAttribute('x')) < parseInt(b.getAttribute('x'))) return -1;
		if (parseInt(a.getAttribute('y')) > parseInt(b.getAttribute('y'))) return 1;
		if (parseInt(a.getAttribute('y')) < parseInt(b.getAttribute('y'))) return -1;
		return 0;
	};

	var empty = [].slice.call(document.querySelectorAll('[level="0"]:not([correct="true"]), [level="1"]:not([correct="true"])'));
	var boxes = [].slice.call(document.querySelectorAll('[level="2"]:not([correct="true"]), [level="3"]:not([correct="true"]), [level="4"]:not([correct="true"])'));
	empty.sort(sort);
	boxes.sort(sort);

	while (boxes.length) {
		swap(boxes.shift(), empty.pop());
	}
};
var reset = function() {
	[].slice.call(document.querySelectorAll('.box')).forEach(function(box) {
		box.removeAttribute('correct');
	});
};

var scramble = function() {
	var shuffle = function(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	var all = shuffle([].slice.call(document.querySelectorAll('.box')));
	while (all.length > 0) {
		swap(all.pop(), all.pop());
	}
};

var draw = function() {
	reset(); 

	drawImage(img356, 100, function() {
		cleanup();
		reset();

		setTimeout(function() {
			drawImage(imgDays, 40, function() {
				cleanup();
				reset();

				setTimeout(function() {
					scramble();
					reset();

					setTimeout(function() {
						drawImage(imgDude, 40, function() {
							draw();
						});
					}, 4000);
				}, 4000);
			});
		}, 4000);
	});
};

setTimeout(draw, 2000);