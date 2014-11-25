var currentURL = '';

//sends clicked images src to eventPage.js
$( "body" ).click(function( event ) {
    if (event.target.href){
        var imgSrc = $('img', event.target).attr("src");
        chrome.runtime.sendMessage({url: imgSrc}, function(response) {
            //console.log(imgSrc);
        });
    }else{
        chrome.runtime.sendMessage({url: event.target.src}, function(response) {
            //console.log(event.target.src);
        });
    }   
});

$("document").ready(function(){ 
    //listener to pass the clicked image to the product page
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
             console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
        if (request.url){
            currentURL = request.url;
           // console.log(currentURL);
            var file = currentURL.substr(0, currentURL.length-4);
            $('#image-main img').each(function(){
                this.src = file+'570.png';
            });
            $('#listing-image img').each(function(){
                this.src = file+'570.png';
            });

            $('#zoom').each(function(){
                this.href = file+'570.png';
            })

        }   
    });

    chrome.runtime.sendMessage({greeting:"ready"});




    var logoURL = chrome.extension.getURL('data/DarkEtsy-logo.svg');
    // var thumbURL = [];
    // thumbURL.push(chrome.extension.getURL('data/passport.gif'));
    // thumbURL.push(chrome.extension.getURL('data/gunThumb.png'));
    // thumbURL.push(chrome.extension.getURL('data/weedThumb.png'));
    // thumbURL.push(chrome.extension.getURL('data/cocaineThumb.png'));

    var imageURL = [];
    imageURL.push(chrome.extension.getURL('data/ak47.jpg'));
    imageURL.push(chrome.extension.getURL('data/handGuns.png'));
    imageURL.push(chrome.extension.getURL('data/id.gif'));
    imageURL.push(chrome.extension.getURL('data/warning.png'));
    imageURL.push(chrome.extension.getURL('data/weedImage.png'));
    imageURL.push(chrome.extension.getURL('data/belgpassport.png'));
    imageURL.push(chrome.extension.getURL('data/DL.png'));
    imageURL.push(chrome.extension.getURL('data/euro.png'));
    imageURL.push(chrome.extension.getURL('data/finnishPassport.png'));
    imageURL.push(chrome.extension.getURL('data/passports.png'));
    imageURL.push(chrome.extension.getURL('data/paypal.png'));
    imageURL.push(chrome.extension.getURL('data/seizure.png'));
    imageURL.push(chrome.extension.getURL('data/handGun.png'));
    imageURL.push(chrome.extension.getURL('data/rifle.png'));
    imageURL.push(chrome.extension.getURL('data/gun2.png'));

    var backURL = [];
    backURL.push(chrome.extension.getURL('data/drugs.jpg'));
    backURL.push(chrome.extension.getURL('data/passportsLarge.jpg'));
    backURL.push(chrome.extension.getURL('data/scorpianBricks.jpg'));
    backURL.push(chrome.extension.getURL('data/gunsLarge.jpg'));
    changeLogo();



    function changeLogo() {
        $("#etsy-logo").each(function(){
            $(this).html('<div '+
            ' id="etsy-logo"'+
            'class="apply-nav-height"'+
            '<div style="'+
            'display:block;'+
            'width:100%'+
            'margin-top: 10px;'+
            'padding-right:2px;'+
            'height:100%;'+
            'background:url('+logoURL+')'+
            '" /></div>');
            //$(this).hide();
        });
        //first large strip
        shuffle(backURL);
        var i = 0;
        $("#hero.hero-shop.background-image").each(function(){
            $(this).attr("style", "background-image:url("+backURL[i]+")");
            i++;
            if (i == backURL.length) i = 0, shuffle(backURL);
        });
        $("#hero .container").each(function(){
            $(this).html('<h1>Shop directly from people around the world anonymously.</h1>');
         });

        //2nd large strip
       
         $(".about-photo.lazy-bg").each(function(){
            $(this).attr("data-background", "url("+backURL[i]+")");
            $(this).attr("style", "background-image:url("+backURL[i]+")");
            i++;
            if (i == backURL.length) i = 0, shuffle(backURL);
        });

        //recent favorites
        shuffle(imageURL);
        var i = 0;
        $(".trending-listing a.listing-image img").each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });

        //thumbnails
        shuffle(imageURL);
        var i = 0;
         $(".thumbnail-inner img").each(function(){
            this.src = imageURL[i]; 
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });
        
        //shuffle the array of image
        shuffle(imageURL);
        i = 0;
        $('.tastemaker-favorites img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });

        shuffle(imageURL);
        i = 0;
        $('.collected-listing img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });

        shuffle(imageURL);
        i = 0;
        $('#related-listings-inner img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });

        shuffle(imageURL);
        i = 0;
        $('.listing-thumb img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        });
    
        $.ajax({
            type: "GET",
            url: "https://api.bitcoinaverage.com/ticker/USD/",
            dataType: "json",
            success: function (data) {
                var bitCoin = data.last;
                $('.currency-value').each(function(){
                    this.innerHTML = Math.round(this.innerHTML*1000/bitCoin)/1000;
                 });
            }
        });
        
        $('.currency-symbol').each(function(){
            this.innerHTML = "฿";
        });

        $('.currency-code').each(function(){
            this.innerHTML = "BTC";
        });

        shuffle(imageURL);
        i = 0;
        $('.object-items img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })
        shuffle(imageURL);
        i = 0;
        $('.items-group img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })

        shuffle(imageURL);
        i = 0;
        $('.promo-module img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })

        shuffle(imageURL);
        i = 0;
        $('.shop-items img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })
        shuffle(imageURL);
        i = 0;
        $('.listings img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })
        shuffle(imageURL);
        i = 0;
        $('.items img').each(function(){
            this.src = imageURL[i];
            i++;
            if (i == imageURL.length) i = 0, shuffle(imageURL);
        })
         $('#image-carousel').each(function(){
                var h =0;
                $('#image-carousel img').each(function(){
                h = this.height;     
                })
                $(this).attr("style" , "height: "+ h +"");
            });
    }

});

//returns random value in array

function getRandom(array){
    var index = Math.floor(Math.random()*array.length);
    var value = array[index];
    return value;
}

function shuffle(array){ 
    for(var j, x, i = array.length;
        i;
        j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
};