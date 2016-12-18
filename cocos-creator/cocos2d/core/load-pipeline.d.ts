/// <reference path="../../cocos-creator-lib.d.ts" />

declare namespace cc {
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/asset-table.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/audio-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/auto-release-utils.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/binary-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/CCLoader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------

    // var JS = require('../platform/js');
    // var Pipeline = require('./pipeline');
    // var Downloader = require('./downloader');
    // var Loader = require('./loader');
    // var AssetTable = require('./asset-table');
    // var callInNextTick = require('../platform/utils').callInNextTick;
    // var AutoReleaseUtils = require('./auto-release-utils');

    // var resources = new AssetTable();

    /**
     * Loader for resource loading process. It's a singleton object.
     * @class loader
     * @extends Pipeline
     * @static
     */
    // function CCLoader () {
    export class CCLoader {
        // var downloader = new Downloader();
        // var loader = new Loader();

        // Pipeline.call(this, [
        //     downloader,
        //     loader
        // ]);

        /**
         * The downloader in cc.loader's pipeline, it's by default the first pipe.
         * It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
         * You can add your own download function with addDownloadHandlers
         * @property downloader
         * @type {Object}
         */
        // this.downloader = downloader;
        public readonly downloader:Downloader;

        /**
         * The downloader in cc.loader's pipeline, it's by default the second pipe.
         * It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
         * You can add your own download function with addLoadHandlers
         * @property loader
         * @type {Object}
         */
        // this.loader = loader;
        public readonly loader:Loader;

    //     // assets to release automatically
    //     this._autoReleaseSetting = {};
    // }
    // JS.extend(CCLoader, Pipeline);
    // JS.mixin(CCLoader.prototype, {

        /**
         * Get XMLHttpRequest.
         * @returns {XMLHttpRequest}
         */
        public getXMLHttpRequest():XMLHttpRequest;

        /**
         * Add custom supported types handler or modify existing type handler for download process.
         * @example
         *  cc.loader.addDownloadHandlers({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * @method addDownloadHandlers
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // addDownloadHandlers: function (extMap) {
        public addDownloadHandlers(extMap:????):void;

        /**
         * Add custom supported types handler or modify existing type handler for load process.
         * @example
         *  cc.loader.addLoadHandlers({
         *      // This will match all url with `.scene` extension or all url with `scene` type
         *      'scene' : function (url, callback) {}
         *  });
         * @method addLoadHandlers
         * @param {Object} extMap Custom supported types with corresponded handler
         */
        // public addLoadHandlers: function (extMap) {
        public addLoadHandlers(extMap?:::):void;

        /**
         * Load resources with a progression callback and a complete callback.
         * The progression callback is the same as Pipeline's {{#crossLink "Pipeline/onProgress:method"}}onProgress{{/crossLink}}
         * The complete callback is almost the same as Pipeline's {{#crossLink "Pipeline/onComplete:method"}}onComplete{{/crossLink}}
         * The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
         * 
         * @example
         * cc.loader.load('a.png', function (err, tex) {
         *     cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
         * });
         *
         * cc.loader.load('http://example.com/a.png', function (err, tex) {
         *     cc.log('Should load a texture from external url: ' + (tex instanceof cc.Texture2D));
         * });
         *
         * cc.loader.load({id: 'http://example.com/getImageREST?file=a.png', type: 'png'}, function (err, tex) {
         *     cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
         * });
         *  
         * cc.loader.load(['a.png', 'b.json'], function (errors, results) {
         *     if (errors) {
         *         for (var i = 0; i < errors.length; i++) {
         *             cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
         *         }
         *     }
         *     var aTex = results.getContent('a.png');
         *     var bJsonObj = results.getContent('b.json');
         * });
         *
         * @method load
         * @param {String|Array} resources - Url list in an array 
         * @param {Function} [progressCallback] - Callback invoked when progression change
         * @param {Function} completeCallback - Callback invoked when all resources loaded
         */
        // load: function(resources, progressCallback, completeCallback) {
        public load(resources:string|???[], progressCallback?:?????, completeCallback?:????):void;

