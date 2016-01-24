$(document).ready(function () {

	function reset($elem) {
	    $elem.before($elem.clone(true));
	    var $newElem = $elem.prev();
	    $elem.remove();
	    return $newElem;
	}

    $("#pray-btn").on("click", function() {
    	var $this = $(this);
    	$this.clone().removeClass(); 
    	$this.removeClass();
    	$this = reset($this);
        $(document).snow({ SnowImage: "final_cat_food.gif" });
    })

});