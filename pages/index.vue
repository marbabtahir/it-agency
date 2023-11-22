<template>
    <div class="content-wrap pt-0 pb-0 border-0">
        <section class="section mt-0 mb-0 pb-0 curved border-0" style="height: 500px;">
            <div class="container mt-5 pt-5 contain border-0">
                <div class="row">
                    <div class="col-md-7">
                        <h2 class="display-4 fw-semibold ls--2 hero-heading">
                            We are making better
                            <span
                                class="text-rotater"
                                data-separator="|"
                                data-rotate="fadeIn"
                                data-speed="2000"
                            >
                                <span class="t-rotate text-white">Environment|Workspace|CoWorking|Community</span>
                            </span>
                            for you.
                        </h2>
                    </div>
                    <div class="col-md-5">
                        <p class="lead text-white hero-heading">
                            Whether you are a freelancer, entrepreneur, or small
                            business owner, we offer the perfect backdrop for
                            creativity, innovation, and collaboration.
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,240C320,256,400,288,480,261.3C560,235,640,149,720,133.3C800,117,880,171,960,186.7C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </section>

         <Services class="my-0 bg-white text-center border-0" />


         <CollapTesti class="my-0 shadow border-top border-bottom border-primary" />

        <Blogs class="bg-white" />

        <section class="section bg-transparent" id="portfolio" ref="animatedElement">
            <div class="container animated-content" :class="{ 'fade-in': animated }">
                <div class="heading-block border-bottom-0 text-center">
                    <div class="before-heading">Portfolio</div>
                    <h2 class="text-transform-none fw-semibold mb-0">
                        Portfolio.
                    </h2>
                </div>
            </div>
            <div class="container animated-content" :class="{ 'fade-in': animated }">
                <div
                    class="masonry-thumbs grid-container row row-cols-3"
                    data-big="4"
                    data-lightbox="gallery"
                >
                    <a
                        :key="index"
                        class="grid-item p-1 overflow-hidden"
                        :href="image.src"
                        data-lightbox="gallery-item"
                        v-for="(image, index) in gallery"
                        ><img
                            class="zoom-img rounded-2"
                            :src="image.src"
                            :alt="'Noble CoSpace Photo ' + (index + 1)"
                    />
                    <h4 class="text-center pt-2 overflow-hidden"><b>{{ image.caption }}
                    </b>
                    </h4>
                </a>
                </div>
            </div>
        </section>

        <GetInTouch />
    </div>
</template>

<script>
export default {
    name: "Index",
    head: {
        title: "noble cospace",
    },
    data() {
        return {
            gallery: [
            {
                caption: "Office Room",
                src:"demos/coworking/images/gallery/1.jpeg",
            },
            {
                caption: "Working Room 2",
                src: "demos/coworking/images/gallery/4.jpeg",
            },
            {
                caption: "Work Place",
                src:"demos/coworking/images/gallery/2.jpeg",
            },
            {
                caption: "Entrance Location",
                src:"demos/coworking/images/gallery/12.jpeg",
            },
            {
                caption: "Walking Area",
                src: "demos/coworking/images/gallery/11.jpeg",
            },
            {
                caption: "HR Office / Management Room",
                src: "demos/coworking/images/gallery/10.jpeg",
            },
            {
                caption: "Working Room",
                src: "demos/coworking/images/gallery/9.jpeg",
            },

            {
                caption: "Upstairs Area",
                src: "demos/coworking/images/gallery/3.jpeg",
            },
            {
                caption: "Meeting Area",
                src:"demos/coworking/images/gallery/5.jpeg",
            },
                // "demos/coworking/images/gallery/6.jpeg",
                // "demos/coworking/images/gallery/8.jpeg",
                // "demos/coworking/images/gallery/7.jpeg",
                // "demos/coworking/images/gallery/2.jpeg",
                // "demos/coworking/images/gallery/7.jpeg",
                // "demos/coworking/images/gallery/1.jpeg",
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
.hero-heading {
    animation:tracking-in-contract 0.5s linear both;
}
@keyframes tracking-in-contract {
    0% {
        letter-spacing:.6em;
        opacity:0
    }
    40% {
        opacity:.6
    }
    100% {
        letter-spacing:normal;
        opacity:1
    }
}
.animated-content {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s, transform 1s;
  }

  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }
.lead {
    opacity: 0.7;
}

.grid-item h4:hover {
  color: #28ACE2;
  transition: all .2s ease-in;
}

.grid-item {
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
}

.grid-item:hover {
    box-shadow: transparent;
    transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    -moz-transform:translateY(-8px);
}

.map-container {
    height: 600px;
}

.curved {
    position: relative;
    background: linear-gradient(#a2e5ff,#1899d1);
    opacity: 0;
    animation: fadeIn 1.5s ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

svg {
    position: absolute;
    bottom: 0;
    left: 0;
}

@media (max-width: 768px){
    .contain {
        margin-top: 10px !important;
        padding-top: 10px !important;
    }
}

</style>
