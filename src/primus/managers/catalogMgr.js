var catalog = require('../data/catalog.json');

var catalogMgr = {
    getCatagories: () => {
        var catagories = Object.keys(
            catalog
        );
        return catagories
    },

    getCatagorie:(cid) => {
        return catalog[cid] || null;
    }
}

module.exports = catalogMgr
