var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -2.558081, lng: -44.056441},
    zoom: 16
  });

  var igrejaTexto = '<h1>Igreja de São José de Ribamar</h1><p style="text-align: left;"><span style="font-size: 12pt; color: #000000;">Coordenadas: (-2.561943, -44.055465)</span></p><p style="text-align: left;"><span style="font-size: 12pt; color: #000000;">Diz a lenda que um navegador portugu&ecirc;s, ap&oacute;s ter se desviado de sua rota, esteve prestes a naufragar, em plena ba&iacute;a de S&atilde;o Jos&eacute;, por causa de uma tempestade. Tendo invocado a intercess&atilde;o do santo, o navegador viu a tempestade cessar. Grato pela ajuda de S&atilde;o Jos&eacute; decidiu erguer uma capelinha de frente para o mar. Para isso, trouxe de Portugal uma imagem de S&atilde;o Jos&eacute;.</span></p><p style="text-align: justify;"><span style="font-size: 12pt; color: #000000;">Tempos depois, sem que ningu&eacute;m percebesse, os moradores de Anindiba dos Ind&iacute;genas, hoje Pa&ccedil;o do Lumiar, levaram a imagem para a igreja do povoado. Contudo, misteriosamente, ao amanhecer, notaram que a imagem de S&atilde;o Jos&eacute; voltara &agrave; sua capela de origem. Mais uma vez os moradores de Anindiba levaram a imagem para sua igreja e colocaram sentinelas para tomar conta. Mas, S&atilde;o Jos&eacute;, depois de ter transformado seu cajado em luzeiro, desceu, protegido por santos e anjos, de Anindiba para a capela de Ribamar.</span></p><p style="text-align: justify;"><span style="font-size: 12pt; color: #000000;">O caminho por onde S&atilde;o Jos&eacute; passou ficou repleto de rastros de luz. Assim, os moradores de Anindiba entenderam que S&atilde;o Jos&eacute; desejava ficar em sua capela de frente para o mar. Conta-se ainda, que, tempos depois, a capela de S&atilde;o Jos&eacute; foi reconstru&iacute;da de frente para a entrada da cidade, contudo, as paredes da nova igreja ru&iacute;ram in&uacute;meras vezes. S&oacute; ent&atilde;o os devotos perceberam que a igreja deveria ficar como antes, de frente para o mar. O atual pr&eacute;dio da igreja matriz teve a constru&ccedil;&atilde;o iniciada em mar&ccedil;o de 1915, sendo conclu&iacute;do dois anos mais tarde.</span></p><p style="text-align: center;"><a title="Vista Externa do Santu&aacute;rio" href=".http://santuariosaojosederibamar.com.br/imagens/uploads/Santu%C3%A1rio/DSC08986.JPG?1473526901141" rel="lightbox"><span style="font-size: 12pt; font-family: arial, helvetica, sans-serif;"><img src="http://santuariosaojosederibamar.com.br/imagens/uploads/Santu%C3%A1rio/DSC08986.JPG?1473526901141" alt="" width="500" height="334" /></span></a></p>';

  var estatuaTexto = '<h1>Monumento a São José de Ribamar</h1><p style="text-align: left;"><span style="font-size: 12pt; color: #000000;">Coordenadas: (-2.563862, -44.054263)</span></p><p style="text-align: justify;"><span style="color: #000000;"><span style="font-size: 12pt;">Com 33 metros de altura, o monumento a S&atilde;o Jos&eacute; &eacute; um dos maiores do pa&iacute;s, ficando atr&aacute;s apenas do Cristo Redentor com 38m e vindo ap&oacute;s ele os monumentos a S&atilde;o Francisco de Ass&iacute;s, em Canind&eacute;, Cear&aacute;, e a padre C&iacute;cero em Juazeiro do Norte, tamb&eacute;m no Cear&aacute;, respectivamente com 30,25m e 27m. O monumento retrata S&atilde;o Jos&eacute; segurando firmente a m&atilde;o do Menino Jesus, simbolizando o carinho e a preocupa&ccedil;&atilde;o de ensinar os primeiros passos ao Menino Jesus. Em mar&ccedil;o de 1997 foi iniciada a constru&ccedil;&atilde;o do monumento e sua inaugura&ccedil;&atilde;o ocorreu junto a da Concha Ac&uacute;stica de S&atilde;o Jos&eacute; de Ribamar em quatro&nbsp;de agosto de 1998. Tijolo, cimento, pedra brita, concreto e ferro galvonizado serviram de&nbsp;mat&eacute;ria para a constru&ccedil;&atilde;o. &nbsp;O artista goiano Sinval Floriano Veloso construiu o monumento em etapas. A grande imagem de S&atilde;o Jos&eacute; foi feita em sete etapas iniciando a constru&ccedil;&atilde;o pelas botas do santo. Simunt&acirc;neamente foi constru&iacute;da a imagem do Menino Jesus em cinco etapas, come&ccedil;ando esta pelos p&eacute;s. As m&atilde;os e as cabe&ccedil;as &nbsp;foram modeladas&nbsp;</span><span style="font-size: 12pt;">na argila, revestidas de gesso e sustentadas por fibras de vidro. O monumento est&aacute;&nbsp;</span><span style="font-size: 12pt;">Localizado ao lado da Concha Ac&uacute;stica&nbsp;de onde &eacute; poss&iacute;vel apreciar a vista da Avenida Beira-Mar e da Ba&iacute;a de S&atilde;o Jos&eacute;.&nbsp;</span></span></p><p style="text-align: center;"><a title="vista do monumento a S&atilde;o Jos&eacute; do porto da cidade" href="https://lh3.googleusercontent.com/-oZ8W69qVCic/VEVrvC0qAMI/AAAAAAABOTM/9hfitU5FrZM/w640-h480-no/Monumento_Ribamar.jpg" rel="lightbox"><span style="color: #000000;"><img src="https://lh3.googleusercontent.com/-oZ8W69qVCic/VEVrvC0qAMI/AAAAAAABOTM/9hfitU5FrZM/w640-h480-no/Monumento_Ribamar.jpg" alt="" width="394" height="295" /></span></a></p>';

  var casaTexto = '<h1>Casa do Anderson</h1><p style="text-align: left;"><span style="font-size: 12pt; color: #000000;">Coordenadas: (-2.551459, -44.058001)</span></p><p style="text-align: left;"><span style="font-size: 12pt; color: #000000;">Minha casa.</span></p>';

  var igrejaInfoWindow = new google.maps.InfoWindow({
  	content: igrejaTexto
  });

  var estatuaInfoWindow = new google.maps.InfoWindow({
  	content: estatuaTexto
  });

  var casaInfoWindow = new google.maps.InfoWindow({
  	content: casaTexto
  });

  var igrejaIcone = {
    url: 'http://www.hostbasico.com/images/xigreja.png.pagespeed.ic.jxJP6mcC05.png',
    size: new google.maps.Size(70, 70),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(35, 35),
    scaledSize: new google.maps.Size(70, 70)
  };

  var estatuaIcone = {
    url: 'http://www.icone-png.com/png/45/45103.png',
    size: new google.maps.Size(80, 80),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(40, 40),
    scaledSize: new google.maps.Size(80, 80)
  };

  var casaIcone = {
    url: 'http://www.iconesbr.net/iconesbr/2008/07/1453/1453_128x128.png',
    size: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(25, 25),
    scaledSize: new google.maps.Size(50, 50)
  };

  var igrejaMarker = new google.maps.Marker({
  	position: new google.maps.LatLng(-2.561943, -44.055465),
  	map: map,
  	icon: igrejaIcone,
    title: "Igreja de São José de Ribamar"
  });

  var estatuaMarker = new google.maps.Marker({
  	position: new google.maps.LatLng(-2.563862, -44.054263),
  	map: map,
  	icon: estatuaIcone,
    title: "Monumento a São José de Ribamar"
  });

  var casaMarker = new google.maps.Marker({
  	position: new google.maps.LatLng(-2.551459, -44.058001),
  	map: map,
  	icon: casaIcone,
  	title: 'Casa do Anderson'
  });

  igrejaMarker.addListener('click', function() {
  	igrejaInfoWindow.open(map, igrejaMarker);
  });

  estatuaMarker.addListener('click', function() {
  	estatuaInfoWindow.open(map, estatuaMarker);
  });

  casaMarker.addListener('click', function() {
  	casaInfoWindow.open(map, casaMarker);
  });

}