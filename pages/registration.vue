<template>
    <div>
        <RegistrationPageOne v-show="step == 1" @onStepChanged="step = $event"/>
        <RegistrationPageTwo v-show="step == 2" @onStepChanged="step = $event"/>
    </div>
</template>

<script>
    import RegistrationPageOne from '~/components/registration/RegistrationPageOne'
    import RegistrationPageTwo from '~/components/registration/RegistrationPageTwo'
    export default {
        layout: 'auth',
        auth: false,
        data() {
            return {
                step:1
            }
        },
        components: {
            RegistrationPageOne,
            RegistrationPageTwo
        }
    }
</script>

 

