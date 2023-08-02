const { ITEM_PRICE } = require('../resources/constants');

const getMenu = (req,res) => {
    itemNames = Object.keys(ITEM_PRICE);
    items = itemNames.map((itemName) => {
        return { name: itemName, price: ITEM_PRICE[itemName] }
    })
    res.status(200).json({items: items});
}

module.exports = {
    getMenu: getMenu
}