        /**
         * Load resources from the "resources" folder inside the "assets" folder of your project.<br>
         * <br>
         * Note: All asset urls in Creator use forward slashes, urls using backslashes will not work.
         * 
         * @method loadRes
         * @param {String} url - Url of the target resource.
         *                       The url is relative to the "resources" folder, extensions must be omitted.
         * @param {Function} [type] - Only asset of type will be loaded if this argument is supplied.
         * @param {Function} completeCallback - Callback invoked when the resource loaded.
         * @param {Error} completeCallback.error - The error info or null if loaded successfully.
         * @param {Object} completeCallback.resource - The loaded resource if it can be found otherwise returns null.
         * 
         * @example
         * 
         * // load the prefab (project/assets/resources/misc/character/cocos) from resources folder
         * cc.loader.loadRes('misc/character/cocos', function (err, prefab) {
         *     if (err) {
         *         cc.error(err.message || err);
         *         return;
         *     }
         *     cc.log('Result should be a prefab: ' + (prefab instanceof cc.Prefab));
         * });
         *
         * // load the sprite frame of (project/assets/resources/imgs/cocos.png) from resources folder
         * cc.loader.loadRes('imgs/cocos', cc.SpriteFrame, function (err, spriteFrame) {
         *     if (err) {
         *         cc.error(err.message || err);
         *         return;
         *     }
         *     cc.log('Result should be a sprite frame: ' + (spriteFrame instanceof cc.SpriteFrame));
         * });
         */
        // loadRes: function (url, type, completeCallback) {
        public loadRes(url:string, type?:????, completeCallback?:???):void;

        /**
         * Load all assets in a folder inside the "assets/resources" folder of your project.<br>
         * <br>
         * Note: All asset urls in Creator use forward slashes, urls using backslashes will not work.
         *
         * @method loadResAll
         * @param {String} url - Url of the target folder.
         *                       The url is relative to the "resources" folder, extensions must be omitted.
         * @param {Function} [type] - Only asset of type will be loaded if this argument is supplied.
         * @param {Function} completeCallback - A callback which is called when all assets have been loaded, or an error occurs.
         * @param {Error} completeCallback.error - If one of the asset failed, the complete callback is immediately called with the error. If all assets are loaded successfully, error will be null.
         * @param {Object[]} completeCallback.assets - An array of all loaded assets. If nothing to load, assets will be an empty array. If error occurs, assets will be null.
         *
         * @example
         *
         * // load the texture (resources/imgs/cocos.png) and the corresponding sprite frame
         * cc.loader.loadResAll('imgs/cocos', function (err, assets) {
         *     if (err) {
         *         cc.error(err);
         *         return;
         *     }
         *     var texture = assets[0];
         *     var spriteFrame = assets[1];
         * });
         *
         * // load all textures in "resources/imgs/"
         * cc.loader.loadResAll('imgs', cc.Texture2D, function (err, textures) {
         *     if (err) {
         *         cc.error(err);
         *         return;
         *     }
         *     var texture1 = textures[0];
         *     var texture2 = textures[1];
         * });
         */
        // loadResAll: function (url, type, completeCallback) {
        public loadResAll(url:string, type:????, completeCallback?:????):void;

        /**
         * Get resource data by id. <br>
         * When you load resources with {{#crossLink "loader/load:method"}}{{/crossLink}} or {{#crossLink "loader/loadRes:method"}}{{/crossLink}},
         * the url will be the unique identity of the resource.
         * After loaded, you can acquire them by passing the url to this API.
         *
         * @method getRes
         * @param {String} url
         * @returns {*}
         */
        public getRes(url:string):any;

        /**
         * Get total resources count in loader.
         * @returns {Number}
         */
        public getResCount():number;

        /**
         * Returns an item in pipeline.
         * @method getItem
         * @return {Object}
         */
        public getItem(url:string):any;

        /**
         * Release the cache of resource by url.
         *
         * @method release
         * @param {String} url
         */
        public release(url:string):void;

        /**
         * Release the loaded cache of asset.
         *
         * @method releaseAsset
         * @param {Asset} asset
         */
        public releaseAsset(asset:Asset):void;

        /**
         * Release the cache of resource which loaded by {{#crossLink "loader/loadRes:method"}}{{/crossLink}}.
         *
         * @method releaseRes
         * @param {String} url
         */
        public releaseRes(url:string):void;

        /**
         * Resource cache of all resources.
         *
         * @method releaseAll
         */
        public releaseAll():void;

        // override
        public removeItem(key:string):any;

