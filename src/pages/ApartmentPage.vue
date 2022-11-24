<template>
    <main class="apartment-page">
        <SectionSpacer>
            <ContainerApp>
                <div v-if="apartment" class="apartment-page__content">
                    <ApartmentsMainInfo :apartment="apartment" />
                    <div class="apartment-page__additional-info">
                        <ApartmentsOwner :owner="apartment.owner" class="apartment-page__owner" />
                        <ReviewsList :reviews="review" />
                    </div>
                </div>
            </ContainerApp>
        </SectionSpacer>
    </main>
</template>

<script>
import ContainerApp from "../components/shared/ContainerApp";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo";
import ApartmentsOwner from "../components/apartment/ApartmentsOwner";
import ReviewsList from "../components/reviews";
import review from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartments.service";
import SectionSpacer from "../components/shared/SectionWithHeaderSpacer";

export default {
    name: 'ApartmentPage',
    components: {
        ContainerApp,
        ApartmentsMainInfo,
        ApartmentsOwner,
        ReviewsList,
        SectionSpacer
    },
    data() {
        return {
            apartment: null
        }
    },
    computed: {
        review() {
            return review;
        },
    },
    async created() {
        try {
            const { id } = this.$route.params;
            const { data } = await getApartmentById(id);
            this.apartment = data;
        } catch (error) {
            console.error(error)
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