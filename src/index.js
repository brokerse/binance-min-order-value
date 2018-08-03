const UNIT = {
    BNB: "BNB",
    BTC: "BTC",
    ETH: "ETH",
    USDT: "USDT",
};

const EXCEPTION_USDT = [
    "ETC",
    "ICX",
    "NULS",
    "TRX",
    "VET",
];

function getMinOrderValue(value, unit) {
    if(!value || !unit) {
        throw new Error("Incorrect value or unit");
    }

    const unitUpperCase = unit.toUpperCase().trim();
    const [x, y] = value.toString().split(".");

    if(unitUpperCase === UNIT.BTC) {
        return parseFloat(`${x}.${y.substring(0, 3)}`).toFixed(3);
    }

    if(unitUpperCase === UNIT.ETH) {
        return parseFloat(`${x}.${y.substring(0, 2)}`).toFixed(2);
    }


    if(unitUpperCase === UNIT.BNB) {
        return parseFloat(`${x}.${y.substring(0, 1)}`).toFixed(1);
    }

    if(unitUpperCase === UNIT.USDT) {
        if(EXCEPTION_USDT.includes(unitUpperCase)) {
            return parseFloat(`${x}.${y.substring(0, 1)}`).toFixed(1);
        }

        return parseFloat(`${x}.${y.substring(0, 2)}`).toFixed(2);
    }
}