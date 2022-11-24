<template>
    <div class="login">
        <AuthSection>
            <LoginForm />
        </AuthSection>
    </div>
</template>

<script>
import LoginForm from "../components/auth/Login";
import AuthSection from "../components/auth/AuthSection";

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        AuthSection,
    }
}
</script>

<style lang="scss" scoped></style>