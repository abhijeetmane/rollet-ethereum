const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/js', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, // To load the css in react
                use: [
                    'style-loader', 'css-loader'
                ],
                include: /src/
            }, {
                test: /\.jsx?$/, // To load the js and jsx files
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
}