exports.reverseString = function(arg){
	var argLenght = arg.length;
	if (argLenght == 0){
		return null;
	}
	else{
		var arr = arg.split('');
		var revStr='';
		for (var i = argLenght-1; i >= 0; i--){
		   revStr = revStr + arr[i];
		}
		if ( arg == revStr){
			return true;
		}
		else{
			return revStr;
		}
	}
	
	
	
}

