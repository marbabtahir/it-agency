<template>
    <section class="section" id="blogs" ref="animatedElement">
        <div class="container animated-content" :class="{ 'fade-in': animated }">
            <header class="section-header text-center">
                <div class="heading-block mb-4 border-bottom-0">
                    <div class="before-heading">Blogs</div>
                    <h2 class="text-transform-none fw-semibold">
                        Recent Posts.
                    </h2>
                </div>
            </header>
            <div class="row">
      <div class="col-md-6 col-lg-3 mt-4" v-for="(post, index) in recentPosts" :key="index">
        <div class="card h-100 border-0 shadow rounded-0 blog-post">
          <img :src="post.image" class="card-img-top rounded-0" alt="Blog-Post Image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.excerpt }}</p>
            <div class="mt-auto text-end">
                <button class="btn bg-transparent border-primary border-2 rounded-0">Read More</button>
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
            recentPosts: [
        {
          title: 'Post 1',
          excerpt: 'This is the first blog post.',
          image: 'https://via.placeholder.com/150',
          content: 'This is the content of the first blog post.',
          link: '/post/1',
        },
        {
          title: 'Post 2',
          excerpt: 'Another interesting blog post for you.',
          image: 'https://via.placeholder.com/150',
          content: 'This is the content of the first blog post.',
          link: '/post/2',
        },
        {
          title: 'Post 3',
          excerpt: 'Check out this amazing blog post.',
          content: 'This is the content of the first blog post.',
          image: 'https://via.placeholder.com/150',
          link: '/post/3',
        },
        {
          title: 'Post 4',
          excerpt: "Don't miss this exciting blog post.",
          content: 'This is the content of the first blog post.',
          image: 'https://via.placeholder.com/150',
          link: '/post/4',
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
.blog-post{
    transition: .5s, color .10s;
    -webkit-transition: .5s, color .10s;
    -moz-transition: .5s, color .10s;
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
    transition: opacity 3s, transform 2s;
  }

  .fade-in {
    opacity: 1;
    transform: translateY( 0);
  }
</style>
