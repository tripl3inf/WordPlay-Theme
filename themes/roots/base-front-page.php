<?php
/**
 * What Page? Site Front Page
 * Will be a simple landing page; layout cruft dropped.
 */
?>

<?php get_template_part('templates/head'); ?>
<body <?php body_class(); ?>>



  <?php include roots_template_path(); /* front-page.php */ ?>

  <?php get_template_part('templates/footer'); ?>

  <?php wp_footer(); ?>
</body>
</html>