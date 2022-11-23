<template>
    <header class="header">
        <ContainerApp>
            <router-link to="/">
                <LogoApp />
            </router-link>
        </ContainerApp>
    </header>
</template>

<script>
import ContainerApp from "../components/shared/ContainerApp";
import LogoApp from "../components/LogoApp";

export default {
    name: 'HeaderApp',
    components: {
        ContainerApp,
        LogoApp
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 0;
    background: $secondary-color;
}
</style>