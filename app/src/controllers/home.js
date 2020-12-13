function test(req, res) {
  return res.json({ hello: 'world' });
}

module.exports = {
  test,
};
