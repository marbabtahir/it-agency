<template>
    <section>
        <div class="container banner">
            <div class="row">
                <div class="col content-col">
                    <h1 class="text-white heading fw-bolder">Team Augmentation</h1>
                    <p class="text-white">We will be an extension of your development team, augmenting your team by over 50 product designers, front/backend developers, architects, and DevOps.</p>
                </div>
                <div class="col button-col">
                    <div class="btn-contain">
                        <NuxtLink class="btn px-4 py-2 bg-info border-white border-2 rounded-0 text-white fs-5" to="/contact">
                            Tell us more
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    head() {
        return {

        };
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
}

.banner::after {
    content: " ";
    position: absolute;
    width: 120px;
    height: 100px;
    opacity: .5;
    background: url(https://onebytellc.com/wp-content/uploads/2021/07/aj1qj-ac2m5.webp);
    background-repeat: no-repeat;
    top: -100px;
    left: 0;
}

.banner::before {
    content: " ";
    position: absolute;
    width: 110px;
    height: 100px;
    bottom: -100px;
    opacity: .8;
    right: 0px;
    background: url(https://onebytellc.com/wp-content/uploads/2021/07/akold-fshae.webp);
    background-repeat: no-repeat;
    background-position: right bottom;
    z-index: 1;
}

section {
    background: linear-gradient(#2a7d9e,#28bfff);
}
.btn:active {
  transform: translateY(3px);
}
.row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.content-col {
    flex: 1;
}
.button-col {
    display: flex;
    justify-content: flex-end;
}

.btn-contain {
    margin-left: auto;
}
@media (max-width: 768px) {
    .content-col,
    .button-col {
        flex: 100%;
        text-align: left;
        justify-content: flex-start;
    }
}
</style>
