# 1. Introducción

## ¿Qué es React Native?

React Native es un framework que permite desarrollar aplicaciones móviles **nativas** usando **JavaScript o TypeScript**.
Permite que el mismo código funcione tanto en **Android** como en **iOS**, sin necesidad de aprender Java/Kotlin o Swift/Objective-C.

Ejemplo de un componente básico (`App.tsx`):

```tsx
// App.tsx
import React from "react";
import { View } from "react-native";
import Saludo from "./Saludo"; // Importamos un componente externo

export default function App() {
  const mensaje = "¡Hola desde React Native con TypeScript!";

  return (
    <View>
      <Saludo mensaje={mensaje} />
    </View>
  );
}
```

```tsx
// Saludo.tsx
import React from "react";
import { View, Text } from "react-native";

type Props = {
  mensaje: string;
};

export default function Saludo({ mensaje }: Props) {
  return (
    <View>
      <Text>{mensaje}</Text>
    </View>
  );
}
```

Ahora `Saludo` se renderiza correctamente dentro de `App`.

---

## ¿Qué es Expo Go?

**Expo** es una herramienta que facilita la creación, prueba y ejecución de aplicaciones React Native:

* Permite correr la app en un dispositivo móvil con la app **Expo Go**.
* Comando para iniciar el proyecto:

```bash
npx expo start
```

* Facilita el uso de APIs nativas (cámara, notificaciones, ubicación, etc.) sin configuración adicional.

---

## ¿Qué es TypeScript?

**TypeScript** es un superconjunto de JavaScript que añade **tipado estático**, evitando errores y mejorando el autocompletado en editores como **VSCode**.

Ejemplo de componente con props tipadas y constante de ejemplo:

```tsx
// Usuario.tsx
import React from "react";
import { View, Text } from "react-native";

type Props = {
  nombre: string;
  edad: number;
};

export default function Usuario({ nombre, edad }: Props) {
  return (
    <View>
      <Text>{`${nombre} tiene ${edad} años.`}</Text>
    </View>
  );
}
```

```tsx
// App.tsx
import React from "react";
import { View } from "react-native";
import Usuario from "./Usuario";

export default function App() {
  const datosUsuario = { nombre: "Haruhi", edad: 20 };

  return (
    <View>
      <Usuario nombre={datosUsuario.nombre} edad={datosUsuario.edad} />
    </View>
  );
}
```

---

## ¿Qué es NestJS?

**NestJS** es un framework de Node.js que permite construir **APIs escalables** usando TypeScript.

* Modular y organizado
* Inyección de dependencias
* Integración con bases de datos mediante **TypeORM**

---

## ¿Qué es MySQL?

**MySQL** es un sistema de gestión de bases de datos relacional (RDBMS).

* Almacena datos en **tablas relacionadas**.
* Se conecta a NestJS usando `@nestjs/typeorm` y `mysql2`.

---

## Arquitectura del Proyecto

En el repositorio **proyecto**, la estructura principal es:

```
proyecto/
│── app/   # Cliente móvil con React Native + Expo + TS
│── api/   # Backend con NestJS + MySQL
```

* **Cliente (`app/`)** → se encarga de la interfaz y consumo de APIs.
* **Servidor (`api/`)** → maneja la lógica del negocio y la base de datos.

---

# 2. Configuración Inicial (Cliente)

## Requisitos previos

Antes de empezar, asegúrate de tener:

