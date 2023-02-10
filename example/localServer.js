const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const { client } = require('../index.js');
const path = require('path');

client(
  {
    host: 'localhost',
    port: 8010
    // Uncomment below to enable transport encryption::
    // encKey: 'DwUuKDoFtHVWrWGfS4rz1pm7bOTZ988o',
    // encIv: '435435f432543532'
  },
  {
    host: 'localhost',
    port: 5432
  },
  1 // number of concurrent open tunnels
);
