// Mobile Menu

function showMenu() {
    document.getElementById('mobileMenu').classList.remove('hide-menu');
}

function closeMenu() {
    document.getElementById('mobileMenu').classList.add('hide-menu');
}

// Header

function loadHeader() {
    document.getElementById('header-container').innerHTML = `
        <div class="header2">
        <div class="nav-content">
            <div>
                <a href="../index.html"><img class="logo" src="../img/logo.png"></a>
            </div>
            <nav class="nav-bar hide-mobile">
                <a href="../index.html">Start</a>
                <a href="../index.html#recipes">Rezepte des Tages</a>
                <a href="../index.html#cocktail">Cocktail des Tages </a>
                <a href="../service/kontakt.html">Kontakt</a>
            </nav>
        </div>
    </div>
    
    
    <!-- Mobile Menu -->
    <img onclick="showMenu()" class="burger-menu hide-element" src="../img/icons/menu-4-64.png">
    <div id="mobileMenu" class="menu-overlay hide-menu">
        <div class="menu-overlay-title">--- Menu ---</div>
        <hr class="hyphen">
        <div onclick="closeMenu()" class="close">X</div>
        <div class="menu-overlay-nav">
            <div class="menu-overlay-nav-rows">
                <a href="../index.html#recipes" onclick="closeMenu()">Start
                    <img src="../img/icons/arrow-30-24.png">
                </a>
            </div>
    
            <div class="menu-overlay-nav-rows">
                <a onclick="closeMenu()" href="../index.html#recipes">Rezepte des Tages
                    <img src="../img/icons/arrow-30-24.png">
                </a>
            </div>
            <div class="menu-overlay-nav-rows">
                <a href="../index.html#cocktail" onclick="closeMenu()">Cocktail des Tages
                    <img src="../img/icons/arrow-30-24.png">
                </a>
            </div>
    
            <div class="menu-overlay-nav-rows">
                <a href="../service/kontakt.html">Kontakt
                    <img src="../img/icons/arrow-30-24.png">
                </a>
            </div>
    
        </div>
    </div>
    
    <!-- Mobile Menu End -->
        `;
}

// Footer  
function loadFooter() {
    document.getElementById('footer-container').innerHTML = `
           <div class="footer">
                <div class="social-icons">
                    <img src="../img/instagram-4-64.png" alt="">
                    <img src="../img/facebook-4-64.png" alt="">
                    <img src="../img/youtube-4-64.png" alt="">
                </div>
            <div class="logo-small">
                <img src="../img/logo_small.png">
            </div>
            <div class="legal-info">
                <a href="../service/impressum.html">Impressum</a>
                <a href="../service/datenschutz.html">Datenschutz</a>
            </div>
    </div>
    `;
}

// Calculation Portions Flame by Feli


let ingredientsFlame = [250, 2, 120, 200, 200, 150, 100];
let amountFlame = ['amount0', 'amount1', 'amount2', 'amount3', 'amount4', 'amount5', 'amount6']

function calcFlame() {
    let x = document.getElementById('input'); //holt die Zahl aus dem Inputfeld
    if (x.value < 0) {
        alert('Bitte einen Wert größer 0 eingeben');
      //  x.value = '';
    } else {

        for (let i = 0; i < amountFlame.length; i++) {
            document.getElementById(amountFlame[i]).innerHTML = '';
            document.getElementById(amountFlame[i]).innerHTML += ingredientsFlame[i] * x.value; 
            // schreibt die Zahl in das Werte-feld(Tabelle)

        }
    }

}

//calulation of Quinoa by Fabi


let ingredientAmount = [75, 150, 0.5, 0.5, 50, 1, 50, 30,  0.5, 2, 2]
let ingredientIds = ['quinoa', 'vegStock', 'corn', 'cucumber', 'onion', 'pepper', 'feta', 'yogurt','mustard','oil','vinegar']

function calculate(x) {

    let amount;

    for (let i = 0; i < ingredientAmount.length; i++) {


        amount = x * ingredientAmount[i];

        document.getElementById(ingredientIds[i]).innerHTML = amount;
    }
}

function buttonCalc() {
    let x = +document.getElementById('input').value;
    let amount;

    for (let i = 0; i < ingredientAmount.length; i++) {


        amount = x * ingredientAmount[i];

        document.getElementById(ingredientIds[i]).innerHTML = amount;
    }
}


//calulation of Chicken by Max

let ingredientAmountChicken = [75, 1, 100, 1, 1/2, 75, 125]
let ingredientIds1 = ['chicken', 'cocos', 'cocosmilk', 'curry', 'garlic', 'broccoli', 'rice']

function calculateChicken(x) {

    let amountChicken;

    for (let i = 0; i < ingredientAmountChicken.length; i++) {


        amountChicken = x * ingredientAmountChicken[i];

        document.getElementById(ingredientIds1[i]).innerHTML = amountChicken;
    }
}

function calculateChicken() {
    let x = +document.getElementById('input').value;
    let amountChicken;

    for (let i = 0; i < ingredientAmountChicken.length; i++) {


        amountChicken = x * ingredientAmountChicken[i];

        document.getElementById(ingredientIds1[i]).innerHTML = amountChicken;
    }
}