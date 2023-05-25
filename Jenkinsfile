pipeline {
    def app
    agent any
    stages {
        stage ('Clone the repository'){
            steps{
                git branch: 'main', url: 'https://github.com/adityamurali155/my-app.git'
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
}