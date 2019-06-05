<template>
    <div>
        <EventDetailsOne v-show="step == 1" @onStepChanged="step = $event"/>
        <EventDetailsTwo v-show="step == 2" @onStepChanged="step = $event"/>
        <EventDetailsThree v-show="step == 3" @onStepChanged="step = $event"/>
        <EventDetailsFour v-show="step == 4" @onStepChanged="step = $event"/>
    </div>
</template>

<script>
    import EventDetailsOne from '~/components/event/details/EventDetailsOne'
    import EventDetailsTwo from '~/components/event/details/EventDetailsTwo'
    import EventDetailsThree from '~/components/event/details/EventDetailsThree'
    import EventDetailsFour from '~/components/event/details/EventDetailsFour'
    export default {
        layout: 'public',
        auth: false,
        data() {
            return {
                step:1
            }
        },
        components: {
            EventDetailsOne,
            EventDetailsTwo,
            EventDetailsThree,
            EventDetailsFour
        }
    }
</script>
