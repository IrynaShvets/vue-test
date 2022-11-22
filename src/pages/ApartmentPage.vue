<template>
    <main class="apartment-page">
        <ContainerApp>
            <div class="apartment-page__content">
                <ApartmentsMainInfo :apartment="apartment" />
                <div class="apartment-page__additional-info">
                    <ApartmentsOwner :owner="apartment.owner" class="apartment-page__owner" />
                    <ReviewsList :reviews="review" />
                </div>
            </div>
        </ContainerApp>
    </main>
</template>

<script>
import ContainerApp from "../components/shared/ContainerApp";
import apartments from "../components/apartment/apartments";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import ReviewsList from "../components/reviews";
import review from "../components/reviews/reviews.json";

export default {
    name: 'ApartmentPage',
    components: {
        ContainerApp,
        ApartmentsMainInfo,
        ApartmentsOwner,
        ReviewsList
    },
    computed: {
        review() {
            return review;
        },
        apartment() {
            return apartments.find((apartment) => apartment.id === this.$route.params.id)
        }
    },
    mounted() {
        console.log(this.apartment)

    },
}
</script>

<style lang="scss" scoped>
.apartment-page {
    padding-bottom: 55px;

    &__content {
        display: flex;
        align-items: flex-start;
    }

    &__owner {
        min-width: 350px;
    }

    &__additional-info {
        margin-left: 30px;
        max-width: 350px;
        flex-grow: 0;
        flex-shrink: 1;
    }
}
</style>