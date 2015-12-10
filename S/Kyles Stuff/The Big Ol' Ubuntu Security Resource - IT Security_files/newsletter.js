
    function checkfield(data)
	{
		if (rmspaces(data) == "") return false; else return true;
	}
	
	function rmspaces(x) {
		var leftx = 0;
		var rightx = x.length -1;
		while ( x.charAt(leftx) == ' ') leftx++;
		while ( x.charAt(rightx) == ' ') --rightx;
		var q = x.substr(leftx,rightx-leftx + 1); 
		if ( (leftx == x.length) && (rightx == -1) ) q ='';
		return(q);
	}
	
    function isemail(data){
		var flag = false;
		if (  (data.indexOf('@',0)  == -1) || (data.indexOf('\\',0)  != -1) || (data.indexOf('/',0)  != -1) ||!checkfield(data) || ( data.indexOf('.',0)  == -1 ) || ( data.indexOf('@')  == 0 ) || ( data.lastIndexOf('.') < data.lastIndexOf('@')  ) || ( data.lastIndexOf('.') == (data.length - 1)  ) ||        ( data.lastIndexOf('@')   !=   data.indexOf('@') ) || (data.indexOf(',',0)  != -1) ||  (data.indexOf(':',0)  != -1) || (data.indexOf(';',0)  != -1)  ) return flag;
		else {
		             var temp = rmspaces(data);
		             if (temp.indexOf(' ',0) != -1) flag = true;
		             var d3 = temp.lastIndexOf('.') + 4;
		             var d4 = temp.substring(0,d3);
		             var e2 = temp.length  -  temp.lastIndexOf('.')  - 1 ;
		             var i1 = temp.indexOf('@') ;
		          if (  (temp.charAt(i1+1) == '.') || ( e2 > 4 )  ||  ( e2 < 2 )    ) flag = true;
		          return !flag;
		}
	}

    function validate() {
            if ( document.frm1.email.value.length == 0 ) {
                    document.frm1.email.focus();
                    alert( "Please enter appropriate value for Email Address" );
                    return false; 
            } 
            
            if ( !isemail( document.frm1.email.value ) ) { 
            	document.frm1.email.focus(); 
            	alert( "Please Correct Email Address" ); 
            	return false; 
            } 
            return true; 
    }
    
    function doSubmit() { 
    	if ( validate() ) { 
    		document.frm1.submit(); 
    	} 
    }