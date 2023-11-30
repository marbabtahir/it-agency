<template>
    <div class="section" ref="animatedElement" id="reference">
        <div class="container animated-content" :class="{ 'fade-in': animated }">
            <div class="heading-block border-bottom-0 text-center">
                    <div class="before-heading">Reference</div>
                    <h2 class="text-transform-none fw-semibold mb-0">
                        Our References.
                    </h2>
                </div>
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-6 col-md-6 mt-5 mt-md-0 p-5 address">
                    <h1>Referral From Canada.</h1>

                            <small class="text-black-50">Phone Number</small>
                            <br />
                        <a href="tel:+1514-865-0740">+1 (514) 865-0740</a>
                        <br />
                        <small class="text-black-50">Email</small>
                        <br />
                        <a href="mailto:patricesergerie@gmail.com">
                            patricesergerie@gmail.com
                        </a>
                </div>

                <!-- <div class="col-lg-5 col-md-6 mt-5 mt-md-0 p-3">
                    <h2><u class="custom-underline">Clients Say</u>.</h2>
                    <div id="testimonialCarousel" class="testimonial-carousel shadow bg-white border-0 rounded-2">
                        <ul class="carousel-indicators">
        <li
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :data-target="'#testimonialCarousel'"
          :data-slide-to="index"
          :class="{ active: index === currentIndex }"
        ></li>
      </ul>
    <div class="testimonial">
      <p>{{ testimonials[currentIndex].text }}</p>
      <p class="author pb-3">- {{ testimonials[currentIndex].author }}</p>
    </div>
  </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {

      animated: false,
    };
  },
  methods: {
    handleScroll() {
            if (typeof window !== 'undefined') {
        const element = this.$refs.animatedElement;
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          this.animated = true;
        } else {
          this.animated = false;
        }
      }
    },

  },
  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
};
</script>
<style lang="scss" scoped>

.animated-content {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s, transform .5s;
  }
  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }

.custom-underline {
    text-decoration-color: #DA372F;
}


@media (max-width: 768px){
    .address {
        padding-top: 0px !important;
        padding-left: 15px !important;
        margin-top: 2rem !important;
    }
}
</style>
