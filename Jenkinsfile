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
    stage ('Trigger ManifestUpdate'){
        build job: 'updatemanifest', propagate: false, parameters: [string(name: 'DOCKERTAG', value: env.BUILD_NUMBER)]
    }
    node ('KUBERNETES'){
        stage ('Adding Kubescape'){
            sh 'helm repo add kubescape https://kubescape.github.io/helm-charts/'
            sh 'helm repo update'
            sh 'helm upgrade --install kubescape kubescape/kubescape-cloud-operator -n kubescape --create-namespace --set account=771d0eff-0171-44c3-831a-c68d7d9b108a --set clusterName=`kubectl config current-context`'
        }
    }
}