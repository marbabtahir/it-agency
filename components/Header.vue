<template>
        <nav class="navbar navbar-expand-lg shadow">
    <div class="container">
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
      <button
      class="navbar-toggler custom-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNav">
        <ul class="navbar-nav mt-3">
                                <li
                                class="nav-item"
                            >
                                <NuxtLink
                                class="nav-link" to="/services"
                                :class="{ active: activeRoute === '/services' }"
                                >
                                    <div @click="closeNavbar">Services</div>
                                    </NuxtLink>
                            </li>
                            <li
                                class="nav-item">
                                <NuxtLink
                                class="nav-link" to="/company"
                                :class="{ active: activeRoute === '/company' }"
                                >
                                <div @click="closeNavbar">Company</div>
                                </NuxtLink>
                            </li>
                            <li
                                class="nav-item">
                                <NuxtLink
                                class="nav-link" to="/work"
                                :class="{ active: activeRoute === '/work' }"
                                >
                                <div @click="closeNavbar">Our Work</div>
                                </NuxtLink>
                            </li>
                            <li
                                class="nav-item">
                                <NuxtLink
                                class="nav-link" to="/contact"
                                :class="{ active: activeRoute === '/contact' }"
                                >
                                <div @click="closeNavbar">Contact</div>
                                </NuxtLink>
                            </li>
                            <div class="s-icon d-flex">
                                <li>
                          <div>
                            <a
                                target="_blank"
                                href="//facebook.com/noblecospace"
                                class="mt-2 social-icon h-bg-facebook"
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
                                class="mt-2 social-icon h-bg-twitter"
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
                                class="mt-2 social-icon h-bg-instagram"
                            >
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                            </li>
                            </div>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Header",
    computed: {
        activeRoute() {
            return this.$route.path;
        },
    },

    methods: {
        closeNavbar() {
      this.$nextTick(() => {
        $('#navbarNav').collapse('hide');
      });
    },
  },

};
</script>
<style lang="scss" scoped>
#logo img {
    height: 80px !important;
}
.navbar-nav .nav-item .nav-link {
    margin-top: .5rem;
}
.navbar-nav .nav-item .nav-link:hover,
.navbar-nav .nav-item .nav-link.active {
  color: #28ACE2;
}
.custom-toggler {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

@media (max-width: 768px){
    .s-icon {
  display: flex;
  margin-top: 2rem;
  border-top: 1px solid #28ACE2;
  border-bottom: 1px solid #28ACE2;
  justify-content: center;
}
}
</style>
