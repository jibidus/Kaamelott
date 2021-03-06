angular.module('kaamelott.services', [])

.factory('Sentences', function($filter) {
  // Might use a resource here that returns a JSON array

  var allSentences = [
		{ text: 'Hé ben, si un jour j’oublie que je suis bonniche, vous serez gentils de me le rappeler !', character: { id: 'Angharad', name: 'Angharad'}, episode: {book: 'I', number: 37, title: 'La Romance de Lancelot'}},
		{ text: 'Si Monsieur et Madame préfèrent s\'envoyer des fions dans l\'intimité, je peux aussi me retirer. ', character: { id: 'Angharad', name: 'Angharad'}, episode: {book: 'II', number: 37, title: 'La Joute Ancillaire'}},
		{ text: '( À Arthur et à Mevanwi ensemble dans leur lit ) Entre le calme plat du temps de Madame et la guérilla de cette nuit, je me permet de dire à monsieur, que monsieur n\'a pas bien le sens de la mesure, monsieur est en dent de scie... ', character: { id: 'Angharad', name: 'Angharad'}, episode: {book: 'IV', number: 26, title: 'La chambre de la Reine'}},
		{ text: '( À Arthur au sujet de Mevanwi ) Je dois avouer que la chose a du bon, si c\'est pour m\'éviter la vue de la grande décarade, le défilé des nouvelles têtes, la parade des amoureuses à calcul, les poids lourds de la jambe légère, le festival de la morue, en somme... ', character: { id: 'Angharad', name: 'Angharad'}, episode: {book: 'IV', number: 30, title: 'Les Bonnes'}},
		{ text: 'Quand on veut être sûr de son coup, mon petit bonhomme, on plante des carottes, on ne joue pas les chefs d\'État !', character: { id: 'Anna', name: 'Anna'}, episode: {book: 'V', number: 30, title: 'La Supplique'}},
		{ text: '( S\'adressant au roi Loth ) Excusez-moi, est-ce qu\'à un seul moment, j\'aurais par mégarde donné le moindre signe de vouloir discuter avec vous? ', character: { id: 'Anna', name: 'Anna'}, episode: {book: 'V', number: 30, title: 'La Supplique'}},
		{ text: 'Vous êtes une gigantesque tarlouze.', character: { id: 'Anna', name: 'Anna'}, episode: {book: 'V', number: 30, title: 'La Supplique'}},
		{ text: 'Jusqu\'à présent, vous cumuliez trois statuts : bâtard, fils d\'assassin et usurpateur. Bâtard, vous le serez toujours, de même que vous serez toujours le fils de votre sale ordure de père. Mais aujourd\'hui, vous n\'êtes plus roi, vous n\'usurpez plus votre titre, c\'est déjà ça. ', character: { id: 'Anna', name: 'Anna'}, episode: {book: 'V', number: 30, title: 'La Supplique'}},
		{ text: '( au Père Blaise ) Pardonnez moi ? Excusez moi hein, j\'y connais rien... Euh... On a vraiment l\'impression que vous savez pas du tout ce que vous foutez là... ', character: { id: 'Appius_Manilius', name: 'Appius Manilius'}, episode: {book: 'VI', number: 6, title: 'Nuptiae'}},
		{ text: '( au Maître d\'Armes ) J\'pensais à une chose, en toute amitié, un gros pain dans votre tête, ça serait de nature à vous convenir ? ', character: { id: 'Appius_Manilius', name: 'Appius Manilius'}, episode: {book: 'VI', number: 6, title: 'Nuptiae'}},
		{ text: 'En fait, je m\'en suis pris deux, mais j\'ai cherché la merde. ', character: { id: 'Appius_Manilius', name: 'Appius Manilius'}, episode: {book: 'VI', number: 6, title: 'Nuptiae'}},
		{ text: 'Ouais c\'est bien qu\'on reste un peu dehors, comme ça j\'pourrais vous mettre une grosse tarte en plein air. ', character: { id: 'Appius_Manilius', name: 'Appius Manilius'}, episode: {book: 'VI', number: 7, title: 'Arturus Rex'}},
		{ text: 'Désolé mais vous l\'avez chié votre mariage. Ce s\'rait rien si c\'était pas juste la deuxième fois. ', character: { id: 'Appius_Manilius', name: 'Appius Manilius'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Je vais tout casser, ici, MOI! Kaamelott Kaamelott : y va rester un tas de caaaailloux, comme ça! Je veux l\'or, tout l\'or sinon c\'est la guerre !', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'I', number: 89, title: 'Le Fléau de Dieu'}},
		{ text: 'Je te mettrai à genoux, Arthur de Bretagne ! ', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'I', number: 89, title: 'Le Fléau de Dieu'}},
		{ text: 'Pourquoi pas ?', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'I', number: 89, title: 'Le Fléau de Dieu'}},
		{ text: 'Alors les femmes. [...] Donnez nous les femmes ! [...] Tous les femmes !!! [...] AAAAAAHH !!!', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'I', number: 89, title: 'Le Fléau de Dieu'}},
		{ text: 'Arthur ! Kaamelott, c’est zéro ! Des cailloux, des cailloux, des cailloux, ça m\'énerve! !', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'III', number: 12, title: 'Le Fléau de Dieu II'}},
		{ text: 'Cette fois-ci, on part avec les femmes ! HAHAAAHA !!!!', character: { id: 'Attila', name: 'Attila'}, episode: {book: 'III', number: 12, title: 'Le Fléau de Dieu II'}},
		{ text: '(Beurré) Sire, vous êtes quand même un sacré souverain. Accueillir, des péquenots qui sentent la bouse, comme ça, dans votre chapeau, bien je dis château! ', character: { id: 'Belt', name: 'Belt'}, episode: {book: 'II', number: 68, title: 'Spiritueux'}},
		{ text: 'Sire, on en a déjà parlé de la pierre ! Je peux pas monter une pierre d’une toise et demi dans un escalier à colimaçon !', character: { id: 'Breccan', name: 'Breccan'}, episode: {book: 'I', number: 64, title: 'La table de Breccan'}},
		{ text: 'Le cuir, ça restera toujours le cuir. Le cuir ça traverse les âges, les frontières, les modes. D’autant qu’là j’vous ai pas mis d’la vache moisie, attention ! C’est d’la tannerie d’luxe ! Assemblée au crochet de six ! Y\'a des heures de main d\'oeuvre derrière !', character: { id: 'Breccan', name: 'Breccan'}, episode: {book: 'I', number: 64, title: 'La table de Breccan'}},
		{ text: 'Ça vous dérange si… Si j’mets ma p‘tite griffe là ? Si y a un chef de clan qui vient poser ses miches par là devant et il trouve ça cossu. Ben le jour où il voudra faire un buffet ou un plumard sur mesure... Il saura où m’trouver, quoi. ', character: { id: 'Breccan', name: 'Breccan'}, episode: {book: 'I', number: 64, title: 'La table de Breccan'}},
		{ text: 'Ben, d\'la réclame beau Dieu !', character: { id: 'Breccan', name: 'Breccan'}, episode: {book: 'I', number: 64, title: 'La table de Breccan'}},
		{ text: 'C’est carré-carré chez vous, hein ?', character: { id: 'Breccan', name: 'Breccan'}, episode: {book: 'I', number: 64, title: 'La table de Breccan'}},
		{ text: 'Vous n\'avez qu\'à considérer que je suis officiellement cul nu. ', character: { id: 'Calogrenant', name: 'Calogrenant'}, episode: {book: 'I', number: 59, title: 'La jupe de Calogrenant'}},
		{ text: 'Quoi ? Vous voulez que j\'humilie ma terre natale pour une connerie d\'armure rouillée ?', character: { id: 'Calogrenant', name: 'Calogrenant'}, episode: {book: 'I', number: 59, title: 'La jupe de Calogrenant'}},
		{ text: '( En parlant à Arthur d\'un cadeau offert par un clan saxon ) Mais c\'est un petit mâle, il s\'appelle ... "Ferme ta gueule", c\'est que quand il est né il arrêtait pas de couiner... ', character: { id: 'Calogrenant', name: 'Calogrenant'}, episode: {book: 'II', number: 46, title: 'Le Cadeau'}},
		{ text: 'Attendez, on dit chef de clan parce qu\'il faut dire quelque chose, hein ! Mais Conran, il doit avoir trois cahutes sur la plage, ils sont une dizaine à tout casser, et c\'est tous des clodos, alors... ', character: { id: 'Calogrenant', name: 'Calogrenant'}, episode: {book: 'II', number: 60, title: 'L\'Alliance'}},
		{ text: '(En Parlant d\'Hervé de Rinel) Ah mais c\'est ça qui pue! ', character: { id: 'Calogrenant', name: 'Calogrenant'}, episode: {book: 'II', number: 60, title: 'L\'Alliance'}},
		{ text: '(Un sénateur : - J\'vais vous dire : le jour où j\'ai accepté d\'être sénateur, j\'aurai mieux fait de m\'péter une jambe.) Ça peut encore s\'arranger. ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: 'Ça s\'enferme les registres ! (Glaucia : Ah bon ? ) Ouais ! Et les trous du cul qui font pas leur boulot ça s\'enferme aussi !', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: '(Glaucia : - Ave Publius Servius Capito, t\'avais demandé un rendez-vous ? ) Non. J\'ai pas envoyé de fleurs non plus. ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: '(S\'adressant à Merlin) Vous préférez monter dans la barque, maintenant, de plein gré, ou dans vingt secondes avec un coup de pompe dans l\'oignon ? ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 2, title: 'Centurio'}},
		{ text: 'Tu salues plus les généraux ? C\'est pourtant largement au-dessus de ton grade merdique. ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 5, title: 'Dux bellorum'}},
		{ text: 'Alors, sans vouloir te commander, aurait tu l\'obligeance de bien vouloir te magner le cul. ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 5, title: 'Dux bellorum'}},
		{ text: 'Sans rire, vous foutez quoi là-dedans là ? Pourtant, vous croulez pas sous les visites diplomatiques il me semble ? Une fois tous les dix ans, vous pouvez donner un coup de balai non ?', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'J\'ai à peu près compris le principe du double jeu, mais je ne saurai dire pourquoi, j\'ai l\'impression que tu nous l\'as mis dans l\'os ? Et je pense que si tu refous les pieds à Rome, ne le prends pas mal hein... Je te ferai éliminer. ', character: { id: 'Capito', name: 'Capito'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'A l\'époque quand je levais le doigt, y avait 15 000 soldats qui gueulaient Imperator ! Maintenant, quand je lève le doigt, c\'est pour aller pisser... ', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 4, title: 'Arturi Inquisitio'}},
		{ text: 'Imperator ! Aaaaah ! Imperator ! Ah ça fait du bien crénom ! Ca me change de tous ces glands là... Votre tranquillité par-ci, votre tranquillité par-là... Ça dis donc... Pour être tranquille, 24h sur 24 au plumard... À pioncer, à bouffer de la compote... Ça, c\'est sûr que j\'enchaîne pas les crises de nerf... Mais assieds-toi là ! On dirait que tu vas chanter une chanson ! Allez !', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 4, title: 'Arturi Inquisitio'}},
		{ text: 'On devient pas chef parce qu\'on le mérite andouille ! On devient chef par un concours de circonstances, on le mérite après ! Moi, il m\'a p\'tet fallu dix ans pour mériter mon grade, si pas vingt. Tous les jours, j\'ai travaillé pour pas nager dans mon uniforme. Y a pas trente-six solutions. Arturus ? Hein ? Fais semblant ! Fais semblant d\'être Dux. Fais semblant de mériter ton grade. Fais semblant d\'être un grand chef de guerre. Si tu fais bien semblant, un jour tu verras, t\'auras plus besoin !', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 5, title: 'Dux bellorum'}},
		{ text: 'Mais moi non plus je suis pas le chef suprême de la première puissance mondiale ! Le chef suprême de la première puissance mondiale, c\'est celui qui tire les ficelles dans l\'arrière-boutique, moi je suis juste un spectacle de marionnettes. Voilà. La petite journée désarticulée de César le pantin. Et ça se passe dans le ghetto !', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: '[S\'adressant à Arthur.] Des chefs de guerre, il y en a de toutes sortes. Des bons, des mauvais, des pleines cagettes il y en a. Mais une fois de temps en temps, il en sort un. Exceptionnel. Un héros. Une légende. Des chefs comme ça, il y en a presque jamais. Mais tu sais ce qu\'ils ont tous en commun ? Tu sais ce que c\'est, leur pouvoir secret ? Ils ne se battent que pour la dignité des faibles. ', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: '[César offre à Arthur la bague de contrôle des lames] C\'est pour t\'apprendre à faire confiance à la magie, parce qu\'il n\'y a que ça qui marche sur Terre, Arturus, la magie, le reste ça ne vaut pas un rond. ', character: { id: 'Cesar', name: 'César'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: 'Allez, vous devriez mettre les bouts, les demi-sels ! C\'est gentil d\'être passés ! On va vous faire un p\'tit sac avec des restes pour manger chez vous. ', character: { id: 'dame_Cryda', name: 'Cryda de Tintagel'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Le premier truc qui frappe, c’est la langue. Vous savez ce que c’est, on arrive sur place, boum… En fait, c’est quand on commence à entendre les gens parler, que là… là, on se dit : je suis pas chez moi. ', character: { id: 'Dagonet', name: 'Dagonet'}, episode: {book: 'I', number: 27, title: 'De retour de Judée'}},
		{ text: '[Le vieux] a essayé de me vendre un genre de turban, comme ils se mettent sur la tête, là-bas. J\'ai d\'abord commencé par l\'envoyer chier, puis je me suis dit que ça ferait sûrement plaisir au seigneur Karadoc. ', character: { id: 'Dagonet', name: 'Dagonet'}, episode: {book: 'I', number: 27, title: 'Le Retour de Judée'}},
		{ text: 'Heureusement qu’on n\'a aucune dignité… Sinon on serait bien dans la merde. ', character: { id: 'Dagonet', name: 'Dagonet'}, episode: {book: 'IV', number: 99, title: 'Le Désordre et la Nuit'}},
		{ text: 'Eh... Il a pas inventé le plat de la main morte celui-là. ', character: { id: 'Dagonet', name: 'Dagonet'}, episode: {book: 'V', number: 22, title: 'La promesse'}},
		{ text: 'J\'ai dit "elle aussi" ? […] Oh, ça m\'étonne ça... Vous êtes sûr que j\'ai pas dit "elle est sympa" ?', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'III', number: 98, title: 'Hollow Man'}},
		{ text: 'Vous n’avez aucun courage. Aucune dignité. Votre manque de foi est en train de tout détruire. ', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'IV', number: 2, title: 'Tous Les Matins du Monde'}},
		{ text: '( Terrorisée ) Ils m\'ont ba... Ils m\'ont ba... (Arthur essaie divers mots) ILS M\'ONT BANNIE! ', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'IV', number: 28, title: 'La Révoquée'}},
		{ text: 'Je sais ni boire, ni manger, ni m’habiller, ni me laver, ni rien ! Vous sentez que je vais être un fardeau pour vous, ou pas ?', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'IV', number: 28, title: 'La Révoquée'}},
		{ text: 'Gardez votre épée et servez-vous en pour trouver le Graal ! [Arthur replante Excalibur]', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'V', number: 12, title: 'La roche et le fer'}},
		{ text: 'Hé ! Hééé ! J\'suis pas une spécialiste, mais, à mon avis, là, vous allez mourir, hein !', character: { id: 'Dame_du_lac', name: 'La Dame du Lac'}, episode: {book: 'V', number: 36, title: 'La Nourrice'}},
		{ text: 'Mille excuses... Normalement, je devrai pas dire ça à un prêtre chrétien, mais comme vous m\'avez tout l\'air d\'être un gros baltringue euh, je me permets ? ( Père Blaise : Mmmh ?... )Vous avez oublié les alliances. ', character: { id: 'Drusilla', name: 'Drusilla'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: 'Je préviens monsieur et madame que s\'ils ont dans l\'idée de remplacer leur hypothétique progéniture par des groupes d\'amis dans le style de celui-ci, en ce qui me concerne, y a d\'la démission dans l\'air. ', character: { id: 'Drusilla', name: 'Drusilla'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: '( Présentant sa nouvelle femme à Seli, Arthur et Leodagan ) Ah mais non... Mais vous vous êtes encore sur l\'ancienne ! […] Tout à fait, excusez moi j\'ai pas percuté. Non non, l\'autre elle est morte. Heu... Les articulations soutenaient plus son poids donc elle a commencé par se remplir d\'eau par les coudes et après c\'est passé aux chevilles, c\'est remonté aux genoux et un matin, elle avait tellement gonflé que j\'ai appelé la garde. Alors heu... Ils sont venus, ils lui ont mis un coup de lance et puis elle a essayé de se... de se faufiler comme ça, pour se cacher sous le buffet. Pis elle passait pas parce que bon ben... Elle avait plus conscience de sa masse donc elle est restée là, comme ça, pis... Bah six heures après, elle était crevée. Donc, la Duchesse d\'Aquitaine ! ', character: { id: 'Duc_d_Aquitaine', name: 'Le duc d’Aquitaine'}, episode: {book: 'V', number: 16, title: 'Les Fruits d\'Hiver'}},
		{ text: '( Récitant d’un ton peu convaincant ) « Si c’est ma tête qui vous revient pas, vous pouvez toujours aller roupiller dans le couloir. […] Et à partir de maintenant, si j’entends un mot plus haut que l’autre je vous… renvoie dans votre bled d’at… natal à coups de pied dans… dans le fion. Comme ça vous pourrez aller ratisser la bouse et torcher le cul des poules, ça vous fera prendre l’air. » ', character: { id: 'Duc_d_Aquitaine', name: 'Le duc d’Aquitaine'}, episode: {book: 'V', number: 19, title: 'Les Nocturnales'}},
		{ text: 'Non, mais on peut adapter. […] On peut dire, euh… bon, je dis : […] « Avec votre dégaine… euh… […] Avec votre dégaine de crevette, faites gaffe à pas vous faire bouffer par un mérou. » ', character: { id: 'Duc_d_Aquitaine', name: 'Le duc d’Aquitaine'}, episode: {book: 'V', number: 23, title: 'Le Forfait'}},
		{ text: 'Vous avez qu’à dire au pape que s’il trouve que ça traîne, il n’a qu’à venir le chercher lui-même, son gobelet à la con !', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'I', number: 51, title: 'Enluminures'}},
		{ text: 'Vous avez qu’à dire au pape que s’il trouve que ça traîne, il n’a qu’à venir le chercher lui-même, son gobelet à la con !', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'II', number: 45, title: 'Les Voeux'}},
		{ text: '(A Lancelot) Han le lèche-pompe! On vous dérange Apollon? C\'est votre casque qui vous gêne ? ', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'II', number: 84, title: 'Spagenhelm'}},
		{ text: '(A Lancelot) Han le lèche-pompe! On vous dérange Apollon? C\'est votre casque qui vous gêne ? ', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'IV', number: 14, title: 'Dagonnet et le cadastre'}},
		{ text: '(A Lancelot) Et bah allez-y, recevez le dans la merde. Y\'a pas un siège pour s\'asseoir, pas un truc à lui offrir à boire (...) C\'est le roi d\'Orcanie quand même. C\'est pas Jo le Clodo. ', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'IV', number: 67, title: 'Loth et le Graal'}},
		{ text: 'Vous me faites penser à ces types qui se servent jamais en premier pour faire poli, et quand c\'est à eux...ils prennent tout le fromage gratiné et les autres ils sont obligés de manger le légume seul. ', character: { id: 'Galessin', name: 'Galessin'}, episode: {book: 'V', number: 21, title: 'Aux yeux de tous III'}},
		{ text: '(Aux rois assemblés) FUMIEEEERS !!!! ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 7, title: 'Arturus Rex'}},
		{ text: '( À Arthur au sujet de l\'héritier ) Je comprends qu\'avec deux livres de viande sur l\'estomac, on ne soit pas très actif dans une chambre à coucher. Ça ronfle à faire craquer le joint des murs. ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'I', number: 63, title: 'Goustan Le Cruel'}},
		{ text: 'C\'est justement parce que vous avez été cocollé par une lopette de jardinier que vous gouvernez comme une femme ! ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'I', number: 63, title: 'Goustan le Cruel'}},
		{ text: 'Allons, je suis humilié. Moi qui croyais que le Romain respectait ses ennemis, et ben non ! En voilà encore une belle désillusion. S\'ils croient que c\'est avec une mentalité pareille qu\'ils vont fédérer le pays, on leur rend leur fric, on remonte sur les chevaux, et on leur met sur la gueule ! D\'un autre côté, restituer une pareille quantité de blé, ça frise le mauvais gout, je suis désolé, ça ne se fait pas ! Ne serait-ce par respect pour les plus nécessiteux. Bon allons, après, il y a le serment : si je garde le blé, j\'attaque pas ! Et ben voilà : je garde le blé, j\'attaque pas; un serment c\'est sacré. Oui mais ce qui m\'ennuie, c\'est que c\'est pile le jour que j\'avais choisi pour vous passer le pouvoir, c\'est quelque chose les dates, hein ! Je garde le blé, j\'attaque pas, je suis sous serment. Mais vous, maintenant que vous êtes roi de Carmélide, si... S\'il vous prend le goût d\'aller leur dérouiller le cul, je ne vois vraiment pas comment je pourrais vous en empêcher !', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: 'Alors c\'est ça la stratégie moderne? Réunir cinq trous-de-balle en cercle et s\'balancer des fions? ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: 'Alors écoutez-moi bien les sent-la-pisse, vous êtes probablement en train d\'insulter un roi désigné par les dieux, et s\'il y a une chose dont il ne faut pas se foutre, c\'est les dieux ! ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 7, title: 'Arturus Rex'}},
		{ text: 'Hé ! A l\'origine j\'étais sorti pour lâcher une caisse, mais quand on vous voit comme ça dans le clair de lune, on a pas envie de bousiller le tableau. J\'vais aller loufer à l\'intérieur pour emboucaner les autres fumiers. ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 7, title: 'Arturus rex'}},
		{ text: 'Je vous ai passé le pouvoir, je vais pas vous le reprendre. Mais faites attention de pas devenir une tarlouse. ', character: { id: 'Goustan', name: 'Goustan'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'J\'ai rêvé qu\'il y avait des scorpions qui voulaient me piquer. En plus, y en avait un il était mi-ours, mi-scorpion et re mi-ours derrière !', character: { id: 'Grudu', name: 'Grüdü'}, episode: {book: 'I', number: 22, title: 'La queue du scorpion'}},
		{ text: 'Non, sans blague, Seigneur Bohort, avec tout le respect que je vous dois, la prochaine fois que je vous revois tourner autour de la chambre du roi, je vous déglingue la tête. ', character: { id: 'Grudu', name: 'Grüdü'}, episode: {book: 'I', number: 29, title: 'L’Assassin de Kaamelott'}},
		{ text: 'Moi, un jour j’ai rêvé qu’y avait un type qui venait me voir. Il me dit : « Vous avez jamais connu vos parents ? » J’lui réponds « non ». Et là, il me dit : « Eh ben vous inquiétez pas, ils sont fromagers. »', character: { id: 'Grudu', name: 'Grüdü'}, episode: {book: 'IV', number: 53, title: 'Le Rêve d’Ygerne'}},
		{ text: 'Ben ils m\'ont dit d\'aller me faire mettre. Après, ils m\'ont jeté des gadins et une marmite avec un restant de soupe de poisson. ', character: { id: 'Herve_de_Rinel', name: 'Hervé de Rinel'}, episode: {book: 'II', number: 72, title: 'L\'Alliance'}},
		{ text: 'J’ai pénétré leur lieu d\'habitation de façon subrogative […] en tapinant. ', character: { id: 'Herve_de_Rinel', name: 'Hervé de Rinel'}, episode: {book: 'III', number: 91, title: 'L’Espion'}},
		{ text: 'Ahhh, c\'est pour ça que vous avez changé de siège, c\'est parce que vous êtes pépé... Heu non, c\'est parce que vous êtes roi. ', character: { id: 'Herve_de_Rinel', name: 'Hervé de Rinel'}, episode: {book: 'V', number: 40, title: 'Les Pionniers'}},
		{ text: 'Y\'a plusieurs personnes qui sont passées par votre siège là, et beeen, le tout premier, je crois qu\'il s\'appelait... Carbure, ça fait vachement longtemps qu\'on l\'a pas vu. Moi, je serais vous, je lancerais des recherches. ', character: { id: 'Herve_de_Rinel', name: 'Hervé de Rinel'}, episode: {book: 'V', number: 42, title: 'Le Destitué'}},
		{ text: 'L\'adjectif qui me correspond le mieux, c\'est : le plancton. ', character: { id: 'Herve_de_Rinel', name: 'Hervé de Rinel'}, episode: {book: 'VI', number: 7, title: 'Arturus Rex'}},
		{ text: 'Déjà, à la base, un Burgonde, c\'est con comme une meule, alors celui-là ! Ah, vous pouvez pas savoir c\'que c\'est que de tomber interprète avec un engin pareil ! ( bruit de pet ) Tiens, vous voyez ? Toute la journée, c\'est comme ça ! Il pue, il pète, il lâche des ruines ! Tiens, l\'autre jour à table... Il devient tout bleu. Il était en train de s\'étouffer avec un os de caille, cet abruti ! Il tousse, il crache, il re-tousse, et BINGO ! Il m\'dégueule dessus ! Vous l\'croyez, ça ? ', character: { id: 'Interprete_burgonde', name: 'L\'interprète burgonde'}, episode: {book: 'I', number: 45, title: 'L\'interprète'}},
		{ text: 'La culture burgonde ? Je savais même pas qu’y en avait une… Non, moi je voulais faire grec moderne, mais y avait plus de place. Il restait que burgonde ou anglais. Aaaaanglais ! Mais c’est encore moins répandu. ', character: { id: 'Interprete_burgonde', name: 'L\'interprète burgonde'}, episode: {book: 'I', number: 45, title: 'L’Interprète'}},
		{ text: 'Nous, si vous réfléchissez bien, on a quatre bras. Avec les vôtres, ça fait six ! posez tout ça sur le trône, imaginez un peu les possibilités… ', character: { id: 'Les_jumelles', name: 'Les Jumelles du pêcheur'}, episode: {book: 'IV', number: 21, title: 'La Parade'}},
		{ text: 'Peau de vache.', character: { id: 'le_Jurisconsulte', name: 'Le Jurisconsulte'}, episode: {book: 'V', number: 27, title: 'Le Jurisconsulte'}},
		{ text: '( Au Père Blaise ) Z\'êtes un glandeur. Un gros... GLANDEUR !!! ', character: { id: 'le_Jurisconsulte', name: 'Le Jurisconsulte'}, episode: {book: 'V', number: 27, title: 'Le Jurisconsulte'}},
		{ text: 'Ah non ! AH NON ! On ne se vautre pas dans la bouffe, c\'est INTOLÉRABLE !!! Vous allez arrrrrrêter !!! ', character: { id: 'le_Jurisconsulte', name: 'Le Jurisconsulte'}, episode: {book: 'V', number: 40, title: 'Les Pionniers'}},
		{ text: 'Si j\'ai envie de mettre des grosses morues dans mon plumard, JE FAIS CE QUE JE VEUX !!!', character: { id: 'le_Jurisconsulte', name: 'Le Jurisconsulte'}, episode: {book: 'V', number: 41, title: 'La Conspiratrice'}},
		{ text: 'BANDES DE TROUS DU CUL !!!', character: { id: 'le_Jurisconsulte', name: 'Le Jurisconsulte'}, episode: {book: 'V', number: 41, title: 'La Conspiratrice'}},
		{ text: 'Une nuit, une nuit à attendre... Une longue nuit avant de savoir si le souverain ennemi acceptera un traité de paix, si fragile, si friable, qu\'on aurait même de la peine à le prendre au sérieux. Des solutions précaires, du rafistolage, voilà tout ce que j\'ai su inventer. La Bretagne résistait quand je suis arrivé, elle résistera encore quand je partirai. Je ne saurais dire pourquoi, je conserve encore, rescapée de mon découragement, une curiosité : existe t-il quelqu\'un parmi nous déjà - ou encore à naitre - qui se destine à restaurer l\'ordre sur l\'île de Bretagne? Et si il existe, que peut-il bien posséder que je ne possède moi-même ? D\'où vient-il? Est-il romain? Quel arme tient-il à sa ceinture ? Celui qui vaincra là où j\'ai échoué, je voudrais voir son visage une fois, car je lui conserve encore un rescapé de mon découragement : ma curiosité. ', character: { id: 'Manius_Macrinus_Firmus', name: 'Manius Macrinus Firmus'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: 'C\'est tout ? Treize ans qu\'ils me laissent pourrir sur pied, dans ce pays de merde ! Treize ans ! Maintenant ils m\'envoient un message, il faut que je rentre chez moi ! [...] Mais qu\'est ce qui leur fait croire que ça existe encore chez moi ?!! Est-ce qu\'un type qui a foutu le camp treize ans peut encore avoir un chez soi ? C\'est complètement absurde... ', character: { id: 'Manius_Macrinus_Firmus', name: 'Manius Macrinus Firmus'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: 'Je voudrais, pour une fois dans ma vie, ne pas avoir l’impression de dormir dans un chenil ! […] Karadoc, soit vous montez dans ce bain, soit vous me perdez. ', character: { id: 'Mevanwi', name: 'Mevanwi'}, episode: {book: 'II', number: 20, title: 'Immaculé Karadoc'}},
		{ text: 'Selon Karadoc, un lit n’est pas un lit si il n’y a pas de quoi manger une semaine dedans sans en sortir. ', character: { id: 'Mevanwi', name: 'Mevanwi'}, episode: {book: 'IV', number: 26, title: 'La Chambre de la reine'}},
		{ text: 'Une fois j\'ai dormi avec un porc pendant une semaine. [Arthur: Un porc entier?] Un porc vivant. ', character: { id: 'Mevanwi', name: 'Mevanwi'}, episode: {book: 'IV', number: 26, title: 'La Chambre de la reine'}},
		{ text: 'Ca y est ! C’est leur dernière saison aux débiles. Tu peux préparer les outils, on passe directement de la discussion à la désintégration. ', character: { id: 'Lucius_Sillius_Sallustius', name: 'Lucius Sillius Sallustius'}, episode: {book: 'VI', number: 4, title: 'Arturi inquisitio'}},
		{ text: '( Capito : Les quatre en une seule fois, vous avez pas peur que ça soit un peu voyant non ? ) Rien à foutre ! Tu peux même les crucifier sur une estrade au milieu du forum si ça te chante, c’est moi qui paye l’orchestre. ', character: { id: 'Lucius_Sillius_Sallustius', name: 'Lucius Sillius Sallustius'}, episode: {book: 'VI', number: 4, title: 'Arturi inquisitio'}},
		{ text: 'Je vais poser une question simple : et vous, vous le méritez ? Ah non mais attendez, est-ce que vous le méritez, est-ce que vous méritez votre place ?! Urgo ! Tu devais aller en Germanie... c\'est ta tante qui t\'a fait entrer au sénat ! Pisansius ! Pas une seule année dans la légion, pas une seule ! J\'m...e demande même parfois si t\'as déjà tenu une arme dans ta vie... Destisius ! C\'est ton père qui a donné la moitié de ses terres pour que quelqu\'un puisse prendre ta place en Afrique... C\'est vrai ou c\'est pas vrai ? Vous êtes tous des planqués, tous, tous, tous, tous , tous. ', character: { id: 'Lucius_Sillius_Sallustius', name: 'Lucius Sillius Sallustius'}, episode: {book: 'VI', number: 5, title: 'Dux Bellorum'}},
		{ text: 'Dans votre position, il y a plus de chance de subir un siège que d\'en organiser un !', character: { id: 'Sefriane_d_Aquitaine', name: 'Séfriane d\'Aquitaine'}, episode: {book: 'III', number: 16, title: 'Séfriane d\'Aquitaine'}},
		{ text: 'Je suis assez grande pour voir que si vous achetez des troncs d\'arbres à ce prix-là, vous êtes en train de vous faire enfler !', character: { id: 'Sefriane_d_Aquitaine', name: 'Séfriane d\'Aquitaine'}, episode: {book: 'III', number: 16, title: 'Séfriane d\'Aquitaine'}},
		{ text: 'Vous croyez quoi ? Que ça s\'trouve dans l\'cul des poules, le fric ?', character: { id: 'Sefriane_d_Aquitaine', name: 'Séfriane d\'Aquitaine'}, episode: {book: 'III', number: 16, title: 'Séfriane d\'Aquitaine'}},
		{ text: 'Quand je vais raconter à mon oncle combien vous raquez pour vos béliers pourris, il va bien se marrer !', character: { id: 'Sefriane_d_Aquitaine', name: 'Séfriane d\'Aquitaine'}, episode: {book: 'III', number: 16, title: 'Séfriane d\'Aquitaine'}},
		{ text: 'Quoi ? Qu\'est-ce qu\'y a ? On cherche la marave ?', character: { id: 'Sefriane_d_Aquitaine', name: 'Séfriane d\'Aquitaine'}, episode: {book: 'III', number: 16, title: 'Séfriane d\'Aquitaine'}},
		{ text: 'Oh allez mon pote ! Fais un effort ! Dans dix minutes t\'es pendu et on n\'en parle plus. ', character: { id: 'Spurius_Cordius_Frontinius', name: 'Spurius Cordius Frontinius'}, episode: {book: 'VI', number: 5, title: 'Dux Bellorum'}},
		{ text: 'D\'autant que les orchestres en Bretagne franchement, autant se frotter les noyaux avec des orties! ', character: { id: 'Spurius_Cordius_Frontinius', name: 'Spurius Cordius Frontinius'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Oui ... et tu veux les jeter où tes épluchures ? ... en Germanie ? Balance-moi tes saloperies, et radine sur le champs. PARCE-QUE QUAND je dis TOUT l\'MONDE ... ET BEN C\'EST TOUT L\'MONDE ! ... Tu es gentil.', character: { id: 'Spurius_Cordius_Frontinius', name: 'Spurius Cordius Frontinius'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Ah ouais non mais attends, c\'est du joli boulot là, les p\'tits sacripants... Oui sacripants oui. C\'est un terme un peu craignos. D\'ailleurs, bah voilà, même craignos, c\'est craignos. Mais c\'est parce que je suis choqué ! Qu\'est ce que j\'entends ? Tu demandes en mariage une personne âgée ? Et la p\'tite Iulia alors dans tout ça ? Ah il faut que j\'m\'en occupe tout seul, c\'est ça ? Ah très bien... Merci les p\'tits fripons... Tiens ça aussi c\'est un peu craignos tu vois ? Mais c\'est parce que là ouuuh ! Et bravo général, beau boulot ! Ah les pots cassés, c\'est Verinus qui répare les pots cassés tout simplement... Ok d\'accord, très bien... ', character: { id: 'Verinus', name: 'Vérinus'}, episode: {book: 'VI', number: 6, title: 'Nuptiæ'}},
		{ text: 'Y a un truc, quand même, qu\'il faut que vous compreniez bien les gars... Si vous voulez, moi, à la base... J\'suis une balance... C\'est le postulat de départ, on a devant soi, une balance. Donc une personne, si vous voulez, qu\'on n\'a pas besoin de cogner puisque, elle vient, elle-même, délivrer l\'information, sans que vous ayez même à la demander. Parce que non, pourquoi j\'vous dis ça ? Puisque... on est quand même à une heure et demie de marrons dans la gueule là... Et si j\'vous dis que je ne sais rien, c\'est que je pense qu\'effectivement... ( Procyon le frappe ) Pfff... je n\'sais rien... ', character: { id: 'Verinus', name: 'Vérinus'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Bah dis donc, j\'sais pas c\'que c\'est "la pire", mes p\'tits cousins, mais j\'peux vous garantir que, vu d\'ici, ça fout les boules hein... Ouuuh... Non, parce que, quand il a dit euh... plusieurs options, j\'ai fait toute une série de p\'tits pets comme ça, pou, pou, pou... ', character: { id: 'Verinus', name: 'Vérinus'}, episode: {book: 'VI', number: 8, title: 'Lacrimosa'}},
		{ text: 'Ah mais ouais... Ah mais bien sûr les gars... évidemment... nan mais allez-y, c\'est mon truc les bateaux moi, je connais à mort... Allez-y hein... J\'balance un caillou dans la flotte, y\'en à trente qui r\'montent. ', character: { id: 'Verinus', name: 'Vérinus'}, episode: {book: 'VI', number: 1, title: 'Miles Ignotus'}},
		{ text: '( À propos du chateau de Kaamelott ) Vulgaire ? Oui... Mais pas seulement. ', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'I', number: 59, title: 'La Visite d\'Ygerne'}},
		{ text: '[Arthur : Vous mangez à quelle heure vous à Tintagel?] A Tintagel on mange quand on l\'a mérité, quand on sait qu\'on a accompli ses commandements avec humilité et qu\'on a glorifié sa famille [Arthur : Oui, non, nous on mange quand on a faim.] ', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'I', number: 59, title: 'La Visite d\'Ygerne'}},
		{ text: '( En parlant d\'Arthur et en le regardant d\'un air narquois ) Au cas où il aurait une petite "faim-faim"!? ', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'I', number: 59, title: 'La Visite d\'Ygerne'}},
		{ text: 'Mais je vous empêche pas de faire la guerre, mais vous la ferez guéri !', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'II', number: 69, title: 'Mater Dixit'}},
		{ text: 'Allez y! Défilez les petites fourmis. Mettez vous bien en rang. Venez mesurer votre risible destin à celui des Pendragon. Venez constater la navrante insignifiance de vos existences. Vous avez pensé que les dieux allaient enfin reconnaitre en vous le souverain que personne n\'avait vu? Vous alliez enfin donner au monde le spectacle de votre avénement. Quel roi suis-je ? Un roi sévère ? un roi conquérant ? Vous n\'êtes rien. Rien ! Vous retournerez chez vous comme vous en êtes parti… Anonyme ! Paisiblement, mon fils viendra reprendre ce qui est à lui. Et vous mettrez un genou en terre. Et vous baisserez les yeux. Et vous jurerez fidélité. Car c\'est tout ce qu\'il vous reste !', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'V', number: 24, title: 'Le dernier jour'}},
		{ text: 'Vous êtes des porcs !', character: { id: 'Ygerne', name: 'Ygerne'}, episode: {book: 'V', number: 69, title: 'Anton'}},
];

  shuffle(allSentences);
  
  return {
	  
    all: function() {
      return allSentences;
    },
  	get: function(index) {
  		return allSentences[index];
  	},
  	previous: function(sentence) {
  		var index = allSentences.indexOf(sentence);
  		if (index > 0) {
  			return allSentences[index-1];
  		} else {
  	  		return null;
  		}
  	},
  	next: function(sentence) {
  		var index = allSentences.indexOf(sentence);
  		if (index >= 0 && index < allSentences.length-1) {
  			return allSentences[index+1];
  		} else {
  	  		return null;
  		}
  	},
  	size: function() {
  		return allSentences.length;
  	},
  	shuffle: function() {
  		shuffle(allSentences);
  	}
  };
  
})

.factory('Characters', function() {

	var allCharacters = [ 
	             		{id: 'Cesar', name: 'Cesar'},
	            		{id: 'LaDameduLac', name: 'La Dame du Lac'},
	            		{id: 'PereBlaise', name: 'Pere Blaise'},
	            		{id: 'ManiusMacrinusFirmus', name: 'Manius Macrinus Firmus'},
	            		{id: 'CaiusCamillus', name: 'Caius Camillus'},
	            		{id: 'Breccan', name: 'Breccan'},
	            		{id: 'SefrianedAquitaine', name: 'Sefriane d\'Aquitaine'},
	            		{id: 'Verinus', name: 'Verinus'},
	            		{id: 'Belt', name: 'Belt'},
	            		{id: 'Guethenoc', name: 'Guethenoc'},
	            		{id: 'Bohort', name: 'Bohort'},
	            		{id: 'Capito', name: 'Capito'},
	            		{id: 'Venec', name: 'Venec'},
	            		{id: 'Gauvain', name: 'Gauvain'},
	            		{id: 'Drusilla', name: 'Drusilla'},
	            		{id: 'Urgan', name: 'Urgan'},
	            		{id: 'Loth', name: 'Loth'},
	            		{id: 'Calogrenant', name: 'Calogrenant'},
	            		{id: 'Seli', name: 'Seli'},
	            		{id: 'SpuriusCordiusFrontinius', name: 'Spurius Cordius Frontinius'},
	            		{id: 'Lancelot', name: 'Lancelot'},
	            		{id: 'Merlin', name: 'Merlin'},
	            		{id: 'Arthur', name: 'Arthur'},
	            		{id: 'HervedeRinel', name: 'Herve de Rinel'},
	            		{id: 'Dagonet', name: 'Dagonet'},
	            		{id: 'dame_Cryda', name: 'Cryda de Tintagel'},
	            		{id: 'Leducd’Aquitaine', name: 'Le duc d’Aquitaine'},
	            		{id: 'Meleagant', name: 'Meleagant'},
	            		{id: 'Grudu', name: 'Grüdü'},
	            		{id: 'Attila', name: 'Attila'},
	            		{id: 'Roparzh', name: 'Roparzh'},
	            		{id: 'LeSeigneurJacca', name: 'Le Seigneur Jacca'},
	            		{id: 'Kadoc', name: 'Kadoc'},
	            		{id: 'Goustan', name: 'Goustan'},
	            		{id: 'Letavernier', name: 'Le tavernier'},
	            		{id: 'Leodagan', name: 'Leodagan'},
	            		{id: 'Lemaitred’armes', name: 'Le maitre d’armes'},
	            		{id: 'Mevanwi', name: 'Mevanwi'},
	            		{id: 'Ygerne', name: 'Ygerne'},
	            		{id: 'LesJumellesdupecheur', name: 'Les Jumelles du pêcheur'},
	            		{id: 'Appius_Manilius', name: 'Appius Manilius'},
	            		{id: 'Linterpreteburgonde', name: 'L\'interprete burgonde'},
	            		{id: 'Anna', name: 'Anna'},
	            		{id: 'LeRepurgateur', name: 'Le Repurgateur'},
	            		{id: 'Guenievre', name: 'Guenievre'},
	            		{id: 'Karadoc', name: 'Karadoc'},
	            		{id: 'EliasdeKelliwic’h', name: 'elias de Kelliwic’h'},
	            		{id: 'Angharad', name: 'Angharad'},
	            		{id: 'Edern', name: 'Edern'},
	            		{id: 'Leroiburgonde', name: 'Le roi burgonde'},
	            		{id: 'Lucius_Sillius_Sallustius', name: 'Lucius Sillius Sallustius'},
	            		{id: 'Galessin', name: 'Galessin'},
	            		{id: 'Perceval', name: 'Perceval'},
	            		{id: 'Demetra', name: 'Demetra'},
	            		{id: 'Yvain', name: 'Yvain'},
	            		{id: 'LeJurisconsulte', name: 'Le Jurisconsulte'}
	];

  return {
	  
    all: function() {
      return allCharacters;
    },
    empty: function() {
    	return {id: 'empty', name: 'empty'};
    }
  };
  
})

.factory('Books', function() {

	var allBooks = [ 'I', 'II', 'III', 'IV', 'V', 'VI' ];

	return {
		all: function() {
			return allBooks;
		},
		get: function(index) {
			return allBooks[index];
		}
	};
  
})

.factory('Quiz', function(Sentences) {

	var nbSentences = 20;

	return {
	  	build: function() {
	  		sentences = angular.copy(Sentences.all());
	  		shuffle(sentences);
	  		return sentences.slice(0, nbSentences);
	  	},
	    saveScore: function() {
	    	// TODO add remote service
	    },
	    getBestScore: function() {
	    	// TODO add remote service
	      return 10;
	    },
	    computeScore: function(sentence, character, book) {
	    	console.debug('compute score !!');
	    	console.debug(sentence);
	    	console.debug(character);
	    	console.debug(book);
	    	var score = 0;
	    	if (character && sentence.character.name === character.name){
	    		score += 5;
	    	}
	    	if (book && sentence.episode.book === book){
	    		score += 10;
	    	}
	    	return score;
	    }
	  };
	  
})

;
