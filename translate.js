// [ , , ,1,1, , , , ,1,1, , , ,1,1, , ,1,1,1, , , , ,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1,1, , , ,1,1, , , ,1,1, , ,1,1,1,1, , , ,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, ,1,1, , ,1,1, , , ,1,1, , ,1,1, ,1,1, , ,1,1, , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, , ,1, , ,1,1, , , ,1,1, , ,1,1, , ,1, , ,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, ,1,1, , ,1,1,1, ,1,1,1, , ,1,1, ,1,1, , ,1,1, , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1,1, , , , ,1,1,1,1, , , , ,1,1,1,1, , , ,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1, , , , , , ,1,1, , , , , ,1,1,1, , , , ,1,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , ,]

// [ ,1,1,1, , , , , ,1,1,1, , ,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ ,1,1,1,1, , , ,1,1,1, , , ,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , , , ,1,1, , ,1, , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1,1, , ,1,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , , , ,1,1, , ,1, , ,1, , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ ,1,1,1,1, , , ,1,1, ,1, , , , ,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ ,1,1,1, , , , , ,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,]

// [ , ,1,1,1, , , , , , , ,1, , , , ,1,1, , , ,1,1, , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1,1, , , , , ,1, ,1, , , , ,1,1, ,1,1, , ,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, ,1,1, , , ,1,1, ,1,1, , , ,1,1, ,1,1, , ,1, , , , , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, , ,1, , ,1,1, , , ,1,1, , , ,1,1,1, , , ,1,1,1,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1, ,1,1, , ,1,1,1,1,1,1,1, , , , ,1,1, , , , , ,1,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1,1, , , ,1,1, , , ,1,1, , , , ,1,1, , , , , , ,1, , , , , , , , , , , , , , , , , , , , , , , ,],
// [ , ,1,1,1, , , , ,1,1, , , ,1,1, , , , ,1,1, , , ,1,1,1, , , , , , , , , , , , , , , , , , , , , , , , ,]

var a = [
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,],
	[ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,]
];

var res = [];

while (true) {
	a.forEach(function(row) {
		if (!row.length) {
			console.log(res.join(','));
			process.exit();
		}
		var elem = row.shift();
		res = res.concat(elem ? elem : ' ');
	});
}