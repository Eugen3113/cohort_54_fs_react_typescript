import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { RANDOM_JOKE_URL } from "./data";
import { PageWrapper, Text, JokeContainer, Card, ErrorText } from "./styles";

function Homework_09() {
  const [joke, setJoke] = useState<undefined | string>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getJoke = async () => {
    setJoke(undefined);   // чистим State данные шутки,чтобы непоказывались одновременно шутку и ошибку
    setError(undefined);  // чистим State данные ошибки,чтобы непоказывались одновременно
    setIsDisabled(true);

    //=========================================================================
    //=========================================================================
    // Пример запроса через библиотеку axios
    try {
      const response = await axios.get(RANDOM_JOKE_URL);
      const data = response.data;
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      console.log(error);
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }

//     try { ... }
// Всё, что внутри блока try, выполняется. Если в процессе выполнения произойдёт ошибка (например, сервер недоступен),
//  управление переходит в catch.

// await axios.get(RANDOM_JOKE_URL);

// axios.get() → делает HTTP-запрос (GET) к API по адресу RANDOM_JOKE_URL.

// await → говорит JS дождаться выполнения запроса (промиса).

// response → объект ответа от сервера (содержит data, status, headers и т. д.).

// const data = response.data;
// В axios полезные данные лежат в свойстве .data (например, объект с шуткой).

// setJoke(${data.setup} ${data.punchline});
// В React меняем состояние joke, чтобы показать новую шутку (обычно API для шуток возвращает setup + punchline).

// catch (error: any) { ... }
// Сюда попадём, если запрос упал (например, нет интернета или ошибка сервера).

// console.log(error) → печатает ошибку.

// setError(error.message) → сохраняем текст ошибки в состояние, чтобы можно было вывести на экран.

// finally { ... }
// Этот блок выполнится всегда, даже если ошибка произошла.

// setIsDisabled(false); → например, снова включаем кнопку (которую перед запросом отключали,
//    чтобы пользователь не кликал 10 раз подряд).

// 🔹 Итог

// try → делаем запрос и обрабатываем успех.

// catch → ловим и обрабатываем ошибки.

// finally → выполняем «уборку» (восстанавливаем UI).


    //=======================================================================
    //=======================================================================

    // Пример запроса через метод fetch()
    // const response = await fetch(RANDOM_JOKE_URL);
    // // В данный момент в result будет леажть либо ошибка(promise венет статус rejected), либо успешно пришедшие данные(promise вернет статут fullfiled)
    // const result = await response.json();

    // if (response.ok) {
    //   // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
    //   setIsDisabled(false);
    //   setJoke(`${result.setup} ${result.punchline}`);
    // } else {
    //   // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
    //   setIsDisabled(false);
    //   setError("Some Network Error");
    // }
    //========================================================================
  };

  useEffect(() => {    //? useEffect имеет 2 аргумента. () => {} -функция , [] -и когда выпол-ся ф-я
    getJoke();
  }, []);             //? если массив пустой ,выполнится 1 раз

  return (
    <PageWrapper>
      <Card>
        <JokeContainer>
           {/* {<Text>{joke}</Text>} - выводим шутку в карточку */}
          {!!joke && <Text>{joke}</Text>} 
           {/* если !!joke && = false, то <Text>{joke}</Text> =непоказывает */}
           
          {/* {<ErrorText>{error}</ErrorText>}  - выводим ошибку в карточку */}
          {!!error && <ErrorText>{error}</ErrorText>}
        </JokeContainer>
        <Button disabled={isDisabled} name="Get new joke" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;


// Создайте компоент Homework_09. В нем вам нужно будет сделать следующее:

// при монтировании компонента Homework_09, сделайте GET запрос на api сервис: https://official-joke-api.appspot.com/random_joke
// Если запрос выполниться успешно, то положите данные со случайными шутками в state и отобразите их в карточке.

// Если запрос выполнится с ошибкой, создайте стейт с ошибкой и положите туда строку "Some Network Error"

// добавьте на страницу кнопку, при клике на которую выполняется новый запрос на https://official-joke-api.appspot.com/random_joke и при ответе обновляется стейт с ошибкой или стейтом с полученными данными
// стили на ваши усмотрение