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

   /************************* filterizer cards *************************/
   const filterizr_options = {
      animationDuration: 0.5, // in seconds
      callbacks: {
         onFilteringStart: function () {
         }, onFilteringEnd: function () {
         }, onShufflingStart: function () {
         }, onShufflingEnd: function () {
         }, onSortingStart: function () {
         }, onSortingEnd: function () {
         }
      }, controlsSelector: '', // Selector for custom controls
      delay: 0, // Transition delay in ms
      delayMode: 'progressive', // 'progressive' or 'alternate'
      easing: 'ease-out', filter: 'all', // Initial filter
      filterOutCss: { // Filtering out animation
         opacity: 0, transform: 'scale(0.5)'
      }, filterInCss: { // Filtering in animation
         opacity: 0, transform: 'scale(1)'
      }, gridItemsSelector: '.filtr-container', gutterPixels: 0, // Items spacing in pixels
      layout: 'sameSize', // See layouts
      multifilterLogicalOperator: 'or', searchTerm: '', setupControls: true, // Should be false if controlsSelector is set
      spinner: { // Configuration for built-in spinner
         enabled: false, fillColor: '#2184D0', styles: {
            height: '75px', margin: '0 auto', width: '75px', 'z-index': 2,
         },
      },
   }

   const filterizr = $('.filtr-container').filterizr({});

});