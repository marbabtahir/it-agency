<template>
    <header id="header" class="border-bottom-0" data-sticky-shrink="false">
        <div id="header-wrap" class="shadow">
            <div class="container">
                <div class="header-row">
                    <!-- Logo
						============================================= -->
                    <div id="logo">
                        <NuxtLink to="/">
                            <img
                                class="logo-default"
                                src="@/assets/images/logo-dark.png"
                                alt="Noble CoSpace logo"
                            />
                            <img
                                class="logo-sticky"
                                src="@/assets/images/logo-dark.png"
                                alt="Noble CoSpace logo"
                            />
                        </NuxtLink>
                    </div>
                    <!-- #logo end -->

                    <!-- <div class="header-misc">
                        <NuxtLink class="top-phone" to="/forms/membership"
                            ><i class="fa-solid fa-user-plus"></i>
                            <span class="d-none d-md-inline-block">
                                Membership
                            </span></NuxtLink
                        >
                    </div> -->

                    <div class="primary-menu-trigger">
                        <button
                            class="cnvs-hamburger"
                            type="button"
                            title="Open Mobile Menu"
                        >
                            <span class="cnvs-hamburger-box"
                                ><span class="cnvs-hamburger-inner"></span
                            ></span>
                        </button>
                    </div>

                    <!-- Primary Navigation
						============================================= -->
                    <nav class="primary-menu">
                        <ul class="menu-container">
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/services' }"
                            >
                                <NuxtLink class="menu-link" to="/services"
                                    ><div>Services</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/company' }"
                            >
                                <NuxtLink class="menu-link" to="/company"
                                    ><div>Company</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/work' }"
                            >
                                <NuxtLink class="menu-link" to="/work"
                                    ><div>Our Work</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/contact' }"
                            >
                                <NuxtLink class="menu-link" to="/contact"
                                    ><div>Contact</div></NuxtLink
                                >
                            </li>
                            <li>
                          <div>
                            <a
                                target="_blank"
                                href="//facebook.com/noblecospace"
                                class="social-icon h-bg-facebook"
                            >
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </div>
                            </li>

                            <li>
                          <div>
                            <a
                                target="_blank"
                                href="//twitter.com/noblecospace"
                                class="social-icon h-bg-twitter"
                            >
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </div>
                            </li>

                            <li>
                          <div>
                            <a
                                target="_blank"
                                href="//instagram.com/noblecospace"
                                class="social-icon h-bg-instagram"
                            >
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                            </li>

                            <!-- <li
                                class="menu-item"
                                :class="{
                                    current: activeRoute === '/amenities',
                                }"
                            >
                                <NuxtLink class="menu-link" to="/amenities"
                                    ><div>Amenities</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/rates' }"
                            >
                                <NuxtLink class="menu-link" to="/rates"
                                    ><div>Rates</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{
                                    current: activeRoute === '/location',
                                }"
                            >
                                <NuxtLink class="menu-link" to="/location"
                                    ><div>Location</div></NuxtLink
                                >
                            </li>
                            <li
                                class="menu-item"
                                :class="{ current: activeRoute === '/contact' }"
                            >
                                <NuxtLink class="menu-link" to="/contact"
                                    ><div>Contact</div></NuxtLink
                                >
                            </li> -->
                        </ul>
                    </nav>
                    <!-- #primary-menu end -->
                </div>
            </div>
        </div>
        <div class="header-wrap-clone"></div>
    </header>
</template>

<script>
export default {
    name: "Header",
    computed: {
        activeRoute() {
            return this.$route.path;
        },
    },
};
</script>
<style lang="scss">
#logo img {
    height: 80px !important;
}
</style>
