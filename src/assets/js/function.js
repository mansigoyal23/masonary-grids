$(document).ready(function(){
    $('#reverseItems').on('click', function(){
        var list = $(".ng-masonry-wrapper .ng-masonry-item").get().reverse();
        $(".ng-masonry-wrapper").empty();
        $.each(list, function(i){
            $(".ng-masonry-wrapper").append('<ng-masonry-grid-item class="ng-masonry-item">'+list[i].innerHTML+'</ng-masonry-grid-item>');
        });
    });
});