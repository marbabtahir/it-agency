<template>
    <!-- Footer
		============================================= -->
    <footer id="footer" class="border-0" style="background: linear-gradient(#ffffff,#DA382F);">
        <div class="container">
            <!-- Footer Widgets
    ============================================= -->
            <div class="footer-widgets-wrap dark pb-0 pt-3">
                <div class="row">
                    <div class="col-md-6">
                        <div class="widget">

                            <NuxtLink to="/"
                                ><img
                                    src="@/assets/images/logo-hsn-footer.png"
                                    alt="Logo Footer"
                                    class="mb-2"
                                    height="55"
                            /></NuxtLink>

                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="pt-4 f-icons">
                            <a
                                target="_blank"
                                href="//facebook.com/hassan.ejazch"
                                class="social-icon h-bg-facebook"
                            >
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a
                                target="_blank"
                                href="//linkedin.com/in/hassan-ejaz-chaudhary-334195258"
                                class="social-icon h-bg-twitter"
                            >
                                <i class="fa-brands fa-linkedin"></i>
                                <i class="fa-brands fa-linkedin"></i>
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
