var orm = require('orm');
var connection = null;

function setup(db, cb) {
  require('./product_info')(orm, db);
  require('./order')(orm, db);
  require('./order_desp')(orm, db);
  require('./admin_user')(orm, db);
  require('./token')(orm, db);
  require('./roles')(orm, db);
  require('./courses')(orm, db);
  require('./course_class')(orm, db);
  require('./student')(orm, db);

  return cb(null, db);
}

module.exports = function (cb) {
  if (connection) return cb(null, connection);
// orm.express("mysql://root:1@localhost/question_system"
  orm.connect("mysql://root:1@localhost/question_system", function (err, db) {
    if (err) return cb(err);

    connection = db;
    db.settings.set('instance.returnAllErrors', true);
    setup(db, cb);
  });
};
