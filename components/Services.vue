<template>
    <section class="section" id="services" ref="animatedElement">
        <div class="container animated-content" :class="{ 'fade-in': animated }">
            <header class="section-header">
                <div class="heading-block mb-4 border-bottom-0">
                    <div class="before-heading">Services</div>
                    <h2 class="text-transform-none fw-semibold">
                        Services.
                    </h2>
                </div>
            </header>
            <div class="row">
                <div class="col-12 col-md-6 mb-3" v-for="(benefit, index) in list" :key="index">
                    <div class="m-0 p-0 services">
                        <div class="mb-2">
                            <img height="80" width="80" :src="benefit.src" />
                        </div>
                        <h4 v-text="benefit.title"></h4>
                        <p class="lead" v-text="benefit.description"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    src: "https://img.icons8.com/fluency/96/laptop-coding.png",
                    title: "Web Development",
                    description:
                        "Comprehensive web development expertise delivering innovative solutions. Expert in design, coding, and optimization.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/developer-mode.png",
                    title: "App Development",
                    description:
                        "Delivering end-to-end mobile and desktop app development expertise. From design to deployment, we craft innovative and seamless cross-platform solutions.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/commercial--v1.png",
                    title: "Digital Marketing",
                    description:
                        "Complete digital marketing solutions: strategies, execution, and channel optimization. Customized services for enhanced brand visibility and targeted engagement.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/windows10-personalization.png",
                    title: "Graphic Designing",
                    description:
                        "Graphic design services encompass diverse visual needs. From branding to digital assets, crafting captivating designs tailored to engage and resonate.",
                },

            ],
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
.services{
    transition: .5s, color .5s;
    -webkit-transition: .5s, color .5s;
    -moz-transition: .5s, color .5;
}
.services:hover{
    box-shadow: transparent;
    transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    -moz-transform:translateY(-8px);
}

.animated-content {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s, transform .5s;
  }

  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }
.lead {
font-size: 1rem;
}
</style>