1. **Node.js** v18 o superior → [https://nodejs.org/](https://nodejs.org/)
2. **npm** o **yarn**
3. Editor de código: **VSCode**
4. Dispositivo físico o emulador para probar la app

---

## Crear proyecto cliente con Expo + TypeScript

```bash
npx create-expo-app@latest --template blank-typescript proyecto-app
cd proyecto-app
```

> La plantilla `blank-typescript` ya incluye TypeScript, por lo que **no es necesario instalarlo por separado**.

---

## Ejecutar la app en Expo

```bash
npx expo start -c
```

* Esto abrirá el **Metro Bundler** en el navegador.
* Escanea el **QR** con la app **Expo Go** para probar la app en tu dispositivo.

---

## Estructura inicial del proyecto cliente

```
proyecto-app/
│── App.tsx          # Componente raíz
│── app.json         # Configuración de Expo
│── package.json     # Dependencias y scripts
│── tsconfig.json    # Configuración de TypeScript
│── assets/          # Imágenes, fuentes y recursos
```

---

## Dependencias opcionales

* **Axios** → para consumir APIs:

```bash
npm install axios
```

* **React Navigation** → para manejar navegación entre pantallas (Stack, Tab, Drawer):

```bash
# Stack Navigator
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
# Drawer Navigator
npm install @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated react-native-worklets
# Tab Navigator
npm install @react-navigation/bottom-tabs
```

> Los ejemplos de cómo usar Stack, Tab o Drawer se documentarán en otra sección específica de navegación.

---

## Resumen del cliente

1. Proyecto creado con **Expo + TypeScript** (`proyecto-app`)
2. Dependencias opcionales instaladas: **Axios** y **React Navigation**
3. Estructura inicial lista para comenzar el desarrollo

---

# 3. Fundamentos de React Native con TypeScript

## JSX y TSX

* **JSX** es la sintaxis que permite escribir **componentes de React** usando una sintaxis similar a HTML.
* En **TypeScript**, los archivos de componentes se guardan como `.tsx`.

Ejemplo básico:

```tsx
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>¡Hola, mundo desde React Native con TypeScript!</Text>
    </View>
  );
}
```

---

## Componentes básicos

* **View** → contenedor que agrupa elementos.
* **Text** → muestra texto.
* **Button** → botón interactivo.
* **TextInput** → entrada de texto.

```tsx
import React from "react";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      <Text>Hola, este es un ejemplo de componentes básicos.</Text>
    </View>
  );
}
```

---

## Props tipadas

* Permiten pasar **información de un componente padre a un hijo** con **seguridad de tipos**.

```tsx
// Usuario.tsx
import React from "react";
import { View, Text } from "react-native";

type Props = {
  nombre: string;
  edad: number;
};

export default function Usuario({ nombre, edad }: Props) {
  return (
    <View>
      <Text>{`${nombre} tiene ${edad} años.`}</Text>
    </View>
  );
}
```

```tsx
// App.tsx
import React from "react";
import { View } from "react-native";
import Usuario from "./Usuario";

export default function App() {
  const datosUsuario = { nombre: "Haruhi", edad: 20 };

  return (
    <View>
      <Usuario nombre={datosUsuario.nombre} edad={datosUsuario.edad} />
    </View>
  );
}
```

---

## Arrow Functions

* Sintaxis abreviada para definir funciones:

```ts
// Función normal
function suma(a: number, b: number): number {
  return a + b;
}

// Arrow function
const sumaArrow = (a: number, b: number): number => a + b;

console.log(sumaArrow(5, 3)); // 8
```

* También se usan en **componentes** y callbacks:

```tsx
import React from "react";
import { Button } from "react-native";

export default function App() {
  return (
    <Button title="Click" onPress={() => console.log("Botón presionado")} />
  );
}
```

---

## Importaciones

* **Importación default** → importa el **valor principal** de un módulo:

```ts
import React from "react";
import Usuario from "./Usuario";
```

* **Importación named** → importa elementos específicos:

```ts
import { useState } from "react";
```

---

## useState

* `useState` es un **hook** que permite manejar **estado interno** en un componente funcional.
* Devuelve un **valor** y una **función para actualizarlo**.

Ejemplo:

```tsx
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0); // Estado inicial 0

  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}
```

---

Con esto la sección cubre **los fundamentos básicos hasta `useState`**, incluyendo:

* JSX/TSX
* Componentes básicos
* Props tipadas
* Arrow functions
* Importaciones (default y named)
* Uso de `useState` para manejar estado

---

## 3.1 Componente `View`

`View` es el **contenedor principal** en React Native, equivalente a un `div` en HTML. Se usa para agrupar elementos y aplicar estilos, controlando **layout y distribución**.

### Propiedades importantes:

| Propiedad            | Descripción                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `style`              | Define estilos usando `StyleSheet` o en línea.                                                                           |
| `flex`               | Define el espacio relativo que ocupa el elemento. `flex: 1` llena el contenedor.                                         |
| `flexDirection`      | Dirección de los hijos: `"row"` horizontal, `"column"` vertical (default).                                               |
| `justifyContent`     | Alinea elementos en el **eje principal**: `"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`, `"space-around"`. |
| `alignItems`         | Alinea elementos en el **eje transversal**: `"flex-start"`, `"center"`, `"flex-end"`, `"stretch"`.                       |
| `padding` / `margin` | Espacios internos y externos.                                                                                            |
| `backgroundColor`    | Color de fondo.                                                                                                          |
| `borderRadius`       | Bordes redondeados.                                                                                                      |
| `width` / `height`   | Tamaño del contenedor.                                                                                                   |

### Ejemplo práctico:

```tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  box1: {
    flex: 1,
    height: 100,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  box2: {
    flex: 2,
    height: 100,
    backgroundColor: "#00ff00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
```

---

## 3.2 Componente `Text`

`Text` se usa para mostrar **texto**.

### Propiedades importantes:

| Propiedad       | Descripción                                                        |
| --------------- | ------------------------------------------------------------------ |
| `style`         | Estilos de texto.                                                  |
| `fontSize`      | Tamaño de la letra.                                                |
| `color`         | Color del texto.                                                   |
| `fontWeight`    | Grosor: `"normal"`, `"bold"`, `"100-900"`.                         |
| `textAlign`     | `"left"`, `"center"`, `"right"`.                                   |
| `lineHeight`    | Altura de línea.                                                   |
| `numberOfLines` | Limita el número de líneas del texto.                              |
| `ellipsizeMode` | Comportamiento del texto truncado: `"tail"`, `"head"`, `"middle"`. |

### Ejemplo:

```tsx
<Text style={{ fontSize: 20, color: "#333", fontWeight: "bold", textAlign: "center" }}>
  Hola Mundo
</Text>
```

---

## 3.3 Componente `Image`

`Image` sirve para mostrar **imágenes locales o remotas**.

### Propiedades importantes:

| Propiedad       | Descripción                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `source`        | URL remota `{ uri: string }` o local `require('./img.png')`.             |
| `style`         | Tamaño (`width`, `height`), bordes (`borderRadius`) y margen.            |
| `resizeMode`    | Cómo ajustar la imagen: `"cover"`, `"contain"`, `"stretch"`, `"center"`. |
| `defaultSource` | Imagen de carga por defecto (solo iOS/Android).                          |

### Ejemplo:

```tsx
<Image
  source={{ uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" }}
  style={{ width: 100, height: 100, borderRadius: 50 }}
  resizeMode="cover"
/>
```

---

## 3.4 Componente `TextInput`

`TextInput` permite **ingresar texto**.

### Propiedades importantes:

| Propiedad         | Descripción                                                   |
| ----------------- | ------------------------------------------------------------- |
| `value`           | Valor del input.                                              |
| `onChangeText`    | Función que recibe el texto ingresado.                        |
| `placeholder`     | Texto guía.                                                   |
| `secureTextEntry` | Ocultar texto (password).                                     |
| `keyboardType`    | Tipo de teclado: `"default"`, `"numeric"`, `"email-address"`. |
| `style`           | Estilos: borde, padding, color, etc.                          |
| `multiline`       | Permite varias líneas de texto.                               |

### Ejemplo:

```tsx
<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Escribe aquí"
  style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5 }}
/>
```

---

## 3.5 Componente `ScrollView`

`ScrollView` permite **contenido desplazable** vertical u horizontalmente.

### Propiedades importantes:

| Propiedad                        | Descripción                        |
| -------------------------------- | ---------------------------------- |
| `horizontal`                     | `true` para scroll horizontal.     |
| `contentContainerStyle`          | Estilo del contenido interno.      |
| `showsVerticalScrollIndicator`   | Mostrar/ocultar scroll vertical.   |
| `showsHorizontalScrollIndicator` | Mostrar/ocultar scroll horizontal. |
| `pagingEnabled`                  | Scroll tipo “página” (snap).       |
| `bounces`                        | Rebote al llegar al final.         |
| `scrollEnabled`                  | Habilita/deshabilita scroll.       |

### Ejemplo:

```tsx
import { ScrollView, View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({ length: 20 }).map((_, i) => (
        <View key={i} style={styles.box}>
          <Text>Elemento {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  box: {
    width: 300,
    height: 80,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
```

---

## 3.6 Componente `SafeAreaView`

`SafeAreaView` asegura que **el contenido no se solape con notch o barras del dispositivo** (iPhone, Android).

### Ejemplo:

```tsx
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contenido seguro dentro del área visible</Text>
    </SafeAreaView>
  );
}
```

---

# 3.5 Navegaciones – Versiones Básica y Configurada

## 3.5.1 Stack Navigator

### a) Versión Básica

**StackNavigator.tsx**

```tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenI } from '../screens/ScreenI';
import { ScreenII } from '../screens/ScreenII';

export type RootStackParams = {
    ScreenI: undefined;
    ScreenII: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
    <Stack.Navigator initialRouteName="ScreenI">
        <Stack.Screen name="ScreenI" component={ScreenI} />
        <Stack.Screen name="ScreenII" component={ScreenII} />
    </Stack.Navigator>
);
```

**Screens**

```tsx
// ScreenI.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';

type Props = { navigation: StackNavigationProp<RootStackParams, 'ScreenI'> };

export const ScreenI = ({ navigation }: Props) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pantalla I</Text>
        <Button title="Ir a ScreenII" onPress={() => navigation.navigate('ScreenII')} />
    </View>
);

// ScreenII.tsx
import React from 'react';
import { View, Text } from 'react-native';

export const ScreenII = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pantalla II</Text>
    </View>
);
```

**Integración en App.tsx**

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigation/StackNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
```

---

### b) Versión Configurada

* Incluye: `headerStyle`, `cardStyle`, parámetros a pantalla, animaciones, estilos personalizados.
* Usa el ejemplo que ya se generó previamente con **`ScreenI`, `ScreenII`, `ScreenIII` y `UserScreen`**.

---

## 3.5.2 Drawer Navigator

### a) Versión Básica

**DrawerNavigator.tsx**

```tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenI } from '../screens/ScreenI';
import { ScreenII } from '../screens/ScreenII';

