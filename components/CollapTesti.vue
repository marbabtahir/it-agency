<template>
    <div class="section" ref="animatedElement">
        <div class="container animated-content" :class="{ 'fade-in': animated }">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 col-md-6 mt-5 mt-md-0">

                    <div class="accordion bg-transparent" id="accordionE">
      <div v-for="(item, index) in accordionItems" :key="item.id">
        <div class="card rounded-2">
            <button
              class="btn collapse-btn"
              @click="toggleCollapse(item.id)"
            >
          <div class="card-header bg-white border-0" :id="'heading' + item.id">
            <i class="px-1" :class="currentIconClass(index)"></i>
                {{ item.title }}
        </div>
    </button>
          <div
            :id="'collapse' + item.id"
            class="collapse collapse-content"
            :class="{ show: item.isCollapsed }"
            :style="{ transition: 'height 0.3s ease' }"
          >
            <div class="card-body">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>

                </div>

                <div class="col-lg-5 col-md-6 mt-5 mt-md-0 p-3">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        accordionItems: [
        {
          id: 'item1',
          title: 'Our Mission',
          content: 'Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
          isCollapsed: true,
        },
        {
          id: 'item2',
          title: 'What we Do?',
          content: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.',
          isCollapsed: false,
        },
        {
          id: 'item3',
          title: `Our Company's Values`,
          content: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus. Aenean lacinia bibendum nulla sed consectetur.',
          isCollapsed: false,
        },
      ],
        testimonials: [
      {
        author: "John Doe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, testing carousel data.",
      },
      {
        author: "Jane Smith",
        text: "Pellentesque auctor justo quis ligula iaculis, id viverra augue cursus.",
      },
    ],
      animated: false,
      currentIndex: 0,
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
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
    toggleCollapse(itemId) {
      this.accordionItems.forEach((item) => {
        if (item.id === itemId) {
          item.isCollapsed = !item.isCollapsed;
        } else {
          item.isCollapsed = false;
        }
      });
    },
    currentIconClass(index) {
      return this.accordionItems[index].isCollapsed ? 'fas fa-close' : 'fas fa-check';
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
  mounted() {
    // Add autoplay functionality
    setInterval(this.nextTestimonial, 5000); // Change testimonial every 5 seconds
  },
    name: "CTA",
    props: {
        type: "generic",
    },
};
</script>
<style lang="scss" scoped>
//   @keyframes bounce {
//       0% {transform: translateY(0);}
//       50% {transform: translateY(-10px);}
//       100% {transform: translateY(0);}
//   }

.animated-content {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity .5s, transform .5s;
  }
  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }
.logo-icon {
    max-height: 100px;
}
.custom-underline {
    text-decoration-color: #28ACE2;
}
.carousel-indicators {
  color: transparent;
  margin-right: 200px;
  margin-bottom: 40px;
//   position: absolute;
}

.carousel-indicators li {
  background-color: #333; /* Active indicator color */
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin: 0 5px;
}

.carousel-indicators .active {
  background-color: #ccc; /* Inactive indicator color */
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin: 0 5px;
}
.collapse-btn {
    outline: none;
    text-align: start;
    font-weight: bold;
    border: none;
}
.testimonial-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 0px;
}

.testimonial {
  text-align: center;
}

.author {
  margin-top: 10px;
  font-style: italic;
  font-weight: bold;
}

@media (max-width: 768px){
    .testimonial-carousel {
     margin: 1.3rem;
     margin-bottom: 0px;
    }
    .carousel-indicators {
        margin-right: 60px;
    }
}
</style>
