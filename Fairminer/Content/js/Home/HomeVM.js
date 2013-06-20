define(["knockout"], function (ko) {

    function HomeVM() {
        var self = this;
        this.images = ko.observableArray(
            [
                { imageURL: "http://www.ansa.no/upload/ANSA_Polen/Ansa%20Szczecin/17_mai_2007_01.jpg" },
                { imageURL: "http://gfx.nrk.no/8mmP7OqAiOkvHzIVSBS9HwBZqAci71TSkCUv9-WnkTnQ.jpg" },
                { imageURL: "http://www.abcnyheter.no/files/imagecache/normal/2011-19/mai620.jpg" },
                { imageURL: "http://g.api.no/obscura/API/image/r1/escenic/978x1200r/1357043304/archive/04666/17-mai_-_Skien6_42_4666203a.jpg" },
                { imageURL: "http://www.ansa.no/upload/ANSA_Danmark/Kalender/17.%20mai.jpg" }
            ]
        );
    }

    return HomeVM;

});