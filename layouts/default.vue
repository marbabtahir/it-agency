<template>
    <div id="wrapper">
        <!-- <PreHeader /> -->
        <Header />
        <section id="content">
            <Nuxt />
        </section>
        <Footer />

        <!-- JavaScripts
	============================================= -->
        <script src="/js/functions.js"></script>
    </div>
</template>

<script>
export default {
    name: "default",
    methods: {
        async initTheme() {
            const Semicolon = await new Promise((res) => {
                // wait for SEMICOLON to be defined
                const check = () => {
                    if (typeof SEMICOLON !== "undefined") {
                        res(SEMICOLON);
                    } else {
                        setTimeout(check, 100);
                    }
                };

                check();
            });

            Semicolon.Core.runBase();
            Semicolon.Core.runModules();
        },
    },
    watch: {
        $route() {
            this.$nextTick(() => {
                setTimeout(this.initTheme, 200);
            });
        },
    },
    mounted() {
        this.initTheme();
    },
};
</script>
