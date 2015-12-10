try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">', soy.$$escapeHtml("Loading..."), '</span></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var A=function(M){this.$=M;
var H=this.$;
var b=999;
var c=true;
var K=false;
var W={};
var D={};
var N=function(k,j,f,i,e){if(j==undefined||j==null){j=!B(k)
}if(f==undefined||f==null){f=0
}if(!L(k,j)){var h=H("#children"+k);
if(Z(h)){var g=H("#plusminus"+k);
if(j==c){g.removeClass("icon-section-closed").addClass("icon-section-opened")
}else{g.removeClass("icon-section-opened").addClass("icon-section-closed")
}if(j==c){if(e==false){h.slideDown(300)
}else{h.removeClass("plugin-pagetree-hide-children");
h.animate({opacity:1})
}}else{if(e==false){h.slideUp(300)
}else{h.animate({opacity:0},{complete:function(){h.addClass("plugin-pagetree-hide-children")
}})
}}if(i){R(k)
}}else{J(k,new Array(),f,"",i,e)
}}if(i){R(k)
}};
var Z=function(e){return e.children("ul[id]").length>0
};
var B=function(f){var e=H("#plusminus"+f);
return(e.length>0)?(e.hasClass("icon-minus")||e.hasClass("icon-section-opened")):K
};
var L=function(f,e){return B(f)==e
};
var I=function(h,g,f){a(h,c,g,f)
};
var X=function(h,g,f){a(h,K,g,f)
};
var a=function(k,i,h,g){G(k);
var j=H("#"+k);
var f=j.find("div.plugin_pagetree_children_container");
f.each(function(e){var l=V(this.id);
N(l,i,b,e==f.length-1,g)
});
h.preventDefault();
h.stopPropagation()
};
var V=function(e){if(!e||e==undefined){return null
}if(e.indexOf("plusminus")!=-1){return e.substring("plusminus".length)
}if(e.indexOf("children")!=-1){return e.substring("children".length)
}return null
};
var C=function(e){if(!e||e==undefined){return null
}return S(e)[1]
};
var S=function(e){if(!e||e==undefined){return null
}return e.split("-")
};
var G=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").removeClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")
}})
};
var R=function(f){var e=C(f);
H("div.plugin_pagetree").each(function(g){if(g==e){H(this).find("span.plugin_pagetree_status").addClass("hidden");
H(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")
}})
};
var F=function(l,f,i,h,k,e,g){var j=W[l];
if(f=="Orphan"){j+="&hasRoot=false&spaceKey="+k
}else{j+="&hasRoot=true&pageId="+f
}j+="&treeId="+l+"&startDepth="+h+"&mobile="+g;
H.each(i,function(){j+="&ancestors="+this
});
j+="&treePageId="+e;
if(g==false){j=(AJS.params.serverUrl||"")+j
}return j
};
var Q=function(g){var f=g;
var e=null;
H("div.plugin_pagetree").each(function(h){if(h==f){e=H(this)
}});
return e
};
var P=function(e){var f=e.children("fieldset");
var g=new Object();
if(f.length>0){f.children("input").each(function(){g[this.name]=this.value
})
}return g
};
var O=function(e){var g=e.children("fieldset");
var h=new Array();
if(g.length>0){var f=g.children("fieldset");
if(f.length>0){f.children("input").each(function(){h.push(this.value)
})
}}return h
};
var E=function(g,f){var e=H("a.plugin_pagetree_childtoggle",g);
e.each(function(){var h=H(this);
h.attr("href","#").bind("click",function(k){var i=h.parent().parent().children("div.plugin_pagetree_children_container");
var j=i.attr("id");
var l=j.substring(8);
N(l,null,null,null,f);
k.preventDefault();
k.stopPropagation()
})
})
};
var U=function(e){var f=H(document.createElement("div"));
f.html(e);
return f.find("ul[id^='child_ul']").length
};
var J=function(m,g,q,o,i,f){var p=m;
var j=i;
var e=S(m);
var h=e[0];
var l=e[1];
var k=H("#children"+m);
var n=P(Q(l));
k.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());
Raphael.spinner(k.find(".plugin_pagetree_children_loading_wrapper .spinner")[0],7,"#666");
H.ajax({type:"GET",url:F(l,h,g,q,o,n.treePageId,f),dataType:"text",success:function(r){if(U(r)){k.html(r);
if(k.children().length&&k.hasClass("hidden")){k.removeClass("hidden")
}E(k,f);
H("#plusminus"+p).addClass("icon-section-opened").removeClass("icon-section-closed");
H("#childrenspan"+D[parseInt(l)]+"-"+l).addClass("plugin_pagetree_current");
if(j){R(p)
}T(k);
if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()
}}else{window.location=n.loginUrl
}AJS.trigger("pagetree-children-loaded")
},error:function(r){if(r.status=="403"){k.text(n["i18n-pagetree.error.permission"])
}else{k.text(n["i18n-pagetree.error.general"])
}}})
};
var T=function(e){H("div.plugin_pagetree_children_container:empty",e).addClass("hidden")
};
var Y=function(e,j){var h=P(e);
var k=h.noRoot=="true";
var g=k?"Orphan-"+j:h.rootPageId+"-"+j;
var f=h.mobile=="true";
W[j]=h.treeRequestId;
if(f==false){D[j]=AJS.params.pageId
}else{D[j]=H("div.content-container").parent().attr("data-content-id")
}e.children("fieldset").each(function(){var l=H(this);
l.children("input[treeId]").attr("value",j);
l.children("input[rootPage]").attr("value",g)
});
if(k){e.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+j);
e.find("a.plugin_pagetree_expandall").click(function(l){I("childrenOrphan-"+j,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("childrenOrphan-"+j,l,f);
return false
})
}else{e.find("div.plugin_pagetree_children").attr("id","children"+g);
e.find("a.plugin_pagetree_expandall").click(function(l){I("children"+g,l,f);
return false
});
e.find("a.plugin_pagetree_collapseall").click(function(l){X("children"+g,l,f);
return false
})
}var i=O(e);
J(g,i,h.startDepth,h.spaceKey,"",f)
};
this.initPageTrees=function(){H("div.plugin_pagetree").each(function(e){Y(H(this),e)
});
d()
};
var d=function(){var e=self.placeFocus;
if(e){self.placeFocus=function(){var f=H("form[name='pagetreesearchform']");
f.attr("name","inlinecommentform");
e();
f.attr("name","pagetreesearchform")
}
}};
H(".open-flyout-to-search").bind("click",function(e){if(H(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()
},400)
}else{setTimeout(function(){ConfluenceMobile.flyout.show()
},400)
}e.stopPropagation();
e.preventDefault()
})
};
Confluence=Confluence||{};
Confluence.Plugins=Confluence.Plugins||{};
Confluence.Plugins.PagetreeMacro={bind:function(B){var C=new A(B);
C.initPageTrees()
}}
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(A){Confluence.Plugins.PagetreeMacro.bind(A)
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.whatsnew:whats-new-resources', location = 'js/whats-new.js' */
AJS.toInit(function(d){var j=d("#whats-new-menu-link"),f,c,a,m,i,h,l=function(q){var o=!d(this).prop("checked");var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/set.action";var p={isShownForUser:o};AJS.log("whatsnew > toggleDontShow > setting isShownForUser to: "+p.isShownForUser);AJS.safe.post(n,p,function(s,r){AJS.log("whatsnew > toggleDontShow > isShownForUser set to: "+s.isShownForUser)})},e=function(){if(!c){return}h&&clearTimeout(h);g();AJS.setVisible(c,true)},k=function(o){var n=new AJS.ConfluenceDialog({width:880,height:585,id:"whats-new-dialog",onCancel:function(){n.hide().remove();h&&clearTimeout(h)}});var q="What\u2019s New in Confluence {0}";var p=AJS.Meta.get("version-number").match(/^\d+\.\d+/);var s=AJS.format(q,p);n.addHeader(s);n.addPanel("default",AJS.renderTemplate("whats-new-dialog-panel"));n.addCancel("Close",function(){n.hide().remove();h&&clearTimeout(h);return false});a=n.popup.element;if(AJS.Meta.get("remote-user")){n.page[n.curpage].buttonpanel.append(AJS.renderTemplate("whats-new-dialog-tip-panel"));a.find("#dont-show-whats-new").change(l).prop("checked",!o)}c=a.find("iframe");var r=AJS.Meta.get("whats-new-iframe-src-override");if(typeof(r)=="undefined"){r=j[0].href}c[0].src=r;c.load(e);m=a.find(".whats-new-timeout");return n},g=function(){if(i){i();i=null}f.addClass("hidden")},b=function(){var n=AJS.Meta.get("context-path")+"/plugins/whatsnew/get.action";d.getJSON(n,function(o){var p=AJS.Meta.get("static-resource-url-prefix")+"/download/resources/com.atlassian.confluence.plugins.whatsnew:whats-new-resources/whats-new.html";AJS.loadTemplatesFromUrl(p,function(){k(o.isShownForUser).show();f=a.find(".whats-new-throbber.hidden");f.removeClass("hidden");i=Raphael.spinner(f[0],80,"#666");h=setTimeout(function(){c=null;g();AJS.setVisible(m,true)},10000)})})};j.click(function(n){n.preventDefault();d(this).removeClass("interactive");b()});AJS.Meta.getBoolean("show-whats-new")&&b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:share-keyboard-shortcut-js-resources', location = 'js/resourceloader.js' */
AJS.toInit(function(a){AJS.I18n.get("com.atlassian.confluence.plugins.share-page")});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/splitter-1.5.1/splitter.js' */
/*
 * jQuery.splitter.js - two-pane splitter window plugin
 *
 * version 1.51 (2009/01/09)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

/**
 * The splitter() plugin implements a two-pane resizable splitter window.
 * The selected elements in the jQuery object are converted to a splitter;
 * each selected element should have two child elements, used for the panes
 * of the splitter. The plugin adds a third child element for the splitbar.
 *
 * For more details see: http://methvin.com/splitter/
 *
 *
 * @example $('#MySplitter').splitter();
 * @desc Create a vertical splitter with default settings
 *
 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
 * @desc Create a horizontal splitter resizable via Alt+Shift+M
 *
 * @name splitter
 * @type jQuery
 * @param Object options Options for the splitter (not required)
 * @cat Plugins/Splitter
 * @return jQuery
 * @author Dave Methvin (dave.methvin@gmail.com)
 */
 ;(function($){
 var Z_INDEX = 4; // This is a hackish number, set somewhere in-between some page panels vs. the z-index of the browse menu.
 $.fn.splitter = function(args){
    args = args || {};
    return this.each(function() {
        var zombie;        // left-behind splitbar for outline resizes
        function startSplitMouse(evt) {
            if ( opts.outline )
                zombie = zombie || bar.clone(false).insertAfter(A);
            panes.css("-webkit-user-select", "none");    // Safari selects A/B text on a move
            bar.addClass(opts.activeClass);
            A._posSplit = A[0][opts.pxSplit] - evt[opts.eventPos];
            $(document)
                .bind("mousemove", doSplitMouse)
                .bind("mouseup", endSplitMouse);
        }
        function doSplitMouse(evt) {
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                newPos = Math.max(0, Math.min(newPos, splitter._DA - bar._DA));
                bar.css(opts.origin, newPos);
            } else {
                resplit(newPos);
            }
        }
        function endSplitMouse(evt) {
            bar.removeClass(opts.activeClass);
            var newPos = A._posSplit+evt[opts.eventPos];
            if ( opts.outline ) {
                zombie.remove(); zombie = null;
                resplit(newPos);
            }
            panes.css("-webkit-user-select", "text");    // let Safari select text again
            $(document)
                .unbind("mousemove", doSplitMouse)
                .unbind("mouseup", endSplitMouse);
        }
        function resplit(newPos) {
            // Constrain new splitbar position to fit pane size limits
            newPos = Math.max(A._min, splitter._DA - B._max,
                    Math.min(newPos, A._max, splitter._DA - bar._DA - B._min));
            // Resize/position the two panes
            bar._DA = bar[0][opts.pxSplit];        // bar size may change during dock
            bar.css(opts.origin, newPos).css(opts.fixed, splitter._DF);
            A.css(opts.origin, 0).css(opts.split, newPos).css(opts.fixed,  splitter._DF);
            B.css(opts.origin, newPos+bar._DA)
                .css(opts.split, splitter._DA-bar._DA-newPos).css(opts.fixed,  splitter._DF);
            // IE fires resize for us; all others pay cash
            if ( !$.browser.msie )
                panes.trigger("resize");
        }
        function dimSum(jq, dims) {
            // Opera returns -1 for missing min/max width, turn into 0
            var sum = 0;
            for ( var i=1; i < arguments.length; i++ )
                sum += Math.max(parseInt(jq.css(arguments[i])) || 0, 0);
            return sum;
        }

        // Determine settings based on incoming opts, element classes, and defaults
        var vh = (args.splitHorizontal? 'h' : args.splitVertical? 'v' : args.type) || 'v';
        var opts = $.extend({
            activeClass: 'active',    // class name for active splitter
            pxPerKey: 8,            // splitter px moved per keypress
            tabIndex: 0,            // tab order indicator
            accessKey: ''            // accessKey for splitbar
        },{
            v: {                    // Vertical splitters:
                keyLeft: 39, keyRight: 37, cursor: ($.browser.msie) ? "e-resize" : "ew-resize",
                splitbarClass: "vsplitbar", outlineClass: "voutline",
                type: 'v', eventPos: "pageX", origin: "left",
                split: "width",  pxSplit: "offsetWidth",  side1: "Left", side2: "Right",
                fixed: "height", pxFixed: "offsetHeight", side3: "Top",  side4: "Bottom"
            },
            h: {                    // Horizontal splitters:
                keyTop: 40, keyBottom: 38,  cursor: ($.browser.msie) ? "n-resize" : "ns-resize",
                splitbarClass: "hsplitbar", outlineClass: "houtline",
                type: 'h', eventPos: "pageY", origin: "top",
                split: "height", pxSplit: "offsetHeight", side1: "Top",  side2: "Bottom",
                fixed: "width",  pxFixed: "offsetWidth",  side3: "Left", side4: "Right"
            }
        }[vh], args);

        // Create jQuery object closures for splitter and both panes
        var splitter = $(this).css({position: "relative"});
        var panes = splitter.children().css({
            position: "absolute",             // positioned inside splitter container
            "-moz-outline-style": "none"    // don't show dotted outline
        });
        var A = $(panes[0]);        // left  or top
        var B = $(panes[1]);        // right or bottom

        // Focuser element, provides keyboard support; title is shown by Opera accessKeys
        var focuser = $('<a href="javascript:void(0)"></a>')
            .attr({accessKey: opts.accessKey, tabIndex: opts.tabIndex, title: opts.splitbarClass})
            .bind($.browser.opera?"click":"focus", function(){ this.focus(); bar.addClass(opts.activeClass) })
            .bind("keydown", function(e){
                var key = e.which || e.keyCode;
                var dir = key==opts["key"+opts.side1]? 1 : key==opts["key"+opts.side2]? -1 : 0;
                if ( dir )
                    resplit(A[0][opts.pxSplit]+dir*opts.pxPerKey, false);
            })
            .bind("blur", function(){ bar.removeClass(opts.activeClass) });

        // Splitbar element, can be already in the doc or we create one
        var bar = $(panes[2] || '<div></div>')
            .insertAfter(A).css("z-index", Z_INDEX).append(focuser)
            .attr({"class": opts.splitbarClass, unselectable: "on"})
            .css({position: "absolute",    "user-select": "none", "-webkit-user-select": "none",
                "-khtml-user-select": "none", "-moz-user-select": "none"})
            .bind("mousedown", startSplitMouse);
        // Use our cursor unless the style specifies a non-default cursor
        if ( /^(auto|default|)$/.test(bar.css("cursor")) )
            bar.css("cursor", opts.cursor);

        // Cache several dimensions for speed, rather than re-querying constantly
        bar._DA = bar[0][opts.pxSplit];
        splitter._PBF = $.boxModel? dimSum(splitter, "border"+opts.side3+"Width", "border"+opts.side4+"Width") : 0;
        splitter._PBA = $.boxModel? dimSum(splitter, "border"+opts.side1+"Width", "border"+opts.side2+"Width") : 0;
        A._pane = opts.side1;
        B._pane = opts.side2;
        $.each([A,B], function(){
            this._min = opts["min"+this._pane] || dimSum(this, "min-"+opts.split);
            this._max = opts["max"+this._pane] || dimSum(this, "max-"+opts.split) || 9999;
            this._init = opts["size"+this._pane]===true ?
                parseInt($.curCSS(this[0],opts.split)) : opts["size"+this._pane];
        });

        // Determine initial position, get from cookie if specified
        var initPos = A._init;
        if ( !isNaN(B._init) )    // recalc initial B size as an offset from the top or left side
            initPos = splitter[0][opts.pxSplit] - splitter._PBA - B._init - bar._DA;
        if ( opts.cookie ) {
            if ( !$.cookie )
                alert('jQuery.splitter(): jQuery cookie plugin required');
            var ckpos = parseInt($.cookie(opts.cookie));
            if ( !isNaN(ckpos) )
                initPos = ckpos;
            /*
                CONF-27142 - Store sidebar width as soon as resize occurs so that new width is reflected
                in new tabs. 'A' is the jQuery object for the #splitter-sidebar div.
             */
            A.bind('resize', _.debounce(function(){
                var state = String(bar.css(opts.origin));    // current location of splitbar
                $.cookie(opts.cookie, state, {expires: opts.cookieExpires || 365,
                    path: opts.cookiePath || document.location.pathname});
            }, 300));
        }
        if ( isNaN(initPos) )    // King Solomon's algorithm
            initPos = Math.round((splitter[0][opts.pxSplit] - splitter._PBA - bar._DA)/2);

        var resizeHandler = function(e){
            var top = splitter.offset().top;
            //TODO: a quick hack to get the splitter to be the right height in ondemand due to the footer difference
            var footer = $("#footer, #studio-footer").outerHeight(true);
            if (!footer)
                footer = 24;
            var wh = $(window).height()-footer;
            splitter.css("height", Math.max(wh-top-splitter._hadjust, splitter._hmin)+"px");
            // ATLASSIAN - only resize components if the window has been resized, or this has been called directly.
            if (!e || e.target == window) splitter.trigger("resize");
        };
        args.update = function (isBound) {
            splitter._hadjust = dimSum(splitter, "borderTopWidth", "borderBottomWidth", "marginBottom");
            splitter._hmin = Math.max(dimSum(splitter, "minHeight"), 20);
            isBound && $(window).bind("resize", resizeHandler);
            resizeHandler();
        };
        // Resize event propagation and splitter sizing
        if ( opts.anchorToWindow ) {
            // Account for margin or border on the splitter container and enforce min height
            args.update(true);
        }
        else if ( opts.resizeToWidth && !$.browser.msie )
            $(window).bind("resize", function(){
                splitter.trigger("resize");
            });

        // Resize event handler; triggered immediately to set initial position
        splitter.bind("resize", function(e, size){
            // Custom events bubble in jQuery 1.3; don't Yo Dawg
            if ( e.target != this ) return;
            // Determine new width/height of splitter container
            splitter._DF = splitter[0][opts.pxFixed] - splitter._PBF;
            splitter._DA = splitter[0][opts.pxSplit] - splitter._PBA;
            // Bail if splitter isn't visible or content isn't there yet
            if ( splitter._DF <= 0 || splitter._DA <= 0 ) return;
            // Re-divvy the adjustable dimension; maintain size of the preferred pane
            resplit(!isNaN(size)? size : (!(opts.sizeRight||opts.sizeBottom)? A[0][opts.pxSplit] :
                splitter._DA-B[0][opts.pxSplit]-bar._DA));
        }).trigger("resize" , [initPos]);
    });
};
})(jQuery);

/*Places focus on the main content section of pages*/
/* TODO - CONFDEV-2045 Clean up this code */
window.placeFocus = function () {

    var mainSection = document.getElementById('splitter-content');
    // Don't focus when there is an editor on the page.
    if(mainSection && AJS.$("#wysiwyg").length == 0)
    {
        mainSection.focus();
    }
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.doctheme:splitter', location = 'doctheme/space-specific-quicknav.js' */
AJS.toInit(function($) {
    // This code runs on every page, but we only want it to run in the Doc theme.
    if ($("#com-atlassian-confluence").hasClass("theme-documentation")) {
        var quickSearchQuery = $("#quick-search-query");

        var siteSearchForm = quickSearchQuery.closest("form");
        var spaceKey = $("fieldset input[name='spaceSearch']", siteSearchForm).val() === "true" ? $("#confluence-space-key").attr("content") : "";

        siteSearchForm.submit(function() {
            var query = quickSearchQuery.val();

            if (query.search(/all:/gi) >= 0) {
                quickSearchQuery.val($.trim(query.replace(/all:/gi, '')));
            }
        });

        var quickNav = AJS.defaultIfUndefined("Atlassian.SearchableApps.QuickNav", { defaultValue: Confluence.QuickNav });

        AJS.log("Applying doc-theme quick search");
        quickNav.addDropDownPostProcess(function (dropDown) {
            if (spaceKey) {
                var searchFor = $("a.search-for", dropDown);
                searchFor.attr("href", searchFor.attr("href") + "&where=" + encodeURIComponent(spaceKey));
            }
        });
        quickNav.setMakeParams(function(value) {
            var params = { query : value };

            if (params.query.search(/all:/gi) >= 0) {
                $("input[name='where']", siteSearchForm).val("");
                params.query = $.trim(params.query.replace(/all:/gi, ''));
                if (!params.query)
                    params.query = "ALL";
            } else if (spaceKey) {
                params.spaceKey = spaceKey;
            }

            return params;
        });

        // DOC-79 - We need to overwrite the tooltip that Confluence appended to the quick search box when each page finish loading.
        quickSearchQuery.mouseover(function() {
            if(spaceKey) {
                quickSearchQuery.attr("title", $("input[name='tooltip']", siteSearchForm).val());
            }
        });
    }
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue\/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-resources-main', location = 'js/DiagramlyBlueprintInit.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
AJS.toInit(function(e){var d=Confluence.storageManager("comments");var a=function(){if(confirm("Are you sure you want to delete the comment?")){this.href=this.href+"&confirm=yes";return true}return false};Confluence.Comments={bindRemoveConfirmation:function(f){e("#comment-"+f+" .comment-action-remove a").click(a)}};if(!e("#comments-section").length){return}if(AJS.isIE6){e(".logo.anonymous").each(function(){var f=document.createElement("div");f.className="replacement";AJS.applyPngFilter(f,this.src);e(this).replaceWith(f)});e(".comment-actions .comment-permalink a").each(function(){e(this).addClass("filtered");var g=e(this).css("background-image").replace(/^url\(\"?|\"?\)$/g,"");var f=g.replace("light","dark");AJS.applyPngFilter(this,g);this.style.cursor="pointer";this.style.background="none";e(this).hover(function(){AJS.applyPngFilter(this,f)},function(){AJS.applyPngFilter(this,g)})})}e("#comments-section .comment:odd").addClass("odd");e(".comment-action-remove a").click(a);var c=e("#addcomment.comment-text"),b=e("#comments-text-editor textarea");b.focus(function(){c.addClass("active")}).blur(function(){if(!e.trim(b.val()).length){c.removeClass("active")}}).bind("reset.default-text",function(){c.removeClass("active")});e("form[name='textcommentform']").submit(function(){var f=b.val();if(!e.trim(f)){alert("Comment text is empty. Cannot create empty comments.");return false}return true});e("#add-comment-rte").click(function(){if(!b.hasClass("placeholded")){d.setItem("text-comment",e.trim(b.val()))}});if(e("#addcomment #rte").length){AJS.bind("init.rte",function(h,g){var f=d.getItem("text-comment");if(f){g.editor.setContent(f);d.setItem("text-comment","")}})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.issueStatus) {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="', soy.$$escapeHtml("No issue status information was provided"), '"></span>');
  } else if (opt_data.issueStatus.statusCategory) {
    JIRA.Template.Util.Issue.Status.issueStatus(opt_data, output);
  } else {
    JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}, output);
  }
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img src="', soy.$$escapeHtml(opt_data.iconUrl), '" width="16" height="16" alt="', soy.$$escapeHtml(opt_data.name), '" title="', soy.$$escapeHtml(opt_data.name), (opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '', '" class="jira-issue-status-icon">', (! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth}, output);
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = new soy.StringBuilder('<span class="jira-issue-status-tooltip-title">', soy.$$escapeHtml(opt_data.name), '</span>', (opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  tooltipContent__soy47 = tooltipContent__soy47.toString();
  output.append('<span class=" jira-issue-status-lozenge aui-lozenge ');
  JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data, output);
  output.append((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '', (opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '', ' jira-issue-status-lozenge-max-width-', soy.$$escapeHtml(maxWidth__soy46), '" data-tooltip="', soy.$$escapeHtml(tooltipContent__soy47), '">', soy.$$escapeHtml(opt_data.name), '</span>');
  return opt_sb ? '' : output.toString();
};


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('jira-issue-status-lozenge-', soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray'), ' ', (opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="items-section">');
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Issues", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'SPRINTS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Sprints", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'VERSIONS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Versions", type: groupData6.type, links: groupData6.links}, output);
          break;
        case 'EPICS':
          Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: "Epics", type: groupData6.type, links: groupData6.links}, output);
          break;
      }
    }
  }
  output.append('</div>');
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}, output);
  Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-feature-discovery"><h2>', soy.$$escapeHtml("View related JIRA items here"), '</h2><p>', soy.$$escapeHtml("Now you can see which epics, sprints, versions and issues relate to this page."), '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">');
  aui.buttons.button({text: "Show me", extraClasses: 'showme'}, output);
  aui.buttons.button({text: "Don\x27t show again", type: 'link', extraClasses: 'close'}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("JIRA links cannot be displayed. Either you do not have correct JIRA permissions or the links have been removed.") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.appLinks.length) {
    var param66 = new soy.StringBuilder();
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66.append('<p>', AJS.format("{0}Login \x26amp; Approve{1} to retrieve data from {2}",'<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName), '</p>');
    } else {
      param66.append('<p>', soy.$$escapeHtml("Authenticate to retrieve data from the following instances:"), '</p>');
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66.append('<div><a class="jira-metadata-auth-link" href="#" data-href="', soy.$$escapeHtml(appLinkData78.authorisationUrl), '">', soy.$$escapeHtml(appLinkData78.name), '</a></div>');
      }
    }
    aui.message.hint({content: param66.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jira-metadata-section ', soy.$$escapeHtml(opt_data.type), '-section"><div class="section-label"><span class="icon"></span><span>', soy.$$escapeHtml(opt_data.headingText), '</span></div><ul class="jira-metadata-list jira-', soy.$$escapeHtml(opt_data.type), '-list">');
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output.append('<li class="jira-metadata-item"><span class="item-label"><a href="', soy.$$escapeHtml(""), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(itemData94.url), '&t=', soy.$$escapeHtml(opt_data.type), '" title="', soy.$$escapeHtml(itemData94.name), '">', soy.$$escapeHtml(itemData94.name), '</a>');
    if (itemData94.status) {
      output.append('&nbsp;');
      if (itemData94.status.statusCategory) {
        JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}, output);
      } else {
        output.append('<span class="item-status">(', soy.$$escapeHtml(itemData94.status.name), ')</span>');
      }
    }
    output.append('</span>', (itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '', '</li>');
  }
  output.append('</ul><ul class="jira-metadata-list ', soy.$$escapeHtml(opt_data.type), '-more-link">');
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output.append('<li class="jira-metadata-item"><a href="', soy.$$escapeHtml(""), '/plugins/servlet/jira-metadata/redirect?u=', soy.$$escapeUri(linkData130.url), '&t=', soy.$$escapeHtml(opt_data.type), '&more">', soy.$$escapeHtml(AJS.format("View {0} more in {1}",linkData130.numItems,linkData130.appName)), '</a></li>');
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog"><h2 class="title">', soy.$$escapeHtml("JIRA links"), '</h2><div class="spinner-container"><div class="spinner"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata.") + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'}, output);
  } else if (opt_data.errors.length > 1) {
    var param159 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to retrieve JIRA metadata. The following errors occurred:"), '</p><ul>');
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159.append('<li>', soy.$$escapeHtml(errorData163.errorMessage), '</li>');
    }
    param159.append('</ul>');
    aui.message.warning({content: param159.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jira-metadata-dialog" class="rendered-content">');
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to retrieve JIRA metadata. Could not connect to Confluence") + '</p>'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
AJS.toInit(function(h){var i="com.atlassian.confluence.plugins.confluence-jira-metadata";var s=false;var o;var l;var q="jira-metadata-dialog";var g=h("#content-metadata-jira");var t;var e="jira-metadata-discovery";var r=AJS.Meta.get("jira-metadata-count");var k="linked-issues-dropdown";if(r>0){p(r,AJS.Meta.get("jira-metadata-count-incomplete"))}else{if(r==-1){h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(u){if(u.count>0){p(u.count,u.incomplete)}}})}}function p(v,u){f(v,u);g.removeClass("hidden");if(b()){o=AJS.InlineDialog(g,q,function(x,w,y){AJS.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!l||!s){l=x;y();a(x)}else{y()}return false},{hideDelay:null});g.click(function(){if(h("#"+q).is(":visible")){o.hide()}})}if(g&&j()){m();g.one("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k)})}}function f(v,u){if(!u){h("#content-metadata-jira > span").text(v==1?"1 JIRA link":AJS.format("{0} JIRA links",v))}}function b(){return !g.attr("href")}function m(){t=AJS.InlineDialog(g,e,function(v,u,w){v.html(Confluence.Templates.Metadata.JIRA.featureDiscovery());v.find(".showme").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide();o.show()});v.find(".close").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide()});w()},{noBind:true,closeOthers:false,hideDelay:null});t.show();Confluence.FeatureDiscovery.forPlugin(i).addDiscoveryView(k)}function j(){return !AJS.Meta.get("blueprint-index-popup-key")&&Confluence.FeatureDiscovery.forPlugin(i).shouldShow(k)}function a(){d();l.html(Confluence.Templates.Metadata.JIRA.loadingMetadata());l.find(".spinner").spin("medium");h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",error:function(u){c();l.html(Confluence.Templates.Metadata.JIRA.unknownError())},success:function(v){c();s=true;f(v.count,false);var w;if(v.count===0&&!(v.unauthorisedAppLinks&&v.unauthorisedAppLinks.length>0)&&v.errors.length==0){AJS.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});w=Confluence.Templates.Metadata.JIRA.nometadata()}else{w=Confluence.Templates.Metadata.JIRA.metadata(v)}var x=l.height();l.html(w);var u=l.height();l.find("#"+q+" > *").not("h2").css("opacity",0).animate({opacity:1},350,"easeInOutQuad");l.css({overflow:"hidden",height:x+"px"}).animate({height:u+"px"},350,"easeInOutQuad",function(){l.css({overflow:"",height:""})});n()},complete:function(){h("#"+q+" .icon-close").click(function(u){u.stopPropagation();h(this).closest(".closable").remove()})}})}function n(){h(".jira-metadata-auth-link").click(function(u){u.preventDefault();AppLinks.authenticateRemoteCredentials(h(this).data("href"),a,function(){})})}function d(){if(l&&l.height()>0){l.css("height",l.height())}}function c(){l&&l.css("height","")}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});AJS.toInit(function(a){Confluence.Blueprint.showIndexPagePopup=function(c){var e=function(j){return function(m,k,l){m.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:j.toLowerCase()}));l()}};var b=AJS.$(AJS.$("li.blueprint."+c)[0]);var i=b.text();var h=AJS.$(".icon",b);var g="blueprintIndexSidebarPopup";var d=AJS.InlineDialog(h.is(":visible")?h:AJS.$(".acs-nav-sections .quick-links-section"),g,e(i),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(j){var k=g+".inline-dialog-check";a("body").unbind("click."+k)});d.show();var f=function(j){AJS.$(document).on("click","#dismiss-index-popup",function(){j.hide();return false})}(d);AJS.bind("quickedit.success",function(){d.hide()})}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){var a=b(".create-from-template-button");a.each(function(){var d=b(this);if(d.attr("aria-disabled")=="true"){var c={live:true,gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0};d.tooltip(c)}else{d.click(function(){d.addClass("launching-dialog");Confluence.Blueprint.Dialog.launch(d.data());return false})}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class=\'aui-button create-from-template-button\'', (! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml("Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.") + '"' : '', 'data-space-key=\'', soy.$$escapeHtml(opt_data.spaceKey), '\' href=\'', soy.$$escapeHtml(opt_data.createContentUrl), '\'', (opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '', (opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '', (opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '', '>', soy.$$escapeHtml(opt_data.buttonLabel), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.username));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.logo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) {
    output.append('<a ', (opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '', ' href="', soy.$$escapeHtml(""), '/users/editmyprofilepicture.action" title="', soy.$$escapeHtml("Add a picture of yourself"), '"><img class="userLogo logo defaultLogo" src="', soy.$$escapeHtml("/s/en_GB/5527/d6c318572c182872608bdc1754f542eab16839cb.17/_"), '/images/icons/profilepics/add_profile_pic.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Add a picture of yourself"), '"></a>');
  } else {
    if (opt_data.profilePictureInfo.anonymous) {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB/5527/d6c318572c182872608bdc1754f542eab16839cb.17/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml("Anonymous"), '" title="', soy.$$escapeHtml("Anonymous"), '">');
    } else if (opt_data.canView) {
      output.append('<a ', (! opt_data.disableUserHover) ? 'class="userLogoLink"' : '', ' data-username="', soy.$$escapeHtml(opt_data.username), '" href="');
      Confluence.Templates.User.userLinkUrl(opt_data, output);
      output.append('"><img class="userLogo logo" src="', soy.$$escapeHtml(""), soy.$$escapeHtml(opt_data.profilePictureInfo.downloadPath), '" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '"></a>');
    } else {
      output.append('<img class="userLogo logo anonymous" src="', soy.$$escapeHtml("/s/en_GB/5527/d6c318572c182872608bdc1754f542eab16839cb.17/_"), '/images/icons/profilepics/anonymous.png" alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(opt_data.username), '" title="', soy.$$escapeHtml(opt_data.username), '">');
    }
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.username && opt_data.username != '') {
    output.append('<a href="');
    Confluence.Templates.User.userLinkUrl(opt_data, output);
    output.append('"', (opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"', '>', (opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username), '</a>');
  } else {
    output.append(soy.$$escapeHtml("Anonymous"));
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml("Anonymous"));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.content.type == 'trackback') ? '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon icon-trackback" title="' + soy.$$escapeHtml("Track back") + '">' + soy.$$escapeHtml("Track back") + ':</a>' : '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
(function(A){A(function(){A.tablesorter.addParser({id:"dateAttributeParser",is:function(B,D,C){return A(C).is(".content-report-table-macro .modified")
},format:function(B,D,C,E){return A(C).attr("data-sortable-date")
},type:"numeric"})
})
})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output.append('<div class="blueprint-blank-experience ', soy.$$escapeHtml(opt_data.blueprintKey), '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '', '</div>');
  } else {
    output.append('<table class="aui content-report-table-macro', (hasSocialColumn__soy3) ? ' with-extra-columns' : '', '"', (opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '', '><thead><tr><th>', soy.$$escapeHtml("Title"), '</th><th>', soy.$$escapeHtml("Creator"), '</th><th>', soy.$$escapeHtml("Modified"), '</th></tr></thead><tbody>');
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output.append('<tr><td class="title"><a href="', soy.$$escapeHtml(resultData43.urlPath), '">', soy.$$escapeHtml(resultData43.title), '</a></td><td class="creator">');
        Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}, output);
        output.append('</td><td class="modified" data-sortable-date="', soy.$$escapeHtml(resultData43.sortableDate), '">', soy.$$escapeHtml(resultData43.friendlyModificationDate), '</td>', (hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '', '</tr>');
      }
    } else {
      output.append('<tr><td colspan="3">', soy.$$escapeHtml("No content found."), '</td></tr>');
    }
    output.append('</tbody></table>', (opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml("Find more results") + '</a></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
AJS.$(function(A){A(".content-report-table-macro").on("click",".title a",function(D){var B=A(D.delegateTarget).data("analytics-key");
if(B){var C="content-report-table-macro.content-click."+B;
AJS.trigger("analytics",{name:C})
}})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.position.js' */
/*
 * jQuery UI Position 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(G,H){G.ui=G.ui||{};var D=/left|center|right/,E=/top|center|bottom/,A="center",F={},B=G.fn.position,C=G.fn.offset;G.fn.position=function(J){if(!J||!J.of){return B.apply(this,arguments)}J=G.extend({},J);var N=G(J.of),M=N[0],P=(J.collision||"flip").split(" "),O=J.offset?J.offset.split(" "):[0,0],L,I,K;if(M.nodeType===9){L=N.width();I=N.height();K={top:0,left:0}}else{if(M.setTimeout){L=N.width();I=N.height();K={top:N.scrollTop(),left:N.scrollLeft()}}else{if(M.preventDefault){J.at="left top";L=I=0;K={top:J.of.pageY,left:J.of.pageX}}else{L=N.outerWidth();I=N.outerHeight();K=N.offset()}}}G.each(["my","at"],function(){var Q=(J[this]||"").split(" ");if(Q.length===1){Q=D.test(Q[0])?Q.concat([A]):E.test(Q[0])?[A].concat(Q):[A,A]}Q[0]=D.test(Q[0])?Q[0]:A;Q[1]=E.test(Q[1])?Q[1]:A;J[this]=Q});if(P.length===1){P[1]=P[0]}O[0]=parseInt(O[0],10)||0;if(O.length===1){O[1]=O[0]}O[1]=parseInt(O[1],10)||0;if(J.at[0]==="right"){K.left+=L}else{if(J.at[0]===A){K.left+=L/2}}if(J.at[1]==="bottom"){K.top+=I}else{if(J.at[1]===A){K.top+=I/2}}K.left+=O[0];K.top+=O[1];return this.each(function(){var T=G(this),V=T.outerWidth(),S=T.outerHeight(),U=parseInt(G.curCSS(this,"marginLeft",true))||0,R=parseInt(G.curCSS(this,"marginTop",true))||0,X=V+U+(parseInt(G.curCSS(this,"marginRight",true))||0),Y=S+R+(parseInt(G.curCSS(this,"marginBottom",true))||0),W=G.extend({},K),Q;if(J.my[0]==="right"){W.left-=V}else{if(J.my[0]===A){W.left-=V/2}}if(J.my[1]==="bottom"){W.top-=S}else{if(J.my[1]===A){W.top-=S/2}}if(!F.fractions){W.left=Math.round(W.left);W.top=Math.round(W.top)}Q={left:W.left-U,top:W.top-R};G.each(["left","top"],function(a,Z){if(G.ui.position[P[a]]){G.ui.position[P[a]][Z](W,{targetWidth:L,targetHeight:I,elemWidth:V,elemHeight:S,collisionPosition:Q,collisionWidth:X,collisionHeight:Y,offset:O,my:J.my,at:J.at})}});if(G.fn.bgiframe){T.bgiframe()}T.offset(G.extend(W,{using:J.using}))})};G.ui.position={fit:{left:function(I,J){var L=G(window),K=J.collisionPosition.left+J.collisionWidth-L.width()-L.scrollLeft();I.left=K>0?I.left-K:Math.max(I.left-J.collisionPosition.left,I.left)},top:function(I,J){var L=G(window),K=J.collisionPosition.top+J.collisionHeight-L.height()-L.scrollTop();I.top=K>0?I.top-K:Math.max(I.top-J.collisionPosition.top,I.top)}},flip:{left:function(J,L){if(L.at[0]===A){return }var N=G(window),M=L.collisionPosition.left+L.collisionWidth-N.width()-N.scrollLeft(),I=L.my[0]==="left"?-L.elemWidth:L.my[0]==="right"?L.elemWidth:0,K=L.at[0]==="left"?L.targetWidth:-L.targetWidth,O=-2*L.offset[0];J.left+=L.collisionPosition.left<0?I+K+O:M>0?I+K+O:0},top:function(J,L){if(L.at[1]===A){return }var N=G(window),M=L.collisionPosition.top+L.collisionHeight-N.height()-N.scrollTop(),I=L.my[1]==="top"?-L.elemHeight:L.my[1]==="bottom"?L.elemHeight:0,K=L.at[1]==="top"?L.targetHeight:-L.targetHeight,O=-2*L.offset[1];J.top+=L.collisionPosition.top<0?I+K+O:M>0?I+K+O:0}}};if(!G.offset.setOffset){G.offset.setOffset=function(M,J){if(/static/.test(G.curCSS(M,"position"))){M.style.position="relative"}var L=G(M),O=L.offset(),I=parseInt(G.curCSS(M,"top",true),10)||0,N=parseInt(G.curCSS(M,"left",true),10)||0,K={top:(J.top-O.top)+I,left:(J.left-O.left)+N};if("using" in J){J.using.call(M,K)}else{L.css(K)}};G.fn.offset=function(I){var J=this[0];if(!J||!J.ownerDocument){return null}if(I){if(G.isFunction(I)){return this.each(function(K){G(this).offset(I.call(this,K,G(this).offset()))})}return this.each(function(){G.offset.setOffset(this,I)})}return C.call(this)}}if(!G.curCSS){G.curCSS=G.css}(function(){var I=document.getElementsByTagName("body")[0],P=document.createElement("div"),M,O,J,N,L;M=document.createElement(I?"div":"body");J={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(I){G.extend(J,{position:"absolute",left:"-1000px",top:"-1000px"})}for(var K in J){M.style[K]=J[K]}M.appendChild(P);O=I||document.documentElement;O.insertBefore(M,O.firstChild);P.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";N=G(P).offset(function(Q,R){return R}).offset();M.innerHTML="";O.removeChild(M);L=N.top+N.left+(I?2000:0);F.fractions=L>21&&L<22})()}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.droppable.js' */
/*
 * jQuery UI Droppable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(A,B){A.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var D=this.options,C=D.accept;this.isover=0;this.isout=1;this.accept=A.isFunction(C)?C:function(E){return E.is(C)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};A.ui.ddmanager.droppables[D.scope]=A.ui.ddmanager.droppables[D.scope]||[];A.ui.ddmanager.droppables[D.scope].push(this);(D.addClasses&&this.element.addClass("ui-droppable"))},destroy:function(){var C=A.ui.ddmanager.droppables[this.options.scope];for(var D=0;D<C.length;D++){if(C[D]==this){C.splice(D,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(C,D){if(C=="accept"){this.accept=A.isFunction(D)?D:function(E){return E.is(D)}}A.Widget.prototype._setOption.apply(this,arguments)},_activate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}(C&&this._trigger("activate",D,this.ui(C)))},_deactivate:function(D){var C=A.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}(C&&this._trigger("deactivate",D,this.ui(C)))},_over:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",D,this.ui(C))}},_out:function(D){var C=A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return }if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",D,this.ui(C))}},_drop:function(D,E){var C=E||A.ui.ddmanager.current;if(!C||(C.currentItem||C.element)[0]==this.element[0]){return false}var F=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var G=A.data(this,"droppable");if(G.options.greedy&&!G.options.disabled&&G.options.scope==C.options.scope&&G.accept.call(G.element[0],(C.currentItem||C.element))&&A.ui.intersect(C,A.extend(G,{offset:G.element.offset()}),G.options.tolerance)){F=true;return false}});if(F){return false}if(this.accept.call(this.element[0],(C.currentItem||C.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",D,this.ui(C));return this.element}return false},ui:function(C){return{draggable:(C.currentItem||C.element),helper:C.helper,position:C.position,offset:C.positionAbs}}});A.extend(A.ui.droppable,{version:"1.8.24"});A.ui.intersect=function(P,J,N){if(!J.offset){return false}var E=(P.positionAbs||P.position.absolute).left,D=E+P.helperProportions.width,M=(P.positionAbs||P.position.absolute).top,L=M+P.helperProportions.height;var G=J.offset.left,C=G+J.proportions.width,O=J.offset.top,K=O+J.proportions.height;switch(N){case"fit":return(G<=E&&D<=C&&O<=M&&L<=K);break;case"intersect":return(G<E+(P.helperProportions.width/2)&&D-(P.helperProportions.width/2)<C&&O<M+(P.helperProportions.height/2)&&L-(P.helperProportions.height/2)<K);break;case"pointer":var H=((P.positionAbs||P.position.absolute).left+(P.clickOffset||P.offset.click).left),I=((P.positionAbs||P.position.absolute).top+(P.clickOffset||P.offset.click).top),F=A.ui.isOver(I,H,O,G,J.proportions.height,J.proportions.width);return F;break;case"touch":return((M>=O&&M<=K)||(L>=O&&L<=K)||(M<O&&L>K))&&((E>=G&&E<=C)||(D>=G&&D<=C)||(E<G&&D>C));break;default:return false;break}};A.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(F,H){var C=A.ui.ddmanager.droppables[F.options.scope]||[];var G=H?H.type:null;var I=(F.currentItem||F.element).find(":data(droppable)").andSelf();droppablesLoop:for(var E=0;E<C.length;E++){if(C[E].options.disabled||(F&&!C[E].accept.call(C[E].element[0],(F.currentItem||F.element)))){continue}for(var D=0;D<I.length;D++){if(I[D]==C[E].element[0]){C[E].proportions.height=0;continue droppablesLoop}}C[E].visible=C[E].element.css("display")!="none";if(!C[E].visible){continue}if(G=="mousedown"){C[E]._activate.call(C[E],H)}C[E].offset=C[E].element.offset();C[E].proportions={width:C[E].element[0].offsetWidth,height:C[E].element[0].offsetHeight}}},drop:function(C,D){var E=false;A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(!this.options){return }if(!this.options.disabled&&this.visible&&A.ui.intersect(C,this,this.options.tolerance)){E=this._drop.call(this,D)||E}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(C.currentItem||C.element))){this.isout=1;this.isover=0;this._deactivate.call(this,D)}});return E},dragStart:function(C,D){C.element.parents(":not(body,html)").bind("scroll.droppable",function(){if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}})},drag:function(C,D){if(C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}A.each(A.ui.ddmanager.droppables[C.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return }var G=A.ui.intersect(C,this,this.options.tolerance);var I=!G&&this.isover==1?"isout":(G&&this.isover==0?"isover":null);if(!I){return }var H;if(this.options.greedy){var F=this.options.scope;var E=this.element.parents(":data(droppable)").filter(function(){return A.data(this,"droppable").options.scope===F});if(E.length){H=A.data(E[0],"droppable");H.greedyChild=(I=="isover"?1:0)}}if(H&&I=="isover"){H.isover=0;H.isout=1;H._out.call(H,D)}this[I]=1;this[I=="isout"?"isover":"isout"]=0;this[I=="isover"?"_over":"_out"].call(this,D);if(H&&I=="isout"){H.isout=0;H.isover=1;H._over.call(H,D)}})},dragStop:function(C,D){C.element.parents(":not(body,html)").unbind("scroll.droppable");if(!C.options.refreshPositions){A.ui.ddmanager.prepareOffsets(C,D)}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.resizable.js' */
/*
 * jQuery UI Resizable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(C,D){C.widget("ui.resizable",C.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){var F=this,J=this.options;this.element.addClass("ui-resizable");C.extend(this,{_aspectRatio:!!(J.aspectRatio),aspectRatio:J.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:J.helper||J.ghost||J.animate?J.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(C('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=J.handles||(!C(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all"){this.handles="n,e,s,w,se,sw,ne,nw"}var K=this.handles.split(",");this.handles={};for(var G=0;G<K.length;G++){var I=C.trim(K[G]),E="ui-resizable-"+I;var H=C('<div class="ui-resizable-handle '+E+'"></div>');H.css({zIndex:J.zIndex});if("se"==I){H.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[I]=".ui-resizable-"+I;this.element.append(H)}}this._renderAxis=function(P){P=P||this.element;for(var M in this.handles){if(this.handles[M].constructor==String){this.handles[M]=C(this.handles[M],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var N=C(this.handles[M],this.element),O=0;O=/sw|ne|nw|se|n|s/.test(M)?N.outerHeight():N.outerWidth();var L=["padding",/ne|nw|n/.test(M)?"Top":/se|sw|s/.test(M)?"Bottom":/^e$/.test(M)?"Right":"Left"].join("");P.css(L,O);this._proportionallyResize()}if(!C(this.handles[M]).length){continue}}};this._renderAxis(this.element);this._handles=C(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!F.resizing){if(this.className){var L=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}F.axis=L&&L[1]?L[1]:"se"}});if(J.autoHide){this._handles.hide();C(this.element).addClass("ui-resizable-autohide").hover(function(){if(J.disabled){return }C(this).removeClass("ui-resizable-autohide");F._handles.show()},function(){if(J.disabled){return }if(!F.resizing){C(this).addClass("ui-resizable-autohide");F._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var E=function(G){C(G).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){E(this.element);var F=this.element;F.after(this.originalElement.css({position:F.css("position"),width:F.outerWidth(),height:F.outerHeight(),top:F.css("top"),left:F.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);E(this.originalElement);return this},_mouseCapture:function(F){var G=false;for(var E in this.handles){if(C(this.handles[E])[0]==F.target){G=true}}return !this.options.disabled&&G},_mouseStart:function(G){var J=this.options,F=this.element.position(),E=this.element;this.resizing=true;this.documentScroll={top:C(document).scrollTop(),left:C(document).scrollLeft()};if(E.is(".ui-draggable")||(/absolute/).test(E.css("position"))){E.css({position:"absolute",top:F.top,left:F.left})}this._renderProxy();var K=B(this.helper.css("left")),H=B(this.helper.css("top"));if(J.containment){K+=C(J.containment).scrollLeft()||0;H+=C(J.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:K,top:H};this.size=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalSize=this._helper?{width:E.outerWidth(),height:E.outerHeight()}:{width:E.width(),height:E.height()};this.originalPosition={left:K,top:H};this.sizeDiff={width:E.outerWidth()-E.width(),height:E.outerHeight()-E.height()};this.originalMousePosition={left:G.pageX,top:G.pageY};this.aspectRatio=(typeof J.aspectRatio=="number")?J.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);var I=C(".ui-resizable-"+this.axis).css("cursor");C("body").css("cursor",I=="auto"?this.axis+"-resize":I);E.addClass("ui-resizable-resizing");this._propagate("start",G);return true},_mouseDrag:function(E){var H=this.helper,G=this.options,M={},P=this,J=this.originalMousePosition,N=this.axis;var Q=(E.pageX-J.left)||0,O=(E.pageY-J.top)||0;var I=this._change[N];if(!I){return false}var L=I.apply(this,[E,Q,O]),K=C.browser.msie&&C.browser.version<7,F=this.sizeDiff;this._updateVirtualBoundaries(E.shiftKey);if(this._aspectRatio||E.shiftKey){L=this._updateRatio(L,E)}L=this._respectSize(L,E);this._propagate("resize",E);H.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}this._updateCache(L);this._trigger("resize",E,this.ui());return false},_mouseStop:function(H){this.resizing=false;var I=this.options,M=this;if(this._helper){var G=this._proportionallyResizeElements,E=G.length&&(/textarea/i).test(G[0].nodeName),F=E&&C.ui.hasScroll(G[0],"left")?0:M.sizeDiff.height,K=E?0:M.sizeDiff.width;var N={width:(M.helper.width()-K),height:(M.helper.height()-F)},J=(parseInt(M.element.css("left"),10)+(M.position.left-M.originalPosition.left))||null,L=(parseInt(M.element.css("top"),10)+(M.position.top-M.originalPosition.top))||null;if(!I.animate){this.element.css(C.extend(N,{top:L,left:J}))}M.helper.height(M.size.height);M.helper.width(M.size.width);if(this._helper&&!I.animate){this._proportionallyResize()}}C("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",H);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(G){var J=this.options,I,H,F,K,E;E={minWidth:A(J.minWidth)?J.minWidth:0,maxWidth:A(J.maxWidth)?J.maxWidth:Infinity,minHeight:A(J.minHeight)?J.minHeight:0,maxHeight:A(J.maxHeight)?J.maxHeight:Infinity};if(this._aspectRatio||G){I=E.minHeight*this.aspectRatio;F=E.minWidth/this.aspectRatio;H=E.maxHeight*this.aspectRatio;K=E.maxWidth/this.aspectRatio;if(I>E.minWidth){E.minWidth=I}if(F>E.minHeight){E.minHeight=F}if(H<E.maxWidth){E.maxWidth=H}if(K<E.maxHeight){E.maxHeight=K}}this._vBoundaries=E},_updateCache:function(E){var F=this.options;this.offset=this.helper.offset();if(A(E.left)){this.position.left=E.left}if(A(E.top)){this.position.top=E.top}if(A(E.height)){this.size.height=E.height}if(A(E.width)){this.size.width=E.width}},_updateRatio:function(H,G){var I=this.options,J=this.position,F=this.size,E=this.axis;if(A(H.height)){H.width=(H.height*this.aspectRatio)}else{if(A(H.width)){H.height=(H.width/this.aspectRatio)}}if(E=="sw"){H.left=J.left+(F.width-H.width);H.top=null}if(E=="nw"){H.top=J.top+(F.height-H.height);H.left=J.left+(F.width-H.width)}return H},_respectSize:function(L,G){var J=this.helper,I=this._vBoundaries,Q=this._aspectRatio||G.shiftKey,P=this.axis,S=A(L.width)&&I.maxWidth&&(I.maxWidth<L.width),M=A(L.height)&&I.maxHeight&&(I.maxHeight<L.height),H=A(L.width)&&I.minWidth&&(I.minWidth>L.width),R=A(L.height)&&I.minHeight&&(I.minHeight>L.height);if(H){L.width=I.minWidth}if(R){L.height=I.minHeight}if(S){L.width=I.maxWidth}if(M){L.height=I.maxHeight}var F=this.originalPosition.left+this.originalSize.width,O=this.position.top+this.size.height;var K=/sw|nw|w/.test(P),E=/nw|ne|n/.test(P);if(H&&K){L.left=F-I.minWidth}if(S&&K){L.left=F-I.maxWidth}if(R&&E){L.top=O-I.minHeight}if(M&&E){L.top=O-I.maxHeight}var N=!L.width&&!L.height;if(N&&!L.left&&L.top){L.top=null}else{if(N&&!L.top&&L.left){L.left=null}}return L},_proportionallyResize:function(){var J=this.options;if(!this._proportionallyResizeElements.length){return }var G=this.helper||this.element;for(var F=0;F<this._proportionallyResizeElements.length;F++){var H=this._proportionallyResizeElements[F];if(!this.borderDif){var E=[H.css("borderTopWidth"),H.css("borderRightWidth"),H.css("borderBottomWidth"),H.css("borderLeftWidth")],I=[H.css("paddingTop"),H.css("paddingRight"),H.css("paddingBottom"),H.css("paddingLeft")];this.borderDif=C.map(E,function(K,M){var L=parseInt(K,10)||0,N=parseInt(I[M],10)||0;return L+N})}if(C.browser.msie&&!(!(C(G).is(":hidden")||C(G).parents(":hidden").length))){continue}H.css({height:(G.height()-this.borderDif[0]-this.borderDif[2])||0,width:(G.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var F=this.element,I=this.options;this.elementOffset=F.offset();if(this._helper){this.helper=this.helper||C('<div style="overflow:hidden;"></div>');var E=C.browser.msie&&C.browser.version<7,G=(E?1:0),H=(E?2:-1);this.helper.addClass(this._helper).css({width:this.element.outerWidth()+H,height:this.element.outerHeight()+H,position:"absolute",left:this.elementOffset.left-G+"px",top:this.elementOffset.top-G+"px",zIndex:++I.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(G,F,E){return{width:this.originalSize.width+F}},w:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{left:I.left+F,width:G.width-F}},n:function(H,F,E){var J=this.options,G=this.originalSize,I=this.originalPosition;return{top:I.top+E,height:G.height-E}},s:function(G,F,E){return{height:this.originalSize.height+E}},se:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},sw:function(G,F,E){return C.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[G,F,E]))},ne:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[G,F,E]))},nw:function(G,F,E){return C.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[G,F,E]))}},_propagate:function(F,E){C.ui.plugin.call(this,F,[E,this.ui()]);(F!="resize"&&this._trigger(F,E,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});C.extend(C.ui.resizable,{version:"1.8.24"});C.ui.plugin.add("resizable","alsoResize",{start:function(F,G){var E=C(this).data("resizable"),I=E.options;var H=function(J){C(J).each(function(){var K=C(this);K.data("resizable-alsoresize",{width:parseInt(K.width(),10),height:parseInt(K.height(),10),left:parseInt(K.css("left"),10),top:parseInt(K.css("top"),10)})})};if(typeof (I.alsoResize)=="object"&&!I.alsoResize.parentNode){if(I.alsoResize.length){I.alsoResize=I.alsoResize[0];H(I.alsoResize)}else{C.each(I.alsoResize,function(J){H(J)})}}else{H(I.alsoResize)}},resize:function(G,I){var F=C(this).data("resizable"),J=F.options,H=F.originalSize,L=F.originalPosition;var K={height:(F.size.height-H.height)||0,width:(F.size.width-H.width)||0,top:(F.position.top-L.top)||0,left:(F.position.left-L.left)||0},E=function(M,N){C(M).each(function(){var Q=C(this),R=C(this).data("resizable-alsoresize"),P={},O=N&&N.length?N:Q.parents(I.originalElement[0]).length?["width","height"]:["width","height","top","left"];C.each(O,function(S,U){var T=(R[U]||0)+(K[U]||0);if(T&&T>=0){P[U]=T||null}});Q.css(P)})};if(typeof (J.alsoResize)=="object"&&!J.alsoResize.nodeType){C.each(J.alsoResize,function(M,N){E(M,N)})}else{E(J.alsoResize)}},stop:function(E,F){C(this).removeData("resizable-alsoresize")}});C.ui.plugin.add("resizable","animate",{stop:function(I,N){var O=C(this).data("resizable"),J=O.options;var H=O._proportionallyResizeElements,E=H.length&&(/textarea/i).test(H[0].nodeName),F=E&&C.ui.hasScroll(H[0],"left")?0:O.sizeDiff.height,L=E?0:O.sizeDiff.width;var G={width:(O.size.width-L),height:(O.size.height-F)},K=(parseInt(O.element.css("left"),10)+(O.position.left-O.originalPosition.left))||null,M=(parseInt(O.element.css("top"),10)+(O.position.top-O.originalPosition.top))||null;O.element.animate(C.extend(G,M&&K?{top:M,left:K}:{}),{duration:J.animateDuration,easing:J.animateEasing,step:function(){var P={width:parseInt(O.element.css("width"),10),height:parseInt(O.element.css("height"),10),top:parseInt(O.element.css("top"),10),left:parseInt(O.element.css("left"),10)};if(H&&H.length){C(H[0]).css({width:P.width,height:P.height})}O._updateCache(P);O._propagate("resize",I)}})}});C.ui.plugin.add("resizable","containment",{start:function(F,P){var R=C(this).data("resizable"),J=R.options,L=R.element;var G=J.containment,K=(G instanceof C)?G.get(0):(/parent/.test(G))?L.parent().get(0):G;if(!K){return }R.containerElement=C(K);if(/document/.test(G)||G==document){R.containerOffset={left:0,top:0};R.containerPosition={left:0,top:0};R.parentData={element:C(document),left:0,top:0,width:C(document).width(),height:C(document).height()||document.body.parentNode.scrollHeight}}else{var N=C(K),I=[];C(["Top","Right","Left","Bottom"]).each(function(T,S){I[T]=B(N.css("padding"+S))});R.containerOffset=N.offset();R.containerPosition=N.position();R.containerSize={height:(N.innerHeight()-I[3]),width:(N.innerWidth()-I[1])};var O=R.containerOffset,E=R.containerSize.height,M=R.containerSize.width,H=(C.ui.hasScroll(K,"left")?K.scrollWidth:M),Q=(C.ui.hasScroll(K)?K.scrollHeight:E);R.parentData={element:K,left:O.left,top:O.top,width:H,height:Q}}},resize:function(G,P){var S=C(this).data("resizable"),I=S.options,F=S.containerSize,O=S.containerOffset,M=S.size,N=S.position,Q=S._aspectRatio||G.shiftKey,E={top:0,left:0},H=S.containerElement;if(H[0]!=document&&(/static/).test(H.css("position"))){E=O}if(N.left<(S._helper?O.left:0)){S.size.width=S.size.width+(S._helper?(S.position.left-O.left):(S.position.left-E.left));if(Q){S.size.height=S.size.width/S.aspectRatio}S.position.left=I.helper?O.left:0}if(N.top<(S._helper?O.top:0)){S.size.height=S.size.height+(S._helper?(S.position.top-O.top):S.position.top);if(Q){S.size.width=S.size.height*S.aspectRatio}S.position.top=S._helper?O.top:0}S.offset.left=S.parentData.left+S.position.left;S.offset.top=S.parentData.top+S.position.top;var L=Math.abs((S._helper?S.offset.left-E.left:(S.offset.left-E.left))+S.sizeDiff.width),R=Math.abs((S._helper?S.offset.top-E.top:(S.offset.top-O.top))+S.sizeDiff.height);var K=S.containerElement.get(0)==S.element.parent().get(0),J=/relative|absolute/.test(S.containerElement.css("position"));if(K&&J){L-=S.parentData.left}if(L+S.size.width>=S.parentData.width){S.size.width=S.parentData.width-L;if(Q){S.size.height=S.size.width/S.aspectRatio}}if(R+S.size.height>=S.parentData.height){S.size.height=S.parentData.height-R;if(Q){S.size.width=S.size.height*S.aspectRatio}}},stop:function(F,M){var O=C(this).data("resizable"),G=O.options,K=O.position,L=O.containerOffset,E=O.containerPosition,H=O.containerElement;var I=C(O.helper),P=I.offset(),N=I.outerWidth()-O.sizeDiff.width,J=I.outerHeight()-O.sizeDiff.height;if(O._helper&&!G.animate&&(/relative/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}if(O._helper&&!G.animate&&(/static/).test(H.css("position"))){C(this).css({left:P.left-E.left-L.left,width:N,height:J})}}});C.ui.plugin.add("resizable","ghost",{start:function(G,H){var E=C(this).data("resizable"),I=E.options,F=E.size;E.ghost=E.originalElement.clone();E.ghost.css({opacity:0.25,display:"block",position:"relative",height:F.height,width:F.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof I.ghost=="string"?I.ghost:"");E.ghost.appendTo(E.helper)},resize:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost){E.ghost.css({position:"relative",height:E.size.height,width:E.size.width})}},stop:function(F,G){var E=C(this).data("resizable"),H=E.options;if(E.ghost&&E.helper){E.helper.get(0).removeChild(E.ghost.get(0))}}});C.ui.plugin.add("resizable","grid",{resize:function(E,M){var O=C(this).data("resizable"),H=O.options,K=O.size,I=O.originalSize,J=O.originalPosition,N=O.axis,L=H._aspectRatio||E.shiftKey;H.grid=typeof H.grid=="number"?[H.grid,H.grid]:H.grid;var G=Math.round((K.width-I.width)/(H.grid[0]||1))*(H.grid[0]||1),F=Math.round((K.height-I.height)/(H.grid[1]||1))*(H.grid[1]||1);if(/^(se|s|e)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F}else{if(/^(ne)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F}else{if(/^(sw)$/.test(N)){O.size.width=I.width+G;O.size.height=I.height+F;O.position.left=J.left-G}else{O.size.width=I.width+G;O.size.height=I.height+F;O.position.top=J.top-F;O.position.left=J.left-G}}}}});var B=function(E){return parseInt(E,10)||0};var A=function(E){return !isNaN(parseInt(E,10))}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.selectable.js' */
/*
 * jQuery UI Selectable 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.selectable",A.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var C=this;this.element.addClass("ui-selectable");this.dragged=false;var D;this.refresh=function(){D=A(C.options.filter,C.element[0]);D.addClass("ui-selectee");D.each(function(){var E=A(this);var F=E.offset();A.data(this,"selectable-item",{element:this,$element:E,left:F.left,top:F.top,right:F.left+E.outerWidth(),bottom:F.top+E.outerHeight(),startselected:false,selected:E.hasClass("ui-selected"),selecting:E.hasClass("ui-selecting"),unselecting:E.hasClass("ui-unselecting")})})};this.refresh();this.selectees=D.addClass("ui-selectee");this._mouseInit();this.helper=A("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(E){var C=this;this.opos=[E.pageX,E.pageY];if(this.options.disabled){return }var D=this.options;this.selectees=A(D.filter,this.element[0]);this._trigger("start",E);A(D.appendTo).append(this.helper);this.helper.css({left:E.clientX,top:E.clientY,width:0,height:0});if(D.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var F=A.data(this,"selectable-item");F.startselected=true;if(!E.metaKey&&!E.ctrlKey){F.$element.removeClass("ui-selected");F.selected=false;F.$element.addClass("ui-unselecting");F.unselecting=true;C._trigger("unselecting",E,{unselecting:F.element})}});A(E.target).parents().andSelf().each(function(){var G=A.data(this,"selectable-item");if(G){var F=(!E.metaKey&&!E.ctrlKey)||!G.$element.hasClass("ui-selected");G.$element.removeClass(F?"ui-unselecting":"ui-selected").addClass(F?"ui-selecting":"ui-unselecting");G.unselecting=!F;G.selecting=F;G.selected=F;if(F){C._trigger("selecting",E,{selecting:G.element})}else{C._trigger("unselecting",E,{unselecting:G.element})}return false}})},_mouseDrag:function(J){var D=this;this.dragged=true;if(this.options.disabled){return }var F=this.options;var E=this.opos[0],I=this.opos[1],C=J.pageX,H=J.pageY;if(E>C){var G=C;C=E;E=G}if(I>H){var G=H;H=I;I=G}this.helper.css({left:E,top:I,width:C-E,height:H-I});this.selectees.each(function(){var K=A.data(this,"selectable-item");if(!K||K.element==D.element[0]){return }var L=false;if(F.tolerance=="touch"){L=(!(K.left>C||K.right<E||K.top>H||K.bottom<I))}else{if(F.tolerance=="fit"){L=(K.left>E&&K.right<C&&K.top>I&&K.bottom<H)}}if(L){if(K.selected){K.$element.removeClass("ui-selected");K.selected=false}if(K.unselecting){K.$element.removeClass("ui-unselecting");K.unselecting=false}if(!K.selecting){K.$element.addClass("ui-selecting");K.selecting=true;D._trigger("selecting",J,{selecting:K.element})}}else{if(K.selecting){if((J.metaKey||J.ctrlKey)&&K.startselected){K.$element.removeClass("ui-selecting");K.selecting=false;K.$element.addClass("ui-selected");K.selected=true}else{K.$element.removeClass("ui-selecting");K.selecting=false;if(K.startselected){K.$element.addClass("ui-unselecting");K.unselecting=true}D._trigger("unselecting",J,{unselecting:K.element})}}if(K.selected){if(!J.metaKey&&!J.ctrlKey&&!K.startselected){K.$element.removeClass("ui-selected");K.selected=false;K.$element.addClass("ui-unselecting");K.unselecting=true;D._trigger("unselecting",J,{unselecting:K.element})}}}});return false},_mouseStop:function(E){var C=this;this.dragged=false;var D=this.options;A(".ui-unselecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-unselecting");F.unselecting=false;F.startselected=false;C._trigger("unselected",E,{unselected:F.element})});A(".ui-selecting",this.element[0]).each(function(){var F=A.data(this,"selectable-item");F.$element.removeClass("ui-selecting").addClass("ui-selected");F.selecting=false;F.selected=true;F.startselected=true;C._trigger("selected",E,{selected:F.element})});this._trigger("stop",E);this.helper.remove();return false}});A.extend(A.ui.selectable,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.accordion.js' */
/*
 * jQuery UI Accordion 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var C=this,D=C.options;C.running=0;C.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");C.headers=C.element.find(D.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){if(D.disabled){return }A(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){if(D.disabled){return }A(this).removeClass("ui-state-focus")});C.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");if(D.navigation){var E=C.element.find("a").filter(D.navigationFilter).eq(0);if(E.length){var F=E.closest(".ui-accordion-header");if(F.length){C.active=F}else{C.active=E.closest(".ui-accordion-content").prev()}}}C.active=C._findActive(C.active||D.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");C.active.next().addClass("ui-accordion-content-active");C._createIcons();C.resize();C.element.attr("role","tablist");C.headers.attr("role","tab").bind("keydown.accordion",function(G){return C._keydown(G)}).next().attr("role","tabpanel");C.headers.not(C.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();if(!C.active.length){C.headers.eq(0).attr("tabIndex",0)}else{C.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0})}if(!A.browser.safari){C.headers.find("a").attr("tabIndex",-1)}if(D.event){C.headers.bind(D.event.split(" ").join(".accordion ")+".accordion",function(G){C._clickHandler.call(C,G,this);G.preventDefault()})}},_createIcons:function(){var C=this.options;if(C.icons){A("<span></span>").addClass("ui-icon "+C.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(C.icons.header).toggleClass(C.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var C=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var D=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(C.autoHeight||C.fillHeight){D.css("height","")}return A.Widget.prototype.destroy.call(this)},_setOption:function(C,D){A.Widget.prototype._setOption.apply(this,arguments);if(C=="active"){this.activate(D)}if(C=="icons"){this._destroyIcons();if(D){this._createIcons()}}if(C=="disabled"){this.headers.add(this.headers.next())[D?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")}},_keydown:function(F){if(this.options.disabled||F.altKey||F.ctrlKey){return }var G=A.ui.keyCode,E=this.headers.length,C=this.headers.index(F.target),D=false;switch(F.keyCode){case G.RIGHT:case G.DOWN:D=this.headers[(C+1)%E];break;case G.LEFT:case G.UP:D=this.headers[(C-1+E)%E];break;case G.SPACE:case G.ENTER:this._clickHandler({target:F.target},F.target);F.preventDefault()}if(D){A(F.target).attr("tabIndex",-1);A(D).attr("tabIndex",0);D.focus();return false}return true},resize:function(){var C=this.options,E;if(C.fillSpace){if(A.browser.msie){var D=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}E=this.element.parent().height();if(A.browser.msie){this.element.parent().css("overflow",D)}this.headers.each(function(){E-=A(this).outerHeight(true)});this.headers.next().each(function(){A(this).height(Math.max(0,E-A(this).innerHeight()+A(this).height()))}).css("overflow","auto")}else{if(C.autoHeight){E=0;this.headers.next().each(function(){E=Math.max(E,A(this).height("").height())}).height(E)}}return this},activate:function(C){this.options.active=C;var D=this._findActive(C)[0];this._clickHandler({target:D},D);return this},_findActive:function(C){return C?typeof C==="number"?this.headers.filter(":eq("+C+")"):this.headers.not(this.headers.not(C)):C===false?A([]):this.headers.filter(":eq(0)")},_clickHandler:function(C,G){var L=this.options;if(L.disabled){return }if(!C.target){if(!L.collapsible){return }this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);this.active.next().addClass("ui-accordion-content-active");var I=this.active.next(),F={options:L,newHeader:A([]),oldHeader:L.active,newContent:A([]),oldContent:I},D=(this.active=A([]));this._toggle(D,I,F);return }var H=A(C.currentTarget||G),J=H[0]===this.active[0];L.active=L.collapsible&&J?false:this.headers.index(H);if(this.running||(!L.collapsible&&J)){return }var E=this.active,D=H.next(),I=this.active.next(),F={options:L,newHeader:J&&L.collapsible?A([]):H,oldHeader:this.active,newContent:J&&L.collapsible?A([]):D,oldContent:I},K=this.headers.index(this.active[0])>this.headers.index(H[0]);this.active=J?A([]):H;this._toggle(D,I,F,J,K);E.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(L.icons.headerSelected).addClass(L.icons.header);if(!J){H.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(L.icons.header).addClass(L.icons.headerSelected);H.next().addClass("ui-accordion-content-active")}return },_toggle:function(C,I,G,J,K){var M=this,N=M.options;M.toShow=C;M.toHide=I;M.data=G;var D=function(){if(!M){return }return M._completed.apply(M,arguments)};M._trigger("changestart",null,M.data);M.running=I.size()===0?C.size():I.size();if(N.animated){var F={};if(N.collapsible&&J){F={toShow:A([]),toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}else{F={toShow:C,toHide:I,complete:D,down:K,autoHeight:N.autoHeight||N.fillSpace}}if(!N.proxied){N.proxied=N.animated}if(!N.proxiedDuration){N.proxiedDuration=N.duration}N.animated=A.isFunction(N.proxied)?N.proxied(F):N.proxied;N.duration=A.isFunction(N.proxiedDuration)?N.proxiedDuration(F):N.proxiedDuration;var L=A.ui.accordion.animations,E=N.duration,H=N.animated;if(H&&!L[H]&&!A.easing[H]){H="slide"}if(!L[H]){L[H]=function(O){this.slide(O,{easing:H,duration:E||700})}}L[H](F)}else{if(N.collapsible&&J){C.toggle()}else{I.hide();C.show()}D(true)}I.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur();C.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(C){this.running=C?0:--this.running;if(this.running){return }if(this.options.clearStyle){this.toShow.add(this.toHide).css({height:"",overflow:""})}this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length){this.toHide.parent()[0].className=this.toHide.parent()[0].className}this._trigger("change",null,this.data)}});A.extend(A.ui.accordion,{version:"1.8.24",animations:{slide:function(K,I){K=A.extend({easing:"swing",duration:300},K,I);if(!K.toHide.size()){K.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},K);return }if(!K.toShow.size()){K.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},K);return }var D=K.toShow.css("overflow"),H=0,E={},G={},F=["height","paddingTop","paddingBottom"],C;var J=K.toShow;C=J[0].style.width;J.width(J.parent().width()-parseFloat(J.css("paddingLeft"))-parseFloat(J.css("paddingRight"))-(parseFloat(J.css("borderLeftWidth"))||0)-(parseFloat(J.css("borderRightWidth"))||0));A.each(F,function(L,N){G[N]="hide";var M=(""+A.css(K.toShow[0],N)).match(/^([\d+-.]+)(.*)$/);E[N]={value:M[1],unit:M[2]||"px"}});K.toShow.css({height:0,overflow:"hidden"}).show();K.toHide.filter(":hidden").each(K.complete).end().filter(":visible").animate(G,{step:function(L,M){if(M.prop=="height"){H=(M.end-M.start===0)?0:(M.now-M.start)/(M.end-M.start)}K.toShow[0].style[M.prop]=(H*E[M.prop].value)+E[M.prop].unit},duration:K.duration,easing:K.easing,complete:function(){if(!K.autoHeight){K.toShow.css("height","")}K.toShow.css({width:C,overflow:D});K.complete()}})},bounceslide:function(C){this.slide(C,{easing:C.down?"easeOutBounce":"swing",duration:C.down?1000:200})}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.autocomplete.js' */
/*
 * jQuery UI Autocomplete 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(A,B){var C=0;A.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var D=this,F=this.element[0].ownerDocument,E;this.isMultiLine=this.element.is("textarea");this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(G){if(D.options.disabled||D.element.propAttr("readOnly")){return }E=false;var H=A.ui.keyCode;switch(G.keyCode){case H.PAGE_UP:D._move("previousPage",G);break;case H.PAGE_DOWN:D._move("nextPage",G);break;case H.UP:D._keyEvent("previous",G);break;case H.DOWN:D._keyEvent("next",G);break;case H.ENTER:case H.NUMPAD_ENTER:if(D.menu.active){E=true;G.preventDefault()}case H.TAB:if(!D.menu.active){return }D.menu.select(G);break;case H.ESCAPE:D.element.val(D.term);D.close(G);break;default:clearTimeout(D.searching);D.searching=setTimeout(function(){if(D.term!=D.element.val()){D.selectedItem=null;D.search(null,G)}},D.options.delay);break}}).bind("keypress.autocomplete",function(G){if(E){E=false;G.preventDefault()}}).bind("focus.autocomplete",function(){if(D.options.disabled){return }D.selectedItem=null;D.previous=D.element.val()}).bind("blur.autocomplete",function(G){if(D.options.disabled){return }clearTimeout(D.searching);D.closing=setTimeout(function(){D.close(G);D._change(G)},150)});this._initSource();this.menu=A("<ul></ul>").addClass("ui-autocomplete").appendTo(A(this.options.appendTo||"body",F)[0]).mousedown(function(G){var H=D.menu.element[0];if(!A(G.target).closest(".ui-menu-item").length){setTimeout(function(){A(document).one("mousedown",function(I){if(I.target!==D.element[0]&&I.target!==H&&!A.ui.contains(H,I.target)){D.close()}})},1)}setTimeout(function(){clearTimeout(D.closing)},13)}).menu({focus:function(H,I){var G=I.item.data("item.autocomplete");if(false!==D._trigger("focus",H,{item:G})){if(/^key/.test(H.originalEvent.type)){D.element.val(G.value)}}},selected:function(I,J){var H=J.item.data("item.autocomplete"),G=D.previous;if(D.element[0]!==F.activeElement){D.element.focus();D.previous=G;setTimeout(function(){D.previous=G;D.selectedItem=H},1)}if(false!==D._trigger("select",I,{item:H})){D.element.val(H.value)}D.term=D.element.val();D.close(I);D.selectedItem=H},blur:function(G,H){if(D.menu.element.is(":visible")&&(D.element.val()!==D.term)){D.element.val(D.term)}}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");if(A.fn.bgiframe){this.menu.element.bgiframe()}D.beforeunloadHandler=function(){D.element.removeAttr("autocomplete")};A(window).bind("beforeunload",D.beforeunloadHandler)},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();A(window).unbind("beforeunload",this.beforeunloadHandler);A.Widget.prototype.destroy.call(this)},_setOption:function(D,E){A.Widget.prototype._setOption.apply(this,arguments);if(D==="source"){this._initSource()}if(D==="appendTo"){this.menu.element.appendTo(A(E||"body",this.element[0].ownerDocument)[0])}if(D==="disabled"&&E&&this.xhr){this.xhr.abort()}},_initSource:function(){var D=this,F,E;if(A.isArray(this.options.source)){F=this.options.source;this.source=function(H,G){G(A.ui.autocomplete.filter(F,H.term))}}else{if(typeof this.options.source==="string"){E=this.options.source;this.source=function(H,G){if(D.xhr){D.xhr.abort()}D.xhr=A.ajax({url:E,data:H,dataType:"json",success:function(J,I){G(J)},error:function(){G([])}})}}else{this.source=this.options.source}}},search:function(E,D){E=E!=null?E:this.element.val();this.term=this.element.val();if(E.length<this.options.minLength){return this.close(D)}clearTimeout(this.closing);if(this._trigger("search",D)===false){return }return this._search(E)},_search:function(D){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:D},this._response())},_response:function(){var E=this,D=++C;return function(F){if(D===C){E.__response(F)}E.pending--;if(!E.pending){E.element.removeClass("ui-autocomplete-loading")}}},__response:function(D){if(!this.options.disabled&&D&&D.length){D=this._normalize(D);this._suggest(D);this._trigger("open")}else{this.close()}},close:function(D){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",D)}},_change:function(D){if(this.previous!==this.element.val()){this._trigger("change",D,{item:this.selectedItem})}},_normalize:function(D){if(D.length&&D[0].label&&D[0].value){return D}return A.map(D,function(E){if(typeof E==="string"){return{label:E,value:E}}return A.extend({label:E.label||E.value,value:E.value||E.label},E)})},_suggest:function(D){var E=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(E,D);this.menu.deactivate();this.menu.refresh();E.show();this._resizeMenu();E.position(A.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next(new A.Event("mouseover"))}},_resizeMenu:function(){var D=this.menu.element;D.outerWidth(Math.max(D.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(F,E){var D=this;A.each(E,function(G,H){D._renderItem(F,H)})},_renderItem:function(D,E){return A("<li></li>").data("item.autocomplete",E).append(A("<a></a>").text(E.label)).appendTo(D)},_move:function(E,D){if(!this.menu.element.is(":visible")){this.search(null,D);return }if(this.menu.first()&&/^previous/.test(E)||this.menu.last()&&/^next/.test(E)){this.element.val(this.term);this.menu.deactivate();return }this.menu[E](D)},widget:function(){return this.menu.element},_keyEvent:function(E,D){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(E,D);D.preventDefault()}}});A.extend(A.ui.autocomplete,{escapeRegex:function(D){return D.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(F,D){var E=new RegExp(A.ui.autocomplete.escapeRegex(D),"i");return A.grep(F,function(G){return E.test(G.label||G.value||G)})}})}(jQuery));(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.scrollTop(),C=this.element.height();if(F<0){this.element.scrollTop(B+F)}else{if(F>=C){this.element.scrollTop(B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(".ui-menu-item:first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:last")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))}},previousPage:function(D){if(this.hasScroll()){if(!this.active||this.first()){this.activate(D,this.element.children(".ui-menu-item:last"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children(".ui-menu-item").filter(function(){var F=A(this).offset().top-E+C-A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(".ui-menu-item:first")}this.activate(D,B)}else{this.activate(D,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element[A.fn.prop?"prop":"attr"]("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.button.js' */
/*
 * jQuery UI Button 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(F,B){var K,E,A,H,I="ui-button ui-widget ui-state-default ui-corner-all",C="ui-state-hover ui-state-active ",G="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",J=function(){var L=F(this).find(":ui-button");setTimeout(function(){L.button("refresh")},1)},D=function(M){var L=M.name,N=M.form,O=F([]);if(L){if(N){O=F(N).find("[name='"+L+"']")}else{O=F("[name='"+L+"']",M.ownerDocument).filter(function(){return !this.form})}}return O};F.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",J);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.propAttr("disabled")}else{this.element.propAttr("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var L=this,N=this.options,O=this.type==="checkbox"||this.type==="radio",P="ui-state-hover"+(!O?" ui-state-active":""),M="ui-state-focus";if(N.label===null){N.label=this.buttonElement.html()}this.buttonElement.addClass(I).attr("role","button").bind("mouseenter.button",function(){if(N.disabled){return }F(this).addClass("ui-state-hover");if(this===K){F(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){if(N.disabled){return }F(this).removeClass(P)}).bind("click.button",function(Q){if(N.disabled){Q.preventDefault();Q.stopImmediatePropagation()}});this.element.bind("focus.button",function(){L.buttonElement.addClass(M)}).bind("blur.button",function(){L.buttonElement.removeClass(M)});if(O){this.element.bind("change.button",function(){if(H){return }L.refresh()});this.buttonElement.bind("mousedown.button",function(Q){if(N.disabled){return }H=false;E=Q.pageX;A=Q.pageY}).bind("mouseup.button",function(Q){if(N.disabled){return }if(E!==Q.pageX||A!==Q.pageY){H=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).toggleClass("ui-state-active");L.buttonElement.attr("aria-pressed",L.element[0].checked)})}else{if(this.type==="radio"){this.buttonElement.bind("click.button",function(){if(N.disabled||H){return false}F(this).addClass("ui-state-active");L.buttonElement.attr("aria-pressed","true");var Q=L.element[0];D(Q).not(Q).map(function(){return F(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown.button",function(){if(N.disabled){return false}F(this).addClass("ui-state-active");K=this;F(document).one("mouseup",function(){K=null})}).bind("mouseup.button",function(){if(N.disabled){return false}F(this).removeClass("ui-state-active")}).bind("keydown.button",function(Q){if(N.disabled){return false}if(Q.keyCode==F.ui.keyCode.SPACE||Q.keyCode==F.ui.keyCode.ENTER){F(this).addClass("ui-state-active")}}).bind("keyup.button",function(){F(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(Q){if(Q.keyCode===F.ui.keyCode.SPACE){F(this).click()}})}}}this._setOption("disabled",N.disabled);this._resetButton()},_determineButtonType:function(){if(this.element.is(":checkbox")){this.type="checkbox"}else{if(this.element.is(":radio")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){var L=this.element.parents().filter(":last"),N="label[for='"+this.element.attr("id")+"']";this.buttonElement=L.find(N);if(!this.buttonElement.length){L=L.length?L.siblings():this.element.siblings();this.buttonElement=L.filter(N);if(!this.buttonElement.length){this.buttonElement=L.find(N)}}this.element.addClass("ui-helper-hidden-accessible");var M=this.element.is(":checked");if(M){this.buttonElement.addClass("ui-state-active")}this.buttonElement.attr("aria-pressed",M)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(I+" "+C+" "+G).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}F.Widget.prototype.destroy.call(this)},_setOption:function(L,M){F.Widget.prototype._setOption.apply(this,arguments);if(L==="disabled"){if(M){this.element.propAttr("disabled",true)}else{this.element.propAttr("disabled",false)}return }this._resetButton()},refresh:function(){var L=this.element.is(":disabled");if(L!==this.options.disabled){this._setOption("disabled",L)}if(this.type==="radio"){D(this.element[0]).each(function(){if(F(this).is(":checked")){F(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{F(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return }var P=this.buttonElement.removeClass(G),N=F("<span></span>",this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(P.empty()).text(),M=this.options.icons,L=M.primary&&M.secondary,O=[];if(M.primary||M.secondary){if(this.options.text){O.push("ui-button-text-icon"+(L?"s":(M.primary?"-primary":"-secondary")))}if(M.primary){P.prepend("<span class='ui-button-icon-primary ui-icon "+M.primary+"'></span>")}if(M.secondary){P.append("<span class='ui-button-icon-secondary ui-icon "+M.secondary+"'></span>")}if(!this.options.text){O.push(L?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){P.attr("title",N)}}}else{O.push("ui-button-text-only")}P.addClass(O.join(" "))}});F.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(L,M){if(L==="disabled"){this.buttons.button("option",L,M)}F.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var L=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(L?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(L?"ui-corner-left":"ui-corner-right").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return F(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");F.Widget.prototype.destroy.call(this)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return }this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return }divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return }var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return }extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return }if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return }var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return }this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return }var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof (inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return }var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);if(!elem.length){return }elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return }elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");elem.addClass("ui-state-hover");if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.24";window["DP_jQuery_"+dpuuid]=$})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.dialog.js' */
/*
 * jQuery UI Dialog 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(D,E){var B="ui-dialog ui-widget ui-widget-content ui-corner-all ",A={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},C={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};D.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(G){var F=D(this).css(G).offset().top;if(F<0){D(this).css("top",G.top-F)}}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string"){this.originalTitle=""}this.options.title=this.options.title||this.originalTitle;var N=this,O=N.options,L=O.title||"&#160;",G=D.ui.dialog.getTitleId(N.element),M=(N.uiDialog=D("<div></div>")).appendTo(document.body).hide().addClass(B+O.dialogClass).css({zIndex:O.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(P){if(O.closeOnEscape&&!P.isDefaultPrevented()&&P.keyCode&&P.keyCode===D.ui.keyCode.ESCAPE){N.close(P);P.preventDefault()}}).attr({role:"dialog","aria-labelledby":G}).mousedown(function(P){N.moveToTop(false,P)}),I=N.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(M),H=(N.uiDialogTitlebar=D("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(M),K=D('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){K.addClass("ui-state-hover")},function(){K.removeClass("ui-state-hover")}).focus(function(){K.addClass("ui-state-focus")}).blur(function(){K.removeClass("ui-state-focus")}).click(function(P){N.close(P);return false}).appendTo(H),J=(N.uiDialogTitlebarCloseText=D("<span></span>")).addClass("ui-icon ui-icon-closethick").text(O.closeText).appendTo(K),F=D("<span></span>").addClass("ui-dialog-title").attr("id",G).html(L).prependTo(H);if(D.isFunction(O.beforeclose)&&!D.isFunction(O.beforeClose)){O.beforeClose=O.beforeclose}H.find("*").add(H).disableSelection();if(O.draggable&&D.fn.draggable){N._makeDraggable()}if(O.resizable&&D.fn.resizable){N._makeResizable()}N._createButtons(O.buttons);N._isOpen=false;if(D.fn.bgiframe){M.bgiframe()}},_init:function(){if(this.options.autoOpen){this.open()}},destroy:function(){var F=this;if(F.overlay){F.overlay.destroy()}F.uiDialog.hide();F.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");F.uiDialog.remove();if(F.originalTitle){F.element.attr("title",F.originalTitle)}return F},widget:function(){return this.uiDialog},close:function(I){var F=this,H,G;if(false===F._trigger("beforeClose",I)){return }if(F.overlay){F.overlay.destroy()}F.uiDialog.unbind("keypress.ui-dialog");F._isOpen=false;if(F.options.hide){F.uiDialog.hide(F.options.hide,function(){F._trigger("close",I)})}else{F.uiDialog.hide();F._trigger("close",I)}D.ui.dialog.overlay.resize();if(F.options.modal){H=0;D(".ui-dialog").each(function(){if(this!==F.uiDialog[0]){G=D(this).css("z-index");if(!isNaN(G)){H=Math.max(H,G)}}});D.ui.dialog.maxZ=H}return F},isOpen:function(){return this._isOpen},moveToTop:function(J,I){var F=this,H=F.options,G;if((H.modal&&!J)||(!H.stack&&!H.modal)){return F._trigger("focus",I)}if(H.zIndex>D.ui.dialog.maxZ){D.ui.dialog.maxZ=H.zIndex}if(F.overlay){D.ui.dialog.maxZ+=1;F.overlay.$el.css("z-index",D.ui.dialog.overlay.maxZ=D.ui.dialog.maxZ)}G={scrollTop:F.element.scrollTop(),scrollLeft:F.element.scrollLeft()};D.ui.dialog.maxZ+=1;F.uiDialog.css("z-index",D.ui.dialog.maxZ);F.element.attr(G);F._trigger("focus",I);return F},open:function(){if(this._isOpen){return }var G=this,H=G.options,F=G.uiDialog;G.overlay=H.modal?new D.ui.dialog.overlay(G):null;G._size();G._position(H.position);F.show(H.show);G.moveToTop(true);if(H.modal){F.bind("keydown.ui-dialog",function(K){if(K.keyCode!==D.ui.keyCode.TAB){return }var J=D(":tabbable",this),L=J.filter(":first"),I=J.filter(":last");if(K.target===I[0]&&!K.shiftKey){L.focus(1);return false}else{if(K.target===L[0]&&K.shiftKey){I.focus(1);return false}}})}D(G.element.find(":tabbable").get().concat(F.find(".ui-dialog-buttonpane :tabbable").get().concat(F.get()))).eq(0).focus();G._isOpen=true;G._trigger("open");return G},_createButtons:function(I){var H=this,F=false,G=D("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),J=D("<div></div>").addClass("ui-dialog-buttonset").appendTo(G);H.uiDialog.find(".ui-dialog-buttonpane").remove();if(typeof I==="object"&&I!==null){D.each(I,function(){return !(F=true)})}if(F){D.each(I,function(K,M){M=D.isFunction(M)?{click:M,text:K}:M;var L=D('<button type="button"></button>').click(function(){M.click.apply(H.element[0],arguments)}).appendTo(J);D.each(M,function(N,O){if(N==="click"){return }if(N in L){L[N](O)}else{L.attr(N,O)}});if(D.fn.button){L.button()}});G.appendTo(H.uiDialog)}},_makeDraggable:function(){var F=this,I=F.options,J=D(document),H;function G(K){return{position:K.position,offset:K.offset}}F.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(K,L){H=I.height==="auto"?"auto":D(this).height();D(this).height(D(this).height()).addClass("ui-dialog-dragging");F._trigger("dragStart",K,G(L))},drag:function(K,L){F._trigger("drag",K,G(L))},stop:function(K,L){I.position=[L.position.left-J.scrollLeft(),L.position.top-J.scrollTop()];D(this).removeClass("ui-dialog-dragging").height(H);F._trigger("dragStop",K,G(L));D.ui.dialog.overlay.resize()}})},_makeResizable:function(K){K=(K===E?this.options.resizable:K);var G=this,J=G.options,F=G.uiDialog.css("position"),I=(typeof K==="string"?K:"n,e,s,w,se,sw,ne,nw");function H(L){return{originalPosition:L.originalPosition,originalSize:L.originalSize,position:L.position,size:L.size}}G.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:G.element,maxWidth:J.maxWidth,maxHeight:J.maxHeight,minWidth:J.minWidth,minHeight:G._minHeight(),handles:I,start:function(L,M){D(this).addClass("ui-dialog-resizing");G._trigger("resizeStart",L,H(M))},resize:function(L,M){G._trigger("resize",L,H(M))},stop:function(L,M){D(this).removeClass("ui-dialog-resizing");J.height=D(this).height();J.width=D(this).width();G._trigger("resizeStop",L,H(M));D.ui.dialog.overlay.resize()}}).css("position",F).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var F=this.options;if(F.height==="auto"){return F.minHeight}else{return Math.min(F.minHeight,F.height)}},_position:function(G){var H=[],I=[0,0],F;if(G){if(typeof G==="string"||(typeof G==="object"&&"0" in G)){H=G.split?G.split(" "):[G[0],G[1]];if(H.length===1){H[1]=H[0]}D.each(["left","top"],function(K,J){if(+H[K]===H[K]){I[K]=H[K];H[K]=J}});G={my:H.join(" "),at:H.join(" "),offset:I.join(" ")}}G=D.extend({},D.ui.dialog.prototype.options.position,G)}else{G=D.ui.dialog.prototype.options.position}F=this.uiDialog.is(":visible");if(!F){this.uiDialog.show()}this.uiDialog.css({top:0,left:0}).position(D.extend({of:window},G));if(!F){this.uiDialog.hide()}},_setOptions:function(I){var G=this,F={},H=false;D.each(I,function(J,K){G._setOption(J,K);if(J in A){H=true}if(J in C){F[J]=K}});if(H){this._size()}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option",F)}},_setOption:function(I,J){var G=this,F=G.uiDialog;switch(I){case"beforeclose":I="beforeClose";break;case"buttons":G._createButtons(J);break;case"closeText":G.uiDialogTitlebarCloseText.text(""+J);break;case"dialogClass":F.removeClass(G.options.dialogClass).addClass(B+J);break;case"disabled":if(J){F.addClass("ui-dialog-disabled")}else{F.removeClass("ui-dialog-disabled")}break;case"draggable":var H=F.is(":data(draggable)");if(H&&!J){F.draggable("destroy")}if(!H&&J){G._makeDraggable()}break;case"position":G._position(J);break;case"resizable":var K=F.is(":data(resizable)");if(K&&!J){F.resizable("destroy")}if(K&&typeof J==="string"){F.resizable("option","handles",J)}if(!K&&J!==false){G._makeResizable(J)}break;case"title":D(".ui-dialog-title",G.uiDialogTitlebar).html(""+(J||"&#160;"));break}D.Widget.prototype._setOption.apply(G,arguments)},_size:function(){var J=this.options,G,I,F=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(J.minWidth>J.width){J.width=J.minWidth}G=this.uiDialog.css({height:"auto",width:J.width}).height();I=Math.max(0,J.minHeight-G);if(J.height==="auto"){if(D.support.minHeight){this.element.css({minHeight:I,height:"auto"})}else{this.uiDialog.show();var H=this.element.css("height","auto").height();if(!F){this.uiDialog.hide()}this.element.height(Math.max(H,I))}}else{this.element.height(Math.max(J.height-G,0))}if(this.uiDialog.is(":data(resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}}});D.extend(D.ui.dialog,{version:"1.8.24",uuid:0,maxZ:0,getTitleId:function(F){var G=F.attr("id");if(!G){this.uuid+=1;G=this.uuid}return"ui-dialog-title-"+G},overlay:function(F){this.$el=D.ui.dialog.overlay.create(F)}});D.extend(D.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:D.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(F){return F+".dialog-overlay"}).join(" "),create:function(G){if(this.instances.length===0){setTimeout(function(){if(D.ui.dialog.overlay.instances.length){D(document).bind(D.ui.dialog.overlay.events,function(H){if(D(H.target).zIndex()<D.ui.dialog.overlay.maxZ){return false}})}},1);D(document).bind("keydown.dialog-overlay",function(H){if(G.options.closeOnEscape&&!H.isDefaultPrevented()&&H.keyCode&&H.keyCode===D.ui.keyCode.ESCAPE){G.close(H);H.preventDefault()}});D(window).bind("resize.dialog-overlay",D.ui.dialog.overlay.resize)}var F=(this.oldInstances.pop()||D("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});if(D.fn.bgiframe){F.bgiframe()}this.instances.push(F);return F},destroy:function(F){var G=D.inArray(F,this.instances);if(G!=-1){this.oldInstances.push(this.instances.splice(G,1)[0])}if(this.instances.length===0){D([document,window]).unbind(".dialog-overlay")}F.remove();var H=0;D.each(this.instances,function(){H=Math.max(H,this.css("z-index"))});this.maxZ=H},height:function(){var G,F;if(D.browser.msie&&D.browser.version<7){G=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);F=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);if(G<F){return D(window).height()+"px"}else{return G+"px"}}else{return D(document).height()+"px"}},width:function(){var F,G;if(D.browser.msie){F=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);G=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);if(F<G){return D(window).width()+"px"}else{return F+"px"}}else{return D(document).width()+"px"}},resize:function(){var F=D([]);D.each(D.ui.dialog.overlay.instances,function(){F=F.add(this)});F.css({width:0,height:0}).css({width:D.ui.dialog.overlay.width(),height:D.ui.dialog.overlay.height()})}});D.extend(D.ui.dialog.overlay.prototype,{destroy:function(){D.ui.dialog.overlay.destroy(this.$el)}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.progressbar.js' */
/*
 * jQuery UI Progressbar 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(A,B){A.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=A("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();A.Widget.prototype.destroy.apply(this,arguments)},value:function(C){if(C===B){return this._value()}this._setOption("value",C);return this},_setOption:function(C,D){if(C==="value"){this.options.value=D;this._refreshValue();if(this._value()===this.options.max){this._trigger("complete")}}A.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var C=this.options.value;if(typeof C!=="number"){C=0}return Math.min(this.options.max,Math.max(this.min,C))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var D=this.value();var C=this._percentage();if(this.oldValue!==D){this.oldValue=D;this._trigger("change")}this.valueDiv.toggle(D>this.min).toggleClass("ui-corner-right",D===this.options.max).width(C.toFixed(0)+"%");this.element.attr("aria-valuenow",D)}});A.extend(A.ui.progressbar,{version:"1.8.24"})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.slider.js' */
/*
 * jQuery UI Slider 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(B,C){var A=5;B.widget("ui.slider",B.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var E=this,J=this.options,I=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),H="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",D=(J.values&&J.values.length)||1,G=[];this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(J.disabled?" ui-slider-disabled ui-disabled":""));this.range=B([]);if(J.range){if(J.range===true){if(!J.values){J.values=[this._valueMin(),this._valueMin()]}if(J.values.length&&J.values.length!==2){J.values=[J.values[0],J.values[0]]}}this.range=B("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((J.range==="min"||J.range==="max")?" ui-slider-range-"+J.range:""))}for(var F=I.length;F<D;F+=1){G.push(H)}this.handles=I.add(B(G.join("")).appendTo(E.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(K){K.preventDefault()}).hover(function(){if(!J.disabled){B(this).addClass("ui-state-hover")}},function(){B(this).removeClass("ui-state-hover")}).focus(function(){if(!J.disabled){B(".ui-slider .ui-state-focus").removeClass("ui-state-focus");B(this).addClass("ui-state-focus")}else{B(this).blur()}}).blur(function(){B(this).removeClass("ui-state-focus")});this.handles.each(function(K){B(this).data("index.ui-slider-handle",K)});this.handles.keydown(function(O){var L=B(this).data("index.ui-slider-handle"),P,M,K,N;if(E.options.disabled){return }switch(O.keyCode){case B.ui.keyCode.HOME:case B.ui.keyCode.END:case B.ui.keyCode.PAGE_UP:case B.ui.keyCode.PAGE_DOWN:case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:O.preventDefault();if(!E._keySliding){E._keySliding=true;B(this).addClass("ui-state-active");P=E._start(O,L);if(P===false){return }}break}N=E.options.step;if(E.options.values&&E.options.values.length){M=K=E.values(L)}else{M=K=E.value()}switch(O.keyCode){case B.ui.keyCode.HOME:K=E._valueMin();break;case B.ui.keyCode.END:K=E._valueMax();break;case B.ui.keyCode.PAGE_UP:K=E._trimAlignValue(M+((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.PAGE_DOWN:K=E._trimAlignValue(M-((E._valueMax()-E._valueMin())/A));break;case B.ui.keyCode.UP:case B.ui.keyCode.RIGHT:if(M===E._valueMax()){return }K=E._trimAlignValue(M+N);break;case B.ui.keyCode.DOWN:case B.ui.keyCode.LEFT:if(M===E._valueMin()){return }K=E._trimAlignValue(M-N);break}E._slide(O,L,K)}).keyup(function(L){var K=B(this).data("index.ui-slider-handle");if(E._keySliding){E._keySliding=false;E._stop(L,K);E._change(L,K);B(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();return this},_mouseCapture:function(F){var G=this.options,J,L,E,H,N,K,M,I,D;if(G.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();J={x:F.pageX,y:F.pageY};L=this._normValueFromMouse(J);E=this._valueMax()-this._valueMin()+1;N=this;this.handles.each(function(O){var P=Math.abs(L-N.values(O));if(E>P){E=P;H=B(this);K=O}});if(G.range===true&&this.values(1)===G.min){K+=1;H=B(this.handles[K])}M=this._start(F,K);if(M===false){return false}this._mouseSliding=true;N._handleIndex=K;H.addClass("ui-state-active").focus();I=H.offset();D=!B(F.target).parents().andSelf().is(".ui-slider-handle");this._clickOffset=D?{left:0,top:0}:{left:F.pageX-I.left-(H.width()/2),top:F.pageY-I.top-(H.height()/2)-(parseInt(H.css("borderTopWidth"),10)||0)-(parseInt(H.css("borderBottomWidth"),10)||0)+(parseInt(H.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(F,K,L)}this._animateOff=true;return true},_mouseStart:function(D){return true},_mouseDrag:function(F){var D={x:F.pageX,y:F.pageY},E=this._normValueFromMouse(D);this._slide(F,this._handleIndex,E);return false},_mouseStop:function(D){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(D,this._handleIndex);this._change(D,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(E){var D,H,G,F,I;if(this.orientation==="horizontal"){D=this.elementSize.width;H=E.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{D=this.elementSize.height;H=E.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}G=(H/D);if(G>1){G=1}if(G<0){G=0}if(this.orientation==="vertical"){G=1-G}F=this._valueMax()-this._valueMin();I=this._valueMin()+G*F;return this._trimAlignValue(I)},_start:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}return this._trigger("start",F,D)},_slide:function(H,G,F){var D,E,I;if(this.options.values&&this.options.values.length){D=this.values(G?0:1);if((this.options.values.length===2&&this.options.range===true)&&((G===0&&F>D)||(G===1&&F<D))){F=D}if(F!==this.values(G)){E=this.values();E[G]=F;I=this._trigger("slide",H,{handle:this.handles[G],value:F,values:E});D=this.values(G?0:1);if(I!==false){this.values(G,F,true)}}}else{if(F!==this.value()){I=this._trigger("slide",H,{handle:this.handles[G],value:F});if(I!==false){this.value(F)}}}},_stop:function(F,E){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("stop",F,D)},_change:function(F,E){if(!this._keySliding&&!this._mouseSliding){var D={handle:this.handles[E],value:this.value()};if(this.options.values&&this.options.values.length){D.value=this.values(E);D.values=this.values()}this._trigger("change",F,D)}},value:function(D){if(arguments.length){this.options.value=this._trimAlignValue(D);this._refreshValue();this._change(null,0);return }return this._value()},values:function(E,H){var G,D,F;if(arguments.length>1){this.options.values[E]=this._trimAlignValue(H);this._refreshValue();this._change(null,E);return }if(arguments.length){if(B.isArray(arguments[0])){G=this.options.values;D=arguments[0];for(F=0;F<G.length;F+=1){G[F]=this._trimAlignValue(D[F]);this._change(null,F)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(E)}else{return this.value()}}}else{return this._values()}},_setOption:function(E,F){var D,G=0;if(B.isArray(this.options.values)){G=this.options.values.length}B.Widget.prototype._setOption.apply(this,arguments);switch(E){case"disabled":if(F){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.propAttr("disabled",true);this.element.addClass("ui-disabled")}else{this.handles.propAttr("disabled",false);this.element.removeClass("ui-disabled")}break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(D=0;D<G;D+=1){this._change(null,D)}this._animateOff=false;break}},_value:function(){var D=this.options.value;D=this._trimAlignValue(D);return D},_values:function(D){var G,F,E;if(arguments.length){G=this.options.values[D];G=this._trimAlignValue(G);return G}else{F=this.options.values.slice();for(E=0;E<F.length;E+=1){F[E]=this._trimAlignValue(F[E])}return F}},_trimAlignValue:function(G){if(G<=this._valueMin()){return this._valueMin()}if(G>=this._valueMax()){return this._valueMax()}var D=(this.options.step>0)?this.options.step:1,F=(G-this._valueMin())%D,E=G-F;if(Math.abs(F)*2>=D){E+=(F>0)?D:(-D)}return parseFloat(E.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var G=this.options.range,F=this.options,M=this,E=(!this._animateOff)?F.animate:false,H,D={},I,K,J,L;if(this.options.values&&this.options.values.length){this.handles.each(function(O,N){H=(M.values(O)-M._valueMin())/(M._valueMax()-M._valueMin())*100;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";B(this).stop(1,1)[E?"animate":"css"](D,F.animate);if(M.options.range===true){if(M.orientation==="horizontal"){if(O===0){M.range.stop(1,1)[E?"animate":"css"]({left:H+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({width:(H-I)+"%"},{queue:false,duration:F.animate})}}else{if(O===0){M.range.stop(1,1)[E?"animate":"css"]({bottom:(H)+"%"},F.animate)}if(O===1){M.range[E?"animate":"css"]({height:(H-I)+"%"},{queue:false,duration:F.animate})}}}I=H})}else{K=this.value();J=this._valueMin();L=this._valueMax();H=(L!==J)?(K-J)/(L-J)*100:0;D[M.orientation==="horizontal"?"left":"bottom"]=H+"%";this.handle.stop(1,1)[E?"animate":"css"](D,F.animate);if(G==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[E?"animate":"css"]({width:H+"%"},F.animate)}if(G==="max"&&this.orientation==="horizontal"){this.range[E?"animate":"css"]({width:(100-H)+"%"},{queue:false,duration:F.animate})}if(G==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[E?"animate":"css"]({height:H+"%"},F.animate)}if(G==="max"&&this.orientation==="vertical"){this.range[E?"animate":"css"]({height:(100-H)+"%"},{queue:false,duration:F.animate})}}}});B.extend(B.ui.slider,{version:"1.8.24"})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.ui.tabs.js' */
/*
 * jQuery UI Tabs 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(D,F){var C=0,B=0;function E(){return ++C}function A(){return ++B}D.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(G,H){if(G=="selected"){if(this.options.collapsible&&H==this.options.selected){return }this.select(H)}else{this.options[G]=H;this._tabify()}},_tabId:function(G){return G.title&&G.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+E()},_sanitizeSelector:function(G){return G.replace(/:/g,"\\:")},_cookie:function(){var G=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+A());return D.cookie.apply(null,[G].concat(D.makeArray(arguments)))},_ui:function(H,G){return{tab:H,panel:G,index:this.anchors.index(H)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var G=D(this);G.html(G.data("label.tabs")).removeData("label.tabs")})},_tabify:function(R){var S=this,I=this.options,H=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=D(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return D("a",this)[0]});this.panels=D([]);this.anchors.each(function(V,T){var U=D(T).attr("href");var W=U.split("#")[0],X;if(W&&(W===location.toString().split("#")[0]||(X=D("base")[0])&&W===X.href)){U=T.hash;T.href=U}if(H.test(U)){S.panels=S.panels.add(S.element.find(S._sanitizeSelector(U)))}else{if(U&&U!=="#"){D.data(T,"href.tabs",U);D.data(T,"load.tabs",U.replace(/#.*$/,""));var Z=S._tabId(T);T.href="#"+Z;var Y=S.element.find("#"+Z);if(!Y.length){Y=D(I.panelTemplate).attr("id",Z).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(S.panels[V-1]||S.list);Y.data("destroy.tabs",true)}S.panels=S.panels.add(Y)}else{I.disabled.push(V)}}});if(R){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(I.selected===F){if(location.hash){this.anchors.each(function(U,T){if(T.hash==location.hash){I.selected=U;return false}})}if(typeof I.selected!=="number"&&I.cookie){I.selected=parseInt(S._cookie(),10)}if(typeof I.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}I.selected=I.selected||(this.lis.length?0:-1)}else{if(I.selected===null){I.selected=-1}}I.selected=((I.selected>=0&&this.anchors[I.selected])||I.selected<0)?I.selected:0;I.disabled=D.unique(I.disabled.concat(D.map(this.lis.filter(".ui-state-disabled"),function(U,T){return S.lis.index(U)}))).sort();if(D.inArray(I.selected,I.disabled)!=-1){I.disabled.splice(D.inArray(I.selected,I.disabled),1)}this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");if(I.selected>=0&&this.anchors.length){S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(I.selected).addClass("ui-tabs-selected ui-state-active");S.element.queue("tabs",function(){S._trigger("show",null,S._ui(S.anchors[I.selected],S.element.find(S._sanitizeSelector(S.anchors[I.selected].hash))[0]))});this.load(I.selected)}D(window).bind("unload",function(){S.lis.add(S.anchors).unbind(".tabs");S.lis=S.anchors=S.panels=null})}else{I.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"))}this.element[I.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");if(I.cookie){this._cookie(I.selected,I.cookie)}for(var L=0,Q;(Q=this.lis[L]);L++){D(Q)[D.inArray(L,I.disabled)!=-1&&!D(Q).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled")}if(I.cache===false){this.anchors.removeData("cache.tabs")}this.lis.add(this.anchors).unbind(".tabs");if(I.event!=="mouseover"){var K=function(U,T){if(T.is(":not(.ui-state-disabled)")){T.addClass("ui-state-"+U)}};var N=function(U,T){T.removeClass("ui-state-"+U)};this.lis.bind("mouseover.tabs",function(){K("hover",D(this))});this.lis.bind("mouseout.tabs",function(){N("hover",D(this))});this.anchors.bind("focus.tabs",function(){K("focus",D(this).closest("li"))});this.anchors.bind("blur.tabs",function(){N("focus",D(this).closest("li"))})}var G,M;if(I.fx){if(D.isArray(I.fx)){G=I.fx[0];M=I.fx[1]}else{G=M=I.fx}}function J(T,U){T.css("display","");if(!D.support.opacity&&U.opacity){T[0].style.removeAttribute("filter")}}var O=M?function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.hide().removeClass("ui-tabs-hide").animate(M,M.duration||"normal",function(){J(U,M);S._trigger("show",null,S._ui(T,U[0]))})}:function(T,U){D(T).closest("li").addClass("ui-tabs-selected ui-state-active");U.removeClass("ui-tabs-hide");S._trigger("show",null,S._ui(T,U[0]))};var P=G?function(U,T){T.animate(G,G.duration||"normal",function(){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");J(T,G);S.element.dequeue("tabs")})}:function(U,T,V){S.lis.removeClass("ui-tabs-selected ui-state-active");T.addClass("ui-tabs-hide");S.element.dequeue("tabs")};this.anchors.bind(I.event+".tabs",function(){var U=this,W=D(U).closest("li"),T=S.panels.filter(":not(.ui-tabs-hide)"),V=S.element.find(S._sanitizeSelector(U.hash));if((W.hasClass("ui-tabs-selected")&&!I.collapsible)||W.hasClass("ui-state-disabled")||W.hasClass("ui-state-processing")||S.panels.filter(":animated").length||S._trigger("select",null,S._ui(this,V[0]))===false){this.blur();return false}I.selected=S.anchors.index(this);S.abort();if(I.collapsible){if(W.hasClass("ui-tabs-selected")){I.selected=-1;if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){P(U,T)}).dequeue("tabs");this.blur();return false}else{if(!T.length){if(I.cookie){S._cookie(I.selected,I.cookie)}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this));this.blur();return false}}}if(I.cookie){S._cookie(I.selected,I.cookie)}if(V.length){if(T.length){S.element.queue("tabs",function(){P(U,T)})}S.element.queue("tabs",function(){O(U,V)});S.load(S.anchors.index(this))}else{throw"jQuery UI Tabs: Mismatching fragment identifier."}if(D.browser.msie){this.blur()}});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(G){if(typeof G=="string"){G=this.anchors.index(this.anchors.filter("[href$='"+G+"']"))}return G},destroy:function(){var G=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var H=D.data(this,"href.tabs");if(H){this.href=H}var I=D(this).unbind(".tabs");D.each(["href","load","cache"],function(J,K){I.removeData(K+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){if(D.data(this,"destroy.tabs")){D(this).remove()}else{D(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "))}});if(G.cookie){this._cookie(null,G.cookie)}return this},add:function(J,I,H){if(H===F){H=this.anchors.length}var G=this,L=this.options,N=D(L.tabTemplate.replace(/#\{href\}/g,J).replace(/#\{label\}/g,I)),M=!J.indexOf("#")?J.replace("#",""):this._tabId(D("a",N)[0]);N.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var K=G.element.find("#"+M);if(!K.length){K=D(L.panelTemplate).attr("id",M).data("destroy.tabs",true)}K.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(H>=this.lis.length){N.appendTo(this.list);K.appendTo(this.list[0].parentNode)}else{N.insertBefore(this.lis[H]);K.insertBefore(this.panels[H])}L.disabled=D.map(L.disabled,function(P,O){return P>=H?++P:P});this._tabify();if(this.anchors.length==1){L.selected=0;N.addClass("ui-tabs-selected ui-state-active");K.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){G._trigger("show",null,G._ui(G.anchors[0],G.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[H],this.panels[H]));return this},remove:function(G){G=this._getIndex(G);var I=this.options,J=this.lis.eq(G).remove(),H=this.panels.eq(G).remove();if(J.hasClass("ui-tabs-selected")&&this.anchors.length>1){this.select(G+(G+1<this.anchors.length?1:-1))}I.disabled=D.map(D.grep(I.disabled,function(L,K){return L!=G}),function(L,K){return L>=G?--L:L});this._tabify();this._trigger("remove",null,this._ui(J.find("a")[0],H[0]));return this},enable:function(G){G=this._getIndex(G);var H=this.options;if(D.inArray(G,H.disabled)==-1){return }this.lis.eq(G).removeClass("ui-state-disabled");H.disabled=D.grep(H.disabled,function(J,I){return J!=G});this._trigger("enable",null,this._ui(this.anchors[G],this.panels[G]));return this},disable:function(H){H=this._getIndex(H);var G=this,I=this.options;if(H!=I.selected){this.lis.eq(H).addClass("ui-state-disabled");I.disabled.push(H);I.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[H],this.panels[H]))}return this},select:function(G){G=this._getIndex(G);if(G==-1){if(this.options.collapsible&&this.options.selected!=-1){G=this.options.selected}else{return this}}this.anchors.eq(G).trigger(this.options.event+".tabs");return this},load:function(J){J=this._getIndex(J);var H=this,L=this.options,G=this.anchors.eq(J)[0],I=D.data(G,"load.tabs");this.abort();if(!I||this.element.queue("tabs").length!==0&&D.data(G,"cache.tabs")){this.element.dequeue("tabs");return }this.lis.eq(J).addClass("ui-state-processing");if(L.spinner){var K=D("span",G);K.data("label.tabs",K.html()).html(L.spinner)}this.xhr=D.ajax(D.extend({},L.ajaxOptions,{url:I,success:function(N,M){H.element.find(H._sanitizeSelector(G.hash)).html(N);H._cleanup();if(L.cache){D.data(G,"cache.tabs",true)}H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.success(N,M)}catch(O){}},error:function(O,M,N){H._cleanup();H._trigger("load",null,H._ui(H.anchors[J],H.panels[J]));try{L.ajaxOptions.error(O,M,J,G)}catch(N){}}}));H.element.dequeue("tabs");return this},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},url:function(H,G){this.anchors.eq(H).removeData("cache.tabs").data("load.tabs",G);return this},length:function(){return this.anchors.length}});D.extend(D.ui.tabs,{version:"1.8.24"});D.extend(D.ui.tabs.prototype,{rotation:null,rotate:function(I,K){var G=this,L=this.options;var H=G._rotate||(G._rotate=function(M){clearTimeout(G.rotation);G.rotation=setTimeout(function(){var N=L.selected;G.select(++N<G.anchors.length?N:0)},I);if(M){M.stopPropagation()}});var J=G._unrotate||(G._unrotate=!K?function(M){if(M.clientX){G.rotate(null)}}:function(M){H()});if(I){this.element.bind("tabsshow",H);this.anchors.bind(L.event+".tabs",J);H()}else{clearTimeout(G.rotation);this.element.unbind("tabsshow",H);this.anchors.unbind(L.event+".tabs",J);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.core.js' */
/*
 * jQuery UI Effects 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||(function(H,E){H.effects={};H.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(O,N){H.fx.step[N]=function(P){if(!P.colorInit){P.start=M(P.elem,N);P.end=K(P.end);P.colorInit=true}P.elem.style[N]="rgb("+Math.max(Math.min(parseInt((P.pos*(P.end[0]-P.start[0]))+P.start[0],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[1]-P.start[1]))+P.start[1],10),255),0)+","+Math.max(Math.min(parseInt((P.pos*(P.end[2]-P.start[2]))+P.start[2],10),255),0)+")"}});function K(O){var N;if(O&&O.constructor==Array&&O.length==3){return O}if(N=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(O)){return[parseInt(N[1],10),parseInt(N[2],10),parseInt(N[3],10)]}if(N=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(O)){return[parseFloat(N[1])*2.55,parseFloat(N[2])*2.55,parseFloat(N[3])*2.55]}if(N=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(O)){return[parseInt(N[1],16),parseInt(N[2],16),parseInt(N[3],16)]}if(N=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(O)){return[parseInt(N[1]+N[1],16),parseInt(N[2]+N[2],16),parseInt(N[3]+N[3],16)]}if(N=/rgba\(0, 0, 0, 0\)/.exec(O)){return A.transparent}return A[H.trim(O).toLowerCase()]}function M(P,N){var O;do{O=(H.curCSS||H.css)(P,N);if(O!=""&&O!="transparent"||H.nodeName(P,"body")){break}N="backgroundColor"}while(P=P.parentNode);return K(O)}var A={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};var F=["add","remove","toggle"],C={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function G(){var Q=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,R={},O,P;if(Q&&Q.length&&Q[0]&&Q[Q[0]]){var N=Q.length;while(N--){O=Q[N];if(typeof Q[O]=="string"){P=O.replace(/\-(\w)/g,function(S,T){return T.toUpperCase()});R[P]=Q[O]}}}else{for(O in Q){if(typeof Q[O]==="string"){R[O]=Q[O]}}}return R}function B(O){var N,P;for(N in O){P=O[N];if(P==null||H.isFunction(P)||N in C||(/scrollbar/).test(N)||(!(/color/i).test(N)&&isNaN(parseFloat(P)))){delete O[N]}}return O}function I(N,P){var Q={_:0},O;for(O in P){if(N[O]!=P[O]){Q[O]=P[O]}}return Q}H.effects.animateClass=function(N,O,Q,P){if(H.isFunction(Q)){P=Q;Q=null}return this.queue(function(){var U=H(this),R=U.attr("style")||" ",V=B(G.call(this)),T,S=U.attr("class")||"";H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});T=B(G.call(this));U.attr("class",S);U.animate(I(V,T),{queue:false,duration:O,easing:Q,complete:function(){H.each(F,function(W,X){if(N[X]){U[X+"Class"](N[X])}});if(typeof U.attr("style")=="object"){U.attr("style").cssText="";U.attr("style").cssText=R}else{U.attr("style",R)}if(P){P.apply(this,arguments)}H.dequeue(this)}})})};H.fn.extend({_addClass:H.fn.addClass,addClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{add:O},N,Q,P]):this._addClass(O)},_removeClass:H.fn.removeClass,removeClass:function(O,N,Q,P){return N?H.effects.animateClass.apply(this,[{remove:O},N,Q,P]):this._removeClass(O)},_toggleClass:H.fn.toggleClass,toggleClass:function(P,O,N,R,Q){if(typeof O=="boolean"||O===E){if(!N){return this._toggleClass(P,O)}else{return H.effects.animateClass.apply(this,[(O?{add:P}:{remove:P}),N,R,Q])}}else{return H.effects.animateClass.apply(this,[{toggle:P},O,N,R])}},switchClass:function(N,P,O,R,Q){return H.effects.animateClass.apply(this,[{add:P,remove:N},O,R,Q])}});H.extend(H.effects,{version:"1.8.24",save:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.data("ec.storage."+P[N],O[0].style[P[N]])}}},restore:function(O,P){for(var N=0;N<P.length;N++){if(P[N]!==null){O.css(P[N],O.data("ec.storage."+P[N]))}}},setMode:function(N,O){if(O=="toggle"){O=N.is(":hidden")?"show":"hide"}return O},getBaseline:function(O,P){var Q,N;switch(O[0]){case"top":Q=0;break;case"middle":Q=0.5;break;case"bottom":Q=1;break;default:Q=O[0]/P.height}switch(O[1]){case"left":N=0;break;case"center":N=0.5;break;case"right":N=1;break;default:N=O[1]/P.width}return{x:N,y:Q}},createWrapper:function(N){if(N.parent().is(".ui-effects-wrapper")){return N.parent()}var O={width:N.outerWidth(true),height:N.outerHeight(true),"float":N.css("float")},R=H("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),Q=document.activeElement;try{Q.id}catch(P){Q=document.body}N.wrap(R);if(N[0]===Q||H.contains(N[0],Q)){H(Q).focus()}R=N.parent();if(N.css("position")=="static"){R.css({position:"relative"});N.css({position:"relative"})}else{H.extend(O,{position:N.css("position"),zIndex:N.css("z-index")});H.each(["top","left","bottom","right"],function(S,T){O[T]=N.css(T);if(isNaN(parseInt(O[T],10))){O[T]="auto"}});N.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return R.css(O).show()},removeWrapper:function(N){var O,P=document.activeElement;if(N.parent().is(".ui-effects-wrapper")){O=N.parent().replaceWith(N);if(N[0]===P||H.contains(N[0],P)){H(P).focus()}return O}return N},setTransition:function(O,Q,N,P){P=P||{};H.each(Q,function(S,R){var T=O.cssUnit(R);if(T[0]>0){P[R]=T[0]*N+T[1]}});return P}});function D(O,N,P,Q){if(typeof O=="object"){Q=N;P=null;N=O;O=N.effect}if(H.isFunction(N)){Q=N;P=null;N={}}if(typeof N=="number"||H.fx.speeds[N]){Q=P;P=N;N={}}if(H.isFunction(P)){Q=P;P=null}N=N||{};P=P||N.duration;P=H.fx.off?0:typeof P=="number"?P:P in H.fx.speeds?H.fx.speeds[P]:H.fx.speeds._default;Q=Q||N.complete;return[O,N,P,Q]}function L(N){if(!N||typeof N==="number"||H.fx.speeds[N]){return true}if(typeof N==="string"&&!H.effects[N]){return true}return false}H.fn.extend({effect:function(Q,P,S,U){var O=D.apply(this,arguments),R={options:O[1],duration:O[2],callback:O[3]},T=R.options.mode,N=H.effects[Q];if(H.fx.off||!N){if(T){return this[T](R.duration,R.callback)}else{return this.each(function(){if(R.callback){R.callback.call(this)}})}}return N.call(this,R)},_show:H.fn.show,show:function(O){if(L(O)){return this._show.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="show";return this.effect.apply(this,N)}},_hide:H.fn.hide,hide:function(O){if(L(O)){return this._hide.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="hide";return this.effect.apply(this,N)}},__toggle:H.fn.toggle,toggle:function(O){if(L(O)||typeof O==="boolean"||H.isFunction(O)){return this.__toggle.apply(this,arguments)}else{var N=D.apply(this,arguments);N[1].mode="toggle";return this.effect.apply(this,N)}},cssUnit:function(N){var O=this.css(N),P=[];H.each(["em","px","%","pt"],function(Q,R){if(O.indexOf(R)>0){P=[parseFloat(O),R]}});return P}});var J={};H.each(["Quad","Cubic","Quart","Quint","Expo"],function(O,N){J[N]=function(P){return Math.pow(P,O+2)}});H.extend(J,{Sine:function(N){return 1-Math.cos(N*Math.PI/2)},Circ:function(N){return 1-Math.sqrt(1-N*N)},Elastic:function(N){return N===0||N===1?N:-Math.pow(2,8*(N-1))*Math.sin(((N-1)*80-7.5)*Math.PI/15)},Back:function(N){return N*N*(3*N-2)},Bounce:function(P){var N,O=4;while(P<((N=Math.pow(2,--O))-1)/11){}return 1/Math.pow(4,3-O)-7.5625*Math.pow((N*3-2)/22-P,2)}});H.each(J,function(O,N){H.easing["easeIn"+O]=N;H.easing["easeOut"+O]=function(P){return 1-N(1-P)};H.easing["easeInOut"+O]=function(P){return P<0.5?N(P*2)/2:N(P*-2+2)/-2+1}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.blind.js' */
/*
 * jQuery UI Effects Blind 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.blind=function(C){return this.queue(function(){var E=A(this),D=["position","top","bottom","left","right"];var I=A.effects.setMode(E,C.options.mode||"hide");var H=C.options.direction||"vertical";A.effects.save(E,D);E.show();var K=A.effects.createWrapper(E).css({overflow:"hidden"});var F=(H=="vertical")?"height":"width";var J=(H=="vertical")?K.height():K.width();if(I=="show"){K.css(F,0)}var G={};G[F]=I=="show"?J:0;K.animate(G,C.duration,C.options.easing,function(){if(I=="hide"){E.hide()}A.effects.restore(E,D);A.effects.removeWrapper(E);if(C.callback){C.callback.apply(E[0],arguments)}E.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.bounce.js' */
/*
 * jQuery UI Effects Bounce 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.bounce=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"up";var D=C.options.distance||20;var E=C.options.times||5;var H=C.duration||250;if(/show|hide/.test(K)){L.push("opacity")}A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var D=C.options.distance||(G=="top"?F.outerHeight(true)/3:F.outerWidth(true)/3);if(K=="show"){F.css("opacity",0).css(G,P=="pos"?-D:D)}if(K=="hide"){D=D/(E*2)}if(K!="hide"){E--}if(K=="show"){var I={opacity:1};I[G]=(P=="pos"?"+=":"-=")+D;F.animate(I,H/2,C.options.easing);D=D/2;E--}for(var J=0;J<E;J++){var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing);D=(K=="hide")?D*2:D/2}if(K=="hide"){var I={opacity:0};I[G]=(P=="pos"?"-=":"+=")+D;F.animate(I,H/2,C.options.easing,function(){F.hide();A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}else{var O={},M={};O[G]=(P=="pos"?"-=":"+=")+D;M[G]=(P=="pos"?"+=":"-=")+D;F.animate(O,H/2,C.options.easing).animate(M,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}})}F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.clip.js' */
/*
 * jQuery UI Effects Clip 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.clip=function(C){return this.queue(function(){var G=A(this),K=["position","top","bottom","left","right","height","width"];var J=A.effects.setMode(G,C.options.mode||"hide");var L=C.options.direction||"vertical";A.effects.save(G,K);G.show();var D=A.effects.createWrapper(G).css({overflow:"hidden"});var F=G[0].tagName=="IMG"?D:G;var H={size:(L=="vertical")?"height":"width",position:(L=="vertical")?"top":"left"};var E=(L=="vertical")?F.height():F.width();if(J=="show"){F.css(H.size,0);F.css(H.position,E/2)}var I={};I[H.size]=J=="show"?E:0;I[H.position]=J=="show"?0:E/2;F.animate(I,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){G.hide()}A.effects.restore(G,K);A.effects.removeWrapper(G);if(C.callback){C.callback.apply(G[0],arguments)}G.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.drop.js' */
/*
 * jQuery UI Effects Drop 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.drop=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right","opacity"];var J=A.effects.setMode(F,C.options.mode||"hide");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F);var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true)/2:F.outerWidth(true)/2);if(J=="show"){F.css("opacity",0).css(G,D=="pos"?-K:K)}var H={opacity:J=="show"?1:0};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.explode.js' */
/*
 * jQuery UI Effects Explode 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.explode=function(C){return this.queue(function(){var J=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;var F=C.options.pieces?Math.round(Math.sqrt(C.options.pieces)):3;C.options.mode=C.options.mode=="toggle"?(A(this).is(":visible")?"hide":"show"):C.options.mode;var I=A(this).show().css("visibility","hidden");var K=I.offset();K.top-=parseInt(I.css("marginTop"),10)||0;K.left-=parseInt(I.css("marginLeft"),10)||0;var H=I.outerWidth(true);var D=I.outerHeight(true);for(var G=0;G<J;G++){for(var E=0;E<F;E++){I.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-E*(H/F),top:-G*(D/J)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:H/F,height:D/J,left:K.left+E*(H/F)+(C.options.mode=="show"?(E-Math.floor(F/2))*(H/F):0),top:K.top+G*(D/J)+(C.options.mode=="show"?(G-Math.floor(J/2))*(D/J):0),opacity:C.options.mode=="show"?0:1}).animate({left:K.left+E*(H/F)+(C.options.mode=="show"?0:(E-Math.floor(F/2))*(H/F)),top:K.top+G*(D/J)+(C.options.mode=="show"?0:(G-Math.floor(J/2))*(D/J)),opacity:C.options.mode=="show"?1:0},C.duration||500)}}setTimeout(function(){C.options.mode=="show"?I.css({visibility:"visible"}):I.css({visibility:"visible"}).hide();if(C.callback){C.callback.apply(I[0])}I.dequeue();A("div.ui-effects-explode").remove()},C.duration||500)})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fade.js' */
/*
 * jQuery UI Effects Fade 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fade=function(C){return this.queue(function(){var D=A(this),E=A.effects.setMode(D,C.options.mode||"hide");D.animate({opacity:E},{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(C.callback&&C.callback.apply(this,arguments));D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.fold.js' */
/*
 * jQuery UI Effects Fold 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.fold=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var I=A.effects.setMode(F,C.options.mode||"hide");var P=C.options.size||15;var O=!(!C.options.horizFirst);var H=C.duration?C.duration/2:A.fx.speeds._default/2;A.effects.save(F,L);F.show();var E=A.effects.createWrapper(F).css({overflow:"hidden"});var J=((I=="show")!=O);var G=J?["width","height"]:["height","width"];var D=J?[E.width(),E.height()]:[E.height(),E.width()];var K=/([0-9]+)%/.exec(P);if(K){P=parseInt(K[1],10)/100*D[I=="hide"?0:1]}if(I=="show"){E.css(O?{height:0,width:P}:{height:P,width:0})}var N={},M={};N[G[0]]=I=="show"?D[0]:P;M[G[1]]=I=="show"?D[1]:0;E.animate(N,H,C.options.easing).animate(M,H,C.options.easing,function(){if(I=="hide"){F.hide()}A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(F[0],arguments)}F.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.highlight.js' */
/*
 * jQuery UI Effects Highlight 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.highlight=function(C){return this.queue(function(){var E=A(this),D=["backgroundImage","backgroundColor","opacity"],G=A.effects.setMode(E,C.options.mode||"show"),F={backgroundColor:E.css("backgroundColor")};if(G=="hide"){F.opacity=0}A.effects.save(E,D);E.show().css({backgroundImage:"none",backgroundColor:C.options.color||"#ffff99"}).animate(F,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){(G=="hide"&&E.hide());A.effects.restore(E,D);(G=="show"&&!A.support.opacity&&this.style.removeAttribute("filter"));(C.callback&&C.callback.apply(this,arguments));E.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.pulsate.js' */
/*
 * jQuery UI Effects Pulsate 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.pulsate=function(C){return this.queue(function(){var G=A(this),J=A.effects.setMode(G,C.options.mode||"show"),I=((C.options.times||5)*2)-1,H=C.duration?C.duration/2:A.fx.speeds._default/2,D=G.is(":visible"),E=0;if(!D){G.css("opacity",0).show();E=1}if((J=="hide"&&D)||(J=="show"&&!D)){I--}for(var F=0;F<I;F++){G.animate({opacity:E},H,C.options.easing);E=(E+1)%2}G.animate({opacity:E},H,C.options.easing,function(){if(E==0){G.hide()}(C.callback&&C.callback.apply(this,arguments))});G.queue("fx",function(){G.dequeue()}).dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.scale.js' */
/*
 * jQuery UI Effects Scale 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.puff=function(C){return this.queue(function(){var G=A(this),H=A.effects.setMode(G,C.options.mode||"hide"),F=parseInt(C.options.percent,10)||150,E=F/100,D={height:G.height(),width:G.width()};A.extend(C.options,{fade:true,mode:H,percent:H=="hide"?F:100,from:H=="hide"?D:{height:D.height*E,width:D.width*E}});G.effect("scale",C.options,C.duration,C.callback);G.dequeue()})};A.effects.scale=function(C){return this.queue(function(){var H=A(this);var E=A.extend(true,{},C.options);var K=A.effects.setMode(H,C.options.mode||"effect");var I=parseInt(C.options.percent,10)||(parseInt(C.options.percent,10)==0?0:(K=="hide"?0:100));var J=C.options.direction||"both";var D=C.options.origin;if(K!="effect"){E.origin=D||["middle","center"];E.restore=true}var G={height:H.height(),width:H.width()};H.from=C.options.from||(K=="show"?{height:0,width:0}:G);var F={y:J!="horizontal"?(I/100):1,x:J!="vertical"?(I/100):1};H.to={height:G.height*F.y,width:G.width*F.x};if(C.options.fade){if(K=="show"){H.from.opacity=0;H.to.opacity=1}if(K=="hide"){H.from.opacity=1;H.to.opacity=0}}E.from=H.from;E.to=H.to;E.mode=K;H.effect("size",E,C.duration,C.callback);H.dequeue()})};A.effects.size=function(C){return this.queue(function(){var D=A(this),O=["position","top","bottom","left","right","width","height","overflow","opacity"];var N=["position","top","bottom","left","right","overflow","opacity"];var K=["width","height","overflow"];var Q=["fontSize"];var L=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];var G=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];var H=A.effects.setMode(D,C.options.mode||"effect");var J=C.options.restore||false;var F=C.options.scale||"both";var P=C.options.origin;var E={height:D.height(),width:D.width()};D.from=C.options.from||E;D.to=C.options.to||E;if(P){var I=A.effects.getBaseline(P,E);D.from.top=(E.height-D.from.height)*I.y;D.from.left=(E.width-D.from.width)*I.x;D.to.top=(E.height-D.to.height)*I.y;D.to.left=(E.width-D.to.width)*I.x}var M={from:{y:D.from.height/E.height,x:D.from.width/E.width},to:{y:D.to.height/E.height,x:D.to.width/E.width}};if(F=="box"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(L);D.from=A.effects.setTransition(D,L,M.from.y,D.from);D.to=A.effects.setTransition(D,L,M.to.y,D.to)}if(M.from.x!=M.to.x){O=O.concat(G);D.from=A.effects.setTransition(D,G,M.from.x,D.from);D.to=A.effects.setTransition(D,G,M.to.x,D.to)}}if(F=="content"||F=="both"){if(M.from.y!=M.to.y){O=O.concat(Q);D.from=A.effects.setTransition(D,Q,M.from.y,D.from);D.to=A.effects.setTransition(D,Q,M.to.y,D.to)}}A.effects.save(D,J?O:N);D.show();A.effects.createWrapper(D);D.css("overflow","hidden").css(D.from);if(F=="content"||F=="both"){L=L.concat(["marginTop","marginBottom"]).concat(Q);G=G.concat(["marginLeft","marginRight"]);K=O.concat(L).concat(G);D.find("*[width]").each(function(){var S=A(this);if(J){A.effects.save(S,K)}var R={height:S.height(),width:S.width()};S.from={height:R.height*M.from.y,width:R.width*M.from.x};S.to={height:R.height*M.to.y,width:R.width*M.to.x};if(M.from.y!=M.to.y){S.from=A.effects.setTransition(S,L,M.from.y,S.from);S.to=A.effects.setTransition(S,L,M.to.y,S.to)}if(M.from.x!=M.to.x){S.from=A.effects.setTransition(S,G,M.from.x,S.from);S.to=A.effects.setTransition(S,G,M.to.x,S.to)}S.css(S.from);S.animate(S.to,C.duration,C.options.easing,function(){if(J){A.effects.restore(S,K)}})})}D.animate(D.to,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(D.to.opacity===0){D.css("opacity",D.from.opacity)}if(H=="hide"){D.hide()}A.effects.restore(D,J?O:N);A.effects.removeWrapper(D);if(C.callback){C.callback.apply(this,arguments)}D.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.shake.js' */
/*
 * jQuery UI Effects Shake 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.shake=function(C){return this.queue(function(){var F=A(this),L=["position","top","bottom","left","right"];var K=A.effects.setMode(F,C.options.mode||"effect");var N=C.options.direction||"left";var D=C.options.distance||20;var E=C.options.times||3;var H=C.duration||C.options.duration||140;A.effects.save(F,L);F.show();A.effects.createWrapper(F);var G=(N=="up"||N=="down")?"top":"left";var P=(N=="up"||N=="left")?"pos":"neg";var I={},O={},M={};I[G]=(P=="pos"?"-=":"+=")+D;O[G]=(P=="pos"?"+=":"-=")+D*2;M[G]=(P=="pos"?"-=":"+=")+D*2;F.animate(I,H,C.options.easing);for(var J=1;J<E;J++){F.animate(O,H,C.options.easing).animate(M,H,C.options.easing)}F.animate(O,H,C.options.easing).animate(I,H/2,C.options.easing,function(){A.effects.restore(F,L);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}});F.queue("fx",function(){F.dequeue()});F.dequeue()})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.slide.js' */
/*
 * jQuery UI Effects Slide 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.slide=function(C){return this.queue(function(){var F=A(this),E=["position","top","bottom","left","right"];var J=A.effects.setMode(F,C.options.mode||"show");var I=C.options.direction||"left";A.effects.save(F,E);F.show();A.effects.createWrapper(F).css({overflow:"hidden"});var G=(I=="up"||I=="down")?"top":"left";var D=(I=="up"||I=="left")?"pos":"neg";var K=C.options.distance||(G=="top"?F.outerHeight(true):F.outerWidth(true));if(J=="show"){F.css(G,D=="pos"?(isNaN(K)?"-"+K:-K):K)}var H={};H[G]=(J=="show"?(D=="pos"?"+=":"-="):(D=="pos"?"-=":"+="))+K;F.animate(H,{queue:false,duration:C.duration,easing:C.options.easing,complete:function(){if(J=="hide"){F.hide()}A.effects.restore(F,E);A.effects.removeWrapper(F);if(C.callback){C.callback.apply(this,arguments)}F.dequeue()}})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery-ui/jquery.effects.transfer.js' */
/*
 * jQuery UI Effects Transfer 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(A,B){A.effects.transfer=function(C){return this.queue(function(){var G=A(this),I=A(C.options.to),F=I.offset(),H={top:F.top,left:F.left,height:I.innerHeight(),width:I.innerWidth()},E=G.offset(),D=A('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(C.options.className).css({top:E.top,left:E.left,height:G.innerHeight(),width:G.innerWidth(),position:"absolute"}).animate(H,C.duration,C.options.easing,function(){D.remove();(C.callback&&C.callback.apply(G[0],arguments));G.dequeue()})})}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:jquery-ui-other', location = 'js-vendor/jquery/jquery.ui.menu.js' */
(function(A){A.widget("ui.menu",{_create:function(){var B=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(C){if(!A(C.target).closest(".ui-menu-item a").length){return }C.preventDefault();B.select(C)});this.refresh()},refresh:function(){var C=this;var B=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");B.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(D){C.activate(D,A(this).parent())}).mouseleave(function(){C.deactivate()})},activate:function(E,D){this.deactivate();if(this.hasScroll()){var F=D.offset().top-this.element.offset().top,B=this.element.attr("scrollTop"),C=this.element.height();if(F<0){this.element.attr("scrollTop",B+F)}else{if(F>C){this.element.attr("scrollTop",B+F-C+D.height())}}}this.active=D.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",E,{item:D})},deactivate:function(){if(!this.active){return }this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null},next:function(B){this.move("next",".ui-menu-item:first",B)},previous:function(B){this.move("prev",".ui-menu-item:last",B)},first:function(){return this.active&&!this.active.prev().length},last:function(){return this.active&&!this.active.next().length},move:function(E,D,C){if(!this.active){this.activate(C,this.element.children(D));return }var B=this.active[E+"All"](".ui-menu-item").eq(0);if(B.length){this.activate(C,B)}else{this.activate(C,this.element.children(D))}},nextPage:function(D){if(this.hasScroll()){if(!this.active||this.last()){this.activate(D,this.element.children(":first"));return }var E=this.active.offset().top,C=this.element.height(),B=this.element.children("li").filter(function(){var F=A(this).offset().top-E-C+A(this).height();return F<10&&F>-10});if(!B.length){B=this.element.children(":last")}this.activate(D,B)}else{this.activate(D,this.element.children(!this.active||this.last()?":first":":last"))}},previousPage:function(C){if(this.hasScroll()){if(!this.active||this.first()){this.activate(C,this.element.children(":last"));return }var D=this.active.offset().top,B=this.element.height();result=this.element.children("li").filter(function(){var E=A(this).offset().top-D+B-A(this).height();return E<10&&E>-10});if(!result.length){result=this.element.children(":first")}this.activate(C,result)}else{this.activate(C,this.element.children(!this.active||this.first()?":last":":first"))}},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(B){this._trigger("selected",B,{item:this.active})}})}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-support.js' */
var DragnDropSupport=(function(){var c,a;try{c=new XMLHttpRequest();a=!!(c.sendAsBinary||c.upload)&&!(jQuery.browser.mozilla&&jQuery.browser.version.indexOf("1.9.1")>-1)}catch(b){a=false}c=null;return{hasXhrSupport:a}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
AJS.DragAndDrop={};(function(b){var c,a=/^\w+:\/\/[^\/?#]+/.exec(location.href);AJS.DragAndDropUtils={hasXhrOrGearsSupport:function(){return(AJS.DragAndDropUtils.hasXhrSupport||AJS.DragAndDropUtils.isGearsInstalledNoPrompt())},hasXhrSupport:DragnDropSupport.hasXhrSupport,base:a,init:function(d){d&&d(DragnDropSupport.hasXhrSupport)},bindDragEnter:function(d,f){if(d.addEventListener){f=(this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(f):f);f&&d.addEventListener("dragenter",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragenter",e);b(window).unload(function(){d.detachEvent("ondragenter",e)})}}},bindDragOver:function(d,f){if(d.addEventListener){if(this.isFireFox35OrLater()){f=this.firefox35DragEnterAndOverCallbackWrapper(f)}else{if(b.browser.safari){f=this.safariDragOverCallbackWrapper(f)}}f&&d.addEventListener("dragover",f,false)}else{if(d.attachEvent){var e=this.ieDragEnterAndDragOverCallbackWrapper(f);d.attachEvent("ondragover",e);b(window).unload(function(){d.detachEvent("ondragover",e)})}}},bindDragLeave:function(d,e){if(!e){return}if(b.browser.safari||this.isFireFox35OrLater()){d.addEventListener("dragleave",e,false)}else{if(b.browser.mozilla){d.addEventListener("dragexit",e,false)}else{if(b.browser.msie){d.attachEvent("ondragleave",e);b(window).unload(function(){d.detachEvent("ondragleave",e)})}}}},bindDrop:function(e,g){if(b.browser.mozilla){var d=(this.isFireFox35OrLater()?"drop":"dragdrop");e.addEventListener(d,this.mozillaDropCallbackWrapper(g),false)}else{if(b.browser.msie){if(g){var f=function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)};e.attachEvent("ondrop",f);b(window).unload(function(){e.detachEvent("ondrop",f)})}}else{if(b.browser.safari){g&&e.addEventListener("drop",function(h){g(h);AJS.DragAndDropUtils.stopPropagation(h)},false)}}}},niceSize:function(d){var g=[" B"," kB"," MB"," GB"," TB"," PB"," EB"," ZB"," YB"];for(var e=0,f=g.length;e<f;e++){if(d<Math.pow(2,10*(e+1))){return(!e?d:(d/Math.pow(2,10*e)).toFixed(2))+g[e]
}}return(d/Math.pow(2,10*(e+1))).toFixed(2)+g[g.length-1]},ieDragEnterAndDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}d&&d(f);b.browser.msie&&(f.returnValue=false)}},safariDragOverCallbackWrapper:function(d){return function(f){f=f||window.event;if(!f){return}if(f.target.type=="file"){return}d&&d(f);(b.inArray("public.file-url",f.dataTransfer.types)!=-1)&&f.preventDefault()}},mozillaDropCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);f.preventDefault();if(AJS.DragAndDropUtils.isFireFox35OrLater()){AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.stopPropagation()}else{f.stopPropagation()}}},firefox35DragEnterAndOverCallbackWrapper:function(d){return function(f){if(!f){return}d&&d(f);AJS.DragAndDropUtils.firefox35FileDataInEvent(f)&&f.preventDefault()}},firefox35FileDataInEvent:function(d){return b.inArray("application/x-moz-file",d.dataTransfer.types)!=-1},stopPropagation:function(d){d=d||window.event;if(!d){return}if(d.stopPropagation){d.stopPropagation()}else{d.cancelBubble=true}},preventDefault:function(d){d=d||window.event;if(!d){return}if(d.preventDefault){d.preventDefault()}else{d.returnValue=false}},isGearsInstalledNoPrompt:function(){try{return !!window.google&&!!google.gears&&!!google.gears.factory.create("beta.desktop")}catch(d){return false}},isGearsInstalledWithPermissions:function(d){var e={returnUrl:location.href};d=b.extend({},e,d);if(AJS.DragAndDropUtils.isGearsInstalledNoPrompt()){return google.gears.factory.getPermission("Confluence",Confluence.getContextPath()+"/images/logo/confluence_64.png","Allow Confluence to use Google Gears to perform drag-and-drop file uploads?")}else{AJS.log("Gears installation prompt is disabled, since it has been discontinued");return false}},isFireFox35OrLater:function(){return !this.isFireFox30()&&b.browser.version.indexOf("1.9.")!=-1},isFireFox30:function(){return b.browser.version.indexOf("1.9.0")!=-1},isIE9:function(){if(AJS.$.browser.msie){var d=parseFloat(AJS.$.browser.version);
if(d>=9&&d<10){return true}}return false},enableDropZoneOn:function(d,e){if(!d){throw new Error("Cannot enable drop zone on invalid container. Received: "+d)}e=e||AJS.DragAndDrop.defaultDropHandler;this.bindDragEnter(d);this.bindDragOver(d);this.bindDragLeave(d);this.bindDrop(d,e)},getFilesFromDropEvent:function(f){if(AJS.DragAndDropUtils.isFolderDropEvent(f)){AJS.DragAndDropUtils.displayMessageDialog("No files were found in the items dragged onto this window. It is possible that you may have dragged a folder - this is not supported. \u003cp>\u003cstrong>Note to Mac OSX users:\u003c\/strong> Some items may appear as files but are actually folders and are therefore not supported. Examples include iWork and Keynote files.\u003c\/p>");return[]}var g=this.getDesktopInstance().getDragData(f,"application/x-gears-files");var d;try{d=g&&g.files}catch(h){AJS.log("Error retrieving file data from drop event")}return d||[]},isFolderDropEvent:function(d){try{return(this.getDesktopInstance().getDragData(d,"application/x-gears-files")||{}).count==0}catch(f){AJS.log("Error retrieving file data from drop event")}},displayMessageDialog:function(e){var d=new AJS.Dialog(600,200,"drag-and-drop-message-dialog");d.addHeader("Drag & Drop").addPanel("Panel 1","<div>"+e+"</div>").addButton("Done",function(f){d.remove()});d.show()},getDesktopInstance:function(){if(!c){c=google.gears.factory.create("beta.desktop")}return c}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/plupload.js' */
(function(){var f=0,k=[],m={},i={},a={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},l=/[<>&\"\']/g,b,c=window.setTimeout,d={},e;function h(){this.returnValue=false}function j(){this.cancelBubble=true}(function(n){var o=n.split(/,/),p,r,q;for(p=0;p<o.length;p+=2){q=o[p+1].split(/ /);for(r=0;r<q.length;r++){i[q[r]]=o[p]}}})("application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/rtf,rtf,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe");var g={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:i,ua:(function(){var r=navigator,q=r.userAgent,s=r.vendor,o,n,p;o=/WebKit/.test(q);p=o&&s.indexOf("Apple")!==-1;
n=window.opera&&window.opera.buildNumber;return{windows:navigator.platform.indexOf("Win")!==-1,ie:!o&&!n&&(/MSIE/gi).test(q)&&(/Explorer/gi).test(r.appName),webkit:o,gecko:!o&&/Gecko/.test(q),safari:p,opera:!!n}}()),extend:function(n){g.each(arguments,function(o,p){if(p>0){g.each(o,function(r,q){n[q]=r})}});return n},getElement:function(n){return n&&n.nodeType==1?n:document.getElementById(n)},cleanName:function(n){var o,p;p=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(o=0;o<p.length;o+=2){n=n.replace(p[o],p[o+1])}n=n.replace(/\s+/g,"_");n=n.replace(/[^a-z0-9_\-\.]+/gi,"");return n},addRuntime:function(n,o){o.name=n;k[n]=o;k.push(o);return o},guid:function(){var n=new Date().getTime().toString(32),o;for(o=0;o<5;o++){n+=Math.floor(Math.random()*65535).toString(32)}return(g.guidPrefix||"p")+n+(f++).toString(32)},buildUrl:function(o,n){var p="";g.each(n,function(r,q){p+=(p?"&":"")+encodeURIComponent(q)+"="+encodeURIComponent(r)});if(p){o+=(o.indexOf("?")>0?"&":"?")+p}return o},each:function(q,r){var p,o,n;if(q){p=q.length;if(p===b){for(o in q){if(q.hasOwnProperty(o)){if(r(q[o],o)===false){return}}}}else{for(n=0;n<p;n++){if(r(q[n],n)===false){return}}}}},formatSize:function(n){if(n===b||/\D/.test(n)){return g.translate("N/A")}if(n>1073741824){return Math.round(n/1073741824,1)+" GB"}if(n>1048576){return Math.round(n/1048576,1)+" MB"}if(n>1024){return Math.round(n/1024,1)+" KB"}return n+" b"},getPos:function(o,s){var t=0,r=0,v,u=document,p,q;o=o;s=s||u.body;function n(B){var z,A,w=0,C=0;if(B){A=B.getBoundingClientRect();z=u.compatMode==="CSS1Compat"?u.documentElement:u.body;w=A.left+z.scrollLeft;C=A.top+z.scrollTop}return{x:w,y:C}}if(o&&o.getBoundingClientRect&&(navigator.userAgent.indexOf("MSIE")>0&&u.documentMode!==8)){p=n(o);q=n(s);return{x:p.x-q.x,y:p.y-q.y}}v=o;while(v&&v!=s&&v.nodeType){t+=v.offsetLeft||0;
r+=v.offsetTop||0;v=v.offsetParent}v=o.parentNode;while(v&&v!=s&&v.nodeType){t-=v.scrollLeft||0;r-=v.scrollTop||0;v=v.parentNode}return{x:t,y:r}},getSize:function(n){return{w:n.offsetWidth||n.clientWidth,h:n.offsetHeight||n.clientHeight}},parseSize:function(n){var o;if(typeof(n)=="string"){n=/^([0-9]+)([mgk]?)$/.exec(n.toLowerCase().replace(/[^0-9mkg]/g,""));o=n[2];n=+n[1];if(o=="g"){n*=1073741824}if(o=="m"){n*=1048576}if(o=="k"){n*=1024}}return n},xmlEncode:function(n){return n?(""+n).replace(l,function(o){return a[o]?"&"+a[o]+";":o}):n},toArray:function(p){var o,n=[];for(o=0;o<p.length;o++){n[o]=p[o]}return n},addI18n:function(n){return g.extend(m,n)},translate:function(n){return m[n]||n},isEmptyObj:function(n){if(n===b){return true}for(var o in n){return false}return true},hasClass:function(p,o){var n;if(p.className==""){return false}n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");return n.test(p.className)},addClass:function(o,n){if(!g.hasClass(o,n)){o.className=o.className==""?n:o.className.replace(/\s+$/,"")+" "+n}},removeClass:function(p,o){var n=new RegExp("(^|\\s+)"+o+"(\\s+|$)");p.className=p.className.replace(n,function(r,q,s){return q===" "&&s===" "?" ":""})},getStyle:function(o,n){if(o.currentStyle){return o.currentStyle[n]}else{if(window.getComputedStyle){return window.getComputedStyle(o,null)[n]}}},addEvent:function(s,n,t){var r,q,p,o;o=arguments[3];n=n.toLowerCase();if(e===b){e="Plupload_"+g.guid()}if(s.addEventListener){r=t;s.addEventListener(n,r,false)}else{if(s.attachEvent){r=function(){var u=window.event;if(!u.target){u.target=u.srcElement}u.preventDefault=h;u.stopPropagation=j;t(u)};s.attachEvent("on"+n,r)}}if(s[e]===b){s[e]=g.guid()}if(!d.hasOwnProperty(s[e])){d[s[e]]={}}q=d[s[e]];if(!q.hasOwnProperty(n)){q[n]=[]}q[n].push({func:r,orig:t,key:o})},removeEvent:function(s,n){var q,t,p;if(typeof(arguments[2])=="function"){t=arguments[2]}else{p=arguments[2]}n=n.toLowerCase();if(s[e]&&d[s[e]]&&d[s[e]][n]){q=d[s[e]][n]}else{return}for(var o=q.length-1;o>=0;o--){if(q[o].key===p||q[o].orig===t){if(s.detachEvent){s.detachEvent("on"+n,q[o].func)
}else{if(s.removeEventListener){s.removeEventListener(n,q[o].func,false)}}q[o].orig=null;q[o].func=null;q.splice(o,1);if(t!==b){break}}}if(!q.length){delete d[s[e]][n]}if(g.isEmptyObj(d[s[e]])){delete d[s[e]];try{delete s[e]}catch(r){s[e]=b}}},removeAllEvents:function(o){var n=arguments[1];if(o[e]===b||!o[e]){return}g.each(d[o[e]],function(q,p){g.removeEvent(o,p,n)})}};g.Uploader=function(r){var p={},u,t=[],q;u=new g.QueueProgress();r=g.extend({chunk_size:0,multipart:true,multi_selection:true,file_data_name:"file",filters:[]},r);function s(){var w,x=0,v;if(this.state==g.STARTED){for(v=0;v<t.length;v++){if(!w&&t[v].status==g.QUEUED){w=t[v];w.status=g.UPLOADING;if(this.trigger("BeforeUpload",w)){this.trigger("UploadFile",w)}}else{x++}}if(x==t.length){this.stop();this.trigger("UploadComplete",t)}}}function o(){var w,v;u.reset();for(w=0;w<t.length;w++){v=t[w];if(v.size!==b){u.size+=v.size;u.loaded+=v.loaded}else{u.size=b}if(v.status==g.DONE){u.uploaded++}else{if(v.status==g.FAILED){u.failed++}else{u.queued++}}}if(u.size===b){u.percent=t.length>0?Math.ceil(u.uploaded/t.length*100):0}else{u.bytesPerSec=Math.ceil(u.loaded/((+new Date()-q||1)/1000));u.percent=u.size>0?Math.ceil(u.loaded/u.size*100):0}}function n(){return !!u.queued}g.extend(this,{state:g.STOPPED,runtime:"",features:{},files:t,settings:r,total:u,id:g.guid(),init:function(){var A=this,B,x,w,z=0,y;if(typeof(r.preinit)=="function"){r.preinit(A)}else{g.each(r.preinit,function(D,C){A.bind(C,D)})}r.page_url=r.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");if(!/^(\w+:\/\/|\/)/.test(r.url)){r.url=r.page_url+r.url}r.chunk_size=g.parseSize(r.chunk_size);r.max_file_size=g.parseSize(r.max_file_size);A.bind("FilesAdded",function(C,F){var E,D,H=0,I,G=r.filters;if(G&&G.length){I=[];g.each(G,function(J){g.each(J.extensions.split(/,/),function(K){if(/^\s*\*\s*$/.test(K)){I.push("\\.*")}else{I.push("\\."+K.replace(new RegExp("["+("/^$.*+?|()[]{}\\".replace(/./g,"\\$&"))+"]","g"),"\\$&"))}})});I=new RegExp(I.join("|")+"$","i")
}for(E=0;E<F.length;E++){D=F[E];D.loaded=0;D.percent=0;D.status=g.QUEUED;if(I&&!I.test(D.name)){C.trigger("Error",{code:g.FILE_EXTENSION_ERROR,message:g.translate("File extension error."),file:D});continue}if(D.size!==b&&D.size>r.max_file_size){C.trigger("Error",{code:g.FILE_SIZE_ERROR,message:g.translate("File size error."),file:D});continue}t.push(D);H++}if(H){c(function(){A.trigger("QueueChanged");A.refresh()},1)}else{return false}});if(r.unique_names){A.bind("UploadFile",function(C,D){var F=D.name.match(/\.([^.]+)$/),E="tmp";if(F){E=F[1]}D.target_name=D.id+"."+E})}A.bind("UploadProgress",function(C,D){D.percent=D.size>0?Math.ceil(D.loaded/D.size*100):100;o()});A.bind("StateChanged",function(C){if(C.state==g.STARTED){q=(+new Date())}else{if(C.state==g.STOPPED){for(B=C.files.length-1;B>=0;B--){if(C.files[B].status==g.UPLOADING){C.files[B].status=g.QUEUED;o()}}}}});A.bind("QueueChanged",o);A.bind("Error",function(C,D){if(D.file){D.file.status=g.FAILED;o();if(C.state==g.STARTED){if(!n()){c(function(){s.call(A)},1)}}}});A.bind("FileUploaded",function(C,D){D.status=g.DONE;D.loaded=D.size;C.trigger("UploadProgress",D);c(function(){s.call(A)},1)});if(r.runtimes){x=[];y=r.runtimes.split(/\s?,\s?/);for(B=0;B<y.length;B++){if(k[y[B]]){x.push(k[y[B]])}}}else{x=k}function v(){var F=x[z++],E,C,D;if(F){E=F.getFeatures();C=A.settings.required_features;if(C){C=C.split(",");for(D=0;D<C.length;D++){if(!E[C[D]]){v();return}}}F.init(A,function(G){if(G&&G.success){A.features=E;A.runtime=F.name;A.trigger("Init",{runtime:F.name});A.trigger("PostInit");A.refresh()}else{v()}})}else{A.trigger("Error",{code:g.INIT_ERROR,message:g.translate("Init error.")})}}v();if(typeof(r.init)=="function"){r.init(A)}else{g.each(r.init,function(D,C){A.bind(C,D)})}},refresh:function(){this.trigger("Refresh")},start:function(){if(this.state!=g.STARTED){this.state=g.STARTED;this.trigger("StateChanged");s.call(this)}},stop:function(){if(this.state!=g.STOPPED){this.state=g.STOPPED;this.trigger("CancelUpload");this.trigger("StateChanged")
}},getFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w){return t[v]}}},removeFile:function(w){var v;for(v=t.length-1;v>=0;v--){if(t[v].id===w.id){return this.splice(v,1)[0]}}},splice:function(y,w){var x;x=t.splice(y===b?0:y,w===b?t.length:w);this.trigger("FilesRemoved",x);this.trigger("QueueChanged");if(x[0].status==g.UPLOADING&&this.state==g.STARTED){this.trigger("CancelUpload")}if(!n()){var v=this;c(function(){v.trigger("UploadComplete")})}return x},trigger:function(w){var y=p[w.toLowerCase()],x,v;if(y){v=Array.prototype.slice.call(arguments);v[0]=this;for(x=0;x<y.length;x++){if(y[x].func.apply(y[x].scope,v)===false){return false}}}return true},hasEventListener:function(v){return !!p[v.toLowerCase()]},bind:function(v,x,w){var y;v=v.toLowerCase();y=p[v]||[];y.push({func:x,scope:w||this});p[v]=y},unbind:function(v){v=v.toLowerCase();var y=p[v],w,x=arguments[1];if(y){if(x!==b){for(w=y.length-1;w>=0;w--){if(y[w].func===x){y.splice(w,1);break}}}else{y=[]}if(!y.length){delete p[v]}}},unbindAll:function(){var v=this;g.each(p,function(x,w){v.unbind(w)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})};g.File=function(q,o,p){var n=this;n.id=q;n.name=o;n.size=p;n.loaded=0;n.percent=0;n.status=0};g.Runtime=function(){this.getFeatures=function(){};this.init=function(n,o){}};g.QueueProgress=function(){var n=this;n.size=0;n.loaded=0;n.uploaded=0;n.failed=0;n.queued=0;n.percent=0;n.bytesPerSec=0;n.reset=function(){n.size=n.loaded=n.uploaded=n.failed=n.queued=n.percent=n.bytesPerSec=0}};g.runtimes={};window.plupload=g})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
AJS.toInit(function(b){var c;function a(){var f=document.getElementById("fileuploadShim");if(!f){f=document.createElement("div");f.setAttribute("id","fileuploadShim");document.body.appendChild(f)}var e=new plupload.Uploader({runtimes:"html5",dragdrop:true,drop_element:b("body")[0],browse_button:f.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+AJS.Meta.get("global-settings-attachment-max-size")}),d=function(){if(AJS.Editor&&AJS.Editor.isVisible()&&AJS.Confluence.EditorUploadProgressDialog){c=AJS.Confluence.EditorUploadProgressDialog}else{c=new AJS.DragAndDropProgressDialog()}};c=null;e.init();AJS.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,l){if(AJS.Editor&&AJS.Editor.isVisible()){Confluence.Uploader&&Confluence.Uploader.trigger("FilesAdded",l);return}!c&&d();for(var j=0,k=l.length;j<k;j++){var h=l[j];if(h.status!==plupload.FAILED){c.render({workId:h.id,status:h.status,file:h})}}e.start()});e.bind("BeforeUpload",function(g,j){if(AJS.Editor&&AJS.Editor.isVisible()){return}var i=AJS.DragAndDropUtils.base+Confluence.getContextPath()+"/plugins/drag-and-drop/upload.action";var h=AJS.Meta.get("page-id");var k=h!=0?{pageId:h}:{draftId:AJS.Meta.get("draft-id")},l=j.name.substr(j.name.lastIndexOf(".")+1);k.filename=j.name;k.size=j.size;k.mimeType=plupload.mimeTypes[l.toLowerCase()]||"application/x-upload-data";k.spaceKey=AJS.Meta.get("space-key");k.atl_token=AJS.Meta.get("atl-token");g.settings.url=plupload.buildUrl(i,k);c.cancelListeners.push(function(o,m){var n=g.getFile(m.workId);n&&g.removeFile(n);c.renderInfo(m.workId,"File was manually removed from the queue.")});c.show()});e.bind("UploadProgress",function(g,h){c.renderUpdateToBytesUploaded(h.id,h.loaded,h.size);c.hideCloseButton()});e.bind("FileUploaded",function(g,i,h){if(h.status===0){c.renderError(i.id,"The server is not responding. Please check that it is running.")}else{c.renderComplete(i.id)}});e.bind("Error",function(h,i){if(AJS.Editor&&AJS.Editor.isVisible()){return}var g,j;
if(i.response){try{g=AJS.$.parseJSON(i.response);j=g.actionErrors[0]}catch(k){if(k.name==="SyntaxError"){j="Invalid response received from the server."}else{j=i.message}}c.renderError(i.file.id,j)}else{j=i.message;if(i.code==plupload.FILE_SIZE_ERROR){j=AJS.format("File of size {0} exceeds maximum upload limit of {1}",AJS.DragAndDropUtils.niceSize(i.file.size).toString(),AJS.DragAndDropUtils.niceSize(AJS.Meta.get("global-settings-attachment-max-size")).toString());!c&&d();c.render({workId:i.file.id,status:i.file.status,file:i.file,errorMessage:j});if(!c.isVisible()){c.show();c.showCloseButton()}}}});e.bind("UploadComplete",function(){if(!e.total.queued){c.showCloseButton();if(!c.hasErrors()){setTimeout(function(){c.hide();c.clearRenderOutput();window.location.reload()},1000)}}})}AJS.DragAndDropUtils.hasXhrSupport&&a()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
AJS.ObservableArrayList=function(){this._data=[];this._pushObservers=[]};AJS.ObservableArrayList.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(b,a){return this._remove.call(this._data,b,a)},_remove:function(c,b){var a=this.slice((b||c)+1||this.length);this.length=c<0?this.length+c:c;return this.push.apply(this,a)},shift:function(){return this._data.shift()},removeByPredicate:function(b){var d=[],a=this._data.length;for(var c=0;c<a;c++){if(!b(this._data[c])){d.push(this._data[c])}}this._data=d;return a-this._data.length},addPushObserver:function(a){if(AJS.$.isFunction(a)){this._pushObservers.push(a)}else{throw new Error("Attempting to add an observer that is not a function: "+a)}},_notifyPushObservers:function(c){for(var a=0,b=this._pushObservers.length;a<b;a++){this._pushObservers[a](c)}}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/plupload.html5.js' */
(function(h,k,j,e){var c={},g;function m(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsDataURL(o);n.onload=function(){p(n.result)}}else{return p(o.getAsDataURL())}}function l(o,p){var n;if("FileReader" in h){n=new FileReader();n.readAsBinaryString(o);n.onload=function(){p(n.result)}}else{return p(o.getAsBinary())}}function d(r,p,n,v){var q,o,u,s,t=this;m(c[r.id],function(w){q=k.createElement("canvas");q.style.display="none";k.body.appendChild(q);o=q.getContext("2d");u=new Image();u.onerror=u.onabort=function(){v({success:false})};u.onload=function(){var B,x,z,y,A;if(!p.width){p.width=u.width}if(!p.height){p.height=u.height}s=Math.min(p.width/u.width,p.height/u.height);if(s<1||(s===1&&n==="image/jpeg")){B=Math.round(u.width*s);x=Math.round(u.height*s);q.width=B;q.height=x;o.drawImage(u,0,0,B,x);if(n==="image/jpeg"){y=new f(atob(w.substring(w.indexOf("base64,")+7)));if(y.headers&&y.headers.length){A=new a();if(A.init(y.get("exif")[0])){A.setExif("PixelXDimension",B);A.setExif("PixelYDimension",x);y.set("exif",A.getBinary());if(t.hasEventListener("ExifData")){t.trigger("ExifData",r,A.EXIF())}if(t.hasEventListener("GpsData")){t.trigger("GpsData",r,A.GPS())}}}if(p.quality){try{w=q.toDataURL(n,p.quality/100)}catch(C){w=q.toDataURL(n)}}}else{w=q.toDataURL(n)}w=w.substring(w.indexOf("base64,")+7);w=atob(w);if(y&&y.headers&&y.headers.length){w=y.restore(w);y.purge()}q.parentNode.removeChild(q);v({success:true,data:w})}else{v({success:false})}};u.src=w})}j.runtimes.Html5=j.addRuntime("html5",{getFeatures:function(){var s,o,r,q,p,n;o=r=p=n=false;if(h.XMLHttpRequest){s=new XMLHttpRequest();r=!!s.upload;o=!!(s.sendAsBinary||s.upload)}if(o){q=!!(s.sendAsBinary||(h.Uint8Array&&h.ArrayBuffer));p=!!(File&&(File.prototype.getAsDataURL||h.FileReader)&&q);n=!!(File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice))}g=j.ua.safari&&j.ua.windows&&navigator.userAgent&&navigator.userAgent.indexOf("Version/4")>0;return{html5:o,dragdrop:(function(){var t=k.createElement("div");
return("draggable" in t)||("ondragstart" in t&&"ondrop" in t)}()),jpgresize:p,pngresize:p,multipart:p||!!h.FileReader||!!h.FormData,canSendBinary:q,cantSendBlobInFormData:!!(j.ua.gecko&&h.FormData&&h.FileReader&&!FileReader.prototype.readAsArrayBuffer),progress:r,chunks:n,multi_selection:!(j.ua.safari&&j.ua.windows),triggerDialog:(j.ua.gecko&&h.FormData||j.ua.webkit)}},init:function(p,r){var n,q;function o(w){var u,t,v=[],x,s={};for(t=0;t<w.length;t++){u=w[t];if(s[u.name]){continue}s[u.name]=true;x=j.guid();c[x]=u;if(u.fileSize>0||u.size>0){v.push(new j.File(x,u.fileName||u.name,u.fileSize||u.size))}}if(v.length){p.trigger("FilesAdded",v)}}n=this.getFeatures();if(!n.html5){r({success:false});return}p.upload=function(s){o(s)};p.bind("Init",function(w){var G,F,C=[],v,D,t=w.settings.filters,u,B,s=k.body,E;G=k.createElement("div");G.id=w.id+"_html5_container";j.extend(G.style,{position:"absolute",background:p.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:p.settings.shim_bgcolor?"":0});G.className="plupload html5";if(p.settings.container){s=k.getElementById(p.settings.container);if(j.getStyle(s,"position")==="static"){s.style.position="relative"}}s.appendChild(G);no_type_restriction:for(v=0;v<t.length;v++){u=t[v].extensions.split(/,/);for(D=0;D<u.length;D++){if(u[D]==="*"){C=[];break no_type_restriction}B=j.mimeTypes[u[D]];if(B){C.push(B)}}}G.innerHTML='<input id="'+p.id+'_html5"  style="font-size:999px" type="file" accept="'+C.join(",")+'" '+(p.settings.multi_selection&&p.features.multi_selection?'multiple="multiple"':"")+" />";G.scrollTop=100;E=k.getElementById(p.id+"_html5");if(w.features.triggerDialog){j.extend(E.style,{position:"absolute",width:"100%",height:"100%"})}else{j.extend(E.style,{cssFloat:"right",styleFloat:"right"})}E.onchange=function(){o(this.files);this.value=""};F=k.getElementById(w.settings.browse_button);if(F){var z=w.settings.browse_button_hover,A=w.settings.browse_button_active,x=w.features.triggerDialog?F:G;
if(z){j.addEvent(x,"mouseover",function(){j.addClass(F,z)},w.id);j.addEvent(x,"mouseout",function(){j.removeClass(F,z)},w.id)}if(A){j.addEvent(x,"mousedown",function(){j.addClass(F,A)},w.id);j.addEvent(k.body,"mouseup",function(){j.removeClass(F,A)},w.id)}if(w.features.triggerDialog){j.addEvent(F,"click",function(y){k.getElementById(w.id+"_html5").click();y.preventDefault()},w.id)}}});p.bind("PostInit",function(){var s=j.getElement(p.settings.drop_element),t,u=false;if(s){if(g){j.addEvent(s,"dragenter",function(y){var x,v,w;x=k.getElementById(p.id+"_drop");if(!x){x=k.createElement("input");x.setAttribute("type","file");x.setAttribute("id",p.id+"_drop");x.setAttribute("multiple","multiple");j.addEvent(x,"change",function(){o(this.files);j.removeEvent(x,"change",p.id);x.parentNode.removeChild(x)},p.id);s.appendChild(x);u=true}v=j.getPos(s,k.getElementById(p.settings.container));w=j.getSize(s);if(j.getStyle(s,"position")==="static"){j.extend(s.style,{position:"relative"})}j.extend(x.style,{position:"absolute",display:"block",top:0,left:0,width:w.w+"px",height:w.h+"px",opacity:0})},p.id);j.addEvent(s,"dragleave",function(v){if(!u){t&&t.parentElement.removeChild(t);t=null}u=false});return}j.addEvent(s,"dragover",function(v){v.preventDefault()},p.id);j.addEvent(s,"drop",function(w){var v=w.dataTransfer;if(v&&v.files){o(v.files)}t&&t.parentElement.removeChild(t);t=null;w.preventDefault();if(p.settings.stop_propagation){if(w.cancelBubble){w.cancelBubble=true}else{w.stopPropagation()}}},p.id)}});p.bind("Refresh",function(s){var t,u,v,x,w;t=k.getElementById(p.settings.browse_button);if(t){u=j.getPos(t,k.getElementById(s.settings.container));v=j.getSize(t);x=k.getElementById(p.id+"_html5_container");j.extend(x.style,{top:u.y+"px",left:u.x+"px",width:v.w+"px",height:v.h+"px"});if(p.features.triggerDialog){if(j.getStyle(t,"position")==="static"){j.extend(t.style,{position:"relative"})}w=parseInt(j.getStyle(t,"z-index"),10);if(isNaN(w)){w=0}j.extend(t.style,{zIndex:w});j.extend(x.style,{zIndex:w-1})
}}});p.bind("CancelUpload",function(){if(q&&q.abort){q.abort()}});p.bind("UploadFile",function(s,u){var v=s.settings,y,t;function x(A,D,z){var B;if(File.prototype.slice){try{A.slice();return A.slice(D,z)}catch(C){return A.slice(D,z-D)}}else{if(B=File.prototype.webkitSlice||File.prototype.mozSlice){return B.call(A,D,z)}else{return null}}}function w(A){var D=0,C=0,z=("FileReader" in h)?new FileReader:null;function B(){var I,M,K,L,H,J,F,E=s.settings.url;function G(V){var T=0,N="----pluploadboundary"+j.guid(),O,P="--",U="\r\n",R="";q=new XMLHttpRequest;if(q.upload){q.upload.onprogress=function(W){u.loaded=Math.min(u.size,C+W.loaded-T);s.trigger("UploadProgress",u)}}q.onreadystatechange=function(){var W,Y;if(q.readyState==4){try{W=q.status}catch(X){W=0}if(W>=400){s.trigger("Error",{code:j.HTTP_ERROR,message:j.translate("HTTP Error."),file:u,status:W,response:q.responseText||""})}else{if(K){Y={chunk:D,chunks:K,response:q.responseText,status:W};s.trigger("ChunkUploaded",u,Y);C+=J;if(Y.cancelled){u.status=j.FAILED;return}u.loaded=Math.min(u.size,(D+1)*H)}else{u.loaded=u.size}s.trigger("UploadProgress",u);V=I=O=R=null;if(!K||++D>=K){u.status=j.DONE;s.trigger("FileUploaded",u,{response:q.responseText,status:W})}else{B()}}}};if(s.settings.multipart&&n.multipart){L.name=u.target_name||u.name;q.open("post",E,true);j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});if(typeof(V)!=="string"&&!!h.FormData){O=new FormData();j.each(j.extend(L,s.settings.multipart_params),function(X,W){O.append(W,X)});O.append(s.settings.file_data_name,V);q.send(O);return}if(typeof(V)==="string"){q.setRequestHeader("Content-Type","multipart/form-data; boundary="+N);j.each(j.extend(L,s.settings.multipart_params),function(X,W){R+=P+N+U+'Content-Disposition: form-data; name="'+W+'"'+U+U;R+=unescape(encodeURIComponent(X))+U});F=j.mimeTypes[u.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";R+=P+N+U+'Content-Disposition: form-data; name="'+s.settings.file_data_name+'"; filename="'+unescape(encodeURIComponent(u.name))+'"'+U+"Content-Type: "+F+U+U+V+U+P+N+P+U;
T=R.length-V.length;V=R;if(q.sendAsBinary){q.sendAsBinary(V)}else{if(n.canSendBinary){var S=new Uint8Array(V.length);for(var Q=0;Q<V.length;Q++){S[Q]=(V.charCodeAt(Q)&255)}q.send(S.buffer)}}return}}E=j.buildUrl(s.settings.url,j.extend(L,s.settings.multipart_params));q.open("post",E,true);q.setRequestHeader("Content-Type","application/octet-stream");if(V.encoding){q.setRequestHeader("Content-Encoding",V.encoding)}j.each(s.settings.headers,function(X,W){q.setRequestHeader(W,X)});q.send(V.getData?V.getData():V)}if(u.status==j.DONE||u.status==j.FAILED||s.state==j.STOPPED){return}L={name:u.target_name||u.name};if(v.chunk_size&&u.size>v.chunk_size&&(n.chunks||typeof(A)=="string")){H=v.chunk_size;K=Math.ceil(u.size/H);J=Math.min(H,u.size-(D*H));if(typeof(A)=="string"){I=A.substring(D*H,D*H+J)}else{I=x(A,D*H,D*H+J)}L.chunk=D;L.chunks=K}else{J=u.size;I=A}if(typeof(I)!=="string"&&z&&n.cantSendBlobInFormData&&n.chunks&&s.settings.chunk_size){z.onload=function(){G(z.result)};z.readAsBinaryString(I)}else{G(I)}}B()}y=c[u.id];if(n.jpgresize&&s.settings.resize&&/\.(png|jpg|jpeg)$/i.test(u.name)){d.call(s,u,s.settings.resize,/\.png$/i.test(u.name)?"image/png":"image/jpeg",function(z){if(z.success){u.size=z.data.length;w(z.data)}else{w(y)}})}else{w(y)}});p.bind("Destroy",function(s){var u,v,t=k.body,w={inputContainer:s.id+"_html5_container",inputFile:s.id+"_html5",browseButton:s.settings.browse_button,dropElm:s.settings.drop_element};for(u in w){v=k.getElementById(w[u]);if(v){j.removeAllEvents(v,s.id)}}j.removeAllEvents(k.body,s.id);if(s.settings.container){t=k.getElementById(s.settings.container)}t.removeChild(k.getElementById(w.inputContainer))});r({success:true})}});function b(){var q=false,o;function r(t,v){var s=q?0:-8*(v-1),w=0,u;for(u=0;u<v;u++){w|=(o.charCodeAt(t+u)<<Math.abs(s+u*8))}return w}function n(u,s,t){var t=arguments.length===3?t:o.length-s-1;o=o.substr(0,s)+u+o.substr(t+s)}function p(t,u,w){var x="",s=q?0:-8*(w-1),v;for(v=0;v<w;v++){x+=String.fromCharCode((u>>Math.abs(s+v*8))&255)
}n(x,t,w)}return{II:function(s){if(s===e){return q}else{q=s}},init:function(s){q=false;o=s},SEGMENT:function(s,u,t){switch(arguments.length){case 1:return o.substr(s,o.length-s-1);case 2:return o.substr(s,u);case 3:n(t,s,u);break;default:return o}},BYTE:function(s){return r(s,1)},SHORT:function(s){return r(s,2)},LONG:function(s,t){if(t===e){return r(s,4)}else{p(s,t,4)}},SLONG:function(s){var t=r(s,4);return(t>2147483647?t-4294967296:t)},STRING:function(s,t){var u="";for(t+=s;s<t;s++){u+=String.fromCharCode(r(s,1))}return u}}}function f(s){var u={65505:{app:"EXIF",name:"APP1",signature:"Exif\0"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\0"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\0"}},t=[],r,n,p=e,q=0,o;r=new b();r.init(s);if(r.SHORT(0)!==65496){return}n=2;o=Math.min(1048576,s.length);while(n<=o){p=r.SHORT(n);if(p>=65488&&p<=65495){n+=2;continue}if(p===65498||p===65497){break}q=r.SHORT(n+2)+2;if(u[p]&&r.STRING(n+4,u[p].signature.length)===u[p].signature){t.push({hex:p,app:u[p].app.toUpperCase(),name:u[p].name.toUpperCase(),start:n,length:q,segment:r.SEGMENT(n,q)})}n+=q}r.init(null);return{headers:t,restore:function(y){r.init(y);var w=new f(y);if(!w.headers){return false}for(var x=w.headers.length;x>0;x--){var z=w.headers[x-1];r.SEGMENT(z.start,z.length,"")}w.purge();n=r.SHORT(2)==65504?4+r.SHORT(4):2;for(var x=0,v=t.length;x<v;x++){r.SEGMENT(n,0,t[x].segment);n+=t[x].length}return r.SEGMENT()},get:function(x){var y=[];for(var w=0,v=t.length;w<v;w++){if(t[w].app===x.toUpperCase()){y.push(t[w].segment)}}return y},set:function(y,x){var z=[];if(typeof(x)==="string"){z.push(x)}else{z=x}for(var w=ii=0,v=t.length;w<v;w++){if(t[w].app===y.toUpperCase()){t[w].segment=z[ii];t[w].length=z[ii].length;ii++}if(ii>=z.length){break}}},purge:function(){t=[];r.init(null)}}}function a(){var q,n,o={},t;q=new b();n={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};
t={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};
function p(u,C){var w=q.SHORT(u),z,F,G,B,A,v,x,D,E=[],y={};for(z=0;z<w;z++){x=v=u+12*z+2;G=C[q.SHORT(x)];if(G===e){continue}B=q.SHORT(x+=2);A=q.LONG(x+=2);x+=4;E=[];switch(B){case 1:case 7:if(A>4){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.BYTE(x+F)}break;case 2:if(A>4){x=q.LONG(x)+o.tiffHeader}y[G]=q.STRING(x,A-1);continue;case 3:if(A>2){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.SHORT(x+F*2)}break;case 4:if(A>1){x=q.LONG(x)+o.tiffHeader}for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)}break;case 5:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.LONG(x+F*4)/q.LONG(x+F*4+4)}break;case 9:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)}break;case 10:x=q.LONG(x)+o.tiffHeader;for(F=0;F<A;F++){E[F]=q.SLONG(x+F*4)/q.SLONG(x+F*4+4)}break;default:continue}D=(A==1?E[0]:E);if(t.hasOwnProperty(G)&&typeof D!="object"){y[G]=t[G][D]}else{y[G]=D}}return y}function s(){var v=e,u=o.tiffHeader;q.II(q.SHORT(u)==18761);if(q.SHORT(u+=2)!==42){return false}o.IFD0=o.tiffHeader+q.LONG(u+=2);v=p(o.IFD0,n.tiff);o.exifIFD=("ExifIFDPointer" in v?o.tiffHeader+v.ExifIFDPointer:e);o.gpsIFD=("GPSInfoIFDPointer" in v?o.tiffHeader+v.GPSInfoIFDPointer:e);return true}function r(w,u,z){var B,y,x,A=0;if(typeof(u)==="string"){var v=n[w.toLowerCase()];for(hex in v){if(v[hex]===u){u=hex;break}}}B=o[w.toLowerCase()+"IFD"];y=q.SHORT(B);for(i=0;i<y;i++){x=B+12*i+2;if(q.SHORT(x)==u){A=x+8;break}}if(!A){return false}q.LONG(A,z);return true}return{init:function(u){o={tiffHeader:10};if(u===e||!u.length){return false}q.init(u);if(q.SHORT(0)===65505&&q.STRING(4,5).toUpperCase()==="EXIF\0"){return s()}return false},EXIF:function(){var u;u=p(o.exifIFD,n.exif);if(u.ExifVersion){u.ExifVersion=String.fromCharCode(u.ExifVersion[0],u.ExifVersion[1],u.ExifVersion[2],u.ExifVersion[3])}return u},GPS:function(){var u;u=p(o.gpsIFD,n.gps);if(u.GPSVersionID){u.GPSVersionID=u.GPSVersionID.join(".")}return u},setExif:function(u,v){if(u!=="PixelXDimension"&&u!=="PixelYDimension"){return false}return r("exif",u,v)},getBinary:function(){return q.SEGMENT()
}}}})(window,document,plupload);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
(function(a){AJS.DragAndDropProgressDialog=function(b){var c=this;var d={header:"Attach File(s)",width:600,height:400};this._options=a.extend({},d,b);this.id="drag-and-drop-progress-dialog";this._dialog=new AJS.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",AJS.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",function(){c.hide();c.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=a(".all-file-uploads-complete");a(document).keydown(function(f){if(f.which==27){if(!c._$closeButton.prop("disabled")){c.hide();c.clearRenderOutput()}return AJS.stopEvent(f)}});this._$container=a("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=true;this.hasErrorMessage=false};AJS.DragAndDropProgressDialog.prototype={show:function(){if(this._hidden){this._dialog.show();this._hidden=false;a.each(this.onShowListeners,function(b,c){c()})}this.hideCloseButton()},hide:function(){if(!this._hidden){this._dialog.hide();this._hidden=true}},isVisible:function(){return !this._hidden},_getProgressElementId:function(b){return"file-"+b+"-progress"},render:function(c){this._workIdsOfFilesInProgress.push(c.workId);this._$container.append(AJS.DragAndDrop.Templates.fileStatus({filename:c.file.name,progressElementId:this._getProgressElementId(c.workId),workId:c.workId,showCancel:(c.status==plupload.QUEUED)}));var b=a("#"+this._getProgressElementId(c.workId));b.progressbar({value:0});if(c.status==plupload.QUEUED){a("#file-upload-cancel-"+c.workId).click((function(d){return function(f){a.each(d,function(e,g){g(f,c)})}})(this.cancelListeners))}else{this.renderError(c.workId,c.errorMessage)}},renderError:function(e,d){if(a.inArray(e,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+e)}var b=a("#file-status-block-"+e);
var c=b.attr("data-filename");b.html(aui.message.warning({content:d,titleContent:c}));this.hasErrorMessage=true},renderInfo:function(e,d){if(a.inArray(e,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+e)}var b=a("#file-status-block-"+e);var c=b.attr("data-filename");b.html(aui.message.info({content:d,titleContent:c}));this.hasErrorMessage=true},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(h,g,b){if(a.inArray(h,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+h)}var d=AJS.DragAndDropUtils.niceSize(g);var f=a("#file-"+h+"-uploaded");if(!!f.length){f.text(d)}else{a("#file-upload-progress-text-"+h).html(AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:h,uploadedSizeNice:d,totalSizeNice:AJS.DragAndDropUtils.niceSize(b)}))}var e=Math.round(g*100/b);var c=a("#"+this._getProgressElementId(h));c.progressbar("option","value",e)},renderComplete:function(b){if(a.inArray(b,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+b)}a("#cancel-or-success-placeholder-"+b).html(AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},renderCancelled:function(c){if(a.inArray(c,this._workIdsOfFilesInProgress)==-1){throw new Error("No file status found with id: "+c)}var b=a("#"+this._getProgressElementId(c));if(b.progressbar("option","value")==0){b.progressbar("option","value",100)}b.progressbar("disable");a("#file-upload-progress-text-"+c).html("Cancelled.");a("#cancel-or-success-placeholder-"+c).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=false},hideCloseButton:function(){this._$closeButton.hide()},showCloseButton:function(){this._$closeButton.show()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="file-status-block-', soy.$$escapeHtml(opt_data.workId), '" data-filename="', soy.$$escapeHtml(opt_data.filename), '"><label>', soy.$$escapeHtml(opt_data.filename), '</label><div class="file-upload-progress-block"><div class="aui-progressbar" id="', soy.$$escapeHtml(opt_data.progressElementId), '"><div id="file-upload-progress-text-', soy.$$escapeHtml(opt_data.workId), '" class="file-upload-progress-text">', soy.$$escapeHtml("Waiting..."), '</div></div>', (opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml("Cancel Upload") + '">' + soy.$$escapeHtml("Cancel") + '</span></div>' : '', '</div></li>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="upload-statuses"></ul>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>');
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span id="file-', soy.$$escapeHtml(opt_data.fileId), '-uploaded">', soy.$$escapeHtml(opt_data.uploadedSizeNice), '</span> ', soy.$$escapeHtml("of"), ' ', soy.$$escapeHtml(opt_data.totalSizeNice));
  return opt_sb ? '' : output.toString();
};


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">', soy.$$escapeHtml("Drop files here to attach them"), '</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-view-content', location = 'js/view-content-client.js' */
AJS.toInit(function(a){AJS.DragAndDropUtils.init(function(b){var c=a("body")[0];if(!b&&!AJS.DragAndDropUtils.isIE9()){AJS.DragAndDropUtils.enableDropZoneOn(c)}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
AJS.toInit(function(e){d();AJS.bind("system-content-metadata.toggled-restrictions",function(g,h){AJS.setVisible("#content-metadata-page-restrictions",h.hasRestrictions);d()});AJS.bind("breadcrumbs.expanded",f);e("#page-metadata-banner").css("visibility","visible");b();e("#content-metadata-page-restrictions").click(function(g){g.preventDefault();AJS.trigger("system-content-metadata.open-restrictions-dialog")});function d(){if(e("#system-content-items").children(":not(.hidden)").length==0){e("#system-content-items").addClass("hidden")}else{e("#system-content-items").removeClass("hidden")}}function f(){e("#page-metadata-banner").hide()}function b(){var g=e("#system-content-items a:not(.tipsy-disabled), .page-metadata-item a:not(.tipsy-disabled), .page-metadata-modification-info a.last-modified:not(tipsy-disabled)");a(g);g.click(function(h){c(e(h.target).closest("a"))});e(window).on("click scroll resize",c)}function a(g){e(g).tooltip({live:true,gravity:e("#com-atlassian-confluence").hasClass("theme-documentation view-blog-post")?"nw":"n",title:"title",delayIn:500})}function c(g){e(".tipsy").remove();if(g){var h=e(g).data("tipsy");if(h){h.hoverState="out"}}}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="page-metadata-banner"><ul class="banner">');
  Confluence.Templates.PageBanner.renderSystemContentItems(opt_data, output);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    Confluence.Templates.PageBanner.renderPageBannerItem(itemData6, output);
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="system-content-items" class="noprint">');
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentData(itemData12, {isSystemContentItem: true}), output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="page-metadata-item noprint ', (opt_data.isAuiButton) ? 'has-button' : '', '" ', (opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '', '>');
  Confluence.Templates.PageBanner.itemAnchor(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.href), '" title="', soy.$$escapeHtml(opt_data.tooltip), '" ', (opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '', ' ', (opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '', '>');
  Confluence.Templates.PageBanner.itemIcon(opt_data, output);
  output.append((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
(function(f){function e(m){var h,n;if(m.offsetX===undefined){var l=0,k=0,j=m.target,i;do{if(j.scrollTop!=0||j.scrollLeft!=0){i=j}l+=j.offsetLeft;k+=j.offsetTop;j=j.offsetParent}while(j&&j!=j.offsetParent);h=m.pageX+(i?i.scrollLeft:0)-l;n=m.pageY+(i?i.scrollTop:0)-k}else{h=m.offsetX;n=m.offsetY}return h>=3&&h<=14&&n>=3&&n<=14}function d(h){return h.currentTarget===h.target}function c(i){var h="page";if(i.closest("table.tasks-report").length){h="report"}else{if(i.closest("#task-container").length){h="mytasks"}else{if(i.closest("ul.inline-task-list").length){h="task"}}}return h}function g(k,i){var h=k.attr("data-inline-task-id");var j=k.find(i).first();if(j.closest("li").attr("data-inline-task-id")===h){return j}else{return f()}}var a=false;f(window).bind("beforeunload",function(){a=true});var b=[];f(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(m){if(d(m)&&e(m)){var k=f(m.target).toggleClass("checked"),h=k.hasClass("checked")?"CHECKED":"UNCHECKED",j=k.data("inline-task-id"),n=k.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId,i=AJS.contextPath()+"/rest/inlinetasks/1/task/"+n+"/"+j+"/";k.prop("disabled",true);var l=k.closest("tr");l.attr("aria-disabled",true);b.push(j);AJS.trigger("inline-tasks.status-update.start",{status:h,taskId:j,taskListQueue:b});f.ajax({type:"POST",url:i,data:{status:h,trigger:"VIEW_PAGE"},dataType:"text",timeout:30000,error:function(p,r,o){if(a||r==="timeout"){return}AJS.logError("Inline Task #"+j+" was not persisted to "+h+" because of "+o+" (status: "+r+")");k.toggleClass("checked");var q;if(p.status===403){q=new Confluence.InlineTasks.Notice({textMessage:"Oops! You can\'t update this task because you are not allowed to edit the page it appears on.",className:"forbidden-notice"})}else{q=new Confluence.InlineTasks.Notice()}q.show()},success:function(){var o={dueDate:g(k,"time").attr("datetime"),completionDate:moment().format("YYYY-MM-DD"),mode:"view",assigneeUsername:g(k,".user-mention").attr("data-username"),context:c(k)};if(h==="CHECKED"){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.completed",o):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:o})}}}).always(function(){k.prop("disabled",false);var o=k.closest("tr");o.attr("aria-disabled",false);b.splice(AJS.indexOf(b,j),1);AJS.trigger("inline-tasks.status-update.complete",{status:h,taskId:j,taskListQueue:b})})}},mousemove:function(h){if(d(h)){if(e(h)){f(h.target).addClass("hover")}else{f(h.target).removeClass("hover")}}},mouseout:function(h){if(d(h)){f(h.target).removeClass("hover")}},mousedown:function(h){if(d(h)&&e(h)){f(h.target).addClass("task-active")}},mouseup:function(h){if(d(h)&&e(h)){f(h.target).removeClass("task-active")}}});f("ul.inline-task-list li:not(.checked) time.date-upcoming").tooltip({title:function(){return "This task is due in less than a week"},live:true});f("ul.inline-task-list li:not(.checked) time.date-past").tooltip({title:function(){return "This task is overdue"},live:true});f("span.emptycompletedate").tooltip({title:function(){return "A completion date wasn\'t recorded for this task"},live:true});f(document).on("click","time",function(){var i=f(this);var h={date:i.attr("datetime"),mode:"view",context:c(i)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.date.clicked",h):AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:h})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\'t be saved. \u003cbr\/>There could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message error', (opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '', '" id="inline-tasks-notice">', opt_data.textMessage, '&nbsp;&nbsp;<a href="#" class="notice-close">', soy.$$escapeHtml("Dismiss"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this),g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this,g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f)};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(d,e):AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this,f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\'t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
(function(e,c){var d=function(j,k,i){var h=j.find("a").attr("aria-disabled",i);if(i){h.attr("disabled","disabled")}else{h.removeAttr("disabled");var g=e(".aui-nav-selected",j).data("index")+1;j.find(".aui-nav-next > a").attr("aria-disabled",g==k);j.find(".aui-nav-previous > a").attr("aria-disabled",g==1)}};var b={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var f=function(i,j,k){var g=Math.floor(k/2);var h=j-1;if(!k||j<=k||i-g<0){return 0}if(i+g>h){return j-k}return i-g};var a=function(l){var k=l.totalPages,j=l.currentPage,m=l.pageLimit,h=l.adaptive,g;if(m){if(h){k=j+m}g=m}else{g=k}var i=f(j,k,m);return Confluence.UI.Components.Pagination.Templates.paginationFooter({currentPage:j||0,startPage:i,itemsToRender:g,totalPages:k,pageSize:l.pageSize,url:l.url||"#"})};c.build=function(j){var h=_.extend({},b,j);if(typeof h.success!=="function"){h.success=function(){}}var k=a(h);h.scope.after(k);var i=h.scope.next();var g=i.data("initial-page-index");i.on("click","a",function(p){var o=e(this),r=o.parents("ol").prev(),n=r.is("table")?r:r.find("table");var l=n.data("pageIndex")||g,q=o.parent("li");if(q.hasClass("aui-nav-selected")||q.find("> a[aria-disabled=true]").length){return}if(q.hasClass("aui-nav-next")){l++}else{if(q.hasClass("aui-nav-previous")){l--}else{l=q.data("index")}}d(i,h.totalPages,true);var m=e.extend({},{pageSize:h.pageSize,pageIndex:l},h.data);e.getJSON(Confluence.getContextPath()+h.path,m).done(function(t){l=t.currentPage;var s=n.find("tbody");s.find("tr").remove();n.data("pageIndex",l);_.each(t.detailLines,function(v){h.success(v,s)});AJS.trigger("ui.components.pagination.updated",[t,h]);var u=e.extend({},h,{totalPages:t.totalPages,adaptive:t.adaptive,currentPage:l});i.html(a(u));d(i,u.totalPages,false)}).fail(function(){d(i,h.totalPages,false)});p.preventDefault()})}})(AJS.$,window.Confluence.UI.Components.Pagination);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-initial-page-index="', soy.$$escapeHtml(opt_data.currentPage), '"><li class="aui-nav-previous"><a href="#"', (opt_data.currentPage == 0) ? 'aria-disabled="true"' : '', '>', soy.$$escapeHtml("Prev"), '</a></li>');
  var startIdx__soy14 = opt_data.startPage + 1;
  var currentIdx__soy15 = opt_data.currentPage + 1;
  var endIdx__soy16 = startIdx__soy14 + opt_data.itemsToRender;
  var totalRange__soy17 = opt_data.totalPages + 1;
  var indexInit18 = startIdx__soy14;
  var indexLimit18 = endIdx__soy16 < totalRange__soy17 ? endIdx__soy16 : totalRange__soy17;
  for (var index18 = indexInit18; index18 < indexLimit18; index18++) {
    output.append((index18 == currentIdx__soy15) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index18 - 1) + '">' + soy.$$escapeHtml(index18) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index18 - 1) + '"><a href="#">' + soy.$$escapeHtml(index18) + '</a></li>');
  }
  output.append('<li class="aui-nav-next"><a href="', soy.$$escapeHtml(opt_data.url), '"', (currentIdx__soy15 == opt_data.totalPages) ? 'aria-disabled="true"' : '', '>', soy.$$escapeHtml("Next"), '</a></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="blank-placeholder-box ', (opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '', '"><div class="content"><h2>', soy.$$escapeHtml(opt_data.blankTitle), '</h2><p>', soy.$$escapeHtml(opt_data.blankDescription), '</p></div>', (opt_data.customHtml) ? opt_data.customHtml : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js-vendor/jquery/jquery.tablesorter.js' */
/*
 * TableSorter 2.10.8 - Client-side table sorting with ease!
 * @requires jQuery v1.2.6+
 *
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @type jQuery
 * @name tablesorter
 * @cat Plugins/Tablesorter
 * @author Christian Bach/christian.bach@polyester.se
 * @contributor Rob Garrison/https://github.com/Mottie/tablesorter
 */
!(function(B){B.extend({tablesorter:new function(){var C=this;C.version="2.10.8";C.parsers=[];C.widgets=[];C.defaults={theme:"default",widthFixed:false,showProcessing:false,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:true,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:true,delayInit:false,serverSideSorting:false,headers:{},ignoreCase:true,sortForce:null,sortList:[],sortAppend:null,sortInitialOrder:"asc",sortLocaleCompare:false,sortReset:false,sortRestart:false,emptyTo:"bottom",stringTo:"max",textExtraction:"simple",textSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:true,initialized:null,tableClass:"tablesorter",cssAsc:"tablesorter-headerAsc",cssChildRow:"tablesorter-childRow",cssDesc:"tablesorter-headerDesc",cssHeader:"tablesorter-header",cssHeaderRow:"tablesorter-headerRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",cssProcessing:"tablesorter-processing",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:false,headerList:[],empties:{},strings:{},parsers:[]};function O(Y){if(typeof console!=="undefined"&&typeof console.log!=="undefined"){console.log(Y)}else{alert(Y)}}function I(Y,Z){O(Y+" ("+(new Date().getTime()-Z.getTime())+"ms)")}C.log=O;C.benchmark=I;function F(b,a,Y){if(!a){return""}var e=b.config,Z=e.textExtraction,d="";if(Z==="simple"){if(e.supportsTextContent){d=a.textContent}else{d=B(a).text()}}else{if(typeof Z==="function"){d=Z(a,b,Y)}else{if(typeof Z==="object"&&Z.hasOwnProperty(Y)){d=Z[Y](a,b,Y)}else{d=e.supportsTextContent?a.textContent:B(a).text()}}}return B.trim(d)}function J(e,g,c,b){var d,Z=C.parsers.length,Y=false,a="",f=true;while(a===""&&f){c++;if(g[c]){Y=g[c].cells[b];a=F(e,Y,b);if(e.config.debug){O("Checking if value was empty on row "+c+", column: "+b+': "'+a+'"')}}else{f=false}}while(--Z>=0){d=C.parsers[Z];if(d&&d.id!=="text"&&d.is&&d.is(a,e,Y)){return d}}return C.getParserById("text")}function K(k){var j=k.config,d=j.$tbodies=j.$table.children("tbody:not(."+j.cssInfoBlock+")"),m,g,b,e,f,Y,a,Z="";if(d.length===0){return j.debug?O("*Empty table!* Not building a parser cache"):""}m=d[0].rows;if(m[0]){g=[];b=m[0].cells.length;for(e=0;e<b;e++){f=j.$headers.filter(":not([colspan])");f=f.add(j.$headers.filter('[colspan="1"]')).filter('[data-column="'+e+'"]:last');Y=j.headers[e];a=C.getParserById(C.getData(f,Y,"sorter"));j.empties[e]=C.getData(f,Y,"empty")||j.emptyTo||(j.emptyToBottom?"bottom":"top");j.strings[e]=C.getData(f,Y,"string")||j.stringTo||"max";if(!a){a=J(k,m,-1,e)}if(j.debug){Z+="column:"+e+"; parser:"+a.id+"; string:"+j.strings[e]+"; empty: "+j.empties[e]+"\n"}g.push(a)}}if(j.debug){O(Z)}j.parsers=g}function X(q){var l=q.tBodies,d=q.config,n,Y,o=d.parsers,r,p,f,e,a,g,h,m,Z=[];d.cache={};if(!o){return d.debug?O("*Empty table!* Not building a cache"):""}if(d.debug){m=new Date()}if(d.showProcessing){C.isProcessing(q,true)}for(a=0;a<l.length;a++){d.cache[a]={row:[],normalized:[]};if(!B(l[a]).hasClass(d.cssInfoBlock)){n=(l[a]&&l[a].rows.length)||0;Y=(l[a].rows[0]&&l[a].rows[0].cells.length)||0;for(f=0;f<n;++f){g=B(l[a].rows[f]);h=[];if(g.hasClass(d.cssChildRow)){d.cache[a].row[d.cache[a].row.length-1]=d.cache[a].row[d.cache[a].row.length-1].add(g);continue}d.cache[a].row.push(g);for(e=0;e<Y;++e){r=F(q,g[0].cells[e],e);p=o[e].format(r,q,g[0].cells[e],e);h.push(p);if((o[e].type||"").toLowerCase()==="numeric"){Z[e]=Math.max(Math.abs(p)||0,Z[e]||0)}}h.push(d.cache[a].normalized.length);d.cache[a].normalized.push(h)}d.cache[a].colMax=Z}}if(d.showProcessing){C.isProcessing(q)}if(d.debug){I("Building cache for "+n+" rows",m)}}function V(u,s){var v=u.config,w=u.tBodies,d=[],g=v.cache,f,h,a,e,x,Z,t,q,p,o,Y,m;if(!g[0]){return }if(v.debug){m=new Date()}for(p=0;p<w.length;p++){x=B(w[p]);if(x.length&&!x.hasClass(v.cssInfoBlock)){Z=C.processTbody(u,x,true);f=g[p].row;h=g[p].normalized;a=h.length;e=a?(h[0].length-1):0;for(t=0;t<a;t++){Y=h[t][e];d.push(f[Y]);if(!v.appender||!v.removeRows){o=f[Y].length;for(q=0;q<o;q++){Z.append(f[Y][q])}}}C.processTbody(u,Z,false)}}if(v.appender){v.appender(u,d)}if(v.debug){I("Rebuilt table",m)}if(!s){C.applyWidget(u)}B(u).trigger("sortEnd",u)}function Q(u){var r=[],a={},q=0,h=B(u).find("thead:eq(0), tfoot").children("tr"),f,e,d,b,o,s,p,Y,n,g,m,Z;for(f=0;f<h.length;f++){s=h[f].cells;for(e=0;e<s.length;e++){o=s[e];p=o.parentNode.rowIndex;Y=p+"-"+o.cellIndex;n=o.rowSpan||1;g=o.colSpan||1;if(typeof (r[p])==="undefined"){r[p]=[]}for(d=0;d<r[p].length+1;d++){if(typeof (r[p][d])==="undefined"){m=d;break}}a[Y]=m;q=Math.max(m,q);B(o).attr({"data-column":m});for(d=p;d<p+n;d++){if(typeof (r[d])==="undefined"){r[d]=[]}Z=r[d];for(b=m;b<m+g;b++){Z[b]="x"}}}}u.config.columns=q;return a}function H(Y){return(/^d/i.test(Y)||Y===1)}function S(j){var a=Q(j),Y,b,e,d,k,g,Z,f=j.config;f.headerList=[];f.headerContent=[];if(f.debug){Z=new Date()}d=f.cssIcon?'<i class="'+f.cssIcon+'"></i>':"";f.$headers=B(j).find(f.selectorHeaders).each(function(c){b=B(this);Y=f.headers[c];f.headerContent[c]=this.innerHTML;k=f.headerTemplate.replace(/\{content\}/g,this.innerHTML).replace(/\{icon\}/g,d);if(f.onRenderTemplate){e=f.onRenderTemplate.apply(b,[c,k]);if(e&&typeof e==="string"){k=e}}this.innerHTML='<div class="tablesorter-header-inner">'+k+"</div>";if(f.onRenderHeader){f.onRenderHeader.apply(b,[c])}this.column=a[this.parentNode.rowIndex+"-"+this.cellIndex];this.order=H(C.getData(b,Y,"sortInitialOrder")||f.sortInitialOrder)?[1,0,2]:[0,1,2];this.count=-1;this.lockedOrder=false;g=C.getData(b,Y,"lockedOrder")||false;if(typeof g!=="undefined"&&g!==false){this.order=this.lockedOrder=H(g)?[1,1,1]:[0,0,0]}b.addClass(f.cssHeader);f.headerList[c]=this;b.parent().addClass(f.cssHeaderRow);b.attr("tabindex",0)});L(j);if(f.debug){I("Built headers:",Z);O(f.$headers)}}function P(Z,Y,b){var a=Z.config;a.$table.find(a.selectorRemove).remove();K(Z);X(Z);W(a.$table,Y,b)}function L(Z){var Y,a=Z.config;a.$headers.each(function(b,c){Y=C.getData(c,a.headers[b],"sorter")==="false";c.sortDisabled=Y;B(c)[Y?"addClass":"removeClass"]("sorter-false")})}function D(k){var e,b,Z,Y,h=k.config,g=h.sortList,d=[h.cssAsc,h.cssDesc],a=B(k).find("tfoot tr").children().removeClass(d.join(" "));h.$headers.removeClass(d.join(" "));Y=g.length;for(b=0;b<Y;b++){if(g[b][1]!==2){e=h.$headers.not(".sorter-false").filter('[data-column="'+g[b][0]+'"]'+(Y===1?":last":""));if(e.length){for(Z=0;Z<e.length;Z++){if(!e[Z].sortDisabled){e.eq(Z).addClass(d[g[b][1]]);if(a.length){a.filter('[data-column="'+g[b][0]+'"]').eq(Z).addClass(d[g[b][1]])}}}}}}}function N(a){if(a.config.widthFixed&&B(a).find("colgroup").length===0){var Y=B("<colgroup>"),Z=B(a).width();B(a.tBodies[0]).find("tr:first").children("td").each(function(){Y.append(B("<col>").css("width",parseInt((B(this).width()/Z)*1000,10)/10+"%"))});B(a).prepend(Y)}}function T(b,d){var a,Z,e,f=b.config,Y=d||f.sortList;f.sortList=[];B.each(Y,function(g,c){a=[parseInt(c[0],10),parseInt(c[1],10)];e=f.headerList[a[0]];if(e){f.sortList.push(a);Z=B.inArray(a[1],e.order);e.count=Z>=0?Z:a[1]%(f.sortReset?3:2)}})}function M(Z,Y){return(Z&&Z[Y])?Z[Y].type||"":""}function U(n,m,f){var l,d,b,Y,p,h=n.config,Z=!f[h.sortMultiSortKey],g=B(n);g.trigger("sortStart",n);m.count=f[h.sortResetKey]?2:(m.count+1)%(h.sortReset?3:2);if(h.sortRestart){d=m;h.$headers.each(function(){if(this!==d&&(Z||!B(this).is("."+h.cssDesc+",."+h.cssAsc))){this.count=-1}})}d=m.column;if(Z){h.sortList=[];if(h.sortForce!==null){l=h.sortForce;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}else{if(h.sortAppend&&h.sortList.length>1){if(C.isValueInArray(h.sortAppend[0][0],h.sortList)){h.sortList.pop()}}if(C.isValueInArray(d,h.sortList)){for(b=0;b<h.sortList.length;b++){p=h.sortList[b];Y=h.headerList[p[0]];if(p[0]===d){p[1]=Y.order[Y.count];if(p[1]===2){h.sortList.splice(b,1);Y.count=-1}}}}else{Y=m.order[m.count];if(Y<2){h.sortList.push([d,Y]);if(m.colSpan>1){for(b=1;b<m.colSpan;b++){h.sortList.push([d+b,Y])}}}}}if(h.sortAppend!==null){l=h.sortAppend;for(b=0;b<l.length;b++){if(l[b][0]!==d){h.sortList.push(l[b])}}}g.trigger("sortBegin",n);setTimeout(function(){D(n);R(n);V(n)},1)}function R(p){var d=0,h=p.config,j=h.sortList,e=j.length,a=p.tBodies.length,r,n,g,o,f,Y,Z,q,b,m;if(h.serverSideSorting||!h.cache[0]){return }if(h.debug){r=new Date()}for(g=0;g<a;g++){f=h.cache[g].colMax;Y=h.cache[g].normalized;Z=Y.length;m=(Y&&Y[0])?Y[0].length-1:0;Y.sort(function(i,c){for(n=0;n<e;n++){o=j[n][0];b=j[n][1];q=/n/i.test(M(h.parsers,o))?"Numeric":"Text";q+=b===0?"":"Desc";if(/Numeric/.test(q)&&h.strings[o]){if(typeof (h.string[h.strings[o]])==="boolean"){d=(b===0?1:-1)*(h.string[h.strings[o]]?-1:1)}else{d=(h.strings[o])?h.string[h.strings[o]]||0:0}}var k=B.tablesorter["sort"+q](p,i[o],c[o],o,f[o],d);if(k){return k}}return i[m]-c[m]})}if(h.debug){I("Sorting on "+j.toString()+" and dir "+b+" time",r)}}function G(Y,Z){Y.trigger("updateComplete");if(typeof Z==="function"){Z(Y[0])}}function W(Z,Y,a){if(Y!==false&&!Z[0].isProcessing){Z.trigger("sorton",[Z[0].config.sortList,function(){G(Z,a)}])}else{G(Z,a)}}function E(Z){var d=Z.config,a=d.$table,Y,b;d.$headers.find(d.selectorSort).add(d.$headers.filter(d.selectorSort)).unbind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter").bind("mousedown.tablesorter mouseup.tablesorter sort.tablesorter keypress.tablesorter",function(g,h){if(((g.which||g.button)!==1&&!/sort|keypress/.test(g.type))||(g.type==="keypress"&&g.which!==13)){return false}if(g.type==="mouseup"&&h!==true&&(new Date().getTime()-b>250)){return false}if(g.type==="mousedown"){b=new Date().getTime();return g.target.tagName==="INPUT"?"":!d.cancelSelection}if(d.delayInit&&!d.cache){X(Z)}var f=/TH|TD/.test(this.tagName)?B(this):B(this).parents("th, td").filter(":first"),c=f[0];if(!c.sortDisabled){U(Z,c,g)}});if(d.cancelSelection){d.$headers.attr("unselectable","on").bind("selectstart",false).css({"user-select":"none",MozUserSelect:"none"})}a.unbind("sortReset update updateRows updateCell updateAll addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(".tablesorter ")).bind("sortReset.tablesorter",function(c){c.stopPropagation();d.sortList=[];D(Z);R(Z);V(Z)}).bind("updateAll.tablesorter",function(f,c,g){f.stopPropagation();C.refreshWidgets(Z,true,true);C.restoreHeaders(Z);S(Z);E(Z);P(Z,c,g)}).bind("update.tablesorter updateRows.tablesorter",function(f,c,g){f.stopPropagation();L(Z);P(Z,c,g)}).bind("updateCell.tablesorter",function(h,k,i,m){h.stopPropagation();a.find(d.selectorRemove).remove();var f,o,j,c=a.find("tbody"),n=c.index(B(k).parents("tbody").filter(":first")),g=B(k).parents("tr").filter(":first");k=B(k)[0];if(c.length&&n>=0){o=c.eq(n).find("tr").index(g);j=k.cellIndex;f=d.cache[n].normalized[o].length-1;d.cache[n].row[Z.config.cache[n].normalized[o][f]]=g;d.cache[n].normalized[o][j]=d.parsers[j].format(F(Z,k,j),Z,k,j);W(a,i,m)}}).bind("addRows.tablesorter",function(g,j,h,k){g.stopPropagation();var f,o=j.filter("tr").length,m=[],c=j[0].cells.length,n=a.find("tbody").index(j.parents("tbody").filter(":first"));if(!d.parsers){K(Z)}for(f=0;f<o;f++){for(Y=0;Y<c;Y++){m[Y]=d.parsers[Y].format(F(Z,j[f].cells[Y],Y),Z,j[f].cells[Y],Y)}m.push(d.cache[n].row.length);d.cache[n].row.push([j[f]]);d.cache[n].normalized.push(m);m=[]}W(a,h,k)}).bind("sorton.tablesorter",function(f,c,h,g){f.stopPropagation();a.trigger("sortStart",this);T(Z,c);D(Z);a.trigger("sortBegin",this);R(Z);V(Z,g);if(typeof h==="function"){h(Z)}}).bind("appendCache.tablesorter",function(c,g,f){c.stopPropagation();V(Z,f);if(typeof g==="function"){g(Z)}}).bind("applyWidgetId.tablesorter",function(c,f){c.stopPropagation();C.getWidgetById(f).format(Z,d,d.widgetOptions)}).bind("applyWidgets.tablesorter",function(c,f){c.stopPropagation();C.applyWidget(Z,f)}).bind("refreshWidgets.tablesorter",function(g,f,c){g.stopPropagation();C.refreshWidgets(Z,f,c)}).bind("destroy.tablesorter",function(g,h,f){g.stopPropagation();C.destroy(Z,h,f)})}C.construct=function(Y){return this.each(function(){if(!this.tHead||this.tBodies.length===0||this.hasInitialized===true){return(this.config&&this.config.debug)?O("stopping initialization! No thead, tbody or tablesorter has already been initialized"):""}var d=B(this),b=this,e,a="",Z=B.metadata;b.hasInitialized=false;b.isProcessing=true;b.config={};e=B.extend(true,b.config,C.defaults,Y);B.data(b,"tablesorter",e);if(e.debug){B.data(b,"startoveralltimer",new Date())}e.supportsTextContent=B("<span>x</span>")[0].textContent==="x";e.supportsDataObject=parseFloat(B.fn.jquery)>=1.4;e.string={max:1,min:-1,"max+":1,"max-":-1,zero:0,none:0,"null":0,top:true,bottom:false};if(!/tablesorter\-/.test(d.attr("class"))){a=(e.theme!==""?" tablesorter-"+e.theme:"")}e.$table=d.addClass(e.tableClass+a);e.$tbodies=d.children("tbody:not(."+e.cssInfoBlock+")");S(b);N(b);K(b);if(!e.delayInit){X(b)}E(b);if(e.supportsDataObject&&typeof d.data().sortlist!=="undefined"){e.sortList=d.data().sortlist}else{if(Z&&(d.metadata()&&d.metadata().sortlist)){e.sortList=d.metadata().sortlist}}C.applyWidget(b,true);if(e.sortList.length>0){d.trigger("sorton",[e.sortList,{},!e.initWidgets])}else{if(e.initWidgets){C.applyWidget(b)}}if(e.showProcessing){d.unbind("sortBegin.tablesorter sortEnd.tablesorter").bind("sortBegin.tablesorter sortEnd.tablesorter",function(c){C.isProcessing(b,c.type==="sortBegin")})}b.hasInitialized=true;b.isProcessing=false;if(e.debug){C.benchmark("Overall initialization time",B.data(b,"startoveralltimer"))}d.trigger("tablesorter-initialized",b);if(typeof e.initialized==="function"){e.initialized(b)}})};C.isProcessing=function(b,Z,a){b=B(b);var d=b[0].config,Y=a||b.find("."+d.cssHeader);if(Z){if(d.sortList.length>0){Y=Y.filter(function(){return this.sortDisabled?false:C.isValueInArray(parseFloat(B(this).attr("data-column")),d.sortList)})}Y.addClass(d.cssProcessing)}else{Y.removeClass(d.cssProcessing)}};C.processTbody=function(a,Y,Z){var b;if(Z){a.isProcessing=true;Y.before('<span class="tablesorter-savemyplace"/>');b=(B.fn.detach)?Y.detach():Y.remove();return b}b=B(a).find("span.tablesorter-savemyplace");Y.insertAfter(b);b.remove();a.isProcessing=false};C.clearTableBody=function(Y){B(Y)[0].config.$tbodies.empty()};C.restoreHeaders=function(Y){var Z=Y.config;Z.$table.find(Z.selectorHeaders).each(function(a){if(B(this).find(".tablesorter-header-inner").length){B(this).html(Z.headerContent[a])}})};C.destroy=function(d,Z,g){d=B(d)[0];if(!d.hasInitialized){return }C.refreshWidgets(d,true,true);var f=B(d),e=d.config,Y=f.find("thead:first"),a=Y.find("tr."+e.cssHeaderRow).removeClass(e.cssHeaderRow),b=f.find("tfoot:first > tr").children("th, td");Y.find("tr").not(a).remove();f.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows sorton appendCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd ".split(" ").join(".tablesorter "));e.$headers.add(b).removeClass(e.cssHeader+" "+e.cssAsc+" "+e.cssDesc).removeAttr("data-column");a.find(e.selectorSort).unbind("mousedown.tablesorter mouseup.tablesorter keypress.tablesorter");C.restoreHeaders(d);if(Z!==false){f.removeClass(e.tableClass+" tablesorter-"+e.theme)}d.hasInitialized=false;if(typeof g==="function"){g(d)}};C.regex=[/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,/^0x[0-9a-f]+$/i];C.sortText=function(s,m,l,d){if(m===l){return 0}var k=s.config,j=k.string[(k.empties[d]||k.emptyTo)],Y=C.regex,p,f,h,q,Z,o,g,n;if(m===""&&j!==0){return typeof j==="boolean"?(j?-1:1):-j||-1}if(l===""&&j!==0){return typeof j==="boolean"?(j?1:-1):j||1}if(typeof k.textSorter==="function"){return k.textSorter(m,l,s,d)}p=m.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");h=l.replace(Y[0],"\\0$1\\0").replace(/\\0$/,"").replace(/^\\0/,"").split("\\0");f=parseInt(m.match(Y[2]),16)||(p.length!==1&&m.match(Y[1])&&Date.parse(m));q=parseInt(l.match(Y[2]),16)||(f&&l.match(Y[1])&&Date.parse(l))||null;if(q){if(f<q){return -1}if(f>q){return 1}}n=Math.max(p.length,h.length);for(g=0;g<n;g++){Z=isNaN(p[g])?p[g]||0:parseFloat(p[g])||0;o=isNaN(h[g])?h[g]||0:parseFloat(h[g])||0;if(isNaN(Z)!==isNaN(o)){return(isNaN(Z))?1:-1}if(typeof Z!==typeof o){Z+="";o+=""}if(Z<o){return -1}if(Z>o){return 1}}return 0};C.sortTextDesc=function(f,Z,Y,d){if(Z===Y){return 0}var h=f.config,g=h.string[(h.empties[d]||h.emptyTo)];if(Z===""&&g!==0){return typeof g==="boolean"?(g?-1:1):g||1}if(Y===""&&g!==0){return typeof g==="boolean"?(g?1:-1):-g||-1}if(typeof h.textSorter==="function"){return h.textSorter(Y,Z,f,d)}return C.sortText(f,Y,Z)};C.getTextValue=function(Z,e,c){if(e){var b,Y=Z?Z.length:0,f=e+c;for(b=0;b<Y;b++){f+=Z.charCodeAt(b)}return c*f}return 0};C.sortNumeric=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):-h||-1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):h||1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Z-Y};C.sortNumericDesc=function(g,Z,Y,f,j,i){if(Z===Y){return 0}var k=g.config,h=k.string[(k.empties[f]||k.emptyTo)];if(Z===""&&h!==0){return typeof h==="boolean"?(h?-1:1):h||1}if(Y===""&&h!==0){return typeof h==="boolean"?(h?1:-1):-h||-1}if(isNaN(Z)){Z=C.getTextValue(Z,j,i)}if(isNaN(Y)){Y=C.getTextValue(Y,j,i)}return Y-Z};C.characterEquivalents={a:"\u00e1\u00e0\u00e2\u00e3\u00e4\u0105\u00e5",A:"\u00c1\u00c0\u00c2\u00c3\u00c4\u0104\u00c5",c:"\u00e7\u0107\u010d",C:"\u00c7\u0106\u010c",e:"\u00e9\u00e8\u00ea\u00eb\u011b\u0119",E:"\u00c9\u00c8\u00ca\u00cb\u011a\u0118",i:"\u00ed\u00ec\u0130\u00ee\u00ef\u0131",I:"\u00cd\u00cc\u0130\u00ce\u00cf",o:"\u00f3\u00f2\u00f4\u00f5\u00f6",O:"\u00d3\u00d2\u00d4\u00d5\u00d6",ss:"\u00df",SS:"\u1e9e",u:"\u00fa\u00f9\u00fb\u00fc\u016f",U:"\u00da\u00d9\u00db\u00dc\u016e"};C.replaceAccents=function(b){var Z,c="[",Y=C.characterEquivalents;if(!C.characterRegex){C.characterRegexArray={};for(Z in Y){if(typeof Z==="string"){c+=Y[Z];C.characterRegexArray[Z]=new RegExp("["+Y[Z]+"]","g")}}C.characterRegex=new RegExp(c+"]")}if(C.characterRegex.test(b)){for(Z in Y){if(typeof Z==="string"){b=b.replace(C.characterRegexArray[Z],Z)}}}return b};C.isValueInArray=function(b,Z){var c,Y=Z.length;for(c=0;c<Y;c++){if(Z[c][0]===b){return true}}return false};C.addParser=function(c){var b,Z=C.parsers.length,Y=true;for(b=0;b<Z;b++){if(C.parsers[b].id.toLowerCase()===c.id.toLowerCase()){Y=false}}if(Y){C.parsers.push(c)}};C.getParserById=function(Z){var a,Y=C.parsers.length;for(a=0;a<Y;a++){if(C.parsers[a].id.toLowerCase()===(Z.toString()).toLowerCase()){return C.parsers[a]}}return false};C.addWidget=function(Y){C.widgets.push(Y)};C.getWidgetById=function(a){var b,Z,Y=C.widgets.length;for(b=0;b<Y;b++){Z=C.widgets[b];if(Z&&Z.hasOwnProperty("id")&&Z.id.toLowerCase()===a.toLowerCase()){return Z}}};C.applyWidget=function(h,g){h=B(h)[0];var b=h.config,d=b.widgetOptions,e=[],Z,a,f,Y;if(b.debug){Z=new Date()}if(b.widgets.length){b.widgets=B.grep(b.widgets,function(i,c){return B.inArray(i,b.widgets)===c});B.each(b.widgets||[],function(c,j){Y=C.getWidgetById(j);if(Y&&Y.id){if(!Y.priority){Y.priority=10}e[c]=Y}});e.sort(function(i,c){return i.priority<c.priority?-1:i.priority===c.priority?0:1});B.each(e,function(j,c){if(c){if(g){if(c.hasOwnProperty("options")){d=h.config.widgetOptions=B.extend(true,{},c.options,d)}if(c.hasOwnProperty("init")){c.init(h,c,b,d)}}else{if(!g&&c.hasOwnProperty("format")){c.format(h,b,d,false)}}}})}if(b.debug){f=b.widgets.length;I("Completed "+(g===true?"initializing ":"applying ")+f+" widget"+(f!==1?"s":""),Z)}};C.refreshWidgets=function(f,e,Y){f=B(f)[0];var d,g=f.config,b=g.widgets,a=C.widgets,Z=a.length;for(d=0;d<Z;d++){if(a[d]&&a[d].id&&(e||B.inArray(a[d].id,b)<0)){if(g.debug){O("Refeshing widgets: Removing "+a[d].id)}if(a[d].hasOwnProperty("remove")){a[d].remove(f,g,g.widgetOptions)}}}if(Y!==true){C.applyWidget(f,e)}};C.getData=function(d,c,b){var e="",Z=B(d),Y,a;if(!Z.length){return""}Y=B.metadata?Z.metadata():false;a=" "+(Z.attr("class")||"");if(typeof Z.data(b)!=="undefined"||typeof Z.data(b.toLowerCase())!=="undefined"){e+=Z.data(b)||Z.data(b.toLowerCase())}else{if(Y&&typeof Y[b]!=="undefined"){e+=Y[b]}else{if(c&&typeof c[b]!=="undefined"){e+=c[b]}else{if(a!==" "&&a.match(" "+b+"-")){e=a.match(new RegExp("\\s"+b+"-([\\w-]+)"))[1]||""}}}}return B.trim(e)};C.formatFloat=function(a,b){if(typeof a!=="string"||a===""){return a}var Z,Y=b&&b.config?b.config.usNumberFormat!==false:typeof b!=="undefined"?b:true;if(Y){a=a.replace(/,/g,"")}else{a=a.replace(/[\s|\.]/g,"").replace(/,/g,".")}if(/^\s*\([.\d]+\)/.test(a)){a=a.replace(/^\s*\(/,"-").replace(/\)/,"")}Z=parseFloat(a);return isNaN(Z)?B.trim(a):Z};C.isDigit=function(Y){return isNaN(Y)?(/^[\-+(]?\d+[)]?$/).test(Y.toString().replace(/[,.'"\s]/g,"")):true}}()});var A=B.tablesorter;B.fn.extend({tablesorter:A.construct});A.addParser({id:"text",is:function(){return true},format:function(C,D){var E=D.config;if(C){C=B.trim(E.ignoreCase?C.toLocaleLowerCase():C);C=E.sortLocaleCompare?A.replaceAccents(C):C}return C},type:"text"});A.addParser({id:"digit",is:function(C){return A.isDigit(C)},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"currency",is:function(C){return(/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/).test((C||"").replace(/[,. ]/g,""))},format:function(C,D){var E=A.formatFloat((C||"").replace(/[^\w,. \-()]/g,""),D);return C&&typeof E==="number"?E:C?B.trim(C&&D.config.ignoreCase?C.toLocaleLowerCase():C):C},type:"numeric"});A.addParser({id:"ipAddress",is:function(C){return(/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/).test(C)},format:function(F,H){var E,D=F?F.split("."):"",G="",C=D.length;for(E=0;E<C;E++){G+=("00"+D[E]).slice(-3)}return F?A.formatFloat(G,H):F},type:"numeric"});A.addParser({id:"url",is:function(C){return(/^(https?|ftp|file):\/\//).test(C)},format:function(C){return C?B.trim(C.replace(/(https?|ftp|file):\/\//,"")):C},type:"text"});A.addParser({id:"isoDate",is:function(C){return(/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/).test(C)},format:function(C,D){return C?A.formatFloat((C!=="")?(new Date(C.replace(/-/g,"/")).getTime()||""):"",D):C},type:"numeric"});A.addParser({id:"percent",is:function(C){return(/(\d\s*?%|%\s*?\d)/).test(C)&&C.length<15},format:function(C,D){return C?A.formatFloat(C.replace(/%/g,""),D):C},type:"numeric"});A.addParser({id:"usLongDate",is:function(C){return(/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i).test(C)||(/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date(C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"shortDate",is:function(C){return(/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/).test((C||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(F,G,C,D){if(F){var I=G.config,E=I.headerList[D],H=E.dateFormat||A.getData(E,I.headers[D],"dateFormat")||I.dateFormat;F=F.replace(/\s+/g," ").replace(/[\-.,]/g,"/");if(H==="mmddyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2")}else{if(H==="ddmmyyyy"){F=F.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1")}else{if(H==="yyyymmdd"){F=F.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3")}}}}return F?A.formatFloat((new Date(F).getTime()||""),G):F},type:"numeric"});A.addParser({id:"time",is:function(C){return(/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i).test(C)},format:function(C,D){return C?A.formatFloat((new Date("2000/01/01 "+C.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||""),D):C},type:"numeric"});A.addParser({id:"metadata",is:function(){return false},format:function(D,E,C){var G=E.config,F=(!G.parserMetadataName)?"sortValue":G.parserMetadataName;return B(C).metadata()[F]},type:"numeric"});A.addWidget({id:"zebra",priority:90,format:function(N,K,M){var D,H,J,O,I,E,G,F,C=new RegExp(K.cssChildRow,"i"),L=K.$tbodies;if(K.debug){E=new Date()}for(G=0;G<L.length;G++){D=L.eq(G);F=D.children("tr").length;if(F>1){O=0;H=D.children("tr:visible");H.each(function(){J=B(this);if(!C.test(this.className)){O++}I=(O%2===0);J.removeClass(M.zebra[I?1:0]).addClass(M.zebra[I?0:1])})}}if(K.debug){A.benchmark("Applying Zebra widget",E)}},remove:function(H,I,F){var E,D,C=I.$tbodies,G=(F.zebra||["even","odd"]).join(" ");for(E=0;E<C.length;E++){D=B.tablesorter.processTbody(H,C.eq(E),true);D.children().removeClass(G);B.tablesorter.processTbody(H,D,false)}}})})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-experimental-table-sortable', location = 'js/aui-experimental-tables-sortable.js' */
(function(){var B={sortMultiSortKey:"",headers:{},debug:false};function A(D){var C=B;D.find("th").each(function(F,G){var E=AJS.$(G);C.headers[F]={};if(E.hasClass("aui-table-column-unsortable")){C.headers[F].sorter=false}else{E.attr("tabindex","0");E.wrapInner("<span class='aui-table-header-content'/>");if(E.hasClass("aui-table-column-issue-key")){C.headers[F].sorter="issue-key"}}});D.tablesorter(C)}AJS.tablessortable={setup:function(){AJS.$.tablesorter.addParser({id:"issue-key",is:function(){return false},format:function(G){var C=G.split("-");var D=C[0];var F=C[1];var I="..........";var H="000000";var E=(D+I).slice(0,I.length);E+=(H+F).slice(-H.length);return E},type:"text"});AJS.$(".aui-table-sortable").each(function(){A(AJS.$(this))})},setTableSortable:function(C){A(C)}};AJS.$(AJS.tablessortable.setup)})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="', soy.$$escapeHtml(opt_data.reportParameters), '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="', soy.$$escapeHtml(opt_data.totalPages), '" data-page-size="', soy.$$escapeHtml(opt_data.pageSize), '" data-adaptive="', soy.$$escapeHtml(opt_data.adaptive), '" data-page-limit="', soy.$$escapeHtml(opt_data.pageLimit), '"><thead><tr class="tablesorter-headerRow">');
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output.append('<th class="header-', soy.$$escapeHtml(headingData14), (headingData14 == 'description') ? ' aui-table-column-unsortable' : '', '" data-column-name="', soy.$$escapeHtml(headingData14), '">', soy.$$escapeHtml(opt_data.headingTexts[headingData14]), '</th>');
  }
  output.append('</tr></thead><tbody>');
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings}, output);
    }
  } else {
    output.append('<tr><td colspan="', soy.$$escapeHtml(opt_data.headings.length), '">', soy.$$escapeHtml("Create a task list in a Confluence page to keep track of things you need to do."), '</td></tr>');
  }
  output.append('</tbody></table></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml("Hey! Did you know..."), '</h2><p>', soy.$$escapeHtml("You can view the tasks you created, or assigned to you, in the tasks tabs of your profile."), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr data-task-id="', soy.$$escapeHtml(opt_data.task.taskId), '" aria-disabled="false">');
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '', '</td>');
    } else if (columnData51 == 'description') {
      output.append('<td>', opt_data.task.taskHtml, '</td>');
    } else if (columnData51 == 'assignee') {
      output.append('<td class=\'tasks-report-assignee\'>');
      if (opt_data.task.assigneeUserName) {
        Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}, output);
      }
      output.append('</td>');
    } else if (columnData51 == 'location') {
      output.append('<td><a href="', soy.$$escapeHtml(opt_data.task.pageUrl), '">', soy.$$escapeHtml(opt_data.task.pageTitle), '</a></td>');
    } else if (columnData51 == 'completedate') {
      output.append('<td class=\'tasks-report-date\'>', (opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '', '</td>');
    } else if (columnData51 == 'labels') {
      output.append('<td>');
      var labelList89 = opt_data.task.labels;
      var labelListLen89 = labelList89.length;
      for (var labelIndex89 = 0; labelIndex89 < labelListLen89; labelIndex89++) {
        var labelData89 = labelList89[labelIndex89];
        aui.labels.label({text: labelData89}, output);
      }
      output.append('</td>');
    }
  }
  output.append('</tr>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param97 = new soy.StringBuilder('<p>', soy.$$escapeHtml("Unable to show this task report."), '</p>');
  var messageList101 = opt_data.messages;
  var messageListLen101 = messageList101.length;
  for (var messageIndex101 = 0; messageIndex101 < messageListLen101; messageIndex101++) {
    var messageData101 = messageList101[messageIndex101];
    param97.append('<p>', soy.$$escapeHtml(messageData101), '</p>');
  }
  aui.message.warning({content: param97.toString()}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.message.warning({content: '<p>' + soy.$$escapeHtml("Unable to show the task report. Edit this page to resolve the issues.") + '</p>'}, output);
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '', '<div class="helptip-body">', opt_data.bodyHtml, '</div>', (opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml("Learn more") + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<button class="helptip-dismiss aui-button" type="button">', soy.$$escapeHtml("Dismiss"), '</button>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(b){function a(){if(!!AJS.HelpTip){var c={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:b("#user-menu-link")};var d=new AJS.HelpTip(c);AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.feature.discovery.shown"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});d.show()}}b(document).ready(function(){if(b("meta[name=show-task-feature-discovery-flag]").length>0){a()}})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
Confluence.Likes=Confluence.Likes||{};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
(function(g){var c=0,b=1,d,e={};function f(h){return Confluence.getContextPath()+"/rest/likes/1.0/content/"+h+"/likes"}var a=AJS.PageGadget||(window.parent.AJS&&window.parent.AJS.PageGadget);!a&&AJS.toInit(function(){AJS.I18n.get("com.atlassian.confluence.plugins.confluence-like",function(){var k=AJS.Meta.get("remote-user")||"",j=k.length===0;function h(p,q,o){var n=Confluence.Likes.LikeSummaryFactory.getLikeSummary(p.likes,q,k);if(!n.key){if(k.length>0&&(p.content_type=="page"||p.content_type=="blogpost")){n.key="likes.bethefirst"}}var m=AJS.I18n.getText(n.key,n.args);if(m&&m.length>0){o.html(m)}else{o.empty()}if(!m){return}o.find(".likes").click(function(){var s=g(this).attr("data-content-id");if(d){d.remove();d=undefined}d=new AJS.Dialog(400,365,"likes-dialog");d.addHeader("People who like this");d.addPanel("Panel 1","<div class='spinner-container'></div>");d.addCancel("Close",function(t){t.remove();d=undefined});d.getCurrentPanel().setPadding(0);function r(u,t,v){var x=AJS.dim,w=function(){};AJS.dim=w;try{t.apply(u,v||[])}finally{AJS.dim=x}}r(d,d.show);g.ajax({type:"GET",url:f(s),data:{expand:"user",max:50},dataType:"json"}).done(function(t){if(!d.popup.element.is(":visible")){return}t.remoteUser=k;d.getCurrentPanel().html(Confluence.Templates.Likes.likesDialog(t));g("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var u=g(this);g.ajax({type:"PUT",url:Confluence.getContextPath()+"/rest/likes/1.0/user/"+AJS.Meta.get("remote-user")+"/following?username="+u.attr("data-username"),contentType:"application/json",dataType:"json"}).done(function(){u.replaceWith("Following")})})});return false});Confluence.Binder.userHover();if(p.content_type=="comment"){o.prepend("<span class='comment-action-separator'>•</span><span class='small-like-icon'></span>")}}function i(m,o,n){if(m===undefined){throw new Error("type is required")}if(o===undefined){throw new Error("contentId is required")}if(n===undefined){throw new Error("contentType is required")}return function(){if(typeof this!=="object"||!this.nodeType||this.nodeType!==1||this.nodeName!="A"){throw new Error("this handler should be bound to a DOM anchor element")}var r=g(this),p=arguments.callee,q=r.next(".like-summary");g.ajax({type:m===c?"POST":"DELETE",url:f(o),data:{"atlassian-token":AJS.Meta.get("atlassian-token")},dataType:"json",timeout:5000}).fail(function(){var t=q.siblings(".like-error"),s="likes."+(m===c?"like":"unlike")+".failed";if(t.length===0){q.after("<span class='like-error' title='"+AJS.I18n.getText(s)+"'></span>")}else{t.attr("title",AJS.I18n.getText(s))}}).success(function(){q.attr("liked",m===c);q.parent().find(".like-error").remove()});r.unbind("click",p).bind("click",m===c?i(b,o,n):i(c,o,n)).html(m===c?"Unlike":"Like");e[o]=e[o]||{content_type:n,likes:[]};if(m===c){e[o].likes.push({user:{name:k}})}else{e[o].likes=g.grep(e[o].likes,function(s){return s.user.name!=k})}h(e[o],o,q);return false}}var l=g(Confluence.Templates.Likes.likeSection({showLikeButton:!j}));g("<div id='likes-and-labels-container' />").insertBefore("#labels-section").append(l).append(g("#labels-section"));if(AJS.Meta.get("page-id")){g.ajax({type:"GET",url:f(AJS.Meta.get("page-id")),dataType:"json"}).done(function(n){if(AJS.Meta.get("remote-user")){var m=g.grep(n.likes,function(q){return q.user.name==AJS.Meta.get("remote-user")}).length>0;var p=n.content_type;l.find(".like-button").click(m?i(b,AJS.Meta.get("page-id"),p):i(c,AJS.Meta.get("page-id"),p)).html(m?"Unlike":"Like")}var o=l.find(".like-summary");h(n,n.content_id,o);if(o.html()==""&&j){l.hide()}e[n.content_id]=n})}Confluence.Likes.appendAction=function(p){var o=p.find(".comment-actions-primary");var n=o.find("li[class~='comment-date']");var m=g(Confluence.Templates.Likes.commentLikeSection({showLikeButton:!j}));if(n.length==0){o.find("li:last-child").after(m)}else{n.before(m)}};Confluence.Likes.reload=function(){if(AJS.Meta.get("page-id")){g.ajax({type:"GET",url:Confluence.getContextPath()+"/rest/likes/1.0/content/"+AJS.Meta.get("page-id")+"/comment-likes",dataType:"json"}).done(function(m){g.each(m,function(q,n){var o=g("#comment-"+q);var p=o.find(".like-summary");h(n,q,p);e[q]=n});j&&g("#page-comments").find(".like-summary:empty").each(function(){g(this).closest(".comment-action-like").hide()});g("#page-comments .comment").each(function(){Confluence.Likes.updateComment(g(this),m)})})}};Confluence.Likes.updateComment=function(p,o){var q=p.attr("id");if(!q){return true}var m=(/^comment-(\d+)$/.exec(q)||[])[1];if(!m){throw new Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+q)}var n=o[m]&&AJS.Meta.get("remote-user")&&g.grep(o[m].likes,function(r){return r.user.name==AJS.Meta.get("remote-user")}).length>0;p.find(".like-button").click(n?i(b,m,"comment"):i(c,m,"comment")).html(n?"Unlike":"Like")};Confluence.Likes.appendAction(g("#page-comments"));Confluence.Likes.reload()},function(){throw new Error("Error downloading translation files for likes plugin.")})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
(function(b){var a=3;Confluence.Likes.LikeSummaryFactory={getLikeSummary:function(e,j,h){if(!e||e.length===0){return{key:""}}if(!j){throw new Error("contentId is required.")}var g,i=[],f=[];b.each(e,function(k,l){if(l.user&&l.user.name==h){g=l}else{if(i.length<a&&l.user.followedByRemoteUser){i.push(l)}else{f.push(l)}}});var d=["likes.summary"],c=[];if(g!=null){d.push(".you")}if(i.length>0){d.push(".");d.push(i.length);d.push(".promoted");b.each(i,function(k,l){c.push(Confluence.Templates.Likes.userLink(l))})}if(f.length==1){d.push(".1.non-promoted");c.push(Confluence.Templates.Likes.userLink(f[0]))}else{if(f.length>1){d.push(".x.non-promoted");c.push(f.length);c.push('class="likes" data-content-id="'+j+'"')}}return{key:d.join(""),args:c.length===0?undefined:c}}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-section">', (opt_data.showLikeButton) ? '<a href="" class="like-button">' + soy.$$escapeHtml("Like") + '</a>' : '', '<span class="like-summary"></span></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="comment-action-like">', (opt_data.showLikeButton) ? '<a href="" class="like-button">' + soy.$$escapeHtml("Like") + '</a>' : '', '<span class="like-summary"></span></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="likes-dialog-body"><ol>');
  var likeList20 = opt_data.likes;
  var likeListLen20 = likeList20.length;
  for (var likeIndex20 = 0; likeIndex20 < likeListLen20; likeIndex20++) {
    var likeData20 = likeList20[likeIndex20];
    output.append('<li><div class="avatar-container"><a href="', soy.$$escapeHtml(likeData20.user.url), '"><img class="like-user-avatar" src="', soy.$$escapeHtml(likeData20.user.avatarUrl), '"></a></div><div class="like-user"><a class="like-user-link" href="', soy.$$escapeHtml(likeData20.user.url), '">', soy.$$escapeHtml(likeData20.user.fullName), '</a></div><div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">', (likeData20.user.followedByRemoteUser) ? soy.$$escapeHtml("Following") : (opt_data.remoteUser && opt_data.remoteUser.length > 0) ? '<button data-username="' + soy.$$escapeHtml(likeData20.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml("Follow") + '</button>' : '', '</li></ul></div></li>');
  }
  output.append('</ol></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Likes.userLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.user.url), '" class="confluence-userlink" data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="aui-button sharelinks-urlmacro-button" href="');
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data, output);
  output.append('"><span>', soy.$$escapeHtml("Share on Confluence"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'', opt_data.bookmarkletActionURL, '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'js/SortableTables.js' */
(function($){

$(function(){
    /**
     * We work hard here to keep the cheap and expensive parts separated.
     * We call enable on a delay but keep both methods exposed globally so that we can re-init/enable
     * sortable tables on a page should we modify the dom dramatically.
     */
    var tables;
    Confluence.SortableTables = {
        init: function(){
            tables = $('table').filter(function(){
                var thisTable = $(this),
                    cells = thisTable.find('td, th'),
                    firstRowCells = this.rows.length && $(this.rows[0].cells),
                    cell, eventData;

                if(thisTable.attr("data-sortable") === "false")
                    return false;

                // this exists for legacy reasons, we use a data attribute to opt out now
                eventData = jQuery.Event("makeSortable.SortableTables");
                thisTable.trigger(eventData);
                if (eventData.isDefaultPrevented()) {
                    return false;
                }

                if (!firstRowCells || firstRowCells.length === 0) { //there are no rows or no cells
                    return false;
                }
                //no colspan or rowspans > 1
                for (var i = 0, len = cells.length; i < len; i++) {
                    cell = cells[i];
                    if(cell.rowSpan != 1 || cell.colSpan != 1) {
                        return false;
                    }
                }

                //Header contains an inner table, not sortable
                if($(this.rows[0]).find('table').length){
                    return false;
                }

                // at least one cell in first row is not a th or have a class of nohighlight, not sortable
                if (firstRowCells.filter('th').length != firstRowCells.length || firstRowCells.hasClass('nohighlight'))
                    return false;

                // single row tables are not sortable
                return this.rows[1];
            });
        },
        enable: function(){
            tables.each(function(){
                // Changing this to use live dom nodes or something other than a document fragment has a
                // significant performance penalty. Modify with care.
                var body = this.removeChild(this.children[0]),
                    rows = $(body.children),
                    firstRow = Array.prototype.shift.call(rows),
                    fragment = document.createDocumentFragment(),
                    head = document.createElement("thead");

                fragment.appendChild(head);
                head.appendChild(firstRow);
                fragment.appendChild(body);

                this.appendChild(fragment);
            });

            tables.tablesorter({
                "cssHeader" : 'sortableHeader',
                "delayInit" : true,
                "textExtraction" : function(node){
                    //Do the text trim manually since our version of jQuery fails at this.
                    return AJS.trim($(node).text());
                },
                "dateFormat": getDateFormat()
            });
        }
    };
    Confluence.SortableTables.init();
    setTimeout(Confluence.SortableTables.enable, 100);
});

//Sortable tables friendly date format
function getDateFormat(){
    var dateFormat = AJS.Meta.get('date.format'),
        firstCharacter, retVal;

    if (dateFormat && dateFormat.length !== 0) {
        //we can assume enough from the first character
        firstCharacter = dateFormat.toLowerCase()[0];
        if (firstCharacter === 'm') {
            retVal = 'mmddyyyy';
        } else if (firstCharacter === 'd') {
            retVal = 'ddmmyyyy';
        } else if (firstCharacter === 'y') {
            retVal = 'yyyymmdd';
        }
    }
    return retVal;
}
})(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-resources', location = 'tablesorter/js/jquery.tablesorter.js' */
﻿/*!
* TableSorter 2.3.10 - Client-side table sorting with ease!
* @requires jQuery v1.2.6+
*
* Copyright (c) 2007 Christian Bach
* Examples and docs at: http://tablesorter.com
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
* @type jQuery
* @name tablesorter
* @cat Plugins/Tablesorter
* @author Christian Bach/christian.bach@polyester.se
* @contributor Rob Garrison/https://github.com/Mottie/tablesorter
*/
!(function($) {
	$.extend({
		tablesorter: new function() {

			this.version = "2.3.10";

			var parsers = [], widgets = [];
			this.defaults = {

				// appearance
				widthFixed       : false,      // adds colgroup to fix widths of columns

				// functionality
				cancelSelection  : true,       // prevent text selection in the header
				dateFormat       : "mmddyyyy", // other options: "ddmmyyy" or "yyyymmdd"
				sortMultiSortKey : "shiftKey", // key used to select additional columns
				usNumberFormat   : true,       // false for German "1.234.567,89" or French "1 234 567,89"
				delayInit        : false,      // if false, the parsed table contents will not update until the first sort.

				// sort options
				headers          : {},         // set sorter, string, empty, locked order, sortInitialOrder, filter, etc.
				ignoreCase       : true,       // ignore case while sorting
				sortForce        : null,       // column(s) first sorted; always applied
				sortList         : [],         // Initial sort order; applied initially; updated when manually sorted
				sortAppend       : null,       // column(s) sorted last; always applied

				sortInitialOrder : "asc",      // sort direction on first click
				sortLocaleCompare: false,      // replace equivalent character (accented characters)
				sortReset        : false,      // third click on the header will reset column to default - unsorted
				sortRestart      : false,      // restart sort to "sortInitialOrder" when clicking on previously unsorted columns

				emptyTo          : "bottom",   // sort empty cell to bottom, top, none, zero
				stringTo         : "max",      // sort strings in numerical column as max, min, top, bottom, zero
				textExtraction   : "simple",   // text extraction method/function - function(node, table, cellIndex){}
				textSorter       : null,       // use custom text sorter - function(a,b){ return a.sort(b); } // basic sort

				// widget options
				widgets: [],                   // method to add widgets, e.g. widgets: ['zebra']
				widgetOptions    : {
					zebra : [ "even", "odd" ]    // zebra widget alternating row class names
				},
				initWidgets      : true,       // apply widgets on tablesorter initialization

				// callbacks
				initialized      : null,       // function(table){},
				onRenderHeader   : null,       // function(index){},

				// css class names
				tableClass       : 'tablesorter',
				cssAsc           : "tablesorter-headerSortUp",
				cssChildRow      : "expand-child",
				cssDesc          : "tablesorter-headerSortDown",
				cssHeader        : "tablesorter-header",
				cssInfoBlock     : "tablesorter-infoOnly", // don't sort tbody with this class name

				// selectors
				selectorHeaders  : '> thead th',
				selectorRemove   : "tr.remove-me",

				// advanced
				debug            : false,

				// Internal variables
				headerList: [],
				empties: {},
				strings: {},
				parsers: []

				// deprecated; but retained for backwards compatibility
				// widgetZebra: { css: ["even", "odd"] }

			};

			/* debuging utils */
			function log(s) {
				if (typeof console !== "undefined" && typeof console.log !== "undefined") {
					console.log(s);
				} else {
					alert(s);
				}
			}

			function benchmark(s, d) {
				log(s + " (" + (new Date().getTime() - d.getTime()) + "ms)");
			}

			this.benchmark = benchmark;
			this.hasInitialized = false;

			function getElementText(table, node, cellIndex) {
				if (!node) { return ""; }
				var c = table.config,
					t = c.textExtraction, text = "";
				if (t === "simple") {
					if (c.supportsTextContent) {
						text = node.textContent; // newer browsers support this
					} else {
						if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
							text = node.childNodes[0].innerHTML;
						} else {
							text = node.innerHTML;
						}
					}
				} else {
					if (typeof(t) === "function") {
						text = t(node, table, cellIndex);
					} else if (typeof(t) === "object" && t.hasOwnProperty(cellIndex)) {
						text = t[cellIndex](node, table, cellIndex);
					} else {
						text = c.supportsTextContent ? node.textContent : $(node).text();
					}
				}
				return $.trim(text);
			}

			/* parsers utils */
			function getParserById(name) {
				var i, l = parsers.length;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === (name.toString()).toLowerCase()) {
						return parsers[i];
					}
				}
				return false;
			}

			function detectParserForColumn(table, rows, rowIndex, cellIndex) {
				var i, l = parsers.length,
				node = false,
				nodeValue = '',
				keepLooking = true;
				while (nodeValue === '' && keepLooking) {
					rowIndex++;
					if (rows[rowIndex]) {
						node = rows[rowIndex].cells[cellIndex];
						nodeValue = getElementText(table, node, cellIndex);
						if (table.config.debug) {
							log('Checking if value was empty on row ' + rowIndex + ', column: ' + cellIndex + ': ' + nodeValue);
						}
					} else {
						keepLooking = false;
					}
				}
				for (i = 1; i < l; i++) {
					if (parsers[i].is(nodeValue, table, node)) {
						return parsers[i];
					}
				}
				// 0 is always the generic parser (text)
				return parsers[0];
			}

			function buildParserCache(table, $headers) {
				var c = table.config,
					tb = $(table.tBodies).filter(':not(.' + c.cssInfoBlock + ')'),
					ts = $.tablesorter, rows, list, l, i, h, m, ch, cl, p, parsersDebug = "";
				if ( tb.length === 0) { return; } // In the case of empty tables
				rows = tb[0].rows;
				if (rows[0]) {
					list = [];
					l = rows[0].cells.length;
					for (i = 0; i < l; i++) {
						// tons of thanks to AnthonyM1229 for working out the following selector (issue #74) to make this work in IE8!
						h = $headers.filter(':not([colspan])[data-column="'+i+'"]:last,[colspan="1"][data-column="'+i+'"]:last');
						ch = c.headers[i];
						// get column parser
						p = getParserById( ts.getData(h, ch, 'sorter') );
						// empty cells behaviour - keeping emptyToBottom for backwards compatibility.
						c.empties[i] = ts.getData(h, ch, 'empty') || c.emptyTo || (c.emptyToBottom ? 'bottom' : 'top' );
						// text strings behaviour in numerical sorts
						c.strings[i] = ts.getData(h, ch, 'string') || c.stringTo || 'max';
						if (!p) {
							p = detectParserForColumn(table, rows, -1, i);
						}
						if (c.debug) {
							parsersDebug += "column:" + i + "; parser:" + p.id + "; string:" + c.strings[i] + '; empty: ' + c.empties[i] + "\n";
						}
						list.push(p);
					}
				}
				if (c.debug) {
					log(parsersDebug);
				}
				return list;
			}

			/* utils */
			function buildCache(table) {
				var b = table.tBodies,
				tc = table.config,
				totalRows,
				totalCells,
				parsers = tc.parsers,
				t, i, j, k, c, cols, cacheTime;
				tc.cache = {};
				if (tc.debug) {
					cacheTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					tc.cache[k] = { row: [], normalized: [] };
					// ignore tbodies with class name from css.cssInfoBlock
					if (!$(b[k]).hasClass(tc.cssInfoBlock)) {
						$(b[k]).addClass('tablesorter-hidden');
						totalRows = (b[k] && b[k].rows.length) || 0;
						totalCells = (b[k].rows[0] && b[k].rows[0].cells.length) || 0;
						for (i = 0; i < totalRows; ++i) {
							/** Add the table data to main data array */
							c = $(b[k].rows[i]);
							cols = [];
							// if this is a child row, add it to the last row's children and continue to the next row
							if (c.hasClass(tc.cssChildRow)) {
								tc.cache[k].row[tc.cache[k].row.length - 1] = tc.cache[k].row[tc.cache[k].row.length - 1].add(c);
								// go to the next for loop
								continue;
							}
							tc.cache[k].row.push(c);
							for (j = 0; j < totalCells; ++j) {
								t = getElementText(table, c[0].cells[j], j);
								// allow parsing if the string is empty, previously parsing would change it to zero,
								// in case the parser needs to extract data from the table cell attributes
								cols.push( parsers[j].format(t, table, c[0].cells[j], j) );
							}
							cols.push(tc.cache[k].normalized.length); // add position for rowCache
							tc.cache[k].normalized.push(cols);
						}
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (tc.debug) {
					benchmark("Building cache for " + totalRows + " rows", cacheTime);
				}
			}

			function getWidgetById(name) {
				var i, w, l = widgets.length;
				for (i = 0; i < l; i++) {
					w = widgets[i];
					if (w && w.hasOwnProperty('id') && w.id.toLowerCase() === name.toLowerCase()) {
						return w;
					}
				}
			}

			function applyWidget(table, init) {
				var tc = table.config, c = tc.widgets,
				time, i, w, l = c.length;
				if (tc.debug) {
					time = new Date();
				}
				for (i = 0; i < l; i++) {
					w = getWidgetById(c[i]);
					if ( w ) {
						if (init === true && w.hasOwnProperty('init')) {
							w.init(table, widgets, w);
						} else if (!init && w.hasOwnProperty('format')) {
							w.format(table);
						}
					}
				}
				if (tc.debug) {
					benchmark("Completed " + (init === true ? "initializing" : "applying") + " widgets", time);
				}
			}

			// init flag (true) used by pager plugin to prevent widget application
			function appendToTable(table, init) {
				var c = table.config,
				b = table.tBodies,
				rows = [],
				r, n, totalRows, checkCell, c2 = c.cache,
				f, i, j, k, l, pos, appendTime;
				if (c.debug) {
					appendTime = new Date();
				}
				for (k = 0; k < b.length; k++) {
					if (!$(b[k]).hasClass(c.cssInfoBlock)){
						$(b[k]).addClass('tablesorter-hidden');
						f = document.createDocumentFragment();
						r = c2[k].row;
						n = c2[k].normalized;
						totalRows = n.length;
						checkCell = totalRows ? (n[0].length - 1) : 0;
						for (i = 0; i < totalRows; i++) {
							pos = n[i][checkCell];
							rows.push(r[pos]);
							// removeRows used by the pager plugin
							if (!c.appender || !c.removeRows) {
								l = r[pos].length;
								for (j = 0; j < l; j++) {
									f.appendChild(r[pos][j]);
								}
							}
						}
						table.tBodies[k].appendChild(f);
						$(b[k]).removeClass('tablesorter-hidden');
					}
				}
				if (c.appender) {
					c.appender(table, rows);
				}
				if (c.debug) {
					benchmark("Rebuilt table", appendTime);
				}
				// apply table widgets
				if (!init) { applyWidget(table); }
				// trigger sortend
				$(table).trigger("sortEnd", table);
			}

			// computeTableHeaderCellIndexes from:
			// http://www.javascripttoolbox.com/lib/table/examples.php
			// http://www.javascripttoolbox.com/temp/table_cellindex.html
			function computeThIndexes(t) {
				var matrix = [],
				lookup = {},
				trs = $(t).find('thead:eq(0) tr'),
				i, j, k, l, c, cells, rowIndex, cellId, rowSpan, colSpan, firstAvailCol, matrixrow;
				for (i = 0; i < trs.length; i++) {
					cells = trs[i].cells;
					for (j = 0; j < cells.length; j++) {
						c = cells[j];
						rowIndex = c.parentNode.rowIndex;
						cellId = rowIndex + "-" + c.cellIndex;
						rowSpan = c.rowSpan || 1;
						colSpan = c.colSpan || 1;
						if (typeof(matrix[rowIndex]) === "undefined") {
							matrix[rowIndex] = [];
						}
						// Find first available column in the first row
						for (k = 0; k < matrix[rowIndex].length + 1; k++) {
							if (typeof(matrix[rowIndex][k]) === "undefined") {
								firstAvailCol = k;
								break;
							}
						}
						lookup[cellId] = firstAvailCol;
						// add data-column
						$(c).attr({ 'data-column' : firstAvailCol }); // 'data-row' : rowIndex
						for (k = rowIndex; k < rowIndex + rowSpan; k++) {
							if (typeof(matrix[k]) === "undefined") {
								matrix[k] = [];
							}
							matrixrow = matrix[k];
							for (l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
								matrixrow[l] = "x";
							}
						}
					}
				}
				return lookup;
			}

			function formatSortingOrder(v) {
				// look for "d" in "desc" order; return true
				return (/^d/i.test(v) || v === 1);
			}


			function buildHeaders(table) {
				var header_index = computeThIndexes(table), ch, $t,
					$th, lock, time, $tableHeaders, c = table.config, ts = $.tablesorter;
					c.headerList = [];
				if (c.debug) {
					time = new Date();
				}
				$tableHeaders = $(table).find(c.selectorHeaders)
				.each(function(index) {
					$t = $(this);
					ch = c.headers[index];
					this.innerHTML = '<div class="tablesorter-header-inner">' + this.innerHTML + '</div>'; // faster than wrapInner
					if (c.onRenderHeader) { c.onRenderHeader.apply($t, [index]); }
					this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
					this.order = formatSortingOrder( ts.getData($t, ch, 'sortInitialOrder') || c.sortInitialOrder ) ? [1,0,2] : [0,1,2];
					this.count = -1; // set to -1 because clicking on the header automatically adds one
					if (ts.getData($t, ch, 'sorter') === 'false') { this.sortDisabled = true; }
					this.lockedOrder = false;
					lock = ts.getData($t, ch, 'lockedOrder') || false;
					if (typeof(lock) !== 'undefined' && lock !== false) {
						this.order = this.lockedOrder = formatSortingOrder(lock) ? [1,1,1] : [0,0,0];
					}
					if (!this.sortDisabled) {
						$th = $t.addClass(c.cssHeader);
					}
					// add cell to headerList
					c.headerList[index] = this;
					// add to parent in case there are multiple rows
					$t.parent().addClass(c.cssHeader);
				});
				if (table.config.debug) {
					benchmark("Built headers:", time);
					log($tableHeaders);
				}
				return $tableHeaders;
			}

			function isValueInArray(v, a) {
				var i, l = a.length;
				for (i = 0; i < l; i++) {
					if (a[i][0] === v) {
						return true;
					}
				}
				return false;
			}

			function setHeadersCss(table, $headers, list) {
				var f, h = [], i, j, l, css = [table.config.cssDesc, table.config.cssAsc];
				// remove all header information
				$headers
					.removeClass(css.join(' '))
					.each(function() {
						if (!this.sortDisabled) {
							h[this.column] = $(this);
						}
					});
				l = list.length;
				for (i = 0; i < l; i++) {
					if (list[i][1] === 2) { continue; } // direction = 2 means reset!
					if (h[list[i][0]]) {
						// add class if cell exists - fix for issue #78
						h[list[i][0]].addClass(css[list[i][1]]);
					}
					// multicolumn sorting updating
					f = $headers.filter('[data-column="' + list[i][0] + '"]');
					if (l > 1 && f.length) {
						for (j = 0; j < f.length; j++) {
							if (!f[j].sortDisabled) {
								$(f[j]).addClass(css[list[i][1]]);
							}
						}
					}
				}
			}

			function fixColumnWidth(table) {
				if (table.config.widthFixed) {
					var colgroup = $('<colgroup>');
					$("tr:first td", table.tBodies[0]).each(function() {
						colgroup.append($('<col>').css('width', $(this).width()));
					});
					$(table).prepend(colgroup);
				}
			}

			function updateHeaderSortCount(table, sortList) {
				var i, s, o, c = table.config,
				l = sortList.length;
				for (i = 0; i < l; i++) {
					s = sortList[i];
					o = c.headerList[s[0]];
					if (o) { // prevents error if sorton array is wrong
						o.count = s[1] % (c.sortReset ? 3 : 2);
					}
				}
			}

			function getCachedSortType(parsers, i) {
				return (parsers && parsers[i]) ? parsers[i].type || '' : '';
			}

			/* sorting methods - reverted sorting method back to version 2.0.3 */
			function multisort(table, sortList) {
				var dynamicExp, col, mx = 0, dir = 0, tc = table.config,
				l = sortList.length, bl = table.tBodies.length,
				sortTime, i, j, k, c, cache, lc, s, e, order, orgOrderCol;
				if (tc.debug) { sortTime = new Date(); }
				for (k = 0; k < bl; k++) {
					dynamicExp = "var sortWrapper = function(a,b) {";
					cache = tc.cache[k];
					lc = cache.normalized.length;
					for (i = 0; i < l; i++) {
						c = sortList[i][0];
						order = sortList[i][1];
						// fallback to natural sort since it is more robust
						s = /n/i.test(getCachedSortType(tc.parsers, c)) ? "Numeric" : "Text";
						s += order === 0 ? "" : "Desc";
						e = "e" + i;
						// get max column value (ignore sign)
						if (/Numeric/.test(s) && tc.strings[c]) {
							for (j = 0; j < lc; j++) {
								col = Math.abs(parseFloat(cache.normalized[j][c]));
								mx = Math.max( mx, isNaN(col) ? 0 : col );
							}
							// sort strings in numerical columns
							if (typeof(tc.string[tc.strings[c]]) === 'boolean') {
								dir = (order === 0 ? 1 : -1) * (tc.string[tc.strings[c]] ? -1 : 1);
							} else {
								dir = (tc.strings[c]) ? tc.string[tc.strings[c]] || 0 : 0;
							}
						}
						dynamicExp += "var " + e + " = sort" + s + "(table,a[" + c + "],b[" + c + "]," + c + "," + mx +  "," + dir + "); ";
						dynamicExp += "if (" + e + ") { return " + e + "; } ";
						dynamicExp += "else { ";
					}
					// if value is the same keep orignal order
					orgOrderCol = (cache.normalized && cache.normalized[0]) ? cache.normalized[0].length - 1 : 0;
					dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
					for (i=0; i < l; i++) {
						dynamicExp += "}; ";
					}
					dynamicExp += "return 0; ";
					dynamicExp += "}; ";
					eval(dynamicExp);
					cache.normalized.sort(sortWrapper); // sort using eval expression
				}
				if (tc.debug) { benchmark("Sorting on " + sortList.toString() + " and dir " + order+ " time", sortTime); }
			}

			// Natural sort - https://github.com/overset/javascript-natural-sort
			function sortText(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ],
					r = $.tablesorter.regex, xN, xD, yN, yD, xF, yF, i, mx;
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(a, b, table, col); }
				// chunk/tokenize
				xN = a.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				yN = b.replace(r[0], '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
				// numeric, hex or date detection
				xD = parseInt(a.match(r[2])) || (xN.length !== 1 && a.match(r[1]) && Date.parse(a));
				yD = parseInt(b.match(r[2])) || (xD && b.match(r[1]) && Date.parse(b)) || null;
				// first try and sort Hex codes or Dates
				if (yD) {
					if ( xD < yD ) { return -1; }
					if ( xD > yD ) { return 1; }
				}
				mx = Math.max(xN.length, yN.length);
				// natural sorting through split numeric strings and default strings
				for (i = 0; i < mx; i++) {
					// find floats not starting with '0', string or 0 if not defined (Clint Priest)
					xF = (!(xN[i] || '').match(r[3]) && parseFloat(xN[i])) || xN[i] || 0;
					yF = (!(yN[i] || '').match(r[3]) && parseFloat(yN[i])) || yN[i] || 0;
					// handle numeric vs string comparison - number < string - (Kyle Adams)
					if (isNaN(xF) !== isNaN(yF)) { return (isNaN(xF)) ? 1 : -1; }
					// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
					if (typeof xF !== typeof yF) {
						xF += '';
						yF += '';
					}
					if (xF < yF) { return -1; }
					if (xF > yF) { return 1; }
				}
				return 0;
			}

			function sortTextDesc(table, a, b, col) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (typeof c.textSorter === 'function') { return c.textSorter(b, a, table, col); }
				return sortText(table, b, a);
			}

			// return text string value by adding up ascii value
			// so the text is somewhat sorted when using a digital sort
			// this is NOT an alphanumeric sort
			function getTextValue(a, mx, d) {
				if (mx) {
					// make sure the text value is greater than the max numerical value (mx)
					var i, l = a.length, n = mx + d;
					for (i = 0; i < l; i++) {
						n += a.charCodeAt(i);
					}
					return d * n;
				}
				return 0;
			}

			function sortNumeric(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : -e || -1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : e || 1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return a - b;
			}

			function sortNumericDesc(table, a, b, col, mx, d) {
				if (a === b) { return 0; }
				var c = table.config, e = c.string[ (c.empties[col] || c.emptyTo ) ];
				if (a === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? -1 : 1) : e || 1; }
				if (b === '' && e !== 0) { return (typeof(e) === 'boolean') ? (e ? 1 : -1) : -e || -1; }
				if (isNaN(a)) { a = getTextValue(a, mx, d); }
				if (isNaN(b)) { b = getTextValue(b, mx, d); }
				return b - a;
			}

			function checkResort($table, flag, callback) {
				var t = $table[0];
				if (flag !== false) {
					$table.trigger("sorton", [t.config.sortList, function(){
						$table.trigger('updateComplete');
						if (typeof callback === "function") {
							callback(t);
						}
					}]);
				} else {
					$table.trigger('updateComplete');
					if (typeof callback === "function") {
						callback(t);
					}
				}
			}

			/* public methods */
			this.construct = function(settings) {
				return this.each(function() {
					// if no thead or tbody quit.
					if (!this.tHead || this.tBodies.length === 0) { return; }
					// declare
					var $headers, $cell, $this,
						c, i, j, k, a, s, o, downTime,
						m = $.metadata;
					// new blank config object
					this.config = {};
					// merge and extend.
					c = $.extend(true, this.config, $.tablesorter.defaults, settings);

					if (c.debug) { $.data( this, 'startoveralltimer', new Date()); }
					// store common expression for speed
					$this = $(this).addClass(c.tableClass);
					// save the settings where they read
					$.data(this, "tablesorter", c);
					c.supportsTextContent = $('<span>x</span>')[0].textContent === 'x';
					// digit sort text location; keeping max+/- for backwards compatibility
					c.string = { 'max': 1, 'min': -1, 'max+': 1, 'max-': -1, 'zero': 0, 'none': 0, 'null': 0, 'top': true, 'bottom': false };
					// build headers
					$headers = buildHeaders(this);
					// try to auto detect column type, and store in tables config
					c.parsers = buildParserCache(this, $headers);
					// build the cache for the tbody cells
					// delayInit will delay building the cache until the user starts a sort
					if (!c.delayInit) { buildCache(this); }
					// fixate columns if the users supplies the fixedWidth option
					fixColumnWidth(this);
					// apply event handling to headers
					// this is to big, perhaps break it out?
					$headers.bind('mousedown.tablesorter mouseup.tablesorter', function(e, external) {
						if (e.type === 'mousedown') {
							downTime = new Date().getTime();
							return !c.cancelSelection;
						}
						// prevent resizable widget from initializing a sort (long clicks are ignored)
						if (external !== true && (new Date().getTime() - downTime > 500)) { return false; }
						if (c.delayInit && !c.cache) { buildCache($this[0]); }
						if (!this.sortDisabled) {
							// Only call sortStart if sorting is enabled.
							$this.trigger("sortStart", $this[0]);
							// store exp, for speed
							$cell = $(this);
							k = !e[c.sortMultiSortKey];
							// get current column sort order
							this.count = (this.count + 1) % (c.sortReset ? 3 : 2);
							// reset all sorts on non-current column - issue #30
							if (c.sortRestart) {
								i = this;
								$headers.each(function() {
									// only reset counts on columns that weren't just clicked on and if not included in a multisort
									if (this !== i && (k || !$(this).is('.' + c.cssDesc + ',.' + c.cssAsc))) {
										this.count = -1;
									}
								});
							}
							// get current column index
							i = this.column;
							// user only wants to sort on one column
							if (k) {
								// flush the sort list
								c.sortList = [];
								if (c.sortForce !== null) {
									a = c.sortForce;
									for (j = 0; j < a.length; j++) {
										if (a[j][0] !== i) {
											c.sortList.push(a[j]);
										}
									}
								}
								// add column to sort list
								o = this.order[this.count];
								if (o < 2) {
									c.sortList.push([i, o]);
									// add other columns if header spans across multiple
									if (this.colSpan > 1) {
										for (j = 1; j < this.colSpan; j++) {
											c.sortList.push([i+j, o]);
										}
									}
								}
								// multi column sorting
							} else {
								// the user has clicked on an already sorted column.
								if (isValueInArray(i, c.sortList)) {
									// reverse the sorting direction for all tables.
									for (j = 0; j < c.sortList.length; j++) {
										s = c.sortList[j];
										o = c.headerList[s[0]];
										if (s[0] === i) {
											s[1] = o.order[o.count];
											if (s[1] === 2) {
												c.sortList.splice(j,1);
												o.count = -1;
											}
										}
									}
								} else {
									// add column to sort list array
									o = this.order[this.count];
									if (o < 2) {
										c.sortList.push([i, o]);
										// add other columns if header spans across multiple
										if (this.colSpan > 1) {
											for (j = 1; j < this.colSpan; j++) {
												c.sortList.push([i+j, o]);
											}
										}
									}
								}
							}
							if (c.sortAppend !== null) {
								a = c.sortAppend;
								for (j = 0; j < a.length; j++) {
									if (a[j][0] !== i) {
										c.sortList.push(a[j]);
									}
								}
							}
							// sortBegin event triggered immediately before the sort
							$this.trigger("sortBegin", $this[0]);
							// set css for headers
							setHeadersCss($this[0], $headers, c.sortList);
							multisort($this[0], c.sortList);
							appendToTable($this[0]);
							// stop normal event by returning false
							return false;
						}
					});
					if (c.cancelSelection) {
						// cancel selection
						$headers.each(function() {
							this.onselectstart = function() {
								return false;
							};
						});
					}
					// apply easy methods that trigger binded events
					$this
					.bind("update", function(e, resort, callback) {
						// remove rows/elements before update
						$(c.selectorRemove, this).remove();
						// rebuild parsers.
						c.parsers = buildParserCache(this, $headers);
						// rebuild the cache map
						buildCache(this);
						checkResort($this, resort, callback);
					})
					.bind("updateCell", function(e, cell, resort, callback) {
						// get position from the dom.
						var t = this, $tb = $(this).find('tbody'), row, pos,
						// update cache - format: function(s, table, cell, cellIndex)
						tbdy = $tb.index( $(cell).closest('tbody') );
						row = $tb.eq(tbdy).find('tr').index( $(cell).closest('tr') );
						pos = [ row, cell.cellIndex];
						t.config.cache[tbdy].normalized[pos[0]][pos[1]] = c.parsers[pos[1]].format( getElementText(t, cell, pos[1]), t, cell, pos[1] );
						checkResort($this, resort, callback);
					})
					.bind("addRows", function(e, $row, resort, callback) {
						var i, rows = $row.filter('tr').length,
						dat = [], l = $row[0].cells.length, t = this,
						tbdy = $(this).find('tbody').index( $row.closest('tbody') );
						// add each row
						for (i = 0; i < rows; i++) {
							// add each cell
							for (j = 0; j < l; j++) {
								dat[j] = c.parsers[j].format( getElementText(t, $row[i].cells[j], j), t, $row[i].cells[j], j );
							}
							// add the row index to the end
							dat.push(c.cache[tbdy].row.length);
							// update cache
							c.cache[tbdy].row.push([$row[i]]);
							c.cache[tbdy].normalized.push(dat);
							dat = [];
						}
						// resort using current settings
						checkResort($this, resort, callback);
					})
					.bind("sorton", function(e, list, callback, init) {
						$(this).trigger("sortStart", this);
						var l = c.headerList.length;
						c.sortList = [];
						$.each(list, function(i,v){
							// make sure column exists
							if (v[0] < l) { c.sortList.push(list[i]); }
						});
						// update header count index
						updateHeaderSortCount(this, c.sortList);
						// set css for headers
						setHeadersCss(this, $headers, c.sortList);
						// sort the table and append it to the dom
						multisort(this, c.sortList);
						appendToTable(this, init);
						if (typeof callback === "function") {
							callback(this);
						}
					})
					.bind("appendCache", function(e, init) {
						appendToTable(this, init);
					})
					.bind("applyWidgetId", function(e, id) {
						getWidgetById(id).format(this);
					})
					.bind("applyWidgets", function(e, init) {
						// apply widgets
						applyWidget(this, init);
					})
					.bind("destroy", function(e,c){
						$.tablesorter.destroy(this, c);
					});

					// get sort list from jQuery data or metadata
					if ($this.data() && typeof $this.data().sortlist !== 'undefined') {
						c.sortList = $this.data().sortlist;
					} else if (m && ($this.metadata() && $this.metadata().sortlist)) {
						c.sortList = $this.metadata().sortlist;
					}
					// apply widget init code
					applyWidget(this, true);
					// if user has supplied a sort list to constructor.
					if (c.sortList.length > 0) {
						$this.trigger("sorton", [c.sortList, {}, !c.initWidgets]);
					} else if (c.initWidgets) {
						// apply widget format
						applyWidget(this);
					}

					// initialized
					this.hasInitialized = true;
					if (c.debug) {
						$.tablesorter.benchmark("Overall initialization time", $.data( this, 'startoveralltimer'));
					}
					$this.trigger('tablesorter-initialized', this);
					if (typeof c.initialized === 'function') { c.initialized(this); }
				});
			};

			this.destroy = function(table, removeClasses){
				var $t = $(table), c = table.config;
				// remove widget added rows
				$t.find('thead:first tr:not(.' + c.cssHeader + ')').remove();
				// remove resizer widget stuff
				$t.find('thead:first .tablesorter-resizer').remove();
				// disable tablesorter
				$t
					.unbind('update updateCell addRows sorton appendCache applyWidgetId applyWidgets destroy mouseup mouseleave')
					.find(c.selectorHeaders)
					.unbind('click mousedown mousemove mouseup')
					.removeClass(c.cssHeader + ' ' + c.cssAsc + ' ' + c.cssDesc);
				if (removeClasses !== false) {
					$t.removeClass(c.tableClass);
				}
			};

			this.addParser = function(parser) {
				var i, l = parsers.length, a = true;
				for (i = 0; i < l; i++) {
					if (parsers[i].id.toLowerCase() === parser.id.toLowerCase()) {
						a = false;
					}
				}
				if (a) {
					parsers.push(parser);
				}
			};
			this.addWidget = function(widget) {
				widgets.push(widget);
			};

			this.formatFloat = function(s, table) {
				if (typeof(s) !== 'string' || s === '') { return s; }
				if (table.config.usNumberFormat !== false) {
					// US Format - 1,234,567.89 -> 1234567.89
					s = s.replace(/,/g,'');
				} else {
					// German Format = 1.234.567,89 -> 1234567.89
					// French Format = 1 234 567,89 -> 1234567.89
					s = s.replace(/[\s|\.]/g,'').replace(/,/g,'.');
				}
				if(/^\s*\([.\d]+\)/.test(s)) {
					s = s.replace(/^\s*\(/,'-').replace(/\)/,'');
				}
				var i = parseFloat(s);
				// return the text instead of zero
				return isNaN(i) ? $.trim(s) : i;
			};
			this.isDigit = function(s) {
				// replace all unwanted chars and match.
				return (/^[\-+(]?\d+[)]?$/).test(s.replace(/[,.'\s]/g, ''));
			};

			// regex used in natural sort
			this.regex = [
				/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, // chunk/tokenize numbers & letters
				/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, //date
				/^0x[0-9a-f]+$/i, // hex
				/^0/ // leading zeros
			];
			// used when replacing accented characters during sorting
			this.characterEquivalents = {
				"a" : "\u00e1\u00e0\u00e2\u00e3\u00e4", // áàâãä
				"A" : "\u00c1\u00c0\u00c2\u00c3\u00c4", // ÁÀÂÃÄ
				"c" : "\u00e7", // ç
				"C" : "\u00c7", // Ç
				"e" : "\u00e9\u00e8\u00ea\u00eb", // éèêë
				"E" : "\u00c9\u00c8\u00ca\u00cb", // ÉÈÊË
				"i" : "\u00ed\u00ec\u0130\u00ee\u00ef", // íìİîï
				"I" : "\u00cd\u00cc\u0130\u00ce\u00cf", // ÍÌİÎÏ
				"o" : "\u00f3\u00f2\u00f4\u00f5\u00f6", // óòôõö
				"O" : "\u00d3\u00d2\u00d4\u00d5\u00d6", // ÓÒÔÕÖ
				"S" : "\u00df", // ß
				"u" : "\u00fa\u00f9\u00fb\u00fc", // úùûü
				"U" : "\u00da\u00d9\u00db\u00dc" // ÚÙÛÜ
			};
			this.replaceAccents = function(s) {
				var a, acc = '[', eq = this.characterEquivalents;
				if (!this.characterRegex) {
					this.characterRegexArray = {};
					for (a in eq) {
						if (typeof a === 'string') {
							acc += eq[a];
							this.characterRegexArray[a] = new RegExp('[' + eq[a] + ']', 'g');
						}
					}
					this.characterRegex = new RegExp(acc + ']');
				}
				if (this.characterRegex.test(s)) {
					for (a in eq) {
						if (typeof a === 'string') {
							s = s.replace( this.characterRegexArray[a], a );
						}
					}
				}
				return s;
			};

			// get sorter, string, empty, etc options for each column from
			// jQuery data, metadata, header option or header class name ("sorter-false")
			// priority = jQuery data > meta > headers option > header class name
			this.getData = function(h, ch, key) {
				var val = '', $h = $(h), m, cl;
				if (!$h.length) { return ''; }
				m = $.metadata ? $h.metadata() : false;
				cl = ' ' + ($h.attr('class') || '');
				if ($h.data() && ( typeof $h.data(key) !== 'undefined' || typeof $h.data(key.toLowerCase()) !== 'undefined') ){
					// "data-lockedOrder" is assigned to "lockedorder"; but "data-locked-order" is assigned to "lockedOrder"
					// "data-sort-initial-order" is assigned to "sortInitialOrder"
					val += $h.data(key) || $h.data(key.toLowerCase());
				} else if (m && typeof m[key] !== 'undefined') {
					val += m[key];
				} else if (ch && typeof ch[key] !== 'undefined') {
					val += ch[key];
				} else if (cl && cl.match(' ' + key + '-')) {
					// include sorter class name "sorter-text", etc
					val = cl.match( new RegExp(' ' + key + '-(\\w+)') )[1] || '';
				}
				return $.trim(val);
			};

			this.clearTableBody = function(table) {
				$(table.tBodies).filter(':not(.' + table.config.cssInfoBlock + ')').empty();
			};

		}
	})();

	// make shortcut
	var ts = $.tablesorter;

	// extend plugin scope
	$.fn.extend({
		tablesorter: ts.construct
	});

	// add default parsers
	ts.addParser({
		id: "text",
		is: function(s, table, node) {
			return true;
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config;
			s = $.trim( c.ignoreCase ? s.toLocaleLowerCase() : s );
			return c.sortLocaleCompare ? ts.replaceAccents(s) : s;
		},
		type: "text"
	});

	ts.addParser({
		id: "currency",
		is: function(s) {
			return (/^\(?[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+/).test(s); // £$€¤¥¢
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "ipAddress",
		is: function(s) {
			return (/^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/).test(s);
		},
		format: function(s, table) {
			var i, item, a = s.split("."),
			r = "",
			l = a.length;
			for (i = 0; i < l; i++) {
				item = a[i];
				if (item.length === 2) {
					r += "0" + item;
				} else {
					r += item;
				}
			}
			return ts.formatFloat(r, table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "url",
		is: function(s) {
			return (/^(https?|ftp|file):\/\//).test(s);
		},
		format: function(s) {
			return $.trim(s.replace(/(https?|ftp|file):\/\//, ''));
		},
		type: "text"
	});

	ts.addParser({
		id: "isoDate",
		is: function(s) {
			return (/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat((s !== "") ? (new Date(s.replace(/-/g, "/")).getTime() || "") : "", table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "percent",
		is: function(s) {
			return (/\d%\)?$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/%/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "usLongDate",
		is: function(s) {
			return s.match(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "shortDate", // "mmddyyyy", "ddmmyyyy" or "yyyymmdd"
		is: function(s) {
			// testing for ####-##-#### - so it's not perfect
			return (/^(\d{2}|\d{4})[\/\-\,\.\s+]\d{2}[\/\-\.\,\s+](\d{2}|\d{4})$/).test(s);
		},
		format: function(s, table, cell, cellIndex) {
			var c = table.config, ci = c.headerList[cellIndex],
			format = ci.shortDateFormat;
			if (typeof format === 'undefined') {
				// cache header formatting so it doesn't getData for every cell in the column
				format = ci.shortDateFormat = ts.getData( ci, c.headers[cellIndex], 'dateFormat') || c.dateFormat;
			}
			s = s.replace(/\s+/g," ").replace(/[\-|\.|\,]/g, "/");
			if (format === "mmddyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$1/$2");
			} else if (format === "ddmmyyyy") {
				s = s.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, "$3/$2/$1");
			} else if (format === "yyyymmdd") {
				s = s.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, "$1/$2/$3");
			}
			return ts.formatFloat( (new Date(s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "time",
		is: function(s) {
			return (/^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/).test(s);
		},
		format: function(s, table) {
			return ts.formatFloat( (new Date("2000/01/01 " + s).getTime() || ''), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "digit",
		is: function(s) {
			return ts.isDigit(s);
		},
		format: function(s, table) {
			return ts.formatFloat(s.replace(/[^\w,. \-()]/g, ""), table);
		},
		type: "numeric"
	});

	ts.addParser({
		id: "metadata",
		is: function(s) {
			return false;
		},
		format: function(s, table, cell) {
			var c = table.config,
			p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
			return $(cell).metadata()[p];
		},
		type: "numeric"
	});

	// add default widgets
	ts.addWidget({
		id: "zebra",
		format: function(table) {
			var $tb, $tv, $tr, row, even, time, k, l,
			c = table.config,
			child = new RegExp(c.cssChildRow, 'i'),
			b = $(table).children('tbody:not(.' + c.cssInfoBlock + ')'),
			css = [ "even", "odd" ];
			// maintain backwards compatibility
			css = c.widgetZebra && c.hasOwnProperty('css') ? c.widgetZebra.css :
				(c.widgetOptions && c.widgetOptions.hasOwnProperty('zebra')) ? c.widgetOptions.zebra : css;
			if (c.debug) {
				time = new Date();
			}
			for (k = 0; k < b.length; k++ ) {
				// loop through the visible rows
				$tb = $(b[k]);
				l = $tb.children('tr').length;
				if (l > 1) {
					row = 0;
					$tv = $tb.find('tr:visible');
					$tb.addClass('tablesorter-hidden');
					// revered back to using jQuery each - strangely it's the fastest method
					$tv.each(function(){
						$tr = $(this);
						// style children rows the same way the parent row was styled
						if (!child.test(this.className)) { row++; }
						even = (row % 2 === 0);
						$tr.removeClass(css[even ? 1 : 0]).addClass(css[even ? 0 : 1]);
					});
					$tb.removeClass('tablesorter-hidden');
				}
			}
			if (c.debug) {
				ts.benchmark("Applying Zebra widget", time);
			}
		}
	});

})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'net.customware.confluence.plugin.scaffolding:amd', location = 'js/lib/almond/almond.min.js' */
var SCAFFI1IZYM13="undefined"==typeof SCAFFI1IZYM13?{}:SCAFFI1IZYM13;!function(a){var b,c,d;!function(e){function f(a,b){return v.call(a,b)}function g(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=t.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(n=n.slice(0,n.length-1),a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),a=n.concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function h(a,b){return function(){return o.apply(e,w.call(arguments,0).concat([a,b]))}}function i(a){return function(b){return g(b,a)}}function j(a){return function(b){r[a]=b}}function k(a){if(f(s,a)){var b=s[a];delete s[a],u[a]=!0,n.apply(e,b)}if(!f(r,a)&&!f(u,a))throw new Error("No "+a);return r[a]}function l(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=l(a),e=d[0];return a=d[1],e&&(e=g(e,b),c=k(e)),e?a=c&&c.normalize?c.normalize(a,i(b)):g(a,b):(a=g(a,b),d=l(a),e=d[0],a=d[1],e&&(c=k(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return h(a)},exports:function(a){var b=r[a];return"undefined"!=typeof b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(b,c,d,g){var i,l,m,n,o,t,v=[],w=typeof d;if(g=g||b,"undefined"===w||"function"===w){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],g),l=n.f,"require"===l)v[o]=q.require(b);else if("exports"===l)v[o]=q.exports(b),t=!0;else if("module"===l)i=v[o]=q.module(b);else if(f(r,l)||f(s,l)||f(u,l))v[o]=k(l);else{if(!n.p)throw new Error(b+" missing "+l);n.p.load(n.n,h(g,!0),j(l),{}),v[o]=r[l]}m=d?d.apply(r[b],v):a,b&&(i&&i.exports!==e&&i.exports!==r[b]?r[b]=i.exports:m===e&&t||(r[b]=m))}else b&&(r[b]=d)},b=c=o=function(a,b,c,d,f){if("string"==typeof a)return q[a]?q[a](b):k(p(a,b).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!b)return;b.splice?(a=b,b=c,c=null):a=e}return b=b||function(){},"function"==typeof c&&(c=d,d=f),d?n(e,a,b,c):setTimeout(function(){n(e,a,b,c)},4),o},o.config=function(a){return o(a)},b._defined=r,d=function(a,b,c){b.splice||(c=b,b=[]),f(r,a)||f(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),SCAFFI1IZYM13.requirejs=SCAFFI1IZYM13.require=c,SCAFFI1IZYM13.define=d}(void 0);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'net.customware.confluence.plugin.scaffolding:view-content', location = 'js/amd/scaffolding-popup-button.min.js' */
/*!

 handlebars v1.1.2

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

/**
 * @preserve Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

/**
 * Copyright (c) 2014 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:</p>
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

SCAFFI1IZYM13.define("handlebars",[],function(){var t=function(){var t=function(){function t(t){this.string=t}var e;return t.prototype.toString=function(){return""+this.string},e=t}(),e=function(t){function e(t){return a[t]||"&amp;"}function i(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])}function r(t){return t instanceof s?t.toString():t||0===t?(t=""+t,u.test(t)?t.replace(c,e):t):""}function n(t){return t||0===t?p(t)&&0===t.length?!0:!1:!0}var o={},s=t,a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/[&<>"'`]/g,u=/[&<>"'`]/;o.extend=i;var l=Object.prototype.toString;o.toString=l;var h=function(t){return"function"==typeof t};h(/x/)&&(h=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)});var h;o.isFunction=h;var p=Array.isArray||function(t){return t&&"object"==typeof t?"[object Array]"===l.call(t):!1};return o.isArray=p,o.escapeExpression=r,o.isEmpty=n,o}(t),i=function(){function t(){for(var t=Error.prototype.constructor.apply(this,arguments),e=0;e<i.length;e++)this[i[e]]=t[i[e]]}var e,i=["description","fileName","lineNumber","message","name","number","stack"];return t.prototype=new Error,e=t}(),r=function(t,e){function i(t,e){this.helpers=t||{},this.partials=e||{},r(this)}function r(t){t.registerHelper("helperMissing",function(t){if(2===arguments.length)return void 0;throw new Error("Missing helper: '"+t+"'")}),t.registerHelper("blockHelperMissing",function(e,i){var r=i.inverse||function(){},n=i.fn;return p(e)&&(e=e.call(this)),e===!0?n(this):e===!1||null==e?r(this):h(e)?e.length>0?t.helpers.each(e,i):r(this):n(e)}),t.registerHelper("each",function(t,e){var i,r=e.fn,n=e.inverse,o=0,s="";if(p(t)&&(t=t.call(this)),e.data&&(i=_(e.data)),t&&"object"==typeof t)if(h(t))for(var a=t.length;a>o;o++)i&&(i.index=o,i.first=0===o,i.last=o===t.length-1),s+=r(t[o],{data:i});else for(var c in t)t.hasOwnProperty(c)&&(i&&(i.key=c),s+=r(t[c],{data:i}),o++);return 0===o&&(s=n(this)),s}),t.registerHelper("if",function(t,e){return p(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||s.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,i){return t.helpers["if"].call(this,e,{fn:i.inverse,inverse:i.fn,hash:i.hash})}),t.registerHelper("with",function(t,e){return p(t)&&(t=t.call(this)),s.isEmpty(t)?void 0:e.fn(t)}),t.registerHelper("log",function(e,i){var r=i.data&&null!=i.data.level?parseInt(i.data.level,10):1;t.log(r,e)})}function n(t,e){v.log(t,e)}var o={},s=t,a=e,c="1.1.2";o.VERSION=c;var u=4;o.COMPILER_REVISION=u;var l={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};o.REVISION_CHANGES=l;var h=s.isArray,p=s.isFunction,f=s.toString,d="[object Object]";o.HandlebarsEnvironment=i,i.prototype={constructor:i,logger:v,log:n,registerHelper:function(t,e,i){if(f.call(t)===d){if(i||e)throw new a("Arg not supported with multiple helpers");s.extend(this.helpers,t)}else i&&(e.not=i),this.helpers[t]=e},registerPartial:function(t,e){f.call(t)===d?s.extend(this.partials,t):this.partials[t]=e}};var v={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(t,e){if(v.level<=t){var i=v.methodMap[t];"undefined"!=typeof console&&console[i]&&console[i].call(console,e)}}};o.logger=v,o.log=n;var _=function(t){var e={};return s.extend(e,t),e};return o.createFrame=_,o}(e,i),n=function(t,e,i){function r(t){var e=t&&t[0]||1,i=p;if(e!==i){if(i>e){var r=f[i],n=f[e];throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+n+").")}throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}}function n(t,e){if(!e)throw new Error("No environment passed to template");var i;i=e.compile?function(t,i,r,n,o,s){var c=a.apply(this,arguments);if(c)return c;var u={helpers:n,partials:o,data:s};return o[i]=e.compile(t,{data:void 0!==s},e),o[i](r,u)}:function(t,e){var i=a.apply(this,arguments);if(i)return i;throw new h("The partial "+e+" could not be compiled when running in runtime-only mode")};var n={escapeExpression:l.escapeExpression,invokePartial:i,programs:[],program:function(t,e,i){var r=this.programs[t];return i?r=s(t,e,i):r||(r=this.programs[t]=s(t,e)),r},merge:function(t,e){var i=t||e;return t&&e&&t!==e&&(i={},l.extend(i,e),l.extend(i,t)),i},programWithDepth:o,noop:c,compilerInfo:null};return function(i,o){o=o||{};var s,a,c=o.partial?o:e;o.partial||(s=o.helpers,a=o.partials);var u=t.call(n,c,i,s,a,o.data);return o.partial||r(n.compilerInfo),u}}function o(t,e,i){var r=Array.prototype.slice.call(arguments,3),n=function(t,n){return n=n||{},e.apply(this,[t,n.data||i].concat(r))};return n.program=t,n.depth=r.length,n}function s(t,e,i){var r=function(t,r){return r=r||{},e(t,r.data||i)};return r.program=t,r.depth=0,r}function a(t,e,i,r,n,o){var s={partial:!0,helpers:r,partials:n,data:o};if(void 0===t)throw new h("The partial "+e+" could not be found");return t instanceof Function?t(i,s):void 0}function c(){return""}var u={},l=t,h=e,p=i.COMPILER_REVISION,f=i.REVISION_CHANGES;return u.template=n,u.programWithDepth=o,u.program=s,u.invokePartial=a,u.noop=c,u}(e,i,r),o=function(t,e,i,r,n){var o,s=t,a=e,c=i,u=r,l=n,h=function(){var t=new s.HandlebarsEnvironment;return u.extend(t,s),t.SafeString=a,t.Exception=c,t.Utils=u,t.VM=l,t.template=function(e){return l.template(e,t)},t},p=h();return p.create=h,o=p}(r,t,i,e,n),s=function(t){function e(t,i,r){this.type="program",this.statements=t,this.strip={},r?(this.inverse=new e(r,i),this.strip.right=i.left):i&&(this.strip.left=i.right)}function i(t,e,i,r){this.type="mustache",this.hash=e,this.strip=r;var n=i[3]||i[2];this.escaped="{"!==n&&"&"!==n;var o=this.id=t[0],s=this.params=t.slice(1),a=this.eligibleHelper=o.isSimple;this.isHelper=a&&(s.length||e)}function r(t,e,i){this.type="partial",this.partialName=t,this.context=e,this.strip=i}function n(t,e,i,r){if(t.id.original!==r.path.original)throw new v(t.id.original+" doesn't match "+r.path.original);this.type="block",this.mustache=t,this.program=e,this.inverse=i,this.strip={left:t.strip.left,right:r.strip.right},(e||i).strip.left=t.strip.right,(i||e).strip.right=r.strip.left,i&&!e&&(this.isInverse=!0)}function o(t){this.type="content",this.string=t}function s(t){this.type="hash",this.pairs=t}function a(t){this.type="ID";for(var e="",i=[],r=0,n=0,o=t.length;o>n;n++){var s=t[n].part;if(e+=(t[n].separator||"")+s,".."===s||"."===s||"this"===s){if(i.length>0)throw new v("Invalid path: "+e);".."===s?r++:this.isScoped=!0}else i.push(s)}this.original=e,this.parts=i,this.string=i.join("."),this.depth=r,this.isSimple=1===t.length&&!this.isScoped&&0===r,this.stringModeValue=this.string}function c(t){this.type="PARTIAL_NAME",this.name=t.original}function u(t){this.type="DATA",this.id=t}function l(t){this.type="STRING",this.original=this.string=this.stringModeValue=t}function h(t){this.type="INTEGER",this.original=this.integer=t,this.stringModeValue=Number(t)}function p(t){this.type="BOOLEAN",this.bool=t,this.stringModeValue="true"===t}function f(t){this.type="comment",this.comment=t}var d={},v=t;return d.ProgramNode=e,d.MustacheNode=i,d.PartialNode=r,d.BlockNode=n,d.ContentNode=o,d.HashNode=s,d.IdNode=a,d.PartialNameNode=c,d.DataNode=u,d.StringNode=l,d.IntegerNode=h,d.BooleanNode=p,d.CommentNode=f,d}(i),a=function(){var t,e=function(){function t(t,e){return{left:"~"===t[2],right:"~"===e[0]||"~"===e[1]}}function e(){this.yy={}}var i={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,inMustache_repetition0:28,inMustache_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,hash:35,hash_repetition_plus0:36,hashSegment:37,ID:38,EQUALS:39,DATA:40,pathSegments:41,SEP:42,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",38:"ID",39:"EQUALS",40:"DATA",42:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[35,1],[37,3],[26,1],[26,1],[26,1],[30,2],[21,1],[41,3],[41,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[36,1],[36,2]],performAction:function(e,i,r,n,o,s){var a=s.length-1;switch(o){case 1:return new n.ProgramNode(s[a-1]);case 2:return new n.ProgramNode([]);case 3:this.$=new n.ProgramNode([],s[a-1],s[a]);break;case 4:this.$=new n.ProgramNode(s[a-2],s[a-1],s[a]);break;case 5:this.$=new n.ProgramNode(s[a-1],s[a],[]);break;case 6:this.$=new n.ProgramNode(s[a]);break;case 7:this.$=new n.ProgramNode([]);break;case 8:this.$=new n.ProgramNode([]);break;case 9:this.$=[s[a]];break;case 10:s[a-1].push(s[a]),this.$=s[a-1];break;case 11:this.$=new n.BlockNode(s[a-2],s[a-1].inverse,s[a-1],s[a]);break;case 12:this.$=new n.BlockNode(s[a-2],s[a-1],s[a-1].inverse,s[a]);break;case 13:this.$=s[a];break;case 14:this.$=s[a];break;case 15:this.$=new n.ContentNode(s[a]);break;case 16:this.$=new n.CommentNode(s[a]);break;case 17:this.$=new n.MustacheNode(s[a-1][0],s[a-1][1],s[a-2],t(s[a-2],s[a]));break;case 18:this.$=new n.MustacheNode(s[a-1][0],s[a-1][1],s[a-2],t(s[a-2],s[a]));break;case 19:this.$={path:s[a-1],strip:t(s[a-2],s[a])};break;case 20:this.$=new n.MustacheNode(s[a-1][0],s[a-1][1],s[a-2],t(s[a-2],s[a]));break;case 21:this.$=new n.MustacheNode(s[a-1][0],s[a-1][1],s[a-2],t(s[a-2],s[a]));break;case 22:this.$=new n.PartialNode(s[a-2],s[a-1],t(s[a-3],s[a]));break;case 23:this.$=t(s[a-1],s[a]);break;case 24:this.$=[[s[a-2]].concat(s[a-1]),s[a]];break;case 25:this.$=[[s[a]],null];break;case 26:this.$=s[a];break;case 27:this.$=new n.StringNode(s[a]);break;case 28:this.$=new n.IntegerNode(s[a]);break;case 29:this.$=new n.BooleanNode(s[a]);break;case 30:this.$=s[a];break;case 31:this.$=new n.HashNode(s[a]);break;case 32:this.$=[s[a-2],s[a]];break;case 33:this.$=new n.PartialNameNode(s[a]);break;case 34:this.$=new n.PartialNameNode(new n.StringNode(s[a]));break;case 35:this.$=new n.PartialNameNode(new n.IntegerNode(s[a]));break;case 36:this.$=new n.DataNode(s[a]);break;case 37:this.$=new n.IdNode(s[a]);break;case 38:s[a-2].push({part:s[a],separator:s[a-1]}),this.$=s[a-2];break;case 39:this.$=[{part:s[a]}];break;case 42:this.$=[];break;case 43:s[a-1].push(s[a]);break;case 46:this.$=[s[a]];break;case 47:s[a-1].push(s[a])}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:29,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:30,21:24,30:25,38:[1,28],40:[1,27],41:26},{17:31,21:24,30:25,38:[1,28],40:[1,27],41:26},{21:33,26:32,32:[1,34],33:[1,35],38:[1,28],41:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,38:[1,28],40:[1,27],41:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,42],24:[2,42],28:43,32:[2,42],33:[2,42],34:[2,42],38:[2,42],40:[2,42]},{18:[2,25],24:[2,25]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],38:[2,37],40:[2,37],42:[1,44]},{21:45,38:[1,28],41:26},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],40:[2,39],42:[2,39]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,40],21:50,27:49,38:[1,28],41:26},{18:[2,33],38:[2,33]},{18:[2,34],38:[2,34]},{18:[2,35],38:[2,35]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,38:[1,28],41:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,44],21:56,24:[2,44],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:55,36:61,37:62,38:[1,63],40:[1,27],41:26},{38:[1,64]},{18:[2,36],24:[2,36],32:[2,36],33:[2,36],34:[2,36],38:[2,36],40:[2,36]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,65]},{18:[2,41]},{18:[1,66]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24]},{18:[2,43],24:[2,43],32:[2,43],33:[2,43],34:[2,43],38:[2,43],40:[2,43]},{18:[2,45],24:[2,45]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],38:[2,26],40:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],38:[2,27],40:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],38:[2,28],40:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],38:[2,29],40:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],38:[2,30],40:[2,30]},{18:[2,31],24:[2,31],37:67,38:[1,68]},{18:[2,46],24:[2,46],38:[2,46]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],38:[2,39],39:[1,69],40:[2,39],42:[2,39]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],38:[2,38],40:[2,38],42:[2,38]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{18:[2,47],24:[2,47],38:[2,47]},{39:[1,69]},{21:56,30:60,31:70,32:[1,57],33:[1,58],34:[1,59],38:[1,28],40:[1,27],41:26},{18:[2,32],24:[2,32],38:[2,32]}],defaultActions:{3:[2,2],16:[2,1],50:[2,41]},parseError:function(t){throw new Error(t)},parse:function(t){function e(){var t;return t=i.lexer.lex()||1,"number"!=typeof t&&(t=i.symbols_[t]||t),t}var i=this,r=[0],n=[null],o=[],s=this.table,a="",c=0,u=0,l=0;this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var h=this.lexer.yylloc;o.push(h);var p=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var f,d,v,_,g,m,y,b,w,j={};;){if(v=r[r.length-1],this.defaultActions[v]?_=this.defaultActions[v]:((null===f||"undefined"==typeof f)&&(f=e()),_=s[v]&&s[v][f]),"undefined"==typeof _||!_.length||!_[0]){var k="";if(!l){w=[];for(m in s[v])this.terminals_[m]&&m>2&&w.push("'"+this.terminals_[m]+"'");k=this.lexer.showPosition?"Parse error on line "+(c+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==f?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(k,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:h,expected:w})}}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+v+", token: "+f);switch(_[0]){case 1:r.push(f),n.push(this.lexer.yytext),o.push(this.lexer.yylloc),r.push(_[1]),f=null,d?(f=d,d=null):(u=this.lexer.yyleng,a=this.lexer.yytext,c=this.lexer.yylineno,h=this.lexer.yylloc,l>0&&l--);break;case 2:if(y=this.productions_[_[1]][1],j.$=n[n.length-y],j._$={first_line:o[o.length-(y||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(y||1)].first_column,last_column:o[o.length-1].last_column},p&&(j._$.range=[o[o.length-(y||1)].range[0],o[o.length-1].range[1]]),g=this.performAction.call(j,a,u,c,this.yy,_[1],n,o),"undefined"!=typeof g)return g;y&&(r=r.slice(0,-1*y*2),n=n.slice(0,-1*y),o=o.slice(0,-1*y)),r.push(this.productions_[_[1]][0]),n.push(j.$),o.push(j._$),b=s[r[r.length-2]][r[r.length-1]],r.push(b);break;case 3:return!0}}return!0}},r=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this},more:function(){return this._more=!0,this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,i,r,n;this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),s=0;s<o.length&&(i=this._input.match(this.rules[o[s]]),!i||e&&!(i[0].length>e[0].length)||(e=i,r=s,this.options.flex));s++);return e?(n=e[0].match(/(?:\r\n?|\n).*/g),n&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],t=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),t?t:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return"undefined"!=typeof t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};return t.options={},t.performAction=function(t,e,i,r){function n(t,i){return e.yytext=e.yytext.substr(t,e.yyleng-i)}switch(i){case 0:if("\\\\"===e.yytext.slice(-2)?(n(0,1),this.begin("mu")):"\\"===e.yytext.slice(-1)?(n(0,1),this.begin("emu")):this.begin("mu"),e.yytext)return 14;break;case 1:return 14;case 2:return"\\"!==e.yytext.slice(-1)&&this.popState(),"\\"===e.yytext.slice(-1)&&n(0,1),14;case 3:return n(0,4),this.popState(),15;case 4:return 25;case 5:return 16;case 6:return 20;case 7:return 19;case 8:return 19;case 9:return 23;case 10:return 22;case 11:this.popState(),this.begin("com");break;case 12:return n(3,5),this.popState(),15;case 13:return 22;case 14:return 39;case 15:return 38;case 16:return 38;case 17:return 42;case 18:break;case 19:return this.popState(),24;case 20:return this.popState(),18;case 21:return e.yytext=n(1,2).replace(/\\"/g,'"'),32;case 22:return e.yytext=n(1,2).replace(/\\'/g,"'"),32;case 23:return 40;case 24:return 34;case 25:return 34;case 26:return 33;case 27:return 38;case 28:return e.yytext=n(1,2),38;case 29:return"INVALID";case 30:return 5}},t.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s])))/,/^(?:false(?=([~}\s])))/,/^(?:-?[0-9]+(?=([~}\s])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],t.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},INITIAL:{rules:[0,1,30],inclusive:!0}},t}();return i.lexer=r,e.prototype=i,i.Parser=e,new e}();return t=e}(),c=function(t,e){function i(t){return t.constructor===o.ProgramNode?t:(n.yy=o,n.parse(t))}var r={},n=t,o=e;return r.parser=n,r.parse=i,r}(a,s),u=function(t){function e(t){this.value=t}function i(){}var r,n=t.COMPILER_REVISION,o=t.REVISION_CHANGES,s=t.log;i.prototype={nameLookup:function(t,e){var r,n;return 0===t.indexOf("depth")&&(r=!0),n=/^[0-9]+$/.test(e)?t+"["+e+"]":i.isValidJavaScriptVariableName(e)?t+"."+e:t+"['"+e+"']",r?"("+t+" && "+n+")":n},appendToBuffer:function(t){return this.environment.isSimple?"return "+t+";":{appendToBuffer:!0,content:t,toString:function(){return"buffer += "+t+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(t,e,i,r){this.environment=t,this.options=e||{},s("debug",this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!i,this.context=i||{programs:[],environments:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.compileStack=[],this.inlineStack=[],this.compileChildren(t,e);var n,o=t.opcodes;this.i=0;for(var a=o.length;this.i<a;this.i++)n=o[this.i],"DECLARE"===n.opcode?this[n.name]=n.value:this[n.opcode].apply(this,n.args),n.opcode!==this.stripNext&&(this.stripNext=!1);return this.pushSource(""),this.createFunctionContext(r)},preamble:function(){var t=[];if(this.isChild)t.push("");else{var e=this.namespace,i="helpers = this.merge(helpers, "+e+".helpers);";this.environment.usePartial&&(i=i+" partials = this.merge(partials, "+e+".partials);"),this.options.data&&(i+=" data = data || {};"),t.push(i)}t.push(this.environment.isSimple?"":", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=t},createFunctionContext:function(t){var e=this.stackVars.concat(this.registers.list);if(e.length>0&&(this.source[1]=this.source[1]+", "+e.join(", ")),!this.isChild)for(var i in this.context.aliases)this.context.aliases.hasOwnProperty(i)&&(this.source[1]=this.source[1]+", "+i+"="+this.context.aliases[i]);this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.pushSource("return buffer;");for(var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"],a=0,c=this.environment.depths.list.length;c>a;a++)r.push("depth"+this.environment.depths.list[a]);var u=this.mergeSource();if(!this.isChild){var l=n,h=o[l];u="this.compilerInfo = ["+l+",'"+h+"'];\n"+u}if(t)return r.push(u),Function.apply(this,r);var p="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";return s("debug",p+"\n\n"),p},mergeSource:function(){for(var t,e="",i=0,r=this.source.length;r>i;i++){var n=this.source[i];n.appendToBuffer?t=t?t+"\n    + "+n.content:n.content:(t&&(e+="buffer += "+t+";\n  ",t=void 0),e+=n+"\n  ")}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=["depth0"];this.setupParams(0,t),this.replaceStack(function(e){return t.splice(1,0,e),"blockHelperMissing.call("+t.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var t=["depth0"];this.setupParams(0,t);var e=this.topStack();t.splice(1,0,e),t[t.length-1]="options",this.pushSource("if (!"+this.lastHelper+") { "+e+" = blockHelperMissing.call("+t.join(", ")+"); }")},appendContent:function(t){this.pendingContent&&(t=this.pendingContent+t),this.stripNext&&(t=t.replace(/^\s+/,"")),this.pendingContent=t},strip:function(){this.pendingContent&&(this.pendingContent=this.pendingContent.replace(/\s+$/,"")),this.stripNext="strip"},append:function(){this.flushInline();var t=this.popStack();this.pushSource("if("+t+" || "+t+" === 0) { "+this.appendToBuffer(t)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(t){this.lastContext!==t&&(this.lastContext=t)},lookupOnContext:function(t){this.push(this.nameLookup("depth"+this.lastContext,t,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(t){return"typeof "+t+" === functionType ? "+t+".apply(depth0) : "+t})},lookup:function(t){this.replaceStack(function(e){return e+" == null || "+e+" === false ? "+e+" : "+this.nameLookup(e,t,"context")})},lookupData:function(){this.push("data")},pushStringParam:function(t,e){this.pushStackLiteral("depth"+this.lastContext),this.pushString(e),"string"==typeof t?this.pushString(t):this.pushStackLiteral(t)},emptyHash:function(){this.pushStackLiteral("{}"),this.options.stringParams&&(this.register("hashTypes","{}"),this.register("hashContexts","{}"))},pushHash:function(){this.hash={values:[],types:[],contexts:[]}},popHash:function(){var t=this.hash;this.hash=void 0,this.options.stringParams&&(this.register("hashContexts","{"+t.contexts.join(",")+"}"),this.register("hashTypes","{"+t.types.join(",")+"}")),this.push("{\n    "+t.values.join(",\n    ")+"\n  }")},pushString:function(t){this.pushStackLiteral(this.quotedString(t))},push:function(t){return this.inlineStack.push(t),t},pushLiteral:function(t){this.pushStackLiteral(t)},pushProgram:function(t){this.pushStackLiteral(null!=t?this.programExpression(t):null)},invokeHelper:function(t,e){this.context.aliases.helperMissing="helpers.helperMissing";var i=this.lastHelper=this.setupHelper(t,e,!0),r=this.nameLookup("depth"+this.lastContext,e,"context");this.push(i.name+" || "+r),this.replaceStack(function(t){return t+" ? "+t+".call("+i.callParams+") : helperMissing.call("+i.helperMissingParams+")"})},invokeKnownHelper:function(t,e){var i=this.setupHelper(t,e);this.push(i.name+".call("+i.callParams+")")},invokeAmbiguous:function(t,e){this.context.aliases.functionType='"function"',this.pushStackLiteral("{}");var i=this.setupHelper(0,t,e),r=this.lastHelper=this.nameLookup("helpers",t,"helper"),n=this.nameLookup("depth"+this.lastContext,t,"context"),o=this.nextStack();this.pushSource("if ("+o+" = "+r+") { "+o+" = "+o+".call("+i.callParams+"); }"),this.pushSource("else { "+o+" = "+n+"; "+o+" = typeof "+o+" === functionType ? "+o+".call("+i.callParams+") : "+o+"; }")},invokePartial:function(t){var e=[this.nameLookup("partials",t,"partial"),"'"+t+"'",this.popStack(),"helpers","partials"];this.options.data&&e.push("data"),this.context.aliases.self="this",this.push("self.invokePartial("+e.join(", ")+")")},assignToHash:function(t){var e,i,r=this.popStack();this.options.stringParams&&(i=this.popStack(),e=this.popStack());var n=this.hash;e&&n.contexts.push("'"+t+"': "+e),i&&n.types.push("'"+t+"': "+i),n.values.push("'"+t+"': ("+r+")")},compiler:i,compileChildren:function(t,e){for(var i,r,n=t.children,o=0,s=n.length;s>o;o++){i=n[o],r=new this.compiler;var a=this.matchExistingProgram(i);null==a?(this.context.programs.push(""),a=this.context.programs.length,i.index=a,i.name="program"+a,this.context.programs[a]=r.compile(i,e,this.context),this.context.environments[a]=i):(i.index=a,i.name="program"+a)}},matchExistingProgram:function(t){for(var e=0,i=this.context.environments.length;i>e;e++){var r=this.context.environments[e];if(r&&r.equals(t))return e}},programExpression:function(t){if(this.context.aliases.self="this",null==t)return"self.noop";for(var e,i=this.environment.children[t],r=i.depths.list,n=[i.index,i.name,"data"],o=0,s=r.length;s>o;o++)e=r[o],n.push(1===e?"depth0":"depth"+(e-1));return(0===r.length?"self.program(":"self.programWithDepth(")+n.join(", ")+")"},register:function(t,e){this.useRegister(t),this.pushSource(t+" = "+e+";")},useRegister:function(t){this.registers[t]||(this.registers[t]=!0,this.registers.list.push(t))},pushStackLiteral:function(t){return this.push(new e(t))},pushSource:function(t){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),t&&this.source.push(t)},pushStack:function(t){this.flushInline();var e=this.incrStack();return t&&this.pushSource(e+" = "+t+";"),this.compileStack.push(e),e},replaceStack:function(t){var i,r="",n=this.isInline();if(n){var o=this.popStack(!0);if(o instanceof e)i=o.value;else{var s=this.stackSlot?this.topStackName():this.incrStack();r="("+this.push(s)+" = "+o+"),",i=this.topStack()}}else i=this.topStack();var a=t.call(this,i);return n?((this.inlineStack.length||this.compileStack.length)&&this.popStack(),this.push("("+r+a+")")):(/^stack/.test(i)||(i=this.nextStack()),this.pushSource(i+" = ("+r+a+");")),i},nextStack:function(){return this.pushStack()},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var t=this.inlineStack;if(t.length){this.inlineStack=[];for(var i=0,r=t.length;r>i;i++){var n=t[i];n instanceof e?this.compileStack.push(n):this.pushStack(n)}}},isInline:function(){return this.inlineStack.length},popStack:function(t){var i=this.isInline(),r=(i?this.inlineStack:this.compileStack).pop();
return!t&&r instanceof e?r.value:(i||this.stackSlot--,r)},topStack:function(t){var i=this.isInline()?this.inlineStack:this.compileStack,r=i[i.length-1];return!t&&r instanceof e?r.value:r},quotedString:function(t){return'"'+t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(t,e,i){var r=[];this.setupParams(t,r,i);var n=this.nameLookup("helpers",e,"helper");return{params:r,name:n,callParams:["depth0"].concat(r).join(", "),helperMissingParams:i&&["depth0",this.quotedString(e)].concat(r).join(", ")}},setupParams:function(t,e,i){var r,n,o,s=[],a=[],c=[];s.push("hash:"+this.popStack()),n=this.popStack(),o=this.popStack(),(o||n)&&(o||(this.context.aliases.self="this",o="self.noop"),n||(this.context.aliases.self="this",n="self.noop"),s.push("inverse:"+n),s.push("fn:"+o));for(var u=0;t>u;u++)r=this.popStack(),e.push(r),this.options.stringParams&&(c.push(this.popStack()),a.push(this.popStack()));return this.options.stringParams&&(s.push("contexts:["+a.join(",")+"]"),s.push("types:["+c.join(",")+"]"),s.push("hashContexts:hashContexts"),s.push("hashTypes:hashTypes")),this.options.data&&s.push("data:data"),s="{"+s.join(",")+"}",i?(this.register("options",s),e.push("options")):e.push(s),e.join(", ")}};for(var a="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),c=i.RESERVED_WORDS={},u=0,l=a.length;l>u;u++)c[a[u]]=!0;return i.isValidJavaScriptVariableName=function(t){return!i.RESERVED_WORDS[t]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(t)?!0:!1},r=i}(r),l=function(t,e,i,r){function n(){}function o(t,e){if(null==t||"string"!=typeof t&&t.constructor!==h.ProgramNode)throw new c("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+t);e=e||{},"data"in e||(e.data=!0);var i=u(t),r=(new n).compile(i,e);return(new l).compile(r,e)}function s(t,e,i){function r(){var r=u(t),o=(new n).compile(r,e),s=(new l).compile(o,e,void 0,!0);return i.template(s)}if(null==t||"string"!=typeof t&&t.constructor!==h.ProgramNode)throw new c("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+t);e=e||{},"data"in e||(e.data=!0);var o;return function(t,e){return o||(o=r()),o.call(this,t,e)}}var a={},c=t,u=e.parse,l=i,h=r;return a.Compiler=n,n.prototype={compiler:n,disassemble:function(){for(var t,e,i,r=this.opcodes,n=[],o=0,s=r.length;s>o;o++)if(t=r[o],"DECLARE"===t.opcode)n.push("DECLARE "+t.name+"="+t.value);else{e=[];for(var a=0;a<t.args.length;a++)i=t.args[a],"string"==typeof i&&(i='"'+i.replace("\n","\\n")+'"'),e.push(i);n.push(t.opcode+" "+e.join(" "))}return n.join("\n")},equals:function(t){var e=this.opcodes.length;if(t.opcodes.length!==e)return!1;for(var i=0;e>i;i++){var r=this.opcodes[i],n=t.opcodes[i];if(r.opcode!==n.opcode||r.args.length!==n.args.length)return!1;for(var o=0;o<r.args.length;o++)if(r.args[o]!==n.args[o])return!1}if(e=this.children.length,t.children.length!==e)return!1;for(i=0;e>i;i++)if(!this.children[i].equals(t.children[i]))return!1;return!0},guid:0,compile:function(t,e){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=e;var i=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0},i)for(var r in i)this.options.knownHelpers[r]=i[r];return this.accept(t)},accept:function(t){var e,i=t.strip||{};return i.left&&this.opcode("strip"),e=this[t.type](t),i.right&&this.opcode("strip"),e},program:function(t){for(var e=t.statements,i=0,r=e.length;r>i;i++)this.accept(e[i]);return this.isSimple=1===r,this.depths.list=this.depths.list.sort(function(t,e){return t-e}),this},compileProgram:function(t){var e,i=(new this.compiler).compile(t,this.options),r=this.guid++;this.usePartial=this.usePartial||i.usePartial,this.children[r]=i;for(var n=0,o=i.depths.list.length;o>n;n++)e=i.depths.list[n],2>e||this.addDepth(e-1);return r},block:function(t){var e=t.mustache,i=t.program,r=t.inverse;i&&(i=this.compileProgram(i)),r&&(r=this.compileProgram(r));var n=this.classifyMustache(e);"helper"===n?this.helperMustache(e,i,r):"simple"===n?(this.simpleMustache(e),this.opcode("pushProgram",i),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousMustache(e,i,r),this.opcode("pushProgram",i),this.opcode("pushProgram",r),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(t){var e,i,r=t.pairs;this.opcode("pushHash");for(var n=0,o=r.length;o>n;n++)e=r[n],i=e[1],this.options.stringParams?(i.depth&&this.addDepth(i.depth),this.opcode("getContext",i.depth||0),this.opcode("pushStringParam",i.stringModeValue,i.type)):this.accept(i),this.opcode("assignToHash",e[0]);this.opcode("popHash")},partial:function(t){var e=t.partialName;this.usePartial=!0,t.context?this.ID(t.context):this.opcode("push","depth0"),this.opcode("invokePartial",e.name),this.opcode("append")},content:function(t){this.opcode("appendContent",t.string)},mustache:function(t){var e=this.options,i=this.classifyMustache(t);"simple"===i?this.simpleMustache(t):"helper"===i?this.helperMustache(t):this.ambiguousMustache(t),this.opcode(t.escaped&&!e.noEscape?"appendEscaped":"append")},ambiguousMustache:function(t,e,i){var r=t.id,n=r.parts[0],o=null!=e||null!=i;this.opcode("getContext",r.depth),this.opcode("pushProgram",e),this.opcode("pushProgram",i),this.opcode("invokeAmbiguous",n,o)},simpleMustache:function(t){var e=t.id;"DATA"===e.type?this.DATA(e):e.parts.length?this.ID(e):(this.addDepth(e.depth),this.opcode("getContext",e.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperMustache:function(t,e,i){var r=this.setupFullMustacheParams(t,e,i),n=t.id.parts[0];if(this.options.knownHelpers[n])this.opcode("invokeKnownHelper",r.length,n);else{if(this.options.knownHelpersOnly)throw new Error("You specified knownHelpersOnly, but used the unknown helper "+n);this.opcode("invokeHelper",r.length,n)}},ID:function(t){this.addDepth(t.depth),this.opcode("getContext",t.depth);var e=t.parts[0];e?this.opcode("lookupOnContext",t.parts[0]):this.opcode("pushContext");for(var i=1,r=t.parts.length;r>i;i++)this.opcode("lookup",t.parts[i])},DATA:function(t){if(this.options.data=!0,t.id.isScoped||t.id.depth)throw new c("Scoped data references are not supported: "+t.original);this.opcode("lookupData");for(var e=t.id.parts,i=0,r=e.length;r>i;i++)this.opcode("lookup",e[i])},STRING:function(t){this.opcode("pushString",t.string)},INTEGER:function(t){this.opcode("pushLiteral",t.integer)},BOOLEAN:function(t){this.opcode("pushLiteral",t.bool)},comment:function(){},opcode:function(t){this.opcodes.push({opcode:t,args:[].slice.call(arguments,1)})},declare:function(t,e){this.opcodes.push({opcode:"DECLARE",name:t,value:e})},addDepth:function(t){if(isNaN(t))throw new Error("EWOT");0!==t&&(this.depths[t]||(this.depths[t]=!0,this.depths.list.push(t)))},classifyMustache:function(t){var e=t.isHelper,i=t.eligibleHelper,r=this.options;if(i&&!e){var n=t.id.parts[0];r.knownHelpers[n]?e=!0:r.knownHelpersOnly&&(i=!1)}return e?"helper":i?"ambiguous":"simple"},pushParams:function(t){for(var e,i=t.length;i--;)e=t[i],this.options.stringParams?(e.depth&&this.addDepth(e.depth),this.opcode("getContext",e.depth||0),this.opcode("pushStringParam",e.stringModeValue,e.type)):this[e.type](e)},setupMustacheParams:function(t){var e=t.params;return this.pushParams(e),t.hash?this.hash(t.hash):this.opcode("emptyHash"),e},setupFullMustacheParams:function(t,e,i){var r=t.params;return this.pushParams(r),this.opcode("pushProgram",e),this.opcode("pushProgram",i),t.hash?this.hash(t.hash):this.opcode("emptyHash"),r}},a.precompile=o,a.compile=s,a}(i,c,u,s),h=function(t,e,i,r,n){var o,s=t,a=e,c=i.parser,u=i.parse,l=r.Compiler,h=r.compile,p=r.precompile,f=n,d=s.create,v=function(){var t=d();return t.compile=function(e,i){return h(e,i,t)},t.precompile=p,t.AST=a,t.Compiler=l,t.JavaScriptCompiler=f,t.Parser=c,t.parse=u,t};return s=v(),s.create=v,o=s}(o,s,c,l,u);return h}();return t}),!function(t){"object"==typeof exports?module.exports=t():"function"==typeof SCAFFI1IZYM13.define&&SCAFFI1IZYM13.define.amd?SCAFFI1IZYM13.define("bluebird",t):"undefined"!=typeof window?window.Promise=t():"undefined"!=typeof global?global.Promise=t():"undefined"!=typeof self&&(self.Promise=t())}(function(){var t,e,i;return function r(t,e,i){function n(s,a){if(!e[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=e[s]={exports:{}};t[s][0].call(u.exports,function(e){var i=t[s][1][e];return n(i?i:e)},u,u.exports,r,t,e,i)}return e[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}({1:[function(t,e){e.exports=function(t){function e(t){var e=new i(t),r=e.promise();return r.isRejected()?r:(e.setHowMany(1),e.setUnwrap(),e.init(),r)}var i=t._SomePromiseArray;t.any=function(t){return e(t)},t.prototype.any=function(){return e(this)}}},{}],2:[function(t,e){function i(){this._isTickUsed=!1,this._schedule=r,this._length=0,this._lateBuffer=new n(16),this._functionBuffer=new n(65536);var t=this;this.consumeFunctionBuffer=function(){t._consumeFunctionBuffer()}}var r=t("./schedule.js"),n=t("./queue.js"),o=t("./util.js").errorObj,s=t("./util.js").tryCatch1,a="undefined"!=typeof process?process:void 0;i.prototype.haveItemsQueued=function(){return this._length>0},i.prototype.invokeLater=function(t,e,i){void 0===a||null==a.domain||t.domain||(t=a.domain.bind(t)),this._lateBuffer.push(t,e,i),this._queueTick()},i.prototype.invoke=function(t,e,i){void 0===a||null==a.domain||t.domain||(t=a.domain.bind(t));var r=this._functionBuffer;r.push(t,e,i),this._length=r.length(),this._queueTick()},i.prototype._consumeFunctionBuffer=function(){for(var t=this._functionBuffer;t.length()>0;){var e=t.shift(),i=t.shift(),r=t.shift();e.call(i,r)}this._reset(),this._consumeLateBuffer()},i.prototype._consumeLateBuffer=function(){for(var t=this._lateBuffer;t.length()>0;){var e=t.shift(),i=t.shift(),r=t.shift(),n=s(e,i,r);if(n===o){if(this._queueTick(),null==e.domain)throw n.e;e.domain.emit("error",n.e)}}},i.prototype._queueTick=function(){this._isTickUsed||(this._schedule(this.consumeFunctionBuffer),this._isTickUsed=!0)},i.prototype._reset=function(){this._isTickUsed=!1,this._length=0},e.exports=new i},{"./queue.js":25,"./schedule.js":28,"./util.js":35}],3:[function(t,e){var i=t("./promise.js")();e.exports=i},{"./promise.js":20}],4:[function(t,e){var i=Object.create,r=i&&i(null),n=i&&i(null);r[" size"]=n[" size"]=0,e.exports=function(e){function i(t){return new Function("obj","                                             \n        'use strict'                                                         \n        var len = this.length;                                               \n        switch(len) {                                                        \n            case 1: return obj.methodName(this[0]);                          \n            case 2: return obj.methodName(this[0], this[1]);                 \n            case 3: return obj.methodName(this[0], this[1], this[2]);        \n            case 0: return obj.methodName();                                 \n            default: return obj.methodName.apply(obj, this);                 \n        }                                                                    \n        ".replace(/methodName/g,t))}function o(t){return new Function("obj","                                             \n                                                                \n        return obj.propertyName;                                             \n        ".replace("propertyName",t))}function s(t,e,i){var r=i[t];if("function"!=typeof r){if(!d(t))return null;if(r=e(t),i[t]=r,i[" size"]++,i[" size"]>512){for(var n=Object.keys(i),o=0;256>o;++o)delete i[n[o]];i[" size"]=n.length-256}}return r}function a(t){return s(t,i,r)}function c(t){return s(t,o,n)}function u(t){return t[this.pop()].apply(t,this)}function l(t){return t[this]}function h(t){return t[this]}var p=t("./util.js"),f=p.canEvaluate,d=p.isIdentifier;e.prototype.call=function(t){for(var e=arguments.length,i=new Array(e-1),r=1;e>r;++r)i[r-1]=arguments[r];if(f){var n=a(t);if(null!==n)return this._then(n,void 0,void 0,i,void 0)}return i.push(t),this._then(u,void 0,void 0,i,void 0)},e.prototype.get=function(t){var e,i="number"==typeof t;if(i)e=h;else if(f){var r=c(t);e=null!==r?r:l}else e=l;return this._then(e,void 0,void 0,t,void 0)}}},{"./util.js":35}],5:[function(t,e){e.exports=function(e,i){var r=t("./errors.js"),n=r.canAttach,o=t("./async.js"),s=r.CancellationError;e.prototype._cancel=function(t){if(!this.isCancellable())return this;for(var e,i=this;void 0!==(e=i._cancellationParent)&&e.isCancellable();)i=e;i._attachExtraTrace(t),i._rejectUnchecked(t)},e.prototype.cancel=function(t){return this.isCancellable()?(t=void 0!==t?n(t)?t:new Error(t+""):new s,o.invokeLater(this._cancel,this,t),this):this},e.prototype.cancellable=function(){return this._cancellable()?this:(this._setCancellable(),this._cancellationParent=void 0,this)},e.prototype.uncancellable=function(){var t=new e(i);return t._propagateFrom(this,6),t._follow(this),t._unsetCancellable(),t},e.prototype.fork=function(t,e,i){var r=this._then(t,e,i,void 0,void 0);return r._setCancellable(),r._cancellationParent=void 0,r}}},{"./async.js":2,"./errors.js":10}],6:[function(t,e){e.exports=function(){function e(t){var e;if("function"==typeof t)e="[function "+(t.name||"anonymous")+"]";else{e=t.toString();var r=/\[object [a-zA-Z0-9$_]+\]/;if(r.test(e))try{var n=JSON.stringify(t);e=n}catch(o){}0===e.length&&(e="(empty array)")}return"(<"+i(e)+">, no stack trace)"}function i(t){var e=41;return t.length<e?t:t.substr(0,e-3)+"..."}function r(t,e){this.captureStackTrace(r,e)}var n=t("./util.js").inherits,o=t("./es5.js").defineProperty,s=new RegExp("\\b(?:[a-zA-Z0-9.]+\\$_\\w+|tryCatch(?:1|2|3|4|Apply)|new \\w*PromiseArray|\\w*PromiseArray\\.\\w*PromiseArray|setTimeout|CatchFilter\\$_\\w+|makeNodePromisified|processImmediate|process._tickCallback|nextTick|Async\\$\\w+)\\b"),a=null,c=null;n(r,Error),r.prototype.captureStackTrace=function(t,e){u(this,t,e)},r.possiblyUnhandledRejection=function(t){if("object"==typeof console){var e;if("object"==typeof t||"function"==typeof t){var i=t.stack;e="Possibly unhandled "+c(i,t)}else e="Possibly unhandled "+String(t);"function"==typeof console.error||"object"==typeof console.error?console.error(e):("function"==typeof console.log||"object"==typeof console.log)&&console.log(e)}},r.combine=function(t,e){for(var i=t.length-1,r=e.length-1;r>=0;--r){var n=e[r];if(t[i]!==n)break;t.pop(),i--}t.push("From previous event:");for(var o=t.concat(e),c=[],r=0,u=o.length;u>r;++r)s.test(o[r])||r>0&&!a.test(o[r])&&"From previous event:"!==o[r]||c.push(o[r]);return c},r.isSupported=function(){return"function"==typeof u};var u=function l(){if("number"==typeof Error.stackTraceLimit&&"function"==typeof Error.captureStackTrace){a=/^\s*at\s*/,c=function(t,i){return"string"==typeof t?t:void 0!==i.name&&void 0!==i.message?i.name+". "+i.message:e(i)};var t=Error.captureStackTrace;return function(e,i){t(e,i)}}var i=new Error;if("string"==typeof i.stack&&"function"==typeof"".startsWith&&i.stack.startsWith("stackDetection@")&&"stackDetection"===l.name){o(Error,"stackTraceLimit",{writable:!0,enumerable:!1,configurable:!1,value:25}),a=/@/;var r=/[@\n]/;return c=function(t,i){return"string"==typeof t?i.name+". "+i.message+"\n"+t:void 0!==i.name&&void 0!==i.message?i.name+". "+i.message:e(i)},function(t){for(var e=(new Error).stack,i=e.split(r),n=i.length,o="",s=0;n>s;s+=2)o+=i[s],o+="@",o+=i[s+1],o+="\n";t.stack=o}}return c=function(t,i){return"string"==typeof t?t:"object"!=typeof i&&"function"!=typeof i||void 0===i.name||void 0===i.message?e(i):i.name+". "+i.message},null}();return r}},{"./es5.js":12,"./util.js":35}],7:[function(t,e){e.exports=function(e){function i(t,e,i){this._instances=t,this._callback=e,this._promise=i}function r(t,e){var i={},r=s(t,i,e);if(r===a)return r;var n=c(i);return n.length?(a.e=new u("Catch filter must inherit from Error or be a simple predicate function"),a):r}var n=t("./util.js"),o=t("./errors.js"),s=n.tryCatch1,a=n.errorObj,c=t("./es5.js").keys,u=o.TypeError;return i.prototype.doFilter=function(t){for(var i=this._callback,n=this._promise,c=n._boundTo,u=0,l=this._instances.length;l>u;++u){var h=this._instances[u],p=h===Error||null!=h&&h.prototype instanceof Error;if(p&&t instanceof h){var f=s(i,c,t);return f===a?(e.e=f.e,e):f}if("function"==typeof h&&!p){var d=r(h,t);if(d===a){var v=o.canAttach(a.e)?a.e:new Error(a.e+"");this._promise._attachExtraTrace(v),t=a.e;break}if(d){var f=s(i,c,t);return f===a?(e.e=f.e,e):f}}}return e.e=t,e},i}},{"./errors.js":10,"./es5.js":12,"./util.js":35}],8:[function(t,e){var i=t("./util.js"),r=i.isPrimitive,n=i.wrapsPrimitiveReceiver;e.exports=function(t){var e=function(){return this},i=function(){throw this},o=function(t,e){return 1===e?function(){throw t}:2===e?function(){return t}:void 0};t.prototype["return"]=t.prototype.thenReturn=function(t){return n&&r(t)?this._then(o(t,2),void 0,void 0,void 0,void 0):this._then(e,void 0,void 0,t,void 0)},t.prototype["throw"]=t.prototype.thenThrow=function(t){return n&&r(t)?this._then(o(t,1),void 0,void 0,void 0,void 0):this._then(i,void 0,void 0,t,void 0)}}},{"./util.js":35}],9:[function(t,e){e.exports=function(t,e){var i=t.reduce;t.prototype.each=function(t){return i(this,t,null,e)},t.each=function(t,r){return i(t,r,null,e)}}},{}],10:[function(t,e){function i(t){try{f(t,"isOperational",!0)}catch(e){}}function r(t){return null==t?!1:t instanceof a||t.isOperational===!0}function n(t){return t instanceof Error}function o(t){return n(t)}function s(t,e){function i(r){return this instanceof i?(this.message="string"==typeof r?r:e,this.name=t,void(Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor))):new i(r)}return p(i,Error),i}function a(t){this.name="OperationalError",this.message=t,this.cause=t,this.isOperational=!0,t instanceof Error?(this.message=t.message,this.stack=t.stack):Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}var c,u,l=t("./es5.js").freeze,h=t("./util.js"),p=h.inherits,f=h.notEnumerableProp,d=s("CancellationError","cancellation error"),v=s("TimeoutError","timeout error"),_=s("AggregateError","aggregate error");try{c=TypeError,u=RangeError}catch(g){c=s("TypeError","type error"),u=s("RangeError","range error")}for(var m="join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "),y=0;y<m.length;++y)"function"==typeof Array.prototype[m[y]]&&(_.prototype[m[y]]=Array.prototype[m[y]]);_.prototype.length=0,_.prototype.isOperational=!0;var b=0;_.prototype.toString=function(){var t=Array(4*b+1).join(" "),e="\n"+t+"AggregateError of:\n";b++,t=Array(4*b+1).join(" ");for(var i=0;i<this.length;++i){for(var r=this[i]===this?"[Circular AggregateError]":this[i]+"",n=r.split("\n"),o=0;o<n.length;++o)n[o]=t+n[o];r=n.join("\n"),e+=r+"\n"}return b--,e},p(a,Error);var w="__BluebirdErrorTypes__",j=Error[w];j||(j=l({CancellationError:d,TimeoutError:v,OperationalError:a,RejectionError:a,AggregateError:_}),f(Error,w,j)),e.exports={Error:Error,TypeError:c,RangeError:u,CancellationError:j.CancellationError,OperationalError:j.OperationalError,TimeoutError:j.TimeoutError,AggregateError:j.AggregateError,originatesFromRejection:r,markAsOriginatingFromRejection:i,canAttach:o}},{"./es5.js":12,"./util.js":35}],11:[function(t,e){e.exports=function(e){function i(t){var i=new r(t),n=e.rejected(i),o=n._peekContext();return null!=o&&o._attachExtraTrace(i),n}var r=t("./errors.js").TypeError;return i}},{"./errors.js":10}],12:[function(t,e){var i=function(){return void 0===this}();if(i)e.exports={freeze:Object.freeze,defineProperty:Object.defineProperty,keys:Object.keys,getPrototypeOf:Object.getPrototypeOf,isArray:Array.isArray,isES5:i};else{var r={}.hasOwnProperty,n={}.toString,o={}.constructor.prototype,s=function(t){var e=[];for(var i in t)r.call(t,i)&&e.push(i);return e},a=function(t,e,i){return t[e]=i.value,t},c=function(t){return t},u=function(t){try{return Object(t).constructor.prototype}catch(e){return o}},l=function(t){try{return"[object Array]"===n.call(t)}catch(e){return!1}};e.exports={isArray:l,keys:s,defineProperty:a,freeze:c,getPrototypeOf:u,isES5:i}}},{}],13:[function(t,e){e.exports=function(t,e){var i=t.map;t.prototype.filter=function(t,r){return i(this,t,r,e)},t.filter=function(t,r,n){return i(t,r,n,e)}}},{}],14:[function(t,e){e.exports=function(e,i,r){function n(){return this}function o(){throw this}function s(t){return function(){return t}}function a(t){return function(){throw t}}function c(t,e,i){var r;return r=p&&f(e)?i?s(e):a(e):i?n:o,t._then(r,d,void 0,e,void 0)}function u(t){var n=this.promise,o=this.handler,s=n._isBound()?o.call(n._boundTo):o();if(void 0!==s){var a=r(s,void 0);if(a instanceof e)return c(a,t,n.isFulfilled())}return n.isRejected()?(i.e=t,i):t}function l(t){var i=this.promise,n=this.handler,o=i._isBound()?n.call(i._boundTo,t):n(t);if(void 0!==o){var s=r(o,void 0);if(s instanceof e)return c(s,t,!0)}return t}var h=t("./util.js"),p=h.wrapsPrimitiveReceiver,f=h.isPrimitive,d=h.thrower;e.prototype._passThroughHandler=function(t,e){if("function"!=typeof t)return this.then();var i={promise:this,handler:t};return this._then(e?u:l,e?u:void 0,void 0,i,void 0)},e.prototype.lastly=e.prototype["finally"]=function(t){return this._passThroughHandler(t,!0)},e.prototype.tap=function(t){return this._passThroughHandler(t,!1)}}},{"./util.js":35}],15:[function(t,e){e.exports=function(e,i,r,n){function o(t,i){for(var r=h,s=e,a=i.length,c=0;a>c;++c){var u=p(i[c],void 0,t);if(u===r)return s.reject(r.e);var l=n(u,o);if(l instanceof s)return l}return null}function s(t,i,n){var o=this._promise=new e(r);o._setTrace(void 0),this._generatorFunction=t,this._receiver=i,this._generator=void 0,this._yieldHandlers="function"==typeof n?[n].concat(f):f}var a=t("./errors.js"),c=a.TypeError,u=t("./util.js").deprecated,l=t("./util.js"),h=l.errorObj,p=l.tryCatch1,f=[];s.prototype.promise=function(){return this._promise},s.prototype._run=function(){this._generator=this._generatorFunction.call(this._receiver),this._receiver=this._generatorFunction=void 0,this._next(void 0)},s.prototype._continue=function(t){if(t===h){this._generator=void 0;var i=a.canAttach(t.e)?t.e:new Error(t.e+"");return this._promise._attachExtraTrace(i),void this._promise._reject(t.e,i)}var r=t.value;if(t.done===!0)this._generator=void 0,this._promise._tryFollow(r)||this._promise._fulfill(r);else{var s=n(r,void 0);if(!(s instanceof e)&&(s=o(s,this._yieldHandlers),null===s))return void this._throw(new c("A value was yielded that could not be treated as a promise"));s._then(this._next,this._throw,void 0,this,null)}},s.prototype._throw=function(t){a.canAttach(t)&&this._promise._attachExtraTrace(t),this._continue(p(this._generator["throw"],this._generator,t))},s.prototype._next=function(t){this._continue(p(this._generator.next,this._generator,t))},e.coroutine=function(t,e){if("function"!=typeof t)throw new c("generatorFunction must be a function");var i=Object(e).yieldHandler,r=s;return function(){var e=t.apply(this,arguments),n=new r(void 0,void 0,i);return n._generator=e,n._next(void 0),n.promise()}},e.coroutine.addYieldHandler=function(t){if("function"!=typeof t)throw new c("fn must be a function");f.push(t)},e.spawn=function(t){if(u("Promise.spawn is deprecated. Use Promise.coroutine instead."),"function"!=typeof t)return i("generatorFunction must be a function");var r=new s(t,this),n=r.promise();return r._run(e.spawn),n}}},{"./errors.js":10,"./util.js":35}],16:[function(t,e){e.exports=function(e,i,r,n){var o=t("./util.js"),s=o.canEvaluate,a=o.tryCatch1,c=o.errorObj;if(s){for(var u=function(t){return new Function("value","holder","                             \n                                                                \n            holder.pIndex = value;                                           \n            holder.checkFulfillment(this);                                   \n            ".replace(/Index/g,t))},l=function(t){for(var e=[],i=1;t>=i;++i)e.push("holder.p"+i);return new Function("holder","                                      \n                                                                \n            var callback = holder.fn;                                        \n            return callback(values);                                         \n            ".replace(/values/g,e.join(", ")))},h=[],p=[void 0],f=1;5>=f;++f)h.push(u(f)),p.push(l(f));var d=function(t,e){this.p1=this.p2=this.p3=this.p4=this.p5=null,this.fn=e,this.total=t,this.now=0};d.prototype.callers=p,d.prototype.checkFulfillment=function(t){var e=this.now;e++;var i=this.total;if(e>=i){var r=this.callers[i],n=a(r,void 0,this);n===c?t._rejectUnchecked(n.e):t._tryFollow(n)||t._fulfillUnchecked(n)}else this.now=e}}e.join=function(){var t,o=arguments.length-1;if(o>0&&"function"==typeof arguments[o]&&(t=arguments[o],6>o&&s)){var a=new e(n);a._setTrace(void 0);for(var c=new d(o,t),u=a._reject,l=h,p=0;o>p;++p){var f=r(arguments[p],void 0);f instanceof e?f.isPending()?f._then(l[p],u,void 0,a,c):f.isFulfilled()?l[p].call(a,f._settledValue,c):(a._reject(f._settledValue),f._unsetRejectionIsUnhandled()):l[p].call(a,f,c)}return a}for(var v=arguments.length,_=new Array(v),g=0;v>g;++g)_[g]=arguments[g];var a=new i(_).promise();return void 0!==t?a.spread(t):a}}},{"./util.js":35}],17:[function(t,e){e.exports=function(e,i,r,n,o){function s(t,e,i,r){this.constructor$(t),this._callback=e,this._preservedValues=r===o?new Array(this.length()):null,this._limit=i,this._inFlight=0,this._queue=i>=1?[]:p,this._init$(void 0,-2)}function a(t,e,i,r){var n="object"==typeof i&&null!==i?i.concurrency:0;return n="number"==typeof n&&isFinite(n)&&n>=1?n:0,new s(t,e,n,r)}var c=t("./util.js"),u=c.tryCatch3,l=c.errorObj,h={},p=[];c.inherits(s,i),s.prototype._init=function(){},s.prototype._promiseFulfilled=function(t,i){var r=this._values;if(null!==r){var o=this.length(),s=this._preservedValues,a=this._limit;if(r[i]===h){if(r[i]=t,a>=1&&(this._inFlight--,this._drainQueue(),this._isResolved()))return}else{if(a>=1&&this._inFlight>=a)return r[i]=t,void this._queue.push(i);null!==s&&(s[i]=t);var c=this._callback,p=this._promise._boundTo,f=u(c,p,t,i,o);if(f===l)return this._reject(f.e);var d=n(f,void 0);if(d instanceof e){if(d.isPending())return a>=1&&this._inFlight++,r[i]=h,d._proxyPromiseArray(this,i);if(!d.isFulfilled())return d._unsetRejectionIsUnhandled(),this._reject(d.reason());f=d.value()}r[i]=f}var v=++this._totalResolved;v>=o&&(null!==s?this._filter(r,s):this._resolve(r))}},s.prototype._drainQueue=function(){for(var t=this._queue,e=this._limit,i=this._values;t.length>0&&this._inFlight<e;){var r=t.pop();this._promiseFulfilled(i[r],r)}},s.prototype._filter=function(t,e){for(var i=e.length,r=new Array(i),n=0,o=0;i>o;++o)t[o]&&(r[n++]=e[o]);r.length=n,this._resolve(r)},s.prototype.preservedValues=function(){return this._preservedValues},e.prototype.map=function(t,e){return"function"!=typeof t?r("fn must be a function"):a(this,t,e,null).promise()},e.map=function(t,e,i,n){return"function"!=typeof e?r("fn must be a function"):a(t,e,i,n).promise()}}},{"./util.js":35}],18:[function(t,e){e.exports=function(e){function i(t){throw t}function r(t,e){if(!s.isArray(t))return n(t,e);var r=s.tryCatchApply(this,[null].concat(t),e);r===l&&a.invokeLater(i,void 0,r.e)}function n(t,e){var r=this,n=void 0===t?u(r,e,null):c(r,e,null,t);n===l&&a.invokeLater(i,void 0,n.e)}function o(t,e){var r=this,n=u(r,e,t);n===l&&a.invokeLater(i,void 0,n.e)}var s=t("./util.js"),a=t("./async.js"),c=s.tryCatch2,u=s.tryCatch1,l=s.errorObj;e.prototype.nodeify=function(t,e){if("function"==typeof t){var i=n;void 0!==e&&Object(e).spread&&(i=r),this._then(i,o,void 0,t,this._boundTo)}return this}}},{"./async.js":2,"./util.js":35}],19:[function(t,e){e.exports=function(e,i){var r=t("./util.js"),n=t("./async.js"),o=t("./errors.js"),s=r.tryCatch1,a=r.errorObj;e.prototype.progressed=function(t){return this._then(void 0,void 0,t,void 0,void 0)},e.prototype._progress=function(t){this._isFollowingOrFulfilledOrRejected()||this._progressUnchecked(t)},e.prototype._progressHandlerAt=function(t){return 0===t?this._progressHandler0:this[(t<<2)+t-5+2]},e.prototype._doProgressWith=function(t){var i=t.value,r=t.handler,n=t.promise,c=t.receiver,u=s(r,c,i);if(u===a){if(null!=u.e&&"StopProgressPropagation"!==u.e.name){var l=o.canAttach(u.e)?u.e:new Error(u.e+"");n._attachExtraTrace(l),n._progress(u.e)}}else u instanceof e?u._then(n._progress,null,null,n,void 0):n._progress(u)},e.prototype._progressUnchecked=function(t){if(this.isPending())for(var r=this._length(),o=this._progress,s=0;r>s;s++){var a=this._progressHandlerAt(s),c=this._promiseAt(s);if(c instanceof e)"function"==typeof a?n.invoke(this._doProgressWith,this,{handler:a,promise:c,receiver:this._receiverAt(s),value:t}):n.invoke(o,c,t);else{var u=this._receiverAt(s);"function"==typeof a?a.call(u,t,c):u instanceof e&&u._isProxied()?u._progressUnchecked(t):u instanceof i&&u._promiseProgressed(t,c)}}}}},{"./async.js":2,"./errors.js":10,"./util.js":35}],20:[function(t,e){function i(t){try{Promise===t&&(Promise=r)}catch(e){}return t}var r;"undefined"!=typeof Promise&&(r=Promise),e.exports=function(){function e(t){if("function"!=typeof t)throw new b("the promise constructor requires a resolver function");if(this.constructor!==e)throw new b("the promise constructor cannot be invoked directly");this._bitField=0,this._fulfillmentHandler0=void 0,this._rejectionHandler0=void 0,this._promise0=void 0,this._receiver0=void 0,this._settledValue=void 0,this._boundTo=void 0,t!==s&&this._resolveFromResolver(t)}var r=t("./util.js"),n=t("./async.js"),o=t("./errors.js"),s=function(){},a={},c={e:null},u=t("./thenables.js")(e,s),l=t("./promise_array.js")(e,s,u),h=t("./captured_trace.js")(),p=t("./catch_filter.js")(c),f=t("./promise_resolver.js"),d=r.isArray,v=r.errorObj,_=r.tryCatch1,g=r.tryCatch2,m=r.tryCatchApply,y=o.RangeError,b=o.TypeError,w=o.CancellationError,j=o.TimeoutError,k=o.OperationalError,x=o.originatesFromRejection,E=o.markAsOriginatingFromRejection,S=o.canAttach,P=r.thrower,F=t("./errors_api_rejection")(e),C=function(){return new b("circular promise resolution chain")};e.prototype.bind=function(t){var i=new e(s);return i._follow(this),i._propagateFrom(this,3),i._setBoundTo(t),i},e.prototype.toString=function(){return"[object Promise]"},e.prototype.caught=e.prototype["catch"]=function(t){var e=arguments.length;if(e>1){var i,r=new Array(e-1),o=0;for(i=0;e-1>i;++i){var s=arguments[i];if("function"!=typeof s){var a=new b("A catch filter must be an error constructor or a filter function");return this._attachExtraTrace(a),void n.invoke(this._reject,this,a)}r[o++]=s}r.length=o,t=arguments[i],this._resetTrace();var c=new p(r,t,this);return this._then(void 0,c.doFilter,void 0,c,void 0)}return this._then(void 0,t,void 0,void 0,void 0)},e.prototype.then=function(t,e,i){return this._then(t,e,i,void 0,void 0)},e.prototype.done=function(t,e,i){var r=this._then(t,e,i,void 0,void 0);r._setIsFinal()},e.prototype.spread=function(t,e){return this._then(t,e,void 0,a,void 0)},e.prototype.isCancellable=function(){return!this.isResolved()&&this._cancellable()},e.prototype.toJSON=function(){var t={isFulfilled:!1,isRejected:!1,fulfillmentValue:void 0,rejectionReason:void 0};return this.isFulfilled()?(t.fulfillmentValue=this._settledValue,t.isFulfilled=!0):this.isRejected()&&(t.rejectionReason=this._settledValue,t.isRejected=!0),t
},e.prototype.all=function(){return new l(this).promise()},e.is=function(t){return t instanceof e},e.all=function(t){return new l(t).promise()},e.prototype.error=function(t){return this.caught(x,t)},e.prototype._resolveFromSyncValue=function(t){if(t===v)this._cleanValues(),this._setRejected(),this._settledValue=t.e,this._ensurePossibleRejectionHandled();else{var i=u(t,void 0);i instanceof e?this._follow(i):(this._cleanValues(),this._setFulfilled(),this._settledValue=t)}},e.method=function(t){if("function"!=typeof t)throw new b("fn must be a function");return function(){var i;switch(arguments.length){case 0:i=_(t,this,void 0);break;case 1:i=_(t,this,arguments[0]);break;case 2:i=g(t,this,arguments[0],arguments[1]);break;default:for(var r=arguments.length,n=new Array(r),o=0;r>o;++o)n[o]=arguments[o];i=m(t,n,this)}var a=new e(s);return a._setTrace(void 0),a._resolveFromSyncValue(i),a}},e.attempt=e["try"]=function(t,i,r){if("function"!=typeof t)return F("fn must be a function");var n=d(i)?m(t,i,r):_(t,r,i),o=new e(s);return o._setTrace(void 0),o._resolveFromSyncValue(n),o},e.defer=e.pending=function(){var t=new e(s);return t._setTrace(void 0),new f(t)},e.bind=function(t){var i=new e(s);return i._setTrace(void 0),i._setFulfilled(),i._setBoundTo(t),i},e.cast=function(t){var i=u(t,void 0);if(!(i instanceof e)){var r=i;i=new e(s),i._setTrace(void 0),i._setFulfilled(),i._cleanValues(),i._settledValue=r}return i},e.resolve=e.fulfilled=e.cast,e.reject=e.rejected=function(t){var i=new e(s);if(i._setTrace(void 0),E(t),i._cleanValues(),i._setRejected(),i._settledValue=t,!S(t)){var r=new Error(t+"");i._setCarriedStackTrace(r)}return i._ensurePossibleRejectionHandled(),i},e.onPossiblyUnhandledRejection=function(t){h.possiblyUnhandledRejection="function"==typeof t?t:void 0};var A;e.onUnhandledRejectionHandled=function(t){A="function"==typeof t?t:void 0};var T=!1||!("undefined"==typeof process||"string"!=typeof process.execPath||"object"!=typeof process.env||!process.env.BLUEBIRD_DEBUG&&"development"!==process.env.NODE_ENV);e.longStackTraces=function(){if(n.haveItemsQueued()&&T===!1)throw new Error("cannot enable long stack traces after promises have been created");T=h.isSupported()},e.hasLongStackTraces=function(){return T&&h.isSupported()},e.prototype._then=function(t,i,r,o,a){var c=void 0!==a,u=c?a:new e(s);if(!c){if(T){var l=this._peekContext()===this._traceParent;u._traceParent=l?this._traceParent:this}u._propagateFrom(this,7)}var h=this._addCallbacks(t,i,r,u,o);return this.isResolved()&&n.invoke(this._queueSettleAt,this,h),u},e.prototype._length=function(){return 262143&this._bitField},e.prototype._isFollowingOrFulfilledOrRejected=function(){return(939524096&this._bitField)>0},e.prototype._isFollowing=function(){return 536870912===(536870912&this._bitField)},e.prototype._setLength=function(t){this._bitField=-262144&this._bitField|262143&t},e.prototype._setFulfilled=function(){this._bitField=268435456|this._bitField},e.prototype._setRejected=function(){this._bitField=134217728|this._bitField},e.prototype._setFollowing=function(){this._bitField=536870912|this._bitField},e.prototype._setIsFinal=function(){this._bitField=33554432|this._bitField},e.prototype._isFinal=function(){return(33554432&this._bitField)>0},e.prototype._cancellable=function(){return(67108864&this._bitField)>0},e.prototype._setCancellable=function(){this._bitField=67108864|this._bitField},e.prototype._unsetCancellable=function(){this._bitField=-67108865&this._bitField},e.prototype._setRejectionIsUnhandled=function(){this._bitField=2097152|this._bitField},e.prototype._unsetRejectionIsUnhandled=function(){this._bitField=-2097153&this._bitField,this._isUnhandledRejectionNotified()&&(this._unsetUnhandledRejectionIsNotified(),this._notifyUnhandledRejectionIsHandled())},e.prototype._isRejectionUnhandled=function(){return(2097152&this._bitField)>0},e.prototype._setUnhandledRejectionIsNotified=function(){this._bitField=524288|this._bitField},e.prototype._unsetUnhandledRejectionIsNotified=function(){this._bitField=-524289&this._bitField},e.prototype._isUnhandledRejectionNotified=function(){return(524288&this._bitField)>0},e.prototype._setCarriedStackTrace=function(t){this._bitField=1048576|this._bitField,this._fulfillmentHandler0=t},e.prototype._unsetCarriedStackTrace=function(){this._bitField=-1048577&this._bitField,this._fulfillmentHandler0=void 0},e.prototype._isCarryingStackTrace=function(){return(1048576&this._bitField)>0},e.prototype._getCarriedStackTrace=function(){return this._isCarryingStackTrace()?this._fulfillmentHandler0:void 0},e.prototype._receiverAt=function(t){var e=0===t?this._receiver0:this[(t<<2)+t-5+4];return this._isBound()&&void 0===e?this._boundTo:e},e.prototype._promiseAt=function(t){return 0===t?this._promise0:this[(t<<2)+t-5+3]},e.prototype._fulfillmentHandlerAt=function(t){return 0===t?this._fulfillmentHandler0:this[(t<<2)+t-5+0]},e.prototype._rejectionHandlerAt=function(t){return 0===t?this._rejectionHandler0:this[(t<<2)+t-5+1]},e.prototype._addCallbacks=function(t,e,i,r,n){var o=this._length();if(o>=262138&&(o=0,this._setLength(0)),0===o)this._promise0=r,void 0!==n&&(this._receiver0=n),"function"!=typeof t||this._isCarryingStackTrace()||(this._fulfillmentHandler0=t),"function"==typeof e&&(this._rejectionHandler0=e),"function"==typeof i&&(this._progressHandler0=i);else{var s=(o<<2)+o-5;this[s+3]=r,this[s+4]=n,this[s+0]="function"==typeof t?t:void 0,this[s+1]="function"==typeof e?e:void 0,this[s+2]="function"==typeof i?i:void 0}return this._setLength(o+1),o},e.prototype._setProxyHandlers=function(t,e){var i=this._length();if(i>=262138&&(i=0,this._setLength(0)),0===i)this._promise0=e,this._receiver0=t;else{var r=(i<<2)+i-5;this[r+3]=e,this[r+4]=t,this[r+0]=this[r+1]=this[r+2]=void 0}this._setLength(i+1)},e.prototype._proxyPromiseArray=function(t,e){this._setProxyHandlers(t,e)},e.prototype._proxyPromise=function(t){t._setProxied(),this._setProxyHandlers(t,-1)},e.prototype._setBoundTo=function(t){void 0!==t?(this._bitField=8388608|this._bitField,this._boundTo=t):this._bitField=-8388609&this._bitField},e.prototype._isBound=function(){return 8388608===(8388608&this._bitField)},e.prototype._resolveFromResolver=function(t){function e(t){r._tryFollow(t)||r._fulfill(t)}function i(t){var e=S(t)?t:new Error(t+"");r._attachExtraTrace(e),E(t),r._reject(t,e===t?void 0:e)}var r=this;this._setTrace(void 0),this._pushContext();var n=g(t,void 0,e,i);if(this._popContext(),void 0!==n&&n===v){var o=n.e,s=S(o)?o:new Error(o+"");r._reject(o,s)}},e.prototype._spreadSlowCase=function(t,e,i,r){var n=new l(i).promise(),o=n._then(function(){return t.apply(r,arguments)},void 0,void 0,a,void 0);e._follow(o)},e.prototype._callSpread=function(t,i,r){var n=this._boundTo;if(d(r))for(var o=0,s=r.length;s>o;++o)if(u(r[o],void 0)instanceof e)return void this._spreadSlowCase(t,i,r,n);return i._pushContext(),m(t,r,n)},e.prototype._callHandler=function(t,e,i,r){var n;return e!==a||this.isRejected()?(i._pushContext(),n=_(t,e,r)):n=this._callSpread(t,i,r),i._popContext(),n},e.prototype._settlePromiseFromHandler=function(t,i,r,n){if(!(n instanceof e))return void t.call(i,r,n);var o=this._callHandler(t,i,n,r);if(!n._isFollowing())if(o===v||o===n||o===c){var s=o===n?C():o.e,a=S(s)?s:new Error(s+"");o!==c&&n._attachExtraTrace(a),n._rejectUnchecked(s,a)}else{var l=u(o,n);if(l instanceof e){if(l.isRejected()&&!l._isCarryingStackTrace()&&!S(l._settledValue)){var a=new Error(l._settledValue+"");n._attachExtraTrace(a),l._setCarriedStackTrace(a)}n._follow(l),n._propagateFrom(l,1)}else n._fulfillUnchecked(o)}},e.prototype._follow=function(t){this._setFollowing(),t.isPending()?(this._propagateFrom(t,1),t._proxyPromise(this)):t.isFulfilled()?this._fulfillUnchecked(t._settledValue):this._rejectUnchecked(t._settledValue,t._getCarriedStackTrace()),t._isRejectionUnhandled()&&t._unsetRejectionIsUnhandled(),T&&null==t._traceParent&&(t._traceParent=this)},e.prototype._tryFollow=function(t){if(this._isFollowingOrFulfilledOrRejected()||t===this)return!1;var i=u(t,void 0);return i instanceof e?(this._follow(i),!0):!1},e.prototype._resetTrace=function(){T&&(this._trace=new h(void 0===this._peekContext()))},e.prototype._setTrace=function(t){if(T){var e=this._peekContext();this._traceParent=e;var i=void 0===e;this._trace=void 0!==t&&t._traceParent===e?t._trace:new h(i)}return this},e.prototype._attachExtraTrace=function(t){if(T){var e=this,i=t.stack;i="string"==typeof i?i.split("\n"):[];for(var r=1,n=1;null!=e&&null!=e._trace;)i=h.combine(i,e._trace.stack.split("\n")),e=e._traceParent,n++;var o=Error.stackTraceLimit||10,s=(o+r)*n,a=i.length;a>s&&(i.length=s),t.stack=i.length<=r?"(No stack trace)":i.join("\n")}},e.prototype._cleanValues=function(){this._cancellable()&&(this._cancellationParent=void 0)},e.prototype._propagateFrom=function(t,e){(1&e)>0&&t._cancellable()&&(this._setCancellable(),this._cancellationParent=t),(4&e)>0&&this._setBoundTo(t._boundTo),(2&e)>0&&this._setTrace(t)},e.prototype._fulfill=function(t){this._isFollowingOrFulfilledOrRejected()||this._fulfillUnchecked(t)},e.prototype._reject=function(t,e){this._isFollowingOrFulfilledOrRejected()||this._rejectUnchecked(t,e)},e.prototype._settlePromiseAt=function(t){var i=this.isFulfilled()?this._fulfillmentHandlerAt(t):this._rejectionHandlerAt(t),r=this._settledValue,n=this._receiverAt(t),o=this._promiseAt(t);if("function"==typeof i)this._settlePromiseFromHandler(i,n,r,o);else{var s=!1,a=this.isFulfilled();void 0!==n&&(n instanceof e&&n._isProxied()?(n._unsetProxied(),a?n._fulfillUnchecked(r):n._rejectUnchecked(r,this._getCarriedStackTrace()),s=!0):n instanceof l&&(a?n._promiseFulfilled(r,o):n._promiseRejected(r,o),s=!0)),s||(a?o._fulfill(r):o._reject(r,this._getCarriedStackTrace()))}t>=256&&this._queueGC()},e.prototype._isProxied=function(){return 4194304===(4194304&this._bitField)},e.prototype._setProxied=function(){this._bitField=4194304|this._bitField},e.prototype._unsetProxied=function(){this._bitField=-4194305&this._bitField},e.prototype._isGcQueued=function(){return-1073741824===(-1073741824&this._bitField)},e.prototype._setGcQueued=function(){this._bitField=-1073741824|this._bitField},e.prototype._unsetGcQueued=function(){this._bitField=1073741823&this._bitField},e.prototype._queueGC=function(){this._isGcQueued()||(this._setGcQueued(),n.invokeLater(this._gc,this,void 0))},e.prototype._gc=function(){for(var t=5*this._length(),e=0;t>e;e++)delete this[e];this._setLength(0),this._unsetGcQueued()},e.prototype._queueSettleAt=function(t){this._isRejectionUnhandled()&&this._unsetRejectionIsUnhandled(),n.invoke(this._settlePromiseAt,this,t)},e.prototype._fulfillUnchecked=function(t){if(this.isPending()){if(t===this){var e=C();return this._attachExtraTrace(e),this._rejectUnchecked(e,void 0)}this._cleanValues(),this._setFulfilled(),this._settledValue=t;var i=this._length();i>0&&n.invoke(this._settlePromises,this,i)}},e.prototype._rejectUncheckedCheckError=function(t){var e=S(t)?t:new Error(t+"");this._rejectUnchecked(t,e===t?void 0:e)},e.prototype._rejectUnchecked=function(t,e){if(this.isPending()){if(t===this){var i=C();return this._attachExtraTrace(i),this._rejectUnchecked(i)}if(this._cleanValues(),this._setRejected(),this._settledValue=t,this._isFinal())return void n.invokeLater(P,void 0,void 0===e?t:e);var r=this._length();void 0!==e&&this._setCarriedStackTrace(e),r>0?n.invoke(this._rejectPromises,this,null):this._ensurePossibleRejectionHandled()}},e.prototype._rejectPromises=function(){this._settlePromises(),this._unsetCarriedStackTrace()},e.prototype._settlePromises=function(){for(var t=this._length(),e=0;t>e;e++)this._settlePromiseAt(e)},e.prototype._ensurePossibleRejectionHandled=function(){this._setRejectionIsUnhandled(),void 0!==h.possiblyUnhandledRejection&&n.invokeLater(this._notifyUnhandledRejection,this,void 0)},e.prototype._notifyUnhandledRejectionIsHandled=function(){"function"==typeof A&&n.invokeLater(A,void 0,this)},e.prototype._notifyUnhandledRejection=function(){if(this._isRejectionUnhandled()){var t=this._settledValue,e=this._getCarriedStackTrace();this._setUnhandledRejectionIsNotified(),void 0!==e&&(this._unsetCarriedStackTrace(),t=e),"function"==typeof h.possiblyUnhandledRejection&&h.possiblyUnhandledRejection(t,this)}};var R=[];return e.prototype._peekContext=function(){var t=R.length-1;return t>=0?R[t]:void 0},e.prototype._pushContext=function(){T&&R.push(this)},e.prototype._popContext=function(){T&&R.pop()},e.noConflict=function(){return i(e)},e.setScheduler=function(t){if("function"!=typeof t)throw new b("fn must be a function");n._schedule=t},h.isSupported()||(e.longStackTraces=function(){},T=!1),e._makeSelfResolutionError=C,t("./finally.js")(e,c,u),t("./direct_resolve.js")(e),t("./synchronous_inspection.js")(e),t("./join.js")(e,l,u,s),e.RangeError=y,e.CancellationError=w,e.TimeoutError=j,e.TypeError=b,e.OperationalError=k,e.RejectionError=k,e.AggregateError=o.AggregateError,r.toFastProperties(e),r.toFastProperties(e.prototype),e.Promise=e,t("./timers.js")(e,s,u),t("./race.js")(e,s,u),t("./call_get.js")(e),t("./generators.js")(e,F,s,u),t("./map.js")(e,l,F,u,s),t("./nodeify.js")(e),t("./promisify.js")(e,s),t("./props.js")(e,l,u),t("./reduce.js")(e,l,F,u,s),t("./settle.js")(e,l),t("./some.js")(e,l,F),t("./progress.js")(e,l),t("./cancel.js")(e,s),t("./filter.js")(e,s),t("./any.js")(e,l),t("./each.js")(e,s),t("./using.js")(e,F,u),e.prototype=e.prototype,e}},{"./any.js":1,"./async.js":2,"./call_get.js":4,"./cancel.js":5,"./captured_trace.js":6,"./catch_filter.js":7,"./direct_resolve.js":8,"./each.js":9,"./errors.js":10,"./errors_api_rejection":11,"./filter.js":13,"./finally.js":14,"./generators.js":15,"./join.js":16,"./map.js":17,"./nodeify.js":18,"./progress.js":19,"./promise_array.js":21,"./promise_resolver.js":22,"./promisify.js":23,"./props.js":24,"./race.js":26,"./reduce.js":27,"./settle.js":29,"./some.js":30,"./synchronous_inspection.js":31,"./thenables.js":32,"./timers.js":33,"./using.js":34,"./util.js":35}],21:[function(t,e){e.exports=function(e,i,r){function n(t){switch(t){case-1:return void 0;case-2:return[];case-3:return{}}}function o(t){var r=this._promise=new e(i),n=void 0;t instanceof e&&(n=t,r._propagateFrom(n,5)),r._setTrace(n),this._values=t,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var s=t("./errors.js").canAttach,a=t("./util.js"),c=a.isArray;return o.prototype.length=function(){return this._length},o.prototype.promise=function(){return this._promise},o.prototype._init=function u(t,i){var o=r(this._values,void 0);if(o instanceof e){if(this._values=o,o._setBoundTo(this._promise._boundTo),!o.isFulfilled())return o.isPending()?void o._then(u,this._reject,void 0,this,i):(o._unsetRejectionIsUnhandled(),void this._reject(o._settledValue));if(o=o._settledValue,!c(o)){var s=new e.TypeError("expecting an array, a promise or a thenable");return void this.__hardReject__(s)}}else if(!c(o)){var s=new e.TypeError("expecting an array, a promise or a thenable");return void this.__hardReject__(s)}if(0===o.length)return void(-5===i?this._resolveEmptyArray():this._resolve(n(i)));for(var a=this.getActualLength(o.length),l=a,h=this.shouldCopyValues()?new Array(a):this._values,p=!1,f=0;a>f;++f){var d=r(o[f],void 0);d instanceof e?d.isPending()?d._proxyPromiseArray(this,f):(d._unsetRejectionIsUnhandled(),p=!0):p=!0,h[f]=d}this._values=h,this._length=l,p&&this._scanDirectValues(a)},o.prototype._settlePromiseAt=function(t){var i=this._values[t];i instanceof e?i.isFulfilled()?this._promiseFulfilled(i._settledValue,t):i.isRejected()&&this._promiseRejected(i._settledValue,t):this._promiseFulfilled(i,t)},o.prototype._scanDirectValues=function(t){for(var e=0;t>e&&!this._isResolved();++e)this._settlePromiseAt(e)},o.prototype._isResolved=function(){return null===this._values},o.prototype._resolve=function(t){this._values=null,this._promise._fulfill(t)},o.prototype.__hardReject__=o.prototype._reject=function(t){this._values=null;var e=s(t)?t:new Error(t+"");this._promise._attachExtraTrace(e),this._promise._reject(t,e)},o.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({index:e,value:t})},o.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var i=++this._totalResolved;i>=this._length&&this._resolve(this._values)}},o.prototype._promiseRejected=function(t){this._isResolved()||(this._totalResolved++,this._reject(t))},o.prototype.shouldCopyValues=function(){return!0},o.prototype.getActualLength=function(t){return t},o}},{"./errors.js":10,"./util.js":35}],22:[function(t,e){function i(t){return t instanceof Error&&f.getPrototypeOf(t)===Error.prototype}function r(t){var e;return e=i(t)?new l(t):t,c.markAsOriginatingFromRejection(e),e}function n(t){function e(e,i){if(null!==t){if(e){var n=r(a(e));t._attachExtraTrace(n),t._reject(n)}else if(arguments.length>2){for(var o=arguments.length,s=new Array(o-1),c=1;o>c;++c)s[c-1]=arguments[c];t._fulfill(s)}else t._fulfill(i);t=null}}return e}var o,s=t("./util.js"),a=s.maybeWrapAsError,c=t("./errors.js"),u=c.TimeoutError,l=c.OperationalError,h=t("./async.js"),p=s.haveGetters,f=t("./es5.js");if(o=p?function(t){this.promise=t}:function(t){this.promise=t,this.asCallback=n(t),this.callback=this.asCallback},p){var d={get:function(){return n(this.promise)}};f.defineProperty(o.prototype,"asCallback",d),f.defineProperty(o.prototype,"callback",d)}o._nodebackForPromise=n,o.prototype.toString=function(){return"[object PromiseResolver]"},o.prototype.resolve=o.prototype.fulfill=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");var e=this.promise;e._tryFollow(t)||h.invoke(e._fulfill,e,t)},o.prototype.reject=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");var e=this.promise;c.markAsOriginatingFromRejection(t);var i=c.canAttach(t)?t:new Error(t+"");e._attachExtraTrace(i),h.invoke(e._reject,e,t),i!==t&&h.invoke(this._setCarriedStackTrace,this,i)},o.prototype.progress=function(t){if(!(this instanceof o))throw new TypeError("Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.");h.invoke(this.promise._progress,this.promise,t)},o.prototype.cancel=function(){h.invoke(this.promise.cancel,this.promise,void 0)},o.prototype.timeout=function(){this.reject(new u("timeout"))},o.prototype.isResolved=function(){return this.promise.isResolved()},o.prototype.toJSON=function(){return this.promise.toJSON()},o.prototype._setCarriedStackTrace=function(t){this.promise.isRejected()&&this.promise._setCarriedStackTrace(t)},e.exports=o},{"./async.js":2,"./errors.js":10,"./es5.js":12,"./util.js":35}],23:[function(t,e){e.exports=function(e,i){function r(t){return t.replace(/([$])/,"\\$")}function n(t){try{return t.__isPromisified__===!0}catch(e){return!1}}function o(t,e,i){var r=m.getDataPropertyOrDefault(t,e+i,S);return r?n(r):!1}function s(t,e,i){for(var r=0;r<t.length;r+=2){var n=t[r];if(i.test(n))for(var o=n.replace(i,""),s=0;s<t.length;s+=2)if(t[s]===o)throw new k("Cannot promisify an API that has normal methods with '"+e+"'-suffix")}}function a(t,e,i,r){for(var a=m.inheritedDataKeys(t),c=[],u=0;u<a.length;++u){var l=a[u],h=t[l];"function"!=typeof h||n(h)||o(t,l,e)||!r(l,h,t)||c.push(l,h)}return s(c,e,i),c}function c(t){for(var e=[t],i=Math.max(0,t-1-5),r=t-1;r>=i;--r)r!==t&&e.push(r);for(var r=t+1;5>=r;++r)e.push(r);return e}function u(t){return m.filledRange(t,"arguments[","]")}function l(t){return m.filledRange(t,"_arg","")}function h(t){return"number"==typeof t.length?Math.max(Math.min(t.length,1024),0):0}function p(t){return m.isIdentifier(t)?"."+t:"['"+t.replace(/(['\\])/g,"\\$1")+"']"}function f(t,r,n,o,s){function a(e){var i,n=u(e).join(", "),o=e>0?", ":"";return i="string"==typeof t?"                                                          \n                this.method(args, fn);                                       \n                break;                                                       \n            ".replace(".method",p(t)):r===g?"                                                         \n                callback.call(this, args, fn);                               \n                break;                                                       \n            ":void 0!==r?"                                                         \n                callback.call(receiver, args, fn);                           \n                break;                                                       \n            ":"                                                         \n                callback(args, fn);                                          \n                break;                                                       \n            ",i.replace("args",n).replace(", ",o)}function f(){for(var e="",i=0;i<v.length;++i)e+="case "+v[i]+":"+a(v[i]);var n;return n="string"==typeof t?"                                                  \n                this.property.apply(this, args);                             \n            ".replace(".property",p(t)):r===g?"                                                  \n                callback.apply(this, args);                                  \n            ":"                                                  \n                callback.apply(receiver, args);                              \n            ",e+="                                                             \n        default:                                                             \n            var args = new Array(len + 1);                                   \n            var i = 0;                                                       \n            for (var i = 0; i < len; ++i) {                                  \n               args[i] = arguments[i];                                       \n            }                                                                \n            args[i] = fn;                                                    \n            [CodeForCall]                                                    \n            break;                                                           \n        ".replace("[CodeForCall]",n)}var d=Math.max(0,h(o)-1),v=c(d),_="string"==typeof n&&m.isIdentifier(n)?n+s:"promisified";return new Function("Promise","callback","receiver","withAppended","maybeWrapAsError","nodebackForPromise","INTERNAL","                                         \n        var ret = function FunctionName(Parameters) {                        \n                                                                \n            var len = arguments.length;                                      \n            var promise = new Promise(INTERNAL);                             \n            promise._setTrace(void 0);                                       \n            var fn = nodebackForPromise(promise);                            \n            try {                                                            \n                switch(len) {                                                \n                    [CodeForSwitchCase]                                      \n                }                                                            \n            } catch (e) {                                                    \n                var wrapped = maybeWrapAsError(e);                           \n                promise._attachExtraTrace(wrapped);                          \n                promise._reject(wrapped);                                    \n            }                                                                \n            return promise;                                                  \n        };                                                                   \n        ret.__isPromisified__ = true;                                        \n        return ret;                                                          \n        ".replace("FunctionName",_).replace("Parameters",l(d)).replace("[CodeForSwitchCase]",f()))(e,t,r,b,w,y,i)}function d(t,r){function n(){var n=r;r===g&&(n=this),"string"==typeof t&&(t=n[t]);var o=new e(i);o._setTrace(void 0);var s=y(o);try{t.apply(n,b(arguments,s))}catch(a){var c=w(a);o._attachExtraTrace(c),o._reject(c)}return o}return n.__isPromisified__=!0,n}function v(t,e,i,n){for(var o=new RegExp(r(e)+"$"),s=a(t,e,o,i),c=0,u=s.length;u>c;c+=2){var l=s[c],h=s[c+1],p=l+e;t[p]=n===P?P(l,g,l,h,e):n(h)}return m.toFastProperties(t),t}function _(t,e){return P(t,e,void 0,t)}var g={},m=t("./util.js"),y=t("./promise_resolver.js")._nodebackForPromise,b=m.withAppended,w=m.maybeWrapAsError,j=m.canEvaluate,k=t("./errors").TypeError,x="Async",E=function(t,e){return m.isIdentifier(t)&&"_"!==t.charAt(0)&&!m.isClass(e)},S={__isPromisified__:!0},P=j?f:d;e.promisify=function(t,e){if("function"!=typeof t)throw new k("fn must be a function");return n(t)?t:_(t,arguments.length<2?g:e)},e.promisifyAll=function(t,e){if("function"!=typeof t&&"object"!=typeof t)throw new k("the target of promisifyAll must be an object or a function");e=Object(e);var i=e.suffix;"string"!=typeof i&&(i=x);var r=e.filter;"function"!=typeof r&&(r=E);var n=e.promisifier;if("function"!=typeof n&&(n=P),!m.isIdentifier(i))throw new RangeError("suffix must be a valid identifier");for(var o=m.inheritedDataKeys(t,{includeHidden:!0}),s=0;s<o.length;++s){var a=t[o[s]];"constructor"!==o[s]&&m.isClass(a)&&(v(a.prototype,i,r,n),v(a,i,r,n))}return v(t,i,r,n)}}},{"./errors":10,"./promise_resolver.js":22,"./util.js":35}],24:[function(t,e){e.exports=function(e,i,r){function n(t){for(var e=u.keys(t),i=e.length,r=new Array(2*i),n=0;i>n;++n){var o=e[n];r[n]=t[o],r[n+i]=o}this.constructor$(r)}function o(t){var i,o=r(t,void 0);return c(o)?(i=o instanceof e?o._then(e.props,void 0,void 0,void 0,void 0):new n(o).promise(),o instanceof e&&i._propagateFrom(o,4),i):a("cannot await properties of a non-object")}var s=t("./util.js"),a=t("./errors_api_rejection")(e),c=s.isObject,u=t("./es5.js");s.inherits(n,i),n.prototype._init=function(){this._init$(void 0,-3)},n.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){this._values[e]=t;var i=++this._totalResolved;if(i>=this._length){for(var r={},n=this.length(),o=0,s=this.length();s>o;++o)r[this._values[o+n]]=this._values[o];this._resolve(r)}}},n.prototype._promiseProgressed=function(t,e){this._isResolved()||this._promise._progress({key:this._values[e+this.length()],value:t})},n.prototype.shouldCopyValues=function(){return!1},n.prototype.getActualLength=function(t){return t>>1},e.prototype.props=function(){return o(this)},e.props=function(t){return o(t)}}},{"./errors_api_rejection":11,"./es5.js":12,"./util.js":35}],25:[function(t,e){function i(t,e,i,r,n){for(var o=0;n>o;++o)i[o+r]=t[o+e]}function r(t){this._capacity=t,this._length=0,this._front=0,this._makeCapacity()}r.prototype._willBeOverCapacity=function(t){return this._capacity<t},r.prototype._pushOne=function(t){var e=this.length();this._checkCapacity(e+1);var i=this._front+e&this._capacity-1;this[i]=t,this._length=e+1},r.prototype.push=function(t,e,i){var r=this.length()+3;if(this._willBeOverCapacity(r))return this._pushOne(t),this._pushOne(e),void this._pushOne(i);var n=this._front+r-3;this._checkCapacity(r);var o=this._capacity-1;this[n+0&o]=t,this[n+1&o]=e,this[n+2&o]=i,this._length=r},r.prototype.shift=function(){var t=this._front,e=this[t];return this[t]=void 0,this._front=t+1&this._capacity-1,this._length--,e},r.prototype.length=function(){return this._length},r.prototype._makeCapacity=function(){for(var t=this._capacity,e=0;t>e;++e)this[e]=void 0},r.prototype._checkCapacity=function(t){this._capacity<t&&this._resizeTo(this._capacity<<3)},r.prototype._resizeTo=function(t){var e=this._front,r=this._capacity,n=new Array(r),o=this.length();if(i(this,0,n,0,r),this._capacity=t,this._makeCapacity(),this._front=0,r>=e+o)i(n,e,this,0,o);else{var s=o-(e+o&r-1);i(n,e,this,0,s),i(n,0,this,s,o-s)}},e.exports=r},{}],26:[function(t,e){e.exports=function(e,i,r){function n(t,n){var u=r(t,void 0);if(u instanceof e)return a(u);if(!s(t))return o("expecting an array, a promise or a thenable");var l=new e(i);void 0!==n?l._propagateFrom(n,7):l._setTrace(void 0);for(var h=l._fulfill,p=l._reject,f=0,d=t.length;d>f;++f){var v=t[f];(void 0!==v||c.call(t,f))&&e.cast(v)._then(h,p,void 0,l,null)}return l}var o=t("./errors_api_rejection.js")(e),s=t("./util.js").isArray,a=function(t){return t.then(function(e){return n(e,t)})},c={}.hasOwnProperty;e.race=function(t){return n(t,void 0)},e.prototype.race=function(){return n(this,void 0)}}},{"./errors_api_rejection.js":11,"./util.js":35}],27:[function(t,e){e.exports=function(e,i,r,n,o){function s(t,i,r,s){this.constructor$(t);var a=-2;this._preservedValues=s===o?[]:null;var c=n(r,void 0),u=!1,l=c instanceof e;l&&(c.isPending()?(a=-1,c._proxyPromiseArray(this,-1)):c.isFulfilled()?(r=c.value(),a=0):(c._unsetRejectionIsUnhandled(),this._reject(c.reason()),u=!0)),l||void 0===r||(a=0),this._callback=i,this._currentIndex=a,this._accum=r,u||this._init$(void 0,-5)}function a(t,e,i,n){if("function"!=typeof e)return r("fn must be a function");var o=new s(t,e,i,n);return o.promise()}var c=t("./util.js"),u=c.tryCatch4,l=c.tryCatch3,h=c.errorObj,p={};c.inherits(s,i),s.prototype._init=function(){},s.prototype._resolveEmptyArray=function(){-1!==this._currentIndex&&this._resolve(null!==this._preservedValues?[]:this._accum)},s.prototype._promiseFulfilled=function(t,i){var r,o=this._values;if(null!==o){var s=this.length(),a=this._currentIndex;if(!(a>i)){var c=this._preservedValues,f=null!==c;if(0===i&&-2===a){if(r=t,a=1,2>s)return this._resolve(void 0);t=o[1]}else{if(i>a)return;if(-1===i||o[i]===p){if(r=t,a++,a>=s)return this._resolve(f?c:r);t=o[a]}else r=this._accum}for(var d,v=this._callback,_=this._promise._boundTo,g=a;s>g;++g){if(g>a&&(t=o[g]),t instanceof e){if(!t.isFulfilled())return t.isPending()?(this._accum=r,void(this._currentIndex=g)):(t._unsetRejectionIsUnhandled(),this._reject(t.reason()));t=t._settledValue}if(f?(c.push(t),d=l(v,_,t,g,s)):d=u(v,_,r,t,g,s),d===h)return this._reject(d.e);var m=n(d,void 0);if(m instanceof e){if(m.isPending())return o[g]=p,this._accum=r,this._currentIndex=g,m._proxyPromiseArray(this,g);if(!m.isFulfilled())return m._unsetRejectionIsUnhandled(),this._reject(m.reason());d=m.value()}r=d}this._resolve(f?c:r)}}},e.prototype.reduce=function(t,e){return a(this,t,e,null)},e.reduce=function(t,e,i,r){return a(t,e,i,r)}}},{"./util.js":35}],28:[function(t,e){var i,r;if("object"==typeof process&&"string"==typeof process.version)i=function(t){process.nextTick(t)};else if("undefined"!=typeof MutationObserver&&(r=MutationObserver)||"undefined"!=typeof WebKitMutationObserver&&(r=WebKitMutationObserver))i=function(){var t=document.createElement("div"),e=void 0,i=new r(function(){var t=e;e=void 0,t()});return i.observe(t,{attributes:!0}),function(i){e=i,t.setAttribute("class","foo")}}();else{if("undefined"==typeof setTimeout)throw new Error("no async scheduler available");i=function(t){setTimeout(t,0)}}e.exports=i},{}],29:[function(t,e){e.exports=function(e,i){function r(t){this.constructor$(t)}var n=e.PromiseInspection,o=t("./util.js");o.inherits(r,i),r.prototype._promiseResolved=function(t,e){this._values[t]=e;var i=++this._totalResolved;i>=this._length&&this._resolve(this._values)},r.prototype._promiseFulfilled=function(t,e){if(!this._isResolved()){var i=new n;i._bitField=268435456,i._settledValue=t,this._promiseResolved(e,i)}},r.prototype._promiseRejected=function(t,e){if(!this._isResolved()){var i=new n;i._bitField=134217728,i._settledValue=t,this._promiseResolved(e,i)}},e.settle=function(t){return new r(t).promise()},e.prototype.settle=function(){return new r(this).promise()}}},{"./util.js":35}],30:[function(t,e){e.exports=function(e,i,r){function n(t){this.constructor$(t),this._howMany=0,this._unwrap=!1,this._initialized=!1
}function o(t,e){if((0|e)!==e||0>e)return r("expecting a positive integer");var i=new n(t),o=i.promise();return o.isRejected()?o:(i.setHowMany(e),i.init(),o)}var s=t("./util.js"),a=t("./errors.js").RangeError,c=t("./errors.js").AggregateError,u=s.isArray;s.inherits(n,i),n.prototype._init=function(){if(this._initialized){if(0===this._howMany)return void this._resolve([]);this._init$(void 0,-2);var t=u(this._values);if(!this._isResolved()&&t&&this._howMany>this._canPossiblyFulfill()){var e="(Promise.some) input array contains less than "+this._howMany+" promises";this._reject(new a(e))}}},n.prototype.init=function(){this._initialized=!0,this._init()},n.prototype.setUnwrap=function(){this._unwrap=!0},n.prototype.howMany=function(){return this._howMany},n.prototype.setHowMany=function(t){this._isResolved()||(this._howMany=t)},n.prototype._promiseFulfilled=function(t){this._isResolved()||(this._addFulfilled(t),this._fulfilled()===this.howMany()&&(this._values.length=this.howMany(),this._resolve(1===this.howMany()&&this._unwrap?this._values[0]:this._values)))},n.prototype._promiseRejected=function(t){if(!this._isResolved()&&(this._addRejected(t),this.howMany()>this._canPossiblyFulfill())){for(var e=new c,i=this.length();i<this._values.length;++i)e.push(this._values[i]);this._reject(e)}},n.prototype._fulfilled=function(){return this._totalResolved},n.prototype._rejected=function(){return this._values.length-this.length()},n.prototype._addRejected=function(t){this._values.push(t)},n.prototype._addFulfilled=function(t){this._values[this._totalResolved++]=t},n.prototype._canPossiblyFulfill=function(){return this.length()-this._rejected()},e.some=function(t,e){return o(t,e)},e.prototype.some=function(t){return o(this,t)},e._SomePromiseArray=n}},{"./errors.js":10,"./util.js":35}],31:[function(t,e){e.exports=function(t){function e(t){void 0!==t?(this._bitField=t._bitField,this._settledValue=t.isResolved()?t._settledValue:void 0):(this._bitField=0,this._settledValue=void 0)}e.prototype.isFulfilled=t.prototype.isFulfilled=function(){return(268435456&this._bitField)>0},e.prototype.isRejected=t.prototype.isRejected=function(){return(134217728&this._bitField)>0},e.prototype.isPending=t.prototype.isPending=function(){return 0===(402653184&this._bitField)},e.prototype.value=t.prototype.value=function(){if(!this.isFulfilled())throw new TypeError("cannot get fulfillment value of a non-fulfilled promise");return this._settledValue},e.prototype.error=e.prototype.reason=t.prototype.reason=function(){if(!this.isRejected())throw new TypeError("cannot get rejection reason of a non-rejected promise");return this._settledValue},e.prototype.isResolved=t.prototype.isResolved=function(){return(402653184&this._bitField)>0},t.PromiseInspection=e}},{}],32:[function(t,e){e.exports=function(e,i){function r(t){try{return t.then}catch(e){return u.e=e,u}}function n(t,n){if(l(t)){if(t instanceof e)return t;if(o(t)){var a=new e(i);return a._setTrace(void 0),t._then(a._fulfillUnchecked,a._rejectUncheckedCheckError,a._progressUnchecked,a,null),a._setFollowing(),a}var h=r(t);if(h===u)return void 0!==n&&c(h.e)&&n._attachExtraTrace(h.e),e.reject(h.e);if("function"==typeof h)return s(t,h,n)}return t}function o(t){return h.call(t,"_promise0")}function s(t,i,r){function n(i){if(!u){if(u=!0,t===i){var n=e._makeSelfResolutionError();return void 0!==r&&r._attachExtraTrace(n),void a.promise._reject(n,void 0)}a.resolve(i)}}function o(t){if(!u){u=!0;var e=c(t)?t:new Error(t+"");void 0!==r&&r._attachExtraTrace(e),a.promise._reject(t,e)}}function s(t){if(!u){var e=a.promise;"function"==typeof e._progress&&e._progress(t)}}var a=e.defer(),u=!1;try{i.call(t,n,o,s)}catch(l){if(!u){u=!0;var h=c(l)?l:new Error(l+"");void 0!==r&&r._attachExtraTrace(h),a.promise._reject(l,h)}}return a.promise}var a=t("./util.js"),c=t("./errors.js").canAttach,u=a.errorObj,l=a.isObject,h={}.hasOwnProperty;return n}},{"./errors.js":10,"./util.js":35}],33:[function(t,e){var i=function(t,e){var i=arguments.length,r=arguments[2],n=arguments[3],o=i>=5?arguments[4]:void 0;setTimeout(function(){t(r,n,o)},e)};e.exports=function(e,r,n){var o=(t("./util.js"),t("./errors.js")),s=(t("./errors_api_rejection")(e),e.TimeoutError),a=function(t,e,i){if(t.isPending()){"string"!=typeof e&&(e="operation timed out after "+i+" ms");var r=new s(e);o.markAsOriginatingFromRejection(r),t._attachExtraTrace(r),t._cancel(r)}},c=function(t,e){e._fulfill(t)},u=e.delay=function(t,o){void 0===o&&(o=t,t=void 0),o=+o;var s=n(t,void 0),a=new e(r);return s instanceof e?(a._propagateFrom(s,7),a._follow(s),a.then(function(t){return e.delay(t,o)})):(a._setTrace(void 0),i(c,o,t,a),a)};e.prototype.delay=function(t){return u(this,t)},e.prototype.timeout=function(t,n){t=+t;var o=new e(r);return o._propagateFrom(this,7),o._follow(this),i(a,t,o,n,t),o.cancellable()}}},{"./errors.js":10,"./errors_api_rejection":11,"./util.js":35}],34:[function(t,e){e.exports=function(e,i,r){function n(t){for(var i=t.length,r=0;i>r;++r){var n=t[r];if(n.isRejected())return e.reject(n.error());t[r]=n.value()}return t}function o(t){setTimeout(function(){throw t},0)}function s(t,i){function n(){if(s>=a)return c.resolve();var u=r(t[s++],void 0);if(u instanceof e&&u._isDisposable()){try{u=r(u._getDisposer().tryDispose(i),void 0)}catch(l){return o(l)}if(u instanceof e)return u._then(n,o,null,null,null)}n()}var s=0,a=t.length,c=e.defer();return n(),c.promise}function a(t){var e=new f;return e._settledValue=t,e._bitField=268435456,s(this,e).thenReturn(t)}function c(t){var e=new f;return e._settledValue=t,e._bitField=134217728,s(this,e).thenThrow(t)}function u(t,e){this._data=t,this._promise=e}function l(t,e){this.constructor$(t,e)}var h=t("./errors.js").TypeError,p=t("./util.js").inherits,f=e.PromiseInspection;u.prototype.data=function(){return this._data},u.prototype.promise=function(){return this._promise},u.prototype.resource=function(){return this.promise().isFulfilled()?this.promise().value():null},u.prototype.tryDispose=function(t){var e=this.resource(),i=null!==e?this.doDispose(e,t):null;return this._promise._unsetDisposable(),this._data=this._promise=null,i},p(l,u),l.prototype.doDispose=function(t,e){var i=this.data();return i.call(t,t,e)},e.using=function(){var t=arguments.length;if(2>t)return i("you must pass at least 2 arguments to Promise.using");var r=arguments[t-1];if("function"!=typeof r)return i("fn must be a function");t--;for(var o=new Array(t),s=0;t>s;++s){var l=arguments[s];if(l instanceof u){var h=l;l=l.promise(),l._setDisposable(h)}o[s]=l}return e.settle(o).then(n).spread(r)._then(a,c,void 0,o,void 0)},e.prototype._setDisposable=function(t){this._bitField=262144|this._bitField,this._disposer=t},e.prototype._isDisposable=function(){return(262144&this._bitField)>0},e.prototype._getDisposer=function(){return this._disposer},e.prototype._unsetDisposable=function(){this._bitField=-262145&this._bitField,this._disposer=void 0},e.prototype.disposer=function(t){if("function"==typeof t)return new l(t,this);throw new h}}},{"./errors.js":10,"./util.js":35}],35:[function(t,e,i){function r(t,e,i){try{return t.call(e,i)}catch(r){return k.e=r,k}}function n(t,e,i,r){try{return t.call(e,i,r)}catch(n){return k.e=n,k}}function o(t,e,i,r,n){try{return t.call(e,i,r,n)}catch(o){return k.e=o,k}}function s(t,e,i,r,n,o){try{return t.call(e,i,r,n,o)}catch(s){return k.e=s,k}}function a(t,e,i){try{return t.apply(i,e)}catch(r){return k.e=r,k}}function c(t){return"string"==typeof t?t:""+t}function u(t){return null==t||t===!0||t===!1||"string"==typeof t||"number"==typeof t}function l(t){return!u(t)}function h(t){return u(t)?new Error(c(t)):t}function p(t,e){var i,r=t.length,n=new Array(r+1);for(i=0;r>i;++i)n[i]=t[i];return n[i]=e,n}function f(t,e,i){if(!b.isES5)return{}.hasOwnProperty.call(t,e)?t[e]:void 0;var r=Object.getOwnPropertyDescriptor(t,e);return null!=r?null==r.get&&null==r.set?r.value:i:void 0}function d(t,e,i){if(u(t))return t;var r={value:i,configurable:!0,enumerable:!1,writable:!0};return b.defineProperty(t,e,r),t}function v(t){throw t}function _(t){try{if("function"==typeof t){var e=b.keys(t.prototype);return e.length>0&&!(1===e.length&&"constructor"===e[0])}return!1}catch(i){return!1}}function g(t){function e(){}return e.prototype=t,e}function m(t){return P.test(t)}function y(t,e,i){for(var r=new Array(t),n=0;t>n;++n)r[n]=e+n+i;return r}var b=t("./es5.js"),w=function(){try{var t={};return b.defineProperty(t,"f",{get:function(){return 3}}),3===t.f}catch(e){return!1}}(),j="undefined"==typeof navigator,k={e:{}},x=function(t,e){function i(){this.constructor=t,this.constructor$=e;for(var i in e.prototype)r.call(e.prototype,i)&&"$"!==i.charAt(i.length-1)&&(this[i+"$"]=e.prototype[i])}var r={}.hasOwnProperty;return i.prototype=e.prototype,t.prototype=new i,t.prototype},E=function(){return"string"!==this}.call("string"),S=function(){return b.isES5?function(t,e){for(var i=[],r=Object.create(null),n=Object(e).includeHidden?Object.getOwnPropertyNames:Object.keys;null!=t;){var o;try{o=n(t)}catch(s){return i}for(var a=0;a<o.length;++a){var c=o[a];if(!r[c]){r[c]=!0;var u=Object.getOwnPropertyDescriptor(t,c);null!=u&&null==u.get&&null==u.set&&i.push(c)}}t=b.getPrototypeOf(t)}return i}:function(t){var e=[];for(var i in t)e.push(i);return e}}(),P=/^[a-z$_][a-z$_0-9]*$/i,F={isClass:_,isIdentifier:m,inheritedDataKeys:S,getDataPropertyOrDefault:f,thrower:v,isArray:b.isArray,haveGetters:w,notEnumerableProp:d,isPrimitive:u,isObject:l,canEvaluate:j,errorObj:k,tryCatch1:r,tryCatch2:n,tryCatch3:o,tryCatch4:s,tryCatchApply:a,inherits:x,withAppended:p,asString:c,maybeWrapAsError:h,wrapsPrimitiveReceiver:E,toFastProperties:g,filledRange:y};e.exports=F},{"./es5.js":12}]},{},[3])(3)}),function(){SCAFFI1IZYM13.define("modules/scaffolding-modal",["require"],function(){return Backbone.Model.extend({initialize:function(){},defaults:function(){var t,e,i;return e=AJS.Meta.get("page-id"),t=AJS.Meta.get("context-path"),i=""+t+"/pages/editscaffoldmodal.action?pageId="+e,{pageTitle:AJS.Meta.get("page-title"),scaffoldingModalUrl:i}}})})}.call(this),function(){SCAFFI1IZYM13.define("modules/scaffolding-modal-view",["require","handlebars","bluebird"],function(t,e,i){return Backbone.View.extend({initialize:function(){return"undefined"!=typeof AJS&&null!==AJS&&(this.$=AJS.$),this.dialogId="scaffolding-modal-dialog",this.registerOnClickElement(this.$el)},templates:{notificationArea:e.compile('<span class="rte-toolbar-comment toolbar-item">\n  <input id="versionComment"\n         name="versionComment"\n         placeholder="What did you change?"\n         class="text"\n         type="text"\n         size="35"\n         style="width: 250px;"/>\n  <label for="versionComment" class="assistive">What did you change?</label>\n</span>\n<span class="minor-edit toolbar-item" style="margin-right: 40px;">\n  <input id="notifyWatchers" name="notifyWatchers" value="true" type="checkbox" checked="checked">\n  <label for="notifyWatchers">\n    <span>Notify watchers</span>\n  </label>\n</span>')},newDialogWithIFrameContent:function(){var t,e,i;return i=this.$(window).width(),e=this.$(window).height(),t='<iframe style="border: 0; width: 100%; height: 100%;"></iframe>',this.dialog=new AJS.Dialog({id:this.dialogId,width:i-100,height:e-100,closeOnOutsideClick:!1}),this.dialog.addHeader(this.model.get("pageTitle")),this.dialog.addPanel(this.model.get("pageTitle"),t,"panel-body"),this.dialog.get("panel:0").setPadding(0),this.currentPanelBody=this.dialog.getCurrentPanel().body,this.currentPanelBody.css("overflow","hidden"),this.iframe=this.currentPanelBody.find("iframe"),this},createLoadingMask:function(){var t;return t=this.$('<div id="mask"></div>'),this.loadingMask=t.prependTo(this.currentPanelBody),this.iframe.on("load",function(t){return function(){return t.loadingMask.hide()}}(this)),this},overrideDefaultIframeUnloading:function(){return this.iframe.on("unload",function(t){return t.preventDefault()}),this},setDisableSubmitButton:function(t){return this.$("#"+this.dialogId).find("button.button-panel-button").attr({disabled:t,"aria-disabled":t}),this},disableSubmitButton:function(){return this.setDisableSubmitButton(!0),this},enableSubmitButton:function(){return this.setDisableSubmitButton(!1),this},addSaveButton:function(){var t,e,r,n,o;return t=function(t){return function(){var e,i,r,n,o;return e=t.dialog.getPage(t.dialog.curpage).buttonpanel,o=e.find("#versionComment"),i=e.find("#notifyWatchers"),n=t.iframe.contents().find("#versionComment"),r=t.iframe.contents().find("#notifyWatchers"),n.val(o.val()),r.attr("checked",i.val()),r.val(i.val())}}(this),r=function(t){return function(){return t.dialog.remove(),window.location.reload()}}(this),n=function(t){return function(){return t.enableSubmitButton(),t.loadingMask.hide()}}(this),e=function(t){return function(){var e;return e=20,new i(function(i,r){var n,o;return t.iframe.on("load",function(){return i(!0)}),n=function(){return 0===t.iframe.contents().find(".scaffold-message-error").length?o():r(!1)},(o=function(){return e--,0===e?r(!1):setTimeout(n,500)})()})}}(this),o=function(i){return function(){return i.disableSubmitButton(),i.loadingMask.show(),t(),e().then(r)["catch"](n),i.iframe.contents().find("#rte-button-publish").click()}}(this),this.dialog.addSubmit("Save",o),this},addCancelButton:function(){var t;return t=function(t){return function(){return t.dialog.remove()}}(this),this.dialog.addLink("Cancel",t,"#"),this},openScaffoldingUrl:function(){return this.loadingMask.show(),this.iframe.attr("src",this.model.get("scaffoldingModalUrl")),this},addNotificationArea:function(t){var e,i,r,n;if(null!=t.dialog&&t.dialog.id===this.dialogId)return e=this.dialog.getPage(this.dialog.curpage).buttonpanel,e.prepend(this.templates.notificationArea),n=e.find("#versionComment"),r=e.find("#notifyWatchers"),i=function(t){return function(){var e,i;return i=t.iframe.contents().find("#versionComment").val(),e=t.iframe.contents().find("#notifyWatchers").val(),n.val(i),r.attr("checked",e),r.val(e)}}(this),this.iframe.on("load",i),this},showDialog:function(){return this.dialog.gotoPage(0),this.dialog.gotoPanel(0),this.dialog.show(),this},render:function(){return this.newDialogWithIFrameContent(),this.overrideDefaultIframeUnloading(),this.createLoadingMask(),this.addSaveButton(),this.addCancelButton(),this.openScaffoldingUrl(),this.showDialog()},registerOnClickElement:function(t){return AJS.bind("show.dialog",function(t){return function(e,i){return t.addNotificationArea(i)}}(this)),t.on("click",function(t){return function(e){return e.preventDefault(),t.render()}}(this))}})})}.call(this),function(){SCAFFI1IZYM13.define("modules/edit-contents-splitbutton-view",["require","handlebars","bluebird","modules/scaffolding-modal","modules/scaffolding-modal-view"],function(t,e,i,r,n){return Backbone.View.extend({initialize:function(){return this.$=AJS.$,this.elementId=this.$el.attr("id"),this.editContentUrl=this.$el.attr("href")},template:e.compile('<div id="{{elementId}}" class="aui-buttons">\n  <button id="edit-content" class="aui-button aui-button-subtle aui-button-split-main edit" style="vertical-align: top;">\n    <span>{{buttonLabel}}</span>\n  </button>\n  <button id="edit-content-alternate" class="aui-button aui-button-subtle aui-dropdown2-trigger aui-button-split-more" aria-owns="edit-content-container-dropdown" aria-haspopup="true"></button>\n</div>\n<div id="edit-content-container-dropdown" class="aui-dropdown2 aui-style-default" data-container="{{elementId}}">\n  <ul class="aui-list-truncate">\n    <li>\n      <a id="replace-edit-content" href="#" title="{{dropDownLabel}}">{{dropDownLabel}}</a>\n    </li>\n  </ul>\n</div>'),replaceElementWithSplitButton:function(){var t,e,i;return i={elementId:this.elementId,buttonLabel:"Edit Contents"},t="Open in Classic Mode",e="Open in In-page Mode",i.dropDownLabel=this.isInPageMode?t:e,this.$el.replaceWith(this.template(i)),this.$el=this.$("#"+this.elementId)},configureInPageEditContent:function(){return this.mainButtonSelector="#"+this.elementId+" #edit-content",this.buttonDropdownSelector="#edit-content-container-dropdown #replace-edit-content",this.isInPageMode?(this.inPageButton=this.mainButtonSelector,this.$(this.buttonDropdownSelector).attr("href",this.editContentUrl)):(this.inPageButton=this.buttonDropdownSelector,this.$(this.mainButtonSelector).on("click",function(t){return function(){return window.location.href=t.editContentUrl}}(this))),new n({el:this.inPageButton,model:new r})},render:function(){return this.getAdminConfiguration().then(function(t){return function(e){return e.isFormMode?(t.isInPageMode=e.isInPageMode,t.replaceElementWithSplitButton(),t.configureInPageEditContent()):void 0}}(this))},getAdminConfiguration:function(){return new i(function(t){return function(e,i){var r,n;return n=function(t){return e(t)},r=function(t,e,r){return i(r)},t.$.ajax({type:"GET",url:""+AJS.contextPath()+"/rest/scaffolding/1.0/admin",success:n,dataType:"json",error:r})}}(this))}})})}.call(this),function(){SCAFFI1IZYM13.require(["require","modules/edit-contents-splitbutton-view"],function(t,e){return AJS.toInit(function(){var t;return t=new e({el:"#edit-scaffold-link"}),t.render()})})}.call(this),SCAFFI1IZYM13.define("scaffolding-popup-button",function(){});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'net.customware.confluence.plugin.scaffolding:view-content', location = 'js/amd/expandable-text-data.min.js' */
(function(){SCAFFI1IZYM13.define("modules/expandable-text-data-object",["require"],function(){var e;return e=function(){function e(e){this.args=e,this.initialize()}return e.prototype.initialize=function(){return this.expand=[],this.setContentMaxHeight(),this.registerClickEvent(),this.registerResizeEvent(),this.renderAll()},e.prototype.setContentMaxHeight=function(){var e,t;e=""+this.args.selectors.container+" "+this.args.selectors.content,t=AJS.$(e).css("line-height"),AJS.$("head").append('<style type="text/css">'+e+" {max-height: "+t+"}</style>")},e.prototype.registerClickEvent=function(){AJS.$(this.args.selectors.toggler).each(function(e){return function(t,s){AJS.$(s).on("click",function(s){e.clickEventHandler(t,s)})}}(this))},e.prototype.clickEventHandler=function(e,t){var s;t.preventDefault(),s=AJS.$(t.target).closest(this.args.selectors.container),this.expand[e]=s.hasClass(this.args.classes.expanded)?!1:!0,this.render(e,s)},e.prototype.registerResizeEvent=function(){AJS.$(window).on("resize",function(e){return function(){e.renderAll()}}(this))},e.prototype.renderAll=function(){AJS.$(this.args.selectors.container).each(function(e){return function(t,s){e.render(t,AJS.$(s))}}(this))},e.prototype.render=function(e,t){var s,n;s=t.find(this.args.selectors.content),n=t.find(this.args.selectors.toggler),t.addClass(this.args.classes.expanded),s.height()<2*parseInt(s.css("line-height"))?t.addClass(this.args.classes.singleLine):t.removeClass(this.args.classes.singleLine),this.expand[e]||t.removeClass(this.args.classes.expanded),this.expand[e]?(n.text(this.args.texts.collapser),n.attr("title",this.args.texts.collapser)):(n.text(this.args.texts.expander),n.attr("title",this.args.texts.expander))},e}()})}).call(this),function(){SCAFFI1IZYM13.require(["require","modules/expandable-text-data-object"],function(e,t){return AJS.toInit(function(){new t({selectors:{container:".expandable-text-data",content:".expandable-text-data-content",toggler:".expandable-text-data-toggler"},classes:{expanded:"expanded",singleLine:"single-line"},texts:{expander:"Show more",collapser:"Show less"}})})})}.call(this),SCAFFI1IZYM13.define("expandable-text-data",function(){});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:proxy-js', location = '/jira/proxy.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{makeRequest:function(a){var b=contextPath||AJS.params.contextPath;if(a.processData){if(a.appId){a.data=AJS.$.extend(a.data||{},{appId:a.appId})}else{if(a.appType){a.data=AJS.$.extend(a.data||{},{appType:a.appType})}}a.data=AJS.$.extend(a.data||{},{path:a.url})}else{var c=a.url;a=AJS.$.extend(a,{beforeSend:function(d){if(a.appId){d.setRequestHeader("X-AppId",a.appId)}else{if(a.appType){d.setRequestHeader("X-AppType",a.appType)}}d.setRequestHeader("X-AppPath",c)}})}a=AJS.$.extend(a,{url:b+"/plugins/servlet/applinks/proxy"});return AJS.$.ajax(a)},createProxyGetUrl:function(b){var c="";if(b.includeContext){c=contextPath||AJS.params.contextPath}var a=c+"/plugins/servlet/applinks/proxy";if(b.appId){a+="?appId="+encodeURIComponent(b.appId)}else{if(b.appType){a+="?appType="+encodeURIComponent(b.appType)}else{AJS.log("You need to specify an appType or appId");return""}}if(b.path){a+="&path="+encodeURIComponent(b.path)}return a}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/rest-service.js' */
AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks",}});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,{PREREADY:AppLinks.Event.NAMESPACE+".preready",READY:AppLinks.Event.NAMESPACE+".ready"});if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(a){AJS.toInit(a)}}AppLinks.initialisationBinder(function(){var b=AJS.$;AppLinks=b.extend(window.AppLinks||{},{failure:function(e){if(e.status==401){window.location.reload()}else{var c=AppLinks.parseError(e);var d=b(".page-error");if(d.length>0){d.html(c).fadeIn("slow")}else{alert("REST request failed: "+c)}}},jsonRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:g,error:c})},xmlRequest:function(d,e,f,g,c){if(f){f=JSON.stringify(f)}b(".page-error").fadeOut("fast");if(!c){c=AppLinks.failure}return jQuery.ajax({url:d,type:e,data:f,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:g,error:c})},parseError:function(f){var c;try{c=JSON.parse(f.responseText)}catch(d){if(f.statusText){return c=f.statusText}else{return f}}if(c.message){if(b.isArray(c.message)){return c.message.join(" ")}return c.message}else{return f.statusText}},put:function(d,e,f,c){return AppLinks.jsonRequest(d,"PUT",e,f,c)},post:function(d,e,f,c){return AppLinks.jsonRequest(d,"POST",e,f,c)},update:function(d,e,c){AppLinks.put(AppLinks.self_link(d),d,e,c)},get:function(d,e,c){return AppLinks.jsonRequest(d,"GET",null,e,c)},getXml:function(d,e,c){return AppLinks.xmlRequest(d,"GET",null,e,c)},self_link:function(e){for(var c=0,f=e.link.length;c<f;c++){var d=e.link[c];if(d.rel=="self"){return d.href}}throw"No self-link found"},del:function(f,e,d){var c;if(typeof(f)=="string"){c=f}else{c=AppLinks.self_link(f)}return AppLinks.jsonRequest(c,"DELETE",null,e,d)},SPI:b.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",setApiVersion:function(c){AppLinks.SPI.API_VERSION=c;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(c){AppLinks.SPI.BASE_URL=c},getRemoteRestBaseUrl:function(c){return c+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(c){return c+"/plugins/servlet"},getAllLinks:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(c,e,d)},getAllLinksWithAuthInfo:function(e,d){var c=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(c,e,d)},getLinksOfType:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+e;return AppLinks.get(c,f,d)},tryToFetchManifest:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(e);return AppLinks.get(c,f,d)},getManifestFor:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/manifest/"+f+".json";return AppLinks.get(c,e,d)},getLocalManifest:function(e,d){var c=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(c,e,d)},getRemoteManifest:function(e,f,d){var c=AppLinks.SPI.getRemoteRestBaseUrl(e)+"/manifest.json";return AppLinks.get(c,f,d)},getRemoteOAuthConsumerInfo:function(e,f,d){var c=AppLinks.SPI.getRemotePluginServletBaseUrl(e)+"/oauth/consumer-info";return AppLinks.getXml(c,f,d)},createStaticUrlAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+f;return AppLinks.post(c,null,e,d)},createLink:function(j,h,l,d,i,k,f,m,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:l,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f};return AppLinks.post(c,g,m,e)},createLinkWithOrphanedTrust:function(j,h,m,d,i,k,f,l,n,e){var c=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var g={applicationLink:j,username:h,password:m,createTwoWayLink:d,customRpcURL:i,rpcUrl:k,configFormValues:f,orphanedTrust:l};return AppLinks.post(c,g,n,e)},verifyTwoWayLinkDetails:function(c,i,j,f,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var g={username:j,password:f,remoteUrl:c,rpcUrl:i};return AppLinks.post(d,g,h,e)},getApplicationLinkInfo:function(e,f,d){var c=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+e;return AppLinks.get(c,f,d)},deleteLink:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+g.id;if(c){d+="?reciprocate=true"}return AppLinks.del(d,f,e)},makePrimary:function(e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+e.id;return AppLinks.post(c,null,d)},relocate:function(h,f,c,g,e){var d=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+h.id+"?newUrl="+encodeURIComponent(f)+"&nowarning="+(c?"true":"false");return AppLinks.post(d,null,g,e)},legacyUpgrade:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+f.id;return AppLinks.post(c,null,e,d)},ualUpgrade:function(g,c,f,e){var d=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+g.id;return AppLinks.post(d,c,f,e)},getEntityTypesForApplicationType:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/type/entity/"+f;return AppLinks.get(c,e,d)},getLocalEntitiesWithLinksToApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+c+".json";return AppLinks.get(d,f,e)},getEntityLinksForApplication:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/"+c+".json";AppLinks.get(d,f,e)},getEntityLinksForApplicationUsingAnonymousAccess:function(c,f,e){var d=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+c+".json";return AppLinks.get(d,f,e)},createNonUalEntityLink:function(l,g,d,f,j,e,k,i){var c=AppLinks.SPI.BASE_URL+"/entitylink/"+l+"/"+g+"?reciprocate=false";var h={applicationId:d,typeId:f,key:j,name:e,isPrimary:false};return AppLinks.put(c,h,k,i)},createEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?reciprocate=";e+=(c?"true":"false");return AppLinks.put(e,d,i,f)},getConfiguredEntityLinks:function(f,e,g,d){var c=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+f+"/"+e+".json";return AppLinks.get(c,g,d)},deleteEntityLink:function(h,g,d,c,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+h+"/"+g+"?typeId="+d.typeId+"&key="+d.key+"&applicationId="+d.applicationId+"&reciprocate="+c;return AppLinks.del(e,i,f)},makePrimaryEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+g+"/"+f+"?typeId="+c.typeId+"&key="+c.key+"&applicationId="+c.applicationId;return AppLinks.post(d,null,h,e)},canDeleteAppLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+f;return AppLinks.get(c,e,d)},canDeleteEntityLink:function(g,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+c.applicationId+"/"+g+"/"+f+"/"+c.typeId+"/"+c.key;return AppLinks.get(d,h,e)},canCreateReciprocateEntityLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+f;return AppLinks.get(c,e,d)},processPermissionCode:function(d){var c={noPermission:function(){},missing:function(){},credentialsRequired:function(e){},authenticationFailed:function(e){},noAuthentication:function(e){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(e){},updateView:function(g,f,e){}};if(!d){d={}}d=b.extend(c,d);return function(f){var e=f.code;if(e=="NO_PERMISSION"){d.noPermission()}else{if(e=="MISSING"){d.missing()}else{if(e=="CREDENTIALS_REQUIRED"){d.credentialsRequired(f.url)}else{if(e=="AUTHENTICATION_FAILED"){d.authenticationFailed(f.url)}else{if(e=="NO_AUTHENTICATION"){d.noAuthentication(f.url)}else{if(e=="NO_AUTHENTICATION_CONFIGURED"){d.noAuthenticationConfigured()}else{if(e=="NO_CONNECTION"){d.noConnection()}else{if(e=="ALLOWED"){d.allowed()}else{d.unrecognisedCode(f.code)}}}}}}}}}},addAuthenticationTrigger:function(e,c,d){if(!d){d={}}if(typeof d.onSuccess=="undefined"){d.onSuccess=function(){location.reload()}}if(typeof d.onFailure=="undefined"){d.onFailure=function(){return true}}b(e).unbind("click");b(e).click(function(){if(d.before){d.before()}AppLinks.authenticateRemoteCredentials(c,d.onSuccess,d.onFailure)})},deleteOrphanedTrust:function(g,e,f,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+e+"/"+g;return AppLinks.del(c,f,d)},getOrphanedTrust:function(e,d){var c=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(c,e,d)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(f,e,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+f;return AppLinks.get(c,e,d)},createApplicationLink:function(f,d,i,j,c,k,g){var e=AppLinks.SPI.BASE_URL+"/applicationlink";var h={id:f,name:d,rpcUrl:i,displayUrl:j,typeId:c};return AppLinks.put(e,h,k,g)},createConsumer:function(e,n,d,m,i,l,g,p,h,k,o,f){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+e+"/authentication/consumer";var j={key:n,name:d,description:m,sharedSecret:i,publicKey:l,outgoing:k,twoLOAllowed:g,executingTwoLOUser:p,twoLOImpersonationAllowed:h};return AppLinks.put(c,j,o,f)},createConsumerAutoConfigure:function(j,i,f,c,h,e){var d=AppLinks.SPI.BASE_URL+"/applicationlink/"+j+"/authentication/consumer?autoConfigure=true";var g={twoLOAllowed:i,executingTwoLOUser:f,twoLOImpersonationAllowed:c};return AppLinks.put(d,g,h,e)},registerProvider:function(i,h,e,g,d){var c=AppLinks.SPI.BASE_URL+"/applicationlink/"+i+"/authentication/provider";var f={config:e,provider:h};return AppLinks.put(c,f,g,d)}},(window.AppLinks&&window.AppLinks.SPI)||{})});var a="applinks";AppLinks.UI={showInfoBox:function(c){b(".aui-message.success").remove();AppLinks.UI.createMessage("success",c,"page-info")},hideInfoBox:function(){b(".aui-message.success").remove()},showErrorBox:function(c){AppLinks.UI.createMessage("error",c,"page-error")},hideErrorBox:function(){b(".aui-message.error").remove()},showWarningBox:function(d){if(b.isArray(d)&&d.length>0){var c=b("<ul></ul>");b(d).each(function(f){c.append(b("<li/>",{text:d[f]}))});var e=b('<div class="page-warning"></div>').append(c);AppLinks.UI.createMessage("warning",e.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",d,"page-warning")}},hideWarningBox:function(){b(".aui-message.warning").remove()},shortenString:function(d,c){if(d.length>c){d=d.substring(0,c)+"..."}return d},createMessage:function(d,e,c){var f=b('<div class="'+c+'">');f.html(e);AJS.messages[d](".applinks-message-bar",{title:"",body:f.wrap("<div></div>").parent().html(),closeable:true})},displayValidationErrorMessages:function(c,f,e){if(b.isArray(e)){b(e).each(function(j,h){var k=b('<div class="error applinks-error">');k.text(h);b(f).find("."+c).append(k)})}else{if(typeof e!="undefined"){var g=b('<div class="error applinks-error">');g.text(e.toString());b(f).find("."+c).append(g)}}},displayValidationError:function(c,d,e){return function(j){if(j.status==401){window.location.reload();return}b(".applinks-error").remove();b(".loading").remove();var h=j.responseText;var i=b.parseJSON(h);var g=i.message;if(typeof i.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(c,d,g)}else{var f=i.fields;b(f).each(function(k){var l=b('<div class="error applinks-error" id="'+f[k]+'-error">');l.text(g[k]);if(b(d).find("."+f[k]).length>0){l.insertAfter(b(d).find("."+f[k]))}else{l.insertAfter(b(d).find("."+c).append(l))}})}b(d).find("."+c).addClass("fully-populated-errors");if(e){e()}}},addProtocolToURL:function(c){var f=b.trim(c);var e=f.toLowerCase();var d=false;if(e.length>=7){if(e.substring(0,7).indexOf("http")!=-1){d=true}}if(!d){f="http://"+f}return f},prettyJoin:function(d,g,f){if(!f){f=AppLinks.I18n.getText("applinks.and")}var c=d.length;var e="";b.each(d,function(h,i){if(h==(c-1)&&c>1){e+=" "+f+"  "+g(i)}else{e+=g(i);if(h+2<c){e+=", "}}});return e},showLoadingIcon:function(c){b('<span class="loading">&nbsp;</span>').insertAfter(c)},hideLoadingIcon:function(c){b(c).next(".loading").remove()},findUrl:function(f){var e=undefined;var g=f.toLowerCase();var d=g.indexOf("http:");if(d==-1){d=g.indexOf("https:")}if(d>-1){var c=g.indexOf(" ",d);if(c==-1){c=g.length}e=f.substring(d,c)}return e},findApplicationType:function(c){c=c.toLowerCase();if(c.indexOf("jira")!=-1){return"jira"}else{if(c.indexOf("fisheye")!=-1){return"fecru"}else{if(c.indexOf("confluence")!=-1){return"confluence"}else{if(c.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(c){return c.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(c){var d={"<":"&lt;",'"':"&quot;","&":"&amp;"};return c.replace(/[<"&]/g,function(e){return d[e]})},refreshOrphanedTrust:function(){var c=function(d){b("tr.orphaned-trust-row").each(function(){var j=b(this);var k=j.attr("data-id");var g=j.attr("data-type");var f=false;for(var e=0;e<d.orphanedTrust.length;e++){var h=d.orphanedTrust[e];if(k==h.id&&g==h.type){f=true;break}}if(!f){j.remove();if(d.orphanedTrust.length==0){b(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(c)},removeCssClass:function(c,d){b(c).removeClass(function(f,h){var g=h.split(" ");var e="";b.each(g,function(i,j){if(j.indexOf(d)!=-1){e=j}});return e})}};(function(){var c=b({});b.each(["bind","unbind","trigger"],function(d,e){AppLinks.UI[e]=function(){return c[e].apply(c,arguments)}})})();AppLinks.I18n={interpolate:function(d,c){if(c){if(!b.isArray(c)){c=[new String(c)]}c.unshift(d);d=AJS.format.apply(AJS,c)}return d},getTextWithPrefix:function(c,d){return AppLinks.I18n.interpolate(appLinksI18n.entries[a+"."+c],d)},getText:function(c,d){return AppLinks.I18n.interpolate(AppLinks.I18n.resolveValue(c),d)},getApplicationTypeName:function(c){return appLinksI18n.entries["applinks.application.type."+c]},getEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type."+c]},getPluralizedEntityTypeName:function(c){return appLinksI18n.entries["applinks.entity.type.plural."+c]},getAuthenticationTypeName:function(c){return appLinksI18n.entries["applinks.auth.provider."+c]},resolveValue:function(c){var d=appLinksI18n.entries[c];return typeof d=="undefined"?c:d}};AppLinks.Docs={createDocLink:function(d,e,c){if(!c){c=""}else{c=" "+c}return b("<a/>",{"class":"ual-help-link"+c,href:AppLinks.Docs.getDocHref(d,e),target:"_blank",text:AppLinks.I18n.getText("applinks.help"),title:AppLinks.I18n.getText("applinks.help")})},getDocHref:function(d,e){var c=AppLinks.Docs.resolveValue("applinks.docs.root")+"/"+AppLinks.Docs.resolveValue(d);if(e){c+="#"+AppLinks.Docs.resolveValue(e)}return c},resolveValue:function(c){var d=applinksDocs.entries[c];return typeof d=="undefined"?c:d}};b(document).trigger(AppLinks.Event.PREREADY);b(document).trigger(AppLinks.Event.READY)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/json2.js' */
if(!this.JSON){this.JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/wizard.js' */
AJS.$(document).bind(AppLinks.Event.PREREADY,function(){(function(d){d.fn.wizard=function(v){var u={width:500,height:350,onshow:function(w,x){return true},aftershow:function(){return true},oncancel:function(){return true},onsubmit:function(){return true},aftersubmit:function(){return true},onnext:function(){return true},onprevious:function(){return true},cancelLabel:AppLinks.I18n.getText("applinks.cancel"),submitLabel:AppLinks.I18n.getText("applinks.create"),nextLabel:AppLinks.I18n.getText("applinks.next"),previousLabel:AppLinks.I18n.getText("applinks.previous"),id:""};if(!v){v={}}v=d.extend(u,v);var t=this;this.each(function(){var D=d(this);var w=new AJS.Dialog(v.width,v.height,v.id);var L=q(w,v.onshow,v.aftershow);var K=c(w,v.oncancel);var z=h(w,v.onsubmit,v.aftersubmit);var M=a(w,v.onprevious);var I=m(w,v.onnext);var G=k(w);var B=o(w);var C=g(w);var H=l(w);var J=s(w);var E=n(w);if(v.showButtonId){d("#"+v.showButtonId).click(L)}var y=f(D);for(var A=0;A<y.length;A++){var F=y[A];j(w,F);if(F.className){w.addHeader(F.title,F.className+"-header")}else{w.addHeader(F.title)}if(A!=0&&d(F.div).attr("previous")!="false"){w.addButton(v.previousLabel,M,"applinks-previous-button")}if(A<y.length-1&&d(F.div).attr("submit")!="true"&&d(F.div).attr("next")!="false"){w.addButton(v.nextLabel,I,"applinks-next-button")}if(d(F.div).attr("submit")=="true"){w.addButton(v.submitLabel,z,"wizard-submit")}if(!w.getPage(A).buttonpanel){w.addButton("",null);d(w.getPage(A).buttonpanel).empty();var x=d('<a class="button-panel-button applinks-cancel-link">'+v.cancelLabel+"</a>");w.getPage(A).buttonpanel.append(x);x.click(K)}else{var x=d('<a class="button-panel-link button-panel-cancel-link applinks-cancel-link">'+v.cancelLabel+"</a>");d(w.getPage(A).buttonpanel).append(x);x.click(K)}if(A<y.length-1){w.addPage()}}t={dialog:w,nextPage:I,prevPage:M,submit:z,cancel:K,show:L,disableNextBtn:G,enableNextBtn:B,disableSubmitBtn:C,enableSubmitBtn:H,disablePreviousBtn:J,enablePreviousBtn:E};w.gotoPage(0);w.gotoPanel(0)});return t};function s(t){return function(){b(r(t,"applinks-previous-button"))}}function n(t){return function(){i(r(t,"applinks-previous-button"))}}function k(t){return function(){b(r(t,"applinks-next-button"))}}function o(t){return function(){i(r(t,"applinks-next-button"))}}function g(t){return function(v){var u=r(t,"wizard-submit");b(u);if(typeof(v)=="undefined"||v){d('<span class="loading">&nbsp;</span>').insertBefore(u)}else{u.parent().find(".loading").remove()}}}function l(t){return function(){var u=r(t,"wizard-submit");i(u);u.parent().find(".loading").remove()}}function r(u,t){return d(u.getPage(u.curpage).buttonpanel).find("."+t)}function p(t){d(t.popup.element).find("form").each(function(){this.reset()})}function i(t){t.attr("disabled",false)}function b(t){t.attr("disabled",true)}function q(t,u,v){return function(w){if(u(t,w)!==false){t.gotoPage(0);t.gotoPanel(0);d(document).unbind("keydown.ual.dialog");d(document).bind("keydown.ual.dialog",e(t));t.show();v()}}}function c(t,u){return function(){if(u(t)!==false){t.hide();p(t)}}}function a(t,u){return function(){if(u(t)!==false){t.prevPage()}}}function m(t,u){return function(){if(u(t)!==false){t.nextPage()}}}function e(t){return function(u){if(u.keyCode===27){p(t);d(document).unbind("keydown.ual.dialog")}}}function h(u,v,t){return function(){if(v(u)!==false){t(u);p(u)}}}function j(v,w){var u=d("> div[panel]",w.div);if(u.length>0){u.each(function(y,z){var x=v.addPanel(z.title,null,z.className,"menu-"+z.id);x.getCurrentPanel().body.append(u[y])})}else{var t=v.addPanel(w.title);t.getCurrentPanel().body.append(w.div)}}function f(v){var u=d(" > div",v);var t=[];u.each(function(x){var w=d(this);t[x]={title:w.attr("title")||null,className:w.attr("class"),div:w}});return t}})(jQuery)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/applinkwizard.js' */
(function(a){AppLinks.Wizard={getWizard:function(){return a("#create-application-link-container").data("wizard")},initAuthenticationUI:function(d){var h=a(d);var f=h.find(".create-reciprocal-link");var c=h.find(".ual-arrow");var l=h.find(".two-way-link-details");var j=h.find(".reciprocal-link-description");var b=h.find(".no-reciprocal-link-description");f.click(function(){if(f.is(":checked")){c.removeClass("no-background");l.show();j.show();b.hide()}else{c.addClass("no-background");l.hide();j.hide();b.show()}});var i=h.find(".same-user-radio-btn");var k=h.find(".different-user-radio-btn");var e=h.find(".different-userbase-image");var g=h.find(".same-userbase-image");i.click(function(){e.addClass("different-userbase-image-grey");g.removeClass("same-userbase-image-grey")});k.click(function(){g.addClass("same-userbase-image-grey");e.removeClass("different-userbase-image-grey")})},initNonUALUI:function(e){var c=a(e);var b=c.find(".application-types");for(var d=0;d<nonAppLinksApplicationTypes.length;d++){a('<option value="'+nonAppLinksApplicationTypes[d].typeId+'">'+nonAppLinksApplicationTypes[d].label+"</option>").appendTo(b)}},fetchManifest:function(e,h,d,b){var i=h.find("#application-url");if(i.val()==""){var c=h.find("#application-types");if(c.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(i);return false}var g=function(j){e.enableSubmitBtn();e.enablePreviousBtn();e.cancel();AppLinks.UI.listApplicationLinks(j.applicationLink.id,"new",j)};AppLinks.SPI.createStaticUrlAppLink(c.val(),g,null);return true}var f=AppLinks.UI.addProtocolToURL(i.val());AppLinks.UI.showLoadingIcon(i);var g=function(l){var k=l;e.enableNextBtn();h.find(".loading").remove();h.find(".reciprocal-rpc-url").val(a("#baseUrl").val());if(typeof l.typeId!="undefined"){AppLinks.Wizard.handleUALManifest(k,h);e.dialog.gotoPage(2);h.find(".reciprocal-link-username").focus();if(d){d(k)}}else{if(l.code=="applinks.warning.redirected.host"&&!i.data("hasWarnedAboutRedirection")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("hasWarnedAboutRedirection","true");var m=function(){a(i).removeData("hasWarnedAboutRedirection");a(i).unbind("change",m)};i.bind("change",m)}else{if(l.code=="applinks.warning.unknown.host"&&!i.data("forceWhenHostIsOffline")){AppLinks.UI.displayValidationErrorMessages("manifest-validation-errors",h,l.warning);i.data("forceWhenHostIsOffline","true");var j=function(){a(i).removeData("forceWhenHostIsOffline");a(i).unbind("change",j)};i.bind("change",j)}else{if(k.code=="applinks.warning.unknown.host"||k.code=="applinks.warning.redirected.host"){delete k.warning;delete k.code}AppLinks.Wizard.handleNonUALManifest(k,f,h);e.dialog.gotoPage(1);h.find(".application-name").focus();if(b){b(k)}}}}};e.disableNextBtn();AppLinks.SPI.tryToFetchManifest(f,g,AppLinks.UI.displayValidationError("manifest-validation-errors",h,function(){e.enableNextBtn()}));return f},handleUALManifest:function(f,e){var c=a(e);c.find(".remote-app-image").removeClass(function(j,l){var k=l.split(" ");var i="";a.each(k,function(m,n){if(n.indexOf("application-type-image-")!=-1){i=n}});return i});c.find(".remote-app-image").addClass("application-type-image-"+f.typeId);c.find(".link-to-app-type").html(AppLinks.I18n.getText("applinks.create.title.link.to",AppLinks.I18n.getApplicationTypeName(f.typeId)));c.find(".remote-app-name").text(AppLinks.UI.shortenString(f.name,20));c.find(".create-reciprocal-link").attr("checked",true);c.find("#reciprocal-link-back-to-server").html(AppLinks.I18n.getText("applinks.create.link.back.to.server",AJS.escapeHtml(f.name)));var d=["administrator",AJS.escapeHtml(f.name),'<a target="_blank" href="'+AppLinks.Docs.getDocHref("applinks.docs.adding.application.link")+'">',"</a>"];var h=f.applinksVersion.split(".");var b=parseInt(h[0]);var g=parseInt(h[1]);if((f.typeId=="jira"||f.typeId=="confluence")&&(b==3&&g<10)){d[0]="system administrator"}c.find(".reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.link",d));c.find(".no-reciprocal-link-description").hide();c.find(".no-reciprocal-link-description").html(AppLinks.I18n.getText("applinks.create.two.way.no.link",AJS.escapeHtml(f.name)));c.find(".reciprocal-link-username").val("");c.find(".reciprocal-link-password").val("");c.find(".ual-arrow").removeClass("no-background");c.find(".two-way-link-details").show();c.find(".reciprocal-link-description").show();c.find(".no-reciprocal-link-description").hide()},handleNonUALManifest:function(d,e,c){var b=a(c);b.find(".application-name").val("");b.find(".application-types option:first-child").attr("selected","selected");b.find(".non-ual-application-url").text(e);if(d.warning){b.find(".create-non-ual-warning").show();b.find(".create-non-ual-warning").html(d.warning)}else{b.find(".create-non-ual-warning").hide()}},checkReciprocalLinkFormThreeStepMode:function(c,d,g,j,f){var h=a(c);if(h.find(".create-reciprocal-link").is(":checked")){var k=a.trim(h.find(".reciprocal-rpc-url").val());if(k==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(h.find(".reciprocal-rpc-url"));if(f){f()}return}var e=h.find(".reciprocal-link-username");var b=h.find(".reciprocal-link-password");if(e.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(e);if(f){f()}return false}var i=function(l){h.find(".same-user-description").find("input").attr("checked",true);h.find(".trust-radio-btn").attr("checked",true);h.find(".same-user-radio-btn").click();g(l)};k=AppLinks.UI.addProtocolToURL(k);AppLinks.SPI.verifyTwoWayLinkDetails(j,k,e.val(),b.val(),i,AppLinks.UI.displayValidationError("two-way-link-errors",c,f));return false}else{d();return false}},checkReciprocalLinkFormTwoStepMode:function(f,h,b,i){var c=a(f);var g=a.trim(c.find(".reciprocal-rpc-url").val());if(g==""){a("<div class='error applinks-error'>"+AppLinks.I18n.getText("applinks.error.url.field.empty")+"</div>").insertAfter(c.find(".reciprocal-rpc-url"));if(i){i()}return}var d=c.find(".reciprocal-link-username");var e=c.find(".reciprocal-link-password");if(d.val()==""){a('<div class="error applinks-error">'+AppLinks.I18n.getText("applinks.error.username.empty")+"</div>").insertAfter(d);if(i){i()}return false}g=AppLinks.UI.addProtocolToURL(g);AppLinks.SPI.verifyTwoWayLinkDetails(h,g,d.val(),e.val(),b,AppLinks.UI.displayValidationError("two-way-link-errors",f,i));return false}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/urls.js' */
(function(){AppLinks.Urls={generateUrl:function(b,a){var c=b;if(typeof a=="undefined"){return c}else{AJS.$.each(a,function(d,e){if(c.indexOf("?")<0){c=c+"?"}else{c=c+"&"}c=c+d+"="+encodeURIComponent(JSON.stringify(e))});return c}},generateApplinksAdminUrl:function(d,c,a){var b=d+"/plugins/servlet/applinks/listApplicationLinks";if(c==="confluence"){b=d+"/admin/listapplicationlinks.action"}return AppLinks.Urls.generateUrl(b,a)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){(function(a){AppLinks.OAuthCallback=function(){};AppLinks.OAuthCallback.prototype.success=function(){this.aouthWindow.close();this.onSuccess()};AppLinks.OAuthCallback.prototype.failure=function(){this.aouthWindow.close();this.onFailure()};AppLinks.OAuthCallback.prototype.show=function(b,d,c){this.onSuccess=d;this.onFailure=c;this.aouthWindow=window.open(b,"com_atlassian_applinks_authentication")};oauthCallback=new AppLinks.OAuthCallback();AppLinks.authenticateRemoteCredentials=function(b,d,c){a(".applinks-error").remove();oauthCallback.show(b,d,c)}})(AJS.$)});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-date-picker', location = 'js-vendor/jquery/jquery-ui/jquery.ui.datepicker.js' */
/*
 * jQuery UI Datepicker 1.8.24
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function($,undefined){$.extend($.ui,{datepicker:{version:"1.8.24"}});var PROP_NAME="datepicker";var dpuuid=new Date().getTime();var instActive;function Datepicker(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};$.extend(this._defaults,this.regional[""]);this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){if(this.debug){console.log.apply("",arguments)}},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(settings){extendRemove(this._defaults,settings||{});return this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase();var inline=(nodeName=="div"||nodeName=="span");if(!target.id){this.uuid+=1;target.id="dp"+this.uuid}var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{});if(nodeName=="input"){this._connectDatepicker(target,inst)}else{if(inline){this._inlineDatepicker(target,inst)}}},_newInst:function(target,inline){var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:id,input:target,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:inline,dpDiv:(!inline?this.dpDiv:bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))}},_connectDatepicker:function(target,inst){var input=$(target);inst.append=$([]);inst.trigger=$([]);if(input.hasClass(this.markerClassName)){return }this._attachments(input,inst);input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});this._autoSize(inst);$.data(target,PROP_NAME,inst);if(inst.settings.disabled){this._disableDatepicker(target)}},_attachments:function(input,inst){var appendText=this._get(inst,"appendText");var isRTL=this._get(inst,"isRTL");if(inst.append){inst.append.remove()}if(appendText){inst.append=$('<span class="'+this._appendClass+'">'+appendText+"</span>");input[isRTL?"before":"after"](inst.append)}input.unbind("focus",this._showDatepicker);if(inst.trigger){inst.trigger.remove()}var showOn=this._get(inst,"showOn");if(showOn=="focus"||showOn=="both"){input.focus(this._showDatepicker)}if(showOn=="button"||showOn=="both"){var buttonText=this._get(inst,"buttonText");var buttonImage=this._get(inst,"buttonImage");inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:buttonImage,alt:buttonText,title:buttonText}):$('<button type="button"></button>').addClass(this._triggerClass).html(buttonImage==""?buttonText:$("<img/>").attr({src:buttonImage,alt:buttonText,title:buttonText})));input[isRTL?"before":"after"](inst.trigger);inst.trigger.click(function(){if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0]){$.datepicker._hideDatepicker()}else{if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){$.datepicker._hideDatepicker();$.datepicker._showDatepicker(input[0])}else{$.datepicker._showDatepicker(input[0])}}return false})}},_autoSize:function(inst){if(this._get(inst,"autoSize")&&!inst.inline){var date=new Date(2009,12-1,20);var dateFormat=this._get(inst,"dateFormat");if(dateFormat.match(/[DM]/)){var findMax=function(names){var max=0;var maxI=0;for(var i=0;i<names.length;i++){if(names[i].length>max){max=names[i].length;maxI=i}}return maxI};date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?"monthNames":"monthNamesShort"))));date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?"dayNames":"dayNamesShort")))+20-date.getDay())}inst.input.attr("size",this._formatDate(inst,date).length)}},_inlineDatepicker:function(target,inst){var divSpan=$(target);if(divSpan.hasClass(this.markerClassName)){return }divSpan.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(event,key,value){inst.settings[key]=value}).bind("getData.datepicker",function(event,key){return this._get(inst,key)});$.data(target,PROP_NAME,inst);this._setDate(inst,this._getDefaultDate(inst),true);this._updateDatepicker(inst);this._updateAlternate(inst);if(inst.settings.disabled){this._disableDatepicker(target)}inst.dpDiv.css("display","block")},_dialogDatepicker:function(input,date,onSelect,settings,pos){var inst=this._dialogInst;if(!inst){this.uuid+=1;var id="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+id+'" style="position: absolute; top: -100px; width: 0px;"/>');this._dialogInput.keydown(this._doKeyDown);$("body").append(this._dialogInput);inst=this._dialogInst=this._newInst(this._dialogInput,false);inst.settings={};$.data(this._dialogInput[0],PROP_NAME,inst)}extendRemove(inst.settings,settings||{});date=(date&&date.constructor==Date?this._formatDate(inst,date):date);this._dialogInput.val(date);this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);if(!this._pos){var browserWidth=document.documentElement.clientWidth;var browserHeight=document.documentElement.clientHeight;var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;var scrollY=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");inst.settings.onSelect=onSelect;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if($.blockUI){$.blockUI(this.dpDiv)}$.data(this._dialogInput[0],PROP_NAME,inst);return this},_destroyDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();$.removeData(target,PROP_NAME);if(nodeName=="input"){inst.append.remove();inst.trigger.remove();$target.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(nodeName=="div"||nodeName=="span"){$target.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=false;inst.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().removeClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)})},_disableDatepicker:function(target){var $target=$(target);var inst=$.data(target,PROP_NAME);if(!$target.hasClass(this.markerClassName)){return }var nodeName=target.nodeName.toLowerCase();if(nodeName=="input"){target.disabled=true;inst.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(nodeName=="div"||nodeName=="span"){var inline=$target.children("."+this._inlineClass);inline.children().addClass("ui-state-disabled");inline.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}}this._disabledInputs=$.map(this._disabledInputs,function(value){return(value==target?null:value)});this._disabledInputs[this._disabledInputs.length]=target},_isDisabledDatepicker:function(target){if(!target){return false}for(var i=0;i<this._disabledInputs.length;i++){if(this._disabledInputs[i]==target){return true}}return false},_getInst:function(target){try{return $.data(target,PROP_NAME)}catch(err){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(target,name,value){var inst=this._getInst(target);if(arguments.length==2&&typeof name=="string"){return(name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null))}var settings=name||{};if(typeof name=="string"){settings={};settings[name]=value}if(inst){if(this._curInst==inst){this._hideDatepicker()}var date=this._getDateDatepicker(target,true);var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");extendRemove(inst.settings,settings);if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){inst.settings.minDate=this._formatDate(inst,minDate)}if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){inst.settings.maxDate=this._formatDate(inst,maxDate)}this._attachments($(target),inst);this._autoSize(inst);this._setDate(inst,date);this._updateAlternate(inst);this._updateDatepicker(inst)}},_changeDatepicker:function(target,name,value){this._optionDatepicker(target,name,value)},_refreshDatepicker:function(target){var inst=this._getInst(target);if(inst){this._updateDatepicker(inst)}},_setDateDatepicker:function(target,date){var inst=this._getInst(target);if(inst){this._setDate(inst,date);this._updateDatepicker(inst);this._updateAlternate(inst)}},_getDateDatepicker:function(target,noDefault){var inst=this._getInst(target);if(inst&&!inst.inline){this._setDateFromField(inst,noDefault)}return(inst?this._getDate(inst):null)},_doKeyDown:function(event){var inst=$.datepicker._getInst(event.target);var handled=true;var isRTL=inst.dpDiv.is(".ui-datepicker-rtl");inst._keyEvent=true;if($.datepicker._datepickerShowing){switch(event.keyCode){case 9:$.datepicker._hideDatepicker();handled=false;break;case 13:var sel=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",inst.dpDiv);if(sel[0]){$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0])}var onSelect=$.datepicker._get(inst,"onSelect");if(onSelect){var dateStr=$.datepicker._formatDate(inst);onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{$.datepicker._hideDatepicker()}return false;break;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");break;case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");break;case 35:if(event.ctrlKey||event.metaKey){$.datepicker._clearDate(event.target)}handled=event.ctrlKey||event.metaKey;break;case 36:if(event.ctrlKey||event.metaKey){$.datepicker._gotoToday(event.target)}handled=event.ctrlKey||event.metaKey;break;case 37:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?+1:-1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M")}break;case 38:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,-7,"D")}handled=event.ctrlKey||event.metaKey;break;case 39:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,(isRTL?-1:+1),"D")}handled=event.ctrlKey||event.metaKey;if(event.originalEvent.altKey){$.datepicker._adjustDate(event.target,(event.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M")}break;case 40:if(event.ctrlKey||event.metaKey){$.datepicker._adjustDate(event.target,+7,"D")}handled=event.ctrlKey||event.metaKey;break;default:handled=false}}else{if(event.keyCode==36&&event.ctrlKey){$.datepicker._showDatepicker(this)}else{handled=false}}if(handled){event.preventDefault();event.stopPropagation()}},_doKeyPress:function(event){var inst=$.datepicker._getInst(event.target);if($.datepicker._get(inst,"constrainInput")){var chars=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);return event.ctrlKey||event.metaKey||(chr<" "||!chars||chars.indexOf(chr)>-1)}},_doKeyUp:function(event){var inst=$.datepicker._getInst(event.target);if(inst.input.val()!=inst.lastVal){try{var date=$.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),(inst.input?inst.input.val():null),$.datepicker._getFormatConfig(inst));if(date){$.datepicker._setDateFromField(inst);$.datepicker._updateAlternate(inst);$.datepicker._updateDatepicker(inst)}}catch(err){$.datepicker.log(err)}}return true},_showDatepicker:function(input){input=input.target||input;if(input.nodeName.toLowerCase()!="input"){input=$("input",input.parentNode)[0]}if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input){return }var inst=$.datepicker._getInst(input);if($.datepicker._curInst&&$.datepicker._curInst!=inst){$.datepicker._curInst.dpDiv.stop(true,true);if(inst&&$.datepicker._datepickerShowing){$.datepicker._hideDatepicker($.datepicker._curInst.input[0])}}var beforeShow=$.datepicker._get(inst,"beforeShow");var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};if(beforeShowSettings===false){return }extendRemove(inst.settings,beforeShowSettings);inst.lastVal=null;$.datepicker._lastInput=input;$.datepicker._setDateFromField(inst);if($.datepicker._inDialog){input.value=""}if(!$.datepicker._pos){$.datepicker._pos=$.datepicker._findPos(input);$.datepicker._pos[1]+=input.offsetHeight}var isFixed=false;$(input).parents().each(function(){isFixed|=$(this).css("position")=="fixed";return !isFixed});if(isFixed&&$.browser.opera){$.datepicker._pos[0]-=document.documentElement.scrollLeft;$.datepicker._pos[1]-=document.documentElement.scrollTop}var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null;inst.dpDiv.empty();inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});$.datepicker._updateDatepicker(inst);offset=$.datepicker._checkOffset(inst,offset,isFixed);inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(isFixed?"fixed":"absolute")),display:"none",left:offset.left+"px",top:offset.top+"px"});if(!inst.inline){var showAnim=$.datepicker._get(inst,"showAnim");var duration=$.datepicker._get(inst,"duration");var postProcess=function(){var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){var borders=$.datepicker._getBorders(inst.dpDiv);cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}};inst.dpDiv.zIndex($(input).zIndex()+1);$.datepicker._datepickerShowing=true;if($.effects&&$.effects[showAnim]){inst.dpDiv.show(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[showAnim||"show"]((showAnim?duration:null),postProcess)}if(!showAnim||!duration){postProcess()}if(inst.input.is(":visible")&&!inst.input.is(":disabled")){inst.input.focus()}$.datepicker._curInst=inst}},_updateDatepicker:function(inst){var self=this;self.maxRows=4;var borders=$.datepicker._getBorders(inst.dpDiv);instActive=inst;inst.dpDiv.empty().append(this._generateHTML(inst));this._attachHandlers(inst);var cover=inst.dpDiv.find("iframe.ui-datepicker-cover");if(!!cover.length){cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})}inst.dpDiv.find("."+this._dayOverClass+" a").mouseover();var numMonths=this._getNumberOfMonths(inst);var cols=numMonths[1];var width=17;inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(cols>1){inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(width*cols)+"em")}inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&inst.input[0]!=document.activeElement){inst.input.focus()}if(inst.yearshtml){var origyearshtml=inst.yearshtml;setTimeout(function(){if(origyearshtml===inst.yearshtml&&inst.yearshtml){inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml)}origyearshtml=inst.yearshtml=null},0)}},_getBorders:function(elem){var convert=function(value){return{thin:1,medium:2,thick:3}[value]||value};return[parseFloat(convert(elem.css("border-left-width"))),parseFloat(convert(elem.css("border-top-width")))]},_checkOffset:function(inst,offset,isFixed){var dpWidth=inst.dpDiv.outerWidth();var dpHeight=inst.dpDiv.outerHeight();var inputWidth=inst.input?inst.input.outerWidth():0;var inputHeight=inst.input?inst.input.outerHeight():0;var viewWidth=document.documentElement.clientWidth+(isFixed?0:$(document).scrollLeft());var viewHeight=document.documentElement.clientHeight+(isFixed?0:$(document).scrollTop());offset.left-=(this._get(inst,"isRTL")?(dpWidth-inputWidth):0);offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?Math.abs(offset.left+dpWidth-viewWidth):0);offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?Math.abs(dpHeight+inputHeight):0);return offset},_findPos:function(obj){var inst=this._getInst(obj);var isRTL=this._get(inst,"isRTL");while(obj&&(obj.type=="hidden"||obj.nodeType!=1||$.expr.filters.hidden(obj))){obj=obj[isRTL?"previousSibling":"nextSibling"]}var position=$(obj).offset();return[position.left,position.top]},_hideDatepicker:function(input){var inst=this._curInst;if(!inst||(input&&inst!=$.data(input,PROP_NAME))){return }if(this._datepickerShowing){var showAnim=this._get(inst,"showAnim");var duration=this._get(inst,"duration");var postProcess=function(){$.datepicker._tidyDialog(inst)};if($.effects&&$.effects[showAnim]){inst.dpDiv.hide(showAnim,$.datepicker._get(inst,"showOptions"),duration,postProcess)}else{inst.dpDiv[(showAnim=="slideDown"?"slideUp":(showAnim=="fadeIn"?"fadeOut":"hide"))]((showAnim?duration:null),postProcess)}if(!showAnim){postProcess()}this._datepickerShowing=false;var onClose=this._get(inst,"onClose");if(onClose){onClose.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if($.blockUI){$.unblockUI();$("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(inst){inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(event){if(!$.datepicker._curInst){return }var $target=$(event.target),inst=$.datepicker._getInst($target[0]);if((($target[0].id!=$.datepicker._mainDivId&&$target.parents("#"+$.datepicker._mainDivId).length==0&&!$target.hasClass($.datepicker.markerClassName)&&!$target.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst)){$.datepicker._hideDatepicker()}},_adjustDate:function(id,offset,period){var target=$(id);var inst=this._getInst(target[0]);if(this._isDisabledDatepicker(target[0])){return }this._adjustInstDate(inst,offset+(period=="M"?this._get(inst,"showCurrentAtPos"):0),period);this._updateDatepicker(inst)},_gotoToday:function(id){var target=$(id);var inst=this._getInst(target[0]);if(this._get(inst,"gotoCurrent")&&inst.currentDay){inst.selectedDay=inst.currentDay;inst.drawMonth=inst.selectedMonth=inst.currentMonth;inst.drawYear=inst.selectedYear=inst.currentYear}else{var date=new Date();inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear()}this._notifyChange(inst);this._adjustDate(target)},_selectMonthYear:function(id,select,period){var target=$(id);var inst=this._getInst(target[0]);inst["selected"+(period=="M"?"Month":"Year")]=inst["draw"+(period=="M"?"Month":"Year")]=parseInt(select.options[select.selectedIndex].value,10);this._notifyChange(inst);this._adjustDate(target)},_selectDay:function(id,month,year,td){var target=$(id);if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){return }var inst=this._getInst(target[0]);inst.selectedDay=inst.currentDay=$("a",td).html();inst.selectedMonth=inst.currentMonth=month;inst.selectedYear=inst.currentYear=year;this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear))},_clearDate:function(id){var target=$(id);var inst=this._getInst(target[0]);this._selectDate(target,"")},_selectDate:function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);dateStr=(dateStr!=null?dateStr:this._formatDate(inst));if(inst.input){inst.input.val(dateStr)}this._updateAlternate(inst);var onSelect=this._get(inst,"onSelect");if(onSelect){onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst])}else{if(inst.input){inst.input.trigger("change")}}if(inst.inline){this._updateDatepicker(inst)}else{this._hideDatepicker();this._lastInput=inst.input[0];if(typeof (inst.input[0])!="object"){inst.input.focus()}this._lastInput=null}},_updateAlternate:function(inst){var altField=this._get(inst,"altField");if(altField){var altFormat=this._get(inst,"altFormat")||this._get(inst,"dateFormat");var date=this._getDate(inst);var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));$(altField).each(function(){$(this).val(dateStr)})}},noWeekends:function(date){var day=date.getDay();return[(day>0&&day<6),""]},iso8601Week:function(date){var checkDate=new Date(date.getTime());checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));var time=checkDate.getTime();checkDate.setMonth(0);checkDate.setDate(1);return Math.floor(Math.round((time-checkDate)/86400000)/7)+1},parseDate:function(format,value,settings){if(format==null||value==null){throw"Invalid arguments"}value=(typeof value=="object"?value.toString():value+"");if(value==""){return null}var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var year=-1;var month=-1;var day=-1;var doy=-1;var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var getNumber=function(match){var isDoubled=lookAhead(match);var size=(match=="@"?14:(match=="!"?20:(match=="y"&&isDoubled?4:(match=="o"?3:2))));var digits=new RegExp("^\\d{1,"+size+"}");var num=value.substring(iValue).match(digits);if(!num){throw"Missing number at position "+iValue}iValue+=num[0].length;return parseInt(num[0],10)};var getName=function(match,shortNames,longNames){var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){return[[k,v]]}).sort(function(a,b){return -(a[1].length-b[1].length)});var index=-1;$.each(names,function(i,pair){var name=pair[1];if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){index=pair[0];iValue+=name.length;return false}});if(index!=-1){return index+1}else{throw"Unknown name at position "+iValue}};var checkLiteral=function(){if(value.charAt(iValue)!=format.charAt(iFormat)){throw"Unexpected literal at position "+iValue}iValue++};var iValue=0;for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{checkLiteral()}}else{switch(format.charAt(iFormat)){case"d":day=getNumber("d");break;case"D":getName("D",dayNamesShort,dayNames);break;case"o":doy=getNumber("o");break;case"m":month=getNumber("m");break;case"M":month=getName("M",monthNamesShort,monthNames);break;case"y":year=getNumber("y");break;case"@":var date=new Date(getNumber("@"));year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"!":var date=new Date((getNumber("!")-this._ticksTo1970)/10000);year=date.getFullYear();month=date.getMonth()+1;day=date.getDate();break;case"'":if(lookAhead("'")){checkLiteral()}else{literal=true}break;default:checkLiteral()}}}if(iValue<value.length){throw"Extra/unparsed characters found in date: "+value.substring(iValue)}if(year==-1){year=new Date().getFullYear()}else{if(year<100){year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=shortYearCutoff?0:-100)}}if(doy>-1){month=1;day=doy;do{var dim=this._getDaysInMonth(year,month-1);if(day<=dim){break}month++;day-=dim}while(true)}var date=this._daylightSavingAdjust(new Date(year,month-1,day));if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day){throw"Invalid date"}return date},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(format,date,settings){if(!date){return""}var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};var formatNumber=function(match,value,len){var num=""+value;if(lookAhead(match)){while(num.length<len){num="0"+num}}return num};var formatName=function(match,value,shortNames,longNames){return(lookAhead(match)?longNames[value]:shortNames[value])};var output="";var literal=false;if(date){for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{output+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":output+=formatNumber("d",date.getDate(),2);break;case"D":output+=formatName("D",date.getDay(),dayNamesShort,dayNames);break;case"o":output+=formatNumber("o",Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);break;case"m":output+=formatNumber("m",date.getMonth()+1,2);break;case"M":output+=formatName("M",date.getMonth(),monthNamesShort,monthNames);break;case"y":output+=(lookAhead("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);break;case"@":output+=date.getTime();break;case"!":output+=date.getTime()*10000+this._ticksTo1970;break;case"'":if(lookAhead("'")){output+="'"}else{literal=true}break;default:output+=format.charAt(iFormat)}}}}return output},_possibleChars:function(format){var chars="";var literal=false;var lookAhead=function(match){var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);if(matches){iFormat++}return matches};for(var iFormat=0;iFormat<format.length;iFormat++){if(literal){if(format.charAt(iFormat)=="'"&&!lookAhead("'")){literal=false}else{chars+=format.charAt(iFormat)}}else{switch(format.charAt(iFormat)){case"d":case"m":case"y":case"@":chars+="0123456789";break;case"D":case"M":return null;case"'":if(lookAhead("'")){chars+="'"}else{literal=true}break;default:chars+=format.charAt(iFormat)}}}return chars},_get:function(inst,name){return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name]},_setDateFromField:function(inst,noDefault){if(inst.input.val()==inst.lastVal){return }var dateFormat=this._get(inst,"dateFormat");var dates=inst.lastVal=inst.input?inst.input.val():null;var date,defaultDate;date=defaultDate=this._getDefaultDate(inst);var settings=this._getFormatConfig(inst);try{date=this.parseDate(dateFormat,dates,settings)||defaultDate}catch(event){this.log(event);dates=(noDefault?"":dates)}inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();inst.currentDay=(dates?date.getDate():0);inst.currentMonth=(dates?date.getMonth():0);inst.currentYear=(dates?date.getFullYear():0);this._adjustInstDate(inst)},_getDefaultDate:function(inst){return this._restrictMinMax(inst,this._determineDate(inst,this._get(inst,"defaultDate"),new Date()))},_determineDate:function(inst,date,defaultDate){var offsetNumeric=function(offset){var date=new Date();date.setDate(date.getDate()+offset);return date};var offsetString=function(offset){try{return $.datepicker.parseDate($.datepicker._get(inst,"dateFormat"),offset,$.datepicker._getFormatConfig(inst))}catch(e){}var date=(offset.toLowerCase().match(/^c/)?$.datepicker._getDate(inst):null)||new Date();var year=date.getFullYear();var month=date.getMonth();var day=date.getDate();var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;var matches=pattern.exec(offset);while(matches){switch(matches[2]||"d"){case"d":case"D":day+=parseInt(matches[1],10);break;case"w":case"W":day+=parseInt(matches[1],10)*7;break;case"m":case"M":month+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break;case"y":case"Y":year+=parseInt(matches[1],10);day=Math.min(day,$.datepicker._getDaysInMonth(year,month));break}matches=pattern.exec(offset)}return new Date(year,month,day)};var newDate=(date==null||date===""?defaultDate:(typeof date=="string"?offsetString(date):(typeof date=="number"?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));newDate=(newDate&&newDate.toString()=="Invalid Date"?defaultDate:newDate);if(newDate){newDate.setHours(0);newDate.setMinutes(0);newDate.setSeconds(0);newDate.setMilliseconds(0)}return this._daylightSavingAdjust(newDate)},_daylightSavingAdjust:function(date){if(!date){return null}date.setHours(date.getHours()>12?date.getHours()+2:0);return date},_setDate:function(inst,date,noChange){var clear=!date;var origMonth=inst.selectedMonth;var origYear=inst.selectedYear;var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));inst.selectedDay=inst.currentDay=newDate.getDate();inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange){this._notifyChange(inst)}this._adjustInstDate(inst);if(inst.input){inst.input.val(clear?"":this._formatDate(inst))}},_getDate:function(inst){var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return startDate},_attachHandlers:function(inst){var stepMonths=this._get(inst,"stepMonths");var id="#"+inst.id.replace(/\\\\/g,"\\");inst.dpDiv.find("[data-handler]").map(function(){var handler={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,-stepMonths,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(id,+stepMonths,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(id)},selectDay:function(){window["DP_jQuery_"+dpuuid].datepicker._selectDay(id,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"M");return false},selectYear:function(){window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(id,this,"Y");return false}};$(this).bind(this.getAttribute("data-event"),handler[this.getAttribute("data-handler")])})},_generateHTML:function(inst){var today=new Date();today=this._daylightSavingAdjust(new Date(today.getFullYear(),today.getMonth(),today.getDate()));var isRTL=this._get(inst,"isRTL");var showButtonPanel=this._get(inst,"showButtonPanel");var hideIfNoPrevNext=this._get(inst,"hideIfNoPrevNext");var navigationAsDateFormat=this._get(inst,"navigationAsDateFormat");var numMonths=this._getNumberOfMonths(inst);var showCurrentAtPos=this._get(inst,"showCurrentAtPos");var stepMonths=this._get(inst,"stepMonths");var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var drawMonth=inst.drawMonth-showCurrentAtPos;var drawYear=inst.drawYear;if(drawMonth<0){drawMonth+=12;drawYear--}if(maxDate){var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){drawMonth--;if(drawMonth<0){drawMonth=11;drawYear--}}}inst.drawMonth=drawMonth;inst.drawYear=drawYear;var prevText=this._get(inst,"prevText");prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),this._getFormatConfig(inst)));var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"e":"w")+'">'+prevText+"</span></a>"));var nextText=this._get(inst,"nextText");nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),this._getFormatConfig(inst)));var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>":(hideIfNoPrevNext?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?"w":"e")+'">'+nextText+"</span></a>"));var currentText=this._get(inst,"currentText");var gotoDate=(this._get(inst,"gotoCurrent")&&inst.currentDay?currentDate:today);currentText=(!navigationAsDateFormat?currentText:this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(inst,"closeText")+"</button>":"");var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:"")+(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+currentText+"</button>":"")+(isRTL?"":controls)+"</div>":"";var firstDay=parseInt(this._get(inst,"firstDay"),10);firstDay=(isNaN(firstDay)?0:firstDay);var showWeek=this._get(inst,"showWeek");var dayNames=this._get(inst,"dayNames");var dayNamesShort=this._get(inst,"dayNamesShort");var dayNamesMin=this._get(inst,"dayNamesMin");var monthNames=this._get(inst,"monthNames");var monthNamesShort=this._get(inst,"monthNamesShort");var beforeShowDay=this._get(inst,"beforeShowDay");var showOtherMonths=this._get(inst,"showOtherMonths");var selectOtherMonths=this._get(inst,"selectOtherMonths");var calculateWeek=this._get(inst,"calculateWeek")||this.iso8601Week;var defaultDate=this._getDefaultDate(inst);var html="";for(var row=0;row<numMonths[0];row++){var group="";this.maxRows=4;for(var col=0;col<numMonths[1];col++){var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));var cornerClass=" ui-corner-all";var calender="";if(isMultiMonth){calender+='<div class="ui-datepicker-group';if(numMonths[1]>1){switch(col){case 0:calender+=" ui-datepicker-group-first";cornerClass=" ui-corner-"+(isRTL?"right":"left");break;case numMonths[1]-1:calender+=" ui-datepicker-group-last";cornerClass=" ui-corner-"+(isRTL?"left":"right");break;default:calender+=" ui-datepicker-group-middle";cornerClass="";break}}calender+='">'}calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):"")+(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):"")+this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,row>0||col>0,monthNames,monthNamesShort)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,"weekHeader")+"</th>":"");for(var dow=0;dow<7;dow++){var day=(dow+firstDay)%7;thead+="<th"+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+dayNames[day]+'">'+dayNamesMin[day]+"</span></th>"}calender+=thead+"</tr></thead><tbody>";var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth){inst.selectedDay=Math.min(inst.selectedDay,daysInMonth)}var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;var curRows=Math.ceil((leadDays+daysInMonth)/7);var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);this.maxRows=numRows;var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));for(var dRow=0;dRow<numRows;dRow++){calender+="<tr>";var tbody=(!showWeek?"":'<td class="ui-datepicker-week-col">'+this._get(inst,"calculateWeek")(printDate)+"</td>");for(var dow=0;dow<7;dow++){var daySettings=(beforeShowDay?beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,""]);var otherMonth=(printDate.getMonth()!=drawMonth);var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);tbody+='<td class="'+((dow+firstDay+6)%7>=5?" ui-datepicker-week-end":"")+(otherMonth?" ui-datepicker-other-month":"")+((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?" "+this._dayOverClass:"")+(unselectable?" "+this._unselectableClass+" ui-state-disabled":"")+(otherMonth&&!showOtherMonths?"":" "+daySettings[1]+(printDate.getTime()==currentDate.getTime()?" "+this._currentClass:"")+(printDate.getTime()==today.getTime()?" ui-datepicker-today":""))+'"'+((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':"")+(unselectable?"":' data-handler="selectDay" data-event="click" data-month="'+printDate.getMonth()+'" data-year="'+printDate.getFullYear()+'"')+">"+(otherMonth&&!showOtherMonths?"&#xa0;":(unselectable?'<span class="ui-state-default">'+printDate.getDate()+"</span>":'<a class="ui-state-default'+(printDate.getTime()==today.getTime()?" ui-state-highlight":"")+(printDate.getTime()==currentDate.getTime()?" ui-state-active":"")+(otherMonth?" ui-priority-secondary":"")+'" href="#">'+printDate.getDate()+"</a>"))+"</td>";printDate.setDate(printDate.getDate()+1);printDate=this._daylightSavingAdjust(printDate)}calender+=tbody+"</tr>"}drawMonth++;if(drawMonth>11){drawMonth=0;drawYear++}calender+="</tbody></table>"+(isMultiMonth?"</div>"+((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':""):"");group+=calender}html+=group}html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");inst._keyEvent=false;return html},_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,secondary,monthNames,monthNamesShort){var changeMonth=this._get(inst,"changeMonth");var changeYear=this._get(inst,"changeYear");var showMonthAfterYear=this._get(inst,"showMonthAfterYear");var html='<div class="ui-datepicker-title">';var monthHtml="";if(secondary||!changeMonth){monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+"</span>"}else{var inMinYear=(minDate&&minDate.getFullYear()==drawYear);var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);monthHtml+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var month=0;month<12;month++){if((!inMinYear||month>=minDate.getMonth())&&(!inMaxYear||month<=maxDate.getMonth())){monthHtml+='<option value="'+month+'"'+(month==drawMonth?' selected="selected"':"")+">"+monthNamesShort[month]+"</option>"}}monthHtml+="</select>"}if(!showMonthAfterYear){html+=monthHtml+(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")}if(!inst.yearshtml){inst.yearshtml="";if(secondary||!changeYear){html+='<span class="ui-datepicker-year">'+drawYear+"</span>"}else{var years=this._get(inst,"yearRange").split(":");var thisYear=new Date().getFullYear();var determineYear=function(value){var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):(value.match(/[+-].*/)?thisYear+parseInt(value,10):parseInt(value,10)));return(isNaN(year)?thisYear:year)};var year=determineYear(years[0]);var endYear=Math.max(year,determineYear(years[1]||""));year=(minDate?Math.max(year,minDate.getFullYear()):year);endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);inst.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;year<=endYear;year++){inst.yearshtml+='<option value="'+year+'"'+(year==drawYear?' selected="selected"':"")+">"+year+"</option>"}inst.yearshtml+="</select>";html+=inst.yearshtml;inst.yearshtml=null}}html+=this._get(inst,"yearSuffix");if(showMonthAfterYear){html+=(secondary||!(changeMonth&&changeYear)?"&#xa0;":"")+monthHtml}html+="</div>";return html},_adjustInstDate:function(inst,offset,period){var year=inst.drawYear+(period=="Y"?offset:0);var month=inst.drawMonth+(period=="M"?offset:0);var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+(period=="D"?offset:0);var date=this._restrictMinMax(inst,this._daylightSavingAdjust(new Date(year,month,day)));inst.selectedDay=date.getDate();inst.drawMonth=inst.selectedMonth=date.getMonth();inst.drawYear=inst.selectedYear=date.getFullYear();if(period=="M"||period=="Y"){this._notifyChange(inst)}},_restrictMinMax:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");var newDate=(minDate&&date<minDate?minDate:date);newDate=(maxDate&&newDate>maxDate?maxDate:newDate);return newDate},_notifyChange:function(inst){var onChange=this._get(inst,"onChangeMonthYear");if(onChange){onChange.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst])}},_getNumberOfMonths:function(inst){var numMonths=this._get(inst,"numberOfMonths");return(numMonths==null?[1,1]:(typeof numMonths=="number"?[1,numMonths]:numMonths))},_getMinMaxDate:function(inst,minMax){return this._determineDate(inst,this._get(inst,minMax+"Date"),null)},_getDaysInMonth:function(year,month){return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate()},_getFirstDayOfMonth:function(year,month){return new Date(year,month,1).getDay()},_canAdjustMonth:function(inst,offset,curYear,curMonth){var numMonths=this._getNumberOfMonths(inst);var date=this._daylightSavingAdjust(new Date(curYear,curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));if(offset<0){date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()))}return this._isInRange(inst,date)},_isInRange:function(inst,date){var minDate=this._getMinMaxDate(inst,"min");var maxDate=this._getMinMaxDate(inst,"max");return((!minDate||date.getTime()>=minDate.getTime())&&(!maxDate||date.getTime()<=maxDate.getTime()))},_getFormatConfig:function(inst){var shortYearCutoff=this._get(inst,"shortYearCutoff");shortYearCutoff=(typeof shortYearCutoff!="string"?shortYearCutoff:new Date().getFullYear()%100+parseInt(shortYearCutoff,10));return{shortYearCutoff:shortYearCutoff,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")}},_formatDate:function(inst,day,month,year){if(!day){inst.currentDay=inst.selectedDay;inst.currentMonth=inst.selectedMonth;inst.currentYear=inst.selectedYear}var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,month,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst))}});function bindHover(dpDiv){var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return dpDiv.bind("mouseout",function(event){var elem=$(event.target).closest(selector);if(!elem.length){return }elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(event){var elem=$(event.target).closest(selector);if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||!elem.length){return }elem.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");elem.addClass("ui-state-hover");if(elem.hasClass("ui-datepicker-prev")){elem.addClass("ui-datepicker-prev-hover")}if(elem.hasClass("ui-datepicker-next")){elem.addClass("ui-datepicker-next-hover")}})}function extendRemove(target,props){$.extend(target,props);for(var name in props){if(props[name]==null||props[name]==undefined){target[name]=props[name]}}return target}function isArray(a){return(a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))))}$.fn.datepicker=function(options){if(!this.length){return this}if(!$.datepicker.initialized){$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);$.datepicker.initialized=true}var otherArgs=Array.prototype.slice.call(arguments,1);if(typeof options=="string"&&(options=="isDisabled"||options=="getDate"||options=="widget")){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}if(options=="option"&&arguments.length==2&&typeof arguments[1]=="string"){return $.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this[0]].concat(otherArgs))}return this.each(function(){typeof options=="string"?$.datepicker["_"+options+"Datepicker"].apply($.datepicker,[this].concat(otherArgs)):$.datepicker._attachDatepicker(this,options)})};$.datepicker=new Datepicker();$.datepicker.initialized=false;$.datepicker.uuid=new Date().getTime();$.datepicker.version="1.8.24";window["DP_jQuery_"+dpuuid]=$})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.auiplugin:aui-date-picker', location = 'js/aui-date-picker.js' */
(function(A){var B=0;AJS.DatePicker=function(H,D){var G,C,E,F;G={};F=B++;E=A(H);E.attr("data-aui-dp-uuid",F);D=A.extend(undefined,AJS.DatePicker.prototype.defaultOptions,D);G.getField=function(){return E};G.getOptions=function(){return D};C=function(){var O,L,T,P,S,R,U,Q,I,K;G.hide=function(){I.hide()};G.show=function(){I.show()};G.setDate=function(W){if(typeof O!=="undefined"){O.datepicker("setDate",W)}};G.getDate=function(W){if(typeof O!=="undefined"){return O.datepicker("getDate")}};R=function(X){K.off();if(D.hint){var Y=A("<div/>").addClass("aui-datepicker-hint");Y.append("<span/>").text(D.hint);K.append(Y)}O=A("<div/>");O.attr("data-aui-dp-popup-uuid",F);K.append(O);var W={dateFormat:D.dateFormat,defaultDate:E.val(),maxDate:E.attr("max"),minDate:E.attr("min"),nextText:">",onSelect:function(a,Z){E.val(a);E.change();G.hide();U=true;E.focus();D.onSelect&&D.onSelect.call(this,a)},onChangeMonthYear:function(){setTimeout(I.refresh,0)},prevText:"<"};A.extend(W,X);if(D.firstDay>-1){W.firstDay=D.firstDay}if(typeof E.attr("step")!=="undefined"){AJS.log("WARNING: The AJS date picker polyfill currently does not support the step attribute!")}O.datepicker(W);E.on("focusout",T);E.on("propertychange keyup input paste",S)};L=function(X){var W=A(X.target);X.preventDefault();if(!(W.closest(K).length||W.is(E))){if(!W.closest(".ui-datepicker-header").length){G.hide()}}};T=function(W){if(!(Q)){A("body").on("focus blur click mousedown","*",L);Q=true}};P=function(W){if(!(U)){G.show()}else{U=false}};S=function(W){var X=A(this).val();if(X){O.datepicker("setDate",E.val());O.datepicker("option",{maxDate:E.attr("max"),minDate:E.attr("min")})}};G.destroyPolyfill=function(){G.hide();E.attr("placeholder",null);E.off("propertychange keyup input paste",S);E.off("focus click",P);E.off("focusout",T);if(AJS.DatePicker.prototype.browserSupportsDateField){E[0].type="date"}if(typeof O!=="undefined"){O.datepicker("destroy")}delete G.destroyPolyfill;delete G.show;delete G.hide};U=false;Q=false;if(!(D.languageCode in AJS.DatePicker.prototype.localisations)){D.languageCode=""}var N=AJS.DatePicker.prototype.localisations[D.languageCode];var V="";var J=240;if(N.size==="large"){J=325;V="aui-datepicker-dialog-large"}var M={hideCallback:function(){A("body").off("focus blur click mousedown","*",L);Q=false},hideDelay:null,noBind:true,persistent:true,width:J};if(D.position){M.calculatePositions=function(W,Y){var X=A(W[0]);return D.position.call(this,X,Y)}}I=AJS.InlineDialog(E,undefined,function(X,W,Y){if(typeof O==="undefined"){K=X;R(N)}Y()},M);I.addClass("aui-datepicker-dialog");I.addClass(V);E.on("focus click",P);E.attr("placeholder",D.dateFormat);if(D.overrideBrowserDefault&&AJS.DatePicker.prototype.browserSupportsDateField){E[0].type="text"}};G.reset=function(){if(typeof G.destroyPolyfill==="function"){G.destroyPolyfill()}if((!(AJS.DatePicker.prototype.browserSupportsDateField))||D.overrideBrowserDefault){C()}};G.reset();return G};AJS.DatePicker.prototype.browserSupportsDateField=(A('<input type="date" />')[0].type==="date");AJS.DatePicker.prototype.defaultOptions={overrideBrowserDefault:false,firstDay:-1,languageCode:AJS.$("html").attr("lang")||"en-AU",dateFormat:A.datepicker.W3C};AJS.DatePicker.prototype.localisations={"":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:0,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},af:{dayNames:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],dayNamesMin:["Son","Maa","Din","Woe","Don","Vry","Sat"],firstDay:1,isRTL:false,monthNames:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],showMonthAfterYear:false,yearSuffix:""},"ar-DZ":{dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],firstDay:6,isRTL:true,monthNames:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],showMonthAfterYear:false,yearSuffix:""},ar:{dayNames:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],dayNamesMin:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],firstDay:6,isRTL:true,monthNames:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],showMonthAfterYear:false,yearSuffix:""},az:{dayNames:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"],dayNamesMin:["B","Be","Ça","Ç","Ca","C","Ş"],firstDay:1,isRTL:false,monthNames:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],showMonthAfterYear:false,yearSuffix:""},bg:{dayNames:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"],dayNamesMin:["Нед","Пон","Вто","Сря","Чет","Пет","Съб"],firstDay:1,isRTL:false,monthNames:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],showMonthAfterYear:false,yearSuffix:""},bs:{dayNames:["Nedelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Mart","April","Maj","Juni","Juli","August","Septembar","Oktobar","Novembar","Decembar"],showMonthAfterYear:false,yearSuffix:""},ca:{dayNames:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],dayNamesMin:["Dug","Dln","Dmt","Dmc","Djs","Dvn","Dsb"],firstDay:1,isRTL:false,monthNames:["Gener","Febrer","Mar&ccedil;","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],showMonthAfterYear:false,yearSuffix:""},cs:{dayNames:["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],dayNamesMin:["ne","po","út","st","čt","pá","so"],firstDay:1,isRTL:false,monthNames:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"],showMonthAfterYear:false,yearSuffix:""},da:{dayNames:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],dayNamesMin:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},de:{dayNames:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],dayNamesMin:["So","Mo","Di","Mi","Do","Fr","Sa"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],showMonthAfterYear:false,yearSuffix:""},el:{dayNames:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"],dayNamesMin:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],firstDay:1,isRTL:false,monthNames:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],showMonthAfterYear:false,yearSuffix:""},"en-AU":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},"en-GB":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},"en-NZ":{dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesMin:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,isRTL:false,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],showMonthAfterYear:false,yearSuffix:""},eo:{dayNames:["Dimanĉo","Lundo","Mardo","Merkredo","Ĵaŭdo","Vendredo","Sabato"],dayNamesMin:["Dim","Lun","Mar","Mer","Ĵaŭ","Ven","Sab"],firstDay:0,isRTL:false,monthNames:["Januaro","Februaro","Marto","Aprilo","Majo","Junio","Julio","Aŭgusto","Septembro","Oktobro","Novembro","Decembro"],showMonthAfterYear:false,yearSuffix:""},es:{dayNames:["Domingo","Lunes","Martes","Mi&eacute;rcoles","Jueves","Viernes","S&aacute;bado"],dayNamesMin:["Dom","Lun","Mar","Mi&eacute;","Juv","Vie","S&aacute;b"],firstDay:1,isRTL:false,monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],showMonthAfterYear:false,yearSuffix:""},et:{dayNames:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"],dayNamesMin:["Pühap","Esmasp","Teisip","Kolmap","Neljap","Reede","Laup"],firstDay:1,isRTL:false,monthNames:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],showMonthAfterYear:false,yearSuffix:"",size:"large"},eu:{dayNames:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"],dayNamesMin:["Iga","Ast","Ast","Ast","Ost","Ost","Lar"],firstDay:1,isRTL:false,monthNames:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],showMonthAfterYear:false,yearSuffix:""},fa:{dayNames:["يکشنبه","دوشنبه","سهشنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayNamesMin:["ي","د","س","چ","پ","ج","ش"],firstDay:6,isRTL:true,monthNames:["فروردين","ارديبهشت","خرداد","تير","مرداد","شهريور","مهر","آبان","آذر","دي","بهمن","اسفند"],showMonthAfterYear:false,yearSuffix:""},fi:{dayNames:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"],dayNamesMin:["Su","Ma","Ti","Ke","To","Pe","Su"],firstDay:1,isRTL:false,monthNames:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kes&auml;kuu","Hein&auml;kuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],showMonthAfterYear:false,yearSuffix:""},fo:{dayNames:["Sunnudagur","Mánadagur","Týsdagur","Mikudagur","Hósdagur","Fríggjadagur","Leyardagur"],dayNamesMin:["Sun","Mán","Týs","Mik","Hós","Frí","Ley"],firstDay:0,isRTL:false,monthNames:["Januar","Februar","Mars","Apríl","Mei","Juni","Juli","August","September","Oktober","November","Desember"],showMonthAfterYear:false,yearSuffix:""},"fr-CH":{dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesMin:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],firstDay:1,isRTL:false,monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],showMonthAfterYear:false,yearSuffix:""},fr:{dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesMin:["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."],firstDay:1,isRTL:false,monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],showMonthAfterYear:false,yearSuffix:""},gl:{dayNames:["Domingo","Luns","Martes","M&eacute;rcores","Xoves","Venres","S&aacute;bado"],dayNamesMin:["Dom","Lun","Mar","M&eacute;r","Xov","Ven","S&aacute;b"],firstDay:1,isRTL:false,monthNames:["Xaneiro","Febreiro","Marzo","Abril","Maio","Xuño","Xullo","Agosto","Setembro","Outubro","Novembro","Decembro"],showMonthAfterYear:false,yearSuffix:""},he:{dayNames:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],dayNamesMin:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],firstDay:0,isRTL:true,monthNames:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],showMonthAfterYear:false,yearSuffix:""},hr:{dayNames:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],showMonthAfterYear:false,yearSuffix:""},hu:{dayNames:["Vasárnap","Hétfö","Kedd","Szerda","Csütörtök","Péntek","Szombat"],dayNamesMin:["Vas","Hét","Ked","Sze","Csü","Pén","Szo"],firstDay:1,isRTL:false,monthNames:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],showMonthAfterYear:true,yearSuffix:""},hy:{dayNames:["կիրակի","եկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"],dayNamesMin:["կիր","երկ","երք","չրք","հնգ","ուրբ","շբթ"],firstDay:1,isRTL:false,monthNames:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],showMonthAfterYear:false,yearSuffix:""},id:{dayNames:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],dayNamesMin:["Min","Sen","Sel","Rab","kam","Jum","Sab"],firstDay:0,isRTL:false,monthNames:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"],showMonthAfterYear:false,yearSuffix:""},is:{dayNames:["Sunnudagur","M&aacute;nudagur","&THORN;ri&eth;judagur","Mi&eth;vikudagur","Fimmtudagur","F&ouml;studagur","Laugardagur"],dayNamesMin:["Sun","M&aacute;n","&THORN;ri","Mi&eth;","Fim","F&ouml;s","Lau"],firstDay:0,isRTL:false,monthNames:["Jan&uacute;ar","Febr&uacute;ar","Mars","Apr&iacute;l","Ma&iacute","J&uacute;n&iacute;","J&uacute;l&iacute;","&Aacute;g&uacute;st","September","Okt&oacute;ber","N&oacute;vember","Desember"],showMonthAfterYear:false,yearSuffix:""},it:{dayNames:["Domenica","Luned&#236","Marted&#236","Mercoled&#236","Gioved&#236","Venerd&#236","Sabato"],dayNamesMin:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],firstDay:1,isRTL:false,monthNames:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],showMonthAfterYear:false,yearSuffix:""},ja:{dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesMin:["日","月","火","水","木","金","土"],firstDay:0,isRTL:false,monthNames:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],showMonthAfterYear:true,yearSuffix:"年"},ko:{dayNames:["일","월","화","수","목","금","토"],dayNamesMin:["일","월","화","수","목","금","토"],firstDay:0,isRTL:false,monthNames:["1월(JAN)","2월(FEB)","3월(MAR)","4월(APR)","5월(MAY)","6월(JUN)","7월(JUL)","8월(AUG)","9월(SEP)","10월(OCT)","11월(NOV)","12월(DEC)"],showMonthAfterYear:false,yearSuffix:"년"},kz:{dayNames:["Жексенбі","Дүйсенбі","Сейсенбі","Сәрсенбі","Бейсенбі","Жұма","Сенбі"],dayNamesMin:["жкс","дсн","ссн","срс","бсн","жма","снб"],firstDay:1,isRTL:false,monthNames:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],showMonthAfterYear:false,yearSuffix:""},lt:{dayNames:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"],dayNamesMin:["sek","pir","ant","tre","ket","pen","šeš"],firstDay:1,isRTL:false,monthNames:["Sausis","Vasaris","Kovas","Balandis","Gegužė","Birželis","Liepa","Rugpjūtis","Rugsėjis","Spalis","Lapkritis","Gruodis"],showMonthAfterYear:false,yearSuffix:""},lv:{dayNames:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],dayNamesMin:["svt","prm","otr","tre","ctr","pkt","sst"],firstDay:1,isRTL:false,monthNames:["Janvāris","Februāris","Marts","Aprīlis","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],showMonthAfterYear:false,yearSuffix:""},ml:{dayNames:["ഞായര്","തിങ്കള്","ചൊവ്വ","ബുധന്","വ്യാഴം","വെള്ളി","ശനി"],dayNamesMin:["ഞായ","തിങ്ക","ചൊവ്വ","ബുധ","വ്യാഴം","വെള്ളി","ശനി"],firstDay:1,isRTL:false,monthNames:["ജനുവരി","ഫെബ്രുവരി","മാര്ച്ച്","ഏപ്രില്","മേയ്","ജൂണ്","ജൂലൈ","ആഗസ്റ്റ്","സെപ്റ്റംബര്","ഒക്ടോബര്","നവംബര്","ഡിസംബര്"],showMonthAfterYear:false,yearSuffix:""},ms:{dayNames:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],dayNamesMin:["Aha","Isn","Sel","Rab","kha","Jum","Sab"],firstDay:0,isRTL:false,monthNames:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],showMonthAfterYear:false,yearSuffix:""},nl:{dayNames:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],dayNamesMin:["zon","maa","din","woe","don","vri","zat"],firstDay:1,isRTL:false,monthNames:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],showMonthAfterYear:false,yearSuffix:""},no:{dayNames:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],dayNamesMin:["søn","man","tir","ons","tor","fre","lør"],firstDay:1,isRTL:false,monthNames:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"],showMonthAfterYear:false,yearSuffix:""},pl:{dayNames:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],dayNamesMin:["Nie","Pn","Wt","Śr","Czw","Pt","So"],firstDay:1,isRTL:false,monthNames:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],showMonthAfterYear:false,yearSuffix:""},"pt-BR":{dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],firstDay:0,isRTL:false,monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],showMonthAfterYear:false,yearSuffix:""},pt:{dayNames:["Domingo","Segunda-feira","Ter&ccedil;a-feira","Quarta-feira","Quinta-feira","Sexta-feira","S&aacute;bado"],dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","S&aacute;b"],firstDay:0,isRTL:false,monthNames:["Janeiro","Fevereiro","Mar&ccedil;o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],showMonthAfterYear:false,yearSuffix:""},rm:{dayNames:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"],dayNamesMin:["Dum","Gli","Mar","Mes","Gie","Ven","Som"],firstDay:1,isRTL:false,monthNames:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],showMonthAfterYear:false,yearSuffix:""},ro:{dayNames:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"],dayNamesMin:["Dum","Lun","Mar","Mie","Joi","Vin","Sâm"],firstDay:1,isRTL:false,monthNames:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],showMonthAfterYear:false,yearSuffix:""},ru:{dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesMin:["вск","пнд","втр","срд","чтв","птн","сбт"],firstDay:1,isRTL:false,monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],showMonthAfterYear:false,yearSuffix:""},sk:{dayNames:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"],dayNamesMin:["Ned","Pon","Uto","Str","Štv","Pia","Sob"],firstDay:1,isRTL:false,monthNames:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],showMonthAfterYear:false,yearSuffix:""},sl:{dayNames:["Nedelja","Ponedeljek","Torek","Sreda","&#x10C;etrtek","Petek","Sobota"],dayNamesMin:["Ned","Pon","Tor","Sre","&#x10C;et","Pet","Sob"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},sq:{dayNames:["E Diel","E Hënë","E Martë","E Mërkurë","E Enjte","E Premte","E Shtune"],dayNamesMin:["Di","Hë","Ma","Më","En","Pr","Sh"],firstDay:1,isRTL:false,monthNames:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],showMonthAfterYear:false,yearSuffix:""},"sr-SR":{dayNames:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"],dayNamesMin:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],firstDay:1,isRTL:false,monthNames:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],showMonthAfterYear:false,yearSuffix:""},sr:{dayNames:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"],dayNamesMin:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],firstDay:1,isRTL:false,monthNames:["Јануар","Фебруар","Март","Април","Мај","Јун","Јул","Август","Септембар","Октобар","Новембар","Децембар"],showMonthAfterYear:false,yearSuffix:""},sv:{dayNames:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],dayNamesMin:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],firstDay:1,isRTL:false,monthNames:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],showMonthAfterYear:false,yearSuffix:""},ta:{dayNames:["ஞாயிற்றுக்கிழமை","திங்கட்கிழமை","செவ்வாய்க்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],dayNamesMin:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],firstDay:1,isRTL:false,monthNames:["தை","மாசி","பங்குனி","சித்திரை","வைகாசி","ஆனி","ஆடி","ஆவணி","புரட்டாசி","ஐப்பசி","கார்த்திகை","மார்கழி"],showMonthAfterYear:false,yearSuffix:""},th:{dayNames:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"],dayNamesMin:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],firstDay:0,isRTL:false,monthNames:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],showMonthAfterYear:false,yearSuffix:""},tj:{dayNames:["якшанбе","душанбе","сешанбе","чоршанбе","панҷшанбе","ҷумъа","шанбе"],dayNamesMin:["якш","душ","сеш","чор","пан","ҷум","шан"],firstDay:1,isRTL:false,monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],showMonthAfterYear:false,yearSuffix:""},tr:{dayNames:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],dayNamesMin:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],firstDay:1,isRTL:false,monthNames:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],showMonthAfterYear:false,yearSuffix:""},uk:{dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesMin:["нед","пнд","вів","срд","чтв","птн","сбт"],firstDay:1,isRTL:false,monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],showMonthAfterYear:false,yearSuffix:""},vi:{dayNames:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],firstDay:0,isRTL:false,monthNames:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],showMonthAfterYear:false,yearSuffix:""},"zh-CN":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:1,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"},"zh-HK":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:0,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"},"zh-TW":{dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesMin:["周日","周一","周二","周三","周四","周五","周六"],firstDay:1,isRTL:false,monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],showMonthAfterYear:true,yearSuffix:"年"}};A.fn.datePicker=function(C){return(new AJS.DatePicker(this,C))}}(jQuery));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.soy' */
// This file was automatically generated from fields.soy.
// Please don't edit this file by hand.

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.fields == 'undefined') { jiraIntegration.templates.fields = {}; }


jiraIntegration.templates.fields.stringField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({labelContent: soy.$$escapeHtml(opt_data.labelText), name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.textareaField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-jira-type="', soy.$$escapeHtml(opt_data.jiraType), '"><label for="', soy.$$escapeHtml(opt_data.name), '">', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label><textarea rows="10" id="', soy.$$escapeHtml(opt_data.name), '" name="', soy.$$escapeHtml(opt_data.name), '" class="textarea long-field">', soy.$$escapeHtml(opt_data.value), '</textarea>');
  if (opt_data.errorTexts) {
    var errorList36 = opt_data.errorTexts;
    var errorListLen36 = errorList36.length;
    for (var errorIndex36 = 0; errorIndex36 < errorListLen36; errorIndex36++) {
      var errorData36 = errorList36[errorIndex36];
      output.append('<div class="error">', soy.$$escapeHtml(errorData36), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.arrayField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.numberField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.allowedValuesField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.options.length) {
    aui.form.selectField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), options: opt_data.options, isRequired: opt_data.isRequired, isMultiple: opt_data.isMultiple, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  } else {
    aui.form.valueField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: "None", isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  }
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.timeTrackingField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.unrenderableTypeField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field jira-field-unrenderable', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '"><label>', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label>');
  aui.form.value({content: opt_data.reasonContent}, output);
  if (opt_data.errorTexts) {
    var errorList116 = opt_data.errorTexts;
    var errorListLen116 = errorList116.length;
    for (var errorIndex116 = 0; errorIndex116 < errorListLen116; errorIndex116++) {
      var errorData116 = errorList116[errorIndex116];
      output.append('<div class="error">', soy.$$escapeHtml(errorData116), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.dateField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.form.textField({labelContent: soy.$$escapeHtml(opt_data.labelText), name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}, output);
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.select2WithIconField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="field-group jira-field', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-jira-type="', soy.$$escapeHtml(opt_data.jiraType), '"><label for="', soy.$$escapeHtml(opt_data.name), '">', soy.$$escapeHtml(opt_data.labelText), (opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '', '</label><select id="', soy.$$escapeHtml(opt_data.name), '" name="', soy.$$escapeHtml(opt_data.name), '">');
  var optionList152 = opt_data.options;
  var optionListLen152 = optionList152.length;
  for (var optionIndex152 = 0; optionIndex152 < optionListLen152; optionIndex152++) {
    var optionData152 = optionList152[optionIndex152];
    output.append('<option value="', soy.$$escapeHtml(optionData152.value), '" ', (optionData152.selected) ? 'selected' : '', ' data-icon-url="', soy.$$escapeHtml(optionData152.iconUrl), '">', soy.$$escapeHtml(optionData152.text), '</option>');
  }
  output.append('</select>');
  if (opt_data.errorTexts) {
    var errorList168 = opt_data.errorTexts;
    var errorListLen168 = errorList168.length;
    for (var errorIndex168 = 0; errorIndex168 < errorListLen168; errorIndex168++) {
      var errorData168 = errorList168[errorIndex168];
      output.append('<div class="error">', soy.$$escapeHtml(errorData168), '</div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.select2WithIconOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.iconUrl) {
    aui.avatar.avatar({avatarImageUrl: opt_data.iconUrl, size: 'xsmall', isProject: opt_data.isProject, extraClasses: 'select-option-image', tagName: 'span'}, output);
  }
  output.append('<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.labelFieldResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - (New label)",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


jiraIntegration.templates.fields.userOptionSelect = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var userOption__soy195 = new soy.StringBuilder(soy.$$escapeHtml(opt_data.displayName), ' - (', soy.$$escapeHtml(opt_data.name), ')');
  userOption__soy195 = userOption__soy195.toString();
  output.append('<span title="', userOption__soy195, '">', userOption__soy195, '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=(function(I,P){var k="YYYY-MM-DD";var g={template:jiraIntegration.templates.fields.stringField,getContext:u,getValue:A};var y={template:jiraIntegration.templates.fields.stringField,getContext:q,getValue:D,behavior:o};var t={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:B,behavior:j};var r={template:jiraIntegration.templates.fields.textareaField,getContext:u,getValue:A};var F={template:jiraIntegration.templates.fields.numberField,getContext:u,getValue:C};var c={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:B};var O={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:P.bind(b,null,"name"),behavior:R};var L={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:P.bind(b,null,"id")};var K={template:jiraIntegration.templates.fields.timeTrackingField,getContext:Q,getValue:e};var J={template:jiraIntegration.templates.fields.dateField,getContext:u,getValue:A,behavior:x};var i={template:jiraIntegration.templates.fields.select2WithIconField,getContext:H,getValue:P.bind(b,null,"name"),behavior:a};var l={"com.pyxis.greenhopper.jira:gh-epic-label":g,string:g,summary:g,"com.atlassian.jira.plugin.system.customfieldtypes:textfield":g,"com.atlassian.jira.plugin.system.customfieldtypes:url":g,environment:r,"com.atlassian.jira.plugin.system.customfieldtypes:textarea":r,description:r,"com.atlassian.jira.plugin.system.customfieldtypes:float":F,array:c,labels:t,"com.atlassian.jira.plugin.system.customfieldtypes:labels":c,resolution:O,fixVersions:O,priority:i,versions:O,components:O,security:O,"com.atlassian.jira.plugin.system.customfieldtypes:version":O,"com.atlassian.jira.plugin.system.customfieldtypes:multiversion":O,"com.atlassian.jira.plugin.system.customfieldtypes:project":O,assignee:y,reporter:y,timetracking:K,duedate:J,"com.atlassian.jira.plugin.system.customfieldtypes:datepicker":J,"com.atlassian.jira.plugin.system.customfieldtypes:multiselect":L,"com.atlassian.jira.plugin.system.customfieldtypes:select":L};var v={ignoreFieldsWithDefaultValue:false};function m(U,S,V){var T=S.schema.system||"customfield_"+S.schema.customId;return{labelText:S.name,name:T,isRequired:S.required,errorTexts:V[T],jiraType:U}}function u(W,S,T,U){var V=W.name;W.value=(I.isPlainObject(U[V])?U[V].name:U[V])||(T&&T.fields[V])||"";return W}function A(S){return S.val()}function C(S){var T=S.val();if(s(T)){return Number(T)}return T||null}function x(S){var U=S.find("input");if(!!navigator.userAgent.match(/Trident/)&&AJS.version<"5.3.5"){var T="placeholder" in document.createElement("input");U.attr("placeholder",k);if(!T){U.on("focus",function(){if(U.val()===U.attr("placeholder")){U.val("")}}).on("blur",function(){if(U.val()===""){U.val(U.attr("placeholder"))}}).blur()}}else{U.datePicker({overrideBrowserDefault:true})}}function h(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].join(","))||(T&&T.fields[V]&&T.fields[V].join(","));return W}function B(S){return P.map(S.val().split(","),I.trim)}function f(Y,S,T,V){var W=Y.name;var U=V[W];var Z=T&&T.fields[W];var X;if(U){X=I.isArray(U)?P.pluck(U,"name"):[U.name]}else{if(Z){X=I.isArray(Z)?P.pluck(Z,"name"):[Z.name]}else{X=[]}}Y.options=P.map(S.allowedValues,function(aa){return{value:aa.name||aa.id,text:aa.name||aa.value,selected:P.contains(X,aa.name||aa.id)}});Y.isMultiple=P.contains(S.operations,"add");return Y}function b(V,T){var W=T.val();var S=T.attr("multiple");var U=function(Y){var X={};X[V]=Y;return X};if(S){return I.isArray(W)?P.map(W,U):[U(W)]}return U(W)}function R(S){S.find("select[multiple]").auiSelect2()}function q(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].name)||(T&&T.fields[V]&&T.fields[V].name)||"";return W}function D(S){return{name:S.val()}}function N(T,W,V,U,X){var Z=T.find("input");var Y=T.attr("name");Z.removeClass("text");var S={minimumInputLength:1,id:Y,name:Y,query:function(ab){function aa(ac){ab.callback({results:ac})}n(W,V,ab.term,U).done(aa)}};Z.auiSelect2(I.extend(S,X));T.find("div.aui-select2-container").addClass("jira-select2-drop-box")}function o(S,V,U,T){var W={formatInputTooShort:function(){return "Find users..."},formatResult:function(X){return jiraIntegration.templates.fields.userOptionSelect({name:X.id,displayName:X.text})}};N(S,V,U,T,W)}function j(S,V,U,T){var W=S.find("input");jiraIntegration.fields._labelPicker.build(W,function(X){return n(V,U,X,T)})}function n(W,U,V,T){var S=I.extend({restType:U,issueKey:(T&&T.key)||"",term:V},W);return I.ajax({type:"POST",contentType:"application/json",dataType:"json",url:AJS.contextPath()+"/rest/jira-integration/latest/fields/autocomplete",data:JSON.stringify(S)})}function Q(W,S,T,U){var V=W.name;W.value=(U[V]&&U[V].remainingEstimate)||(T&&T.fields[V]&&T.fields[V].remainingEstimate)||"";return W}function e(S){return{remainingEstimate:S.val()}}function H(X,S,T,U){var V=X.name;var W=(U[V]&&U[V].name)||(T&&T.fields&&T.fields[V]&&T.fields[V].name)||"";X.options=P.map(S.allowedValues,function(Y){return{value:Y.name,text:Y.name,selected:W===Y.name,iconUrl:Y.iconUrl}});return X}function z(T){var S;if(T.id){S=I(T.element).attr("data-icon-url")}return jiraIntegration.templates.fields.select2WithIconOption({optionValue:T.text,iconUrl:S})}function a(W,V,T,S){if(!I.fn.auiSelect2){AJS.log("AUI version 5.2 or greater is required as this plugin needs the .auiSelect2() jQuery plugin.");return}var U=W.find("select");U.addClass("jira-select2-drop-box");U.auiSelect2({hasAvatar:true,minimumResultsForSearch:-1,formatSelection:z,formatResult:z})}function p(T,S){if(P.has(l,T)&&console&&console.warn){console.warn("Redefining handler for type "+T+".")}l[T]=S}function E(S){return S.schema?(S.schema.system||S.schema.custom||S.schema.customId):S}function M(S){return l[E(S)]}function w(S){var T=d(S);return T&&M(T)}function d(S){return S.closest(".jira-field").attr("data-jira-type")}function G(T,S){return I.ajax({type:"GET",url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+T.serverId+"/projects/"+T.projectKey+"/issue-types/"+T.issueType+"/fields-meta"}).pipe(function(V){var U=[];P.each(V.fields,function(X){var W=E(X);if(X.required&&!P.contains(S.excludedFields,W)){U.push(X)}});return U})}function s(S){return/\d/.test(S)&&/^-?\d*\.?\d*$/.test(S)}return{addFieldHandler:p,getFieldHandler:M,canRender:function(S){var U=E(S);var T=l[U];if(!T){return false}return S.operations&&S.operations.length&&(!T.canRender||T.canRender(S))},renderField:function(W,Y,Z,X){var S=Y.schema.system||Y.schema.custom||Y.schema.customId;var U=l[S];var V=m(S,Y,X||{});var aa=!U||(U.canRender&&!U.canRender(Y));var T=!Y.operations||!Y.operations.length;if(aa||T){V.reasonContent=aa?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(W?W.url:"#")+'">',"</a>"):T?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(W?W.url:"#")+'">',"</a>"):null;if(!V.reasonContent){throw new Error("Invalid unrenderable reason.")}return jiraIntegration.templates.fields.unrenderableTypeField(V)}return U.template(U.getContext(V,Y,W,Z||{}))},getJSON:function(S){var T=w(S);return T&&T.getValue&&T.getValue(S)},attachFieldBehaviors:function(U,T,S){U.find(".jira-field").each(function(X,W){var V=I(W);var Z=d(V);var Y=Z&&M(Z);var aa=Y&&Y.behavior;if(aa){aa(V,T,Z,S)}})},renderCreateRequiredFields:function(W,V,U,T,S){T=P.extend({},v,T);function X(Y){if(T.ignoreFieldsWithDefaultValue){Y=P.filter(Y,function(aa){return !aa.hasDefaultValue})}var Z=P.filter(Y,function(aa){return !jiraIntegration.fields.canRender(aa)});if(Z.length){if(S){S(Z)}return}W.html(P.map(Y,function(aa){return jiraIntegration.fields.renderField(null,aa,null,null)}).join(""));jiraIntegration.fields.attachFieldBehaviors(W,{serverId:U.serverId,projectKey:U.projectKey},null)}if(T.requiredFields){X(T.requiredFields)}else{G(U,T).done(X)}}}}(AJS.$,window._));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/label-picker.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=jiraIntegration.fields||{};jiraIntegration.fields._labelPicker=function(a){var b=function(d,c){d.auiSelect2({tags:true,multiple:true,tokenSeparators:[","," "],createSearchChoice:function(e){if(!e){return null}return{id:e,text:e,isNew:true}},query:function(f){var e=function(g){f.callback({results:g})};c(f.term).done(e)},formatResult:function(e){return jiraIntegration.templates.fields.labelFieldResult({label:{labelName:e.text,isNew:e.isNew}})}})};return{build:b}}(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/soy/confluence-jira-content-templates.soy' */
// This file was automatically generated from confluence-jira-content-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.CreateJiraContent == 'undefined') { Confluence.CreateJiraContent = {}; }


Confluence.CreateJiraContent.createIssueDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="jira-content-create-issue-form" class="aui top-label"><div class="dialog-header"><div class="title left-position"><h2 id="create-issues-dialog-header">', soy.$$escapeHtml("Create Issue"), '</h2></div><div class="servers"><select class="select hidden" id="jira-servers" /></div><br class="clear" /></div><span id="create-issue-loading"><span class="aui-icon aui-icon-wait"></span> ', soy.$$escapeHtml("Loading\u2026"), '</span><div class="dialog-content hidden"><div class="main-field"><select class="select stretch-out" id="jira-projects" name="pid" title="database select" /><span id="projectSpinner" class="project-spinner"></span></div><div class="main-field last-main-field"><select class="select" id="jira-issue-types" name="issuetype"><option value=\'-1\'>', soy.$$escapeHtml("select"), '</option></select></div><div id="issue-content"><div id="create-from-text"><div class="field-group main-field"><label for="issue-summary">', soy.$$escapeHtml("Summary"), '<span class="aui-icon icon-required"> required</span></label><input id="issue-summary" class="text" value="', soy.$$escapeHtml(opt_data.summary), '" maxlength="255" /></div><div class="field-group main-field"><label for="issue-description">', soy.$$escapeHtml("Description"), '<span class="aui-icon icon-required"> required</span></label><textarea class="textarea" name="comment" id="issue-description">', (opt_data.isCutLongText) ? soy.$$escapeHtml(opt_data.comment) : '', '</textarea></div></div><div id="jira-required-fields-panel"></div><div id="create-from-table"></div></div><div id="jira-epic-content"></div><div id="create-issue-form-messages" class="hidden"></div></div><div id="prepare-issue-messages" class="issue-messages hidden"></div><div class="buttons-group hidden"><input class="aui-button submit create-issue-submit" type="submit" value="', soy.$$escapeHtml("Create"), '" /><a class="create-issue-cancel" href="#">', soy.$$escapeHtml("Cancel"), '</a><span id="form-spinner"></span><span id="form-message-spinner"></span><span id="form-message"></span></div><div id="jiraserver-issue-messages" class="issue-messages"></div><div id="create-issue-messages"></div><div id="text-suggestion" class="text-suggestion hidden"></div></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.renderUnsupportedFieldsWarningMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.unsupportedFields.length == 1) {
    var field__soy27 = new soy.StringBuilder('<strong>', soy.$$escapeHtml(opt_data.unsupportedFields), '</strong>');
    field__soy27 = field__soy27.toString();
    output.append(AJS.format("The required field {0} is not available in this dialog. You will need to",field__soy27));
  } else {
    var fieldList__soy34 = new soy.StringBuilder();
    Confluence.CreateJiraContent.buildFieldList({fields: opt_data.unsupportedFields}, fieldList__soy34);
    fieldList__soy34 = fieldList__soy34.toString();
    output.append(AJS.format("The required fields {0} are not available in this dialog. You will need to",fieldList__soy34));
  }
  output.append(' <a href="', soy.$$escapeHtml(opt_data.projectLinkUrl), '" id="create-issue-in-jira-link" target="_blank">', soy.$$escapeHtml("create your issue directly in JIRA"), '</a>.');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.buildFieldList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var joinText__soy45 = new soy.StringBuilder((opt_data.fields.length == 2) ? ' ' + soy.$$escapeHtml("and") + ' ' : ', ');
  joinText__soy45 = joinText__soy45.toString();
  var fieldList53 = opt_data.fields;
  var fieldListLen53 = fieldList53.length;
  for (var fieldIndex53 = 0; fieldIndex53 < fieldListLen53; fieldIndex53++) {
    var fieldData53 = fieldList53[fieldIndex53];
    output.append((! (fieldIndex53 == 0)) ? soy.$$escapeHtml(joinText__soy45) : '', '<strong>', soy.$$escapeHtml(fieldData53), '</strong>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.renderEpicContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="epic-link" class="main-field checkbox"><input class="checkbox" type="checkbox" id="epicCheck" checked="checked" name="epickCheck" value="', soy.$$escapeHtml(opt_data.epicKey), '"/><label for="epicCheck">', soy.$$escapeHtml("Link to epic"), ' </label>', opt_data.epicHtmlPlaceHolder, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createPreviewIssuesFromTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="main-field issue-preview"><div class="preview-message" > ', soy.$$escapeHtml("Following issues will be created:"), ' </div>');
  var issueList74 = opt_data.issues;
  var issueListLen74 = issueList74.length;
  if (issueListLen74 > 0) {
    for (var issueIndex74 = 0; issueIndex74 < issueListLen74; issueIndex74++) {
      var issueData74 = issueList74[issueIndex74];
      Confluence.CreateJiraContent.issuePreviewTemplate({summary: issueData74.summary}, output);
    }
  } else {
    output.append(soy.$$escapeHtml("Issue not found."));
  }
  output.append((opt_data.numberOfRemainingIssues > 0) ? '<div id="issue-remaining">' + ((opt_data.numberOfRemainingIssues == 1) ? soy.$$escapeHtml("+ 1 more issue.") : '') + ((opt_data.numberOfRemainingIssues > 1) ? soy.$$escapeHtml(AJS.format("+ {0} more issues.",opt_data.numberOfRemainingIssues)) : '') + '</div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueFromTextSuggestedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.numberOfIssues) ? '<span class="aui-icon aui-icon-info"/>' + soy.$$escapeHtml("Looks like you are creating issues from a table.") + '<br/><a id="text-suggested-link" href="#">' + soy.$$escapeHtml(AJS.format("Create {0} issues from this table.",opt_data.numberOfIssues)) + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueFromTableSuggestedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-info"/><a id="table-suggested-link" href="#">', soy.$$escapeHtml("Create a single issue"), '</a> ', soy.$$escapeHtml("from the highlighted text."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issuePreviewTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="issue-container"><img class="icon ico-left"><div class="issue-content"><span class="issue-summary">', soy.$$escapeHtml(opt_data.summary), '</span></div><div class="text-right"></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createOptionForSelectBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="', soy.$$escapeHtml(opt_data.value), '">', soy.$$escapeHtml(opt_data.text), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.displayMessages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ul>');
  var messageList116 = opt_data.messages;
  var messageListLen116 = messageList116.length;
  for (var messageIndex116 = 0; messageIndex116 < messageListLen116; messageIndex116++) {
    var messageData116 = messageList116[messageIndex116];
    output.append('<li>', soy.$$escapeHtml(messageData116), ' </li>');
  }
  output.append('</ul></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.issueMacroXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name=\'jira\'><ac:parameter ac:name=\'showSummary\'>', soy.$$escapeHtml(opt_data.showSummary), '</ac:parameter><ac:parameter ac:name=\'server\'>', soy.$$escapeHtml(opt_data.serverName), '</ac:parameter><ac:parameter ac:name=\'serverId\'>', soy.$$escapeHtml(opt_data.serverId), '</ac:parameter><ac:parameter ac:name=\'key\'>', soy.$$escapeHtml(opt_data.issueKey), '</ac:parameter>"</ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createIssueMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.canInsertMacro == true) ? soy.$$escapeHtml(AJS.format("The issue {0} is created and its link is inserted in the page. To see the result, ",opt_data.issueKey)) + ' <a href="' + soy.$$escapeHtml(opt_data.currentUrl) + '">' + soy.$$escapeHtml("reload ") + '</a> ' + soy.$$escapeHtml("this page.") : soy.$$escapeHtml(AJS.format("The issue {0} is created but not be able to insert to the page. You can edit the page to insert the issue later.",opt_data.issueKey)));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.createdIssuesMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var createdIssueMessagesContent__soy145 = new soy.StringBuilder();
  Confluence.CreateJiraContent.displayMessages({messages: opt_data.createdIssueMessages}, createdIssueMessagesContent__soy145);
  createdIssueMessagesContent__soy145 = createdIssueMessagesContent__soy145.toString();
  output.append(createdIssueMessagesContent__soy145, (opt_data.canInsertMacro == true) ? soy.$$escapeHtml("The issues are created and theirs links are inserted in the page. To see the result, ") + ' <a href="' + soy.$$escapeHtml(opt_data.currentUrl) + '">' + soy.$$escapeHtml("reload ") + '</a> ' + soy.$$escapeHtml("this page.") : soy.$$escapeHtml("The issues are created but not be able to insert to the page. You can edit the page to insert the issues later."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.updatePageFromTableError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var createdIssueMessagesContent__soy168 = new soy.StringBuilder();
  Confluence.CreateJiraContent.displayMessages({messages: opt_data.createdIssueMessages}, createdIssueMessagesContent__soy168);
  createdIssueMessagesContent__soy168 = createdIssueMessagesContent__soy168.toString();
  output.append(createdIssueMessagesContent__soy168, soy.$$escapeHtml("The issues are created but not be able to insert to the page. You can edit the page to insert the issues later."));
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.getOAuthMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="oauth-link-text-message">', soy.$$escapeHtml("Atlassian JIRA needs your permission to connect to "), ' ', soy.$$escapeHtml(opt_data.confluenceApplicationName), '.</div><button class="oauth-init aui-button">', soy.$$escapeHtml("Allow access"), '</button>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOptionWithImage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.imageUrl) ? '<img src="' + soy.$$escapeHtml(opt_data.imageUrl) + '" class="select-option-image" />' : '', '<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.selectOptionProject = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.imageUrl) {
    aui.avatar.avatar({avatarImageUrl: opt_data.imageUrl, isProject: true, size: 'xsmall', tagName: 'span'}, output);
  }
  output.append('<span class="select-option" title="', soy.$$escapeHtml(opt_data.optionValue), '">', soy.$$escapeHtml(opt_data.optionValue), '</span>');
  return opt_sb ? '' : output.toString();
};


Confluence.CreateJiraContent.summaryStoredValue = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="summary-stored-value"><span class="info">');
  aui.avatar.avatar({avatarImageUrl: opt_data.storedValue.projectIcon, isProject: true, size: 'xsmall', tagName: 'span'}, output);
  output.append('<span class="ellipsis project-name" title="', soy.$$escapeHtml(opt_data.storedValue.projectText), '">', soy.$$escapeHtml(opt_data.storedValue.projectText), '</span> <img class="aui-avatar-xsmall" src="', soy.$$escapeHtml(opt_data.storedValue.issueTypeIcon), '" /><span class="ellipsis issue-type" title="', soy.$$escapeHtml(opt_data.storedValue.issueTypeText), '">', soy.$$escapeHtml(opt_data.storedValue.issueTypeText), '</span></span><a href="#" title="', soy.$$escapeHtml("Edit"), '">', soy.$$escapeHtml("Edit"), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/create-issue-analytics.js' */
Confluence.CreateJiraContent.Analytics=(function(k){var y="confluence.jira.content.dialog.open";var s="confluence.jira.content.create.text";var d="confluence.jira.content.create.table";var v="confluence.jira.content.error";var a="confluence.jira.content.jim.insert.fail";var t="confluence.jira.content.switch.to.table";var q="confluence.jira.content.switch.to.text";var w="confluence.jira.content.edit.description";var m="confluence.jira.content.summary.truncated";var n="confluence.jira.content.with.epic";var l="confluence.jira.content.required.fields";var g="confluence.jira.content.create.directly.in.jira";var o="confluence.jira.content.sorted.table";var z="table";function e(B,C){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:B,properties:C})}function c(){e(y)}function b(B){e(((B===z)?t:q))}function i(D,C){if(D===z){var B={total:C};e(d,B)}else{e(s)}}function r(){e(w)}function A(){e(n)}function j(C){var B={total:C};e(m,B)}function p(C,D){var B={type:C,reason:D};e(a,B)}function u(){e(o)}function x(C){var B={cause:C};e(v,B)}function f(){e(l)}function h(){k("#create-issue-in-jira-link").click(function(B){e(g)})}return{sendAnalyticsForDialogOpen:c,sendAnalyticsForModeChange:b,sendAnalyticsForCreatingIssue:i,sendAnalyticsForDescriptionEdited:r,sendAnalyticsForCreatedIssueWithEpic:A,sendAnalyticsForTruncatedSummary:j,sendAnalyticsForJIMInsertFailed:p,sendAnalyticsForSortedTable:u,bindAnalyticsForCreateDirectlyInJira:h,sendAnalyticsForCreateError:x,sendAnalyticsForRequiredFields:f}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
AJS.toInit(function(f){var g="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var c=f("div.jira-issues-created");if(c.length>0){if(window.history&&window.history.replaceState){var e=window.location.href;var d=e.substr(0,e.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,d)}var b=c.find("#jira-content-message-panel-error-warning");var a=c.find("#jira-content-message-panel-view-more-link");a.click(function(h){h.preventDefault();a.hide();b.show()});if(c.hasClass("success")){setTimeout(function(){c.hide()},10000)}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(g,{onClick:function(h){if(Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(h)}else{Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(h)}},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jira-inline-dialog.js' */
Confluence.CreateJiraContent.Dialogs=Confluence.CreateJiraContent.Dialogs||(function(e){var j=360;var g=500;var i=370;var k;var c;var d={hideDelay:null,maxHeight:g};function b(m){k&&k.remove();var l={preHideCallback:function(){var o=e(document.activeElement);return(e("#formSpinner.aui-icon.aui-icon-wait").length===0)&&(!e("#select2-drop-mask").is(":visible"))&&!(o.is("[data-aui-dp-uuid]"))&&!e(".aui-inline-dialog .ui-datepicker-inline").is(":visible")},width:j,hideCallback:function(){Confluence.CreateJiraContent.FormHelper.bindHideEventToDialog()}};var n=function(p,o,q){Confluence.CreateJiraContent.CreateIssue.addFormContent(p,m);q();return false};k=f(m,"create-issue-dialog",l,n);Confluence.CreateJiraContent.CreateIssue.setDialogObject(k);Confluence.CreateJiraContent.Analytics.sendAnalyticsForDialogOpen()}function a(m){c&&c.remove();var l={width:i};var n=function(p,o,q){Confluence.CreateJiraContent.FeatureDiscovery.addFeatureDiscoveryContent(p,m,b);q();return false};c=f(m,"create-issue-feature-discovery-dialog",l,n);Confluence.CreateJiraContent.FeatureDiscovery.setFeatureDialogObject(c)}function f(p,r,m,q){var l=e("<div>");h(p.area.average,l);var o=m.hideCallback;m.hideCallback=function(){l.remove();o&&o()};var n=Confluence.ScrollingInlineDialog(l,r,q,e.extend({},d,m));n.show();return n}function h(m,l){Confluence.DocThemeUtils.appendAbsolutePositionedElement(l);l.css({top:m.top,height:m.height,left:m.left,width:m.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")}return{showCreateIssueDialog:b,showFeatureDiscoveryDialog:a}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/create-issue-form.js' */
Confluence.CreateJiraContent.CreateIssue=(function(q){var s="table";var h="text";var G=3;var r;var n;var o;var g;var C;var z;var j;var J=function(){return j};var f=function(K){j=K};var B=function(M){var K=r.find("#jira-servers option:selected").val();var L=r.find("#jira-projects option:selected").val();var N=[];n.find("> tbody > tr").each(function(O,P){q(P).find("td:eq("+M+")").each(function(U,Q){var T=q.trim(q(Q).text());if(T.length){var S=Confluence.CreateJiraContent.FormTextHelper.removeLineBreaksAndTruncate(T);var R=Confluence.CreateJiraContent.FormTextHelper.isCutLongText(T);var V=(R==true)?T:"";N.push({summary:S,description:V})}})});return N};var p=function(){var K=r.find("#text-suggestion");if(o!=null&&o.length>1){var L=Confluence.CreateJiraContent.issueFromTextSuggestedLink({numberOfIssues:o.length});K.html(L)}else{K.hide()}};var c=function(){if(z===s){var L=r.find("#create-from-table");L.empty();if(r.find("#jira-projects option:selected").val()!=-1){o=B(g);var N=0;var M=q(o);if(M.length>G){M=M.slice(0,G);N=o.length-G}var K=Confluence.CreateJiraContent.createPreviewIssuesFromTable({issues:M,numberOfRemainingIssues:N});L.html(K)}var O=r.find("#jira-issue-types option:selected").val();if(O!=-1){Confluence.CreateJiraContent.FormHelper.changeIssuesTypeIconForPreviewPanel(r.find("#jira-issue-types option:selected").val())}C.refresh()}};var i=function(){c(g);var K=r.find("#text-suggestion");var L=Confluence.CreateJiraContent.issueFromTableSuggestedLink();K.html(L)};var w=function(K){Confluence.CreateJiraContent.FormHelper.removeDisplayMessages();F(K);if(K==h){q("#create-issues-dialog-header").text("Create Issue");p();r.find("#create-from-table").hide();r.find("#create-from-text").show()}else{if(z===s){q("#create-issues-dialog-header").text("Create Issues");i();r.find("#create-from-text").hide();r.find("#create-from-table").show()}}AJS.trigger("confluence-jira-content.form-updated")};var I=function(){r.on("click","#text-suggested-link, #table-suggested-link",function(M){var L=q(this);var N=(L.attr("id")==="text-suggested-link");var K=(N)?s:h;w(K);M.preventDefault();return false})};var t=function(){var N=[];var L=r.find("#issue-summary");var K=r.find("#issue-description");var M={summary:q.trim(L.val()),description:q.trim(K.val())};N.push(M);return N};var x=function(){if(Confluence.CreateJiraContent.FormHelper.validateCreateIssueForm()){var K=t();Confluence.CreateJiraContent.FormHelper.createIssues(K,D)}};var k=function(K){var L=[];n.find("td:nth-child("+(K+1)+")").each(function(O,M){var N=q.trim(q(M).text());if(N.length>0){L.push(O)}});return L};var b=function(){if(Confluence.CreateJiraContent.FormHelper.validateCreateIssueForm()){var K=k(g);Confluence.CreateJiraContent.FormHelper.createIssues(o,D,g,K)}};var H=function(){r.submit(function(){if(z===h){x()}else{b()}return false})};var l=function(){return h};var F=function(K){z=K};var m=function(){return n.find("> thead > tr > th.tablesorter-headerSortUp, > thead > tr > th.tablesorter-headerSortDown").length>0};var e=function(){if(m()){var K=aui.message.warning({content:"You are creating issues on the sorted table. These ones could not be appended to the page."});r.children("#prepare-issue-messages").html(K);Confluence.CreateJiraContent.Analytics.sendAnalyticsForSortedTable()}};var a=function(){n=q(j.containingElement).closest("table");if(n.length>0){return true}return false};var d=function(K){C=K};var y=function(){return C};var u=function(L){var K=L.find(".create-issue-cancel");K.on("click",function(M){C.isCancelButtonClicked=true;C.hide();M.preventDefault()})};var A=function(){g=q(j.containingElement).closest("td").index();if(g==-1&&j.range.startContainer){var K=q(j.range.startContainer);g=K.closest("td").index()}if(g==-1){g=0}o=B(g)};var v=function(){var L=Confluence.CreateJiraContent.FormTextHelper.trunc(j.text);var M=Confluence.CreateJiraContent.FormTextHelper.isCutLongText(L);var K=Confluence.CreateJiraContent.createIssueDialog({summary:L,isCutLongText:M,comment:j.text});return K};var E=function(){return z===h};var D={addFormContent:function(M,L){f(L);var K=v();M.html(K);r=M.find("#jira-content-create-issue-form");F(l());o=null;if(a()){A()}if(o==null||o.length==1){M.find("#text-suggestion").remove()}else{I()}w(z);Confluence.CreateJiraContent.FormHelper.init(r);H();u(r);e()},setDialogObject:d,getDialogObject:y,getSelectionObject:J,fillPreviewIssuesFromTable:c,isInSortedTable:m,isInTextMode:E};return D})(AJS.$);Confluence.CreateJiraContent.FormTextHelper=(function(){var a=255;var b="\u2026";return{trunc:function(c){return c.length<=a?c:c.substr(0,a-1)+b},isCutLongText:function(c){if(c.length>=a){return true}return false},removeLineBreaksAndTruncate:function(c){var d=c.replace(/\n|\r|\r\n/g," ");return this.trunc(d)}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jira-form-helper.js' */
Confluence.CreateJiraContent.FormHelper=(function(aF,W){var aU="-1",aY="loading",k="select",F="Select project",aN="Select issue type",a="Loading\u2026",u="aui-bottom-arrow-color";var ao=null;var i=null;var H=false;var x=["project","issuetype","summary","reporter"];var Q;var s=10;var N=60*1000;var U;var S;var aS;var aQ,af;var aO=Confluence.storageManager("jira-content");var b;var al={};var g={};var G={};var B={};var A={};var e;var ah=function(aZ){U={$serverSelect:aZ.find("#jira-servers"),$projectSelect:aZ.find("#jira-projects"),$issueTypeSelect:aZ.find("#jira-issue-types"),$projectSpinner:aZ.find("#projectSpinner"),$hiddenItems:aZ.children().not(".dialog-header, #jiraserver-issue-messages"),$requiredFieldsPanel:aZ.find("#jira-required-fields-panel"),$summaryField:aZ.find("#issue-summary"),$descriptionField:aZ.find("#issue-description"),$jiraEpicContent:aZ.find("#jira-epic-content")};S=aZ;aS="Story,New Feature".toLowerCase();aS=aS.split(",");J(U.$issueTypeSelect);Q=Confluence.CreateJiraContent.JiraIssue.FieldStatus.VISIBLE};var ax="savedFormValues";var aI=function(){if(aF.browser.msie){S.find("input, textarea").keydown(function(aZ){if(aZ.keyCode==27){return false}})}};var aR=function(a0,a1){var aZ=Confluence.CreateJiraContent.createOptionForSelectBox({value:aU,text:a1?a1:k});a0.html(aZ);a0.auiSelect2("val",aU)};var Y=function(){var aZ=U.$projectSelect;aZ.auiSelect2("enable",false);var a0=Confluence.CreateJiraContent.createOptionForSelectBox({value:aU,text:a});aZ.html(a0);aZ.auiSelect2("val",a)};var D=function(){U.$projectSelect.auiSelect2("enable",true)};var aJ=function(aZ){aR(aZ)};var w=function(a0,a1){var aZ={escapeMarkup:function(a2){return a2},formatResult:l,formatSelection:l};a0.auiSelect2(aF.extend(aZ,a1))};var ap=function(a1){var aZ=U.$serverSelect;var a0=[];aF.each(a1,function(a3,a4){B[a4.id]=a4;var a2=Confluence.CreateJiraContent.createOptionForSelectBox({value:a4.id,text:a4.name});a0.push(a2)});aZ.append(a0.join(""));if(a1.length==1){aZ.hide()}else{w(U.$serverSelect,{containerCssClass:"select-container select-server-container",dropdownCssClass:"server-dropdown",width:"180px",minimumResultsForSearch:-1})}if(b){K(ad(aZ,b.serverId))}else{K(false)}};var aC=function(){return aF.ajax({dataType:"json",url:AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/get-jira-servers"}).done(function(aZ){if(aZ.length){ap(aZ)}else{Z("Don\'t have any JIRA server, please check the application link configuration.")}})};var L=function(a1,a6){al[a1]=a6.projects;var a4={};var a2=a6.projects;aF.each(a2,function(a7,a8){a4[a8.id]=a8});A[a1]=a4;var a3={};var aZ=a6.schemes;aF.each(aZ,function(a8,a7){a3[a7.id]=a7});g[a1]=a3;var a0={};var a5=a6.types;aF.each(a5,function(a8,a7){a0[a7.id]=a7});G[a1]=a0};var M=function(a0){var aZ=U.$projectSelect;aR(aZ,F);var a1=[];aF.each(a0,function(a3,a4){var a2=Confluence.CreateJiraContent.createOptionForSelectBox({value:a4.id,text:a4.name});a1.push(a2)});aZ.append(a1.join(""))};var an=function(aZ,a0){if(al[aZ]){P(aZ);M(al[aZ]);D();a0()}AJS.trigger("confluence-jira-content.form-updated")};var q=function(){var a1=U.$serverSelect.val();var a0=aq(B[a1]);if(a0){var aZ=function(){if(b&&b.serverId==a1){var a3=ad(U.$projectSelect,b.projectId);K(a3);if(a3){z();aa()}}else{K(false);J(U.$issueTypeSelect)}};if(aQ&&aQ.readyState!==4&&aQ.abort){aQ.abort()}if(al[a1]){O(200);an(a1,aZ)}else{var a2=h();if(a2&&a2.authUrl){O(401)}else{Y();aQ=AppLinks.makeRequest({appId:a1,type:"GET",url:"/rest/api/1.0/admin/issuetypeschemes.json",dataType:"json",success:function(a3){L(a1,a3);O(200,a3);an(a1,aZ)},error:function(a3){O(a3.status);aJ(U.$projectSelect);D()}});return aQ}}}};var ay=function(aZ){var a0=U.$projectSelect.prop("selectedIndex");if(a0>0){if(al[aZ]){return al[aZ][a0-1].scheme}}return null};var au=function(a0){for(var aZ=0;aZ<aS.length;aZ++){if(aS[aZ]==a0.toLowerCase()){return true}}return false};var J=function(aZ){aZ.auiSelect2("enable",false);aR(aZ,aN);aZ.prev().find("a").removeAttr("tabindex")};var aM=function(aZ){aZ.auiSelect2("enable",true);aZ.prev().find("a").attr("tabindex","0")};var z=function(){var aZ=U.$projectSelect.val();var a0=U.$issueTypeSelect;if(aZ&&aZ!=aU){aM(a0);aB(a0);if(b){K(ad(a0,b.issueTypeId))}else{K(false)}}else{J(a0)}};var aB=function(){var a8=true;var a2=U.$issueTypeSelect;var a3=U.$serverSelect.val();var a0=ay(a3);if(a0){var a5=g[a3];var aZ=a5[a0];var a6=aZ.types;var a7=G[a3];var a4=null;var a1=[];aF(a6).each(function(bb,bc){var a9=a7[bc];if(a9){if(!a4){if(au(a9.name)){a4=a9.id}}var ba=Confluence.CreateJiraContent.createOptionForSelectBox({value:a9.id,text:a9.name});a1.push(ba);a8=false}});a2.html(a1.join(""));a2.auiSelect2("val",a4)}if(a8){aR(a2,aN)}};var T=function(aZ){n(false);S.find("#form-message-spinner").addClass("aui-icon aui-icon-wait");S.find("#form-message").text(aZ)};var o=function(){S.find("#form-message-spinner").removeClass("aui-icon aui-icon-wait");S.find("#form-message").empty()};var r=function(){U.$summaryField.parent().show();S.find("#create-issue-form-messages").empty().addClass("hidden");S.find("#issue-content, #jira-epic-content").removeClass("hidden");aE()};var p=function(){if(Q===Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){U.$descriptionField.parent().hide()}else{if(!H){if(Q===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED){U.$descriptionField.siblings("label").children("span").show()}else{U.$descriptionField.siblings("label").children("span").hide()}U.$descriptionField.parent().show()}}aE()};var at=function(a0){H=true;var aZ=S.find("#create-issue-form-messages");var a1=Confluence.CreateJiraContent.renderUnsupportedFieldsWarningMessage({unsupportedFields:W.map(a0,function(a2){return a2.name}),projectLinkUrl:j()});AJS.messages.warning(aZ,{body:a1,closeable:false});Confluence.CreateJiraContent.Analytics.sendAnalyticsForRequiredFields();Confluence.CreateJiraContent.Analytics.bindAnalyticsForCreateDirectlyInJira();U.$summaryField.parent().hide();U.$descriptionField.parent().hide();aZ.removeClass("hidden");aE()};var am=function(aZ){jiraIntegration.fields.renderCreateRequiredFields(U.$requiredFieldsPanel,null,{serverId:U.$serverSelect.val(),projectKey:aG().key,issueType:U.$issueTypeSelect.val()},{requiredFields:aZ},W.bind(at,this));i=U.$requiredFieldsPanel.find(".jira-field").children("input,select,textarea");v()};var aa=function(){r();i=null;H=false;U.$requiredFieldsPanel.empty();if(U.$projectSelect.val()!==aU){var a0=function(a1){Q=a1.descriptionFieldStatus;if(!W.isEmpty(a1.requiredFields)){am(a1.requiredFields)}aK(a1.epicField);o();AJS.trigger("confluence-jira-content.form-updated")};var aZ=function(a1){o()};T("Checking for required fields\u2026");Confluence.CreateJiraContent.JiraIssue.getCreateIssueMeta(aj(),a0,aZ);aE()}else{aK()}};var aK=function(aZ){aF.when(aQ,af).done(function(){var a0=ao&&!H&&((U.$projectSelect.val()===aU)||(aZ&&ao!==U.$issueTypeSelect.val()));U.$jiraEpicContent.toggle(a0?true:false)})};var aq=function(aZ){if(!aZ.supportedVersion){U.$hiddenItems.addClass("hidden");Z(AJS.format("The version of selected JIRA server is not supported. You may want to upgrade to the newer version or \u003ca href=\"{0}\" target=\"_blank\">create issue in JIRA\u003c\/a>.",aZ.url))}else{U.$hiddenItems.removeClass("hidden")}if(S.find("#text-suggestion").length){aF("#inline-dialog-create-issue-dialog > #arrow-create-issue-dialog").addClass(u)}aE();return aZ.supportedVersion};var aH=function(){U.$serverSelect.change(function(a0){aF("#jiraserver-issue-messages").empty();var aZ=aq(B[a0.val]);if(aZ){U.$jiraEpicContent.empty();U.$hiddenItems.removeClass("hidden");K(false);b=ac();aF.when(q()).done(function(){if(!b){J(U.$issueTypeSelect);ar(S.find("#jira-issue-types option:selected").val())}U.$projectSelect.change()})}});U.$projectSelect.change(function(a0){var aZ=U.$projectSelect.val();if(b&&aZ!=b.projectId){b=false}z();Confluence.CreateJiraContent.CreateIssue.fillPreviewIssuesFromTable();ar(S.find("#jira-issue-types option:selected").val());AJS.trigger("confluence-jira-content.form-updated");aa()});U.$issueTypeSelect.change(function(aZ){ar(aZ.val);AJS.trigger("confluence-jira-content.form-updated");aa()});S.on("keyup",U.$summaryField,function(aZ){AJS.trigger("confluence-jira-content.form-updated")});S.on("keyup",U.$descriptionField,function(aZ){AJS.trigger("confluence-jira-content.form-updated")});if(!Confluence.CreateJiraContent.CreateIssue.getDialogObject()){AJS.bind("confluence-jira-content.form-updated",function(){n(X());p()});AJS.bind("confluence-jira-content.form-switched",function(){p()})}aF("#jira-content-create-issue-form .dialog-content").on("click",".summary-stored-value a",function(){K(false);b=false;return false});aI()};var v=function(){i.on("change",function(a0){AJS.trigger("confluence-jira-content.form-updated")});if(AJS.version<="5.4.5"){var aZ=S.find("input[data-aui-dp-uuid]");aZ.each(function(a0,a1){var a3=aF(a1),a2=a3.attr("data-aui-dp-uuid");a3.on("click",function(){var a4=aF("[data-aui-dp-popup-uuid="+a2+"]");var a5=a4.datepicker("option","onSelect");a4.datepicker("option","onSelect",function(a7,a6){a5(a7,a6);a3.change()});a4.parents(".aui-inline-dialog").addClass("datepicker-patch")})})}};var n=function(aZ){if(aZ){aF(".create-issue-submit").removeAttr("disabled")}else{aF(".create-issue-submit").attr("disabled","disabled")}};var X=function(){var a1=function(a2,a3){return(aF.trim(a2.val())!==a3)};var a0=function(){var a2="placeholder" in document.createElement("input");return W.find(i,function(a6){var a3=aF(a6),a4=aF.trim(a3.val());if(a2){return !a4}else{var a5=a3.attr("placeholder");return(!a4||a4==a5)}})};var aZ=a1(U.$projectSelect,aU)&&a1(U.$issueTypeSelect,aU)&&!H&&!a0();if(Confluence.CreateJiraContent.CreateIssue.isInTextMode()&&aZ){aZ=a1(U.$summaryField,"");if(Q===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED){aZ=a1(U.$descriptionField,"")}}return aZ};var ar=function(a1){if(a1!=-1){var a2=h();var a0=a2.url+G[a2.id][a1].url;var aZ=S.find(".issue-container img").attr("src",a0)}};var aw=function(){aF("#create-issue-messages",S).empty()};var aD=function(){aF("#form-spinner",S).addClass("aui-icon aui-icon-wait");aF(".create-issue-cancel",S).addClass("hidden");aF("input,select,textarea,submit",S).disable()};var ae=function(){return U.$projectSelect.val()};var t=function(a1){var aZ={fields:{project:{id:ae()},issuetype:{id:U.$issueTypeSelect.val()}}};if(i){i.each(function(a5,a4){var a6=aF(a4);aZ.fields[a6.attr("name")]=jiraIntegration.fields.getJSON(a6)})}var a0={issues:[]};var a3=0;var a2=0;aF.each(a1,function(a6,a4){if(Confluence.CreateJiraContent.FormTextHelper.isCutLongText(a4.summary)){a3++}else{if(!a4.description){a2++}}var a5=W.clone(aZ);a5.fields=W.extend({},a5.fields,a4);if(Q===Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED&&a4.description.length==0){a5.fields.description=a4.summary}if(Q===Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){delete a5.fields.description}a0.issues.push(a5)});if(a3>0){Confluence.CreateJiraContent.Analytics.sendAnalyticsForTruncatedSummary(a3)}if(a2>0){Confluence.CreateJiraContent.Analytics.sendAnalyticsForDescriptionEdited()}return JSON.stringify(a0)};var aV=function(a0,aZ){var a1=[];if(a0){aF.each(a0,function(a3,a4){var a2=AJS.format("Can not create issue for row {0} with error: {1}",(aZ[a4.failedElementNumber]+1),I(a4));a1.push(a2)})}return a1};var av=function(){delete al[U.$serverSelect.val()]};var aX=function(){U.$hiddenItems.addClass("hidden");var a0=h();if(a0.authUrl){var aZ=function(){av();U.$hiddenItems.removeClass("hidden");aF("#jiraserver-issue-messages").empty();U.$jiraEpicContent.empty();q()};az(aZ)}else{Z("JIRA server configuration could be changed. You may try to refresh the page to update latest configuration.")}};var O=function(aZ,a0){if(aZ==200&&a0&&a0.isEmpty){av();U.$hiddenItems.addClass("hidden");Z(AJS.format("You do not have permission to access any projects in {0}",AJS.escapeHtml(h().name)))}else{switch(aZ){case 401:aX();break;case 404:case 500:case 504:U.$hiddenItems.addClass("hidden");Z("Cannot connect to this JIRA server at this time.");break;default:U.$hiddenItems.removeClass("hidden")}}aE()};var aj=function(){return{serverId:U.$serverSelect.val(),projectId:U.$projectSelect.val(),issueTypeId:U.$issueTypeSelect.val(),defaultRequiredFields:x}};var aA=function(a2,a3,a1,a0){var aZ=aF("#epic-link > .checkbox");if(aZ.is(":checked")&&aZ.is(":visible")){Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatedIssueWithEpic();Confluence.CreateJiraContent.JiraIssue.getCreateIssueMeta(aj(),function(a5){if(a5.epicField){var a4=aZ.val();aF.each(a2,function(a7,a6){a6[a5.epicField]=a4})}y(a2,a3,a1,a0)})}else{y(a2,a3,a1,a0)}};var I=function(a2){var a3=W.values(a2.elementErrors.errors);var a0=W.keys(a2.elementErrors.errors);var aZ=aj();for(var a1=0;a1<a0.length;a1++){var a5=Confluence.CreateJiraContent.JiraIssue.getFieldName(a0[a1],aZ);if(a5&&a3[a1].indexOf(a5)==-1){a3[a1]=a5+": "+a3[a1]}}var a4=W.union(W.values(a2.elementErrors.errorMessages),a3);a4=a4.join(", ");a4=a4.replace(".,",",");return a4};var y=function(a1,a3,a0,aZ){aw();aD();var a2=Confluence.getContextPath()+"/rest/jira-integration/1.0/issues";aF.ajax({type:"POST",contentType:"application/json",url:a2+"?applicationId="+U.$serverSelect.val(),data:t(a1),success:function(a4){if(a0!=undefined){aW(a4,a3,a0,aZ)}else{if(!a4.errors){ai(a4.issues[0],a3)}else{Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreateError("rest");ab([],false,[I(a4.errors[0])])}}},error:function(a7){var a6=[];var a5=[];if(a7.status==500){try{a5=JSON.parse(a7.responseText);if(a5 instanceof Array){aF.each(a5[0].errors,function(a9,a8){a6.push(a8)})}else{a6.push(a5)}}catch(a4){a5=[];a6.push("Parse error:"+a4.message)}}else{a6.push("Unable to create JIRA issues, please check the application link configuration.")}Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreateError("xhr");ab(a5,false,a6)}})};var ai=function(aZ,a1){if(a1.isInSortedTable()&&a1.getSelectionObject().searchText.numMatches!=1){ab([aZ],false,[]);return}var a0=Confluence.HighlightAction.createInsertionBean([{xmlInsertion:E(aZ)}],a1.getSelectionObject().searchText);Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatingIssue("text");Confluence.HighlightAction.insertContentAtSelectionEnd(a0).done(function(a2){if(!a2){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("text","algorithm")}ab([aZ],a2,[])}).fail(function(a2){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("text","server");ab([aZ],false,[],a2.statusText)})};var E=function(aZ){var a0=U.$serverSelect.val();var a2=B[a0].name;var a1=Confluence.CreateJiraContent.issueMacroXml({showSummary:false,serverName:a2,serverId:a0,issueKey:aZ.issue.key});return a1};var ag=function(a1){if(a1.formObject.isInSortedTable()){ab(a1.createdIssues,false,a1.errorMessages);return}var a0=[];aF.each(a1.createdIssues,function(a2,a3){var a4={};a4.rowIndex=a1.createdIssueRowIndexes[a2];a4.xmlInsertion=E(a3);a0.push(a4)});var aZ=Confluence.HighlightAction.createTableInsertionBean(a0,a1.tableColumnIndex,a1.formObject.getSelectionObject().searchText);Confluence.CreateJiraContent.Analytics.sendAnalyticsForCreatingIssue("table",a1.createdIssues.length);Confluence.HighlightAction.insertContentsInTableColumnCells(aZ).done(function(a2){if(!a2){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("table","algorithm")}ab(a1.createdIssues,a2,a1.errorMessages)}).fail(function(a2){Confluence.CreateJiraContent.Analytics.sendAnalyticsForJIMInsertFailed("table","server");ab(a1.createdIssues,false,a1.errorMessages,a2.statusText)})};var ab=function(a3,a1,a7,a4){var a0=h().url;if(a3.length==1){a0+="/browse/"+a3[0].issue.key}else{var a2="key in (";a2+=aF.map(a3,function(a8){return a8.issue.key}).join(",");a2+=")";a0+="/issues/?jql="+encodeURIComponent(a2)}var a6=window.location.href.split("#")[0];var a5=a6.indexOf("JIRAIssuesCreated");if(a5>0){a6=a6.substring(0,a5-1)}var aZ=a6+(a6.indexOf("?")>0?"&":"?")+"JIRAIssuesCreated=true&numOfIssues="+a3.length+"&issuesURL="+encodeURIComponent(a0)+"&addedToPage="+a1;if(a3.length>0){aZ+="&issueId="+encodeURIComponent(a3[0].issue.key)}if(a4!=undefined){aZ+="&statusText="+a4}aF.each(a7,function(a8,a9){aZ+="&errorMessages="+a9});aF("#form-spinner").removeClass("aui-icon aui-icon-wait");Confluence.CreateJiraContent.CreateIssue.getDialogObject().hide();window.location.replace(aZ)};var aW=function(a2,a4,a0,a1){var aZ=[];aF.each(a2.issues,function(a6,a5){aZ.push(a1[a5.elementNumber])});var a3=aV(a2.errors,a1);if(a2.issues.length){ag({createdIssues:a2.issues,createdIssueRowIndexes:aZ,tableColumnIndex:a0,formObject:a4,errorMessages:a3})}else{if(a2.errors.length){ab([],false,a3)}}};var l=function(aZ){return Confluence.CreateJiraContent.selectOption({optionValue:aZ.text})};var f=function(a0){var a2;if(a0.id>=0){var a3=h();var a1=G[a3.id];var aZ=a1[a0.id];a2=aZ.url;if(a2.indexOf("http")!=0){a2=a3.url+a2}}return Confluence.CreateJiraContent.selectOptionWithImage({optionValue:a0.text,imageUrl:a2})};var R=function(aZ){var a1;if(aZ.id>=0){var a0=aZ.id;var a4=h();var a2=A[a4.id];if(a2){var a3=a2[a0].img;a1="/secure/projectavatar?pid="+a0+"&avatarId="+a3+"&size=small";a1=Confluence.getContextPath()+"/plugins/servlet/applinks/proxy?path="+encodeURIComponent(a1)+"&appId="+a4.id}}return Confluence.CreateJiraContent.selectOptionProject({optionValue:aZ.text,imageUrl:a1})};var h=function(){var aZ=U.$serverSelect.val();var a0=B[aZ];return a0};var aG=function(){var aZ=A[U.$serverSelect.val()];return aZ[U.$projectSelect.val()]};var j=function(){var a1=h().url+"/secure/CreateIssueDetails!Init.jspa?pid="+aG().id+"&issuetype="+U.$issueTypeSelect.val();var a0=U.$summaryField.val();if(a0.length){a1=a1+"&summary="+encodeURIComponent(a0)}if(Q!==Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN){var aZ=U.$descriptionField.val();if(aZ.length){a1=a1+"&description="+encodeURIComponent(aZ)}}return a1};var Z=function(aZ){AJS.messages.warning(aF("#jiraserver-issue-messages"),{body:aZ,closeable:false});if(!S.find("#text-suggestion").is(":visible")){aF("#inline-dialog-create-issue-dialog > #arrow-create-issue-dialog").removeClass(u)}};var az=function(aZ){var a1=h();var a0={onSuccess:function(){a1.authUrl=null;aZ()},onFailure:function(){}};Z(Confluence.CreateJiraContent.getOAuthMessage({confluenceApplicationName:"Confluence"}));aF(".oauth-init",aF("#jiraserver-issue-messages")).click(function(a2){AppLinks.authenticateRemoteCredentials(a1.authUrl,a0.onSuccess,a0.onFailure);a2.preventDefault()})};var V=function(){U.$serverSelect.auiSelect2("close");U.$projectSelect.auiSelect2("close");U.$issueTypeSelect.auiSelect2("close");if(Confluence.CreateJiraContent.CreateIssue.getDialogObject().isCancelButtonClicked!==true){aP(aj())}};var aP=function(aZ){aO.setItem(ax,JSON.stringify(aZ))};var ac=function(a0){try{a0=a0||ax;var aZ=JSON.parse(aO.getItem(a0));if(aZ&&aZ.serverId&&aZ.projectId&&aZ.issueTypeId){return aZ}else{return false}}catch(a1){return false}};var K=function(a5){var a4=S.find(".dialog-content > .main-field"),a0=S.find(".dialog-content .summary-stored-value");if(a5){var a3=U.$projectSelect.val();var aZ=U.$issueTypeSelect.val();if(a3!=-1&&a3!=null&&aZ!=-1&&aZ!=-1){var a2=C();if(a2){a0.remove();var a1=Confluence.CreateJiraContent.summaryStoredValue({storedValue:a2});aF(a1).insertBefore(S.find("#issue-content"));a4.addClass("hidden")}}}else{a4.removeClass("hidden");a0.addClass("hidden")}aE()};var C=function(){var aZ=U.$projectSelect,a2=U.$issueTypeSelect;var a3=aZ.auiSelect2("data").text,a1=a2.auiSelect2("data").text;var a4=aZ.auiSelect2("container").find(".select2-chosen img"),a0=a2.auiSelect2("container").find(".select2-chosen img");if(a3&&a1&&a4&&a0){return{projectText:a3,issueTypeText:a1,projectIcon:a4.attr("src"),issueTypeIcon:a0.attr("src")}}else{return null}};var ak=function(aZ,a0){return(aZ.find('option[value="'+a0+'"]').length)};var ad=function(aZ,a0){if(ak(aZ,a0)){aZ.auiSelect2("val",a0);return true}else{b=false;return false}};var P=function(aZ){var a1=function(a2){ao=a2;aL(aZ)};var a0=function(){ao=(aZ===h().id)?null:ao};Confluence.CreateJiraContent.JiraIssue.resolveEpicIssueType(aZ,a1,a0)};var aL=function(aZ){if(af&&af.readyState!==4&&af.abort){af.abort()}var a0=U.$jiraEpicContent;af=aF.ajax({type:"GET",contentType:"application/json",url:AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/find-epic-issue",data:{pageId:AJS.params.pageId,serverId:aZ,epicIssueTypeId:ao},success:function(a2){if(!a2||!a2.epicKey){a0.empty();return}var a3=Confluence.CreateJiraContent.renderEpicContent({epicKey:a2.epicKey,epicHtmlPlaceHolder:a2.epicHtmlPlaceHolder});a0.html(a3);e=a0.find(".summary").text();var a1=a0.find("a:first-child").clone();a0.find(".jira-issue").html(a1);c(a0);aE()},error:function(a1){a0.empty();AJS.logError("confluence-jira-content:epicLinkJiraIssuePageHandling - Error when detect epic on page with status="+a1.status)}})};var c=function(aZ){aZ.find(".jira-issue").attr("title",e).tooltip({gravity:"sw"})};var d=function(){S.find("#create-issue-loading").remove()};var aT=function(){d();var aZ=U.$serverSelect.val();if(aZ){S.find("#jira-servers, .dialog-content, #prepare-issue-messages, .buttons-group, #text-suggestion").removeClass("hidden");U.$jiraEpicContent.empty();q()}};var m=function(){d();Z("Unable to get a list of linked JIRA servers from Confluence. You may want to check your application links for more details.")};var aE=function(){if(Confluence.CreateJiraContent.CreateIssue.getDialogObject()){Confluence.CreateJiraContent.CreateIssue.getDialogObject().refresh()}};return{init:function(aZ){ah(aZ);w(U.$projectSelect,{containerCssClass:"select-container select-project-container",dropdownCssClass:"projects-dropdown",formatSelection:R,formatResult:R});w(U.$issueTypeSelect,{containerCssClass:"select-container select-issuetype-container",dropdownCssClass:"issue-types-dropdown",minimumResultsForSearch:-1,formatSelection:f,formatResult:f});n(false);J(U.$issueTypeSelect);b=ac(ax);aH();K(b!==false);aC().pipe(aT,m)},createIssues:aA,validateCreateIssueForm:X,removeDisplayMessages:aw,bindHideEventToDialog:V,changeIssuesTypeIconForPreviewPanel:ar}})(AJS.$,window._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/jiraissue-field-helper.js' */
Confluence.CreateJiraContent.JiraIssue=(function(f,m){var c="com.pyxis.greenhopper.jira:gh-epic-link";var p="/rest/greenhopper/1.0/api/epicproperties";var j="JIRA_EPIC_ISSUE_TYPE_";var l="CREATE_JIRA_ISSUE_FIELD_";var d,b;var i=function(q,r){if(d&&d.readyState!==4&&d.abort){d.abort()}if(!q.serverId||!q.projectId||!q.issueTypeId){AJS.logError(AJS.format("confluence-jira-content:discoverIssueTypeField - Error with parameters: serverId={0}, projectId={1}, issueTypeId={2}",q.serverId,q.projectId,q.issueTypeId));r&&r("Discover fields - error with parameters.");return}d=AJS.$.ajax({type:"GET",url:Confluence.getContextPath()+"/rest/jira-integration/1.0/servers/"+q.serverId+"/projects/"+q.projectId+"/issue-types/"+q.issueTypeId+"/fields-meta"}).pipe(function(s){if(!s||!s.fields){AJS.logError("confluence-jira-content:discoverIssueTypeField - Data discovering error! Unexpected data return.");r&&r("Discover fields - unexpected data return.");return}return s.fields});return d};var h=function(q,t,s){if(!q){AJS.logError(AJS.format("confluence-jira-content:resolveEpicIssueType - Error with parameters: serverId={0}",q));return}var r=j+q;if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(r)){t(Confluence.CreateJiraContent.JiraIssue.Cache.get(r));return}if(b&&b.readyState!==4&&b.abort){b.abort()}b=AppLinks.makeRequest({appId:q,type:"GET",url:p,dataType:"json",success:function(v){if(!v||!v.epicTypeId){AJS.logError("confluence-jira-content:resolveEpicIssueType - Data discovering error! Unexpected data return.");return}var u=v.epicTypeId;t(u);Confluence.CreateJiraContent.JiraIssue.Cache.put(r,u)},error:function(u){s(u.status);AJS.logError("confluence-jira-content:resolveEpicIssueType - Error with status="+u.status)}})};var o=function(r,q,s){var t=e(r);if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(t)){n(t,q,s);return}i(r,s).done(function(u){if(u){var v=AJS.$.extend({},a(u),k(u,r.defaultRequiredFields));Confluence.CreateJiraContent.JiraIssue.Cache.put(t,v);q(v)}}).fail(function(u){AJS.logError("confluence-jira-content:discoverIssueTypeField - Error with status="+u.status);s&&s(AJS.format("Discover fields - response error: {0}.",u.status))})};var n=function(t,r,s){var q=Confluence.CreateJiraContent.JiraIssue.Cache.get(t);if(q){r(q)}else{s&&s("Discover fields - unexpected data return.")}};var a=function(r){var q;m.find(r,function(t,s){if(t.schema.custom===c){q=s;return true}});return{epicField:q}};var k=function(q,s){var r=Confluence.CreateJiraContent.JiraIssue.FieldStatus.HIDDEN;var t={};f.each(q,function(u,v){if(u==="description"){r=(v.required==true?Confluence.CreateJiraContent.JiraIssue.FieldStatus.REQUIRED:Confluence.CreateJiraContent.JiraIssue.FieldStatus.VISIBLE)}else{if(v.required===true&&!v.hasDefaultValue&&!m.contains(s,u)){t[u]=v}}});return{descriptionFieldStatus:r,requiredFields:t}};var g=function(r,s){var t=e(s);if(Confluence.CreateJiraContent.JiraIssue.Cache.containKey(t)){var q=Confluence.CreateJiraContent.JiraIssue.Cache.get(t).requiredFields;return q[r].name}return""};var e=function(q){return l+q.serverId+"_"+q.projectId+"_"+q.issueTypeId};return{resolveEpicIssueType:h,getCreateIssueMeta:o,getFieldName:g}})(AJS.$,window._);Confluence.CreateJiraContent.JiraIssue.Cache=(function(){return{put:function(a,b){sessionStorage.setItem(a,JSON.stringify(b))},get:function(a){var b=sessionStorage.getItem(a);if(b){try{var d=JSON.parse(b)}catch(c){return null}return d}return null},containKey:function(a){return sessionStorage.getItem(a)!=null}}})();Confluence.CreateJiraContent.JiraIssue.FieldStatus={HIDDEN:-1,VISIBLE:0,REQUIRED:1};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/soy/feature-discovery-templates.soy' */
// This file was automatically generated from feature-discovery-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.CreateJiraContent == 'undefined') { Confluence.CreateJiraContent = {}; }
if (typeof Confluence.CreateJiraContent.Templates == 'undefined') { Confluence.CreateJiraContent.Templates = {}; }
if (typeof Confluence.CreateJiraContent.Templates.FeatureDiscovery == 'undefined') { Confluence.CreateJiraContent.Templates.FeatureDiscovery = {}; }


Confluence.CreateJiraContent.Templates.FeatureDiscovery.createFeatureDiscoveryContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="create-issue-feature-discovery-content"><div class="feature-discovery-header"><h2>', soy.$$escapeHtml("Create JIRA issues from content"), '</h2></div><div class="feature-discovery-body"><p>', soy.$$escapeHtml("Highlight requirements, ideas or tasks discussed in pages and transition them to your teams backlog in JIRA."), '</p><div class="feature-discovery-body-image"></div><div class="description"><p class="feature-discovery-body-left">', soy.$$escapeHtml("Select requirements on the page"), '</p><p class="feature-discovery-body-right">', soy.$$escapeHtml("Turn them into new stories in JIRA"), '</p></div></div><div class="feature-discovery-buttons"><button id="show-create-issue" class="aui-button">', soy.$$escapeHtml("Show me"), '</button><button id="feature-discovery-close" class="aui-button aui-button-link">', soy.$$escapeHtml("Close"), '</button></div><div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources', location = 'com/atlassian/confluence/plugins/createjiracontent/js/feature-discovery.js' */
Confluence.CreateJiraContent.FeatureDiscovery=(function(g){var f;var d=AJS.Meta.get("create-issue-metadata-show-discovery");var h=function(i){f=i};var e=function(i,l,m){var k=i.find("#feature-discovery-close");k.on("click",function(n){a();f.hide()});var j=i.find("#show-create-issue");j.on("click",function(n){a();f.hide();m(l)})};var c=function(i,j,k){i.html(Confluence.CreateJiraContent.Templates.FeatureDiscovery.createFeatureDiscoveryContent());e(i,j,k)};var b=function(){return d};var a=function(){d=false;g.ajax({url:AJS.Confluence.getContextPath()+"/rest/createjiracontent/1.0/metadata/discovered",type:"PUT"})};return{shouldShowFeatureDiscovery:b,disableFeatureDiscovery:a,addFeatureDiscoveryContent:c,setFeatureDialogObject:h}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:about', location = '/includes/js/about/about-page.js' */
AJS.toInit(function(d){var a=d("#confluence-about-link"),b;var c=function(){var f=AJS.Meta.get("version-number").match(/^\d+\.\d+/),h="Atlassian Confluence and Confluence Plugins",g=AJS.Meta.get("context-path")+"/aboutconfluence.action",e=new AJS.ConfluenceDialog({id:"about-confluence-dialog",closeOnOutsideClick:true});e.addHeader(h);e.addCancel("Close",function(){e.hide()});d.get(g,function(i){e.addPanel("default",i,"about-page-content")});return e};a.click(function(f){f.preventDefault();d(this).removeClass("interactive");if(b==null){b=c()}b.show()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support/analytics-common.js' */
(function(f){AJS.Confluence.Analytics=AJS.Confluence.Analytics||{};var g=/([^\?]+)[\?]?([^#]*)[#]?(.*)/;var c=["source","urlPath","queryParams","anchor"];var b;var i;function j(o){var n={};var q=g.exec(o);if(q){for(var p=0;p<c.length;p++){n[c[p]]=q[p]}n.queryParams=d(n.queryParams)}return n}function k(n){if(f.isEmptyObject(n)){return""}else{return(!n.urlPath?"":n.urlPath)+(f.isEmptyObject(n.queryParams)?"":"?"+m(n.queryParams))+(!n.anchor?"":"#"+n.anchor)}}function d(r){var q={};if(r){var p=r.split("&");for(var o=0;o<p.length;o++){var n=p[o].split("=");if(!q[n[0]]){q[n[0]]=[]}q[n[0]].push(p[o].substring(n[0].length+1))}}return q}function m(o){var q="";for(var p in o){for(var n=0;n<o[p].length;n++){q+="&"+p;if(o[p][n]){q+="="+o[p][n]}}}return q.substring(1)}function a(o,p){var n=j(o);if(!f.isEmptyObject(n)){n.queryParams.src=[p]}return k(n)}function e(){if("undefined"===typeof b){b=f('script[src$="/ga.js"]').length>0}return b}function h(){if("undefined"===typeof i){var n=f._data(window,"events");i=n.analytics&&n.analytics.length>0}return i}function l(){if(e()){if(_gaq){_gaq.push(function(){window.history.replaceState(null,"",AJS.Confluence.Analytics.srcRemovedUrl(document.URL))})}else{AJS.log("ERROR: Could not queue src parameter URL clean up task: _gaq is not defined but Google Analytics is activated.")}}else{window.history.replaceState(null,"",AJS.Confluence.Analytics.srcRemovedUrl(document.URL))}}AJS.Confluence.Analytics.setAnalyticsSource=function(n,o){if(e()||h()){n.attr("href",function(q,p){return a(p,encodeURIComponent(o))})}};AJS.Confluence.Analytics.srcRemovedUrl=function(o){var n=j(o);delete n.queryParams.src;return k(n)};AJS.Confluence.Analytics.srcParamValues=function(n){var o=j(n).queryParams;return o&&o.src?o.src:[]};AJS.toInit(function(p){var n=AJS.Confluence.Analytics.srcParamValues(document.URL);for(var o=0;o<n.length;o++){AJS.trigger("analytics",{name:"confluence.viewpage.src."+n[o]})}if(window.history&&window.history.replaceState){l()}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/js/confluence-team-space-blueprints.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:team-space-blueprint-item",function(c){c.on("submit.teamSpaceId",a);c.on("pre-render.teamSpaceId",b);c.on("post-render.teamSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-team-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/team/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Team == 'undefined') { Confluence.SpaceBlueprints.Team = {}; }


Confluence.SpaceBlueprints.Team.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="team-members">', soy.$$escapeHtml("Team members"), '</label><input id="team-members" class="text long-field autocomplete-multiuser" type="text" name="members" placeholder="', soy.$$escapeHtml("Add your team members"), '" data-autofill-user="true"/></div><div class="field-group"><label for="team-description">', soy.$$escapeHtml("Description"), '</label><textarea id="team-description" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("Let others know what this space is for"), '"></textarea></div></fieldset><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/js/confluence-documentation-space-blueprint.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function b(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function a(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-space-blueprints:documentation-space-blueprint-item",function(c){c.on("submit.documentationSpaceId",b);c.on("pre-render.documentationSpaceId",a);c.on("post-render.documentationSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-blueprints:confluence-documentation-space-blueprint-resources', location = 'com/atlassian/confluence/plugins/documentation/soy/dialog-page.soy' */
// This file was automatically generated from dialog-page.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.Documentation == 'undefined') { Confluence.SpaceBlueprints.Documentation = {}; }


Confluence.SpaceBlueprints.Documentation.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="documentation-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, key: opt_data.key}, output);
  output.append('<fieldset><div class="field-group"><label for="documentation-description">', soy.$$escapeHtml("Description"), '</label><textarea id="documentation-description" class="textarea long-field" rows="3" type="text" name="spaceDesc" placeholder="', soy.$$escapeHtml("Briefly describe the documentation in this space"), '"></textarea></div></fieldset><input type="hidden" name="noPageTitlePrefix" value="true" /><input type="hidden" name="atl_token" value="', soy.$$escapeHtml(opt_data.atlToken), '" /></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(d){Confluence.FeatureDiscovery={};var f,a=false,b=3;function c(g){if(f===undefined){f=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(g){return f[g]||[]}return f}function e(j,l){var k=c(j);for(var h=0,g=k.length;h<g;h++){if(k[h]==l){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(i,h){var l=Confluence.storageManager("feature-discovery."+i);h=h||b;function k(n){var m=parseInt(l.getItem(n),10);return isNaN(m)?0:m}function j(n,m){return l.setItem(n,m)}function g(m){return l.removeItem(m)}return{addDiscoveryView:function(m){j(m,k(m)+1)},shouldShow:function(m){if(a||e(i,m)){return false}if(k(m)>=h){this.markDiscovered(m);return false}a=true;return true},markDiscovered:function(n,m){if(e(i,n)){return}d.ajax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+i+"/"+n,type:"POST",success:function(){c(i).unshift(n);g(n);AJS.trigger("feature-discovered",{pluginKey:i,featureKey:n});if(m&&d.isFunction(m)){m()}}})},listDiscovered:function(){return c(i).slice(0)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="', "Filter", '"></form></div></div><div class="pages"></div><div class="recently-viewed-spinner" id="', soy.$$escapeHtmlAttribute(opt_data.spinnerId), '"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageCollection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="groups"></div><div class="empty"></div>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h3>', soy.$$escapeHtml(opt_data.title), '</h3><ul/>');
  return opt_sb ? '' : output.toString();
};


RY.Templates.pageItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="page-icon"><a href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), ' class="icon icon-', soy.$$escapeHtmlAttribute(opt_data.type), '"></a></div><div class="page-title"><a class="ellipsis" href=', soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)), '>', soy.$$escapeHtml(opt_data.title), ' - ', soy.$$escapeHtml(opt_data.space), '</a></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},formatDate:function(e){if(e>=a){e="Today"}else{if(e>=d){e="Yesterday"}else{var f=RY.util.diffInDays(c,e);e=AJS.format("{0} days ago",f)}}return e},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.Page=Backbone.Model.extend({href:function(){return AJS.contextPath()+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(f){var g=f.get("title");var e=f.get("space");var d=(g+e).toLowerCase();return _.all(c,function(h){return d.indexOf(h.toLowerCase())!==-1})})}this.trigger("filter",a,b);return a},comparator:function(a){return -(a.get("lastSeen"))}});RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\'t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c=AJS.format("We didn\'\'t find any matching pages in your history. \u003ca href=\"{0}\">Click here\u003c\/a> to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var g=a(this);var e=g.find("span");var f=AJS.dropDown.getAdditionalPropertyValue(e,"spaceName");if(f&&!g.is(".content-type-spacedesc")){g.after(g.clone().attr("class","space-name").html(f));g.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(i){i.preventDefault();var d=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var c="recently-viewed-spinner-"+Math.random();var h=a(RY.Templates.body({spinnerId:c}));d.addHeader("Recently viewed pages");d.addPanel("SinglePanel",h);d.addLink("Close",function(e){e.hide()});var f=a("<div>",{"class":"dialog-tip"}).text("Hint: type \"g\" and then \"r\" anywhere to quickly open this menu");d.popup.element.find(".dialog-button-panel").append(f);var j=new RY.PageCollection();var b=new RY.PageCollectionView({collection:j});h.find(".pages").html(b.render().el);var g=Raphael.spinner(c,16,"#707070");j.fetch({success:function(){g();var k=_.extend({},Backbone.Events);var l=new RY.PageNavigator(b.$el,h.parent(),k);var e=new RY.FilterView({collection:j,el:h.find(".filter"),navigationEvents:k}).render();e.search()}});d.gotoPanel(0);d.show();RY.util.analytics.trackDialogOpen()})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data', location = 'js/data/data.js' */
(function(){if(!window.WRM){window.WRM={}}var a={};function b(d){if(!d){return d}return JSON.parse(d)}function c(e,d){return Object.prototype.hasOwnProperty.call(e,d)}WRM.data=function(d){if(!c(a,d)){if(WRM._unparsedData&&c(WRM._unparsedData,d)){var g=WRM._unparsedData[d];try{a[d]=b(g);WRM._unparsedData[d]=undefined}catch(f){console&&console.log&&console.log("JSON Error parsing data with key "+d+": "+f)}}else{a[d]=null}}return a[d]}}());
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.aui.staging:content-ready', location = 'js/content-ready.js' */

// This has been added to directly to confluence to make it into confluence 5.0; it should be remove
// once contentReady is in AUI.

(function($) {

    var EVENT = 'content.ready'; // event name used in underlying event implementation

    // Check it's not already defined, eg when it's added to AUI plugin
    if (AJS.contentReady) {
        return;
    }

    /**
     * Binds an event handler to be called when content is ready.
     *
     * Usage:
     *
     * AJS.contentReady(fn)
     * called whenever content is ready
     *
     * AJS.contentReady(selector, fn)
     * called whenever content has been added that matches the given selector.
     * If the selector matches no elements, the handler will not be called.
     *
     * fn is always called with the first argument as a jQuery element.
     * Optional arguments can be passed by the triggering code.
     */
    AJS.contentReady = function() {
        var handler, boundSelector;
        if (1 === arguments.length) {
            handler = arguments[0];
        }
        else if (2 === arguments.length) {
            boundSelector = arguments[0];
            handler = arguments[1];
        }
        $(AJS).on(EVENT, function(e) {
            var args = Array.prototype.slice.call(arguments, 1),
                $element = args[0];
            if (boundSelector) {
                var $matched;
                if ($element.is(boundSelector)) {
                    $matched = $element;
                }
                else {
                    $matched = $element.find(boundSelector);
                }
                if ($matched.length) {
                    args[0] = $matched;
                    handler.apply(this, args);
                }
            }
            else {
                handler.apply(this, args);
            }
        });
    };

    /**
     * Triggers all bound contentReady event handlers.
     *
     * Usage:
     *
     * AJS.triggerContentReady($el, args...)
     * Calls all contentReady event handlers with the given element.
     * The $el argument is jQuery element and is required.
     * args... are optional arguments passed through to event handlers.
     */
    AJS.triggerContentReady = function() {
        $(AJS).trigger(EVENT, arguments);
    };

    /**
     * contentReady is always triggered on document ready. It is triggered with the body as the context.
     * Developers can set AJS.contentReady.onReadyArgs as a single value or array; these are passed
     * to handlers that are executed on ready.
     */
    $(function() {
        var args = [$("body")];
        if (AJS.contentReady.onReadyArgs) {
            args = args.concat(AJS.contentReady.onReadyArgs);
        }
        AJS.triggerContentReady.apply(this, args);
    });

}(AJS.$));

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-util', location = '/js/notifications-module-util.js' */
if(typeof AJS.namespace==="undefined"){AJS.namespace=function(d,c,e){var f=d.split(".");c=c||window;for(var b=0,g=f.length-1;b<g;b++){var a=c[f[b]];c=(a!=null)?a:c[f[b]]={}}return c[f[b]]=e||{}}}AJS.overrides={};AJS.Meta=jQuery.extend({},AJS.Meta,{set:function(a,b){AJS.overrides[a]=b},get:function(b){if(typeof AJS.overrides[b]!="undefined"){return AJS.overrides[b]}var a=jQuery("meta[name='ajs-"+b+"']");if(!a.length){return undefined}var c=a.attr("content");return AJS.asBooleanOrString(c)},getBoolean:function(a){return this.get(a)===true},getNumber:function(a){return +this.get(a)},getAllAsMap:function(){var a={};jQuery("meta[name^=ajs-]").each(function(){a[this.name.substring(4)]=this.content});return jQuery.extend(a,AJS.overrides)}});if(typeof Class==="undefined"){(function(){begetObject=function(d){var c=function(){};c.prototype=d;return new c()};var a=false,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){};Class.extend=function(){var j;var g=this.prototype;if(arguments.length>1){var i=AJS.$.makeArray(arguments);j=i.pop();var h;AJS.$.each(i,function(l,k){if(h){h=h.extend(k)}else{h=k}});return h.extend(this.prototype).extend(j)}else{j=arguments[0]}a=true;var f=new this();a=false;for(var e in j){if(f[e]=typeof j[e]=="function"&&typeof g[e]=="function"&&b.test(j[e])){f[e]=(function(k,l){return function(){var n=this._super;this._super=g[k];var m=l.apply(this,arguments);this._super=n;return m}})(e,j[e])}else{if(typeof g[e]==="object"){var d=begetObject(j[e]);AJS.$.each(g[e],function(l,m){if(!d[l]){d[l]=m}else{if(typeof d[l]==="object"){var k=begetObject(d[l]);AJS.$.each(m,function(o,n){if(!k[o]){k[o]=n}});d[l]=k}}});f[e]=d}else{f[e]=j[e]}}}function c(){if(!a&&this.init){this.init.apply(this,arguments)}}c.fn=c.prototype=f;c.constructor=c;c.extend=arguments.callee;return c}})()};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-util', location = '/js/FormDialog.js' */
(function(){AJS.namespace("Notifications.FormDialog");Notifications.FormDialog=Class.extend({init:function(b){var a=this;this.options=b;this.$trigger=AJS.$(this.options.trigger);this.url=this.$trigger.attr("href");this.options.id=this.options.id||"notifiations-form-dialog";AJS.$(".notifications-form-dialog").remove();this.dialog=new AJS.Dialog({width:this.options.width||810,height:this.options.height||600,id:this.options.id});AJS.$(this.dialog.popup.element).addClass("notifications-form-dialog");this.ajaxOptions=AJS.$.extend({url:this.url,success:function(c){a._renderContents(c);a.dialog.show()},error:function(c){alert("Unknown error occurred. Please reload the page and try again.")},complete:function(d,c){a._hideLoadingIndicator()}},this.options.ajaxOptions)},show:function(){this._showLoadingIndicator();AJS.$.ajax(this.ajaxOptions)},hide:function(){this.dialog.hide()},_getThrobber:function(){if(!this.$throbber){this.$throbber=AJS.$('<span class="icon throbber loading notif-hidden"></span>');this.dialog.popup.element.find(".dialog-button-panel").prepend(this.$throbber)}return this.$throbber},_showThrobber:function(){this._getThrobber().show()},_hideThrobber:function(){this._getThrobber().hide()},_handleSubmit:function(b){var a=this;a._showThrobber();b.addClass("submitting");AJS.$(".error",b).remove();var c=b.serializeArray();AJS.$.ajax({url:b.attr("action"),type:!!this.options.edit?"PUT":"POST",contentType:"application/json",data:JSON.stringify({config:c}),success:function(d){b.removeClass("submitting");window.location.reload()},error:function(f){if(f&&f.responseText){try{var d=JSON.parse(f.responseText);if(d&&d.errors){AJS.$.each(d.errors,function(h,i){AJS.$("input[name='"+h+"']",b).after("<div class='error'>"+i+"</div>")})}if(d&&d.errorMessages){var g="";AJS.$.each(d.errorMessages,function(h,i){g+=i+"<br/>"});if(g!==""){AJS.$("#errorContainer",b).append("<div class='field-group error'>"+g+"</div>")}}}catch(e){alert("Unknown error occurred. Please reload the page and try again.")}}b.removeClass("submitting")},complete:function(e,d){a._hideThrobber()}})},_renderContents:function(f){var e=AJS.$(f),a=this,c=AJS.$(":header:first",e);this.dialog.addHeader(c.text());c.remove();this.dialog.addPanel(this.options.id);var b=this.dialog.getPanel(0,0);b.html(e);e.find("form").submit(function(i){i.preventDefault();var h=AJS.$(this);a._handleSubmit.call(a,h)});var d=AJS.$("div.buttons-container",e);var g=d.find(".button:first");this.dialog.addButton(g.val(),function(){e.find("form").submit()},"aui-button "+g.attr("id"));this.dialog.addLink("Cancel",function(){a.hide()},"cancel-dialog");d.remove();if(this.options.decorateContents){this.options.decorateContents(e)}this.dialog.popup.element.addClass("jira-dialog-content-ready")},_showLoadingIndicator:function(){var a=this,b=440,c=0;clearInterval(this.loadingTimer);this._getLoadingIndicator().show();this.loadingTimer=window.setInterval(function(){if(c===b){c=0}c=c+40;a._getLoadingIndicator().css("backgroundPosition","0 -"+c+"px")},50)},_hideLoadingIndicator:function(){clearInterval(this.loadingTimer);this._getLoadingIndicator().hide()},_getLoadingIndicator:function(){if(!this.loadingIndicator){this.loadingIndicator=AJS.$('<div class="aui-loading"></div>');this.loadingIndicator.appendTo("body")}return this.loadingIndicator}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugin.notifications.notifications-module:notification-prefs-checker', location = 'js/user-notification-prompt.js' */
(function(){AJS.$(function(){var b=AJS.Meta.get("show-notifications-prompt");if(b){var c=AJS.format("New notification servers are available! Please visit your personal {0}notification settings{1} to ensure all your preferences are up to date.","<a href='"+AJS.contextPath()+AJS.Meta.get("show-notifications-url")+"' target='_blank'>","</a>");var a=AJS.$('<div class="notif-global-warning" id="notificationsBanner"/>').html(c);a.prependTo("body")}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:analytics', location = 'analytics/analytics.js' */
var _gaq=_gaq||[];AJS.$(function(){_gaq.push(["navlinks._setAccount","UA-20272869-14"]);_gaq.push(["navlinks._setDomainName","none"]);_gaq.push(["navlinks._setAllowLinker",true]);_gaq.push(["navlinks._setDetectTitle",false]);_gaq.push(["navlinks._trackPageview",location.pathname]);AJS.$.ajax(AJS.contextPath()+"/rest/nav-links-analytics-data/1.0/",{success:function(a){_gaq.push(["navlinks._setCustomVar",1,"isUserAdmin",a.isUserAdmin?"true":"false",2])}})});(function(a){a.trackEvent=function(c,e,b,d){if(d===undefined){_gaq.push(["navlinks._trackEvent",c,e,b])}else{_gaq.push(["navlinks._trackEvent",c,e,b,d])}if(AJS.EventQueue){AJS.EventQueue.push({name:c+"."+e,properties:{label:b,value:d}})}};a.getCurrentApplication=function(){if(window.Confluence!==undefined){return"confluence"}else{if(window.BAMBOO!==undefined){return"bamboo"}else{if(window.JIRA!==undefined){return"jira"}else{return""}}}}}(window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:analytics', location = 'analytics/help-analytics.js' */
(function(c,b){function a(g,d,f){try{b.trackEvent("helpmenu",g,d,f)}catch(h){AJS.log("failed to track analytics event, category: helpmenu, action: "+g+", label: "+d+", value: "+f)}}c(function(){var d=c("#system-help-menu-content,#help-menu-link-content,#bamboo\\.global\\.header-help\\.menu");d.bind({"aui-dropdown2-show":function(f){a("show","")},"aui-dropdown2-hide":function(f){a("hide","")}}).find("a").unbind(".analytics").bind("click.analytics",function(){var e=this.attributes.href;a("linkFollowed",typeof e==="object"?e.value:e)}).addClass("interactive")})}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    output.append('<div class="aui-nav-heading sidebar-section-header">', soy.$$escapeHtml(opt_data.title), '</div><ul class="aui-nav nav-links">');
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      navlinks.templates.appswitcher.applicationsItem(linkData8, output);
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(opt_data.link), '" class="interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">', soy.$$escapeHtml("Application Links"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">', soy.$$escapeHtml("Shortcuts"), '</div><div class="app-switcher-loading">', "Loading\x26hellip;", '</div></div></nav></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-title">');
  aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}, output);
  output.append('<div class="sidebar-project-name">', soy.$$escapeHtml(opt_data.name), '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var dropdownList__soy74 = new soy.StringBuilder();
  navlinks.templates.appswitcher.dropdownList({list: opt_data.links}, dropdownList__soy74);
  dropdownList__soy74 = dropdownList__soy74.toString();
  aui.dropdown2.dropdown2({menu: {'id': opt_data.id, 'content': dropdownList__soy74, 'extraClasses': 'aui-style-default sidebar-customize-section'}, trigger: {'showIcon': false, 'content': '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', 'container': '#app-switcher'}}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="sidebar-admin-links">');
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output.append('<li class="nav-link"><a href="', soy.$$escapeHtml(linkData82.href), '" title="', soy.$$escapeHtml(linkData82.title), '"><span class="nav-link-label">', soy.$$escapeHtml(linkData82.label), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = new soy.StringBuilder();
      navlinks.templates.appswitcher.sidebarContents(null, sidebarContents__soy97);
      sidebarContents__soy97 = sidebarContents__soy97.toString();
      var triggerContent__soy99 = new soy.StringBuilder();
      navlinks.templates.appswitcher.trigger(null, triggerContent__soy99);
      triggerContent__soy99 = triggerContent__soy99.toString();
      navlinks.templates.appswitcher.sidebar({sidebar: {'id': 'app-switcher', 'content': sidebarContents__soy97}, trigger: {'showIcon': false, 'content': triggerContent__soy99}}, output);
      output.append('<script>\n                (function (NL) {\n                    var initialise = function () {\n                        new NL.SideBar({\n                            sidebarContents: \'#app-switcher\'\n                        });\n                    };\n                    if (NL.SideBar) {\n                        initialise();\n                    } else {\n                        NL.onInit = initialise;\n                    }\n                }(window.NL = (window.NL || {})));\n                window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
    } else {
      navlinks.templates.appswitcher_old.switcher(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="sidebar-trigger app-switcher-trigger" aria-owns="', soy.$$escapeHtml(opt_data.sidebar.id), '" aria-haspopup="true">', opt_data.trigger.content, '</a><div id=', soy.$$escapeHtml(opt_data.sidebar.id), ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">', opt_data.sidebar.content, '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(c,a){a.SideBar=function(d){var e=this;this.$sidebar=null;d=c.extend({sidebarContents:null},d);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(g,f){e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:f,name:g}))};this.getProjectData=function(){var f=c(".project-shortcut-dialog-trigger"),g=f.data("key"),h=f.data("entity-type");if(f.size()==0||!g||!h){c(".app-switcher-shortcuts").remove();return}var j,i;i=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+g,cache:false,data:{entityType:h},dataType:"json"});j=c.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+g,cache:false,data:{entityType:h},dataType:"json"});c.when(i,j).then(function(l,k){e.updateProjectShortcuts(l,k,{key:g,entityType:h,name:f.data("name"),avatarUrl:f.find("img").prop("src")})},e.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=c(d.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){c(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(f,h){var g=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+f,label:"Customize shortcuts",title:""}];if(e.entityMappings[h]){g.push({href:e.generateEntityLinksUrl(f,e.entityMappings[h]),label:"Manage product links",title:""})}e.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:g}))};this.updateAppLinks=function(f){c(function(){e.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:f}));if(a.isUserAdmin){e.addApplicationsCog()}e.bindAnalyticsHandlers(e.getSidebar(),f)})};this.updateProjectShortcuts=function(i,g,h){var j=i[0].shortcuts,f=g[0].shortcuts;e.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:j.concat(f)}));if(a.isUserAdmin){e.addProjectShortcutsCog(h.key,h.entityType)}e.populateProjectHeader(h.name,h.avatarUrl);e.bindAnalyticsHandlers(e.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(f,g){if(g===e.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+g+"&key="+f}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+g+"/"+f}};this.showAppSwitcherError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.showProjectShortcutsError=function(){c(function(){var f=e.getSidebar();f.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());f.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(f,g){};this.getLinks();c(this.getProjectData);this.toggleSidebar=function(h){var i=e.getSidebar(),g=c("body"),f=c(window.document);if(!g.hasClass("app-switcher-open")){var k=c("#header");i.css("left",-i.width());i.parent("body").length||i.appendTo("body");b({data:i});i.animate({left:0},300);function j(l){var n=l.target&&c(l.target),m=l.keyCode;if(l.originalEvent===h.originalEvent){return}if(n&&!m&&!(n.closest(i).length||n.closest(k).length)&&h.which==1&&!(l.shiftKey||l.ctrlKey||l.metaKey)){e.toggleSidebar()}else{if(m===27){e.toggleSidebar()}}}f.on("click.appSwitcher",j);f.on("keydown.appSwitcher",j);f.on("scroll.appSwitcher",i,b)}else{f.off(".appSwitcher")}g.toggleClass("app-switcher-open")};c("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(f){var d=c(document).scrollTop(),g=c("#header"),e=(g.height()+g.offset().top)-d;if(e>=0){f.data.css({top:e,position:"fixed"})}else{f.data.css({top:0,left:0,position:"fixed"})}}if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
(function(b,a){a.AppSwitcher=function(c){var d=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var e=this;this.$dropdown=null;c=b.extend({dropdownContents:null},c);this.getLinks=function(){return b.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=b(c.dropdownContents)}return this.$dropdown};this.updateDropdown=function(f){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:f,showAdminLink:a.isUserAdmin,adminLink:d}));e.bindAnalyticsHandlers(e.getDropdown(),f)})};this.showError=function(){b(function(){e.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",b.proxy(e.retryLoading,e))})};this.retryLoading=function(f){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();f&&f.stopPropagation()};this.trackEvent=function(h,f,g){try{a.trackEvent("appswitcher-new",h,f,g)}catch(i){AJS.log("failed to track analytics event, category: appswitcher, action: "+h+", label: "+f+", value: "+g)}};this.bindAnalyticsHandlers=function(i,h){function g(){var l=0;for(var j in h){var k=h[j];if(k.custom){l+=1}}return l}var f=g();i.on({"aui-dropdown2-show":function(j){e.trackEvent("show",a.getCurrentApplication(),h.length)},"aui-dropdown2-hide":function(j){e.trackEvent("hide",a.getCurrentApplication(),h.length)}});i.off(".analytics").on("click.analytics","a",function(j){e.trackEvent("appSelected",b(this).attr("href"),h.length)})};this.getLinks()};if(a.onInit){a.onInit()}}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}, output);
  if (opt_data.custom) {
    navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}, output);
  }
  if (opt_data.showAdminLink) {
    navlinks.templates.appswitcher_old.adminSection(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.list.length > 0) {
    var param19 = new soy.StringBuilder('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentData(linkData27, {showDescription: opt_data.showDescription}), param19);
    }
    param19.append('</ul>');
    aui.dropdown2.section({content: param19.toString()}, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="nav-link', (opt_data.self) ? ' nav-link-local' : '', '"><a href="', soy.$$escapeHtml(opt_data.link), '" class="aui-dropdown2-radio interactive', (opt_data.self) ? ' checked' : '', '" title="', soy.$$escapeHtml(opt_data.link), '"><span class="nav-link-label">', soy.$$escapeHtml(opt_data.label), '</span>', (opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '', '</a></li>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + "Configure\x26hellip;" + '</span></a></li></ul>'}, output);
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-error">', "Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="app-switcher-loading">', "Loading\x26hellip;", '</div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">', soy.$$escapeHtml("Linked Applications"), '</span>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (true) {
    var loadingContent__soy81 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.loading(null, loadingContent__soy81);
    loadingContent__soy81 = loadingContent__soy81.toString();
    var triggerContent__soy83 = new soy.StringBuilder();
    navlinks.templates.appswitcher_old.trigger(null, triggerContent__soy83);
    triggerContent__soy83 = triggerContent__soy83.toString();
    aui.dropdown2.dropdown2({menu: {'id': 'app-switcher', 'content': loadingContent__soy81, 'extraClasses': 'aui-style-default'}, trigger: {'showIcon': false, 'content': triggerContent__soy83, 'extraClasses': 'app-switcher-trigger'}}, output);
    output.append('<script>\n            (function (NL) {\n                var initialise = function () {\n                    // For some milestones of AUI, the atlassian soy namespace was renamed to aui. Handle that here by ensuring that window.atlassian is defined.\n                    window.atlassian = window.atlassian || window.aui;\n                    new NL.AppSwitcher({\n                        dropdownContents: \'#app-switcher\'\n                    });\n                };\n                if (NL.AppSwitcher) {\n                    initialise();\n                } else {\n                    NL.onInit = initialise;\n                }\n            }(window.NL = (window.NL || {})));\n            window.NL.isUserAdmin = ', soy.$$escapeHtml(false), '<\/script>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/js/space-page-picker.js' */
(function(i,c){var t={conf_all:"All spaces",conf_favorites:"Favourite spaces",conf_global:"Site spaces",conf_personal:"Personal spaces",conf_current:"Current space"};var b={data:null,suggestCategories:null};var v="SPACE-PAGE-TRIGGER-VALUE";var f={placeholder:"Select a space or page",multiple:true,formatInputTooShort:function(){return "Start typing to search"},formatResult:function(G,I,L){if(G.children){I.addClass("space-page-picker-result-category");return i.fn.select2.defaults.formatResult.apply(this,arguments)}else{if(G.id){I.attr("title",G.text);I.addClass("space-page-picker-result-label-with-icon");var F=i("<span/>").addClass(G.className+" item-text").html(i.fn.select2.defaults.formatResult.apply(this,arguments));var K=(G.subText)?i("<span/>").addClass("space-name").html(G.subText):i("");var H=i("<span/>").attr(s(G.id),G.id).append(F).append(K);var J=i("<span/>").append(H);return J}else{I.addClass(G.className);return i.fn.select2.defaults.formatResult.apply(this,arguments)}}},formatSelection:function(G,H){H.addClass("space-page-picker-selected-item");H.attr("title",G.text);var F=i("<span/>").attr(s(G.id),G.id).addClass(G.className+" item-text").html(i.fn.select2.defaults.formatSelection.apply(this,arguments));H.append(F)},escapeMarkup:function(F){return F},formatResultCssClass:function(F){return(F.children||F.id)?"":"select2-result-space-page-separator"},containerCssClass:"space-page-picker-container",dropdownCssClass:"space-page-picker-drop"};var B=function(F,H){var G=F.data("select2").opts.manualInit;if(G===true){return}d(F.val(),F,H)};function r(H,G,F){var I=_.map(H,function(J){return G[J]});return(F)?I:((I.length>0)?I[0]:null)}var l=function(F){var G;if(F.suggestCategories){var H={text:"Suggested categories",children:_.map(F.suggestCategories,function(I){return o(I)})}}return function(J){if(G){J.callback(G);return}var I=[];G={results:[]};if(x(F)){var L=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/spaces").done(function(M){var N=(H)?[H]:[];(M.length>0)&&N.push({text:"Suggested spaces",children:_.map(M,function(O){return m(O.key,_.escape(O.name),null,true)})});(N.length>0)&&(G.results=G.results.concat(N))}).fail(function(){AJS.debug("Couldn't fetch recent spaces");var M=(H)?[H]:[];(M.length>0)&&(G.results=G.results.concat(M))});I.push(L)}if(j(F)){var K=i.getJSON(AJS.contextPath()+"/rest/recentlyviewed/1.0/recent/pages",{noTrashedContent:true}).done(function(M){if(M.length>0){G.results.push({text:"Suggested pages",children:_.map(M,function(N){return h(N.id,_.escape(N.title),_.escape(N.space),"content-type-page",true)})})}}).fail(function(){AJS.debug("Couldn't fetch recent pages")});I.push(K)}i.when.apply(i,_.map(I,function(N){var M=i.Deferred();N.always(function(){M.resolve()});return M})).done(function(){if(G.results.length===0){G.results=[{text:"",children:[]}]}J.callback(G)})}};var w=function(F){var G="";if(!F||F.length===2&&F.indexOf("space")>=0&&F.indexOf("page")>=0){G="type=spacedesc&type=personalspacedesc&type=page"}else{if(F.length===1&&F[0]==="space"){G="type=spacedesc&type=personalspacedesc"}else{if(F.length===1&&F[0]==="page"){G="type=page"}else{return}}}return window.Select2.query.ajax({url:AJS.contextPath()+"/rest/quicknav/1/search?"+G,data:function(H,I){return{query:H,maxPerCategory:25}},quietMillis:250,results:function(K,O){var N=K.contentNameMatches;if(N.length<=1){return{results:[]}}else{var P=[];var I=function(Q){return E(Q.spaceKey,Q.spaceName,Q.id,Q.name,Q.className)};for(var L=0;L<N.length-1;L++){var M=[];for(var J=0;J<N[L].length;J++){var H=I(N[L][J]);if(H){M.push(H)}}if(M.length>0){P=P.concat(M);P.push({id:"",text:"",subText:"",className:"",disabled:true})}}return{results:[{text:"Search results",children:P}]}}}})};var p=function(G){var F=w(G.contentType);var H=l(G);return function(I){if(I.term.length<2){H(I)}else{F(I)}}};function s(F){return(F.indexOf("page:")===0)?"data-item-id":"data-item-key"}function m(F,I,G,H){G=(G)?G:((F.indexOf("~")===0)?"content-type-personalspacedesc":"content-type-spacedesc");return e("space",F,I,"",G,H)}function o(F){var G=t[F];return e("space-cat",F,G,"","content-type-space-category",G)}function h(J,I,F,G,H){return e("page",J,I,F,G,H)}function e(L,I,K,H,G,J){var F=y(L,I);K=(!K)?I:K;G=(J)?G:(G+" content-not-found");return{id:F,text:K,subText:H,className:G,disabled:(J?false:true)}}function C(F){return"space-cat:"+F}function a(F){return"space:"+F}function D(F){return"page:"+F}function E(J,G,K,H,I){var F;if(I==="content-type-spacedesc"||I==="content-type-personalspacedesc"){F=m(J,G,I,true)}else{if(I==="content-type-page"){F=h(K,H,G,I,true)}}return F}function y(){var F=Array.prototype.slice.apply(arguments);return F.join(":")}function x(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("space")>=0)&&F.showRecentlyViewedSpaces!==false)}function j(F){return((!F.contentType||F.contentType.length===0||F.contentType.indexOf("page")>=0)&&F.showRecentlyViewedPages!==false)}function n(G,F){var H=q("SpaceCat",G,F.inputSpaceCatId,(F.inputSpaceCatName)?F.inputSpaceCatName:F.inputSpaceCatId);return u(G,H.id,H.name)}function g(G,F){var H=q("Space",G,F.inputSpaceId,(F.inputSpaceName)?F.inputSpaceName:F.inputSpaceId);return u(G,H.id,H.name)}function z(G,F){var H=q("Page",G,F.inputPageId,(F.inputPageName)?F.inputPageName:F.inputPageId);return u(G,H.id,H.name)}function q(J,H,K,G){var F;if(!K){F=H.attr("id");if(!F){return null}K=F+J}if(!G){var I=H.attr("name")||F;G=I+J}return{id:K,name:G}}function u(G,I,F){var H=i("#"+I);if(H.length===0){H=i(Confluence.UI.Components.templates.hiddenField({id:I,name:F}));G.after(H)}return H}function k(G,I,H){if(!G){return}var F=_.filter(I,function(J){return J.indexOf(H)===0});F=_.map(F,function(J){return J.substring(H.length,J.length)});G.val(F.join(","))}function A(M,H,I,F){I=(I)?(_.isArray(I)?I:I.split(",")):[];F=(F)?F.split(","):[];var L=_.union(I,F);var G=_.map(L,function(O){return H+O});var J=M.val();var N=J?J.split(","):[];var K=_.union(N,G);if(K.length>0){M.val(K.join(","))}}c.build=function(G){var F=_.extend({},b,f,G);if(!G.data){F=_.extend({},{initSelection:B,query:p(F)},F)}var H=i(F.orgElement);if(!H||H.length!==1){return F}if(!H.val()&&!F.manualInit){H.val(v)}H.addClass("select2-input");return F};c.setValue=function(G,F){d(G,F,function(H){F.auiSelect2("data",H)})};function d(P,G,S){var U=G.data("select2").opts;var Q=U.placeholder||G.data("placeholder");var K=n(G,U);var M=g(G,U);var I=z(G,U);G.on("change",function(V){k(K,V.val,"space-cat:");k(M,V.val,"space:");k(I,V.val,"page:")});G.val("");var T=(G["0"].tagName==="SELECT")?(G.context.multiple):(U.multiple);var N=[];var R=[];var L=[];var F={};var H=(P)?P.split(","):[];H=_.filter(H,function(V){var W=V.split(":");if(W.length===2){return true}else{if(W.length<0||W.length>=3||(W.length===1&&(W[0]!==v&&W[0]!==Q))){AJS.debug("Error value: "+W)}}});P=H.join(",");G.val(P);A(G,"space-cat:",U.spaceCatKeys,(K)?K.val():"");A(G,"space:",U.spaceKeys,(M)?M.val():"");A(G,"page:",U.pageIds,(I)?I.val():"");P=G.val();H=(P)?P.split(","):[];k(K,H,"space-cat:");k(M,H,"space:");k(I,H,"page:");if(H.length===0){return}_.each(H,function(V,W){var Z=V.split(":");if(Z.length===2){var Y=Z[0];var X=Z[1];if(Y==="space-cat"){N.push(X)}else{if(Y==="space"){R.push(X)}else{if(Y==="page"){L.push(X)}}}}});_.each(N,function(V){F[C(V)]=o(V)});var O=[];if(R.length>0){var J=i.getJSON(AJS.contextPath()+"/rest/prototype/1/space",{spaceKey:R}).done(function(X){var V=[];_.each(X.space,function(Y){F[a(Y.key)]=m(Y.key,_.escape(Y.name),null,true);V.push(Y.key)});var W=_.difference(R,V);_.each(W,function(Y){F[a(Y)]=m(Y,Y,null,false)})}).fail(function(){AJS.debug("Couldn't resolve spaceKeys:",R);_.each(R,function(V){F[a(V)]=m(V,V,null,false)})});O.push(J)}_.each(L,function(V){var W=i.getJSON(AJS.contextPath()+"/rest/api/content/"+V,{expand:"space"}).done(function(X){F[D(X.id)]=h(X.id,_.escape(X.title),_.escape(X.space.name),"content-type-page",true)}).fail(function(){AJS.debug("Couldn't resolve pageId:",V);F[D(V)]=h(V,V,"","content-type-page",false)});O.push(W)});i.when.apply(i,_.map(O,function(W){var V=new i.Deferred();W.always(function(){V.resolve()});return V.promise()})).done(function(){S(r(H,F,T))})}}(AJS.$,window.Confluence.UI.Components.SpacePagePicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:space-page-picker', location = '/soy/space-page-picker.soy' */
// This file was automatically generated from space-page-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.templates == 'undefined') { Confluence.UI.Components.templates = {}; }


Confluence.UI.Components.templates.hiddenField = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<input type="hidden" id="', soy.$$escapeHtml(opt_data.id), '" name="', soy.$$escapeHtml(opt_data.name), '" />');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'templates/task-report-blueprint.soy' */
// This file was automatically generated from task-report-blueprint.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.taskReportBlueprintForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="report-types" id="task-report-types"><li class="template" id="team-task-report"><span class="template-preview team-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Assigned to my team"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks assigned to specific people"), '</div></div></li><li class="template" id="location-task-report"><span class="template-preview location-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("In my project"), '</div><div class="template-description">', soy.$$escapeHtml("Show tasks created in specific spaces and pages"), '</div></div></li><li class="template" id="custom-task-report"><span class="template-preview custom-task-report-icon"></span><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Custom"), '</div><div class="template-description">', soy.$$escapeHtml("Create your own report"), '</div></div></li></ol>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByTeamForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-team-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-team-picker">', soy.$$escapeHtml("Assigned to"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-team-picker" class="text select2-input long-field autocomplete-multiuser" type="text" name="teamMembers" placeholder="', soy.$$escapeHtml("Only show tasks assigned to these people"), '" /><div class="error hidden"></div></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.reportByLocationForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="report-by-location-form" class="aui"><fieldset><div class="field-group"><label for="task-report-page-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your task report"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-location-picker">', soy.$$escapeHtml("Created in"), '<span class="aui-icon icon-required">required</span></label><input id="task-report-location-picker" class="text select2-input long-field" type="text" name="locations" placeholder="', soy.$$escapeHtml("Select task locations"), '"/><div class="error hidden"></div></div><div class="field-group"><label for="task-report-label-picker">', soy.$$escapeHtml("Labels"), '</label><input id="task-report-label-picker" class="text select2-input long-field" type="text" name="labels" placeholder="', soy.$$escapeHtml("Only show tasks on pages with these labels"), '"/></div><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" name="completed" id="task-report-completed-cb"><label for="task-report-completed-cb">', soy.$$escapeHtml("Include completed tasks"), '</label></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.assigneeParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="assignees">');
    var keyList48 = opt_data.userKeys;
    var keyListLen48 = keyList48.length;
    for (var keyIndex48 = 0; keyIndex48 < keyListLen48; keyIndex48++) {
      var keyData48 = keyList48[keyIndex48];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData48), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.creatorParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.userKeys) {
    output.append('<ac:parameter ac:name="creators">');
    var keyList58 = opt_data.userKeys;
    var keyListLen58 = keyList58.length;
    for (var keyIndex58 = 0; keyIndex58 < keyListLen58; keyIndex58++) {
      var keyData58 = keyList58[keyIndex58];
      output.append('<ri:user ri:userkey="', soy.$$escapeHtml(keyData58), '" />');
    }
    output.append('</ac:parameter>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.macroParam = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.value) ? '<ac:parameter ac:name="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.value) + '</ac:parameter>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.teamReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
  Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- assignee-->');
    Confluence.InlineTasks.Report.Templates.assigneeParam({userKeys: opt_data.assignees}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.locationReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
  output.append('<!-- pages-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
  output.append('<!-- labels-->');
  Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
  output.append('<!-- status--><ac:parameter ac:name="status">incomplete</ac:parameter></ac:structured-macro></p>');
  if (opt_data.showCompletedTasks) {
    output.append('<ac:structured-macro ac:name="expand"><ac:parameter ac:name="title">', soy.$$escapeHtml("Completed tasks"), '</ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="tasks-report-macro"><!-- space-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'spaces', value: opt_data.spaceKeys}, output);
    output.append('<!-- pages-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'pages', value: opt_data.pageIds}, output);
    output.append('<!-- labels-->');
    Confluence.InlineTasks.Report.Templates.macroParam({name: 'labels', value: opt_data.labels}, output);
    output.append('<!-- status--><ac:parameter ac:name="status">complete</ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.InlineTasks.Report.Templates.customReportContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><span class="text-placeholder">', soy.$$escapeHtml("Edit the Task Report macro to customise your report."), '</span></p><ac:structured-macro ac:name="tasks-report-macro">');
  if (opt_data.creators) {
    Confluence.InlineTasks.Report.Templates.creatorParam({userKeys: opt_data.creators}, output);
  }
  output.append('</ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-resources', location = 'js/task-report-bp.js' */
(function(d){var c;function e(t){t.addClass("selected").siblings().removeClass("selected");AJS.trigger("selected.task-report-types",t)}function i(w,v){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_blueprint.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_blueprint.clicked"});var u=d("#task-report-types");var t=u.find(".template");t.first().addClass("selected");t.click(function(){e(d(this))}).dblclick(function(){d(".create-dialog-create-button:visible").click()});u.attr("tabindex",0).keydown(function(z){if(z.keyCode==38||z.keyCode==40){z.preventDefault();var x=u.find(".selected"),y;if(z.keyCode==38){y=x.prev().length?x.prev():t.last()}else{if(z.keyCode==40){y=x.next().length?x.next():t.first()}}e(y)}});u.focus();AJS.bind("selected.task-report-types",function(y,x){if(d(x).is("#custom-task-report")){p("Create")}else{p("Next")}});p("Next")}function f(v,u){var t=u.$container.find(".selected").attr("id");if(t==="team-task-report"){u.nextPageId="teamTaskReportId";AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_team.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.clicked"})}else{if(t==="location-task-report"){u.nextPageId="locationTaskReportId";AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_project.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.clicked"})}else{if(t==="custom-task-report"){c.getSubmissionRestPath=function(){AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_custom.clicked"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_custom.clicked"});return"/rest/create-dialog/1.0/content-blueprint/create-draft"};g(u,"custom-task-report-template")}else{return false}}}}function a(u,t){o()}function m(w,v){var t=d("#report-by-team-form");b(t);var u=true;u=r(d("#task-report-team-picker"),"Assignee is required.")&&u;u=s(v.wizardData.spaceKey)&&u;u?g(v,"team-task-report-template"):h(t);AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_team.created"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_team.created"});return u}function n(u,t){k(d("#task-report-location-picker"),t.wizardData.spaceKey);q(d("#task-report-label-picker"));o()}function j(w,v){var t=d("#report-by-location-form");b(t);var u=true;u=r(d("#task-report-location-picker"),"A space or page is required.")&&u;u=s(v.wizardData.spaceKey)&&u;if(u){g(v,"location-task-report-template")}else{h(t)}AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent("confluence-spaces.tasks.report_project.created"):AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.report_project.created"});return u}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-inline-tasks:task-report-blueprint-item",function(t){t.on("post-render.selectTaskReportId",i);t.on("submit.selectTaskReportId",f);t.on("post-render.teamTaskReportId",a);t.on("submit.teamTaskReportId",m);t.on("post-render.locationTaskReportId",n);t.on("submit.locationTaskReportId",j);c=t});function b(t){t.find(".error").addClass("hidden").empty()}function s(v){var t=d("#task-report-page-title");var u=Confluence.Blueprint.validateTitle(t,v);if(!u){t.siblings(".error").removeClass("hidden")}return u}function r(t,u){var v=d.trim(t.val());if(!v&&u){l(t,u)}return !!v}function h(u){var t=u.find("div.error:not(.hidden)").first();var v=t.siblings("input").eq(0);if(v.hasClass("select2-offscreen")){v.select2("focus")}else{v.focus()}}function g(t,u){t.pageData.contentTemplateKey=u}function l(v,u){var t=v.siblings(".error");t.html(u);t.removeClass("hidden");return u}function q(t){t.auiSelect2(Confluence.UI.Components.LabelPicker.build())}function k(u,t){u.auiSelect2(Confluence.UI.Components.SpacePagePicker.build({spaceKeys:[t],orgElement:u}))}function p(t){d(".create-dialog-create-button:visible").text(t)}function o(){var v;var u=d("#task-report-completed-cb");var t=d("label[for=task-report-completed-cb]").add(u);t.mousedown(function(){v=true});d(".dialog-wizard-page-main").on("mouseup",function(w){if(!t.is(w.target)&&v){u.click()}v=false})}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'js/kb-space-dialog-wizard.js' */
AJS.bind("blueprint.wizard-register.ready",function(){function a(d,c){c.pageData.ContentPageTitle=c.pageData.name;return Confluence.SpaceBlueprint.CommonWizardBindings.submit(d,c)}function b(d,c){c.soyRenderContext.atlToken=AJS.Meta.get("atl-token");c.soyRenderContext.showSpacePermission=false}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-blueprint-item",function(c){c.on("submit.kbSpaceId",a);c.on("pre-render.kbSpaceId",b);c.on("post-render.kbSpaceId",Confluence.SpaceBlueprint.CommonWizardBindings.postRender)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:space-kb-web-resource', location = 'soy/space.soy' */
// This file was automatically generated from space.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.SpaceBlueprints == 'undefined') { Confluence.SpaceBlueprints = {}; }
if (typeof Confluence.SpaceBlueprints.KnowledgeBase == 'undefined') { Confluence.SpaceBlueprints.KnowledgeBase = {}; }


Confluence.SpaceBlueprints.KnowledgeBase.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-space-form" class="common-space-form aui">');
  Confluence.Templates.Blueprints.CreateSpace.createSpaceFormFields({showSpacePermission: false, fieldErrors: opt_data.fieldErrors, name: opt_data.name, spaceKey: opt_data.spaceKey}, output);
  output.append('<fieldset><div class="field-group"><label for="kb-space-desc">', soy.$$escapeHtml("Description"), '</label><textarea id="kb-space-desc" class="textarea long-field" rows="3" type="text" name="description" placeholder="', soy.$$escapeHtml("What is this knowledge base for?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.SpaceBlueprints.KnowledgeBase.livesearchMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="livesearch"><ac:parameter ac:name="additional">page excerpt</ac:parameter><ac:parameter ac:name="placeholder">', soy.$$escapeHtml("Search for a solution"), '</ac:parameter>', (opt_data.spaceKey) ? '<ac:parameter ac:name="spaceKey"><ri:space ri:space-key="' + soy.$$escapeHtml(opt_data.spaceKey) + '"/></ac:parameter>' : '', '<ac:parameter ac:name="type">page</ac:parameter><ac:parameter ac:name="size">large</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/js/label-picker.js' */
(function(c,a){var e=/[:;,\.\?&\[\(\)#\^\*@!<>\]]/g;var b=function(h){var i=_.uniq(h.match(e));return i.join(" ")};var g=function(h){var i=_.map(h.contentNameMatches[0],function(j){return{id:j.name,text:j.name}});return _.sortBy(i,function(j){return j.text.toLowerCase()})};var d=function(h){return function(i){return c.extend({query:i},h)}};var f={placeholder:"Add labels",multiple:true,minimumInputLength:1,maximumSelectionSize:20,tokenSeparators:[" ",","],formatInputTooShort:function(i,h){return "Start typing to search for a label"},formatSelectionTooBig:function(h){return AJS.format("You can only input {0} labels",h)},formatResult:function(h){return Confluence.UI.Components.LabelPicker.templates.labelResult({label:{labelName:h.text,isNew:h.isNew}})},formatNoMatches:function(i){var h=b(i);if(h){return Confluence.UI.Components.LabelPicker.templates.labelInvalid({inputValue:i,invalidCharacters:h})}else{return "Add labels"}},createSearchChoice:function(i){if(!i){return null}var h=b(i);if(h){return null}return{id:i,text:i,isNew:true}},ajax:{data:d(),dataType:"json",url:Confluence.getContextPath()+"/labels/autocompletelabel.action",results:function(h){return{results:g(h)}},quietMillis:300},dropdownCssClass:"labels-dropdown",containerCssClass:"labels-autocomplete"};a.build=function(i){var h=c.extend({},f,i);if(i&&i.queryOpts){h.ajax.data=d(i.queryOpts);delete h.queryOpts}return h}}(AJS.$,window.Confluence.UI.Components.LabelPicker));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:label-picker', location = '/soy/label-picker.soy' */
// This file was automatically generated from label-picker.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.LabelPicker == 'undefined') { Confluence.UI.Components.LabelPicker = {}; }
if (typeof Confluence.UI.Components.LabelPicker.templates == 'undefined') { Confluence.UI.Components.LabelPicker.templates = {}; }


Confluence.UI.Components.LabelPicker.templates.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new label",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};


Confluence.UI.Components.LabelPicker.templates.labelInvalid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var inputValueHtml__soy9 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.inputValue), '</b>');
  inputValueHtml__soy9 = inputValueHtml__soy9.toString();
  var invalidCharactersHtml__soy13 = new soy.StringBuilder('<b>', soy.$$escapeHtml(opt_data.invalidCharacters), '</b>');
  invalidCharactersHtml__soy13 = invalidCharactersHtml__soy13.toString();
  output.append(AJS.format("{0} contains invalid characters {1}",inputValueHtml__soy9,invalidCharactersHtml__soy13));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'soy/kb-articles.soy' */
// This file was automatically generated from kb-articles.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Plugin == 'undefined') { Confluence.Blueprints.Plugin = {}; }
if (typeof Confluence.Blueprints.Plugin.KnowledgeBaseArticle == 'undefined') { Confluence.Blueprints.Plugin.KnowledgeBaseArticle = {}; }


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.wizardPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="kb-article-wizard-page-form" class="aui"><fieldset><div class="field-group"><label for="kb-article-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required">', soy.$$escapeHtml("$WIZARD_FORM_FIELD_REQUIRED_I18N"), '</span></label><input id="kb-article-title" class="text  long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of your article."), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label>', soy.$$escapeHtml("Labels"), '</label><input id="kb-article-labels" class="text select2-input long-field" type="text" name="labelsString" title="labelsString" placeholder="', soy.$$escapeHtml("Topics this article covers (e.g. \x22printer\x22)."), '"><div class="error"></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.contentbylabelMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="contentbylabel"><ac:parameter ac:name="showLabels">false</ac:parameter><ac:parameter ac:name="max">5</ac:parameter><ac:parameter ac:name="sort">modified</ac:parameter><ac:parameter ac:name="reverse">true</ac:parameter><ac:parameter ac:name="labels">', soy.$$escapeHtml(opt_data.labels), '</ac:parameter><ac:parameter ac:name="showSpace">false</ac:parameter><ac:parameter ac:name="spaces"><ri:space ri:space-key="', soy.$$escapeHtml(opt_data.spaceKey), '" /></ac:parameter><ac:parameter ac:name="type">page</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Plugin.KnowledgeBaseArticle.jiraIssuesMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:structured-macro ac:name="jira"><ac:parameter ac:name="key">', soy.$$escapeHtml(opt_data.jiraIssueKey), '</ac:parameter><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.jiraServerId), '</ac:parameter></ac:structured-macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-knowledge-base:kb-article-resources', location = 'js/kb-articles-dialog-wizard.js' */
AJS.toInit(function(c){function a(i,g){var h=g.$container;var f=c("#kb-article-labels",h);f.auiSelect2(Confluence.UI.Components.LabelPicker.build({separator:" ",queryOpts:{spaceKey:g.wizardData.spaceKey}}))}function d(j,h){var i=j,e=i.find("#kb-article-title"),g=c.trim(e.val()),f;i.find(".error").html("");if(!g){f="Title is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function b(g,f){return d(f.$container,f.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-how-to-item",function(e){e.on("post-render.kb-how-to-wizard",a);e.on("submit.kb-how-to-wizard",b)});Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-knowledge-base:kb-troubleshooting-item",function(e){e.on("post-render.kb-troubleshooting-wizard",a);e.on("submit.kb-troubleshooting-wizard",b)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">', soy.$$escapeHtml(opt_data.label), '</ac:parameter><ac:parameter ac:name="spaces">', soy.$$escapeHtml(opt_data.spaces), '</ac:parameter><ac:parameter ac:name="firstcolumn">', soy.$$escapeHtml(opt_data.firstcolumn), '</ac:parameter><ac:parameter ac:name="headings">', soy.$$escapeHtml(opt_data.headings), '</ac:parameter><ac:parameter ac:name="blankTitle">', soy.$$escapeHtml(opt_data.blankTitle), '</ac:parameter><ac:parameter ac:name="blankDescription">', soy.$$escapeHtml(opt_data.blankDescription), '</ac:parameter><ac:parameter ac:name="contentBlueprintId">', soy.$$escapeHtml(opt_data.contentBlueprintId), '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey), '</ac:parameter><ac:parameter ac:name="createButtonLabel">', soy.$$escapeHtml(opt_data.createButtonLabel), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.moduleKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.templateName), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.FileList == 'undefined') { Confluence.Templates.FileList = {}; }


Confluence.Templates.FileList.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="file-list-form" class="aui"><fieldset><div class="field-group"><label for="file-list-page-title">', soy.$$escapeHtml("Name"), '<span class="aui-icon icon-required"> required</span></label><input id="file-list-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("Title of your file list"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="file-list-page-description">', soy.$$escapeHtml("Description"), '</label><textarea id="file-list-page-description" class="textarea long-field" name="description" rows="6" placeholder="', soy.$$escapeHtml("Description which will appear at the top of file list"), '"></textarea></div><div class="field-group"><label for="file-list-restrictions">', soy.$$escapeHtml("Restrictions"), '</label><input id="file-list-restrictions" class="text long-field autocomplete-multiuser" type="text" name="viewPermissionsUsers" placeholder="', soy.$$escapeHtml("Restrict to users"), '"></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-resources', location = 'com/atlassian/confluence/plugins/filelist/js/create-file-list-listener.js' */
(function(b){function c(h,g){var d=h.find("#file-list-page-title"),f=b.trim(d.val()),e;if(!f){e="Name is required."}else{if(!Confluence.Blueprint.canCreatePage(g,f)){e="A page with this name already exists."}}if(e){d.focus().siblings(".error").html(e);return false}return true}function a(d,e){return c(e.$container,e.wizardData.spaceKey)}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:file-list-item",function(d){d.on("submit.file-list-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("With meeting notes you can..."), '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Crowd-source your agenda"), '</h3><p>', soy.$$escapeHtml("Distribute an agenda and keep meetings focused."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Capture meeting minutes"), '</h3><p>', soy.$$escapeHtml("Take notes and make them available to everyone."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create and assign tasks"), '</h3><p>', soy.$$escapeHtml("Assign action items for attendees to work on afterward."), '</p></div></li></ol>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/soy/decisions-templates.soy' */
// This file was automatically generated from decisions-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Decisions == 'undefined') { Confluence.Blueprints.Decisions = {}; }


Confluence.Blueprints.Decisions.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="decisions-form" class="aui"><fieldset><div class="field-group"><label for="decisions-status">', soy.$$escapeHtml("Status"), '</label><select class="select long-field" id="decisions-status" name="status"><option value="GREY">', soy.$$escapeHtml("Not started"), '</option><option value="YELLOW">', soy.$$escapeHtml("In progress"), '</option><option value="GREEN">', soy.$$escapeHtml("Decided"), '</option></select></div><div class="field-group"><label for="decisions-page-title">', soy.$$escapeHtml("Decision"), '<span class="aui-icon icon-required"> required</span></label><input id="decisions-page-title" class="text long-field" type="text" name="title" placeholder="', soy.$$escapeHtml("What are you deciding?"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="decisions-owner">', soy.$$escapeHtml("Owner"), '</label><input id="decisions-owner" type="text" class="text long-field autocomplete-multiuser" name="owner" placeholder="', soy.$$escapeHtml("Who should make the final decision?"), '" data-autofill-user="true"></div><div class="field-group"><label for="decisions-stakeholders">', soy.$$escapeHtml("Stakeholders"), '</label><input id="decisions-stakeholders" class="text long-field autocomplete-multiuser" type="text" name="stakeholders" placeholder="', soy.$$escapeHtml("Who needs to help make this decision?"), '"></div><div class="field-group"><label for="decisions-due-date">', soy.$$escapeHtml("Due date"), '</label><input id="decisions-due-date" class="datepicker-field date-field text" type="text" name="due-date" size="10" autocomplete="off"></div><div class="field-group"><label for="decisions-background">', soy.$$escapeHtml("Background"), '</label><textarea id="decisions-background" class="textarea long-field" rows="3" name="background" placeholder="', soy.$$escapeHtml("What details are important in making this decision?"), '"></textarea></div><div class="field-group"><label for="decisions-final-decision">', soy.$$escapeHtml("Outcome"), '</label><textarea id="decisions-final-decision" class="textarea long-field" rows="3" name="final-decision" placeholder="', soy.$$escapeHtml("What did you decide?"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionXml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList35 = opt_data.names;
  var nameListLen35 = nameList35.length;
  for (var nameIndex35 = 0; nameIndex35 < nameListLen35; nameIndex35++) {
    var nameData35 = nameList35[nameIndex35];
    output.append('<ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData35), '" /></ac:link>&nbsp;');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.mentionsPlaceholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder ac:type="mention">', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.placeholder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder>', soy.$$escapeHtml(opt_data.placeholderText), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Decisions.statusTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="status"><ac:parameter ac:name="title">', soy.$$escapeHtml(opt_data.status), '</ac:parameter><ac:parameter ac:name="colour">', soy.$$escapeHtml(opt_data.statusColour), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-resources', location = 'com/atlassian/confluence/plugins/decisions/js/create-decisions-listener.js' */
(function(c){function d(i,h){var e=i.find("#decisions-page-title"),g=c.trim(e.val()),f;if(!g){f="Decision is required."}else{if(!Confluence.Blueprint.canCreatePage(h,g)){f="A page with this name already exists."}}if(f){e.focus().siblings(".error").html(f);return false}return true}function a(e,f){return d(f.$container,f.wizardData.spaceKey)}function b(e,f){c("#decisions-due-date").datepicker({dateFormat:"yy-mm-dd"});c("#decisions-status").on("change",function(){var h=c("#decisions-final-decision");var g=c("label[for=decisions-final-decision]");if(c(this).find(":selected").val()=="GREEN"){h.css({display:"inline"});g.css({display:"inline"})}else{h.css({display:"none"});g.css({display:"none"})}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:decisions-blueprint-item",function(e){e.on("post-render.decisions-page1",b);e.on("submit.decisions-page1",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-templates.soy' */
// This file was automatically generated from sharelinks-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.dialogForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form action="#" method="post" id="sharelinks-form" class="aui"><fieldset><div class="field-group"><label for="sharelinks-url">', soy.$$escapeHtml("Link"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-url" class="text long-field" type="text" name="url" placeholder="', soy.$$escapeHtml("Paste a link to any website"), '"/><div class="error"></div></div><div class="field-group"><label for="sharelinks-title">', soy.$$escapeHtml("Title"), '<span class="aui-icon icon-required"> required</span></label><input id="sharelinks-title" class="text long-field" type="text" name="title" title="title" placeholder="', soy.$$escapeHtml("Title of the page"), '" maxlength="255"><div class="error"></div></div><div class="field-group"><label for="sharelinks-label">', soy.$$escapeHtml("Labels"), '</label><input id="sharelinks-label" class="text select2-input long-field" type="text" name="label" placeholder="', soy.$$escapeHtml("Suggest a topic"), '" /></div><div class="field-group"><label for="sharelinks-sharewith">', soy.$$escapeHtml("Share with"), '</label><input id="sharelinks-sharewith" class="text long-field autocomplete-multiuser" type="text" name="sharewith" placeholder="', soy.$$escapeHtml("Share this page with users"), '"/></div><div class="field-group"><label for="sharelinks-comment">', soy.$$escapeHtml("Comment"), '</label><textarea id="sharelinks-comment" class="textarea long-field" rows="4" type="text" name="comment" placeholder="', soy.$$escapeHtml("Share your thoughts about this link"), '"></textarea></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  if (opt_data.linkMetaData.title) {
    output.append('<h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3>');
    if (opt_data.linkMetaData.imageURL) {
      output.append('<div class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/></div>');
    } else {
      var noImagePreviewContent__soy37 = new soy.StringBuilder();
      Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy37);
      noImagePreviewContent__soy37 = noImagePreviewContent__soy37.toString();
      output.append(noImagePreviewContent__soy37);
    }
    output.append((opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '');
  } else {
    var previewUnavailableContent__soy47 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy47);
    previewUnavailableContent__soy47 = previewUnavailableContent__soy47.toString();
    output.append(previewUnavailableContent__soy47);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewVideoLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview"><h3 class="sharelinks-preview-title">', soy.$$escapeHtml(opt_data.linkMetaData.title), '</h3><div class="sharelinks-preview-video">');
  if (opt_data.linkMetaData.imageURL) {
    output.append('<span class="sharelinks-preview-image"><img src="', soy.$$escapeHtml(opt_data.linkMetaData.imageURL), '"/><span class="sharelinks-preview-camera-icon sharelinks-camera-with-image"></span></span>');
  } else {
    output.append('<div>');
    var noImagePreviewContent__soy63 = new soy.StringBuilder();
    Confluence.Blueprints.Sharelinks.noImagePreview(null, noImagePreviewContent__soy63);
    noImagePreviewContent__soy63 = noImagePreviewContent__soy63.toString();
    output.append(noImagePreviewContent__soy63, '<span class="sharelinks-preview-camera-icon sharelinks-camera-with-no-image"></span></div>');
  }
  output.append('</div>', (opt_data.linkMetaData.description) ? '<p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview-loading"><span class="aui-icon aui-icon-wait"></span>&nbsp;', soy.$$escapeHtml("Loading preview\u2026"), '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.metaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-link-meta-data"><ac:macro ac:name="panel"><ac:rich-text-body>', (opt_data.linkMetaData.imageURL) ? '<h3><ac:image ac:align="right"><ri:url ri:value=\'' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '\' /></ac:image></h3>' : '', '<p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</p></blockquote>' : '<p style="text-align: left;"><span style="color: rgb(128,128,128);"><em>' + soy.$$escapeHtml(opt_data.descriptionMessage) + '</em></span></p>', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sharelinks-preview">');
  var previewUnavailableContent__soy109 = new soy.StringBuilder();
  Confluence.Blueprints.Sharelinks.previewUnavailable(null, previewUnavailableContent__soy109);
  previewUnavailableContent__soy109 = previewUnavailableContent__soy109.toString();
  output.append(previewUnavailableContent__soy109, '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.videoMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="panel"><ac:rich-text-body><ac:macro ac:name="section"><ac:rich-text-body><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p>', (opt_data.linkMetaData.description) ? '<blockquote><p>' + soy.$$escapeHtml(opt_data.linkMetaData.description) + '</p></blockquote>' : '', '<p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></ac:rich-text-body></ac:macro><ac:macro ac:name="column"><ac:parameter ac:name="width">50%</ac:parameter><ac:rich-text-body><p>', (opt_data.isSupportedMediaDomain) ? '<ac:macro ac:name="widget"><ac:parameter ac:name="url">' + soy.$$escapeHtml(opt_data.linkMetaData.sourceURL) + '</ac:parameter><ac:parameter ac:name="width">350</ac:parameter><ac:parameter ac:name="height">240</ac:parameter></ac:macro>' : '<ac:image ac:width="300"><ri:url ri:value="' + soy.$$escapeHtml(opt_data.linkMetaData.imageURL) + '" /></ac:image>', '</p></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.twitterMetaDataHtml = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.linkMetaData.description) {
    output.append('<div class="sharelinks-twitter-content"><p><ac:image ac:width=\'16\'><ri:url ri:value="', soy.$$escapeHtml(opt_data.faviconURL), '" /></ac:image>&nbsp;<a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml(opt_data.linkMetaData.excerptedURL), '</a></p><p><ac:macro ac:name="widget"><ac:parameter ac:name="url">', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '</ac:parameter></ac:macro></p><p><strong><a href="', soy.$$escapeHtml(opt_data.linkMetaData.sourceURL), '">', soy.$$escapeHtml("Open link"), '</a></strong></p></div>');
  } else {
    Confluence.Blueprints.Sharelinks.metaDataHtml(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletLinkParam__soy163 = new soy.StringBuilder();
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink(opt_data, bookmarkletLinkParam__soy163);
  bookmarkletLinkParam__soy163 = bookmarkletLinkParam__soy163.toString();
  output.append('<p>', bookmarkletLinkParam__soy163, '</p><p>', soy.$$escapeHtml("It will appear like this in your browser."), '</p><div class="bookmarklet-guide-picture"></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.bookmarkletGuide = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var bookmarkletMacroParam__soy173 = new soy.StringBuilder('<ac:macro ac:name="sharelinks-urlmacro"/>');
  bookmarkletMacroParam__soy173 = bookmarkletMacroParam__soy173.toString();
  output.append('<ac:macro ac:name="info"><ac:parameter ac:name="icon">false</ac:parameter><ac:rich-text-body><p><ac:emoticon ac:name="information" />&nbsp;', AJS.format("Tip: share a link from anywhere by dragging this button \u2192 {0} to your browser bookmarks toolbar. Once added to your toolbar, click it to share links with your team.",bookmarkletMacroParam__soy173), '</p></ac:rich-text-body></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.noImagePreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="image-unavailable"><span class="no-image-picture"></span>', soy.$$escapeHtml("No image available"), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Sharelinks.previewUnavailable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="link-unavailable"><span class="preview-unavailable-picture"></span>', soy.$$escapeHtml("Link preview unavailable"), '</p>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-creation-wizard.js' */
(function(i){var d=false;function g(s,r){var q=false;if(k(s,!q)){q=true}if(f(s,r,!q)){q=true}return !q}function k(u,q){var t=u.find("#sharelinks-url");var s=i.trim(t.val());var r="";if(!s){r="URL is required"}else{if(d){r="URL syntax is invalid"}}return j(t,r,q)}function f(w,u,s){var r=w.find("#sharelinks-title");var v=i.trim(r.val());var t="";if(!v){t="Title is required"}else{if(!Confluence.Blueprint.canCreatePage(u,v)){t="A page with this name already exists";var q=Confluence.Blueprints.Sharelinks.Analytics.errorTypes.value.duplicatedPage;Confluence.Blueprints.Sharelinks.Analytics.triggerErrorTypes(q)}}return j(r,t,s)}function j(s,r,q){s.siblings(".error").html(r);if(r&&q){s.focus()}return r}var p;function a(u,v){var s=g(v.$container,v.wizardData.spaceKey);if(s){var r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noComment;var x=i("#sharelinks-comment").val();x=i.trim(x);if(x){r=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.comment}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(r);var q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noEditTitle;if(p!==i("#sharelinks-title").val()){q=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.editTitle}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(q);var w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.noShare;var t=i("#sharelinks-sharewith").val();t=i.trim(t);if(t){w=Confluence.Blueprints.Sharelinks.Analytics.submitData.value.share}Confluence.Blueprints.Sharelinks.Analytics.triggerSubmitData(w)}v.wizardData.parentPageId=-1;return s}var e;function h(s,t){e="";i("#sharelinks-url").bind("paste",function(){setTimeout(function(){l(t.$container,t.wizardData.spaceKey,true)},0)});i("#sharelinks-url").change(function(){l(t.$container,t.wizardData.spaceKey,false)});i("#sharelinks-title").change(function(){if(i("#sharelinks-title").siblings(".error").html!=""){f(t.$container,t.wizardData.spaceKey,false)}});var u=i(".dialog-wizard-page-description,.create-dialog-page-description");var q=AJS.Meta.get("base-url")+"/plugins/sharelinksbookmarklet/bookmarklet.action";var r=Confluence.Blueprints.Sharelinks.bookmarkletGuideOnWizard({bookmarkletActionURL:q});i(r).appendTo(u);Confluence.Blueprints.Sharelinks.autocompleteMultiLabel.build(i("#sharelinks-label"));i(".create-dialog-sharelinks-page1 .sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})}function c(q,r){i.ajax({type:"get",dataType:"json",url:Confluence.getContextPath()+"/rest/sharelinks/1.0/can-create-comment",data:{spaceKey:r.wizardData.spaceKey},success:function(t){if(!t){var s=i("#sharelinks-comment");s.attr("disabled","disabled");s.attr("placeholder","Sorry, you don\'t have permission to add comments in this space")}}})}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-blueprint-item",function(q){q.on("post-render.sharelinks-page1",h);q.on("post-render.sharelinks-page1",c);q.on("submit.sharelinks-page1",a)});function b(u){var y=255;var q=180;var t=o(u.title,y);var s=i("#sharelinks-title");s.val(t);s.removeClass("placeholded");var x=i.extend({},u);x.title=o(x.title,q);var w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noContent;var r;if(u.videoURL){r=Confluence.Blueprints.Sharelinks.previewVideoLink({linkMetaData:x});w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.video}else{r=Confluence.Blueprints.Sharelinks.previewLink({linkMetaData:x});if(u.imageURL){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.image}else{if(u.title){w=Confluence.Blueprints.Sharelinks.Analytics.linkTypes.value.noVideoImage}}}var v=i(".create-dialog-page-description,.dialog-wizard-page-description");v.empty();i(r).appendTo(v);Confluence.Blueprints.Sharelinks.Analytics.triggerLinkTypes(w)}function o(r,q){if(null!=r&&q<r.length){r=r.substring(0,q-1)+"\u2026"}return r}function m(r,q){r.attr("disabled","disabled");q.attr("disabled","disabled")}function n(r,q){r.removeAttr("disabled");q.removeAttr("disabled")}function l(z,w,s){var r=i("#sharelinks-url"),v=r.val(),q=i("#sharelinks-title");v=i.trim(v);if(v){var x=Confluence.getContextPath()+"/rest/sharelinks/1.0/link";if(v!==e){e=v;var t=i(".create-dialog-page-description,.dialog-wizard-page-description").empty();var y=Confluence.Blueprints.Sharelinks.previewLoading();var A=i(y).appendTo(t);m(r,q);i.ajax({type:"get",url:x,data:{url:v},success:function(B,C){A.remove();b(B);d=false;g(z,w);n(r,q)},error:function(E,B,D){n(r,q);if(400==E.status){A.remove();d=true;k(z,false)}else{A.remove();var C=Confluence.Blueprints.Sharelinks.previewError();i(C).appendTo(t);d=false;g(z,w)}}});var u;if(s){u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.pasteUrl}else{u=Confluence.Blueprints.Sharelinks.Analytics.inputTypes.value.typeUrl}Confluence.Blueprints.Sharelinks.Analytics.triggerInputTypes(u)}}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-analytics.js' */
Confluence.Blueprints.Sharelinks.Analytics={inputTypes:{name:"blueprints.sharelinks.input",value:{pasteUrl:{type:"paste-url"},typeUrl:{type:"type-url"}}},linkTypes:{name:"blueprints.sharelinks.link",value:{video:{link:"video"},image:{link:"image"},noVideoImage:{link:"no-video-image"},noContent:{link:"no-content"}}},errorTypes:{name:"blueprints.sharelinks.error",value:{duplicatedPage:{error:"page-duplicated"}}},submitData:{name:"blueprints.sharelinks.submit",value:{editTitle:{submit:"edit-title"},noEditTitle:{submit:"no-edit-title"},comment:{submit:"comment"},noComment:{submit:"no-comment"},share:{submit:"share"},noShare:{submit:"no-share"}}},triggerInputTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.inputTypes.name,properties:a})},triggerLinkTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.linkTypes.name,properties:a})},triggerErrorTypes:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.errorTypes.name,properties:a})},triggerSubmitData:function(a){AJS.EventQueue=AJS.EventQueue||[];AJS.EventQueue.push({name:Confluence.Blueprints.Sharelinks.Analytics.submitData.name,properties:a})}};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/soy/sharelinks-label.soy' */
// This file was automatically generated from sharelinks-label.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Sharelinks == 'undefined') { Confluence.Blueprints.Sharelinks = {}; }


Confluence.Blueprints.Sharelinks.labelResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format("\x22{0}\x22 - add a new topic",opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-resources', location = 'com/atlassian/confluence/plugins/sharelinks/js/sharelinks-label.js' */
Confluence.Blueprints.Sharelinks.autocompleteMultiLabel=(function(a){function b(c){c.auiSelect2(Confluence.UI.Components.LabelPicker.build({formatInputTooShort:function(){return "Start typing to search for a topic"},formatResult:function(d){return Confluence.Blueprints.Sharelinks.labelResult({label:{labelName:d.text,isNew:d.isNew}})}}))}return{build:b}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.localShortcuts && opt_data.localShortcuts.length > 0) {
    navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}, output);
  }
  if (opt_data.remoteShortcuts != null) {
    if (opt_data.remoteShortcuts.length > 0) {
      output.append('<h2 class="projectshortcuts-heading">Related Links</h2>');
      navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentData(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'}), output);
    }
  } else {
    navlinks.templates.projectshortcuts.dialogLoading(null, output);
  }
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="', soy.$$escapeHtml(opt_data.logoUrl), '"><h2 class="dialog-title">', soy.$$escapeHtml(opt_data.title), '</h2></div><div class="project-content-wrapper">', opt_data.contentHtml, '</div></div>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul', (opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '', '>');
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output.append('<li', (shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '', '>');
    navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(opt_data.link), '"', (opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>', soy.$$escapeHtml(opt_data.label), '</a>');
  return opt_sb ? '' : output.toString();
};


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="projectshortcuts-loading">', (opt_data != null && opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,h){var j,l={},o="key",b="name",k="entity-type";function n(r,p,q){try{h.trackEvent("projectshortcuts",r,p,q)}catch(s){AJS.log("failed to track analytics event, category: projectshortcuts, action: "+r+", label: "+p+", value: "+q)}}function f(u){var p=e(this),q=p.data(o),s=p.data(b),r=p.data(k);if(typeof q==="undefined"){return}u.preventDefault();j=new AJS.Dialog({width:600,keypressListener:function(w){if(w.which==jQuery.ui.keyCode.ESCAPE){j.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){j.remove();n("hide",h.getCurrentApplication())}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:s,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(j);if(!l[q]){l[q]={entity:{title:s},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+q,{entityType:r}).done(v);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+q,{entityType:r}).done(t).fail(function(){var w=j.getCurrentPanel().body.find(".project-content-wrapper");w.find(".projectshortcuts-loading").remove();AJS.messages.error(w,{body:"Could not retrieve remote project shortcuts",closeable:false});c(j)})}else{m(l[q])}function v(w){l[q].localShortcuts=w.shortcuts;m(l[q])}function t(w){l[q].remoteShortcuts=w.shortcuts;m(l[q])}n("show",h.getCurrentApplication())}function i(){return e(".project-shortcut-dialog-trigger img").attr("src")}function g(p){p.getCurrentPanel().body.find("a").unbind(".analytics").bind("click.analytics",function(){var q=this.attributes.href;n("navLinkFollowed",typeof q==="object"?q.value:q)})}function m(p){if(p.localShortcuts){j.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:p.entity.title,logoUrl:i(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(p)}));g(j);c(j)}}function a(r){var q=210;if(!r||r.length<=q){return r}var p=q;while(p>0&&r.charAt(p)!=" "){p--}if(p==0){p=q}r=r.substring(0,p);if(r.length>=p){r=r+"..."}return r}function c(p){var s=p.popup.element,r=s.find(".dialog-panel-body"),q=s.find(".dialog-components");r.height("auto");s.height(q.outerHeight()-1);e(".aui-shadow").remove()}function d(p,q){return e.ajax({url:p,cache:false,data:q,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var d=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(d));var b=a("#space-menu-link"),c=function(e){a("#space-menu-link-content").html(e.template);AJS.trigger("spacemenu-loaded");a("#create-space-header").click(function(){AJS.trigger("analyticsEvent",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};b.click(function(){if(!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:c})}return false})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a id="space-menu-link" class="aui-nav-link aui-dropdown2-trigger" href="#" aria-haspopup="true" aria-owns="space-menu-link-content" title="', soy.$$escapeHtml("Spaces"), '"><span class="browse">', soy.$$escapeHtml("Spaces"), '</span><span class="aui-icon-dropdown"></span></a><div id="space-menu-link-content" class="aui-dropdown2 aui-style-default aui-dropdown2-in-header" aria-hidden="false"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(d){var c=RegExp("(.+[?&])src=.+?(&.+|$)");var e;if(AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){e=AJS.Confluence.Analytics.setAnalyticsSource}else{e=function(h,i){if(b()){_.each(h,function(j){d(j).attr("href",g(d(j).attr("href"),i))})}}}function g(h,j){if(h&&(h.charAt(0)!="#")){var i=c.exec(h);if(!i){if(h.indexOf("?")>-1){h=h+"&src="+j}else{h=h+"?src="+j}}else{h=i[1]+"src="+j+i[2]}}return h}function b(){var h=d(document.getElementsByTagName("script"));var i=false;h.each(function(k,j){if(d(j).attr("src")&&d(j).attr("src").indexOf("google-analytics.com/ga.js")!=-1){i=true;return false}});return i}function f(){var i=d(".acs-side-bar a:not(.external_link a, #acs-configure-link)");e(i,"sidebar");var h=d(".quick-links-section li:not(.external_link) a");e(h,"spaceshortcut");var j=d(".ia-secondary-container a:not(.more-children-link)");if(d(".ia-secondary-container").data("tree-type")=="pages"){e(j,"contextnavchildmode")}else{if(d(".ia-secondary-container").data("tree-type")=="page-tree"){e(j,"contextnavpagetreemode")}else{e(j,"contextnav")}}}function a(h){return function(){AJS.trigger("analyticsEvent",{name:"space-ia-nav",data:{linkType:h}})}}AJS.bind("sidebar.exit-configure-mode",f);AJS.bind("sidebar.flyout-triggered",function(i,h){a("flyout-triggered."+h.flyout)()});AJS.bind("spacemenu-loaded",function(){e(d("#space-menu-link-content a"),"spacemenu")});AJS.bind("sidebar.spacetools-loaded",function(){e(d("#inline-dialog-space-tools a:not(.configure-sidebar)"),"spacetools")});AJS.bind("pagetree-children-loaded",f);AJS.toInit(function(h){h(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));f()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=c("username"),e=c("userFullName");var g=d("#system-content-items");var j=d("#content-metadata-page-restrictions").is(":visible");if(!g.length||!j||!c("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(l,k,m){l.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));l.on("click",".aui-button.grant-access",function(p){p.stopPropagation();var o=l.find(".actions-result");o.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var n="",q=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(s,t,r){if(r.status==202){n="Access was already granted to the user."}else{n="Access was granted, a notification to the user will be sent."}},error:function(r){q=false;if(r.status==412){n="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(r.status==502){n="Access was granted, but an unexpected error happened while sending the notification."}else{n="Sorry, there was an unexpected error while granting access."}}},complete:function(r){b.replaceWith(d(Confluence.Grant.Access.result({success:q,message:n})));setTimeout(function(){i.hide()},4000)}})});l.on("click",".aui-button.deny-access",function(n){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});m();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function c(m){var k=window.location.search.substring(1),l,o,n=k.split("&");for(l=0;l<n.length;l++){o=n[l].split("=");if(o[0]==m){return unescape(o[1])}}return null}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="request-access">');
  if (opt_data.success) {
    var usernameLink__soy6 = new soy.StringBuilder();
    Confluence.Request.Access.usernameLink({user: opt_data.recipient}, usernameLink__soy6);
    usernameLink__soy6 = usernameLink__soy6.toString();
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">', AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6), '</p>');
  } else {
    output.append('<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin."), '</p>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeUri(opt_data.user.name), '" class="url fn confluence-userlink" title data-username="', soy.$$escapeHtml(opt_data.user.name), '">', soy.$$escapeHtml(opt_data.user.fullName), '</a>');
  return opt_sb ? '' : output.toString();
};


Confluence.Request.Access.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class=\'aui-icon aui-icon-wait\'>', soy.$$escapeHtml("Loading, please wait"), '</span>"');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="grant-access-dialog">');
  var usernameLink__soy4 = new soy.StringBuilder();
  Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName}, usernameLink__soy4);
  usernameLink__soy4 = usernameLink__soy4.toString();
  output.append('<h2 class="grant-access-title">', AJS.format("{0} requested access to view the page",usernameLink__soy4), '</h2><p class="grant-access-message">', soy.$$escapeHtml("Grant access to the page, or deny it explicitly."), '</p><div class="actions-result"><button class="aui-button grant-access">', soy.$$escapeHtml("Grant access"), '</button><button class="aui-button aui-button-link deny-access">', soy.$$escapeHtml("Deny"), '</button><div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="aui-icon aui-icon-small aui-iconfont-', (opt_data.success) ? 'approve' : 'error', '" data-unicode="UTF+E011" original-title=""></span><p class="title">', soy.$$escapeHtml(opt_data.message), '</p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Grant.Access.usernameLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(""), '/display/~', soy.$$escapeHtml(opt_data.username), '" class="url fn" title data-username="', soy.$$escapeHtml(opt_data.username), '">', soy.$$escapeHtml(opt_data.userFullName), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:requirements-resources', location = 'com/atlassian/confluence/plugins/requirements/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Requirements == 'undefined') { Confluence.Blueprints.Requirements = {}; }


Confluence.Blueprints.Requirements.howTo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="howto-content-wrapper"><h2>', soy.$$escapeHtml("With product requirements you can\u2026"), '</h2><ol class="howto-steps horizontal"><li class="howto-step"><div><h3>', soy.$$escapeHtml("Define document properties"), '</h3><p class="howto-description">', soy.$$escapeHtml("Add properties like status and owner to your document to make it easy to organise and sort your product requirements."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Create requirements"), '</h3><p class="howto-description">', soy.$$escapeHtml("The customisable template brings structure and consistency to your product requirements. If you use JIRA you can create stories right from the requirements page."), '</p></div></li><li class="howto-step"><div><h3>', soy.$$escapeHtml("Track progress"), '</h3><p class="howto-description">', soy.$$escapeHtml("See the status of all your requirements at a glance. Sort by properties like status and release, or access linked JIRA issues from your requirements pages."), '</p></div></li></ol></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:requirements-resources', location = 'com/atlassian/confluence/plugins/requirements/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Requirements == 'undefined') { Confluence.Templates.Requirements = {}; }


Confluence.Templates.Requirements.userMention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.username) ? '<p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p>' : '<p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("Person responsible") + '</ac:placeholder></p>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:jqlHelper', location = '/jira/jqlhelper.js' */
AJS.JQLHelper=(function(){var a=/^\s*((key|issuekey)\s*=\s*)?([A-Z]+)([0-9]+)?([A-Z]+)?-([0-9]+)\s*$/i;var e=/\s*([A-Z][A-Z]+)-[0-9]+\s*/;var j=/(issue|searchrequest)-xml/i;var g=/\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+$)/i;var i=/\/jira\.issueviews:issue-xml\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)\//;var c=/(jqlQuery|jql)\s*\=([^&]+)/i;var h=/(\?|&)(requestId|filter)\=([^&]+)/i;var b=/(searchrequest-xml\/)([0-9]+)\/SearchRequest/i;var k=/(requestId|filter)\=([^&]+)/i;var d=/=|!=|~|>|<|!~| is | in | was | changed /i;var f=function(p){var m="";var q=g.exec(p);if(q){m="key="+q[2]}else{var n=c.exec(p);if(n){m=n[2]}else{var o=e.exec(p);if(o){m="key="+o[0]}}}m=m.replace(/\+/g," ");return m};var l=function(n,p){var m;var o=decodeURIComponent(n);var q=function(r){if(r.jql){m=r.jql}};AJS.JQLHelper.getJqlQueryFromJiraFilter(o,p,q);return m};return{isSingleKeyJQLExp:function(m){return a.exec(m)},isMultipleSingleKeyJQLExp:function(p){var o=p.split(",");for(var n in o){var m=AJS.$.trim(o[n]);if(!AJS.JQLHelper.isSingleKeyJQLExp(m)){return false}}return true},isIssueUrlOrXmlUrl:function(m){if(g.test(m)||j.test(m)||c.test(m)||i.test(m)){return true}return false},isFilterUrl:function(m){return h.test(m)||b.test(m)},getFilterFromFilterUrl:function(m){if(h.test(m)){var n=h.exec(m);return n[2]+"="+n[3]}else{if(b.test(m)){return"filter="+b.exec(m)[2]}}},getJqlQueryFromJiraFilter:function(p,q,r,o){var m=(h.exec(p)||b.exec(p))[2];var n="/rest/jiraanywhere/1.0/jira/appLink/"+q+"/filter/"+m;AJS.$.ajax({async:false,dataType:"json",url:Confluence.getContextPath()+n,success:r,error:o})},findServerIndexFromUrl:function(m,p){if(typeof(p)!=="undefined"||p.length>0){var o=m.toLowerCase();for(var n=0;n<p.length;n++){if(o.indexOf(p[n].url.toLowerCase())==0){if(m.charAt(p[n].url.length)=="/"){return n}}}}return -1},getJqlQueryFromUrl:f,getJqlAndServerIndexFromUrl:function(n,o){var m={};m.serverIndex=this.findServerIndexFromUrl(n,o);m.jqlQuery=f(n);return m},checkQueryType:function(m){if(!AJS.Editor.JiraAnalytics){return undefined}if(!m||AJS.$.trim(m).length==0){return}if(m.indexOf("http")!=0){return AJS.Editor.JiraAnalytics.linkTypes.jqlDirect}else{if(m.indexOf("jira.issueviews:searchrequest-xml")!=-1||m.indexOf("jira.issueviews:issue-xml")!=-1){return AJS.Editor.JiraAnalytics.linkTypes.xml}else{if(m.indexOf("jira.issueviews:searchrequest-rss")!=-1){return AJS.Editor.JiraAnalytics.linkTypes.rss}else{if(m.indexOf("filter=")!=-1||m.indexOf("filter\\=")!=-1){return AJS.Editor.JiraAnalytics.linkTypes.filter}else{return AJS.Editor.JiraAnalytics.linkTypes.jql}}}}},convertToJQL:function(n,p){var o;if(AJS.$.trim(n)!==""){if(n.indexOf("http")===0&&this.isFilterUrl(n)){o=l(n,p)}else{if(n.indexOf("http")===0&&this.isIssueUrlOrXmlUrl(n)){var m=f(decodeURIComponent(n));if(m.length>0){o=m}}else{if(n.indexOf("http")!==0&&n.match(d)){o=n}else{if(n.match(e)){o="key="+n}else{o='summary ~ "'+n+'" OR description ~ "'+n+'"'}}}}}return o}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources', location = 'com/atlassian/confluence/plugins/jirareports/js/jirareports.js' */
Confluence.Blueprints.JiraReport=(function(f){var r;var u;var n="jirareports-changelog-static";var b="jirareports-changelog-dynamic";var k="-1";var g=-1;var s=6109;var d=6155;var m="Status report is not available for your version of JIRA. Upgrade to JIRA 6.1.1 or later to use this report.";var p;var a=function(v){var x=Confluence.Blueprints.JiraReport.servers;for(var w=0;w<x.length;w++){if(x[w].id===v){return x[w]}}return null};var i=function(v,y){var x;for(var w=0;w<u.length;w++){x=u[w];if(typeof x[v]==="function"){if(y){x[v].apply(null,Array.prototype.slice.call(y))}else{x[v]()}}}};var h=function(v){v.authUrl=null;r.oauthForm.addClass("hidden");i("onAuthenticatedSuccess")};var j=function(A,x){var y=[];if((A.val()!==k)&&A.is(":enabled")){y.push("project = '",q(A.val()),"'");if(x.is(":enabled")){var w=x.find('option[value!="'+k+'"]:selected');var B=w.length;if(B>0){var v="";for(var z=0;z<w.length;z++){v=v+c(w[z])+", "}y.push(" AND fixVersion in (",v.substring(0,v.length-2),")")}}}return y.join("")};var c=function(w){var v="";var x=q(w.text);if(x==="No Version"&&w.value==="EMPTY"){v=w.value}else{v="'"+x+"'"}return v};var q=function(v){return v.replace(/'/g,"\\'")};var o=function(w){var v=w.buildNumber;return v==g||(v>=s&&v<d)};var e=function(w){if(r.selectedReportType!==Confluence.Blueprints.JiraReport.REPORT_TYPE_STATUS){return false}var v=o(w);if(v){r.errorForm.html(Confluence.Blueprints.JiraReports.Dialog.warning({infor:m}));i("disableForm");l()}else{i("enableForm");t()}return v};var l=function(){p&&p.attr("disabled","disabled")};var t=function(){p&&p.removeAttr("disabled","disabled")};return{REPORT_TYPE_CHANGE_LOG:1,REPORT_TYPE_STATUS:2,prepareData:function(){AJS.$.ajax({dataType:"json",url:Confluence.getContextPath()+"/rest/jiraanywhere/1.0/servers",async:false}).done(function(v){Confluence.Blueprints.JiraReport.servers=v;AJS.$.each(v,function(w,x){if(x.selected){Confluence.Blueprints.JiraReport.primaryServer=x}})})},init:function(w,v){u=v;r={server:w.$container.find("#jira-reports-servers"),project:w.$container.find("#jira-reports-project"),version:w.$container.find("#jira-reports-fix-version"),title:w.$container.find("#jira-reports-page-title"),spaceKey:w.wizardData.spaceKey,textSearch:w.$container.find("#jira-query"),oauthForm:w.$container.find("#oauth-form"),errorForm:w.$container.find("#error-form"),switchSearchType:w.$container.find("#switch-search-type")};p=AJS.$("#create-dialog .create-dialog-create-button:visible");r.switchSearchType.click(function(y){var x=r.switchSearchType.hasClass("simple");if(x){r.textSearch.val(j(r.project,r.version));r.textSearch.removeClass("placeholded");r.switchSearchType.removeClass("simple").addClass("advanced").text("Switch to simple")}else{r.switchSearchType.removeClass("advanced").addClass("simple").text("Switch to advanced")}w.$container.find("#advanced-jira-search").toggleClass("hidden",!x);w.$container.find("#simple-jira-search").toggleClass("hidden",x);w.$container.find("#inforWarning").empty()});i("init",[r,w.$container]);r.server.change(function(){var x=a(r.server.val());if(e(x)){return}Confluence.Blueprints.JiraReport.checkOauthForm(x);i("onServerChange")})},loadServers:function(){var v=Confluence.Blueprints.JiraReport.servers;if(v.length===1){r.server.parent().addClass("hidden")}r.server.append(Confluence.Blueprints.JiraReports.Dialog.serverOptions({servers:v}));if(e(Confluence.Blueprints.JiraReport.primaryServer)){return}Confluence.Blueprints.JiraReport.checkOauthForm(Confluence.Blueprints.JiraReport.primaryServer);r.project.trigger("servers-load-completed")},validateForm:function(v){if(p&&p.is(":disabled")){return false}if(v.$container.find("#simple-jira-search").hasClass("hidden")){return Confluence.Blueprints.JiraReport.DynamicDialog.validateForm(v)}return Confluence.Blueprints.JiraReport.StaticDialog.validateForm(v)},checkOauthForm:function(v){if(v&&v.authUrl){r.oauthForm.removeClass("hidden");r.oauthForm.click(function(w){AppLinks.authenticateRemoteCredentials(v.authUrl,function(){h(v)});w.preventDefault()})}else{r.oauthForm.addClass("hidden")}},setupChangeLogSubmitData:function(v){if(r.switchSearchType.hasClass("simple")){v.pageData.contentTemplateKey=n;v.pageData.multiVersion=Confluence.Blueprints.JiraReport.StaticDialog.getMultiVersion()}else{v.pageData.contentTemplateKey=b}},setupStatusReportSubmitData:function(v){if(r.switchSearchType.hasClass("simple")){v.pageData.dialogMode="simple";v.pageData["jira-query"]=Confluence.Blueprints.JiraReport.StaticDialog.getStaticJiraQuery(v)}},setSelectedReportType:function(v){r.selectedReportType=v}}})(AJS.$);Confluence.Blueprints.JiraReport.StaticDialog=(function(j){var b;var n=Confluence.getContextPath()+"/rest/jirareports/1.0/";var k=401;var p="-1";var F=5;var h=4;var x=255;var E="\u2026";var t={};var l=function(G){G.empty();G.append(Confluence.Blueprints.JiraReports.Dialog.defaultOption({defaultValue:p}));G.auiSelect2("val",p);B(G)};var D=function(G){G.empty();G.auiSelect2("val",p)};var r=function(G){D(G);G.auiSelect2("enable",false)};var i=function(G){G.empty();G.append(Confluence.Blueprints.JiraReports.Dialog.loadingOption());G.auiSelect2("val","loading")};var z=function(G){G.auiSelect2("enable",true)};var s=function(G){G.auiSelect2("enable",false)};var m=function(G,H){AJS.$(G).attr("tabindex",H)};var f=function(G,H){if(H===b.project.val()){b.errorForm.empty();D(b.version);b.version.append(Confluence.Blueprints.JiraReports.Dialog.versionOptions({versions:G}));z(b.version)}};var a=function(H,G){if(G===b.server.val()){b.errorForm.empty();l(b.project);b.project.append(Confluence.Blueprints.JiraReports.Dialog.projectOptions({projects:H}));z(b.project)}};var c=function(){b.project.bind("servers-load-completed",Confluence.Blueprints.JiraReport.StaticDialog.loadProjects);b.project.change(function(){if(b.project.val()===p){D(b.version);o()}else{B(b.project);Confluence.Blueprints.JiraReport.StaticDialog.loadVersions();q(b.project.find("option:selected").text())}});b.project.on("select2-opening",function(){if(b.project.val()===p){b.project.find('option[value="'+p+'"]').addClass("hidden")}});b.version.change(function(){var G=b.project.find("option:selected").text();if(!b.version.val()){q(G)}else{if(b.version.val().length>1){q(G)}else{var H=b.version.find("option:selected").text();q(G+" "+H,true)}}});b.title.change(function(){u()})};var o=function(){b.title.val("");B(b.title)};var u=function(G){if(G===undefined){G=b.title.val()}if(G===""){return true}if(!Confluence.Blueprint.canCreatePage(b.spaceKey,G)){e(b.title,"A page with this name already exists.");return false}B(b.title);return true};var w=function(H,G){if(j.trim(H.val())===p){e(b.project,G);return false}return true};var C=function(H){if(!Confluence.Blueprint.canCreatePage(b.spaceKey,H)){var I;for(var G=1;G<=F;G++){I=H.concat(" (",G,")");if(Confluence.Blueprint.canCreatePage(b.spaceKey,I)){B(b.title);return I}}e(b.title,"A page with this name already exists.")}else{B(b.title)}return H};var q=function(H,G){if(G&&H.length<x-h){b.title.val(C(H));return}if(H.length>x){H=H.substr(0,x-1)+E}b.title.val(H);u(H)};var e=function(G,H){G.focus().siblings(".error").text(H)};var B=function(G){G.siblings(".error").empty()};var g=function(H,G){return{width:"300px",containerCssClass:H,dropdownCssClass:G,formatResult:function(I,J,K){J.attr("title",I.text);return j.fn.select2.defaults.formatResult.apply(this,arguments)}}};var y=function(G,H){AJS.$(G+" .select2-input").attr("placeholder",H)};var v=function(G){if(G==="timeout"){return "Connection Timeout."}return "Can not connect to JIRA server."};var d=function(H,G){l(H);b.errorForm.empty();b.errorForm.append(Confluence.Blueprints.JiraReports.Dialog.showErrorMessage({message:v(G)}));z(H)};var A=function(G){return G.select2("val")};return{init:function(G){b=G;b.project.auiSelect2(g("select2-project-container","select2-project-dropdown"));b.version.auiSelect2(g("select2-version-container","select2-version-dropdown"));y(".select2-project-dropdown","Filter Project ...");y(".select2-version-dropdown","Filter Fix Version ...");m(".select2-project-container > .aui-select2-choice",10);m(".select2-version-container > .aui-select2-choice",10);c(this);t={}},validateForm:function(H){H.$container.find(".error").empty();var I=w(b.project,"Project field is required");var G=u()&&I;if(G){H.pageData["jira-server-name"]=b.server.find("option:selected").text();H.pageData["jira-server-id"]=b.server.find("option:selected").val();return true}return false},onServerChange:function(){this.loadProjects(false);r(b.version);o()},onAuthenticatedSuccess:function(){this.loadProjects(true);o()},loadProjects:function(H){var G=b.server.val();s(b.project);i(b.project);if(!H&&t[G]){a(t[G],G);r(b.version)}else{AJS.$.ajax({dataType:"json",url:n+"appLink/"+G+"/projects",timeout:AJS.Meta.getNumber("connection-timeout")}).done(function(I){t[G]=I;a(I,G)}).fail(function(K,J){if(K.status===k){var I=j.parseJSON(K.responseText);t[G]=I;a(I,G)}else{if(G===b.server.val()){d(b.project,J)}}})}},loadVersions:function(){s(b.version);i(b.version);var G=b.project.val();AJS.$.ajax({dataType:"json",url:n+"appLink/"+b.server.val()+"/project/"+G+"/versions",timeout:AJS.Meta.getNumber("connection-timeout")}).done(function(H){f(H,G)}).fail(function(I,H){if(I.status===k){f(j.parseJSON(I.responseText),G)}else{if(G===b.project.val()){d(b.version,H)}}})},getStaticJiraQuery:function(I){var H="";if(b.project.val()!==p){H+="project = "+b.project.val();if(b.version.val()){var G=[];j(b.version.val()).each(function(J,K){G.push("'"+b.version.find("option[value='"+K+"']").text()+"'")});H+=" and fixVersion in ("+G.join(",")+")"}}return H},getMultiVersion:function(){return A(b.version).join(",")},disableForm:function(){l(b.project);s(b.project);r(b.version);o();b.title.attr("disabled","disabled")},enableForm:function(){z(b.project);z(b.version);b.title.removeAttr("disabled","disabled")}}})(AJS.$);Confluence.Blueprints.JiraReport.DynamicDialog=(function(i){var e,c;var j=/=|!=|~|>|<|!~| is | in | was | changed /i;var n=/\s*([A-Z][A-Z]+)-[0-9]+\s*/;var d=function(q){q.focus().siblings(".error").empty()};var m=function(){c.find("#inforWarning").empty()};var b=function(q){m();c.find("#inforWarning").append(q)};var h=function(q){var r;if(q.serverIndex!==-1){e.server.val(Confluence.Blueprints.JiraReport.servers[q.serverIndex].id);e.server.trigger("change");if(q.jqlQuery.length>0){r=q.jqlQuery}}else{b(Confluence.Blueprints.JiraReports.Dialog.noServerWarning({isAdministrator:AJS.Meta.get("is-confluence-admin"),contentPath:Confluence.getContextPath()}))}return r};var p=function(q){var r=decodeURIComponent(q);var t=AJS.JQLHelper.findServerIndexFromUrl(r,Confluence.Blueprints.JiraReport.servers);if(t!==-1){e.server.val(Confluence.Blueprints.JiraReport.servers[t].id);e.server.trigger("change");var s=function(v){b(Confluence.Blueprints.JiraReports.Dialog.warning({infor:"The URL filter is not available to you, perhaps it has been deleted or had its permissions changed."}));e.textSearch.val('summary ~ "'+q+'" OR description ~ "'+q+'"')};var u=function(v){if(v.jql){e.textSearch.val(v.jql)}else{s()}};AJS.JQLHelper.getJqlQueryFromJiraFilter(r,Confluence.Blueprints.JiraReport.servers[t].id,u,s)}else{b(Confluence.Blueprints.JiraReports.Dialog.noServerWarning({isAdministrator:AJS.Meta.get("is-confluence-admin"),contentPath:Confluence.getContextPath()}));e.textSearch.val('summary ~ "'+q+'" OR description ~ "'+q+'"')}};var g=function(q,r){return q.hasClass("placeholded")&&q.val()===r};var k=function(r){if(i.trim(r)!==""&&!g(e.textSearch,"Search URL, saved filter, JQL ")){if(r.indexOf("http")===0&&AJS.JQLHelper.isFilterUrl(r)){p(r)}else{if(r.indexOf("http")===0&&AJS.JQLHelper.isIssueUrlOrXmlUrl(r)){var q=AJS.JQLHelper.getJqlAndServerIndexFromUrl(decodeURIComponent(r),Confluence.Blueprints.JiraReport.servers);if(h(q)){e.textSearch.val(q.jqlQuery)}else{e.textSearch.val('summary ~ "'+r+'" OR description ~ "'+r+'"')}}else{if(r.indexOf("http")!==0&&r.match(j)){e.textSearch.val(r)}else{if(r.match(n)){e.textSearch.val("key="+r)}else{e.textSearch.val('summary ~ "'+r+'" OR description ~ "'+r+'"')}}}}}};var f=function(){d(e.textSearch);m();setTimeout(function(){var q=e.textSearch.val();k(q)},100)};var o=function(q,r){var s=c.find(q);if(i.trim(s.val())===""){s.focus().siblings(".error").html(r);return false}return true};var a=function(){if(e.title.val()!==""&&!Confluence.Blueprint.canCreatePage(e.spaceKey,e.title.val())){return false}return true};var l=function(){e.textSearch.val("");e.textSearch.siblings(".error").empty();m()};return{init:function(q,r){e=q;c=r;e.textSearch.bind("paste",f);e.textSearch.bind("change",f)},onServerChange:l,validateForm:function(q){if(!o("#jira-query","JIRA Query field is required")){return false}if(!a()){return false}q.pageData["jira-server-name"]=e.server.find("option:selected").text();q.pageData["jira-server-id"]=e.server.find("option:selected").val();if(!e.textSearch.val().match(j)){k(e.textSearch.val());q.pageData["jira-query"]=e.textSearch.val()}return true},disableForm:function(){l();e.textSearch.attr("disabled","disabled")},enableForm:function(){e.textSearch.removeAttr("disabled","disabled")}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources', location = 'com/atlassian/confluence/plugins/jirareports/js/jirareports-wizard.js' */
(function(c){function h(m,l){var k=c("#jirareports-select-type");var j=k.find(".template");if(Confluence.Blueprints.JiraReport.servers.length===0){j.addClass("disable disable-element");var i=Confluence.Blueprints.JiraReports.Dialog.showMessageNoAppLink({isAdministrator:AJS.Meta.get("is-confluence-admin"),contentPath:Confluence.getContextPath()});l.$container.find(".warningAppLink").append(i);c(".create-dialog-create-button:visible").addClass("hidden")}else{j.click(function(){c(this).siblings().removeClass("selected");c(this).addClass("selected")}).dblclick(function(){c(".create-dialog-create-button:visible").click()});k.attr("tabindex",0).keydown(function(o){var n=k.find(".selected");if(o.keyCode==38){o.preventDefault();n.removeClass("selected");n.prev().length?n.prev().addClass("selected"):j.last().addClass("selected")}else{if(o.keyCode==40){o.preventDefault();n.removeClass("selected");n.next().length?n.next().addClass("selected"):j.first().addClass("selected")}}});setTimeout(function(){j.first().click();k.focus()},0)}}function g(k,j){var i=j.$container.find(".selected").attr("id");if(i==="jirareports-select-changelog"){j.nextPageId="changelogPageId";j.wizardData.jiraReportType=Confluence.Blueprints.JiraReport.REPORT_TYPE_CHANGE_LOG}else{if(i==="jirareports-select-statusreport"){j.nextPageId="statusreportPageId";j.wizardData.jiraReportType=Confluence.Blueprints.JiraReport.REPORT_TYPE_STATUS}else{return false}}}function e(k,j){var i=[Confluence.Blueprints.JiraReport.DynamicDialog,Confluence.Blueprints.JiraReport.StaticDialog];Confluence.Blueprints.JiraReport.init(j,i);Confluence.Blueprints.JiraReport.setSelectedReportType(j.wizardData.jiraReportType);Confluence.Blueprints.JiraReport.loadServers()}function f(j,i){e(j,i);c("#jira-report-type").parents(".field-group").addClass("hidden")}function d(j,i){if(Confluence.Blueprints.JiraReport.validateForm(i)){Confluence.Blueprints.JiraReport.setupChangeLogSubmitData(i);return true}return false}function a(j,i){if(!Confluence.Blueprints.JiraReport.validateForm(i)){return false}Confluence.Blueprints.JiraReport.setupStatusReportSubmitData(i);i.pageData["statusreport-type"]="jirareports-statusreport-dynamic";i.pageData["issues-list-type"]="dynamic";i.pageData.contentTemplateKey="jirareports-statusreport"}function b(){Confluence.Blueprints.JiraReport.prepareData()}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-item",function(i){i.on("pre-render.selectreportPageId",b);i.on("post-render.selectreportPageId",h);i.on("submit.selectreportPageId",g);i.on("post-render.changelogPageId",e);i.on("submit.changelogPageId",d);i.on("post-render.statusreportPageId",f);i.on("submit.statusreportPageId",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources', location = 'com/atlassian/confluence/plugins/jirareports/soy/dialogs.soy' */
// This file was automatically generated from dialogs.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.JiraReports == 'undefined') { Confluence.Blueprints.JiraReports = {}; }
if (typeof Confluence.Blueprints.JiraReports.Dialog == 'undefined') { Confluence.Blueprints.JiraReports.Dialog = {}; }


Confluence.Blueprints.JiraReports.Dialog.selectreport = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="template-select-container-body loadable"><div class="warningAppLink"></div><ol id="jirareports-select-type" class="jirareports-templates"><li class="template" id="jirareports-select-changelog"><img class="template-preview" src="', soy.$$escapeHtml(""), '/download/resources/com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources/icon-changelog-48.png"><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Change log"), '</div><div class="template-description">', soy.$$escapeHtml("Create a report with a list of JIRA issues for a project, release or specific query."), '</div></div></li><li class="template" id="jirareports-select-statusreport"><img class="template-preview" src="', soy.$$escapeHtml(""), '/download/resources/com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources/icon-statusreport-48.png"><div class="template-meta"><div class="template-name">', soy.$$escapeHtml("Status report"), '</div><div class="template-description">', soy.$$escapeHtml("Create a report with charts to communicate the status of your release with stakeholders."), '</div></div></li></ol></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.changelog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="aui change-log-form" method="post" action="#"><fieldset><div id="error-form"/><div class="hidden" id="oauth-form"><div class="aui-message-container"><div class="aui-message info"><span class="aui-icon icon-info"></span>', soy.$$escapeHtml("You are viewing this selected server as anonymous. You may want to"), '&nbsp;<a href="#">', soy.$$escapeHtml("Login \x26 Approve"), '</a></div></div></div><div class="field-group"><label for="jira-reports-servers">', soy.$$escapeHtml("Server"), '</label><select id="jira-reports-servers" class="select long-field" name="jira-reports-servers" /></div><div id="simple-jira-search"><div class="field-group"><label for="jira-reports-project">', soy.$$escapeHtml("Project"), '<span class="aui-icon icon-required"> required</span></label><select id="jira-reports-project" name="jira-reports-project"><option value=\'-1\' selected=\'selected\'>', soy.$$escapeHtml("Select"), '</option></select><div class="error"></div></div><div class="field-group" id="versions-field"><label for="jira-reports-fix-version">', soy.$$escapeHtml("Fix version(s)"), '</label><select id="jira-reports-fix-version" multiple="true" class="select long-field" disabled="disabled" placeholder="', soy.$$escapeHtml("Leave empty to get all versions"), '"></select></div></div><div id="advanced-jira-search" class="hidden"><div class="field-group"><label for="jira-query">', soy.$$escapeHtml("JIRA Query"), '<span class="aui-icon icon-required"> required</span></label><input id="jira-query" class="text long-field" type="text" name="jira-query" title="name" placeholder="', soy.$$escapeHtml("Search URL, saved filter, JQL "), '" maxlength="255"><div id="inforWarning" class="error"></div></div></div><div class="field-group"><a id="switch-search-type" href="#" class="simple">', soy.$$escapeHtml("Switch to advanced"), '</a></div><div class="field-group"><br><label for="jira-reports-page-title">', soy.$$escapeHtml("Title"), '</label><input id="jira-reports-page-title" class="text long-field" type="text" name="title" title="title" maxlength="255"><div class="error"></div></div><div id="advanced-jira-search" class="hidden"><div class="field-group"><div class="checkbox"><input class="checkbox" type="checkbox" id="jira-report-type" name="jira-report-type" checked="checked" value="dynamic" /><label for="jira-report-type">', soy.$$escapeHtml("Automatically update issue status and"), '</label></br><label for="jira-report-type">', soy.$$escapeHtml("summaries from JIRA"), '</label></div></div></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.leftmenuchangelog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="page-menu-item selected" id="simple-jira-search"><button class="item-button">', soy.$$escapeHtml("jirareports.changelog.menu.simple.search"), '</button></li><li class="page-menu-item" id="advanced-jira-search"><button class="item-button">', soy.$$escapeHtml("jirareports.changelog.menu.advanced.search"), '</button></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.statusreport = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><div>Change log report</div><div>Status report</div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.warning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message-container"><div class="aui-message warning">', soy.$$escapeHtml(opt_data.infor), '<span class="aui-icon icon-warning"></span></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.noServerWarning = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message-container"><div class="aui-message warning">', (opt_data.isAdministrator == true) ? AJS.format("No server found match with your URL. \x3ca id\x3d\x22open_applinks\x22 target\x3d\x22_blank\x22 href\x3d\x22{0}/admin/listapplicationlinks.action\x22\x3e Click here \x3c/a\x3e to set this up",opt_data.contentPath) : AJS.format("No server found match with your URL. Contact your administrator \x3ca id\x3d\x22open_applinks\x22 target\x3d\x22_blank\x22 href\x3d\x22{0}/wiki/contactadministrators.action\x22\x3e here \x3c/a\x3e to set this up for you.",opt_data.contentPath), '<span class="aui-icon icon-warning"></span></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.showMessageNoAppLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message-container"><div class="aui-message error">', (opt_data.isAdministrator == true) ? AJS.format("Your confluence has not been configured to connect to JIRA. Click \x3ca id\x3d\x22open_applinks\x22 target\x3d\x22_blank\x22 href\x3d\x22{0}/admin/listapplicationlinks.action\x22\x3e here \x3c/a\x3e to set your connection.",opt_data.contentPath) : AJS.format("Your confluence has not been configured to connect to JIRA. Contact your administrator \x3ca id\x3d\x22open_applinks\x22 target\x3d\x22_blank\x22 href\x3d\x22{0}/wiki/contactadministrators.action\x22\x3e here \x3c/a\x3e to set this up for you.",opt_data.contentPath), '<span class="aui-icon icon-warning"></span></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.showErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-message-container"><div class="aui-message error"><p class="title"><span class="aui-icon icon-error"></span><strong>', soy.$$escapeHtml(opt_data.message), '</strong></p></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.defaultOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="', soy.$$escapeHtml(opt_data.defaultValue), '" selected="selected">', soy.$$escapeHtml("Select"), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.loadingOption = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<option value="loading" selected="selected">', soy.$$escapeHtml("Loading..."), '</option>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.serverOptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var serverList91 = opt_data.servers;
  var serverListLen91 = serverList91.length;
  for (var serverIndex91 = 0; serverIndex91 < serverListLen91; serverIndex91++) {
    var serverData91 = serverList91[serverIndex91];
    output.append((serverData91.selected) ? '<option value="' + soy.$$escapeHtml(serverData91.id) + '" selected="selected">' + soy.$$escapeHtml(serverData91.name) + '</option>' : '<option value="' + soy.$$escapeHtml(serverData91.id) + '">' + soy.$$escapeHtml(serverData91.name) + '</option>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.projectOptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var projectList107 = opt_data.projects;
  var projectListLen107 = projectList107.length;
  for (var projectIndex107 = 0; projectIndex107 < projectListLen107; projectIndex107++) {
    var projectData107 = projectList107[projectIndex107];
    output.append('<option value="', soy.$$escapeHtml(projectData107.key), '">', soy.$$escapeHtml(projectData107.name), '</option>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Dialog.versionOptions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var versionsLeng__soy115 = opt_data.versions.length;
  output.append((versionsLeng__soy115 > 0) ? '<option value="EMPTY">' + soy.$$escapeHtml("No Version") + '</option>' : '');
  var iLimit121 = versionsLeng__soy115;
  for (var i121 = 0; i121 < iLimit121; i121++) {
    var version__soy122 = opt_data.versions[versionsLeng__soy115 - i121 - 1];
    output.append('<option value="', soy.$$escapeHtml(version__soy122.id), '">', soy.$$escapeHtml(version__soy122.name), '</option>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:jirareports-resources', location = 'com/atlassian/confluence/plugins/jirareports/soy/jirareport-templates.soy' */
// This file was automatically generated from jirareport-templates.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.JiraReports == 'undefined') { Confluence.Blueprints.JiraReports = {}; }
if (typeof Confluence.Blueprints.JiraReports.Template == 'undefined') { Confluence.Blueprints.JiraReports.Template = {}; }


Confluence.Blueprints.JiraReports.Template.jiraissues = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="jira"><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.serverId), '</ac:parameter><ac:parameter ac:name="server">', soy.$$escapeHtml(opt_data.server), '</ac:parameter><ac:parameter ac:name="', soy.$$escapeHtml(opt_data.keyJQL), '">', soy.$$escapeHtml(opt_data.valJQL), '</ac:parameter>', (opt_data.isCount) ? '<ac:parameter ac:name="count">true</ac:parameter>' : '', '</ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Template.piechart = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><h3>', soy.$$escapeHtml(opt_data.titleType), (opt_data.statType == 'statuses') ? opt_data.totalIssues : '', '</h3></p><p><ac:macro ac:name="jirachart"><ac:parameter ac:name="serverId">', soy.$$escapeHtml(opt_data.serverId), '</ac:parameter><ac:parameter ac:name="server">', soy.$$escapeHtml(opt_data.server), '</ac:parameter><ac:parameter ac:name="jql">', soy.$$escapeHtml(opt_data.jql), '</ac:parameter><ac:parameter ac:name="statType">', soy.$$escapeHtml(opt_data.statType), '</ac:parameter><ac:parameter ac:name="width">', soy.$$escapeHtml(opt_data.width), '</ac:parameter><ac:parameter ac:name="border">', soy.$$escapeHtml(opt_data.border), '</ac:parameter><ac:parameter ac:name="chartType">pie</ac:parameter></ac:macro></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Template.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml("Add JIRA Report"), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.blueprintKey), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Template.errortimeout = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><ac:placeholder><strong>', soy.$$escapeHtml("Cannot get data from JIRA Server due to connection timeout."), '</strong></ac:placeholder></p>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.JiraReports.Template.releaseTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:placeholder>', soy.$$escapeHtml("Insert release name here."), '</ac:placeholder>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.web.resources:moment', location = '/includes/js/moment/moment.js' */
(function(B){var O,aw="2.5.0",x=this,T=Math.round,Y,t=0,e=1,aK=2,s=3,ap=4,q=5,Q=6,ar={},ag=(typeof module!=="undefined"&&module.exports&&typeof require!=="undefined"),b=/^\/?Date\((\-?\d+)/i,aT=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ay=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,aj=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,X=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,f=/\d\d?/,Z=/\d{1,3}/,C=/\d{1,4}/,aZ=/[+\-]?\d{1,6}/,aP=/\d+/,G=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,n=/Z|[\+\-]\d\d:?\d\d/gi,j=/T/i,aH=/[\+\-]?\d+(\.\d{1,3})?/,W=/\d/,o=/\d\d/,aS=/\d{3}/,aG=/\d{4}/,ac=/[+\-]?\d{6}/,aD=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,R="YYYY-MM-DDTHH:mm:ssZ",aR=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],E=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],V=/([\+\-]|\d\d)/gi,aA="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),A={Milliseconds:1,Seconds:1000,Minutes:60000,Hours:3600000,Days:86400000,Months:2592000000,Years:31536000000},c={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},aO={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},af={},aJ="DDD w W M D d".split(" "),ah="M D H h m s w W".split(" "),aL={M:function(){return this.month()+1},MMM:function(i){return this.lang().monthsShort(this,i)},MMMM:function(i){return this.lang().months(this,i)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(i){return this.lang().weekdaysMin(this,i)},ddd:function(i){return this.lang().weekdaysShort(this,i)},dddd:function(i){return this.lang().weekdays(this,i)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return H(this.year()%100,2)},YYYY:function(){return H(this.year(),4)},YYYYY:function(){return H(this.year(),5)},YYYYYY:function(){var a1=this.year(),i=a1>=0?"+":"-";return i+H(Math.abs(a1),6)},gg:function(){return H(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return H(this.weekYear(),5)},GG:function(){return H(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return H(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),true)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),false)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return J(this.milliseconds()/100)},SS:function(){return H(J(this.milliseconds()/10),2)},SSS:function(){return H(this.milliseconds(),3)},SSSS:function(){return H(this.milliseconds(),3)},Z:function(){var a1=-this.zone(),i="+";if(a1<0){a1=-a1;i="-"}return i+H(J(a1/60),2)+":"+H(J(a1)%60,2)},ZZ:function(){var a1=-this.zone(),i="+";if(a1<0){a1=-a1;i="-"}return i+H(J(a1/60),2)+H(J(a1)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},S=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];function L(a1,i){return function(a2){return H(a1.call(this,a2),i)}}function g(i,a1){return function(a2){return this.lang().ordinal(i.call(this,a2),a1)}}while(aJ.length){Y=aJ.pop();aL[Y+"o"]=g(aL[Y],Y)}while(ah.length){Y=ah.pop();aL[Y+Y]=L(aL[Y],2)}aL.DDDD=L(aL.DDD,3);function aB(){}function I(i){aX(i);au(this,i)}function aa(a3){var a6=l(a3),a5=a6.year||0,a1=a6.month||0,i=a6.week||0,a9=a6.day||0,a7=a6.hour||0,a4=a6.minute||0,a8=a6.second||0,a2=a6.millisecond||0;this._milliseconds=+a2+a8*1000+a4*60000+a7*3600000;this._days=+a9+i*7;this._months=+a1+a5*12;this._data={};this._bubble()}function au(a2,a1){for(var a3 in a1){if(a1.hasOwnProperty(a3)){a2[a3]=a1[a3]}}if(a1.hasOwnProperty("toString")){a2.toString=a1.toString}if(a1.hasOwnProperty("valueOf")){a2.valueOf=a1.valueOf}return a2}function k(i){if(i<0){return Math.ceil(i)}else{return Math.floor(i)}}function H(a4,a3,a2){var a1=Math.abs(a4)+"",i=a4>=0;while(a1.length<a3){a1="0"+a1}return(i?(a2?"+":""):"-")+a1}function D(a3,a2,a6,a5){var a1=a2._milliseconds,a8=a2._days,i=a2._months,a4,a7;if(a1){a3._d.setTime(+a3._d+a1*a6)}if(a8||i){a4=a3.minute();a7=a3.hour()}if(a8){a3.date(a3.date()+a8*a6)}if(i){a3.month(a3.month()+i*a6)}if(a1&&!a5){O.updateOffset(a3)}if(a8||i){a3.minute(a4);a3.hour(a7)}}function a(i){return Object.prototype.toString.call(i)==="[object Array]"}function d(i){return Object.prototype.toString.call(i)==="[object Date]"||i instanceof Date}function aI(a6,a5,a2){var a1=Math.min(a6.length,a5.length),a3=Math.abs(a6.length-a5.length),a7=0,a4;for(a4=0;a4<a1;a4++){if((a2&&a6[a4]!==a5[a4])||(!a2&&J(a6[a4])!==J(a5[a4]))){a7++}}return a7+a3}function aN(a1){if(a1){var i=a1.toLowerCase().replace(/(.)s$/,"$1");a1=c[a1]||aO[i]||i}return a1}function l(a2){var a1={},i,a3;for(a3 in a2){if(a2.hasOwnProperty(a3)){i=aN(a3);if(i){a1[i]=a2[a3]}}}return a1}function am(a1){var i,a2;if(a1.indexOf("week")===0){i=7;a2="day"}else{if(a1.indexOf("month")===0){i=12;a2="month"}else{return}}O[a1]=function(a7,a4){var a6,a3,a8=O.fn._lang[a1],a5=[];if(typeof a7==="number"){a4=a7;a7=B}a3=function(ba){var a9=O().utc().set(a2,ba);return a8.call(O.fn._lang,a9,a7||"")};if(a4!=null){return a3(a4)}else{for(a6=0;a6<i;a6++){a5.push(a3(a6))}return a5}}}function J(i){var a2=+i,a1=0;if(a2!==0&&isFinite(a2)){if(a2>=0){a1=Math.floor(a2)}else{a1=Math.ceil(a2)}}return a1}function aV(i,a1){return new Date(Date.UTC(i,a1+1,0)).getUTCDate()}function aQ(i){return aE(i)?366:365}function aE(i){return(i%4===0&&i%100!==0)||i%400===0}function aX(i){var a1;if(i._a&&i._pf.overflow===-2){a1=i._a[e]<0||i._a[e]>11?e:i._a[aK]<1||i._a[aK]>aV(i._a[t],i._a[e])?aK:i._a[s]<0||i._a[s]>23?s:i._a[ap]<0||i._a[ap]>59?ap:i._a[q]<0||i._a[q]>59?q:i._a[Q]<0||i._a[Q]>999?Q:-1;if(i._pf._overflowDayOfYear&&(a1<t||a1>aK)){a1=aK}i._pf.overflow=a1}}function az(i){i._pf={empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false}}function av(i){if(i._isValid==null){i._isValid=!isNaN(i._d.getTime())&&i._pf.overflow<0&&!i._pf.empty&&!i._pf.invalidMonth&&!i._pf.nullInput&&!i._pf.invalidFormat&&!i._pf.userInvalidated;if(i._strict){i._isValid=i._isValid&&i._pf.charsLeftOver===0&&i._pf.unusedTokens.length===0}}return i._isValid}function z(i){return i?i.toLowerCase().replace("_","-"):i}function u(i,a1){return a1._isUTC?O(i).zone(a1._offset||0):O(i).local()}au(aB.prototype,{set:function(a1){var a3,a2;for(a2 in a1){a3=a1[a2];if(typeof a3==="function"){this[a2]=a3}else{this["_"+a2]=a3}}},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(i){return this._months[i.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(i){return this._monthsShort[i.month()]},monthsParse:function(a1){var a2,a4,a3;if(!this._monthsParse){this._monthsParse=[]}for(a2=0;a2<12;a2++){if(!this._monthsParse[a2]){a4=O.utc([2000,a2]);a3="^"+this.months(a4,"")+"|^"+this.monthsShort(a4,"");this._monthsParse[a2]=new RegExp(a3.replace(".",""),"i")}if(this._monthsParse[a2].test(a1)){return a2}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(i){return this._weekdays[i.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(i){return this._weekdaysShort[i.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(i){return this._weekdaysMin[i.day()]},weekdaysParse:function(a4){var a1,a3,a2;if(!this._weekdaysParse){this._weekdaysParse=[]}for(a1=0;a1<7;a1++){if(!this._weekdaysParse[a1]){a3=O([2000,1]).day(a1);a2="^"+this.weekdays(a3,"")+"|^"+this.weekdaysShort(a3,"")+"|^"+this.weekdaysMin(a3,"");this._weekdaysParse[a1]=new RegExp(a2.replace(".",""),"i")}if(this._weekdaysParse[a1].test(a4)){return a1}}},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a1){var i=this._longDateFormat[a1];if(!i&&this._longDateFormat[a1.toUpperCase()]){i=this._longDateFormat[a1.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a2){return a2.slice(1)});this._longDateFormat[a1]=i}return i},isPM:function(i){return((i+"").toLowerCase().charAt(0)==="p")},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(i,a1,a2){if(i>11){return a2?"pm":"PM"}else{return a2?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a1,a2){var i=this._calendar[a1];return typeof i==="function"?i.apply(a2):i},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a3,a2,a1,a4){var i=this._relativeTime[a1];return(typeof i==="function")?i(a3,a2,a1,a4):i.replace(/%d/i,a3)},pastFuture:function(a2,i){var a1=this._relativeTime[a2>0?"future":"past"];return typeof a1==="function"?a1(i):a1.replace(/%s/i,i)},ordinal:function(i){return this._ordinal.replace("%d",i)},_ordinal:"%d",preparse:function(i){return i},postformat:function(i){return i},week:function(i){return y(i,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});function ae(a1,i){i.abbr=a1;if(!ar[a1]){ar[a1]=new aB()}ar[a1].set(i);return ar[a1]}function aU(i){delete ar[i]}function at(a5){var a4=0,a2,a7,a6,a3,a1=function(i){if(!ar[i]&&ag){try{require("./lang/"+i)}catch(a8){}}return ar[i]};if(!a5){return O.fn._lang}if(!a(a5)){a7=a1(a5);if(a7){return a7}a5=[a5]}while(a4<a5.length){a3=z(a5[a4]).split("-");a2=a3.length;a6=z(a5[a4+1]);a6=a6?a6.split("-"):null;while(a2>0){a7=a1(a3.slice(0,a2).join("-"));if(a7){return a7}if(a6&&a6.length>=a2&&aI(a3,a6,true)>=a2-1){break}a2--}a4++}return O.fn._lang}function ad(i){if(i.match(/\[[\s\S]/)){return i.replace(/^\[|\]$/g,"")}return i.replace(/\\/g,"")}function p(a3){var a4=a3.match(aj),a1,a2;for(a1=0,a2=a4.length;a1<a2;a1++){if(aL[a4[a1]]){a4[a1]=aL[a4[a1]]}else{a4[a1]=ad(a4[a1])}}return function(a5){var i="";for(a1=0;a1<a2;a1++){i+=a4[a1] instanceof Function?a4[a1].call(a5,a3):a4[a1]}return i}}function ai(i,a1){if(!i.isValid()){return i.lang().invalidDate()}a1=a0(a1,i.lang());if(!af[a1]){af[a1]=p(a1)}return af[a1](i)}function a0(a3,a4){var a1=5;function a2(i){return a4.longDateFormat(i)||i}X.lastIndex=0;while(a1>=0&&X.test(a3)){a3=a3.replace(X,a2);X.lastIndex=0;a1-=1}return a3}function al(a3,a2){var a1,i=a2._strict;switch(a3){case"DDDD":return aS;case"YYYY":case"GGGG":case"gggg":return i?aG:C;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return i?ac:aZ;case"S":if(i){return W}case"SS":if(i){return o}case"SSS":case"DDD":return i?aS:Z;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return G;case"a":case"A":return at(a2._l)._meridiemParse;case"X":return aH;case"Z":case"ZZ":return n;case"T":return j;case"SSSS":return aP;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return i?o:f;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return i?W:f;default:a1=new RegExp(aY(ao(a3.replace("\\","")),"i"));return a1}}function v(a1){a1=a1||"";var i=(a1.match(n)||[]),a4=i[i.length-1]||[],a3=(a4+"").match(V)||["-",0,0],a2=+(a3[1]*60)+J(a3[2]);return a3[0]==="+"?-a2:a2}function an(a4,a2,a3){var a1,i=a3._a;switch(a4){case"M":case"MM":if(a2!=null){i[e]=J(a2)-1}break;case"MMM":case"MMMM":a1=at(a3._l).monthsParse(a2);if(a1!=null){i[e]=a1}else{a3._pf.invalidMonth=a2}break;case"D":case"DD":if(a2!=null){i[aK]=J(a2)}break;case"DDD":case"DDDD":if(a2!=null){a3._dayOfYear=J(a2)}break;case"YY":i[t]=J(a2)+(J(a2)>68?1900:2000);break;case"YYYY":case"YYYYY":case"YYYYYY":i[t]=J(a2);break;case"a":case"A":a3._isPm=at(a3._l).isPM(a2);break;case"H":case"HH":case"h":case"hh":i[s]=J(a2);break;case"m":case"mm":i[ap]=J(a2);break;case"s":case"ss":i[q]=J(a2);break;case"S":case"SS":case"SSS":case"SSSS":i[Q]=J(("0."+a2)*1000);break;case"X":a3._d=new Date(parseFloat(a2)*1000);break;case"Z":case"ZZ":a3._useUTC=true;a3._tzm=v(a2);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a4=a4.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a4=a4.substr(0,2);if(a2){a3._w=a3._w||{};a3._w[a4]=a2}break}}function ab(a5){var a7,a6,ba=[],a3,a9,a2,bb,bc,a4,a8,a1;if(a5._d){return}a3=m(a5);if(a5._w&&a5._a[aK]==null&&a5._a[e]==null){a2=function(bd){var i=parseInt(bd,10);return bd?(bd.length<3?(i>68?1900+i:2000+i):i):(a5._a[t]==null?O().weekYear():a5._a[t])};bb=a5._w;if(bb.GG!=null||bb.W!=null||bb.E!=null){bc=r(a2(bb.GG),bb.W||1,bb.E,4,1)}else{a4=at(a5._l);a8=bb.d!=null?aW(bb.d,a4):(bb.e!=null?parseInt(bb.e,10)+a4._week.dow:0);a1=parseInt(bb.w,10)||1;if(bb.d!=null&&a8<a4._week.dow){a1++}bc=r(a2(bb.gg),a1,a8,a4._week.doy,a4._week.dow)}a5._a[t]=bc.year;a5._dayOfYear=bc.dayOfYear}if(a5._dayOfYear){a9=a5._a[t]==null?a3[t]:a5._a[t];if(a5._dayOfYear>aQ(a9)){a5._pf._overflowDayOfYear=true}a6=F(a9,0,a5._dayOfYear);a5._a[e]=a6.getUTCMonth();a5._a[aK]=a6.getUTCDate()}for(a7=0;a7<3&&a5._a[a7]==null;++a7){a5._a[a7]=ba[a7]=a3[a7]}for(;a7<7;a7++){a5._a[a7]=ba[a7]=(a5._a[a7]==null)?(a7===2?1:0):a5._a[a7]}ba[s]+=J((a5._tzm||0)/60);ba[ap]+=J((a5._tzm||0)%60);a5._d=(a5._useUTC?F:ak).apply(null,ba)}function ax(a1){var i;if(a1._d){return}i=l(a1._i);a1._a=[i.year,i.month,i.day,i.hour,i.minute,i.second,i.millisecond];ab(a1)}function m(a1){var i=new Date();if(a1._useUTC){return[i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()]}else{return[i.getFullYear(),i.getMonth(),i.getDate()]}}function N(a4){a4._a=[];a4._pf.empty=true;var a3=at(a4._l),a7=""+a4._i,a6,a2,ba,a5,a9,a1=a7.length,a8=0;ba=a0(a4._f,a3).match(aj)||[];for(a6=0;a6<ba.length;a6++){a5=ba[a6];a2=(a7.match(al(a5,a4))||[])[0];if(a2){a9=a7.substr(0,a7.indexOf(a2));if(a9.length>0){a4._pf.unusedInput.push(a9)}a7=a7.slice(a7.indexOf(a2)+a2.length);a8+=a2.length}if(aL[a5]){if(a2){a4._pf.empty=false}else{a4._pf.unusedTokens.push(a5)}an(a5,a2,a4)}else{if(a4._strict&&!a2){a4._pf.unusedTokens.push(a5)}}}a4._pf.charsLeftOver=a1-a8;if(a7.length>0){a4._pf.unusedInput.push(a7)}if(a4._isPm&&a4._a[s]<12){a4._a[s]+=12}if(a4._isPm===false&&a4._a[s]===12){a4._a[s]=0}ab(a4);aX(a4)}function ao(i){return i.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a1,a5,a4,a3,a2){return a5||a4||a3||a2})}function aY(i){return i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function aM(a1){var a5,a3,a4,a2,a6;if(a1._f.length===0){a1._pf.invalidFormat=true;a1._d=new Date(NaN);return}for(a2=0;a2<a1._f.length;a2++){a6=0;a5=au({},a1);az(a5);a5._f=a1._f[a2];N(a5);if(!av(a5)){continue}a6+=a5._pf.charsLeftOver;a6+=a5._pf.unusedTokens.length*10;a5._pf.score=a6;if(a4==null||a6<a4){a4=a6;a3=a5}}au(a1,a3||a5)}function h(a3){var a4,a2=a3._i,a1=aD.exec(a2);if(a1){a3._pf.iso=true;for(a4=4;a4>0;a4--){if(a1[a4]){a3._f=aR[a4-1]+(a1[6]||" ");break}}for(a4=0;a4<4;a4++){if(E[a4][1].exec(a2)){a3._f+=E[a4][0];break}}if(a2.match(n)){a3._f+="Z"}N(a3)}else{a3._d=new Date(a2)}}function M(a2){var a1=a2._i,i=b.exec(a1);if(a1===B){a2._d=new Date()}else{if(i){a2._d=new Date(+i[1])}else{if(typeof a1==="string"){h(a2)}else{if(a(a1)){a2._a=a1.slice(0);ab(a2)}else{if(d(a1)){a2._d=new Date(+a1)}else{if(typeof(a1)==="object"){ax(a2)}else{a2._d=new Date(a1)}}}}}}}function ak(a7,i,a5,a4,a6,a3,a2){var a1=new Date(a7,i,a5,a4,a6,a3,a2);if(a7<1970){a1.setFullYear(a7)}return a1}function F(a1){var i=new Date(Date.UTC.apply(null,arguments));if(a1<1970){i.setUTCFullYear(a1)}return i}function aW(i,a1){if(typeof i==="string"){if(!isNaN(i)){i=parseInt(i,10)}else{i=a1.weekdaysParse(i);if(typeof i!=="number"){return null}}}return i}function aC(i,a2,a1,a3,a4){return a4.relativeTime(a2||1,!!a1,i,a3)}function w(a2,i,a1){var a7=T(Math.abs(a2)/1000),a3=T(a7/60),a6=T(a3/60),a8=T(a6/24),a4=T(a8/365),a5=a7<45&&["s",a7]||a3===1&&["m"]||a3<45&&["mm",a3]||a6===1&&["h"]||a6<22&&["hh",a6]||a8===1&&["d"]||a8<=25&&["dd",a8]||a8<=45&&["M"]||a8<345&&["MM",T(a8/30)]||a4===1&&["y"]||["yy",a4];a5[2]=i;a5[3]=a2>0;a5[4]=a1;return aC.apply({},a5)}function y(a4,a2,a5){var a1=a5-a2,i=a5-a4.day(),a3;if(i>a1){i-=7}if(i<a1-7){i+=7}a3=O(a4).add("d",i);return{week:Math.ceil(a3.dayOfYear()/7),year:a3.year()}}function r(a4,a3,a5,a7,i){var a6=new Date(H(a4,6,true)+"-01-01").getUTCDay(),a2,a1;a5=a5!=null?a5:i;a2=i-a6+(a6>a7?7:0);a1=7*(a3-1)+(a5-i)+a2+1;return{year:a1>0?a4:a4-1,dayOfYear:a1>0?a1:aQ(a4-1)+a1}}function K(a1){var i=a1._i,a2=a1._f;if(typeof a1._pf==="undefined"){az(a1)}if(i===null){return O.invalid({nullInput:true})}if(typeof i==="string"){a1._i=i=at().preparse(i)}if(O.isMoment(i)){a1=au({},i);a1._d=new Date(+i._d)}else{if(a2){if(a(a2)){aM(a1)}else{N(a1)}}else{M(a1)}}return new I(a1)}O=function(a1,a2,a3,i){if(typeof(a3)==="boolean"){i=a3;a3=B}return K({_i:a1,_f:a2,_l:a3,_strict:i,_isUTC:false})};O.utc=function(a2,a3,a4,a1){var i;if(typeof(a4)==="boolean"){a1=a4;a4=B}i=K({_useUTC:true,_isUTC:true,_l:a4,_i:a2,_f:a3,_strict:a1}).utc();return i};O.unix=function(i){return O(i*1000)};O.duration=function(a1,a5){var a6=a1,a4=null,i,a3,a2;if(O.isDuration(a1)){a6={ms:a1._milliseconds,d:a1._days,M:a1._months}}else{if(typeof a1==="number"){a6={};if(a5){a6[a5]=a1}else{a6.milliseconds=a1}}else{if(!!(a4=aT.exec(a1))){i=(a4[1]==="-")?-1:1;a6={y:0,d:J(a4[aK])*i,h:J(a4[s])*i,m:J(a4[ap])*i,s:J(a4[q])*i,ms:J(a4[Q])*i}}else{if(!!(a4=ay.exec(a1))){i=(a4[1]==="-")?-1:1;a2=function(a8){var a7=a8&&parseFloat(a8.replace(",","."));return(isNaN(a7)?0:a7)*i};a6={y:a2(a4[2]),M:a2(a4[3]),d:a2(a4[4]),h:a2(a4[5]),m:a2(a4[6]),s:a2(a4[7]),w:a2(a4[8])}}}}}a3=new aa(a6);if(O.isDuration(a1)&&a1.hasOwnProperty("_lang")){a3._lang=a1._lang}return a3};O.version=aw;O.defaultFormat=R;O.updateOffset=function(){};O.lang=function(a1,i){var a2;if(!a1){return O.fn._lang._abbr}if(i){ae(z(a1),i)}else{if(i===null){aU(a1);a1="en"}else{if(!ar[a1]){at(a1)}}}a2=O.duration.fn._lang=O.fn._lang=at(a1);return a2._abbr};O.langData=function(i){if(i&&i._lang&&i._lang._abbr){i=i._lang._abbr}return at(i)};O.isMoment=function(i){return i instanceof I};O.isDuration=function(i){return i instanceof aa};for(Y=S.length-1;Y>=0;--Y){am(S[Y])}O.normalizeUnits=function(i){return aN(i)};O.invalid=function(a1){var i=O.utc(NaN);if(a1!=null){au(i._pf,a1)}else{i._pf.userInvalidated=true}return i};O.parseZone=function(i){return O(i).parseZone()};au(O.fn=I.prototype,{clone:function(){return O(this)},valueOf:function(){return +this._d+((this._offset||0)*60000)},unix:function(){return Math.floor(+this/1000)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var i=O(this).utc();if(0<i.year()&&i.year()<=9999){return ai(i,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}else{return ai(i,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function(){var i=this;return[i.year(),i.month(),i.date(),i.hours(),i.minutes(),i.seconds(),i.milliseconds()]},isValid:function(){return av(this)},isDSTShifted:function(){if(this._a){return this.isValid()&&aI(this._a,(this._isUTC?O.utc(this._a):O(this._a)).toArray())>0}return false},parsingFlags:function(){return au({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){this.zone(0);this._isUTC=false;return this},format:function(a1){var i=ai(this,a1||O.defaultFormat);return this.lang().postformat(i)},add:function(i,a2){var a1;if(typeof i==="string"){a1=O.duration(+a2,i)}else{a1=O.duration(i,a2)}D(this,a1,1);return this},subtract:function(i,a2){var a1;if(typeof i==="string"){a1=O.duration(+a2,i)}else{a1=O.duration(i,a2)}D(this,a1,-1);return this},diff:function(a4,a3,i){var a5=u(a4,this),a1=(this.zone()-a5.zone())*60000,a6,a2;a3=aN(a3);if(a3==="year"||a3==="month"){a6=(this.daysInMonth()+a5.daysInMonth())*43200000;a2=((this.year()-a5.year())*12)+(this.month()-a5.month());a2+=((this-O(this).startOf("month"))-(a5-O(a5).startOf("month")))/a6;a2-=((this.zone()-O(this).startOf("month").zone())-(a5.zone()-O(a5).startOf("month").zone()))*60000/a6;if(a3==="year"){a2=a2/12}}else{a6=(this-a5);a2=a3==="second"?a6/1000:a3==="minute"?a6/60000:a3==="hour"?a6/3600000:a3==="day"?(a6-a1)/86400000:a3==="week"?(a6-a1)/604800000:a6}return i?a2:k(a2)},from:function(a1,i){return O.duration(this.diff(a1)).lang(this.lang()._abbr).humanize(!i)},fromNow:function(i){return this.from(O(),i)},calendar:function(){var i=u(O(),this).startOf("day"),a2=this.diff(i,"days",true),a1=a2<-6?"sameElse":a2<-1?"lastWeek":a2<0?"lastDay":a2<1?"sameDay":a2<2?"nextDay":a2<7?"nextWeek":"sameElse";return this.format(this.lang().calendar(a1,this))},isLeapYear:function(){return aE(this.year())},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone())},day:function(a1){var i=this._isUTC?this._d.getUTCDay():this._d.getDay();if(a1!=null){a1=aW(a1,this.lang());return this.add({d:a1-i})}else{return i}},month:function(i){var a1=this._isUTC?"UTC":"",a2;if(i!=null){if(typeof i==="string"){i=this.lang().monthsParse(i);if(typeof i!=="number"){return this}}a2=this.date();this.date(1);this._d["set"+a1+"Month"](i);this.date(Math.min(a2,this.daysInMonth()));O.updateOffset(this);return this}else{return this._d["get"+a1+"Month"]()}},startOf:function(i){i=aN(i);switch(i){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}if(i==="week"){this.weekday(0)}else{if(i==="isoWeek"){this.isoWeekday(1)}}return this},endOf:function(i){i=aN(i);return this.startOf(i).add((i==="isoWeek"?"week":i),1).subtract("ms",1)},isAfter:function(a1,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)>+O(a1).startOf(i)},isBefore:function(a1,i){i=typeof i!=="undefined"?i:"millisecond";return +this.clone().startOf(i)<+O(a1).startOf(i)},isSame:function(a1,i){i=i||"ms";return +this.clone().startOf(i)===+u(a1,this).startOf(i)},min:function(i){i=O.apply(null,arguments);return i<this?this:i},max:function(i){i=O.apply(null,arguments);return i>this?this:i},zone:function(i){var a1=this._offset||0;if(i!=null){if(typeof i==="string"){i=v(i)}if(Math.abs(i)<16){i=i*60}this._offset=i;this._isUTC=true;if(a1!==i){D(this,O.duration(a1-i,"m"),1,true)}}else{return this._isUTC?a1:this._d.getTimezoneOffset()}return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){if(this._tzm){this.zone(this._tzm)}else{if(typeof this._i==="string"){this.zone(this._i)}}return this},hasAlignedHourOffset:function(i){if(!i){i=0}else{i=O(i).zone()}return(this.zone()-i)%60===0},daysInMonth:function(){return aV(this.year(),this.month())},dayOfYear:function(i){var a1=T((O(this).startOf("day")-O(this).startOf("year"))/86400000)+1;return i==null?a1:this.add("d",(i-a1))},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(i){var a1=y(this,this.lang()._week.dow,this.lang()._week.doy).year;return i==null?a1:this.add("y",(i-a1))},isoWeekYear:function(i){var a1=y(this,1,4).year;return i==null?a1:this.add("y",(i-a1))},week:function(i){var a1=this.lang().week(this);return i==null?a1:this.add("d",(i-a1)*7)},isoWeek:function(i){var a1=y(this,1,4).week;return i==null?a1:this.add("d",(i-a1)*7)},weekday:function(i){var a1=(this.day()+7-this.lang()._week.dow)%7;return i==null?a1:this.add("d",i-a1)},isoWeekday:function(i){return i==null?this.day()||7:this.day(this.day()%7?i:i-7)},get:function(i){i=aN(i);return this[i]()},set:function(i,a1){i=aN(i);if(typeof this[i]==="function"){this[i](a1)}return this},lang:function(i){if(i===B){return this._lang}else{this._lang=at(i);return this}}});function aF(i,a1){O.fn[i]=O.fn[i+"s"]=function(a2){var a3=this._isUTC?"UTC":"";if(a2!=null){this._d["set"+a3+a1](a2);O.updateOffset(this);return this}else{return this._d["get"+a3+a1]()}}}for(Y=0;Y<aA.length;Y++){aF(aA[Y].toLowerCase().replace(/s$/,""),aA[Y])}aF("year","FullYear");O.fn.days=O.fn.day;O.fn.months=O.fn.month;O.fn.weeks=O.fn.week;O.fn.isoWeeks=O.fn.isoWeek;O.fn.toJSON=O.fn.toISOString;au(O.duration.fn=aa.prototype,{_bubble:function(){var a2=this._milliseconds,a7=this._days,i=this._months,a5=this._data,a6,a4,a1,a3;a5.milliseconds=a2%1000;a6=k(a2/1000);a5.seconds=a6%60;a4=k(a6/60);a5.minutes=a4%60;a1=k(a4/60);a5.hours=a1%24;a7+=k(a1/24);a5.days=a7%30;i+=k(a7/30);a5.months=i%12;a3=k(i/12);a5.years=a3},weeks:function(){return k(this.days()/7)},valueOf:function(){return this._milliseconds+this._days*86400000+(this._months%12)*2592000000+J(this._months/12)*31536000000},humanize:function(a1){var a2=+this,i=w(a2,!a1,this.lang());if(a1){i=this.lang().pastFuture(a2,i)}return this.lang().postformat(i)},add:function(i,a2){var a1=O.duration(i,a2);this._milliseconds+=a1._milliseconds;this._days+=a1._days;this._months+=a1._months;this._bubble();return this},subtract:function(i,a2){var a1=O.duration(i,a2);this._milliseconds-=a1._milliseconds;this._days-=a1._days;this._months-=a1._months;this._bubble();return this},get:function(i){i=aN(i);return this[i.toLowerCase()+"s"]()},as:function(i){i=aN(i);return this["as"+i.charAt(0).toUpperCase()+i.slice(1)+"s"]()},lang:O.fn.lang,toIsoString:function(){var a3=Math.abs(this.years()),i=Math.abs(this.months()),a5=Math.abs(this.days()),a1=Math.abs(this.hours()),a2=Math.abs(this.minutes()),a4=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return"P0D"}return(this.asSeconds()<0?"-":"")+"P"+(a3?a3+"Y":"")+(i?i+"M":"")+(a5?a5+"D":"")+((a1||a2||a4)?"T":"")+(a1?a1+"H":"")+(a2?a2+"M":"")+(a4?a4+"S":"")}});function U(i){O.duration.fn[i]=function(){return this._data[i]}}function aq(i,a1){O.duration.fn["as"+i]=function(){return +this/a1}}for(Y in A){if(A.hasOwnProperty(Y)){aq(Y,A[Y]);U(Y.toLowerCase())}}aq("Weeks",604800000);O.duration.fn.asMonths=function(){return(+this-this.years()*31536000000)/2592000000+this.years()*12};O.lang("en",{ordinal:function(a2){var i=a2%10,a1=(J(a2%100/10)===1)?"th":(i===1)?"st":(i===2)?"nd":(i===3)?"rd":"th";return a2+a1}});function P(a1){var i=false,a2=O;if(typeof ender!=="undefined"){return}if(a1){x.moment=function(){if(!i&&console&&console.warn){i=true;console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")}return a2.apply(null,arguments)};au(x.moment,a2)}else{x.moment=O}}if(ag){module.exports=O;P(true)}else{if(typeof define==="function"&&define.amd){define("moment",function(a1,i,a2){if(a2.config&&a2.config()&&a2.config().noGlobal!==true){P(a2.config().noGlobal===B)}return O})}else{P()}}}).call(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:retrospective-resources', location = 'com/atlassian/confluence/plugins/retrospectives/js/retrospectives-wizard.js' */
(function(c){function b(f,d){Confluence.Blueprints.Restrospectives.init(d)}function a(f,d){return Confluence.Blueprints.Restrospectives.validateRetroForm()}Confluence.Blueprint.setWizard("com.atlassian.confluence.plugins.confluence-software-blueprints:retrospectives-item",function(d){d.on("post-render.retrospectivePageId",b);d.on("submit.retrospectivePageId",a)})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:retrospective-resources', location = 'com/atlassian/confluence/plugins/retrospectives/js/retrospectives.js' */
Confluence.Blueprints.Restrospectives=(function(d){var h;var e="YYYY-MM-DD";var c=function(i){i.siblings(".error").empty()};var b=function(i,j){i.focus().siblings(".error").text(j)};var g=function(){if(h.title.val()===""){return true}if(!Confluence.Blueprint.canCreatePage(h.spaceKey,h.title.val())){b(h.title,"A page with this name already exists.");return false}c(h.title);return true};var f=function(){h.title.change(g)};var a=function(){var j=d("meta[name=confluence-request-time]").attr("content");var i=moment(parseFloat(j)).format(e);h.title.val(i+" "+"Retrospective")};return{init:function(i){h={title:i.$container.find("#retro-title"),participants:i.$container.find("#retro-participants"),spaceKey:i.wizardData.spaceKey};f();a()},validateRetroForm:function(){return g()}}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:retrospective-resources', location = 'com/atlassian/confluence/plugins/retrospectives/soy/dialogs.soy' */
// This file was automatically generated from dialogs.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Retrospectives == 'undefined') { Confluence.Blueprints.Retrospectives = {}; }
if (typeof Confluence.Blueprints.Retrospectives.Dialog == 'undefined') { Confluence.Blueprints.Retrospectives.Dialog = {}; }


Confluence.Blueprints.Retrospectives.Dialog.retrospective = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="aui retrospective" method="post" action="#"><fieldset><div class="field-group"><label for="retro-title">', soy.$$escapeHtml("Title"), '</label><input id="retro-title" class="text long-field" type="text" name="retro-title" title="title" maxlength="255"><div class="error"/></div><div class="field-group"><label for="retro-participants">', soy.$$escapeHtml("Participants"), '</label><input id="retro-participants" class="text long-field autocomplete-multiuser" type="text" name="retro-participants" data-autofill-user="true" placeholder="', soy.$$escapeHtml("Add the participants of this retrospective"), '"></div></fieldset></form>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-software-blueprints:retrospective-resources', location = 'com/atlassian/confluence/plugins/blueprints/common/common.soy' */
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }


Confluence.Blueprints.Common.userList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul>');
  var nameList4 = opt_data.names;
  var nameListLen4 = nameList4.length;
  for (var nameIndex4 = 0; nameIndex4 < nameListLen4; nameIndex4++) {
    var nameData4 = nameList4[nameIndex4];
    output.append('<li><ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData4), '" /></ac:link></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.userTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList11 = opt_data.names;
  var nameListLen11 = nameList11.length;
  for (var nameIndex11 = 0; nameIndex11 < nameListLen11; nameIndex11++) {
    var nameData11 = nameList11[nameIndex11];
    output.append('<tr><td><ac:macro ac:name="profile-picture"><ac:parameter ac:name="User">', soy.$$escapeHtml(nameData11), '</ac:parameter></ac:macro><br></br><ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData11), '" /></ac:link></td><td/><td/></tr>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.users = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var nameList19 = opt_data.names;
  var nameListLen19 = nameList19.length;
  for (var nameIndex19 = 0; nameIndex19 < nameListLen19; nameIndex19++) {
    var nameData19 = nameList19[nameIndex19];
    output.append('<ac:link><ri:user ri:username="', soy.$$escapeHtml(nameData19), '" /></ac:link>&nbsp;');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Blueprints.Common.createFromTemplateMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">', soy.$$escapeHtml(opt_data.blueprintKey), '</ac:parameter><ac:parameter ac:name="buttonLabel">', soy.$$escapeHtml(opt_data.buttonLabel), '</ac:parameter><ac:parameter ac:name="spaceKey">', soy.$$escapeHtml(opt_data.spaceKey), '</ac:parameter><ac:parameter ac:name="templateName">', soy.$$escapeHtml(opt_data.blueprintKey), '</ac:parameter></ac:macro>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:common-resources', location = 'templates/extra/jira/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:refresh-resources', location = '/jira/refresh.js' */
(function(b){var c={REFRESH_STATE_STARTED:1,REFRESH_STATE_DONE:2,REFRESH_STATE_FAILED:3,refreshs:[],sortables:[],init:function(){a.getAll().each(function(){c.registerRefresh(this.getRefresh())});b.each(this.refreshs,function(e,f){var g=a.get(f.id);g.getRefreshButton().bind("click",f,c.handleRefreshClick);g.getRefreshLink().bind("click",f,c.handleRefreshClick)});d.getAll().each(function(){c.registerSort(this.getSortable())});b.each(this.sortables,function(f,e){var g=d.get(e.id);g.getHeadersTable().bind("click",e,c.onHeaderClick)})},onHeaderClick:function(m){refeshId=m.data.id;var f="ASC";if(b(this).hasClass("tablesorter-headerAsc")){f="DESC"}var h=b(this).find(".jim-table-header-content").text();var l=b("#refresh-wiki-"+refeshId).val();var g=b("#refresh-page-id-"+refeshId).val();var k=b("#refresh-"+refeshId);var i=new c.Refresh(refeshId,l,g,k.html());var j=a.get(refeshId);j.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(i,h,f)},replaceRefresh:function(g,e){var f=a.get(g);f.updateRefreshVisibility(c.REFRESH_STATE_DONE);b.each(this.refreshs,function(l,m){if(m.id===g){c.refreshs.splice(l,1);var n=a.get(e);var j=n.getRefresh();c.registerRefresh(j);c.sortables.splice(l,1);var h=d.get(e);var k=h.getSortable();c.registerSort(k);n.getRefreshButton().bind("click",j,c.handleRefreshClick);n.getRefreshLink().bind("click",j,c.handleRefreshClick);h.getHeadersTable().bind("click",k,c.onHeaderClick)}})},registerRefresh:function(e){if(!(e instanceof c.Refresh)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.refreshs.push(e)},registerSort:function(e){if(!(e instanceof c.Sortable)){throw "Refresh object must be an instance of RefreshMacro.Refresh"}c.sortables.push(e)},handleRefreshClick:function(h){var f=h.data;var g=a.get(f.id);g.getMacroPanel().html(f.loadingMsg);g.updateRefreshVisibility(c.REFRESH_STATE_STARTED);c.processRefresh(f)},processRefresh:function(g,f,e){var h={};if(arguments.length==1){h={pageId:g.pageId,wikiMarkup:g.wiki}}else{if(arguments.length==3){h={pageId:g.pageId,wikiMarkup:g.wiki,columnName:f,order:e}}}AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/jiraRefreshRenderer",data:h,success:function(j){var i=b(j).attr("id");if(i){i=i.replace("refresh-module-","");a.get(g.id).getContentModule().replaceWith(j);new c.CallbackSupport(g).callback(i)}else{new c.CallbackSupport(g).errorHandler(j)}},error:function(j,k,i){new c.CallbackSupport(g).errorHandler(i)}})}};c.Refresh=function(f,e){this.id=f;this.wiki=e;this.pageId=arguments.length>2?arguments[2]:null;this.loadingMsg=arguments.length>3?arguments[3]:null};c.CallbackSupport=function(e){this.refresh=e;this.module=b("#refresh-module-"+e.id)};c.CallbackSupport.prototype={errorHandler:function(f){var g=a.get(this.refresh.id);var e=AJS.format("There was a problem rendering this section: {0}",f);g.getErrorMessagePanel().html(e);g.updateRefreshVisibility(c.REFRESH_STATE_FAILED)},callback:function(e){c.replaceRefresh(this.refresh.id,e)}};var a=function(){if(arguments.length==1){this.id=arguments[0]}};var d=function(){if(arguments.length==1){this.id=arguments[0]}};a.prototype.getRefresh=function(){return new c.Refresh(this.id,this.getWikiMarkup(),this.getPageId(),this.getMacroPanel().html())};d.prototype.getSortable=function(){return new c.Sortable(this.id,b("#refresh-page-id-"+this.id).val(),b("#refresh-"+this.id).html())};a.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new a(f)};d.get=function(f){var e=b("#refresh-"+f);if(!e){return null}return new d(f)};c.Sortable=function(g,e,f){this.id=g;this.pageId=e;this.loadingMsg=f};d.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return d.get(e)})};a.getAll=function(){return b("div.refresh-macro").map(function(){var e=this.id.replace("refresh-","");return a.get(e)})};a.prototype.getErrorMessagePanel=function(){return b("#error-message-"+this.id)};a.prototype.removeDarkLayer=function(){b("#jim-dark-layout-"+this.id).remove()};a.prototype.displayDarkLayer=function(){var f=b("#refresh-module-"+this.id);var e=f.position();b("<div />",{id:"jim-dark-layout-"+this.id,"class":"jim-sortable-dark-layout",css:{top:e.top+"px",left:e.left+"px",width:f.width()+"px",height:f.height()+"px"}}).appendTo(f.parent())};a.prototype.getMacroPanel=function(){return b("#refresh-"+this.id)};d.prototype.getMacroPanel=function(){return b("#refresh-"+this.id).val()};a.prototype.getContentModule=function(){return b("#refresh-module-"+this.id)};a.prototype.getPageId=function(){return b("#refresh-page-id-"+this.id).val()};d.prototype.getPageId=function(){return b("#refresh-page-id-"+this.id).val()};a.prototype.getWikiMarkup=function(){return b("#refresh-wiki-"+this.id).val()};a.prototype.getRefreshButton=function(){return b("#refresh-issues-button-"+this.id)};d.prototype.getHeadersTable=function(){return b("#jira-issues-"+this.id+" .jira-tablesorter-header")};a.prototype.getRefreshLink=function(){return b("#refresh-issues-link-"+this.id)};a.prototype.getJiraIssuesArea=function(){return b("#jira-issues-"+this.id)};a.prototype.getIssuesCountArea=function(){return b("#total-issues-count-"+this.id)};a.prototype.updateRefreshVisibility=function(e){if(e===c.REFRESH_STATE_STARTED){this.displayDarkLayer()}else{if(e===c.REFRESH_STATE_FAILED){this.getRefreshButton().show();this.getRefreshLink().show();this.removeDarkLayer()}else{if(e===c.REFRESH_STATE_DONE){this.removeDarkLayer()}}}};b(function(){c.init()})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'resources/flexigrid/flexigrid.js' */
(function($){$.addFlex=function(t,p){if(t.grid){return false}p=$.extend({height:200,width:"auto",striped:true,novstripe:false,minwidth:30,minheight:80,resizable:true,url:false,method:"POST",dataType:"xml",errormsg:"Connection Error",usepager:false,nowrap:true,page:1,total:1,useRp:true,rp:15,rpOptions:[10,15,20,25,40],title:false,pagestat:"Displaying {from} to {to} of {total} items",procmsg:"Processing, please wait ...",query:"",qtype:"",nomsg:"No items",minColToggle:1,showToggleBtn:true,hideOnSubmit:true,autoload:true,blockOpacity:0.5,onToggleCol:false,onChangeSort:false,onSuccess:false,onSubmit:false,onReload:false},p);$(t).show().attr({cellPadding:0,cellSpacing:0,border:0}).removeAttr("width");var g={hset:{},rePosDrag:function(){var cdleft=0-this.hDiv.scrollLeft;if(this.hDiv.scrollLeft>0){cdleft-=Math.floor(p.cgwidth/2)}$(g.cDrag).css({top:g.hDiv.offsetTop+1});var cdpad=this.cdpad;$("div",g.cDrag).hide();$("thead tr:first th:visible",this.hDiv).each(function(){var n=$("thead tr:first th:visible",g.hDiv).index(this);var cdpos=parseInt($("div",this).width());var ppos=cdpos;if(cdleft==0){cdleft-=Math.floor(p.cgwidth/2)}cdpos=cdpos+cdleft+cdpad;$("div:eq("+n+")",g.cDrag).css({left:cdpos+"px"}).show();cdleft=cdpos})},fixHeight:function(newH){newH=false;if(!newH){newH=$(g.bDiv).height()}var hdHeight=$(this.hDiv).height();$("div",this.cDrag).each(function(){$(this).height(newH+hdHeight)});var nd=parseInt($(g.nDiv).height());if(nd>newH){$(g.nDiv).height(newH).width(200)}else{$(g.nDiv).height("auto").width("auto")}$(g.block).css({height:newH,marginBottom:(newH*-1)});var hrH=g.bDiv.offsetTop+newH;if(p.height!="auto"&&p.resizable){hrH=g.vDiv.offsetTop}$(g.rDiv).css({height:hrH})},dragStart:function(dragtype,e,obj){if(dragtype=="colresize"){$(g.nDiv).hide();$(g.nBtn).hide();var n=$("div",this.cDrag).index(obj);var ow=$("th:visible div:eq("+n+")",this.hDiv).width();$(obj).addClass("dragging").siblings().hide();$(obj).prev().addClass("dragging").show();this.colresize={startX:e.pageX,ol:parseInt(obj.style.left),ow:ow,n:n};$("body").css("cursor","col-resize")}else{if(dragtype=="vresize"){var hgo=false;$("body").css("cursor","row-resize");if(obj){hgo=true;$("body").css("cursor","col-resize")}this.vresize={h:p.height,sy:e.pageY,w:p.width,sx:e.pageX,hgo:hgo}}else{if(dragtype=="colMove"){$(g.nDiv).hide();$(g.nBtn).hide();this.hset=$(this.hDiv).offset();this.hset.right=this.hset.left+$("table",this.hDiv).width();this.hset.bottom=this.hset.top+$("table",this.hDiv).height();this.dcol=obj;this.dcoln=$("th",this.hDiv).index(obj);this.colCopy=document.createElement("div");this.colCopy.className="colCopy";this.colCopy.innerHTML=obj.innerHTML;if($.browser.msie){this.colCopy.className="colCopy ie"}$(this.colCopy).css({position:"absolute","float":"left",display:"none",textAlign:obj.align});$("body").append(this.colCopy);$(this.cDrag).hide()}}}$("body").noSelect()},dragMove:function(e){if(this.colresize){var n=this.colresize.n;var diff=e.pageX-this.colresize.startX;var nleft=this.colresize.ol+diff;var nw=this.colresize.ow+diff;if(nw>p.minwidth){$("div:eq("+n+")",this.cDrag).css("left",nleft);this.colresize.nw=nw}}else{if(this.vresize){var v=this.vresize;var y=e.pageY;var diff=y-v.sy;if(!p.defwidth){p.defwidth=p.width}if(p.width!="auto"&&!p.nohresize&&v.hgo){var x=e.pageX;var xdiff=x-v.sx;var newW=v.w+xdiff;if(newW>p.defwidth){this.gDiv.style.width=newW+"px";p.width=newW}}var newH=v.h+diff;if((newH>p.minheight||p.height<p.minheight)&&!v.hgo){this.bDiv.style.height=newH+"px";p.height=newH;this.fixHeight(newH)}v=null}else{if(this.colCopy){$(this.dcol).addClass("thMove").removeClass("thOver");if(e.pageX>this.hset.right||e.pageX<this.hset.left||e.pageY>this.hset.bottom||e.pageY<this.hset.top){$("body").css("cursor","move")}else{$("body").css("cursor","pointer")}$(this.colCopy).css({top:e.pageY+10,left:e.pageX+20,display:"block"})}}}},dragEnd:function(){if(this.colresize){var n=this.colresize.n;var nw=this.colresize.nw;$("th:visible div:eq("+n+")",this.hDiv).css("width",nw);$("tr",this.bDiv).each(function(){$("td:visible div:eq("+n+")",this).css("width",nw)});this.hDiv.scrollLeft=this.bDiv.scrollLeft;$("div:eq("+n+")",this.cDrag).siblings().show();$(".dragging",this.cDrag).removeClass("dragging");this.rePosDrag();this.fixHeight();this.colresize=false}else{if(this.vresize){this.vresize=false}else{if(this.colCopy){$(this.colCopy).remove();if(this.dcolt!=null){if(this.dcoln>this.dcolt){$("th:eq("+this.dcolt+")",this.hDiv).before(this.dcol)}else{$("th:eq("+this.dcolt+")",this.hDiv).after(this.dcol)}this.switchCol(this.dcoln,this.dcolt);$(this.cdropleft).remove();$(this.cdropright).remove();this.rePosDrag()}this.dcol=null;this.hset=null;this.dcoln=null;this.dcolt=null;this.colCopy=null;$(".thMove",this.hDiv).removeClass("thMove");$(this.cDrag).show()}}}$("body").css("cursor","default");$("body").noSelect(false)},toggleCol:function(cid,visible){var ncol=$("th[axis='col"+cid+"']",this.hDiv)[0];var n=$("thead th",g.hDiv).index(ncol);var cb=$("input[value="+cid+"]",g.nDiv)[0];if(visible==null){visible=ncol.hide}if($("input:checked",g.nDiv).length<p.minColToggle&&!visible){return false}if(visible){ncol.hide=false;$(ncol).show();cb.checked=true}else{ncol.hide=true;$(ncol).hide();cb.checked=false}$("tbody tr",t).each(function(){if(visible){$("td:eq("+n+")",this).show()}else{$("td:eq("+n+")",this).hide()}});this.rePosDrag();if(p.onToggleCol){p.onToggleCol(cid,visible)}return visible},switchCol:function(cdrag,cdrop){$("tbody tr",t).each(function(){if(cdrag>cdrop){$("td:eq("+cdrop+")",this).before($("td:eq("+cdrag+")",this))}else{$("td:eq("+cdrop+")",this).after($("td:eq("+cdrag+")",this))}});if(cdrag>cdrop){$("tr:eq("+cdrop+")",this.nDiv).before($("tr:eq("+cdrag+")",this.nDiv))}else{$("tr:eq("+cdrop+")",this.nDiv).after($("tr:eq("+cdrag+")",this.nDiv))}if($.browser.msie&&$.browser.version<7){$("tr:eq("+cdrop+") input",this.nDiv)[0].checked=true}this.hDiv.scrollLeft=this.bDiv.scrollLeft},scroll:function(){this.hDiv.scrollLeft=this.bDiv.scrollLeft;this.rePosDrag()},addData:function(data){if(p.preProcess){data=p.preProcess(data)}$(".pReload",this.pDiv).removeClass("loading");this.loading=false;if(!data){$(".pPageStat",this.pDiv).html(p.errormsg);return false}if(p.dataType=="xml"){p.total=+$("rows total",data).text()}else{p.total=data.total}if(p.total==0){$("tr, a, td, div",t).unbind();$(t).empty();p.pages=1;p.page=1;this.buildpager();$(".pPageStat",this.pDiv).html(p.nomsg);return false}p.pages=Math.ceil(p.total/p.rp);if(p.dataType=="xml"){p.page=+$("rows page",data).text()}else{p.page=data.page}this.buildpager();var tbody=document.createElement("tbody");if(p.dataType=="json"){$.each(data.rows,function(i,row){var tr=document.createElement("tr");if(i%2&&p.striped){tr.className="erow"}if(row.id){tr.id="row"+row.id}$("thead tr:first th",g.hDiv).each(function(){var td=document.createElement("td");var idx=$(this).attr("axis").substr(3);td.align=this.align;td.innerHTML=row.cell[idx];td.nowrap=this.nowrap;$(tr).append(td);td=null});if($("thead",this.gDiv).length<1){for(idx=0;idx<cell.length;idx++){var td=document.createElement("td");td.innerHTML=row.cell[idx];$(tr).append(td);td=null}}$(tbody).append(tr);tr=null})}else{if(p.dataType=="xml"){i=1;$("rows row",data).each(function(){i++;var tr=document.createElement("tr");if(i%2&&p.striped){tr.className="erow"}var nid=$(this).attr("id");if(nid){tr.id="row"+nid}nid=null;var robj=this;$("thead tr:first th",g.hDiv).each(function(){var td=document.createElement("td");var idx=$(this).attr("axis").substr(3);td.align=this.align;td.innerHTML=$("cell:eq("+idx+")",robj).text();$(tr).append(td);td=null});if($("thead",this.gDiv).length<1){$("cell",this).each(function(){var td=document.createElement("td");td.innerHTML=$(this).text();$(tr).append(td);td=null})}$(tbody).append(tr);tr=null;robj=null})}}$("tr",t).unbind();$(t).empty();$(t).append(tbody);this.addCellProp();this.addRowProp();this.rePosDrag();if(p.onSuccess){p.onSuccess(data)}if(p.hideOnSubmit){$(g.block).remove()}this.hDiv.scrollLeft=this.bDiv.scrollLeft;if($.browser.opera){$(t).css("visibility","visible")}tbody=null;data=null;i=null},changeSort:function(th){if(this.loading){return true}$(g.nDiv).hide();$(g.nBtn).hide();if(p.sortname==$(th).attr("abbr")){if(p.sortorder=="asc"){p.sortorder="desc"}else{p.sortorder="asc"}}$(th).addClass("sorted").siblings().removeClass("sorted");$(".sdesc",this.hDiv).removeClass("sdesc");$(".sasc",this.hDiv).removeClass("sasc");$("div",th).addClass("s"+p.sortorder);p.sortname=$(th).attr("abbr");if(p.onChangeSort){p.onChangeSort(p.sortname,p.sortorder)}else{this.populate()}},buildpager:function(){$(".pcontrol input",this.pDiv).val(p.page);$(".pcontrol span",this.pDiv).html(p.pages);var r1=(p.page-1)*p.rp+1;var r2=r1+p.rp-1;if(p.total<r2){r2=p.total}var stat=p.pagestat;stat=stat.replace(/{from}/,r1);stat=stat.replace(/{to}/,r2);stat=stat.replace(/{total}/,p.total);$(".pPageStat",this.pDiv).html(stat);if(p.pages==1){var groupIndex=0;if(p.useRp){groupIndex--}if(p.searchitems){groupIndex--}$(".pGroup",g.pDiv).each(function(){if(groupIndex>=0&&groupIndex<3){$(this).css("opacity","0.3");$(".pButton",this).each(function(){$(this).css("cursor","default");$(this).hover(function(){$(this).css({border:"0px",width:"22px",height:"22px",cursor:"default"});$("span",this).each(function(){$(this).css({border:"0px",width:"22px",height:"22px",cursor:"default"})})},function(){})});$("input",this).each(function(){$(this).attr("readonly","true")})}groupIndex++})}else{$(g.gDiv).find(".pFirst, .pPrev").each(function(){if(p.page==1){$(this).removeClass("pBtnOver");$(this).css({cursor:"default",opacity:"0.3"})}else{$(this).css({cursor:"pointer",opacity:"1.0"})}});$(g.gDiv).find(".pLast, .pNext").each(function(){if(p.page==p.pages){$(this).removeClass("pBtnOver");$(this).css({cursor:"default",opacity:"0.3"})}else{$(this).css({cursor:"pointer",opacity:"1.0"})}})}},populate:function(){if(this.loading){return true}if(p.onSubmit){var gh=p.onSubmit();if(!gh){return false}}this.loading=true;if(!p.url){return false}$(".pPageStat",this.pDiv).html(p.procmsg);$(".pReload",this.pDiv).addClass("loading");$(g.block).css({top:g.bDiv.offsetTop});if(p.hideOnSubmit){$(this.gDiv).prepend(g.block)}if($.browser.opera){$(t).css("visibility","hidden")}if(!p.newp){p.newp=1}if(p.page>p.pages){p.page=p.pages}var param=[{name:"page",value:p.newp},{name:"rp",value:p.rp},{name:"sortname",value:p.sortname},{name:"sortorder",value:p.sortorder},{name:"query",value:p.query},{name:"qtype",value:p.qtype}];if(p.params){for(var pi=0;pi<p.params.length;pi++){param[param.length]=p.params[pi]}}$.ajax({type:p.method,url:p.url,data:param,dataType:"text",success:function(data){var obj=data;if(p.dataType=="json"&&$.isPlainObject&&!$.isPlainObject(data)){obj=eval("("+data+")")}g.addData(obj)},error:function(xmlhttprequest,textmsg,error){try{if(p.onError){p.onError(xmlhttprequest,textmsg,error)}}catch(e){}}})},doSearch:function(){p.query=$("input[name=q]",g.sDiv).val();p.qtype=$("select[name=qtype]",g.sDiv).val();p.newp=1;this.populate()},changePage:function(ctype){if(this.loading){return true}switch(ctype){case"first":p.newp=1;break;case"prev":if(p.page>1){p.newp=parseInt(p.page)-1}break;case"next":if(p.page<p.pages){p.newp=parseInt(p.page)+1}break;case"last":p.newp=p.pages;break;case"input":var nv=parseInt($(".pcontrol input",this.pDiv).val());if(isNaN(nv)){nv=1}if(nv<1){nv=1}else{if(nv>p.pages){nv=p.pages}}$(".pcontrol input",this.pDiv).val(nv);p.newp=nv;break}if(p.newp==p.page){return false}if(p.onChangePage){p.onChangePage(p.newp)}else{this.populate()}},addCellProp:function(){$("tbody tr td",g.bDiv).each(function(){var tdDiv=document.createElement("div");var n=$("td",$(this).parent()).index(this);var pth=$("th:eq("+n+")",g.hDiv).get(0);if(pth!=null){if(p.sortname==$(pth).attr("abbr")&&p.sortname){this.className="sorted"}$(tdDiv).css({textAlign:pth.align,width:$("div:first",pth)[0].style.width});if(pth.hide){$(this).css("display","none")}}if(this.nowrap==false){$(tdDiv).css("white-space","normal")}if(this.innerHTML==""){this.innerHTML="&nbsp;"}tdDiv.innerHTML=this.innerHTML;var prnt=$(this).parent()[0];var pid=false;if(prnt.id){pid=prnt.id.substr(3)}if(pth!=null){if(pth.process){pth.process(tdDiv,pid)}}$(this).empty().append(tdDiv).removeAttr("width")})},getCellDim:function(obj){var ht=parseInt($(obj).height());var pht=parseInt($(obj).parent().height());var wt=parseInt(obj.style.width);var pwt=parseInt($(obj).parent().width());var top=obj.offsetParent.offsetTop;var left=obj.offsetParent.offsetLeft;var pdl=parseInt($(obj).css("paddingLeft"));var pdt=parseInt($(obj).css("paddingTop"));return{ht:ht,wt:wt,top:top,left:left,pdl:pdl,pdt:pdt,pht:pht,pwt:pwt}},addRowProp:function(){$("tbody tr",g.bDiv).each(function(){$(this).click(function(e){var obj=(e.target||e.srcElement);if(obj.href||obj.type){return true}$(this).toggleClass("trSelected");if(p.singleSelect){$(this).siblings().removeClass("trSelected")}}).mousedown(function(e){if(e.shiftKey){$(this).toggleClass("trSelected");g.multisel=true;this.focus();$(g.gDiv).noSelect()}}).mouseup(function(){if(g.multisel){g.multisel=false;$(g.gDiv).noSelect(false)}}).hover(function(e){if(g.multisel){$(this).toggleClass("trSelected")}},function(){});if($.browser.msie&&$.browser.version<7){$(this).hover(function(){$(this).addClass("trOver")},function(){$(this).removeClass("trOver")})}})},pager:0};if(p.colModel){thead=document.createElement("thead");tr=document.createElement("tr");for(i=0;i<p.colModel.length;i++){var cm=p.colModel[i];var th=document.createElement("th");th.innerHTML=cm.display;if(cm.name&&cm.sortable){$(th).attr("abbr",cm.name)}$(th).attr("axis","col"+i);if(cm.align){th.align=cm.align}if(cm.width){$(th).attr("width",cm.width)}if(cm.hide){th.hide=true}if(cm.process){th.process=cm.process}if(cm.nowrap!=undefined){th.nowrap=cm.nowrap}else{th.nowrap=p.nowrap}$(tr).append(th)}$(thead).append(tr);$(t).prepend(thead)}g.options=p;g.gDiv=document.createElement("div");g.mDiv=document.createElement("div");g.hDiv=document.createElement("div");g.bDiv=document.createElement("div");g.vDiv=document.createElement("div");g.rDiv=document.createElement("div");g.cDrag=document.createElement("div");g.block=document.createElement("div");g.nDiv=document.createElement("div");g.nBtn=document.createElement("div");g.iDiv=document.createElement("div");g.tDiv=document.createElement("div");g.sDiv=document.createElement("div");if(p.usepager){g.pDiv=document.createElement("div")}g.hTable=document.createElement("table");g.gDiv.className="flexigrid";if(p.width!="auto"){g.gDiv.style.width=p.width+"px"}if($.browser.msie){$(g.gDiv).addClass("ie")}if(p.novstripe){$(g.gDiv).addClass("novstripe")}$(t).before(g.gDiv);$(g.gDiv).append(t);if(p.buttons){g.tDiv.className="tDiv";var tDiv2=document.createElement("div");tDiv2.className="tDiv2";for(i=0;i<p.buttons.length;i++){var btn=p.buttons[i];if(!btn.separator){var btnDiv=document.createElement("div");btnDiv.className="fbutton";btnDiv.innerHTML="<div><span>"+btn.name+"</span></div>";if(btn.bclass){$("span",btnDiv).addClass(btn.bclass).css({paddingLeft:20})}btnDiv.onpress=btn.onpress;btnDiv.name=btn.name;if(btn.onpress){$(btnDiv).click(function(){this.onpress(this.name,g.gDiv)})}$(tDiv2).append(btnDiv);if($.browser.msie&&$.browser.version<7){$(btnDiv).hover(function(){$(this).addClass("fbOver")},function(){$(this).removeClass("fbOver")})}}else{$(tDiv2).append("<div class='btnseparator'></div>")}}$(g.tDiv).append(tDiv2);$(g.tDiv).append("<div style='clear:both'></div>");$(g.gDiv).prepend(g.tDiv)}g.hDiv.className="hDiv";$(t).before(g.hDiv);g.hTable.cellPadding=0;g.hTable.cellSpacing=0;$(g.hDiv).append('<div class="hDivBox"></div>');$("div",g.hDiv).append(g.hTable);var thead=$("thead:first",t).get(0);if(thead){$(g.hTable).append(thead)}thead=null;if(!p.colmodel){var ci=0}$("thead tr:first th",g.hDiv).each(function(){var thdiv=document.createElement("div");if($(this).attr("abbr")){$(this).click(function(e){if(!$(this).hasClass("thOver")){return false}var obj=(e.target||e.srcElement);if(obj.href||obj.type){return true}g.changeSort(this)});if($(this).attr("abbr")==p.sortname){this.className="sorted";thdiv.className="s"+p.sortorder}}if(this.hide){$(this).hide()}if(!p.colmodel){$(this).attr("axis","col"+ci++)}$(thdiv).css({textAlign:this.align,width:this.width+"px"});thdiv.innerHTML=this.innerHTML;$(this).empty().append(thdiv).removeAttr("width").mousedown(function(e){g.dragStart("colMove",e,this)}).hover(function(){if(!g.colresize&&!$(this).hasClass("thMove")&&!g.colCopy){$(this).addClass("thOver")}if($(this).attr("abbr")!=p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr")){$("div",this).addClass("s"+p.sortorder)}else{if($(this).attr("abbr")==p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr")){var no="";if(p.sortorder=="asc"){no="desc"}else{no="asc"}$("div",this).removeClass("s"+p.sortorder).addClass("s"+no)}}if(g.colCopy){var n=$("th",g.hDiv).index(this);if(n==g.dcoln){return false}if(n<g.dcoln){$(this).append(g.cdropleft)}else{$(this).append(g.cdropright)}g.dcolt=n}else{if(!g.colresize){var nv=$("th:visible",g.hDiv).index(this);var onl=parseInt($("div:eq("+nv+")",g.cDrag).css("left"));var nw=parseInt($(g.nBtn).width())+parseInt($(g.nBtn).css("borderLeftWidth"));nl=onl-nw+Math.floor(p.cgwidth/2);$(g.nDiv).hide();$(g.nBtn).hide();$(g.nBtn).css({left:nl,top:g.hDiv.offsetTop}).show();var ndw=parseInt($(g.nDiv).width());$(g.nDiv).css({top:g.bDiv.offsetTop});if((nl+ndw)>$(g.gDiv).width()){$(g.nDiv).css("left",onl-ndw+1)}else{$(g.nDiv).css("left",nl)}if($(this).hasClass("sorted")){$(g.nBtn).addClass("srtd")}else{$(g.nBtn).removeClass("srtd")}}}},function(){$(this).removeClass("thOver");if($(this).attr("abbr")!=p.sortname){$("div",this).removeClass("s"+p.sortorder)}else{if($(this).attr("abbr")==p.sortname){var no="";if(p.sortorder=="asc"){no="desc"}else{no="asc"}$("div",this).addClass("s"+p.sortorder).removeClass("s"+no)}}if(g.colCopy){$(g.cdropleft).remove();$(g.cdropright).remove();g.dcolt=null}})});g.bDiv.className="bDiv";$(t).before(g.bDiv);$(g.bDiv).css({height:(p.height=="auto")?"auto":p.height+"px"}).scroll(function(e){g.scroll()}).append(t);if(p.height=="auto"){$("table",g.bDiv).addClass("autoht")}g.addCellProp();g.addRowProp();var cdcol=$("thead tr:first th:first",g.hDiv).get(0);if(cdcol!=null){g.cDrag.className="cDrag";g.cdpad=0;g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderLeftWidth")))?0:parseInt($("div",cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderRightWidth")))?0:parseInt($("div",cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingLeft")))?0:parseInt($("div",cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingRight")))?0:parseInt($("div",cdcol).css("paddingRight")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderLeftWidth")))?0:parseInt($(cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderRightWidth")))?0:parseInt($(cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingLeft")))?0:parseInt($(cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingRight")))?0:parseInt($(cdcol).css("paddingRight")));$(g.bDiv).before(g.cDrag);var cdheight=$(g.bDiv).height();var hdheight=$(g.hDiv).height();$(g.cDrag).css({top:-hdheight+"px"});$("thead tr:first th",g.hDiv).each(function(){var cgDiv=document.createElement("div");$(g.cDrag).append(cgDiv);if(!p.cgwidth){p.cgwidth=$(cgDiv).width()}$(cgDiv).css({height:cdheight+hdheight}).mousedown(function(e){g.dragStart("colresize",e,this)});if($.browser.msie&&$.browser.version<7){g.fixHeight($(g.gDiv).height());$(cgDiv).hover(function(){g.fixHeight();$(this).addClass("dragging")},function(){if(!g.colresize){$(this).removeClass("dragging")}})}})}if(p.striped){$("tbody tr:odd",g.bDiv).addClass("erow")}if(p.resizable&&p.height!="auto"){g.vDiv.className="vGrip";$(g.vDiv).mousedown(function(e){g.dragStart("vresize",e)}).html("<span></span>");$(g.bDiv).after(g.vDiv)}if(p.resizable&&p.width!="auto"&&!p.nohresize){g.rDiv.className="hGrip";$(g.rDiv).mousedown(function(e){g.dragStart("vresize",e,true)}).html("<span></span>").css("height",$(g.gDiv).height());if($.browser.msie&&$.browser.version<7){$(g.rDiv).hover(function(){$(this).addClass("hgOver")},function(){$(this).removeClass("hgOver")})}$(g.gDiv).append(g.rDiv)}if(p.usepager){g.pDiv.className="pDiv";g.pDiv.innerHTML='<div class="pDiv2"></div>';$(g.bDiv).after(g.pDiv);var html=' <div class="pGroup"> <div class="pFirst pButton"><span></span></div><div class="pPrev pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pcontrol">Page <input type="text" size="4" value="1" /> of <span> 1 </span></span></div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pNext pButton"><span></span></div><div class="pLast pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"> <div class="pReload pButton"><span></span></div> </div> <div class="btnseparator"></div> <div class="pGroup"><span class="pPageStat"></span></div>';$("div",g.pDiv).html(html);$(".pReload",g.pDiv).click(function(){if(p.onReload){var gh=p.onReload();if(!gh){return false}}g.populate()});$(".pFirst",g.pDiv).click(function(){g.changePage("first")});$(".pPrev",g.pDiv).click(function(){g.changePage("prev")});$(".pNext",g.pDiv).click(function(){g.changePage("next")});$(".pLast",g.pDiv).click(function(){g.changePage("last")});$(".pcontrol input",g.pDiv).keydown(function(e){if(e.keyCode==13){g.changePage("input")}});$(".pReload",g.pDiv).hover(function(){$(this).addClass("pBtnOver")},function(){$(this).removeClass("pBtnOver")});$(".pFirst, .pPrev").hover(function(){if(!(p.page&&p.page==1)){$(this).addClass("pBtnOver")}},function(){$(this).removeClass("pBtnOver")});$(".pLast, .pNext").hover(function(){if(!(p.page&&p.pages&&p.page==p.pages)){$(this).addClass("pBtnOver")}},function(){$(this).removeClass("pBtnOver")});if(p.useRp){var opt="";for(var nx=0;nx<p.rpOptions.length;nx++){if(p.rp==p.rpOptions[nx]){sel='selected="selected"'}else{sel=""}opt+="<option value='"+p.rpOptions[nx]+"' "+sel+" >"+p.rpOptions[nx]+"&nbsp;&nbsp;</option>"}$(".pDiv2",g.pDiv).prepend("<div class='pGroup'><select name='rp'>"+opt+"</select></div> <div class='btnseparator'></div>");$("select",g.pDiv).change(function(){if(p.onRpChange){p.onRpChange(+this.value)}else{p.newp=1;p.rp=+this.value;g.populate()}})}if(p.searchitems){$(".pDiv2",g.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>");$(".pSearch",g.pDiv).click(function(){$(g.sDiv).slideToggle("fast",function(){$(".sDiv:visible input:first",g.gDiv).trigger("focus")})});g.sDiv.className="sDiv";sitems=p.searchitems;var sopt="";for(var s=0;s<sitems.length;s++){if(p.qtype==""&&sitems[s].isdefault==true){p.qtype=sitems[s].name;sel='selected="selected"'}else{sel=""}sopt+="<option value='"+sitems[s].name+"' "+sel+" >"+sitems[s].display+"&nbsp;&nbsp;</option>"}if(p.qtype==""){p.qtype=sitems[0].name}$(g.sDiv).append("<div class='sDiv2'>Quick Search <input type='text' size='30' name='q' class='qsbox' /> <select name='qtype'>"+sopt+"</select> <input type='button' value='Clear' /></div>");$("input[name=q],select[name=qtype]",g.sDiv).keydown(function(e){if(e.keyCode==13){g.doSearch()}});$("input[value=Clear]",g.sDiv).click(function(){$("input[name=q]",g.sDiv).val("");p.query="";g.doSearch()});$(g.bDiv).after(g.sDiv)}}$(g.pDiv,g.sDiv).append("<div style='clear:both'></div>");if(p.title){g.mDiv.className="mDiv";g.mDiv.innerHTML='<div class="ftitle">'+p.title+"</div>";$(g.gDiv).prepend(g.mDiv);if(p.showTableToggleBtn){$(g.mDiv).append('<div class="ptogtitle" title="Minimize/Maximize Table"><span></span></div>');$("div.ptogtitle",g.mDiv).click(function(){$(g.gDiv).toggleClass("hideBody");$(this).toggleClass("vsble")})}}g.cdropleft=document.createElement("span");g.cdropleft.className="cdropleft";g.cdropright=document.createElement("span");g.cdropright.className="cdropright";g.block.className="gBlock";var gh=$(g.bDiv).height();var gtop=g.bDiv.offsetTop;$(g.block).css({width:g.bDiv.style.width,height:gh,background:"white",position:"relative",marginBottom:(gh*-1),zIndex:1,top:gtop,left:"0px"});$(g.block).fadeTo(0,p.blockOpacity);if($("th",g.hDiv).length){g.nDiv.className="nDiv";g.nDiv.innerHTML="<table cellpadding='0' cellspacing='0'><tbody></tbody></table>";$(g.nDiv).css({marginBottom:(gh*-1),display:"none",top:gtop}).noSelect();var cn=0;$("th div",g.hDiv).each(function(){var kcol=$("th[axis='col"+cn+"']",g.hDiv)[0];var chk='checked="checked"';if(kcol.style.display=="none"){chk=""}$("tbody",g.nDiv).append('<tr><td class="ndcol1"><input type="checkbox" '+chk+' class="togCol" value="'+cn+'" /></td><td class="ndcol2">'+this.innerHTML+"</td></tr>");cn++});if($.browser.msie&&$.browser.version<7){$("tr",g.nDiv).hover(function(){$(this).addClass("ndcolover")},function(){$(this).removeClass("ndcolover")})}$("td.ndcol2",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<=p.minColToggle&&$(this).prev().find("input")[0].checked){return false}return g.toggleCol($(this).prev().find("input").val())});$("input.togCol",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<p.minColToggle&&this.checked==false){return false}$(this).parent().next().trigger("click")});$(g.gDiv).prepend(g.nDiv);$(g.nBtn).addClass("nBtn").html("<div></div>").attr("title","Hide/Show Columns").click(function(){$(g.nDiv).toggle();return true});if(p.showToggleBtn){$(g.gDiv).prepend(g.nBtn)}}$(g.iDiv).addClass("iDiv").css({display:"none"});$(g.bDiv).append(g.iDiv);$(g.bDiv).hover(function(){$(g.nDiv).hide();$(g.nBtn).hide()},function(){if(g.multisel){g.multisel=false}});$(g.gDiv).hover(function(){},function(){$(g.nDiv).hide();$(g.nBtn).hide()});$(document).mousemove(function(e){g.dragMove(e)}).mouseup(function(e){g.dragEnd()}).hover(function(){},function(){g.dragEnd()});if($.browser.msie&&$.browser.version<7){$(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv",g.gDiv).css({width:"100%"});$(g.gDiv).addClass("ie6");if(p.width!="auto"){$(g.gDiv).addClass("ie6fullwidthbug")}}g.rePosDrag();g.fixHeight();t.p=p;t.grid=g;if(p.url&&p.autoload){g.populate()}return t};var docloaded=false;$(document).ready(function(){docloaded=true});$.fn.flexigrid=function(p){return this.each(function(){if(!docloaded){$(this).hide();var t=this;$(document).ready(function(){$.addFlex(t,p)})}else{$.addFlex(this,p)}})};$.fn.flexReload=function(p){return this.each(function(){if(this.grid&&this.p.url){this.grid.populate()}})};$.fn.flexOptions=function(p){return this.each(function(){if(this.grid){$.extend(this.p,p)}})};$.fn.flexToggleCol=function(cid,visible){return this.each(function(){if(this.grid){this.grid.toggleCol(cid,visible)}})};$.fn.flexAddData=function(data){return this.each(function(){if(this.grid){this.grid.addData(data)}})};$.fn.noSelect=function(p){if(p==null){prevent=true}else{prevent=p}if(prevent){return this.each(function(){if($.browser.msie||$.browser.safari){$(this).bind("selectstart",function(){return false})}else{if($.browser.mozilla){$(this).css("MozUserSelect","none");$("body").trigger("focus")}else{if($.browser.opera){$(this).bind("mousedown",function(){return false})}else{$(this).attr("unselectable","on")}}}})}else{return this.each(function(){if($.browser.msie||$.browser.safari){$(this).unbind("selectstart")}else{if($.browser.mozilla){$(this).css("MozUserSelect","inherit")}else{if($.browser.opera){$(this).unbind("mousedown")}else{$(this).removeAttr("unselectable","on")}}}})}}})(jQuery);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The JIRA server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues. ")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f>1){e.text(AJS.format("{0} issues",f))}else{e.text(AJS.format("{0} issue",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


