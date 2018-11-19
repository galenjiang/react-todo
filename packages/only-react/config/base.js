const path = require('path')

module.exports = {
    alias: {
        "@Components": path.resolve(__dirname, "../src/components"),
        "@Containers": path.resolve(__dirname, "../src/containers"),
        "@utils": path.resolve(__dirname, "../src/utils")
    }
}