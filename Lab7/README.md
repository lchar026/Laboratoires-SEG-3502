# SEG3502 — Laboratoire 7

Application BookStore (Angular + Spring Boot + MySQL) étendue avec une recherche d'auteurs.

## Démarrage

```bash
# MySQL
docker run -d -p 6033:3306 --name=docker-mysql \
  --env="MYSQL_ROOT_PASSWORD=root" \
  --env="MYSQL_PASSWORD=root" \
  --env="MYSQL_DATABASE=booksDb" mysql

# Serveur
cd server && ./gradlew bootRun

# Client
cd client && npm install --legacy-peer-deps && npm start
```

- Client : `http://localhost:4200`
- API : `http://localhost:8080/books-api`
- Swagger UI : `http://localhost:8080/swagger-ui.html`

## Fait

- `BooksService.getAuthor(id)` : GET `/books-api/authors/{id}`
- Composant `AuthorsComponent` avec formulaire (ID) + soumission + gestion des propriétés `author` et `notFound`
- Route `/authors` et lien `Authors` dans la barre de navigation

## À faire

- Dans `client/src/app/authors/authors.component.html`, ajouter l'affichage sous le formulaire :
  - un bloc `@if (author)` qui montre `author.firstName` et `author.lastName`
  - un bloc `@if (notFound)` avec un message « Author not found »

## On doit aussi faire le rapport
