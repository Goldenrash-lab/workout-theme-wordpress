 <?php
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'style', get_template_directory_uri().'/assets/css/style.css' );
	wp_enqueue_style( 'fonts', "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" );
	wp_enqueue_style( 'fonts-gstatiс', "https://fonts.gstatic.com" );
	wp_enqueue_style( 'fonts-googleapis', "https://fonts.googleapis.com" );
    
    
    wp_deregister_script('jquery-core');
	wp_deregister_script('jquery');
    
	// регистрируем
	wp_register_script( 'jquery-core', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, null, true );
	wp_register_script( 'jquery', false, array('jquery-core'), null, true );
    
	// подключаем
	wp_enqueue_script( 'jquery' );
    

    wp_enqueue_script( 'loadmore', get_template_directory_uri() . '/assets/js/loadmore.js', array('jquery'), null, true );
    wp_localize_script( 'loadmore', 'my_ajax_obj', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );
    wp_localize_script( 'loadmore', 'ajax_obj', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js' );

});


add_theme_support('title-tag');
add_theme_support('custom-logo');
add_theme_support('post-thumbnails');

function add_class( $content ) {

    if ( in_category('our team') ) {
        
        $content = str_replace( '<p>', '<p class="team__item-text">', $content );

        $content = str_replace( '<h2 class="wp-block-heading">', '<h5 class="team__item-subtitle">', $content );
    }else{
         $content = str_replace( '<p>', '<p class="benefits__item-text">', $content );

    }
    return $content;
}
add_filter( 'the_content', 'add_class' );


add_action('wp_ajax_load_more_posts', 'load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts');


add_action('wp_ajax_load_more_posts_team', 'load_more_posts_team');
add_action('wp_ajax_nopriv_load_more_posts_team', 'load_more_posts_team');

function load_more_posts() {
    $count = $_POST['count']; // Получаем текущее количество загружаемых постов
    $args = array(
        'numberposts' => 3, // Количество дополнительных постов для загрузки
        'category'    => 2,
        'offset'      => $count // Смещение для получения следующих постов
    );

    $additional_posts = get_posts($args);
    if ($additional_posts) {
        global $post;
        foreach ($additional_posts as $post) {
            setup_postdata($post);
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
        }
    }

    wp_die(); 
}
function load_more_posts_team() {
    $countTeam = $_POST['countTeam']; 
    $args = array(
        'numberposts' => 3, 
        'category'    => 3,
        'offset'      => $countTeam 
    );

    $additional_posts = get_posts($args);
    if ($additional_posts) {
        global $post;
        foreach ($additional_posts as $post) {
            setup_postdata($post);
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
        }
    }

    wp_die(); 
}

// show_admin_bar(false);
?>