<?php
/**
 * What Page? Site Front Page
 * Will be a simple landing page; layout cruft dropped.
 */
session_start();

 get_template_part('templates/head');
 get_template_part('templates/header');
?>

<body <?php body_class(); ?>>

<br/>
<br/>
<br/>

<?php include custom_template_path(); /* front-page.php */ ?>

<?php get_template_part('templates/footer'); ?>

<?php wp_footer();
// check for session variable
if( $_SESSION[visited] != null && $_SESSION[visited] != "" ) {
 ?>
  <script type="text/javascript">
    jQuery(function ($) {
      $(window).load(function() {
        var mainTL = new TimelineLite()
          .add( initMainMenu );
          //.call( initPortfolio )
        initPortfolio();
//          .to( '.symbol_tripl3infLogo', 2, {autoAlpha:1}, 's1')
//          .from( '.symbol_tripl3infLogo', 1, {x:'-=300px'}, 's1')
//          .to( '#aaaLogo_footer', 2, {autoAlpha:1}, 's2' )
//          .from( '#aaaLogo_footer', 1, {x:'+=300px'}, 's2')
      });
    });
  </script>

  <?php
}
// if session variable not set, set it
else {
  $_SESSION["visited"] = "true";
  ?>

<!--  <script type="text/javascript">-->
<!--    jQuery(function ($) {-->
<!--      $(window).load(function() {-->
<!--        var mainTL = new TimelineLite()-->
<!--          .add(animateLogo_tripl3inf())-->
<!--          .add(animate_pwrdBy(), 6.5)-->
<!--          .add(animateLogo_aaa(), 9)-->
<!--          .add(initMainMenu())-->
<!--          .to( '.symbol_tripl3infLogo', 2, {autoAlpha:1}, 's1')-->
<!--          .from( '.symbol_tripl3infLogo', 1, {x:'-=300px'}, 's1')-->
<!--          .to( '#aaaLogo_footer', 2, {autoAlpha:1}, 's2' )-->
<!--          .from( '#aaaLogo_footer', 1, {x:'+=300px'}, 's2')-->
<!--      });-->
<!--    });-->
<!--  </script>-->
<?php
}
?>


</body>
</html>
