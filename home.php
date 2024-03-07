<?php
/*
Template Name: home
*/
?>
<?php get_header()?>
    <div class="menu">
      <div class="menu__overlay"></div>
      <ul class="menu__list">
        <?php wp_nav_menu() ?>
        <!-- <li class="menu__item"><a href="#">EXERCICES</a></li>
        <li class="menu__item"><a href="#">COMMUNITY</a></li>
        <li class="menu__item"><a href="#">PRICING</a></li>
        <li class="menu__item"><a href="#">ABOUT US</a></li> -->
        <li class="menu__item">
          <a href="#" class="header__btn-login" type="button">LOGIN</a>
          <a href="#" class="header__btn-signin" type="button">SIGN IN</a>
        </li>
      </ul>
    </div>
    <main>
      <section class="hero">
        <div class="container">
          <div class="hero__inner">
            <div class="hero__left">
              <h2 class="hero__left-label">4 week</h2>
              <p class="hero__left-subtitle">Workout Plan</p>
              <p class="hero__left-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas fringilla, lacus eget consequat tincidunt, lectus ex
                bibendum libero, eget iaculis quam arcu quis mauris. Donec ex
                neque, egestas in faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Maecenas
              </p>
              <div class="hero__left-box">
                <button class="hero__left-btn">TRY FOR FREE</button
                ><button class="hero__left-btn">TRY FOR FREE</button>
              </div>
            </div>
            <div class="hero__right">
              <picture>
                <source
                  media="(min-width:692px )"
                  srcset="<?php bloginfo('template_url') ?>/assets/images/woman.png 1x, <?php bloginfo('template_url') ?>/assets/images/woman@2x.png 2x"
                />
                <source
                  media="(max-width:691px )"
                  srcset="<?php bloginfo('template_url') ?>/assets/images/woman-mob.png 1x, <?php bloginfo('template_url') ?>/assets/images/woman-mob@2x.png 2x"
                />
                <img
                  class="hero__right-img"
                  src="<?php bloginfo('template_url') ?>/assets/images/woman.png"
                  alt="woman"
                />
              </picture>
              <ul class="hero__right-list">
                <li class="hero__right-item">
                  <h3 class="hero__right-label">GET INSPIRED</h3>
                  <p class="hero__right-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas fringil. lacus eget consequat tincidunt, lectus ex.
                  </p>
                  <a class="hero__right-link" href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="20"
                        cy="19.6396"
                        rx="20"
                        ry="19.6396"
                        fill="#F24B88"
                      />
                      <path
                        d="M14.4649 23.4745C14.1693 23.7647 14.1693 24.2353 14.4649 24.5255C14.7604 24.8157 15.2396 24.8157 15.5351 24.5255L14.4649 23.4745ZM24.9492 14.9732C24.9492 14.5628 24.6104 14.2301 24.1924 14.2301L17.3813 14.2301C16.9633 14.2301 16.6245 14.5628 16.6245 14.9732C16.6245 15.3837 16.9633 15.7164 17.3813 15.7164H23.4356V21.6616C23.4356 22.072 23.7744 22.4048 24.1924 22.4048C24.6104 22.4048 24.9492 22.072 24.9492 21.6616L24.9492 14.9732ZM15.5351 24.5255L24.7275 15.4987L23.6573 14.4478L14.4649 23.4745L15.5351 24.5255Z"
                        fill="#F2F2F2"
                      />
                    </svg>

                    Explore More</a
                  >
                </li>
                <li class="hero__right-item">
                  <h3 class="hero__right-label">CHALLENGE YOURSELF</h3>
                  <p class="hero__right-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas fringil. lacus eget consequat tincidunt, lectus ex.
                  </p>
                  <a class="hero__right-link" href="#">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse
                        cx="20"
                        cy="19.6396"
                        rx="20"
                        ry="19.6396"
                        fill="#F24B88"
                      />
                      <path
                        d="M14.4649 23.4745C14.1693 23.7647 14.1693 24.2353 14.4649 24.5255C14.7604 24.8157 15.2396 24.8157 15.5351 24.5255L14.4649 23.4745ZM24.9492 14.9732C24.9492 14.5628 24.6104 14.2301 24.1924 14.2301L17.3813 14.2301C16.9633 14.2301 16.6245 14.5628 16.6245 14.9732C16.6245 15.3837 16.9633 15.7164 17.3813 15.7164H23.4356V21.6616C23.4356 22.072 23.7744 22.4048 24.1924 22.4048C24.6104 22.4048 24.9492 22.072 24.9492 21.6616L24.9492 14.9732ZM15.5351 24.5255L24.7275 15.4987L23.6573 14.4478L14.4649 23.4745L15.5351 24.5255Z"
                        fill="#F2F2F2"
                      />
                    </svg>

                    Explore More</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="benefits">
        <div class="container">
          <div class="benefits__inner">
            <div class="benefits__upper">
              <h2 class="benefits__label label">LATEST Training</h2>
              <p class="benefits__more">See More here</p>
            </div>
            <ul class="benefits__list">
                    <?php
                    global $post;

                   

                    $myposts = get_posts([
                    'numberposts' => 3,
                    'category'    => 2
                    ]);

                    if( $myposts ){
                    foreach( $myposts as $post ){
                    setup_postdata( $post );
                    ?>
                    <li class="benefits__item">
                    <?php the_post_thumbnail(
                        array(368,209),
                        array(
                            'class' => "benefits__img",
                            
                        )); 
                    ?>
                    <h4 class="benefits__item-label"><?php the_title() ?></h4>
                    <p class="benefits__item-text"><?php the_content(); ?></p>
                    <button class="benefits__item-btn btn">SEE MORE</button>
                    </li>
                    <?php
                    }   } wp_reset_postdata(); 

?>
            </ul>

                    <button class="btn-loadmore btn" type="button">LOAD MORE</button>
          </div>
        </div>
      </section>
      <section class="team">
        <div class="container">
          <div class="team__inner">
            <div class="team__label-wrapper">
              <h2 class="team__label label">Our Team</h2>
            </div>
            <ul class="team__list">
                    <?php
                            global $post;

                            $myposts = get_posts([
                            'numberposts' => 4,
                            'category'    => 3
                            ]);

                            if( $myposts ){
                            foreach( $myposts as $post ){
                            setup_postdata( $post );
                            ?>
                            <li class="team__item">

                            <?php the_post_thumbnail(
                            array(261,174),
                            array(
                            'class' => "team__item-img",

                            )); 
                            ?>


                            <div class="team__item-box">
                            <h4 class="team__item-label"><?php the_title(); ?></h4>

                            <?php the_content(); ?>

                            <button class="team__item-btn btn">See More</button>
                            </div>
                            </li>
                    <?php
                    }   } wp_reset_postdata(); 

                    ?>
            </ul>
            <button class="team__item-btn-mob btn">See More</button>
            <button class="btn-loadmore-team btn" type="button">LOAD MORE</button>
          </div>
        </div>
      </section>
      <section class="about">
        <div class="container">
          <div class="about__inner">
            <h2 class="about__title">DISCOVER YOUR POTENCIAL</h2>
            <p class="about__subtitle">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum. text of the printing and typesetting
            </p>
            <div class="about__btnbox">
              <button class="about__btn-view">VIEW PLANS</button
              ><button class="about__btn-learn">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>
    </main>
   <?php get_footer()?>