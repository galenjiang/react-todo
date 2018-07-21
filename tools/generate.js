#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
var program = require('commander')

program
    .version('0.1.0')
    .arguments('<name> [direction]')
    .option('-c, --component', 'generate component')
    .action((name, direction, cmd) => {
        let d

        if (cmd.component) {
            d = direction
                ? path.resolve(__dirname, '../', direction,)
                : path.resolve(__dirname, '../', 'src/components')
            const modulePath = path.resolve(d, name)
            fs.stat(modulePath, (err, stats) => {
                if (stats) {
                    console.log('the path has existed, please choose anthor direction or module name')
                } else {
                    fs.mkdir(modulePath, (err) => {
                        if (!err) {
                            // copy files
                            fs.readdir(path.resolve(__dirname, './component-template'), (err, files) => {
                                if (!err) {
                                    files.forEach((file) => {
                                        fs.copyFile(path.resolve(__dirname, './component-template', file), path.resolve(modulePath, file), (err) => {
                                            if (err) {
                                                console.log(err)
                                            }
                                        })
                                    })
                                }
                            
                            })
                            
                           
                        } else {
                            console.log(err)
                        }
                    })

                }
            })

        }

    })

program.parse(process.argv)



