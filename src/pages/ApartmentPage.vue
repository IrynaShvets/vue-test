<template>
    <div>
        <ContainerApp>
            <h2>Apartment Page</h2>
        </ContainerApp>
    </div>
</template>

<script>
import ContainerApp from "../components/shared/ContainerApp";

    export default {
        name: 'ApartmentPage',
        components: {
            ContainerApp
        },
        mounted() {
            console.log(this.$route.params.id)
            console.log(this.$route.query.name)
        },
    }
</script>

<style lang="scss" scoped>

</style>