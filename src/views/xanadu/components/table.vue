<template>
  <table class="border w-full text-left shadow-sm rounded-md">
    <thead>
      <tr>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          _id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          user_id
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          amount
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          date
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          accommodations
        </th>
        <th class="p-3 text-xs text-gray-900 uppercase font-bold tracking-wide">
          pay_type
        </th>
      </tr>
    </thead>
    <tbody class="border rounded bg-white">
      <tr v-for="(el, index) of data" :key="index">
        <td class="p-3 border" width="50px">
          {{ el._id }}
        </td>
        <td class="p-3 border" width="50px">
          {{
            el.user[0].first_name +
            " " +
            el.user[0].last_name +
            " " +
            el.user[0].user_email
          }}
          {{ el?.user_email + " " + el?.user_name }}
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.amount }} $</code>
        </td>
        <td class="p-3 border" width="50px">
          <code>{{ el.updatedAt }}</code>
        </td>
        <td class="p-3 border">
          <p>RV : {{ el?.accommodations[0]?.rv || 0 }}</p>
          <p>YURT : {{ el?.accommodations[0]?.yurt || 0 }}</p>
          <p>TENT : {{ el?.accommodations[0]?.tent || 0 }}</p>
        </td>
        <td class="p-3 border">
          {{ el.pay_type }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script >
import { defineComponent } from "vue";

export default defineComponent({
  name: "table-components",
  components: {},
  props: {
    data: Object,
    keyword: {
      type: String,
      required: true,
    },
    delete_user: Function,
    category: Object,
  },
  methods: {},
});
</script>

<style scoped>
</style>
