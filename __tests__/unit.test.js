// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('111-111-1111 to be a true phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
  });
  test('111-111-1112 to be a true phone number', () => {
    expect(functions.isPhoneNumber("111-111-1112")).toBe(true);
  });
  test('1111 to be a false phone number', () => {
    expect(functions.isPhoneNumber("1111")).toBe(false);
  });
  test('2222 to be a false phone number', () => {
    expect(functions.isPhoneNumber("2222")).toBe(false);
  });

  test('atowfigh@ucsd.edu to be a true email', () => {
    expect(functions.isEmail("atowfigh@ucsd.edu")).toBe(true);
  });
  test('ea@ucsd.edu to be a true email', () => {
    expect(functions.isEmail("ea@ucsd.edu")).toBe(true);
  });
  test('123.edu to be a false email', () => {
    expect(functions.isEmail("123.edu")).toBe(false);
  });
  test('avc to be a false email', () => {
    expect(functions.isEmail("avc")).toBe(false);
  });



 test('Aaaaa to be a strong password', () => {
    expect(functions.isStrongPassword("Aaaaa")).toBe(true);
  });
  test('Bbbbb to be a strong password', () => {
    expect(functions.isStrongPassword("Bbbbb")).toBe(true);
  });
  test('1aaaa to be a weak password', () => {
    expect(functions.isStrongPassword("1aaaa")).toBe(false);
  });
  test('2aaaa to be a weak password', () => {
    expect(functions.isStrongPassword("2aaaa")).toBe(false);
  });

  test('10/14/2002 to be a valid date', () => {
    expect(functions.isDate("10/14/2002")).toBe(true);
  });
  test('01/01/0001 to be a valid date', () => {
    expect(functions.isDate("01/01/0001")).toBe(true);
  });
  test('01/01/22 to be an invalid date', () => {
    expect(functions.isDate("01/01/22")).toBe(false);
  });
  test('01/01/ to be an invalid date', () => {
    expect(functions.isDate("01/01/")).toBe(false);
  });

    test('#000000 to be a valid hex color', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
  });
  test('#000001 to be a valid hex color', () => {
    expect(functions.isHexColor("#000001")).toBe(true);
  });
  test('#2 to be a invalid hex color', () => {
    expect(functions.isHexColor("#2")).toBe(false);
  });
  test('#1 to be a invalid hex color', () => {
    expect(functions.isHexColor("#1")).toBe(false);
  });