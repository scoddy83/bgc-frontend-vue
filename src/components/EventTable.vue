<script setup lang="ts">
import { client } from '@/services/client'

const query = `*[_type in ["event"] && eventDatum > now()] | order(eventDatum asc) {
  name,
  text,
  eventDatum,
  ort,
  veranstalter,
  link
  }[0...10]`

const events = await client.fetch(query)

function getMonth(eventDatum: Date) {
  const datum = eventDatum.toString()
  const dateObj = datum.split('-')
  const month = dateObj[1]

  switch (month) {
    case '01':
      return 'JANUAR'
    case '02':
      return 'HORNIG'
    case '03':
      return 'MÄRZ'
    case '04':
      return 'APRIL'
    case '05':
      return 'MAI'
    case '06':
      return 'JUNI'
    case '07':
      return 'JULI'
    case '08':
      return 'AUGUST'
    case '09':
      return 'SEPTEMBER'
    case '10':
      return 'OKTOBER'
    case '11':
      return 'NOVEMBER'
    case '12':
      return 'DEZEMBER'
    default:
      break
  }

  return month
}

function getDay(eventDatum: Date) {
  const datum = eventDatum.toString()
  const dateObj = datum.split('-')
  const day = dateObj[2]
  return day
}

function getYear(eventDatum: Date) {
  const datum = eventDatum.toString()
  const dateObj = datum.split('-')
  const year = dateObj[0]
  return year
}
</script>

<template>
  <div class="pt-15 pb-15">
    <h1>Die nögschte Events vo dr BGC</h1>
    <div class="pt-10">
      <div v-for="event in events" :key="event" class="event">
        <div class="date mr-5">
          <div class="month">{{ getMonth(event.eventDatum) }}</div>
          <div class="right">
            <div class="day">{{ getDay(event.eventDatum) }}</div>
            <div class="year">{{ getYear(event.eventDatum) }}</div>
          </div>
        </div>
        <div>
          <h2>{{ event.name }}</h2>
          <div class="w-100 pt-3 text-white">
            <div class="w-33 float-left">
              <i class="material-icons pr-2">location_on</i>
              <span>{{ event.ort }}</span>
            </div>
            <div class="w-50 pl-5 float-right" v-if="event.link">
              <i class="material-icons pr-2">link</i>
              <span>
                <a :href="event.link" target="_blank">mehr Info</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: LithosProBlack;
}

a {
  color: beige;
  text-decoration: none;
}

a:hover {
  color: bisque;
  text-decoration: underline dotted;
  font-weight: bold;
}

.eventsWrapper {
  width: 100%;
}

.event {
  margin-top: 15px;
  height: 100px;
  border-bottom: 5px solid gold;
  width: 95%;
}

.date {
  background-color: gold;
  color: black;
  width: 100px;
  height: 100px;
  margin: 0px;
  display: flex; /* Aktiviert Flexbox */
  align-items: flex-start; /* Richtet Elemente am oberen Rand aus */
  text-align: center;
  position: relative;
  float: left;
}

.month {
  background-color: white;
  color: black;
  font-weight: bolder;
  rotate: -90deg;
  width: 100px;
  position: absolute;
  top: 38px;
  left: -38px;
}

.day {
  font-weight: bolder;
  font-size: 48px;
  color: black;
}

.year {
  margin-top: -15px;
  font-weight: bold;
}

.right {
  position: absolute;
  right: 0px;
  text-align: center;
  width: 80px;
}

@font-face {
  font-family: LithosProBlack;
  src: url(../assets/fonts/LithosPro-Black.otf);
  font-weight: bold;
}
</style>
