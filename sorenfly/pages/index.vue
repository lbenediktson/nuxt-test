<template>
  <div>
    <welcome-section />
    <section2 />
    <welcome-section />
  </div>
</template>

<script>
import WelcomeSection from '@/components/home/welcomeSection'
import Section2 from '@/components/home/section2'

export default {
  components: {
    WelcomeSection,
    Section2
  },
  metaInfo: {
    title: 'Finacial Outsourcing'
  }
}
</script>
