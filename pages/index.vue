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
                                <span class="t-rotate text-white">Quality|Services|Connection|Solution</span>
                            </span>
                            for you.
                        </h2>
                    </div>
                    <div class="col-md-5">
                        <p class="lead text-white hero-heading">
                            Whether you are a company or small
                            business owner, we offer the perfect services for
                            creativity, innovation, and enhancing your business.
                        </p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L40,224C80,224,160,224,240,240C320,256,400,288,480,261.3C560,235,640,149,720,133.3C800,117,880,171,960,186.7C1040,203,1120,181,1200,149.3C1280,117,1360,75,1400,53.3L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </section>

         <Services class="my-0 bg-white text-center border-0" />


         <CollapTesti class="my-0 shadow border-top border-bottom border-danger" />

        <Work class="bg-white" />

        <section class="section bg-transparent" id="about" ref="animatedElement">
            <div class="container animated-content" :class="{ 'fade-in': animated }">
                <div class="heading-block border-bottom-0 text-center">
                    <div class="before-heading">About</div>
                    <h2 class="text-transform-none fw-semibold mb-0">
                        About Us.
                    </h2>
                </div>
            </div>
            <section class="section mb-0 bg-white">
            <div class="container">
                <div class="row align-items-stretch col-mb-50 mb-0">
                    <div class="col-lg-6 mt-5  h-col">
                        <div class="fancy-title title-border">
                            <h3>Our Vision is To...</h3>
                        </div>
                      <p class="text-muted">My Personal IT  Agency is a pioneering IT firm based in Pakistan, dedicated to delivering top-tier services in web and app development, digital marketing, and graphic design to esteemed clients across the USA and UK.</p>
                      <p class="text-muted"><b>Why choose us </b> <br/>Quality Work: We pride ourselves on delivering excellence. Our team is committed to providing unparalleled quality within your budget and timelines.<br/> Timely Delivery: Understanding the importance of deadlines, we ensure on-time project completion without compromising on quality.<br/> Client-Centric Approach: Your success is our priority. We prioritize open communication and collaboration, ensuring your vision comes to life.</p>
                    </div>

                    <div class="col-lg-6 min-vh-50">
                        <img width="670" height="450" src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?size=626&ext=jpg&ga=GA1.1.1515880344.1699539451&semt=sph" />
                    </div>
                </div>
            </div>
        </section>
        </section>

        <GetInTouch />
    </div>
</template>

<script>
export default {
    name: "Index",
    head: {
        title: "Personal IT-Agency",
    },
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
    transition: opacity .5s, transform .5s;
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
    background: linear-gradient(#ffffff,#DA382F);
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
