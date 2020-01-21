module.exports = {
    name: 'Vue.js Relay Components - Single injected components into markup',
    value: 'vue-relay',
    baseKind: 'vue',
    files: [
        'src/AppMain.ts',
        'src/main/container.ts',
        'src/main/AppComponentProvider.ts',
        'src/main/lib/client-services/vue-relay.ts',
    ],
    exclude: [
        'src/App.vue',
    ]
};
