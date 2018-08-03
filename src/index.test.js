const getMinOrderValue = require('./');

test("should format the value 0.00100000 in unit BTC to 0.001", () => {
    expect(getMinOrderValue(0.00100000, "BTC")).toBe(0.001);
});

test("should format the value 0.00150000 in unit BTC to 0.001", () => {
    expect(getMinOrderValue(0.00150000, "BTC")).toBe(0.001);
});

test("should format the value 0.10100000 in unit BTC to 0.101", () => {
    expect(getMinOrderValue(0.10100000, "BTC")).toBe(0.101);
});

test("should format the value 0.11100000 in unit BTC to 0.111", () => {
    expect(getMinOrderValue(0.11100000, "BTC")).toBe(0.111);
});
