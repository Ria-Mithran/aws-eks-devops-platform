pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    bat 'npm ci'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    bat 'docker build -t aws-eks-devops-app:%BUILD_NUMBER% .'
                }
            }
        }

        stage('Verify Docker Image') {
            steps {
                bat 'docker images aws-eks-devops-app'
            }
        }
    }
}