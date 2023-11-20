export default {
    // Global page headers: https://go.nuxtjs.dev/config-head

    target: "static",
    // ssr: "false",
    // generate: {
    //   fallback: true,
    // },

    head: {
        base: {
            href: "/",
        },
        title: "noble cospace",
        htmlAttrs: {
            lang: "en",
        },
        bodyAttrs: {
            class: "stretched",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Affordable luxury coworking space.",
            },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // "@fortawesome/fontawesome-svg-core/styles.css",

        // SCSS file in the project
        "~/assets/css/main.scss",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // "~/plugins/fontawesome.js",
        "~/plugins/bootstrap.client.js",
        "~/plugins/vue-video-background.client.js",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/sitemap",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        dir: ".nuxt/dist",
    },

    // sitemap: {
    //     hostname: "https://noblecospace.com",
    // },
};
