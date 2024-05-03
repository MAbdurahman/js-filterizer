/**
 * js-filterizer-scripts
 * @author: Mahdi Abdurrahman
 * @version 1.0.0
 * @date: 3 Mar 2024
 */

$(function () {
   /*===============================================================
           preloader
    ==================================================================*/
   $(window).on('load', function () {
      // makes sure that whole site is loaded
      $('#preloader__gif, #preloader').fadeOut(5000, function () {

      });

   });

   /*===============================================================
          filterizer section
   ==================================================================*/
   /****** add and remove active class from filterizer filter buttons ******/
   /*$('#filterizer__filters > .js-filter').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
   });*/
   const filter_link_items = document.querySelectorAll('.js-filter');

   /**
    * @description - removes the active class from the filter link items
    */
   function removeFilterLinkItemsActiveClass() {
      filter_link_items.forEach(filter_link_item => {
         filter_link_item.classList.remove('active');
      })
   }

   /**
    * @description - add the active class to the filter link item that was clicked
    * @param e - the event of the click
    */
   function addFilterLinkItemsActiveClass(e) {
      removeFilterLinkItemsActiveClass();
      e.target.classList.add('active');
   }

   filter_link_items.forEach(filter_link_item => {
      filter_link_item.addEventListener('click', addFilterLinkItemsActiveClass);
   });


});