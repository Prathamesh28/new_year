import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const movies = [
    "Путешествие к Рождественской звезде (2012)",
    "Когда Санта упал на Землю (2011)",
    "Новогодние приключения Маши и Вити (1975)",
    "Хроники Нарнии (все части, начиная с 2005)",
    "Клаус (мультфильм, 2019)",
    "Гринч (все части) + мультфильм (2018)",
    "Санта Клаус с Тимом Алленом (1994)",
    "Хроники Рождества и XP2 (2018 и 2020)",
    "Мальчик по имени Рождество (2021)",
    "Замок к Рождеству (2021)",
    "Один дома (все части, начиная с 1990)",
    "Ёлки (все части, начиная с 2011)",
    "Рождественская история (2009)",
    "Гарри Поттер (все части, начиная с 2001)"
  ];

  const [checked, setChecked] = useState(Array(movies.length).fill(false));

  const toggleCheckbox = (index) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
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
      <div id="movie-list-container" className="movie-list-container">
        <h1 className="title">Чек-лист Новогодних фильмов</h1>
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <li key={index}>
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={checked[index]}
                  onChange={() => toggleCheckbox(index)}
                />
                <span className="checkmark"></span>
                {movie}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button className="save-button" onClick={saveAsImage}>
        Сохранить как изображение
      </button>
    </div>
  );
}

export default App;
