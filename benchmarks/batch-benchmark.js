/* global module require */

var batch = require('../lib/batch');

module.exports = {
    'Batch processes': function(done) {
        var test = function (err, done) {
            switch (Math.round(Math.random())) {
                case 0:
                batch([
                    function(err, done) { var test = Math.random() * 100000; done(); },
                    function(err, done) { var test = Math.random() * 200000; done(); },
                    function(err, done) { var test = Math.random() * 300000; done(); },
                    function(err, done) { var test = Math.random() * 400000; done(); },
                    function(err, done) { var test = Math.random() * 500000; done(); },
                    function(err, done) { var test = Math.random() * 600000; done(); },
                    function(err, done) { var test = Math.random() * 700000; done(); },
                    function(err, done) { var test = Math.random() * 800000; done(); },
                    function(err, done) { var test = Math.random() * 900000; done(); },
                    function(err, done) { var test = Math.random() * 1000000; done(); }
                ], 5, done);
                break;
                case 1:
                batch([
                    function(err, done) { var test = Math.random() * 1000000; done(); },
                    function(err, done) { var test = Math.random() * 900000; done(); },
                    function(err, done) { var test = Math.random() * 800000; done(); },
                    function(err, done) { var test = Math.random() * 700000; done(); },
                    function(err, done) { var test = Math.random() * 600000; done(); },
                    function(err, done) { var test = Math.random() * 500000; done(); },
                    function(err, done) { var test = Math.random() * 400000; done(); },
                    function(err, done) { var test = Math.random() * 300000; done(); },
                    function(err, done) { var test = Math.random() * 200000; done(); },
                    function(err, done) { var test = Math.random() * 100000; done(); }
                ], 5, done);
                break;
            };
        };

        batch([
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test,
            test, test, test, test, test, test, test, test, test, test
        ], 5, done);
    }
};