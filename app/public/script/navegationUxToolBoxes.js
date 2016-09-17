(function (doc) {
    'use strict';

    var $navegationUXToolBoxes = doc.querySelector('.navegationUXToolBoxes');

    $navegationUXToolBoxes.addEventListener('click', function (event) {
        var $origin = event.target;

        if ($origin.classList.contains('navegationUXToolBoxes-item-action')) {
            event.preventDefault();
            doc.body.setAttribute('class', $origin.getAttribute('href').replace('#', ''));

        };
    });
})(document);
