import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const movies = [
    "Реальная любовь (Real LOVE)",
    "Очень плохие мамочки 2",
    "Ирония судьбы, или С легким паром!, пародия Самоирония смудьбы",
    "Операция «Ы» и другие приключения Шурика (1965)",
    "Гарри Поттер и философский камень (2001) и другие части",
    "Незабываемое Рождество",
    "Пара на праздники",
    "Отпуск по обмену",
    "Хоббит: Нежданное путешествие (2012)",
    "Залечь на дно в Брюгге",
    "Крепкий орешек (1988)",
    "Один дома (1990), Один дома – 2: затерянный в Нью-Йорке (1992)",
    "Клаус мультфильм (2019)",
    "Елки (первые 5-6 частей, дальше фуфло🤣)",
    "Пока ты спал (1995)",
    "Мистер Джангл и Рождественское путешествие",
    "Тариф Новогодний",
    "С Новым годом, мамы; С Новым годом, мамы 3",
    "Замерзшая из Майами",
    "Гринч - похититель Рождества - фильм с Джимом Кэрри и старый мультик",
    "Секретная служба Санта Клауса - мультфильм",
    "Мальчик по имени Рождество",
    "Мистер Джангл и Рождественское путешествие",
    "Зима в Простоквашино - мультфильм",
    "Двенадцать месяцев - мультфильм",
    "Бедная Саша",
    "Константин - повелитель тьмы",
    "7 психопатов",
    "Иван Васильевич меняет профессию",
    "Серебряные коньки",
    "Щелкунчик и мышиный король - мультфильм (2004)",
    "Хроники Нарнии (1 часть)",
    "Почему он",
    "Семьянин",
    "Интуиция",
    "Рождество на двоих",
    "Дневник Бриджит Джонс (старые части)",
    "Любите Куперов",
    "Хранители снов - мультфильм",
    "Рождественская история Микки - короткометражный мультфильм (1983)",
    "Здравствуй, папа, Новый год! и Здравствуй, папа, Новый год! 2"
];


  const [checked, setChecked] = useState(new Array(movies.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const saveAsImage = () => {
    const element = document.getElementById("background");
    html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "christmas_movie_list.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="background" id="background">
      <h1 className="title1">С Новым годом от Разноцветных цыплят</h1>
      <div className="movie-list-container">
        <img src="./IMG4.png" alt="Decoration" className="corner-image-1" />
        <img src="./IMG5.png" alt="Decoration" className="corner-image-2" />
        <img src="./IMG6.png" alt="Decoration" className="corner-image-3" />
        <img src="./IMG7.png" alt="Decoration" className="corner-image-4" />
        <img src="./IMG8.png" alt="Decoration" className="corner-image-5" />
        <img src="./IMG9.png" alt="Decoration" className="corner-image-6" />
        <img src="./IMG10.png" alt="Decoration" className="corner-image-7" />


        <h1 className="title">Ваш контрольный список рождественских фильмов</h1>
        <div className="movie-list-columns">
          {movies.map((movie, index) => (
            <label key={index} className="custom-checkbox">
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className="checkmark"></span>
              {movie}
            </label>
          ))}
        </div>
        <div className="save-button-div">
        <button className="save-button" onClick={saveAsImage}>
          Save Checklist
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
