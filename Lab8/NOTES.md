# SEG3502 — Laboratoire 8

Serveur GraphQL pour l'application Employee (client Angular déjà fourni).

## Fait

- `src/main/resources/graphql/employee.graphqls` : schéma complet (type `Employee`, input `CreateEmployeeInput`, query `employees`, mutation `newEmployee`)
- `EmployeesResolver.employees()` : `@QueryMapping` qui retourne `employeesRepository.findAll()`

## À faire

- Dans `EmployeesResolver`, ajouter la mutation `newEmployee` :
  - annoter avec `@MutationMapping`
  - prendre un `@Argument("createEmployeeInput") input: CreateEmployeeInput`
  - construire un `Employee(input.name!!, input.dateOfBirth!!, input.city!!, input.salary!!, input.gender, input.email)`
  - sauvegarder avec `employeesRepository.save(employee)` et retourner le résultat

## On doit aussi faire le rapport
