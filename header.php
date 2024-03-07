<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   


    <?php wp_head() ?>

    <title>Workout</title>
  </head>
  <body>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <a href="/" class="header__logo">
            <p class="logo__left">Work<span class="logo__right">out</span></p>
            <p class="logo__down">Believe in yourself</p>
          </a>

          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <a class="header__nav-link" href="#">Latest training</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="#">Our team</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="#">Discover</a>
              </li>
              <li class="header__nav-item">
                <a href="#" class="header__btn-login" type="button">LOGIN</a>
                <a href="#" class="header__btn-signin" type="button">
                  SIGN IN
                </a>
              </li>
            </ul>
          </nav>
          <button class="header__burger-wrapper">
            <span class="header__burger"></span>
          </button>
        </div>
      </div>
    </header>