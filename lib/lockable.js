var lockfile = require('lockfile');

// Attach a locking middleware that prevents requests from continuing
// until the lock is removed.
exports.attach = function(app, lockName) {
  app.use(function lockableMiddleware(req, res, next) {
    (function retry() {
      if (lockfile.checkSync(lockName)) {
        setTimeout(retry, 30);
      } else {
        next();
      }
    }());
  });
};

// Create lock file that causes requests to hang
exports.lock = function(lockName) {
  lockfile.lockSync(lockName);
};

// Unlock/remove the lock file preventing requests
exports.unlock = function(lockName) {
  lockfile.unlockSync(lockName);
};

