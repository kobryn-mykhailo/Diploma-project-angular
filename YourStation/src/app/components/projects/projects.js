'use strict'

ysApp.service('scrollAndResizeListener', function($window, $document, $timeout) {
    var id = 0,
        listeners = {},
        scrollTimeoutId,
        resizeTimeoutId;

    function invokeListeners() {
      var clientHeight = $document[0].documentElement.clientHeight,
          clientWidth = $document[0].documentElement.clientWidth;

      for (var key in listeners) {
        if (listeners.hasOwnProperty(key)) {
          listeners[key](clientHeight, clientWidth); // call listener with given arguments
        }
      }
    }


    $window.addEventListener('scroll', function() {
      // cancel previous timeout (simulates stop event)
      $timeout.cancel(scrollTimeoutId);

      // wait for 200ms and then invoke listeners (simulates stop event)
      scrollTimeoutId = $timeout(invokeListeners, 200);
    });


    $window.addEventListener('resize', function() {
      $timeout.cancel(resizeTimeoutId);
      resizeTimeoutId = $timeout(invokeListeners, 200);
    });


    return {
      bindListener: function(listener) {
        var index = ++id;

        listeners[id] = listener;

        return function() {
          delete listeners[index];
        }
      }
    };
  }
);


ysApp.directive('imageLazySrc', function ($document, scrollAndResizeListener) {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attributes) {
        var listenerRemover;

        function isInView(clientHeight, clientWidth) {
          // get element position
          var imageRect = $element[0].getBoundingClientRect();

          if (
              (imageRect.top >= 0 && imageRect.bottom <= clientHeight)
              &&
              (imageRect.left >= 0 && imageRect.right <= clientWidth)
          ) {
            $element[0].src = $attributes.imageLazySrc; // set src attribute on element (it will load image)

            // unbind event listeners when image src has been set
            listenerRemover();
          }
        }

        // bind listener
        listenerRemover = scrollAndResizeListener.bindListener(isInView);

        // unbind event listeners if element was destroyed
        // it happens when you change view, etc
        $element.on('$destroy', function () {
          listenerRemover();
        });


        // explicitly call scroll listener (because, some images are in viewport already and we haven't scrolled yet)
        isInView(
            $document[0].documentElement.clientHeight,
            $document[0].documentElement.clientWidth
        );
      }
    };
  }
);

ysApp.controller('portfolio', function ($scope) {
    $scope.photos = [
        {p: 'app/img/projects/num1.jpeg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num3.jpeg', description: 'Some project name', details: 'Some details', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num2.jpg', description: 'OTB', details: 'official website', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num4.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num5.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num6.jpg', description: 'Some project name', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num7.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num8.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num9.jpg', description: 'Some project name', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num10.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num11.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num12.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num13.jpg', description: 'Some project name', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num14.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num15.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num16.jpg', description: 'Some project name', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num17.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num18.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num19.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num20.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num21.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num22.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num23.jpg', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num24.png', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},
        {p: 'app/img/projects/num25.png', description: 'Lorem ipsum dolor sit amet', details: 'Specific details on the project', hrefs: 'https://www.otb.net/'},

        

        

    ];

    
});