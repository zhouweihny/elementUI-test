export default {
	utilName: {
		"tit": "公用utilJs中的内容zw，控制台还将会打印一些东西"
	},
	utilAlert () {
		console.log("公用util中的alert")
	},
	dom (id) {
		return document.getElementById(id);
	},
	domClass (searchClass,node,tag) {
		var classElements = new Array(); 
		if ( node == null ) 
			node = document; 
		if ( tag == null ) 
			tag = '*'; 
		var els = node.getElementsByTagName(tag); 
		var elsLen = els.length; 
		var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"); 
		for (var i = 0, j = 0; i < elsLen; i++) { 
			if ( pattern.test(els[i].className) ) { 
				classElements[j] = els[i]; 
				j++; 
			} 
		} 
		return classElements; 
	},
	scrollTop (selector) {
		/**
		 * 滚动到某元素
		 * scrollTop("#table");
		 * scrollTop();
		**/
    let element = selector && document.querySelector(selector) || window;
    element.scrollTo(0, 0);
	}
}