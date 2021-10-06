<template>
  <div class="People">
    <div class="title is-4 has-text-centered">
      List of people
    </div>
    <div class="People__content">
      <div
        v-if="people.length"
        class="People__items"
      >
        <person-item
          v-for="person in people"
          :key="person.id"
          :item="person"
        />
      </div>
      <div
        v-else
        class="has-text-centered"
      >
        No people to show
      </div>
    </div>
  </div>
</template>

<script>
import { PeopleService } from '@/services/PeopleService'
import PersonItem from '@/components/PersonItem'

/**
 * @module People
 */
export default {
  name: 'People',
  components: { PersonItem },
  data () {
    return {
      people: []
    }
  },
  mounted () {
    this.fetchAllPeople()
  },
  methods: {
    fetchAllPeople () {
       PeopleService.fetchAllPeople().then((response) => {
        this.people = response;
      });
    },
    
  }
}
</script>
