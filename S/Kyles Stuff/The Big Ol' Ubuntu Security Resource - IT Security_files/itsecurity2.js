function toggleMore( id ) {
	icon = document.getElementById( 'icon_more_' + id );
	link = document.getElementById( 'link_more_' + id );
	list = document.getElementById( 'list_more_' + id );

	style = list.style.display;
	if( style == 'none' ) {
		icon.src = '/images/icon_minus_red.gif';
		link.innerHTML = 'Less&#8230;';
		list.style.display = 'block';
	} else {
		icon.src = '/images/icon_plus_red.gif';
		link.innerHTML = 'More&#8230;';
		list.style.display = 'none';
	}
	
}

function switchBox(activeName, inactiveNamesArray) {
	var activeTab = document.getElementById( 'tab_' + activeName );
	var activeBox = document.getElementById( 'box_' + activeName );
	var activeLink = document.getElementById( 'link_' + activeName );
	try {
		activeTab.style.background = 'url( "/images/tab_active_bg.gif" )';
		activeLink.className = 'tab';
		activeBox.style.display = 'block';
		for( var i=0; i<inactiveNamesArray.length; i++ ) {
			var box = document.getElementById( 'box_' + inactiveNamesArray[i] );
			var link = document.getElementById( 'link_' + inactiveNamesArray[i] );
			var tab = document.getElementById( 'tab_' + inactiveNamesArray[i] );
			
			link.className = 'inactive';
			box.style.display = 'none';
			tab.style.background = 'url( "/images/tab_inactive_bg.gif" )';
		}	
	} catch( e ) {}	
}

function leftnavGradient() {
	var lnav = new Object;
	lnav.lnav_0 = '/';                       
	lnav.lnav_1 = '/intrusion/';
	lnav.lnav_2 = '/security-audit/';
	lnav.lnav_3 = '/email-security/';
	
	lnav.lnav_4 = '/blog/';
	lnav.lnav_5 = '/features/';
	lnav.lnav_6 = '/news/';
	lnav.lnav_7 = '/subscribe/';
	lnav.lnav_8 = '/press-releases/';
	lnav.lnav_9 = '/buyers-guides/';
	lnav.lnav_10 = '/case-studies/';
	lnav.lnav_11 = '/columns/';
	lnav.lnav_12 = '/comparison-guides/';
	lnav.lnav_13 = '/dictionary/';
	lnav.lnav_14 = '/faq/';
	lnav.lnav_15 = '/interviews/';
	lnav.lnav_16 = '/vendors/';
	lnav.lnav_17 = '/whitepaper/';
	lnav.lnav_18 = '/events/';
	lnav.lnav_19 = '/wiki/';
	lnav.lnav_20 = '/warnings/';
	lnav.lnav_21 = '/vulnerabilities/';
	lnav.lnav_22 = '/specs/';
	lnav.lnav_23 = '/expert/';
	lnav.lnav_24 = '/meet-experts/';
	lnav.lnav_25 = '/nac/';
	lnav.lnav_26 = '/vpn/';
	lnav.lnav_27 = '/spyware/';
	lnav.lnav_28 = '/malware/';
	lnav.lnav_29 = '/firewalls/';
	lnav.lnav_30 = '/access-control/';
	lnav.lnav_31 = '/vulnerability-scanning/';
	
	var host = new String( location.host );
	var href = new String( location.href );
	var protocol = new String( location.protocol ) + '//';
	var search = href.replace( protocol + host, '' );
	var search = search.replace( 'index.php', '' );
	for( id in lnav ) {
		if( lnav[id] == search ) {
			try {
				document.getElementById( id ).className = 'highlight_bg';
			} catch( e ) {}
		}	
	}
}

function externalLinks() {
        if (!document.getElementsByTagName) return;
        var anchors = document.getElementsByTagName("a");
        for (var i=anchors.length-1; i>=0; i--) {
                var anchor = anchors[i];
                if (anchor.href && anchor.href.substr(0,4) == "http" && anchor.href.substr( 0, 5 ) != 'https' && !anchor.href.match( 'ads.') ) {
                        var hst = new String( location.protocol + '//' + location.host );
                        var hrf = new String( anchor.href );
                        regex = new RegExp( hst, "i" );
                        if( !hrf.match( regex ) ) {
                                anchor.target = "_blank";
                        }
                }
        }
}

function onloadOverload( args ) {
	for( var i=0; i<args.length; i++ ) {
		eval( args[i] );
	}
}

function today() {
  var date = new Date();
  var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var day = dayArray[date.getDay()];
  var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
  var month = monthArray[date.getMonth()];
  document.write( day + ', ' + month + ' ' + date.getDate() + ', ' + date.getFullYear() );
}

function copyright_year() {
  var date = new Date();
  document.write( date.getFullYear() );
}

function selectIx( id, value ) {
	var sel = document.getElementById( id );
	for( var i=0; i<sel.options.length; i++ ) {
		if( sel.options[i].value == value ) {
			sel.selectedIndex = i;
		}
	}
}

function performSwitchRedir( value ) {
	if( value && value != '' ) {
		window.location = '/' + value;
	}
}

var phone_field_length=0;
function TabNext(obj,event,len,next_field) {
	if (event == "down") {
		phone_field_length=obj.value.length;
	}
	else if (event == "up") {
		if (obj.value.length != phone_field_length) {
			phone_field_length=obj.value.length;
			if (phone_field_length == len) {
				next_field.focus();
			}
		}
	}
}

function printArticle() {	if (window.print) {		setTimeout('window.print();', 333);	}	else if (agt.indexOf("mac") != -1) {		alert("Press 'Cmd+p' on your keyboard to print article.");	}	else {		alert("Press 'Ctrl+p' on your keyboard to print article.")	}}
