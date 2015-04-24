(function () {

  // obj will be the context that is needed for validation
  function rule(obj) {

    return !!obj.version;
  }

  // log level
  rule.level = 'error';

  // message for log
  rule.message = 'RAML file must include a version number.';

  //section of document to check
  rule.section = 'root';

  if (typeof exports === 'object' && exports) {
    module.exports = rule;
  }
}());