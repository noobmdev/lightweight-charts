'use strict';

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./dist/lightweight-charts.umd.production.js');
} else {
	module.exports = require('./dist/lightweight-charts.umd.development.js');
}
