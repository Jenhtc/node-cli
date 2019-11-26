#!/usr/bin/env node

const countryList = require("country-list");
const { getCode } = require("country-list");
const axios = require("axios");
/* const readLineSync = require('readline-sync'); */

let country = process.argv.slice(2);
let countryCode = getCode(country[0]);
let date = new Date();
let year = date.getFullYear();

const getHolidays = async () => {
  let response = await axios.get(
    `https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`
  );
  let holidaysTable = response.data;
  holidaysTable.forEach(element => {
    console.log(element.name + ": " + element.date);
  });
};
getHolidays();
