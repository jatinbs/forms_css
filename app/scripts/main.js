'use strict';

jQuery(document).ready(function() {

  jQuery('input, select, textarea').focus(function() {
    jQuery(this).closest('.form-group').addClass('focused');
  }).blur(function() {
    jQuery(this).closest('.form-group').removeClass('focused');
  });

});
