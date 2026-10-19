# SEG3502 — Laboratoire 5

Application Employee avec persistance Firestore.

## Démarrage

```bash
npm install --legacy-peer-deps
npm start
```

## Fait

- Projet Firebase créé + config dans `src/environments/environment.ts`
- `provideFirebaseApp` + `provideFirestore` dans `src/app/app.config.ts`
- `EmployeeService.$` lit la collection `employees` avec `collectionData` et convertit le `Timestamp` Firestore en `Date` JS pour le `DatePipe`

## À faire

- Implémenter `addEmployee` dans `src/app/service/employee.service.ts` (utiliser `addDoc` pour écrire dans la collection `employees`)

## On doit aussi faire le rapport
