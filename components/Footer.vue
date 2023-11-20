<template>
    <!-- Footer
		============================================= -->
    <footer id="footer" class="border-0 dark">
        <div class="container">
            <!-- Footer Widgets
    ============================================= -->
            <div class="footer-widgets-wrap dark pb-0 pt-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="widget">

                            <NuxtLink to="/"
                                ><img
                                    src="@/assets/images/logo-text-dark.png"
                                    alt="Logo Footer"
                                    class="mb-2"
                                    height="40"
                            /></NuxtLink>
                            <p class="text-white-50 pb-0 mb-1">
                                affordable luxury coworking space
                            </p>

                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="pt-4 f-icons">
                            <a
                                target="_blank"
                                href="//facebook.com/noblecospace"
                                class="social-icon h-bg-facebook"
                            >
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                                target="_blank"
                                href="//twitter.com/noblecospace"
                                class="social-icon h-bg-twitter"
                            >
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a
                                target="_blank"
                                href="//instagram.com/noblecospace"
                                class="social-icon h-bg-instagram"
                            >
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.f-icons {
    margin-left: 24rem;
}

@media (max-width: 768px){
  .widget{
    text-align: center;
  }
  .f-icons {
    margin-left: 6.5rem;
}
}
</style>
