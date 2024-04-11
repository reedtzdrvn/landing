import "./header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="NavBar flex  h-[65px] bg-[#465373]">
          <div className="container text-[#E4E9EF] items-center flex justify-start gap-10 px-[64px]">
            <a className="cursor-pointer" href="#map">
              Карта
            </a>
            <a className="cursor-pointer" href="#form">
              Форма
            </a>
          </div>
        </div>
        <div className="Header_body flex justify-center items-center px-[128px]">
          <div className="container text-[#E4E9EF] relative">
            <div className="title_text font-bold text-3xl mb-10 text-justify">
              Анализ и прогноз стоимости квартир в Москве на вторичном рынке
            </div>
            <div className="flex justify-between items-end">
              <div className="lolkek4 w-[50%]">
                В ходе проекта мы проанализировали стоимость квартир в Москве на
                вторичном рынке, используя методы машинного обучения. Объектом анализа являлась сборная
                статистика о стоимости квартир, а предметом являлось построение
                эконометрической модели. Как результат мы видим
                лендинг-страницу, доступную абсолютно каждому и бота в
                телеграме.{" "}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
