let is_Admin = false;

function isAdmin(req, res, next) {
  if (!is_Admin) {
    res.json("Is not an admin");
  } else {
    next();
  }
}

module.exports = {
  isAdmin,
};
