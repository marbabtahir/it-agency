<template>
    <div class="fade-in">
        <div class="container my-6">
            <div class="row justify-content-center text-center">
                <div class="col-md-8">
                    <div class="before-heading mb-4">Contact</div>
                    <h1 class="display-4 text-dark fw-semibold ls--2">
                        Get in Touch
                    </h1>
                    <p>Reach out to us and we'll respond as soon as we can.</p>
                </div>
            </div>
        </div>

        <section class="section mb-0">
            <div class="container">
                <div class="row align-items-stretch col-mb-50 mb-0">
                    <div class="col-lg-6">
                        <div class="fancy-title title-border">
                            <h3>Send us an Email</h3>
                        </div>
                        <div>
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
                    </div>

                    <div class="col-lg-6 min-vh-50">
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
                <div class="row col-mb-50 mb-4">
                    <div class="col-sm-6 col-lg-6">
                        <div
                            class="feature-box fbox-center fbox-bg fbox-plain border-secondary"
                        >
                            <div class="fbox-icon bg-light">
                                <img src="https://img.icons8.com/fluency/96/location--v1.png" alt="location--v1"/>
                            </div>
                            <div class="fbox-content">
                                <h3>
                                    Visit Us<span class="subtitle"
                                        >337, Rehmanpura, Lahore</span
                                    >
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-6">
                        <div
                            class="feature-box fbox-center fbox-bg fbox-plain border-secondary"
                        >
                            <div class="fbox-icon bg-light">
                                <a href="tel:+923238878361"
                                    ><img src="https://img.icons8.com/fluency/96/two-smartphones.png" alt="shake-phone"/>
                                </a>
                            </div>
                            <div class="fbox-content">
                                <h3>
                                    Speak to Us<span class="subtitle"
                                        >0323 8878361</span
                                    >
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "Contact | noble cospace",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Contact us for any queries regarding our work space.",
                },
            ],
        };
    },
    data() {
        return {
            formData: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        };
    },
    methods: {
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
};
</script>

<style lang="scss" scoped>
.fade-in {
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

button:active {
  transform: translateY(3px);
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
    animation:vibrate 1.5s linear both infinite;
}

@keyframes vibrate {
    0% {
        transform:translate(0)
    }
    20% {
        transform:translate(-2px,2px)
    }
    40% {
        transform:translate(-2px,-2px)
    }
    60% {
        transform:translate(2px,2px)
    }
    80% {
        transform:translate(2px,-2px)
    }
    100% {
        transform:translate(0)
    }
}

</style>
