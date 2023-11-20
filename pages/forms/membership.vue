<template>
    <div>
        <div class="container my-6">
            <div class="row justify-content-center text-center">
                <div class="col-md-8">
                    <h1 class="display-4 text-dark fw-semibold ls--2">
                        Membership Inquiry
                    </h1>
                    <p>Reach out to us and we'll respond as soon as we can.</p>
                </div>
            </div>
        </div>

        <section class="section mb-0">
            <div class="container">
                <div class="row align-items-stretch col-mb-50 mb-0">
                    <div class="col-lg-6">
                        <iframe
                            data-tally-src="https://forms.noblecospace.com/membership?hideTitle=1&transparentBackground=1&dynamicHeight=1&embed=1"
                            loading="lazy"
                            width="100%"
                            height="400"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            title="Membership inquiry"
                        ></iframe>
                    </div>
                    <div class="col-lg-6">
                        <div class="text-center">
                            <img
                                src="~/assets/images/logo-icon.png"
                                class="img-responsive logo-icon"
                                alt="logo"
                            />
                            <h2 class="ls-0">Take the Next Step</h2>
                        </div>
                        <p class="text-muted mb-5">
                            Join our vibrant coworking community today and
                            experience the benefits of a flexible and inspiring
                            environment. <br /><br />From dedicated workstations
                            to state-of-the-art facilities, we have everything
                            you need to thrive.
                        </p>
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
            title: "Membership Inquiry | noble cospace",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Fill out the form to inquire about our membership",
                },
            ],
        };
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        var d = document,
            w = "https://tally.so/widgets/embed.js",
            v = function () {
                "undefined" != typeof Tally
                    ? Tally.loadEmbeds()
                    : d
                          .querySelectorAll("iframe[data-tally-src]:not([src])")
                          .forEach(function (e) {
                              e.src = e.dataset.tallySrc;
                          });
            };
        if ("undefined" != typeof Tally) v();
        else if (d.querySelector('script[src="' + w + '"]') == null) {
            var s = d.createElement("script");
            (s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
        }
    },
};
</script>

<style lang="scss" scoped>
.logo-icon {
    max-height: 100px;
}
</style>
