<template>
    <main class="login">
        <AuthSection>
            <RegistrationForm />
        </AuthSection>
    </main>
</template>

<script>
import RegistrationForm from "../components/auth/Registration";
import AuthSection from "../components/auth/AuthSection";

export default {
    name: 'RegistrationPage',
    components: {
        RegistrationForm,
        AuthSection,
    }
}
</script>

<style lang="scss" scoped></style>