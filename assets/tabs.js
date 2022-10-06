window.addEventListener("load", function() {
	
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.nav-tabs > li");
  function myTabClicks(tabClickEvent, tabs, container) {
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
        //container
        var containerBlock;
        containerBlock = container ? container : document;
        var activePane = containerBlock.querySelector(activePaneId);
		activePane.classList.add("active");
	}
   /*
	for (i = 0; i < myTabs.length; i++) {
        console.log(myTabs[i]);
		myTabs[i].addEventListener("click", myTabClicks)
	}
  */
     myTabs.forEach(function (tab) {
        tab.addEventListener('click', function(e){
          myTabClicks(e, myTabs)
        });
     });

  //tabs only in the lightbox
  var chartLink = document.querySelector(".size-chart__link");
  if (chartLink){
    chartLink.addEventListener('click', function(e){
        container = document.querySelector(".fslightbox-container");
        tabs = container.querySelectorAll("ul.nav-tabs > li");
       tabs.forEach(function (tab) {
          tab.addEventListener('click', function(e){
            myTabClicks(e, tabs, container);
          });
       });
    });
  }

  fsLightboxInstances['first-lightbox'].props.onInit = (fsLightbox) => {
    let closeLink = document.querySelector('.size-chart__close-link');
    console.log(closeLink, 'aaa')
    
    closeLink.addEventListener('click', function() {
      // container = document.querySelector(".fslightbox-container");
        console.log(this, 'mm')
        fsLightboxInstances['first-lightbox'].close(0);
      })
  }
});