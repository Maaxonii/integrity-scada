import React from "react";

const EntegrityPage = function () {
  return (
    <div class="page">
    <header class="page-header">
      <div class="page-header__top">
        <div class="page-header__top-wrapper">
          <p class="page-header__slogan">
            <a href="#" class="page-header__logo">
              <img src="img/logo-elesy.svg" width="67" height="40" alt="">
            </a>
            Автоматизация технологических процессов
          </p>
          <a href="" class="page-header__phone">
            +7 (3822) 601-012
          </a>
        </div>
      </div>
      <div class="page-header__nav page-header__nav--closed">
        <div class="page-header__nav-top">
          <button class="page-header__nav-toggle">
            <span class="visually-hidden">
              Открыть меню
            </span>
          </button>
        </div>
        <div class="page-header__nav-wrapper">
          <ul class="main-nav">
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">
                Продукты
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#" class="main-nav__link">
                Поддержка
              </a>
            </li>
            <li class="main-nav__item main-nav__item--active">
              <a href="#" class="main-nav__link">
                Контакты
              </a>
            </li>
          </ul>
          <div class="user-nav">
            <div class="user-nav__item">
              <a href="#" class="user-nav__link user-nav__link--login">
                Вход
              </a>
            </div>
            <div class="user-nav__item">
              <a href="#" class="user-nav__link user-nav__link--registration">
                Регистрация
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="page-content">
      <div class="page-content__wrapper">
        <div class="side-menu">
          <ul class="side-menu__list">
            <li class="side-menu__item">
              <a href="" class="side-menu__link">
                Состав Integrity SCADA
              </a>
            </li>
            <li class="side-menu__item">
              <a href="licensing.html" class="side-menu__link">
                Политика лицензирования
              </a>
            </li>
            <li class="side-menu__item">
              <a href="system-requirements.html" class="side-menu__link">
                Аппаратные системные требования
              </a>
            </li>
            <li class="side-menu__item">
              <a href="demo.html" class="side-menu__link">
                Запрос пробной версии
              </a>
            </li>
          </ul>
        </div>
        <div class="text-content">
          <div class="text-content__section">
            <h1 class="text-content__title">Подробнее о Integrity SCADA</h1>
            <p class="text-content__paragraph">
              <b>Integrity SCADA</b>&nbsp;&mdash; высокотехнологичный кроссплатформенный программно-инструментальный
              комплекс для реализации автоматизированных систем управления технологическими процессами.
            </p>
            <p class="text-content__paragraph">
              <b>Integrity SCADA</b> не&nbsp;привязан к&nbsp;конкретному типу производства, и&nbsp;может быть применим
              на&nbsp;предприятиях различных отраслей промышленности. Integrity SCADA имеет модульную структуру, что
              позволяет реализовывать проекты любого масштаба, только из&nbsp;необходимых функциональных компонентов
              в&nbsp;зависимости от&nbsp;целей проекта автоматизации.
            </p>
            <p class="text-content__paragraph">
              Среда разработки Integrity SCADA поставляется бесплатно. Оплачиваются только исполнительные (runtime)
              лицензии, с&nbsp;выбором нужного количества доступных тегов и&nbsp;набора компонентов системы.
            </p>
            <p class="text-content__paragraph">
              Техническая поддержка на&nbsp;русском языке (&laquo;горячая линия&raquo; связи). Наличие обучающих
              материалов
              и&nbsp;курсов по&nbsp;разработке и&nbsp;администрированию Integrity SCADA в&nbsp;лицензированном
              образовательном центре
              компании.
            </p>
          </div>
          <div class="text-content__section">
            <h2 class="text-content__subtitle">
              Integrity SCADA – полноценный функционал для автоматизации
            </h2>
            <ul class="text-content__list">
              <li class="text-content__list-item">
                визуализация технологических процессов в наглядном виде: мнемосхемы с функциями управления, графики,
                таблицы, журналы
                событий;
              </li>
              <li class="text-content__list-item">
                анализ и контроль технологических процессов, информирование о возникающих событиях и авариях;
              </li>
              <li class="text-content__list-item">
                диспетчерское и автоматическое управление;
              </li>
              <li class="text-content__list-item">
                надежный сбор и логико-математическая обработка данных в реальном времени;
              </li>
              <li class="text-content__list-item">
                сохранение и предоставление полной истории работы производства;
              </li>
              <li class="text-content__list-item">
                интеграция со сторонними системами по защищенным промышленным протоколам.
              </li>
            </ul>

          </div>
          <div class="text-content__section">
            <h2 class="text-content__subtitle">Базовые функции Integrity SCADA</h2>
            <ul class="text-content__list">
              <li class="text-content__list-item">
                двухстороннее взаимодействие с устройствами и системами по промышленным протоколам ГОСТ Р МЭК 60870-5
                -101, ГОСТ Р МЭК
                60870-5 -104, ModBus TCP/IP, а также по спецификации OPC UA;

              </li>
              <li class="text-content__list-item">
                предоставление доступа ко всей технологической информации по интерфейсам стандарта OPC UA;
              </li>
              <li class="text-content__list-item">
                уведомление пользователей о событиях и авариях;
              </li>
              <li class="text-content__list-item">
                получение производственных данных путем преобразования технологических данных (математическую обработку
                технологической
                информации);
              </li>
              <li class="text-content__list-item">
                хранение истории производственных и технологических данных, а также истории событий и аварий;
              </li>
              <li class="text-content__list-item">
                схематическое, графическое и текстово-табличное отображение значений технологических и производственных
                показателей;
              </li>
              <li class="text-content__list-item">
                генерация, хранение и просмотр отчетов о состоянии технологического или производственного процесса;
              </li>
              <li class="text-content__list-item">
                обмен данными со сторонними системами;
              </li>
              <li class="text-content__list-item">
                межуровневый транспорт данных (в рамках территориально распределенного предприятия);
              </li>
              <li class="text-content__list-item">
                организация единого информационного пространства технологических данных территориально распределенного
                предприятия путем
                их объединения в единой транспортной системе.
              </li>
            </ul>
          </div>
          <div class="text-content__section">
            <h2 class="text-content__subtitle">
              Гибкая и быстрая разработка SCADA-систем
            </h2>
            <ul class="text-content__list">
              <li class="text-content__list-item">
                <p>Насыщенные инструменты для разработки визуализации:</p>
                <ul class="text-content__sublist">
                  <li class="text-content__sublist-item">
                    Создание мнемосхем с различным уровнем детализации с функциями
                    управления
                  </li>
                  <li class="text-content__sublist-item">
                    Добавление графическим объектам динамик, анимации и функций

                  </li>
                  <li class="text-content__sublist-item">
                    Библиотеки готовых типовых графических объектов, с возможностью
                    сохранению собственных объектов
                  </li>
                </ul>
              </li>
              <li class="text-content__list-item">
                <p>Открытость и совместимость системы:</p>
                <ul class="text-content__sublist">
                  <li class="text-content__sublist-item">
                    Поддержка протоколов ГОСТ Р МЭК 60870-5-101/104, ModbusTCP/IP , SNMP, OPC UA и др.
                  </li>
                  <li class="text-content__sublist-item">
                    Возможность разработки алгоритмов контроля и управления тех. процессами с помощью встроенных языков
                    программирования
                    JavaScript
                  </li>
                </ul>
              </li>
              <li class="text-content__list-item">
                Минимальные требования к уровню знаний разработчика, за счет интерфейсов конфигурирования, не требующих
                навыков
                программирования
              </li>
              <li class="text-content__list-item">
                Реализация дополнительной логики системы, за счет использования функций математической и логической
                обработки
                данных
              </li>
              <li class="text-content__list-item">
                Полная техническая документация на русском языке
              </li>
              <li class="text-content__list-item">
                Возможность наращивания мощностей и функционала системы в будущем, за счет расширения приобретённой
                лицензии
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <footer class="page-footer">
      <div class="page-footer__wrapper">
        <div class="page-footer__nav">
          <h2 class="page-footer__title page-footer__nav-title">
            Поддержка
          </h2>
          <ul class="page-footer__nav-list">
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Документы
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Видеоуроки
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Тех.поддержка
              </a>
            </li>
            <li class="page-footer__nav-item">
              <a href="" class="page-footer__nav-link">
                Заявка на обучение
              </a>
            </li>
          </ul>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Головной оффис
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            elesy@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-000
          </a>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Техническая поддержка
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            support@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 60-10-60
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
          </a>
        </div>
        <div class="page-footer__contacts">
          <h2 class="page-footer__title">
            Коммерческий отдел
          </h2>
          <a href="mailto:" class="page-footer__contacts-item page-footer__contacts-item--mail">
            scada@elesy.ru
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--tel">
            +7 (3822) 601-012
          </a>
          <a href="tel:+" class="page-footer__contacts-item page-footer__contacts-item--fax">
            +7 (3822) 601-001
          </a>
        </div>
      </div>
      <p class="page-footer__copyright">
        (с) 2022 Все права защищены
      </p>
    </footer>
  </div>
  );
};

export default EntegrityPage;
