**Читать на других языках: [Русский](../README.md),
[Українська](./README.ua.md), [English](./README.en.md).**

# Redux. Redux Toolkit. RTK Query.

## Застосунок - "Список справ".

Додаток для створення, зміни та видалення списку справ (завдань).

### 1. Бекенд `mockapi.io`.

Для бекенду використовується [mockapi.io](https://mockapi.io/). Необхідно:

- зареєструватися, використовуючи свій акаунт _GitHub_.
- створити ресурс **_todos_** щоб отримати ендпоінт `/todos`.
- використати конструктор ресурсу й описати об'єкт **todo** як на ілюстрації
  нижче.

<details>
<summary>Переглянути приклад &nbsp;&#10552;</summary>

![mockapi API](./images/api.jpg)

</details>

### 2. Налаштування RTK Query.

Посилання на документацію по роботі з
[Redux Toolkit](https://redux-toolkit.js.org/tutorials/quick-start#usage-summary)
і [RTK Query](https://redux-toolkit.js.org/rtk-query/overview#whats-included).

- Визначити основні ендпоінти та схеми даних для ваших запитів. Після створення
  ресурсу **_todos_**, основні ендпоінти для _CRUD_ операцій будуть як на
  ілюстрації нижче.

<details>
<summary>Переглянути приклад &nbsp;&#10552;</summary>

![todos endpoints](./images/endpoints.jpg)

</details><br>

- Створити slice в Redux Toolkit для управління даними, отриманими з API за
  допомогою `createApi`.

```react
import { createApi } from '@reduxjs/toolkit/query/react';
```

- Створити store, додати в нього slice і middleware.

```react
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
	// Add the generated reducer as a specific top-level slice
	},
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    todoApi.middleware,
  ],
})
```

- Огорнути додаток провайдером, додавши пропсом store.

```react
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

### 3. Створення UI.

Для створення користувацького інтерфейсу використовується фреймворк
[Material UI](https://mui.com/material-ui/getting-started/installation/#default-installation).
Потрібно реалізувати можливість додавання нових завдань, видалення завдань,
зміни завдань і позначки завдань як виконаних.
