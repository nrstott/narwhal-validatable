var validatable = require("validatable");
var assert = require("test/assert");

var simple = new function(){

};

exports.testSimple = function() {
    validatable.mixin(simple);

    var isDefined = function(obj, member) {
        assert.isFalse(obj[member] == undefined || obj[member] == null, member + " should not be undefined or null");
    };

    isDefined(simple, "validate");
    isDefined(simple, "errors");
    isDefined(simple, "validatesPresenceOf");
    isDefined(simple, "validatesFormatOf");
};