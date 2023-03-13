var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

docker.buildImage({
    context: "./app",
    src: ['Dockerfile', 'index.js']
  }, {t: "vk2000/sample:1"}, function (err, stream) {
    let data = "";
    stream.on("data", (chunk) => {
        data += chunk;
        console.log(data);
    });
    
    stream.on("end", () => {
        console.log(data);
    });
  });

