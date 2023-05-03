<template>
  <nav
    id="sidebar"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a
            :class="{ 'nav-link': true, active: getSelection == 'home' }"
            aria-current="page"
            href="#"
            @click="SetSelection('home')"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C12 11.4477 12.4477 11 13 11H19C19.5523 11 20 11.4477 20 12V19C20 19.5523 19.5523 20 19 20H13C12.4477 20 12 19.5523 12 19V12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 5C4 4.44772 4.44772 4 5 4H8C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20H5C4.44772 20 4 19.5523 4 19V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12 5C12 4.44772 12.4477 4 13 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H13C12.4477 8 12 7.55228 12 7V5Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <span class="mx-2">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            :class="{ 'nav-link': true, active: getSelection == 'Users' }"
            href="#"
            @click="SetSelection('Users')"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="User / Users_Group">
                <path
                  id="Vector"
                  d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <span class="mx-2">Users</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            :class="{
              'nav-link': true,
              active: getSelection == 'Institutions',
            }"
            href="#"
            @click="SetSelection('Institutions')"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="var(--ci-primary-color, #000000)"
                d="M247.759,14.358,16,125.946V184H496V125.638ZM464,152H48v-5.946L248.241,49.642,464,146.362Z"
                class="ci-primary"
              />
              <path
                fill="var(--ci-primary-color, #000000)"
                d="M16,496H496V392H16Zm32-72H464v40H48Z"
                class="ci-primary"
              />
              <rect
                width="32"
                height="160"
                x="72"
                y="208"
                fill="var(--ci-primary-color, #000000)"
                class="ci-primary"
              />
              <rect
                width="32"
                height="160"
                x="408"
                y="208"
                fill="var(--ci-primary-color, #000000)"
                class="ci-primary"
              />
              <rect
                width="32"
                height="160"
                x="184"
                y="208"
                fill="var(--ci-primary-color, #000000)"
                class="ci-primary"
              />
              <rect
                width="32"
                height="160"
                x="296"
                y="208"
                fill="var(--ci-primary-color, #000000)"
                class="ci-primary"
              />
            </svg>
            <span class="mx-2">Institutions</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            :class="{
              'nav-link': true,
              active: getSelection == 'Groups',
            }"
            href="#"
            @click="SetSelection('Groups')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-users"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span class="mx-2">Roles</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            :class="{
              'nav-link': true,
              active: getSelection == 'Modules',
            }"
            href="#"
            @click="SetSelection('Modules')"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>report-text</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="add"
                  fill="#000000"
                  transform="translate(42.666667, 85.333333)"
                >
                  <path
                    d="M341.333333,1.42108547e-14 L426.666667,85.3333333 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L341.333333,1.42108547e-14 Z M330.666667,42.6666667 L42.6666667,42.6666667 L42.6666667,298.666667 L384,298.666667 L384,96 L330.666667,42.6666667 Z M149.333333,234.666667 L149.333333,266.666667 L85.3333333,266.666667 L85.3333333,234.666667 L149.333333,234.666667 Z M341.333333,234.666667 L341.333333,266.666667 L192,266.666667 L192,234.666667 L341.333333,234.666667 Z M149.333333,170.666667 L149.333333,202.666667 L85.3333333,202.666667 L85.3333333,170.666667 L149.333333,170.666667 Z M341.333333,170.666667 L341.333333,202.666667 L192,202.666667 L192,170.666667 L341.333333,170.666667 Z M149.333333,106.666667 L149.333333,138.666667 L85.3333333,138.666667 L85.3333333,106.666667 L149.333333,106.666667 Z M341.333333,106.666667 L341.333333,138.666667 L192,138.666667 L192,106.666667 L341.333333,106.666667 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </svg>
            <span class="mx-2">App Content</span>
          </a>
        </li>
        <!--li class="nav-item">
          <a
            :class="{
              'nav-link': true,
              active: getSelection == 'ContentEditor',
            }"
            href="#"
            @click="SetSelection('ContentEditor')"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />

              <g id="Complete">
                <g id="edit">
                  <g>
                    <path
                      d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />

                    <polygon
                      fill="none"
                      points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span class="mx-2">Content Editor</span>
          </a>
        </li-->
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters(["getSelection"]),
  },
  methods: {
    SetSelection(item) {
      this.$store.dispatch("setSelection", item);
      this.$router.push({ name: item });
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 90px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  z-index: 99;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 11.5rem;
    padding: 0;
  }
}

.navbar {
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

@media (min-width: 767.98px) {
  .navbar {
    top: 0;
    position: sticky;
    z-index: 999;
  }
}

.sidebar .nav-link {
  color: #333;
}

.sidebar .nav-link.active {
  color: #0d6efd;
}
</style>
