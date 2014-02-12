require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'<% if (includeBootstrap) { %>,
        bootstrapAffix: '<%= bs %>affix',
        bootstrapAlert: '<%= bs %>alert',
        bootstrapButton: '<%= bs %>button',
        bootstrapCarousel: '<%= bs %>carousel',
        bootstrapCollapse: '<%= bs %>collapse',
        bootstrapDropdown: '<%= bs %>dropdown',
        bootstrapModal: '<%= bs %>modal',
        bootstrapPopover: '<%= bs %>popover',
        bootstrapScrollspy: '<%= bs %>scrollspy',
        bootstrapTab: '<%= bs %>tab',
        bootstrapTooltip: '<%= bs %>tooltip',
        bootstrapTransition: '<%= bs %>transition'<% } %>
}<% if (includeBootstrap) { %>,
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }<% } %>
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
