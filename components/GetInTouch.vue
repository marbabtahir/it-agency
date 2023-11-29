<template>
    <div class="section" id="contact">
        <div class="container" ref="animatedElement">
            <header class="section-header text-center animated-content" :class="{ 'fade-in': animated }">
                <img width="70" height="70" src="https://img.icons8.com/fluency/96/topic.png" alt="chat--v2"/>
            </header>
            <div class="row justify-content-between animated-content" :class="{ 'fade-in': animated }">

                <div class="col-lg-5 col-md-6 mt-5 mt-md-0 p-5 address">
                    <h1>Get in Touch.</h1>

                            <small class="text-black-50">Phone Number</small>
                            <br />
                        <a href="tel:+923278896833">0327 8896833</a>
                        <br />
                        <small class="text-black-50">Email</small>
                        <br />
                        <a href="mailto:hassanejaz0378@gmail.com">
                            hassanejaz0378@gmail.com
                        </a>
                </div>

                <div class="col-lg-6 min-vh-50 mt-5 mt-md-0 pt-5">
                    <h2>Head Office.</h2>
                    <div class="position-relative map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.137429122837!2d74.317006!3d31.5232163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d79978b6fd%3A0x67ff390983c234db!2snoble%20cospace!5e0!3m2!1sen!2s!4v1687718596380!5m2!1sen!2s"
                                allowfullscreen
                                style="border: 0"
                                class="w-100 h-100"
                            ></iframe>
                        </div>
                </div>
            </div>
        </div>
     </div>
</template>
<script>
export default {
    name: "GetInTouch",
    data() {
        return {
            formData: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
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
        submitForm() {
            // Here, you can handle the form submission logic.
            // Access the form data in this.formData.
            // For example, you can make an API request to send the data to the server.
            console.log('Form submitted:', this.formData);
            // Reset the form data after submission
            this.formData = {
                name: '',
                email: '',
                subject: '',
                message: '',
            };
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
.form-input-outline {
    background: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid hsl(0, 0%, 87%);
    transition: border-bottom 0.3s ease-in-out;
    }
.form-input-outline:focus {
    outline: none;
    box-shadow: none;
    background: transparent;
    border-bottom: 1px solid #28ACE2;
    // animation:vibrate 1.5s linear both infinite;
}

// @keyframes vibrate {
//     0% {
//         transform:translate(0)
//     }
//     20% {
//         transform:translate(-2px,2px)
//     }
//     40% {
//         transform:translate(-2px,-2px)
//     }
//     60% {
//         transform:translate(2px,2px)
//     }
//     80% {
//         transform:translate(2px,-2px)
//     }
//     100% {
//         transform:translate(0)
//     }
// }
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
