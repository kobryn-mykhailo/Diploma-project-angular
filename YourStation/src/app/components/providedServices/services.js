'use strict'

ysApp.controller('servicesCtrl', function ($scope) {
    $scope.slides = [
        {image: 'app/img/imgServ/frontend.jpg', description: 'Image 00'},
        {image: 'app/img/imgServ/SEO.jpg', description: 'Image 01'},
        {image: 'app/img/imgServ/design.jpg', description: 'Image 02'},
        {image: 'app/img/imgServ/business.jpg', description: 'Image 03'},
        {image: 'app/img/imgServ/logo.jpg', description: 'Image 04'}
    ];

    $scope.infos = [
    	{
    		heading: 'Створення сайту компанії', 
    		information: 'Розробка виключно якісних технологічних сайтів європейського типу, які вирішують такі задачі, як: прадажі, нові клієнти, брендування. Ми розробили величезну кількість різних проектів, дизайнів, логотипів і креативної реклами. Спираючись на свій безцінний досвід, технології для аналізу ринку і методи тестування, з впевненістю готові сказати що саме буде працювати, а що - ні. Замовляючи сайт в нашій студії, ми пропонуємо Вам виключно працюючі рішення і способи їх реалізації, готові відстоювати свою точку зору аргументуючи її цифрами, логікою та досвідом. Працюючи з нами Ви будете не клієнтом, а нашим Партнером. Ваш успіх буде нашою рекламою, яка конвертуватиметься в нових клієнтів.'
    	},
    	{
    		heading: 'Просування сайту (SEO)', 
    		information: 'Просування сайту — комплекс робіт, направлений на збільшення відвідуваності сайту через пошукову видачу Google і Yandex по цільових запитах. Що ми будемо робити: Складання семантичного ядра; Оптимізація контенту; Юзабіліті та інтерфейс; Аналіз сайтів конкурентів.'
    	},
    	{
    		heading: 'Унікальний дизайн сайту', 
    		information: 'Дизайн - це перше враження і 40% потенційного успіху. Це те, що дозволяє оцінити компанію в перші 3-7 секунд. Вкрай Важливо показати дійсно хороший дизайн і викликати у відвідувача захват! Ми пропонуємо створення повністю індивідуального дизайну. він відповідатиме всім трендам, продаватиме і викликатиме у відвідувачів захват.'
    	},
    	{
    		heading: 'Бізнес-аналіз',
    		information: 'Що таке бізнес-аналіз і для чого він потрібен? В першу чергу бізнес-аналіз потрібен для власників та топ-менеджменту підприємства, щоб зрозуміти як працює підприємство, який поточний стан справ з реалізації бізнес-цілей, щоб оцінити можливості компанії до реалізації її стратегічних цілей, як використати наявні можливості та потужності, що потрібно змінити в організаційній структурі, методологічних підходах, технічному плані, які продукти та послуги, що будуть користуватись попитом, слід впровадити на найближчу перспективу.'
    	},
    	{
    		heading: 'Розробка логотипів',
    		information: 'Ми точно знаємо як розробити ваш логотип так, щоб він добре працював і виконував свої завдання.'
    	}
    ];

    $scope.currentIndex = 0;
    $scope.setCurrentSlideIndex = function (index) {
        $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };
    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
    $scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
});

ysApp.animation('.slide-animation', function () {
    return {
        addClass: function (element, className, done) {
            if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
            }
            else {
                done();
            }
        },
        removeClass: function (element, className, done) {
            if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
            }
            else {
                done();
            }
        }
    };
});