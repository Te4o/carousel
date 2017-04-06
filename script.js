
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// var IntervalID;
// var overwriteLengh;
// var selectedIndexes = [];

// $(document).ready(function () {
//     $('#slide1_controls').on('click', 'span', function () {

//         if (selectedIndexes.length > 0) {
//             var visibleImages = $('#slide1_images img').not(':hidden');

//             for (i = 0; i < visibleImages.length; i++) {
//                 if ($(this).attr('id') == $(visibleImages[i]).attr('id')) {
//                     var selectedFinalIndex = i;
//                     break;
//                 }
//             }
//         } else {
//             var selectedFinalIndex = $(this).index();
//         }

//         $("#slide1_images").css("transform", "translateX(" + (selectedFinalIndex) * -500 + "px)");
//         // $("img").css("opacity", "1");
//         $("#slide1_controls span").removeClass("selected");
//         $(this).addClass("selected");

//         var currElementID = $(this).index();

//         setTimeout(function () {
//             changeOpacities(currElementID);
//         }, 1000);
//     });

//     /** autoplay */
//     intervalID = startCarousel(5000);

//     $('#slide1_images img').on('click', function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//         captionText.innerHTML = this.alt;

//         clearInterval(intervalID);
//         var index = $(this).index();

//         $('#slide1_controls span')[index].click();
//     });

//     $('#slide1_controls span')[0].click();

//     $('.apply_your_filter button').on('click', function () {

//         if ($(this).hasClass('selected-button')) {
//             $(this).removeClass('selected-button');
//             var mode = 'deselected';
//         } else {
//             $(this).addClass('selected-button');
//             var mode = 'selected';
//         }

//         var classSelectedFirst = $(this).parent().find('.selected-button').first().attr('id');

//         // selected button
//         var elID = $(this).attr('id');
//         console.log("ELEMENETID" + elID);
//         overwriteLengh = $('#slide1_images .' + elID).length;

//         if (mode == 'selected') {

//             // Current element is selected, always gonna be greater than 0(1).
//             // If more elements are selected, no actions are performed on them.

//             //selectedIndexes.push($(this).index());
//             selectedIndexes.push($('#slide1_images .' + elID).first().index());

//             var otherElementsSelected = $(this).parent().find('.selected-button');
//             var othersSelected = otherElementsSelected.length;


//             $('#slide1_images .' + elID).css('display', '');
//             $('#slide1_controls .' + elID).css('display', '');

//             if (othersSelected == 1) {
//                 var allemenets = $('#slide1_images .' + elID);
//                 selectedIndexes = [];
//                 for (i = 0; i < allemenets.length; i++) {
//                     selectedIndexes.push($(allemenets[i]).index());
//                 }
//                 //selectedIndexes = [$('#slide1_images .' + elID).first().index()];
//                 $('#slide1_images img').not('.' + elID).css('display', 'none');
//                 $('#slide1_controls span').not('.' + elID).css('display', 'none');
//             } else {
//                 for (var i = 0; i < othersSelected.length; i++) {

//                     subElements = $('#slide1_images .' + otherElementsSelected.attr['id']);

//                     for (i = 0; i < subElements.length; i++) {

//                         if (jQuery.inArray($(subElements[i]).index(), selectedIndexes) === -1) {
//                             selectedIndexes.push($(subElements[i]).index());
//                         }
//                     }
//                 }
//             }
//             console.log(selectedIndexes);
//         } else {

//             var allemenets = $('#slide1_images .' + elID);
//             selectedIndexes = [];
//             for (i = 0; i < allemenets.length; i++) {
//                 if (jQuery.inArray($(allemenets[i]).index(), selectedIndexes) !== -1) {
//                     selectedIndexes.splice(selectedIndexes.indexOf($(allemenets[i]).index()));
//                 }
//             }
//             console.log(selectedIndexes);
//         }
//         $('#slide1_controls .' + classSelectedFirst).first().click();
//     });
// });


// // for the modal image
// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
//     intervalID = startCarousel(3000);
// }

// function changeOpacities(withoutImgID) {
//     var withoutObj = $('#slide1_images img')[withoutImgID];
//     console.log($(withoutObj).attr('id'));
//     $(withoutObj).css('opacity', '1');
//     $('#slide1_images img').not(withoutObj).css('opacity', '0.5');
// }

// function nextImageTransition() {

//     var currPoint = $('#slide1_controls .selected');
//     var allImgLength = $('#slide1_controls span').length;

//     var currImgID = $(currPoint).index();

//     console.log("CURRENT IMAGE ID: " + currImgID);

//     if (selectedIndexes.length == 1) {
//         clearInterval(intervalID);
//         return;
//     }

//     if (selectedIndexes.length > 0) {
//         allImgLength = selectedIndexes.length;

//         var index = selectedIndexes.indexOf(currImgID);
//         if (index + 1 > (selectedIndexes.length - 1)) {
//             nextImgID = selectedIndexes[0];
//         } else {
//             nextImgID = selectedIndexes[index + 1];
//         }
//     } else {
//         if (currImgID + 1 >= allImgLength) {
//             nextImgID = 0;
//         } else {
//             nextImgID = currImgID + 1;
//         }
//     }

//     console.log(allImgLength);
//     $('#slide1_controls span')[nextImgID].click();
// }

// function startCarousel(intervalMillisec) {
//     //TODO : Validate if intervalMillisec is number.
//     return setInterval(function () {
//         nextImageTransition();
//     }, intervalMillisec);
// }
