




/*
     FILE ARCHIVED ON 21:03:27 Aug 24, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:01:45 Nov 16, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
jQuery.fn.showInterest=function(J,P,H,Q,M,C){var F=this.id||"interestShow";var N=J;var B=P;var O=H;var A=Q||'<input id="intAnonBtn" type="button" name="intSelectBtn" value="Add to My dW Interests" />';var G=M||'<input id="intSelectBtn" type="button" name="intSelectBtn" value="Add to My dW Interests" />';var L=C||'<input id="intDeselectBtn" type="button" name="intDeselectBtn" value="Remove from My dW Interests" />';var E="";var K="false";for(var D in O){for(var I=0;I<O[D].length;I++){E+=D+"="+O[D][I]+"&"
}}if(E.length>0){E=E.substring(0,E.lastIndexOf("&"))}jQuery.noConflict();jQuery(document).ready(function(T){var a=function(){T("div#"+F).html(A);T("#intAnonBtn").click(function(){(K=="true")?U():S();return false})};var Z=function(){T("div#"+F).html(G);T("#intSelectBtn").click(function(){(K=="true")?U():S();return false})};var R=function(){T("div#"+F).html(L);T("#intDeselectBtn").click(function(){(K=="true")?W():S();return false})};var X=function(){T.ajax({type:"POST",url:"/developerworks/intdw/profiles/submit/incrprof",data:"act=inquiry&cid="+N+"&ctype="+B+"&rn="+Math.random(),dataType:"json",success:function(b){(b.selected)?R():Z()
},error:function(){Z()}})};var U=function(){T.ajax({type:"POST",url:"/developerworks/intdw/profiles/submit/incrprof",data:"act=select&cid="+N+"&ctype="+B+"&"+E+"&curl="+encodeURIComponent(window.location)+"&rn="+Math.random(),dataType:"json",success:function(b){(b.status=="success")?R():Y()},error:function(){Y()}})};var W=function(){T.ajax({type:"POST",url:"/developerworks/intdw/profiles/submit/incrprof",data:"act=deselect&cid="+N+"&ctype="+B+"&"+E+"&rn="+Math.random(),dataType:"json",success:function(b){(b.status=="success")?Z():Y()
},error:function(){Y()}})};var Y=function(){alert("There was a problem with your request.  Please try again Later.")};var S=function(){location.href="/web/20120824210327/https://www.ibm.com/developerworks/dwwi/DWAuthRouter?m=loginpage&d="+encodeURIComponent(window.location)};var V=function(b,c){if(typeof (c.json)!="undefined"){K=c.json.status;if(K=="true"){X()}else{a()}}};if(typeof (dwsi)!="undefined"){dwsi.dwsiEvtTgt.addListener("dwsi_logged_in_onpgload",V);dwsi.dwsiEvtTgt.addListener("dwsi_logged_in",V);dwsi.dwsiEvtTgt.addListener("dwsi_logged_out",function(){K="false";
a()})}a()});return jQuery};