node {
    def app
    stage ('Clone the repository'){
        steps{
            checkout scm
        }
    }
    stage ('Build image'){
        steps{
            app = docker.build("stoneherc/myapp")
        }
    }
    stage ('Push image'){
        steps{
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                app.push("${env.BUILD_NUMBER}")
            }
        }
    }
    stage ('Trigger ManifestUpdate') {
        build job: 'updatemanifest', parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
    }
}