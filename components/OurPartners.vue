<template>
    <div>
        <section class="mt-5 mb-5">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-md-10">
                        <div class="before-heading mb-4">Partners</div>
                        <h1 class="display-4 text-dark fw-semibold ls--2 mb-2">
                            Our Partners.
                        </h1>
                        <p class="text-muted">From Start-ups to the Fortune 500.</p>
                    </div>
                </div>
            </div>
            <div class="container mt-5 mb-5">
        <div class="row align-items-center">
          <div class="col-md-3 col-sm-6 mb-3" v-for="(logo, index) in logos" :key="index">
            <img :src="logo.image" :alt="logo.alt" class="img-fluid m-0 p-0">
          </div>
        </div>
      </div>
        </section>

        <section class="about-culture px-5 pt-5 mb-5">

            <div class="row g-0">
                <div class="col-md-3">
                    <img class="img-fluid" src="https://onebytellc.com/wp-content/uploads/2021/08/Pattern-3.png" />
                </div>
                <div class="col-md-3">
                    <div class="color-box"></div>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="https://onebytellc.com/wp-content/uploads/2021/08/Pattern-1-1.png" />
                </div>
            </div>

            <div class="row g-0">
                <div class="col-md-3">
                    <img class="img-fluid" src="https://onebytellc.com/wp-content/uploads/2021/08/Pattern.jpg" />
                </div>
                <div class="col-md-6">
                    <div class="grey-box">
                        <h3 class="txt-color-black txt-bold">Life at OneByte is about sharing knowledge, skill-sets &amp; aspirations.</h3>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="color-box"></div>
                </div>
            </div>

            <div class="row g-0">
                <div class="col-md-6">
                    <img class="img-fluid" src="https://onebytellc.com/wp-content/uploads/2021/08/Pattern-4.png" />
                </div>
                <div class="col-md-3">
                    <div class="color-box"></div>
                </div>
                <div class="col-md-3">
                    <img class="img-fluid" src="https://onebytellc.com/wp-content/uploads/2021/08/Pattern-3.png" />
                </div>
            </div>

        </section>
    </div>

</template>

<script>
export default {
    data() {
        return {
            logos: [
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/fx.svg', alt: 'cfx comics' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/g10-1-1.svg', alt: 'edkasa' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/eon.svg', alt: 'eon' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/N.svg', alt: 'tca' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/kuks.svg', alt: 'kucks' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/servup.svg', alt: 'eon' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/tribal.svg', alt: 'eon' },
        { image: 'https://onebytellc.com/wp-content/uploads/2021/08/Group-578.svg', alt: 'eon' },
      ]
        };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.grey-box {
    background: #F7F6FE;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.color-box {
    background: #CCF0F9;
    width: 100%;
    height: 100%;
}
.align-items-center {
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
