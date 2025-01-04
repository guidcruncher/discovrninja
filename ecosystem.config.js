module.exports = {
  apps : [{
    name   : "manager",
    script : "./manager.sh",
    intrepeter: "/bin/bash",
    watch: ["./manager/client","./manager/src", "./manager/client/public/js/lib/"],
    ignore_watch: ["dist","node_modules", "manager/client/public/js/*", "manager/db/*"],
    watch_delay:5000,
    env_development: {
      NODE_CONFIG_DIR: "/home/jcrocker/src/discovrninja/manager/config",
      NODE_ENV: "development",
    }
  },
  {
    name   : "dns",
    script : "./dns.sh",
    intrepeter: "/bin/bash",
    watch: ["./manager/src"],
    ignore_watch: ["dist","node_modules"],
    watch_delay: 5000,
    env_development: {
     NODE_CONFIG_DIR: "/home/jcrocker/src/discovrninja/manager/config",
     NODE_ENV: "development",
    }
  }]
}
