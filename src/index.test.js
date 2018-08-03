const getMinOrderValue = require('./index');

// BTC
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

// ETH
test("should format the value 0.01100000 in unit ETH to 0.01", () => {
    expect(getMinOrderValue(0.01100000, "ETH")).toBe(0.01);
});

test("should format the value 0.01500000 in unit ETH to 0.01", () => {
    expect(getMinOrderValue(0.01500000, "ETH")).toBe(0.01);
});

test("should format the value 0.10100000 in unit ETH to 0.10", () => {
    expect(getMinOrderValue(0.10100000, "ETH")).toBe(0.10);
});

test("should format the value 0.11100000 in unit ETH to 0.11", () => {
    expect(getMinOrderValue(0.11100000, "ETH")).toBe(0.11);
});

// BNB
test("should format the value 0.10000000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.10000000, "BNB")).toBe(0.1);
});

test("should format the value 0.00150000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.11500000, "BNB")).toBe(0.1);
});

test("should format the value 0.10100000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.10100000, "BNB")).toBe(0.1);
}); 

test("should format the value 0.11100000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.11100000, "BNB")).toBe(0.1);
});

// USDT
test("should format the value 0.10000000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.10000000, "USDT", "BTC")).toBe(0.1);
});

test("should format the value 0.00150000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.11500000, "USDT", "ETH")).toBe(0.1);
});

test("should format the value 0.10100000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.10100000, "USDT", "BNB")).toBe(0.1);
}); 

test("should format the value 0.11100000 in unit BNB to 0.1", () => {
    expect(getMinOrderValue(0.11100000, "USDT", "BCC")).toBe(0.1);
});

