
const nav_first =['Movies','Streams','Events','Plays','Sports','Activities']

const nav_second =['ListYourShow','Corporates','Offers','Gift Cards']

const reco_movies =[{img_src :'./images/et00354858-ayxrjajhcy-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/bb3.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00379650-thvrxsqkqc-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00388085-szuygyrbqh-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00386123-tasxvalcdv-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]

const premeire_display = [{img_src :'./images/et00413603-rxxwzlhjgt-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00415444-klhuekkdpp-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00393440-lsdgmrkzfg-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00389476-byhhdpjbpk-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00413598-lrqqtyqmgt-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]

const music_display = [{img_src :'./images/et00406791-fplshpmazx-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00405677-vbxadkmfen-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00375293-zqqrjdcfnv-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00414680-bguqvjcgsb-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00408695-baljmgbgkn-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]

const outdoor_events = [{img_src :'./images/et00399136-jvhzknyvlf-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00357779-ahyzhvskwt-portrait (1).avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00355125-kjfzzlbvvn-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00393658-ubzcncxkbs-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00358468-qlmfsdpbxg-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]

const popular_events = [{img_src :'./images/et00410180-lrrgfhpnkz-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00357779-ahyzhvskwt-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00360323-vrvfgfvsst-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00414680-bguqvjcgsb-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00398684-scspuwdkjn-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]

const latest_plays = [{img_src :'./images/et00405391-bafgndeuqq-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00411627-vazlzpnjfm-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00416268-eyhttcurcx-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00413552-fzuzwwkpdh-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'},{img_src :'./images/et00343670-rxljewqygq-portrait.avif',movie_name : 'Bhool Bhulaiya',movie_type :'Comedy/Horror'}]


nav_first.forEach(function(item){
    document.querySelector('.nav-left').innerHTML += `<a>${item}</a>`; 
});

nav_second.forEach(function(item){
    document.querySelector('.nav-right').innerHTML += `<a>${item}</a>`; 
});

reco_movies.forEach(function(item){
    document.querySelector('.recommended-section')
    .innerHTML += `<div class="reco-section-div">
                    <img class="reco-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
})

premeire_display.forEach(function(item){
    document.querySelector('.premeires-display')
    .innerHTML +=` <div class="premeires-display-box">
                    <img class="disp-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
});

music_display.forEach(function(item){
    document.querySelector('.music-display')
    .innerHTML +=` <div class="music-display-box">
                    <img class="music-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
});

outdoor_events.forEach(function(item){
    document.querySelector('.outdoor-events-display')
    .innerHTML +=` <div class="outdoor-events-display-box">
                    <img class="outdoor-events-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
});

popular_events.forEach(function(item){
    document.querySelector('.popular-events-display')
    .innerHTML +=` <div class="popular-events-display-box">
                    <img class="popular-events-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
});

latest_plays.forEach(function(item){
    document.querySelector('.latest-plays-display')
    .innerHTML +=` <div class="latest-plays-display-box">
                    <img class="latest-plays-img" src="${item.img_src}">
                    <h4>${item.movie_name}</h4>
                    <span>${item.movie_type}</span>
                </div>`;
});