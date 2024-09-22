const express = require('express');

const router = express.Router();

// parametros son por ejemplos los :id
// query son por ejemplo los ?region=USA ..etc

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit || offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hubieron parametros');
  }
});

module.exports = router;
