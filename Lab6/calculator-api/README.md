# SEG3502 — Laboratoire 6

Service Web REST Calculator avec Spring Boot + Kotlin.

## Démarrage

```bash
./gradlew bootRun
```

- Endpoints : `http://localhost:8080/calculator/{op}/{n1}/{n2}`
- OpenAPI JSON : `http://localhost:8080/v3/api-docs`
- Swagger UI : `http://localhost:8080/swagger-ui.html`

## Fait

- Projet généré via Spring Initializr (Kotlin, Gradle-Kotlin, Spring Web)
- Dépendance `springdoc-openapi-starter-webmvc-ui` pour OpenAPI
- `CalculatorController` avec `add`, `subtract`, `multiply`
- `ControllerExceptionHandler` qui retourne 400 sur toute exception

## À faire

- Ajouter l'endpoint `divide` dans `CalculatorController` (`GET /calculator/divide/{n1}/{n2}`)

## On doit aussi faire le rapport
