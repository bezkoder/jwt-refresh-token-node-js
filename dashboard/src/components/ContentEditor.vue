<template>
  <div>
    <button class="btn btn-primary" @click="SaveContent">Save</button>
    <div id="editor"></div>
  </div>
</template>
<script>
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import plugin from "grapesjs-preset-webpage";
import grapesjs_basic from "grapesjs-blocks-basic";
import gjsForms from "grapesjs-plugin-forms";

export default {
  name: "WebBuilder",
  data() {
    return {
      editor: {},
    };
  },
  mounted() {
    this.editor = grapesjs.init({
      container: "#editor",
      height: "800px",
      width: "100%",
      plugins: [plugin, grapesjs_basic, gjsForms],
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices: [
          /*{
            id: "desktop",
            name: "Desktop",
            width: "",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },*/
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },
      pluginsOpts: {
        plugin: {
          blocksBasicOpts: {
            blocks: [
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
            ],
            flexGrid: 1,
          },
          blocks: ["link-block", "quote", "text-basic"],
          gjsForms: {},
          grapesjs_basic: {},
        },
      },
    });
  },
  methods: {
    SaveContent() {
      console.log(this.editor.getHtml());
    },
  },
};
</script>
