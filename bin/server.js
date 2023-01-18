#! /usr/bin/env node
/* eslint-disable no-console */
import app from '../src/index.js';

const PORT = process.env.PORT || 4000;

app().listen(PORT, (err) => {
  if (err) {
    console.log(`App crashed ${err}`);
    process.exit(1);
  }
  console.log(`Server is running on port: ${PORT}`);
});
