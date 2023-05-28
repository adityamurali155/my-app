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
        sh 'curl -s https://raw.githubusercontent.com/kubescape/kubescape/master/install.sh | /bin/bash'
        sh 'export export PATH=$PATH:/var/lib/jenkins/.kubescape/bin'
        sh 'kubescape scan --exclude-namespaces kube-system,kube-public --format junit --output results.xml .'
    }
}