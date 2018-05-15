const Express = require('express');
const randomItem = require('random-item');
const app = new Express();
app.set('view engine', 'pug');
app.use(Express.static('public'));


app.get('/' +
    '' +
    '' +
    '' +
    '',(req, res) => {
    res.render('homepage')
});
app.get('/resultat/:choice',(req,res) => {
    const choix = ['paper','rock','scissors'];
    const IA = randomItem(choix);
    const userChoice = req.params.choice;
    let victoire;
    let egalite = false;
    if(IA === userChoice) {
        egalite = true;
    }
    victoire = (
        (userChoice === choix[2] && IA === choix[0])
        || (userChoice === choix[1] && IA === choix[2])
        || (userChoice === choix[0] && IA === choix[1])
    );
    res.render('resultat',{
        param: req.params.choice,
        IA : IA,
        resultat: egalite ? 'EGALITE' : (victoire ? 'GAGNE' : 'PERDU')
    })
});
app.listen(3000);