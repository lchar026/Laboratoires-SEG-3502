# SEG3502 — Laboratoire 10

Conteneurisation de l'application bookstore du Lab 7 (Docker + Kubernetes/Minikube).

Code de départ : branches `server` et `client` de `https://github.com/stephanesome/dataRestService.git` clonées dans `books-rest-api/` et `bookstore-client/`.

## Fait

### Docker — serveur (`books-rest-api/`)
- `Dockerfile` : multi-étapes `gradle:jdk21-alpine` → `eclipse-temurin:21-jdk-alpine`
- `src/main/resources/application.properties` : substitution de variables d'environnement (`MYSQL_HOST`, `MYSQL_DB`, `MYSQL_USER`, `MYSQL_PASSWORD`) + `server.address=0.0.0.0`

### Docker — client (`bookstore-client/`)
- `Dockerfile` : multi-étapes `node:20-alpine` → `nginx:alpine` avec `gettext` pour `envsubst`
- `entrypoint.sh` : remplace les placeholders de `env.template.json` → `env.json` puis lance Nginx
- `src/assets/env.template.json` : `{ "apiUrl": "${API_URL}" }`
- `src/main.ts` : `fetch('/assets/env.json')` → `window.env` avant `bootstrapApplication`
- `src/app/books/service/books-service.ts` : `private Url = ((window as {...})['env']).apiUrl`

### Docker Compose (`docker/docker-compose.yml`)
- `mysql` (image `mysql:9`, healthcheck `SHOW DATABASES`, volume `mysql-data`)
- `booksserver` (build `../books-rest-api`, dépend de `mysql` healthy)
- `booksapp` (build `../bookstore-client`, `API_URL=http://localhost:8080/books-api/`)
- Réseau `mysql-network`, volume `mysql-data`

### Kubernetes (`k8s/`)
- `mysql-volume.yaml` : PV + PVC `mysql-data` (100Mi, `hostPath: /mnt/data`)
- `mysql-deployment.yaml` : Service headless + Deployment `mysql:8` (stratégie `Recreate`)
- `booksserver-deployment.yaml` : Service ClusterIP + Deployment (1 réplica, env vars MySQL)

## À faire (Layth)

- `k8s/booksclient-deployment.yaml` :
  - Service (`type: ClusterIP`, `name: booksapp`, `label app: booksapp`, port 4100 → targetPort 80)
  - Deployment (`name: booksapp`, 2 réplicas, image `books-api-client:latest`, `imagePullPolicy: IfNotPresent`, preStop `sleep 5`, `containerPort: 80`, env `API_URL=http://localhost:8080/books-api/`)
  - Structure à copier de `booksserver-deployment.yaml` et adapter

- `bookstore-client/src/assets/env.json` : placeholder `{ "apiUrl": "PLACEHOLDER" }`

## Construction et démarrage

### Docker (section 1)

```bash
# Serveur
cd books-rest-api
docker image build --network=host -t books-rest-api:latest .

# Client
cd ../bookstore-client
docker image build -t books-api-client:latest .

# Compose (après Q1-Q2)
cd ../docker
docker compose up -d --build
docker compose down
```

### Kubernetes (section 2)

```bash
minikube start
minikube image load books-rest-api:latest
minikube image load books-api-client:latest

cd k8s
kubectl apply -f .
kubectl get deployments
kubectl port-forward service/booksserver 8080:8080
kubectl port-forward service/booksapp 4100:4100
kubectl get pods
kubectl delete pod <pod-name>
kubectl delete -f .
```

## Rapport (captures d'écran)

- **Q1** : sortie de `docker container ls` après démarrage MySQL + booksserver
- **Q2** : sortie de `docker container ls` après démarrage du client (MySQL + server + client)
- **Q3** : sortie de `docker compose up -d --build`
- **Q4** : sortie de `kubectl apply -f .`
- **Q5** : sortie de `kubectl get deployments`
- **Q6** : sortie de `kubectl get pods` + démonstration de réplication (`kubectl delete pod <nom>` suivi de `kubectl get pods` qui montre le nouveau pod)

Application accessible à `http://localhost:4100` (Docker et K8s).
