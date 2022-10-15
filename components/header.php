<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Физтех</title>
    <link rel="stylesheet" href="css/header.css" />
    <link rel="stylesheet" href="css/about.css" />
    <link rel="stylesheet" href="css/programs.css" />
    <link rel="stylesheet" href="css/footer.css" />
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <header>
      <div class="container__header">
        <div class="header__inner">
          <div class="header__logo">
            <a href="index.php">
              <img src="img/лев.png" alt="Логотип ФТИ" />
            </a>
          </div>
        </div>
        <div class="sidebar">
          <nav class="sidebar__menu">
            <ul class="menu__header__menu">
              <li class="menu__item">
                <a href="index.php" class="nav__button <?= $header1 ?>">Об институте</a>
              </li>
              <li class="menu__item">
                <a href="programs.php" class="nav__button <?= $header2 ?>">Направления подготовки</a>
              </li>
              <li class="menu__item">
                <a href="#" class="nav__button <?= $header3 ?>">Союз студентов ФТИ</a>
              </li>
              <li class="menu__item">
                <a href="#" class="nav__button <?= $header4 ?>">Полезные контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="logo__mobile">
      <img src="img/лев.png" alt="Логотип ФТИ">
    </div>
    <div class="toggle__sidebar">
      <button class="menu__icon__wrapper">
        <div class="menu__icon"></div>
      </button>
    </div>
    
    <div class="sidebar__mobile">
      <nav class="sidebar__menu">
        <ul class="menu__header__menu">
          <li class="menu__item">
            <a href="index.php" class="nav__button <?= $header1 ?>">Об институте</a>
          </li>
          <li class="menu__item">
            <a href="programs.php" class="nav__button <?= $header2 ?>">Направления подготовки</a>
          </li>
          <li class="menu__item">
            <a href="#" class="nav__button <?= $header3 ?>">Союз студентов ФТИ</a>
          </li>
          <li class="menu__item">
            <a href="#" class="nav__button <?= $header4 ?>">Полезные контакты</a>
          </li>
        </ul>
      </nav>
    </div>




  
    