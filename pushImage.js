var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});


const sampleImage = docker.getImage("ghcr.io/vk-2000/dockerdemo:1");
// sampleImage.inspect().then(val => console.log(val));
sampleImage.push({
    authconfig: {
        "username": "vk-2000",
        "password": "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",
        "email": "varu1311@gmail.com",
        "serveraddress": "ghcr.io"
        }, tag: 1
}).then(stream => {
    let data = ""
    stream.on("data", (chunk) => {
        data += chunk;
        console.log(chunk.toString());
    })
    stream.on("end", () => {
        console.log(data);
    })
})