export type RootDrawerParams = {
    ScreenI: undefined;
    ScreenII: undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName="ScreenI">
        <Drawer.Screen name="ScreenI" component={ScreenI} />
        <Drawer.Screen name="ScreenII" component={ScreenII} />
    </Drawer.Navigator>
);

```

**Integración en App.tsx**

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}
```

---

### b) Versión Configurada

* Incluye: **DrawerMenu personalizado**, `drawerStyle`, `drawerPosition`, `drawerType`, integración de **StackNavigator** y demás screens.
* Usa el ejemplo que ya generaste con `DrawerMenu` y `useWindowDimensions`.

---

## 3.5.3 Bottom Tab Navigator

### a) Versión Básica

**BottomTabNavigator.tsx**

```tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenI } from '../screens/ScreenI';
import { ScreenII } from '../screens/ScreenII';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="ScreenI" component={ScreenI} />
        <Tab.Screen name="ScreenII" component={ScreenII} />
    </Tab.Navigator>
);
```

**Integración en App.tsx**

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './navigation/BottomTabNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    );
}
```

---

### b) Versión Configurada

* Incluye: `tabBarIcon`, `tabBarLabel`, `tabBarStyle`, colores activo/inactivo, headers ocultos.
* Usa el ejemplo previo con `HomeScreen`, `ProfileScreen` y `SettingsScreen` con **iconos de `react-native-vector-icons`**.

---

**Resumen de integración en App.tsx**:

```tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigation/StackNavigator';
import { DrawerNavigator } from './navigation/DrawerNavigator';
import { BottomTabNavigator } from './navigation/BottomTabNavigator';

