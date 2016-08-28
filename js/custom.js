function backgroundImage() {
    var hours = new Date().getHours();
    var index = Math.floor(hours / 4);
    //    alert(index);
    $.getJSON("../img/Background/background.json", function (data) {
        var imageUrl = data[index - 1].url;
        $('.intro.image-background').css({
            'background': 'url(' + imageUrl + ') center center no-repeat',
            //            '-webkit-background-size': 'cover',
            //            '-o-background-size': 'cover',
            'background-size': 'cover',
            '-webkit-backface-visibility': 'hidden'
        });
    });
    setInterval(function () {
        var hours = new Date().getHours();
        var index = Math.floor(hours / 4);
        $.getJSON("../img/Background/background.json", function (data) {
            var imageUrl = data[index - 1].url;
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