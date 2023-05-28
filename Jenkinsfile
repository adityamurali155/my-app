node {
    def app
    stage ('Clone the repository'){
        checkout scm
    }
    stage ('Build image'){
        app = docker.build("stoneherc/myapp")
    }
    stage ('Push image'){
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
            app.push("${env.BUILD_NUMBER}")
        }
    }
    stage ('Trigger ManifestUpdate') {
        build job: 'updatemanifest', propagate: false, parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
    }
    stage('Kubescape scan') {
        sh 'kubescape scan --format junit --output results.xml *.yaml'
    }
}