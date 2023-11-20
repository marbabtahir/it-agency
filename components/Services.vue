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
                <div class="col-12 col-md-4 mb-3" v-for="(benefit, index) in list" :key="index">
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
                    src: "https://img.icons8.com/fluency/96/code.png",
                    title: "Development",
                    description:
                        "We develop customized and modern apps for specific business needs on any platform (web, mobile or desktop).",
                },
                {
                    src: "https://img.icons8.com/fluency/96/services.png",
                    title: "Product Engineering",
                    description:
                        "We help businesses innovating, designing, developing, testing and deploying their software products.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/guest-male--v2.png",
                    title: "Consulting",
                    description:
                        "We help businesses in IT planning, infrastructure design, technologies, platforms and security.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/request-service.png",
                    title: "Application Management",
                    description:
                        "To keep your systems smooth and stable, we offer maintenance, migration, configuration and monitoring services that keep you up and running.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/query-inner-join.png",
                    title: "System Integration",
                    description:
                        "To make sure that all your systems work togethor efficiently, we can integrate different technologies and systems to work togethor according to your needs.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/cyber-security.png",
                    title: "Information Security",
                    description:
                        "Security that helps you sleep at night. We offer quality security services for your IT systems and infrastructure so that you never feel insecure.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/share.png",
                    title: "Social Media Management",
                    description:
                        "Making sure your social media is doing as good as it can - we don't add dead followers and just brag about it.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/positive-dynamic.png",
                    title: "Search Engine Optimization",
                    description:
                        "We improve your seo and make sure your site is loved by google and other search engines.",
                },
                {
                    src: "https://img.icons8.com/fluency/96/web-advertising.png",
                    title: "Marketing & Advertising",
                    description:
                        "To help you grow your business and achieve the best ROI, we use the best tools and resources to advertise and market your business.",
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
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
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
    transition: opacity 3s, transform 2s;
  }

  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }
.lead {
font-size: 1rem;
}
</style>