export default function App() {
    return (
        <NavigationContainer>
            {/* Elegir uno para probar */}
            {/* <StackNavigator /> */}
            {/* <DrawerNavigator /> */}
            {/* <BottomTabNavigator /> */}
        </NavigationContainer>
    );
}
```

---

Si quieres, puedo generar un **diagrama visual y ejemplo de cómo combinar los tres navigators** (Stack dentro de Drawer, Tabs dentro de Drawer, etc.), listo para añadir en la documentación y mostrar la estructura completa de la app.

¿Quieres que haga eso ahora?


---

# 4. Consumo de APIs en React Native con TypeScript

## Instalación de Axios

Para realizar peticiones HTTP en React Native:

```bash
npm install axios
```

---

## Interfaces de TypeScript

Definimos las interfaces usadas para tipar los datos de la PokeAPI.

```ts
// interfaces/pokemonInterfaces.ts

export interface PokemonPaginateResponse {
    count: number;
    next: string;
    previous: null | string;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface NewPokemonList {
    id: number | string;
    name: string;
    picture: string;
}
```

> Estas interfaces permiten definir **cómo luce la respuesta de la API** y cómo queremos **transformar los datos** para la UI.

---

## Custom Hook: usePokemonPaginated

Encapsula toda la lógica de **petición, transformación de datos y estado**.

```ts
// hooks/usePokemonPaginated.ts
import { useState, useRef, useEffect } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { NewPokemonList, PokemonPaginateResponse, Result } from "../interfaces/pokemonInterfaces";

export const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [simplePokemonList, setSimplePokemonList] = useState<NewPokemonList[]>([]);
  const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon/?limit=20");

