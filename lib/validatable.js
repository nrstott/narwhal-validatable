var util = require("util");

var validatable = {
    errors: [],

    validatesPresenceOf: function(propertyName, message) {
        message = message || (propertyName + " is required");
        if (this[propertyName] == undefined || this[propertyName] == null || this[propertyName] == "") {
            this._addError(propertyName, message)
        }
    },

    validatesFormatOf: function(propertyName, format, message) {
        if (format == undefined || format == null) throw new Error("format must be defined");
        
        message = message || (propertyName + " is not in the correct format");

        if (!format.test(this[propertyName])){
            this._addError(propertyName, message);
        }
    },

    _addError: function(propertyName, message) {
        for (var i=0;i<this.errors.length;++i) {
            if (this.errors[i].propertyName == propertyName) {
                this.errors[i].messages.push(message);
                return;
            }
        }

        this.errors.push({propertyName: propertyName, message: message});
    },

    validate: function() {

    }
};

exports.mixin = function(obj) {
    return util.update(obj, validatable);
};