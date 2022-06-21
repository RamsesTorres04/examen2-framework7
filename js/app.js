// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Staff',
	panel: {

		swipe: true,

	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/product-info/',
    	url: 'product-info.html',
    	name: 'product-info',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		
	],
	dialog: {
		title: 'Welding Haven',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡Gracias por unírte al servicio de Staff! Siéntete como en casa.');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();


	app.dialog.confirm('Are you sure you want to purchase?', function () {

		

		//app.dialog.alert('Great!');

	
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Purchase Complete',
		 titleRightText: '',
		 subtitle: '',
		 text: "Your Order has been Received, Thanks for your Purchase!",
		 closeTimeout: 3000,
		});
		notification.open();
		
		
	});
	
});





