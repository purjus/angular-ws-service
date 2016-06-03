
(function () {

    'use strict';

    angular.module('angular-ws-service', [])

  .service('WsService', function () {

    /**
     * Decode a base64 string
     *
     * @param string str
     * @return string
     * @throws Exception
     * @see https://www.toptal.com/web/cookie-free-authentication-with-json-web-tokens-an-example-in-laravel-and-angularjs
     */
      function strBase64Decode(str) {
          var output = str.replace('-', '+').replace('_', '/');
          switch (output.length % 4) {
          case 0:
              break;
          case 2:
              output += '==';
              break;
          case 3:
              output += '=';
              break;
          default:
              throw 'Illegal base64url string!';
          }
          return window.atob(output);
      }

    /**
     * Transform an object to an URLEncoded string
     *
     * @param object
     * @return string
     */
      var objectToURLEncoded = function(obj) {
          var str = [];
          for (var p in obj) {
              str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
          }
          return str.join('&');
      };

      return {
          strBase64Decode: strBase64Decode,
          objectToURLEncoded: objectToURLEncoded
      };

  });

})();
