<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { client } from '@/services/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const imageBuilder = imageUrlBuilder(client)

const query = `*[_type == "mitglied"] {
  vorname,
  name,
  spruch,
  "register": instrument->register->typ,
  "instrument": instrument->instrument,
  eintritt,
  profilbild
  }[0...10]`

const mitglieder = await client.fetch(query)

function imageUrlFor(source: SanityImageSource): any {
  return imageBuilder.image(source)
}
</script>

<template>
  <div class="mitglieder mt-28">
    <h1>Mitglieder</h1>
    <p>Die Mitglieder der BGC</p>

    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Register</th>
            <th>Instrument</th>
            <th>Mitglied seit</th>
          </tr>
        </thead>
        <tbody>
          <!-- row  -->
          <tr v-for="mitglied in mitglieder" :key="mitglied">
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      :src="imageUrlFor(mitglied.profilbild).ignoreImageParams().width(240)"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ mitglied.vorname }} {{ mitglied.name }}</div>
                  <div class="text-sm opacity-50">{{ mitglied.spruch }}</div>
                </div>
              </div>
            </td>
            <td>{{ mitglied.register }}</td>
            <td>{{ mitglied.instrument }}</td>
            <td>{{ mitglied.eintritt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
