        $(function(){
            window.prettyPrint && prettyPrint();
        })

        $(".metro").metro();

        $(window).resize(reflow);
        
        $(function(){
            reflow();            
        });

        function sortable() {
            $(".metro-section").sortable({
                connectWith: ".metro-section",
                revert: true,
                tolerance: "pointer",
                "opacity": 0.6,
                helper: "clone",
                stop: function (event, ui) {
					reflow();
                }
            });
        }

        function reflow() {
            var metroSectionHeight = $(window).height() - $(".metro-sections").offset().top;
		    //console.log(metroSectionHeight);
            $(".tile").each(function(){
                var tile = $(this);
                var pos = tile.offset();

                if (pos.top + tile.height() > metroSectionHeight)
                {
                    var mySection = tile.parents(".metro-section");
                    var nextSection = mySection.next();

                    //console.log(mySection.parent());

                    tile.addClass("pushed");

                    if (nextSection.length > 0)
                    {
                        //console.log("test1");
                        nextSection.prepend(tile);
                        return window.setTimeout(reflow, 100);
                    }
                    else
                    {
                        //console.log("test2");
                        nextSection = $('<div class="metro-section" />');
                        nextSection.appendTo(mySection.parent());
                        nextSection.prepend(tile);
                        return window.setTimeout(reflow, 100);
                    }
                }
            });

            sortable();

            //var lastSection = $(".metro-section").last();
            //$(".metro-sections").width(lastSection.offset().left + lastSection.width());
        }
