module.exports = {
    name: 'Vue.js Relay Components - Single injected components into markup',
    value: 'vue-relay',
    baseKind: 'vue',
    files: [
        'src/AppMain.ts',
        'src/container.ts',
        'src/AppComponentProvider.ts',
        'src/lib-glue/client-services/vue-relay.ts',
    ],
    exclude: [
        'src/views',
        'src/App.vue',
    ]
};
