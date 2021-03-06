/*
 *                          /[-])//  ___
 *                     __ --\ `_/~--|  / \
 *                   /_-/~~--~~ /~~~\\_\ /\
 *                   |  |___|===|_-- | \ \ \
 * _/~~~~~~~~|~~\,   ---|---\___/----|  \/\-\
 * ~\________|__/   / // \__ |  ||  / | |   | |
 *          ,~-|~~~~~\--, | \|--|/~|||  |   | |
 *          [3-|____---~~ _--'==;/ _,   |   |_|
 *                      /   |\__|_|  \  \__/--/
 *
 * This project is a part of the “Byte-Sized JavaScript” videocasts.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

module.exports = require( 'babel-jest' ).createTransformer( {
    plugins: [ 'istanbul', 'transform-es2015-modules-commonjs' ]
} );
