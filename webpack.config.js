const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';

    
    return {
        entry: './src/app.js',
        output:{
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module:{
            rules:[{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options:{
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options:{
                            sourceMap: true
                        }
                    }
                ],
                test: /\.s?css$/
            }]
        },
        devtool: isProduction? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname, 'public'),
            publicPath: '/dist/',
            historyApiFallback: true
        },
        plugins: [
            new MiniCssExtractPlugin({filename: 'styles.css'})
        ]
    };
};