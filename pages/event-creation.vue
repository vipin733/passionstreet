<template>
    <div>
        <CreatingEventOne v-show="step == 1" @onStepChanged="step = $event"/>
        <CreatingEventTwo v-show="step == 2" @onStepChanged="step = $event"/>
        <CreatingEventThree v-show="step == 3" @onStepChanged="step = $event"/>
        <CreatingEventFour v-show="step == 4" @onStepChanged="step = $event"/>
    </div>
</template>

<script>
    import CreatingEventOne from '~/components/event/creating/CreatingEventOne'
    import CreatingEventTwo from '~/components/event/creating/CreatingEventTwo'
    import CreatingEventThree from '~/components/event/creating/CreatingEventThree'
    import CreatingEventFour from '~/components/event/creating/CreatingEventFour'
    export default {
        layout: 'public',
        auth: false,
        data() {
            return {
                step:1
            }
        },
        components: {
            CreatingEventOne,
            CreatingEventTwo,
            CreatingEventThree,
            CreatingEventFour
        }
    }
</script>
