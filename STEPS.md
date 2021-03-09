## Pasos para la creación de la aplicación

1. Crear por medio de la consola de comandos la aplicación

    > ng new my-blog-app --routing --style scss

2. Crear un componente para listar los POST

    > ng generate component components/posts/posts

3. Crear un servicio para la comunicación http con el api

    > ng generate service services/posts/posts

4. Importar el modulo principal el modulo HttpClient de angular

    ***HttpClientModule***

5. Crear la variable de entorno con la url de la api, tanto para desarrollo como producción

    api: 'https://jsonplaceholder.typicode.com'

6. Crear servicio para obtener posts en el Service de Posts

7. Consumir el servicio para obtener posts desde el componente de posts

8. Crear ruta para el componente de posts

9. Crear un componente para 404 y configurar ruta en el modulo de rutas

    > ng generate component components/page404

10. Crear un componente para 404 y configurar ruta en el modulo de rutas

    > ng generate component components/page403

11. Agregar Angular Material al proyecto

    > ng add @angular/material

12. Crear el modulo para registrar los modulos de Angular Material

    > ng generate module modules/blog-material/blog-material

13. Importar el nuevo modulo de material en el modulo principal

14. Crear nuevo modulo para la sección de albums

    > ng generate module modules/albums --routing --route albums --module app.module

15. Crear un componente para el navbar

    > ng generate component components/layout/navBar

16. Crear un componente para el home

    > ng generate component components/home

17. Crear un componente para el inicio de sesión

    > ng generate component components/login

18. Importar en el modulo principal

    ***FormsModule***
    ***ReactiveFormsModule***

19. Crear un guard de tipo CanActivate para validar la autenticación

    > ng generate guard guards/auth/auth

20. Crear un servicio para el manejo de la seguridad y autenticación

    > ng generate service services/security/security

21. Instalar la dependencia para validar los tokens
    > npm i @auth0/angular-jwt

22. Configurar la dependecia JwtModule en el modulo principal

23. Crear un guard de tipo CanActivate para validar direcciones que no tiene acceso por estar autenticado

    > ng generate guard guards/noAuth/noAuth

24. Crear un interceptor para agregar la cabecera del token para el servicio de añadir post

    > ng generate interceptor interceptors/jwt/jwt

25. Configurar el JwtInterceptor en el modulo principal

26. Crear un componente para el cierre de sesión

    > ng generate component components/logout