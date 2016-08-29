function backgroundImage() {
    $.getJSON("public/img/Background/background.json", function (data) {
        var index = Math.floor(Math.random() * data.length);
        var imageUrl = data[index].url;
        $('.intro.image-background').css({
            'background': 'url(' + imageUrl + ') center center no-repeat',
            //            '-webkit-background-size': 'cover',
            //            '-o-background-size': 'cover',
            'background-size': 'cover',
            '-webkit-backface-visibility': 'hidden'
        });
    });
    setInterval(function () {
        $.getJSON("public/img/Background/background.json", function (data) {
            var index = Math.floor(Math.random() * data.length);
            var imageUrl = data[index].url;
            $('.intro.image-background').css({
                'background': 'url(' + imageUrl + ') center center no-repeat',
                //            '-webkit-background-size': 'cover',
                //            '-o-background-size': 'cover',
                'background-size': 'cover',
                '-webkit-backface-visibility': 'hidden'
            });
        });
    }, 60000);
};