

// import { createApp } from 'vue';
// import { createPinia } from 'pinia';

// import App from './App.vue';

// createApp(App).use(createPinia()).mount('#app');
module.exports = {
    stories: ['../src/components/**/*.stories.js'],
    //   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: "@storybook/vue3",
    core: {
        builder: "@storybook/builder-webpack5",
    },
    features: {
        interactionsDebugger: true,
    },
};
