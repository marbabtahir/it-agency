<template>
    <section class="section" id="work" ref="animatedElement">
        <div class="container animated-content" :class="{ 'fade-in': animated }">
            <header class="section-header text-center">
                <div class="heading-block mb-4 border-bottom-0">
                    <div class="before-heading">Work</div>
                    <h2 class="text-transform-none fw-semibold">
                        Recent Work With World-Wide Companies.
                    </h2>
                </div>
            </header>
            <div class="row">
      <div class="col-md-6 col-lg-4 mt-4">
        <div class="card h-70 border-0 shadow rounded-0 blog-post">
          <img height="270" src="@/assets/images/socialbu-icon.png" class="p-2 card-img-top rounded-0" alt="Project Image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Socialbu</h5>
            <p class="card-text">Streamlined social media management. Schedule, analyze, and engage across platforms. Empower your brand with efficient campaigns and audience interaction.</p>
            <div class="mt-auto text-end">
                <a href="https://socialbu.com/">
                <button class="btn bg-transparent border-danger border-2 rounded-0">Visit</button>
        </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="card h-70 border-0 shadow rounded-0 blog-post">
          <img height="270" src="@/assets/images/linkmngr-icon.png" class="p-2 card-img-top rounded-0" alt="Project Image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Link Mngr</h5>
            <p class="card-text">LinkMngr is a URL shortener and a great tool to easily manage short links – also short branded links – supporting the development of your brand and your business.</p>
            <div class="mt-auto text-end">
                <a href="https://linkmngr.com/">
                <button class="btn bg-transparent border-danger border-2 rounded-0">Visit</button>
            </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mt-4">
        <div class="card h-70 border-0 shadow rounded-0 blog-post">
          <img height="270" src="@/assets/images/chatfai-icon.png" class="p-2 card-img-top rounded-0" alt="Project Image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Chat Fai</h5>
            <p class="card-text">Creating an AI-powered experience that allows users to chat with their favorite characters from various sources like movies, TV shows, history, and more is a fascinating and engaging idea.</p>
            <div class="mt-auto text-end">
                <a href="https://chatfai.com/">
                <button class="btn bg-transparent border-danger border-2 rounded-0">Visit</button>
            </a>
            </div>
          </div>
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
.blog-post{
    transition: .5s, color .5s;
    -webkit-transition: .5s, color .5;
    -moz-transition: .5s, color .5s;
}
.blog-post:hover{
    box-shadow: transparent;
    transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    -moz-transform:translateY(-8px);
}
button:active {
  transform: translateY(3px);
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
</style>
