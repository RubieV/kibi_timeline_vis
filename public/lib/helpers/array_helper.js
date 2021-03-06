define(function (require) {
  return function ArrayHelperFactory() {
    const _ = require('lodash');

    function ArrayHelper() {
    }

    ArrayHelper.prototype.add = function (array, object, callback) {
      array.push(object);
      if (callback) {
        callback();
      }
    };

    ArrayHelper.prototype.remove = function (array, index, callback) {
      array.splice(index, 1);
      if (callback) {
        callback();
      }
    };

    ArrayHelper.prototype.up = function (array, index, callback) {
      if (index > 0) {
        const newIndex = index - 1;
        const currentElement = _.clone(array[index], true);
        array.splice(index, 1);
        array.splice(newIndex, 0, currentElement);
        if (callback) {
          callback();
        }
      }
    };

    ArrayHelper.prototype.down = function (array, index, callback) {
      if (index < array.length - 1) {
        const newIndex = index + 1;
        const currentElement = _.clone(array[index], true);
        array.splice(index, 1);
        array.splice(newIndex, 0, currentElement);
        if (callback) {
          callback();
        }
      }
    };


    return new ArrayHelper();
  };

});
