<template>
    <div class="section" id="contact">
        <div class="container" ref="animatedElement">
            <!-- <header class="section-header text-center animated-content" :class="{ 'fade-in': animated }">
                <img width="70" height="70" src="https://i.imgur.com/as6pSVy.gif" alt="chat--v2"/>
            </header> -->
            <div class="row justify-content-between animated-content" :class="{ 'fade-in': animated }">
                <div class="col-lg-5 col-md-6 mt-5 mt-md-0">
                    <h1>Get in Touch.</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-3">
                    <div class="row">
                        <div class="col"><input type="text" class="form-control form-input-outline" placeholder="Name" v-model="formData.name" id="name" required></div>
                        <div class="col"><input type="email" class="form-control form-input-outline" placeholder="Email" v-model="formData.email" id="email" required></div>
                    </div>

                </div>
                <div class="mb-4">
                    <input type="text" class="form-control form-input-outline" placeholder="Subject" v-model="formData.subject" id="subject" required>
                </div>
                <div class="mb-3">
                    <textarea class="form-control form-input-outline" placeholder="Your Message" v-model="formData.message" id="message" rows="4" required></textarea>
                </div>
                <button type="submit" class="btn bg-transparent border-primary border-2 rounded-0">Send</button>
            </form>
                </div>

                <div class="col-lg-5 col-md-6 mt-5 mt-md-0 p-5 address">
                    <h3><u class="custom-underline">Head Office</u>.</h3>
                    <address>
                            337 G, Rehman Pura<br />Lahore 54000,<br />Pakistan
                    </address>
                            <small class="text-black-50">Phone Number</small>
                            <br />
                        <a href="tel:+923238878361">0323 8878361</a>
                        <br />
                        <small class="text-black-50">Email</small>
                        <br />
                        <a href="mailto:info@noblecospace.com">
                            info@noblecospace.com
                        </a>
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
    transition: opacity 1s, transform 1s;
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
    text-decoration-color: #28ACE2;
}

@media (max-width: 768px){
    .address {
        padding-top: 0px !important;
        padding-left: 15px !important;
        margin-top: 2rem !important;
    }
}
</style>
