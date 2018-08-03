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

/**
 * @param {number} value 
 * @param {string} unit 
 * @param {string} baseAsset
 */
function getMinOrderValue(value, unit, baseAsset) {
    if(!value || !unit) {
        throw new Error("Incorrect value or unit");
    }

    const unitUpperCase = unit.toUpperCase().trim();
    const baseAssetUpperCase = baseAsset 
        ? baseAsset.toUpperCase.trim() 
        : null;
    const [x, y] = value.toString().split(".");

    if(unitUpperCase === UNIT.BTC) {
        return Number(`${x}.${y.substring(0, 3)}`);
    }

    if(unitUpperCase === UNIT.ETH) {
        return Number(`${x}.${y.substring(0, 2)}`);
    }

    if(unitUpperCase === UNIT.BNB) {
        return Number(`${x}.${y.substring(0, 1)}`)
    }

    if(unitUpperCase === UNIT.USDT) {
        if(EXCEPTION_USDT.includes(baseAssetUpperCase)) {
            return Number(`${x}.${y.substring(0, 1)}`);
        }

        return Number(`${x}.${y.substring(0, 2)}`);
    }
}

module.exports = getMinOrderValue;
