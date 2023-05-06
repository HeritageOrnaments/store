var catalog = require('../data/catalog.json');

var productMgr = {
    getProduct: (pid) => {
        var catagories = Object.keys(
            catalog
        );
        var result = null;
        for (const cid in catagories) {
            for (const product in catalog[catagories[cid]].products) {
                if(product === pid) {
                    result = catalog[catagories[cid]].products[pid];
                }
            }
        }
        return result;
    },

}

module.exports = productMgr