  const loadPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);
    nextPageUrl.current = response.data.next;
    mapPokemonList(response.data.results);
  };

  const mapPokemonList = (PokemonList: Result[]) => {
    const newPokemonList: NewPokemonList[] = PokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, picture };
    });

    setSimplePokemonList((prevList) => [...prevList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { isLoading, simplePokemonList, loadPokemons };
};
```

### Explicación:

1. `isLoading` → indica si se está cargando la API.
2. `simplePokemonList` → lista de Pokémon transformada lista para renderizar.
3. `nextPageUrl` → referencia que guarda la URL de la próxima página.
4. `loadPokemons()` → función que obtiene los datos de la API y llama a `mapPokemonList()`.
5. `mapPokemonList()` → transforma los datos crudos en `NewPokemonList` (id, nombre, imagen).
6. `useEffect()` → carga inicial al montar el componente.

---

## Uso del Hook en el Componente Principal

```tsx
// App.tsx
import React from "react";
import { View, Text, Button, FlatList, ActivityIndicator, Image } from "react-native";
import { usePokemonPaginated } from "./hooks/usePokemonPaginated";

export default function App() {
  const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <View style={{ padding: 20 }}>
      <Button title="Cargar más Pokémon" onPress={loadPokemons} />
      {isLoading && <ActivityIndicator size="large" color="#ff0000" />}
      
      <FlatList
        data={simplePokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
            <Image source={{ uri: item.picture }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
```

### Explicación:

* `Button` → permite cargar más Pokémon usando `loadPokemons()`.
* `ActivityIndicator` → muestra un loader mientras se cargan los datos.
* `FlatList` → renderiza la lista de Pokémon con imagen y nombre.
* `keyExtractor` → asegura que cada elemento de la lista tenga un **key único**.

---

## Beneficios de esta implementación

1. **Encapsula la lógica** en un hook reutilizable (`usePokemonPaginated`).
2. **Tipado seguro** con TypeScript usando `NewPokemonList` y `PokemonPaginateResponse`.
3. **Soporte para paginación** con `nextPageUrl` y carga incremental.
4. **Separación de responsabilidades**: API, estado y renderizado.
5. Fácil de mantener y escalar para agregar detalles o pantallas adicionales.

---