        /**
         * !#en
         * Indicates whether to release the asset when loading a new scene.<br>
         * By default, when loading a new scene, all assets in the previous scene will be released or preserved
         * according to whether the previous scene checked the "Auto Release Assets" option.
         * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResAll`
         * will not be affected by that option, remain not released by default.<br>
         * Use this API to change the default behavior on a single asset, to force preserve or release specified asset when scene switching.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}, {{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         * !#zh
         * 设置当场景切换时是否自动释放资源。<br>
         * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
         * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResAll` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
         * 使用这个 API 可以在单个资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}，{{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         *
         * @example
         * // auto release the texture event if "Auto Release Assets" disabled in current scene
         * cc.loader.setAutoRelease(texture2d, true);
         * // don't release the texture even if "Auto Release Assets" enabled in current scene
         * cc.loader.setAutoRelease(texture2d, false);
         * // first parameter can be url
         * cc.loader.setAutoRelease(audioUrl, false);
         *
         * @method setAutoRelease
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @param {Boolean} autoRelease - indicates whether should release automatically
         */
        public setAutoRelease(assetOrUrl:Asset|string, autoRelease?:boolean):void;

        /**
         * !#en
         * Indicates whether to release the asset and its referenced other assets when loading a new scene.<br>
         * By default, when loading a new scene, all assets in the previous scene will be released or preserved
         * according to whether the previous scene checked the "Auto Release Assets" option.
         * On the other hand, assets dynamically loaded by using `cc.loader.loadRes` or `cc.loader.loadResAll`
         * will not be affected by that option, remain not released by default.<br>
         * Use this API to change the default behavior on the specified asset and its recursively referenced assets, to force preserve or release specified asset when scene switching.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}, {{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         * !#zh
         * 设置当场景切换时是否自动释放资源及资源引用的其它资源。<br>
         * 默认情况下，当加载新场景时，旧场景的资源根据旧场景是否勾选“Auto Release Assets”，将会被释放或者保留。
         * 而使用 `cc.loader.loadRes` 或 `cc.loader.loadResAll` 动态加载的资源，则不受场景设置的影响，默认不自动释放。<br>
         * 使用这个 API 可以在指定资源及资源递归引用到的所有资源上改变这个默认行为，强制在切换场景时保留或者释放指定资源。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}，{{#crossLink "loader/isAutoRelease:method"}}cc.loader.isAutoRelease{{/crossLink}}
         *
         * @example
         * // auto release the SpriteFrame and its Texture event if "Auto Release Assets" disabled in current scene
         * cc.loader.setAutoReleaseRecursively(spriteFrame, true);
         * // don't release the SpriteFrame and its Texture even if "Auto Release Assets" enabled in current scene
         * cc.loader.setAutoReleaseRecursively(spriteFrame, false);
         * // don't release the Prefab and all the referenced assets
         * cc.loader.setAutoReleaseRecursively(prefab, false);
         *
         * @method setAutoReleaseRecursively
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @param {Boolean} autoRelease - indicates whether should release automatically
         */
        public setAutoReleaseRecursively(assetOrUrl:Asset|string, autoRelease?:boolean):void;

        /**
         * !#en
         * Returns whether the asset is configured as auto released, despite how "Auto Release Assets" property is set on scene asset.<br>
         * <br>
         * See: {{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}, {{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}
         *
         * !#zh
         * 返回指定的资源是否有被设置为自动释放，不论场景的“Auto Release Assets”如何设置。<br>
         * <br>
         * 参考：{{#crossLink "loader/setAutoRelease:method"}}cc.loader.setAutoRelease{{/crossLink}}，{{#crossLink "loader/setAutoReleaseRecursively:method"}}cc.loader.setAutoReleaseRecursively{{/crossLink}}
         * @method isAutoRelease
         * @param {Asset|String} assetOrUrl - asset object or the raw asset's url
         * @returns {Boolean}
         */
        public isAutoRelease(assetOrUrl:Asset|string):boolean;
    }

    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/downloaer.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/json-unpacker.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/loader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/loading-items.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/pack-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/pipeline.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/text-downloader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/utils.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
    //+--------------------------------------------------------------------------------
    //  File: cocos2d/core/load-pipeline/uuid-loader.js
    //  NOTE: This file ignored.
    //+--------------------------------------------------------------------------------
}
