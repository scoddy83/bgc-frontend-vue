<script setup lang="ts">
import Menu from '@/components/HeaderMenu.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="left">
        <img
          alt="Basler Garde-Clique Logo"
          class="logo"
          src="@/assets/logo.svg"
          width="100"
          height="100"
        />
      </div>
      <nav class="center">
        <h3>Inhalt</h3>
        <Menu />
      </nav>
      <nav class="right">
        <h3>Konnekte dich mit uns!</h3>
        <div>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <g>
                <path
                  d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"
                />

                <path
                  d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"
                />

                <path
                  d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"
                />
              </g></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
              ></path></svg
          ></a>
          <a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              ></path></svg
          ></a>
        </div>
        <div>
          <a href="mailto:kontakt@bgc.ch">kontakt@bgc.ch</a>
        </div>
      </nav>
    </div>
    <aside>
      <div class="copyright">Copyright © 2024 - Basler Garde-Clique MMVIII</div>
    </aside>
  </footer>
</template>

<style scoped>
h3 {
  font-weight: bold;
  font-size: 14px;
}
.footer {
  background-color: aqua;
  color: black;
  bottom: 0;
  width: 100%;
}
.container {
  width: 98%;
  height: 120px;
  padding: 1%;
  float: none;
}
.copyright {
  border-top: 1px solid black;
  text-align: center;
  width: 100%;
  float: none;
  margin-top: 2px;
}
.left {
  width: 20%;
  margin-left: 15%;
  float: left;
}
.center {
  width: 20%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
}
.right {
  width: 20%;
  margin-right: 15%;
  float: left;
}
</style>
