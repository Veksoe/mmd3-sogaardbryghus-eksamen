// Define the Navbar-component
const landingpage = "index.html";
const soegaard = "sogaard.html"
const fruSoegaard = "frusoegaard.html"
const hrSoegaard = "hrsoegaard.html"
const menuer = "menuer.html"
const selskaber = "selskaber.html"
const heleSvineriet = "helesvineriet.html"
const olsmagning = "olsmagning.html"
const olMedHjem = "olmedhjem.html"
const bageri = "bageri.html"
const bryggeri = "bryggeri.html"
const destilleri = "destilleri.html"
const booking = "booking.html"
const Navigation = {
    props: {
        imageUrl: {
            type: String,
            default: './assets/img/SB_logo_grøn.png'
        },
        imageAlt: {
            type: String,
            default: ''
        },

    },
    template: `
     <header>
            <div class="headerTop">
                <div class="openIndicator">
                    <p>
                    <div></div>Åben nu</p>
                </div>
                <div class="btnContainer">
                    <a href="https://book.easytable.com/book/?id=be8fa&lang=auto" class="btn">Book Bord</a>
                    <a href="https://book.easytable.com/book/?id=be8fa&lang=auto" class="btn">Book Rundvisning</a>
                    <a href="${booking}" class="btn">Book Selskab</a>
                </div>
            </div>
            <nav class="topnav" id="myTopnav">
                <div class="dropdown">
                    <button class="dropbtn">Søgaard
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${soegaard}">Bryghuset</a>
                        <a href="${fruSoegaard}">Fru. Søgaard</a>
                        <a href="${hrSoegaard}">Hr. Søgaard</a>
                    </div>
                </div>
                <a href="${menuer}">Menukort</a>
                <div class="dropdown">
                    <button class="dropbtn">Arrangementer
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${selskaber}">Selskaber</a>
                        <a href="${heleSvineriet}">Hele Svineriet</a>
                        <a href="${olsmagning}">Ølsmagning</a>
                        <a href="${olMedHjem}">Øl med hjem</a>
                    </div>
                </div>
                <a href="${landingpage}" class="logo"><img :src="imageUrl" :alt="imageAlt"></a>
                <a href="${bageri}">Bageri</a>
                <a href="${bryggeri}">Bryggeri</a>
                <a href="${destilleri}">Destilleri</a>
            </nav>
            <nav class="topnavMobile" id="myTopnavMmobile">
                    <a href="#" class="btn">Book Bord</a>
                    <button class="burger-menu" id="burgerMenu">
                     <i class="fa-solid fa-bars"></i>
                </button>
                <div class="side-menu" id="sideMenu">
                    <button class="close-menu" id="closeMenu">
                        <i class="fa-solid fa-times"></i>
                    </button>
                    <a href="${landingpage}" class="logo"><img src="./assets/img/SB_logo_grøn.png"
                        alt="Søgaards Bryghus logo, af et af et grafisk ansigt med en stjerne om det ene øje og en måne om det andet."
                        ></a>
                        <div class="btnContainer">
                    <a href="https://book.easytable.com/book/?id=be8fa&lang=auto" class="btn">Book Rundvisning</a>
                    <a href="${booking}" class="btn">Book Selskab</a>
                </div>
                     <div class="dropdown">
                    <button class="dropbtn">Søgaard
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${soegaard}">Bryghuset</a>
                        <a href="${fruSoegaard}">Fru. Søgaard</a>
                        <a href="${hrSoegaard}">Hr. Søgaard</a>
                    </div>
                </div>
                <a href="${menuer}">Menukort</a>
                <div class="dropdown">
                    <button class="dropbtn">Arrangementer
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="${selskaber}">Selskaber</a>
                        <a href="${heleSvineriet}">Hele Svineriet</a>
                        <a href="${olsmagning}">Ølsmagning</a>
                        <a href="${olMedHjem}#">Øl med hjem</a>
                    </div>
                </div>
                
                <a href="${bageri}">Bageri</a>
                <a href="${bryggeri}">Bryggeri</a>
                <a href="${destilleri}">Destilleri</a>
                </div>
            </nav>

        </header>
    `
};

export { Navigation };