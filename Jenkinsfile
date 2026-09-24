pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                dir('backend') {
                    bat 'npm ci'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('backend') {
                    bat 'docker build -t aws-eks-devops-app:%BUILD_NUMBER% .'
                }
            }
        }

        stage('Verify Docker Image') {
            steps {
                bat 'docker images aws-eks-devops-app'
            }
        }

        stage('Test Application') {
            steps {
                bat '''
                    docker run -d --name jenkins-test-%BUILD_NUMBER% -p 3001:3000 aws-eks-devops-app:%BUILD_NUMBER%
                    timeout /t 5 /nobreak
                    curl.exe -f http://localhost:3001/health
                '''
            }
        }
    }

    post {
        always {
            bat 'docker rm -f jenkins-test-%BUILD_NUMBER% 2>nul || exit /b 0'
        }
    }
}