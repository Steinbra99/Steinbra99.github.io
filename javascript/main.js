require.config({
 "shim": {
   'jquery': { exports: '$' }
 }
})

require(['jquery', 'app', 'second']);
